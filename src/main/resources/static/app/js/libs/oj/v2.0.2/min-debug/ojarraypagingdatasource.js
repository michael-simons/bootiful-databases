/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common"], function($oj$$72$$, $$$$66$$, $ko$$8$$) {
  $oj$$72$$.$ArrayPagingDataSource$ = function $$oj$$72$$$$ArrayPagingDataSource$$($data$$178$$) {
    this.data = $data$$178$$;
    this.current = 0;
    this.Init();
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$72$$.$ArrayPagingDataSource$, $oj$$72$$);
  $oj$$72$$.$Object$.$createSubclass$($oj$$72$$.$ArrayPagingDataSource$, $oj$$72$$.$DataSource$, "oj.ArrayPagingDataSource");
  $oj$$72$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$72$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$72$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$72$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$($options$$369$$) {
    $options$$369$$ = $options$$369$$ || {};
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$458$$ = 0;$i$$458$$ < this.$dataWindow$.length;$i$$458$$++) {
      this.$dataWindow$[$i$$458$$] = this.data[this.current + $i$$458$$];
    }
    this.$_refreshObservableDataWindow$();
    this.$_endIndex$ = this.$_startIndex$ + this.$dataWindow$.length - 1;
    $options$$369$$.silent || this.handleEvent("sync", {data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$459$$ = 0;$i$$459$$ < this.$dataWindow$.length;$i$$459$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$459$$]);
      }
    }
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$72$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$54$$, $event$$612$$) {
    return $oj$$72$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$54$$, $event$$612$$);
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$8$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getPage = function $$oj$$72$$$$ArrayPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPage", {getPage:$oj$$72$$.$ArrayPagingDataSource$.prototype.getPage});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.setPage = function $$oj$$72$$$$ArrayPagingDataSource$$$setPage$($value$$312$$, $options$$370$$) {
    $options$$370$$ = $options$$370$$ || {};
    $value$$312$$ = parseInt($value$$312$$, 10);
    try {
      $oj$$72$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$72$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$312$$, previousPage:this.$_page$});
    } catch ($err$$29$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$370$$.pageSize ? $options$$370$$.pageSize : this.pageSize;
    $options$$370$$.startIndex = $value$$312$$ * this.pageSize;
    var $previousPage$$4$$ = this.$_page$;
    this.$_page$ = $value$$312$$;
    this.$_startIndex$ = $options$$370$$.startIndex;
    var $self$$212$$ = this;
    return new Promise(function($resolve$$65$$, $reject$$60$$) {
      $self$$212$$.$_fetchInternal$($options$$370$$).then(function() {
        $oj$$72$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call($self$$212$$, $oj$$72$$.$PagingModel$.$EventType$.PAGE, {page:$self$$212$$.$_page$, previousPage:$previousPage$$4$$});
        $resolve$$65$$(null);
      }, function() {
        $self$$212$$.$_page$ = $previousPage$$4$$;
        $self$$212$$.$_startIndex$ = $self$$212$$.$_page$ * $self$$212$$.pageSize;
        $reject$$60$$(null);
      });
    });
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.setPage", {setPage:$oj$$72$$.$ArrayPagingDataSource$.prototype.setPage});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getStartItemIndex = function $$oj$$72$$$$ArrayPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$72$$.$ArrayPagingDataSource$.prototype.getStartItemIndex});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getEndItemIndex = function $$oj$$72$$$$ArrayPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$72$$.$ArrayPagingDataSource$.prototype.getEndItemIndex});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getPageCount = function $$oj$$72$$$$ArrayPagingDataSource$$$getPageCount$() {
    var $totalSize$$6$$ = this.totalSize();
    return-1 == $totalSize$$6$$ ? -1 : Math.ceil($totalSize$$6$$ / this.pageSize);
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$72$$.$ArrayPagingDataSource$.prototype.getPageCount});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$72$$$$ArrayPagingDataSource$$$fetch$($options$$371_opts$$40$$) {
    $options$$371_opts$$40$$ = $options$$371_opts$$40$$ || {};
    if (void 0 !== $options$$371_opts$$40$$.pageSize && void 0 !== $options$$371_opts$$40$$.startIndex) {
      if (!this.$_hasMore$()) {
        return Promise.resolve();
      }
      this.$currentPageSize$ = $options$$371_opts$$40$$.startIndex + $options$$371_opts$$40$$.pageSize;
    }
    this.$_refreshDataWindow$(null);
    return Promise.resolve();
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$72$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_fetchInternal$$($options$$372$$) {
    var $opts$$41$$ = $options$$372$$ || {};
    void 0 !== $opts$$41$$.startIndex && (this.current = $opts$$41$$.startIndex);
    void 0 !== $opts$$41$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$41$$.pageSize);
    this.$_refreshDataWindow$($options$$372$$);
    return Promise.resolve({data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_hasMore$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_setPageSize$$($n$$39$$) {
    this.$currentPageSize$ = this.pageSize = $n$$39$$;
    this.$_refreshDataWindow$(null);
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$72$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$72$$$$ArrayPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$72$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getCapability = function $$oj$$72$$$$ArrayPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getCapability", {getCapability:$oj$$72$$.$ArrayPagingDataSource$.prototype.getCapability});
});
