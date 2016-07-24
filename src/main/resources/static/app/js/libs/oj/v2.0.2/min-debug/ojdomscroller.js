/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$39$$, $$$$36$$) {
  $oj$$39$$.$DomScroller$ = function $$oj$$39$$$$DomScroller$$($element$$138$$, $datasource$$, $options$$310$$) {
    $options$$310$$ = $options$$310$$ || {};
    this.$_data$ = $datasource$$;
    this.$_element$ = $element$$138$$;
    this.$_fetchSize$ = $options$$310$$.fetchSize;
    this.$_fetchSize$ = 0 < this.$_fetchSize$ ? this.$_fetchSize$ : 25;
    this.$_maxCount$ = $options$$310$$.maxCount;
    this.$_maxCount$ = 0 < this.$_maxCount$ ? this.$_maxCount$ : 500;
    this.$_rowCount$ = 0;
    this.$_successCallback$ = $options$$310$$.success;
    this.$_errorCallback$ = $options$$310$$.error;
    this.$_registerDataSourceEventListeners$();
    $$$$36$$(this.$_element$).on("scroll.domscroller", function($event$$464_maxScrollTop$$2$$) {
      var $scrollTop$$7$$ = $$$$36$$($event$$464_maxScrollTop$$2$$.target).scrollTop();
      $event$$464_maxScrollTop$$2$$ = $$$$36$$($event$$464_maxScrollTop$$2$$.target)[0].scrollHeight - $$$$36$$($event$$464_maxScrollTop$$2$$.target)[0].clientHeight;
      0 < $event$$464_maxScrollTop$$2$$ && this.$_handleScrollerScrollTop$($scrollTop$$7$$, $event$$464_maxScrollTop$$2$$);
    }.bind(this));
  };
  $oj$$39$$.$DomScroller$.prototype.destroy = function $$oj$$39$$$$DomScroller$$$destroy$() {
    this.$_unregisterDataSourceEventListeners$();
    $$$$36$$(this.$_element$).off("scroll.domscroller");
  };
  $oj$$39$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.destroy", {destroy:$oj$$39$$.$DomScroller$.prototype.destroy});
  $oj$$39$$.$DomScroller$.prototype.checkViewport = function $$oj$$39$$$$DomScroller$$$checkViewport$() {
    return 0 < this.$_element$[0].clientHeight && !this.$_checkOverflow$() ? this.$_fetchMoreRows$() : Promise.resolve(null);
  };
  $oj$$39$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.checkViewport", {checkViewport:$oj$$39$$.$DomScroller$.prototype.checkViewport});
  $oj$$39$$.$DomScroller$.prototype.$_handleScrollerScrollTop$ = function $$oj$$39$$$$DomScroller$$$$_handleScrollerScrollTop$$($scrollTop$$8$$, $maxScrollTop$$3$$) {
    if (1 >= $maxScrollTop$$3$$ - $scrollTop$$8$$) {
      var $self$$157$$ = this;
      this.$_fetchMoreRows$().then(function($result$$61$$) {
        null != $self$$157$$.$_successCallback$ && $self$$157$$.$_successCallback$($result$$61$$);
      }, this.$_errorCallback$);
    }
  };
  $oj$$39$$.$DomScroller$.prototype.$_checkOverflow$ = function $$oj$$39$$$$DomScroller$$$$_checkOverflow$$() {
    var $element$$139$$ = this.$_element$;
    return $element$$139$$[0].scrollHeight > $element$$139$$[0].clientHeight + 1 ? !0 : !1;
  };
  $oj$$39$$.$DomScroller$.prototype.$_fetchMoreRows$ = function $$oj$$39$$$$DomScroller$$$$_fetchMoreRows$$() {
    if (this.$_fetchPromise$) {
      return this.$_fetchPromise$;
    }
    var $remainingCount$$ = this.$_maxCount$ - this.$_rowCount$;
    if (0 < $remainingCount$$) {
      var $pageSize$$6$$ = this.$_fetchSize$, $self$$158$$ = this;
      $remainingCount$$ < this.$_fetchSize$ && ($pageSize$$6$$ = $remainingCount$$);
      var $fetchPromise$$2$$ = this.$_fetchNext$({pageSize:$pageSize$$6$$});
      return this.$_fetchPromise$ = new Promise(function($resolve$$42$$) {
        $fetchPromise$$2$$.then(function($result$$62$$) {
          $self$$158$$.$_fetchPromise$ = null;
          null != $result$$62$$ && ($self$$158$$.$_rowCount$ = $result$$62$$.data.length + $result$$62$$.startIndex, $remainingCount$$ < $self$$158$$.$_fetchSize$ && ($result$$62$$.maxCount = $self$$158$$.$_maxCount$, $result$$62$$.maxCountLimit = !0));
          $resolve$$42$$($result$$62$$);
        });
      });
    }
    return Promise.resolve({maxCount:this.$_maxCount$, maxCountLimit:!0});
  };
  $oj$$39$$.$DomScroller$.prototype.$_fetchNext$ = function $$oj$$39$$$$DomScroller$$$$_fetchNext$$($options$$311$$) {
    $options$$311$$ = $options$$311$$ || {};
    var $pageSize$$7$$ = $options$$311$$.pageSize;
    this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$7$$ : $pageSize$$7$$;
    if (-1 == this.$_data$.totalSize() || this.$_data$.totalSize() > this.$_currentStartIndex$) {
      var $self$$159$$ = this;
      return new Promise(function($resolve$$43$$, $reject$$39$$) {
        $self$$159$$.$_data$.fetch({startIndex:$self$$159$$.$_currentStartIndex$, pageSize:$pageSize$$7$$}).then(function($result$$63$$) {
          $resolve$$43$$($result$$63$$);
        }, function() {
          $reject$$39$$(null);
        });
      });
    }
    return Promise.resolve();
  };
  $oj$$39$$.$DomScroller$.prototype.$_handleDataReset$ = function $$oj$$39$$$$DomScroller$$$$_handleDataReset$$() {
    this.$_currentStartIndex$ = null;
    this.$_rowCount$ = 0;
  };
  $oj$$39$$.$DomScroller$.prototype.$_handleDataSync$ = function $$oj$$39$$$$DomScroller$$$$_handleDataSync$$($event$$465$$) {
    this.$_currentStartIndex$ = $event$$465$$.startIndex;
    this.$_rowCount$ = $event$$465$$.data.length + this.$_currentStartIndex$;
  };
  $oj$$39$$.$DomScroller$.prototype.$_registerDataSourceEventListeners$ = function $$oj$$39$$$$DomScroller$$$$_registerDataSourceEventListeners$$() {
    var $data$$150$$ = this.$_data$;
    if (null != $data$$150$$) {
      this.$_unregisterDataSourceEventListeners$();
      this.$_dataSourceEventHandlers$ = [];
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataSync$.bind(this)});
      var $i$$346$$, $ev$$2$$;
      for ($i$$346$$ = 0;$i$$346$$ < this.$_dataSourceEventHandlers$.length;$i$$346$$++) {
        ($ev$$2$$ = $data$$150$$.on(this.$_dataSourceEventHandlers$[$i$$346$$].eventType, this.$_dataSourceEventHandlers$[$i$$346$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$346$$].eventHandler = $ev$$2$$);
      }
    }
  };
  $oj$$39$$.$DomScroller$.prototype.$_unregisterDataSourceEventListeners$ = function $$oj$$39$$$$DomScroller$$$$_unregisterDataSourceEventListeners$$() {
    var $data$$151$$ = this.$_data$;
    if (null != this.$_dataSourceEventHandlers$ && null != $data$$151$$) {
      var $i$$347$$;
      for ($i$$347$$ = 0;$i$$347$$ < this.$_dataSourceEventHandlers$.length;$i$$347$$++) {
        $data$$151$$.off(this.$_dataSourceEventHandlers$[$i$$347$$].eventType, this.$_dataSourceEventHandlers$[$i$$347$$].eventHandler);
      }
    }
  };
});
