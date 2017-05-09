/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$61$$) {
  $oj$$61$$.$PagingTableDataSource$ = function $$oj$$61$$$$PagingTableDataSource$$($dataSource$$3$$) {
    if (!($dataSource$$3$$ instanceof $oj$$61$$.$TableDataSource$)) {
      throw Error($oj$$61$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$61$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$3$$;
    this.$_startIndex$ = 0;
    this.$_endIndex$ = -1;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$61$$.$PagingTableDataSource$, $oj$$61$$);
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$PagingTableDataSource$, $oj$$61$$.$TableDataSource$, "oj.PagingTableDataSource");
  $oj$$61$$.$PagingTableDataSource$.prototype.Init = function $$oj$$61$$$$PagingTableDataSource$$$Init$() {
    $oj$$61$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$61$$.$PagingTableDataSource$.prototype.Init});
  $oj$$61$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$61$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$61$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$61$$.$PagingTableDataSource$.prototype.getPage = function $$oj$$61$$$$PagingTableDataSource$$$getPage$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_getPageFromStartIndex$();
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPage", {getPage:$oj$$61$$.$PagingTableDataSource$.prototype.getPage});
  $oj$$61$$.$PagingTableDataSource$.prototype.setPage = function $$oj$$61$$$$PagingTableDataSource$$$setPage$($value$$293$$, $options$$337$$) {
    $options$$337$$ = $options$$337$$ || {};
    $value$$293$$ = parseInt($value$$293$$, 10);
    try {
      $oj$$61$$.$PagingTableDataSource$.$superclass$.handleEvent.call(this, $oj$$61$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$293$$, previousPage:this.$_getPageFromStartIndex$()});
    } catch ($err$$22$$) {
      return Promise.reject(null);
    }
    var $previousPage$$1$$ = this.$_getPageFromStartIndex$();
    this.$_pageSize$ = null != $options$$337$$.pageSize ? $options$$337$$.pageSize : this.$_pageSize$;
    $options$$337$$.pageSize = this.$_pageSize$;
    $options$$337$$.startIndex = $value$$293$$ * this.$_pageSize$;
    this.$_startIndex$ = null == $options$$337$$.startIndex ? this.$_startIndex$ : $options$$337$$.startIndex;
    this.$_fetchType$ = "page";
    var $self$$190$$ = this;
    return new Promise(function($resolve$$52$$, $reject$$48$$) {
      0 < $self$$190$$.$_pageSize$ ? $self$$190$$.$dataSource$.fetch($options$$337$$).then(function($result$$68$$) {
        $result$$68$$.startIndex = 0;
        $self$$190$$.$_updateEndIndex$($result$$68$$.data.length);
        $oj$$61$$.$PagingTableDataSource$.$superclass$.handleEvent.call($self$$190$$, $oj$$61$$.$PagingModel$.$EventType$.PAGE, {page:$self$$190$$.$_getPageFromStartIndex$(), previousPage:$previousPage$$1$$});
        $resolve$$52$$(null);
      }, function() {
        $self$$190$$.$_startIndex$ = $previousPage$$1$$ * $self$$190$$.$_pageSize$;
        $reject$$48$$(null);
      }) : $resolve$$52$$(null);
    });
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPage", {setPage:$oj$$61$$.$PagingTableDataSource$.prototype.setPage});
  $oj$$61$$.$PagingTableDataSource$.prototype.getStartItemIndex = function $$oj$$61$$$$PagingTableDataSource$$$getStartItemIndex$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_startIndex$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$61$$.$PagingTableDataSource$.prototype.getStartItemIndex});
  $oj$$61$$.$PagingTableDataSource$.prototype.getEndItemIndex = function $$oj$$61$$$$PagingTableDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$61$$.$PagingTableDataSource$.prototype.getEndItemIndex});
  $oj$$61$$.$PagingTableDataSource$.prototype.getPageCount = function $$oj$$61$$$$PagingTableDataSource$$$getPageCount$() {
    var $totalSize$$1$$ = this.totalSize();
    return-1 == $totalSize$$1$$ ? -1 : Math.ceil($totalSize$$1$$ / this.$_pageSize$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPageCount", {getPageCount:$oj$$61$$.$PagingTableDataSource$.prototype.getPageCount});
  $oj$$61$$.$PagingTableDataSource$.prototype.at = function $$oj$$61$$$$PagingTableDataSource$$$at$($index$$266$$, $options$$338$$) {
    return this.$dataSource$.at($index$$266$$, $options$$338$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$61$$.$PagingTableDataSource$.prototype.at});
  $oj$$61$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$61$$$$PagingTableDataSource$$$fetch$($options$$339$$) {
    $options$$339$$ = $options$$339$$ || {};
    if (null == $options$$339$$.startIndex) {
      return this.setPage(this.getPage());
    }
    this.$_fetchType$ = "loadMore";
    this.$_startIndex$ = null == $options$$339$$.startIndex ? this.$_startIndex$ : $options$$339$$.startIndex;
    var $pageSize$$8$$ = null != $options$$339$$.pageSize ? $options$$339$$.pageSize : this.$_pageSize$;
    $options$$339$$.pageSize = $pageSize$$8$$;
    $options$$339$$.startIndex = this.$_startIndex$;
    var $self$$191$$ = this;
    return new Promise(function($resolve$$53$$, $reject$$49$$) {
      0 < $pageSize$$8$$ ? $self$$191$$.$dataSource$.fetch($options$$339$$).then(function($result$$69$$) {
        $self$$191$$.$_updateEndIndex$($result$$69$$.data.length);
        $resolve$$53$$($result$$69$$);
      }, function($e$$102$$) {
        $reject$$49$$($e$$102$$);
      }) : $resolve$$53$$(null);
    });
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$61$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$61$$.$PagingTableDataSource$.prototype.get = function $$oj$$61$$$$PagingTableDataSource$$$get$($id$$56$$, $options$$340$$) {
    return this.$dataSource$.get($id$$56$$, $options$$340$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$61$$.$PagingTableDataSource$.prototype.get});
  $oj$$61$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$61$$$$PagingTableDataSource$$$getCapability$($feature$$12$$) {
    return this.$dataSource$.getCapability($feature$$12$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$61$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$61$$.$PagingTableDataSource$.prototype.on = function $$oj$$61$$$$PagingTableDataSource$$$on$($eventType$$47$$, $eventHandler$$3$$) {
    var $self$$192$$ = this, $dataSource$$4$$ = this.$dataSource$;
    if ($eventType$$47$$ == $oj$$61$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$4$$ = function $$ev$$4$$$($event$$546$$) {
        $self$$192$$.$_handleSyncEvent$($event$$546$$, $eventHandler$$3$$);
      };
      $dataSource$$4$$.on($eventType$$47$$, $ev$$4$$);
      return $ev$$4$$;
    }
    if ($eventType$$47$$ == $oj$$61$$.$TableDataSource$.$EventType$.ADD || $eventType$$47$$ == $oj$$61$$.$TableDataSource$.$EventType$.REMOVE || $eventType$$47$$ == $oj$$61$$.$TableDataSource$.$EventType$.CHANGE) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$547$$) {
        $self$$192$$.$_handleRowEvent$($event$$547$$, $eventHandler$$3$$);
      }, $dataSource$$4$$.on($eventType$$47$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$47$$ == $oj$$61$$.$TableDataSource$.$EventType$.REFRESH || $eventType$$47$$ == $oj$$61$$.$TableDataSource$.$EventType$.RESET) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$548$$) {
        $self$$192$$.$_startIndex$ = 0;
        $eventHandler$$3$$($event$$548$$);
      }, $dataSource$$4$$.on($eventType$$47$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$47$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGE || $eventType$$47$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGECOUNT) {
      $oj$$61$$.$PagingTableDataSource$.$superclass$.on.call(this, $eventType$$47$$, $eventHandler$$3$$);
    } else {
      $dataSource$$4$$.on($eventType$$47$$, $eventHandler$$3$$);
    }
    return $eventHandler$$3$$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$61$$.$PagingTableDataSource$.prototype.on});
  $oj$$61$$.$PagingTableDataSource$.prototype.off = function $$oj$$61$$$$PagingTableDataSource$$$off$($eventType$$48$$, $eventHandler$$4$$) {
    return $eventType$$48$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGE || $eventType$$48$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGECOUNT ? ($oj$$61$$.$PagingTableDataSource$.$superclass$.off.call(this, $eventType$$48$$, $eventHandler$$4$$), $eventHandler$$4$$) : this.$dataSource$.off($eventType$$48$$, $eventHandler$$4$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$61$$.$PagingTableDataSource$.prototype.off});
  $oj$$61$$.$PagingTableDataSource$.prototype.sort = function $$oj$$61$$$$PagingTableDataSource$$$sort$($criteria$$5$$) {
    return this.$dataSource$.sort($criteria$$5$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$61$$.$PagingTableDataSource$.prototype.sort});
  $oj$$61$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$61$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$61$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$61$$.$PagingTableDataSource$.prototype.totalSizeConfidence = function $$oj$$61$$$$PagingTableDataSource$$$totalSizeConfidence$() {
    return this.$dataSource$.totalSizeConfidence();
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$61$$.$PagingTableDataSource$.prototype.totalSizeConfidence});
  $oj$$61$$.$PagingTableDataSource$.prototype.$_getPageFromStartIndex$ = function $$oj$$61$$$$PagingTableDataSource$$$$_getPageFromStartIndex$$() {
    return 0 < this.$_pageSize$ ? Math.floor(this.$_startIndex$ / this.$_pageSize$) : 0;
  };
  $oj$$61$$.$PagingTableDataSource$.prototype.$_handleRowEvent$ = function $$oj$$61$$$$PagingTableDataSource$$$$_handleRowEvent$$($event$$549$$, $eventHandler$$5$$) {
    var $ignoreRows$$ = [], $i$$379$$;
    for ($i$$379$$ = 0;$i$$379$$ < $event$$549$$.indexes.length;$i$$379$$++) {
      var $rowIdx$$40$$ = $event$$549$$.indexes[$i$$379$$];
      void 0 !== $rowIdx$$40$$ && ($rowIdx$$40$$ -= this.$_startIndex$, (0 > $rowIdx$$40$$ || $rowIdx$$40$$ >= this.$_startIndex$ + this.$_pageSize$) && $ignoreRows$$.push($i$$379$$));
    }
    if (0 < $ignoreRows$$.length) {
      for ($ignoreRows$$.sort(function($a$$119$$, $b$$73$$) {
        return $a$$119$$ - $b$$73$$;
      }), $i$$379$$ = $ignoreRows$$.length - 1;0 <= $i$$379$$;$i$$379$$--) {
        $event$$549$$.data.splice($ignoreRows$$[$i$$379$$], 1), $event$$549$$.indexes.splice($ignoreRows$$[$i$$379$$], 1), $event$$549$$.keys.splice($ignoreRows$$[$i$$379$$], 1);
      }
    }
    this.$_updateEndIndex$($event$$549$$.data.length);
    $event$$549$$.startIndex = this.$_startIndex$;
    $eventHandler$$5$$($event$$549$$);
  };
  $oj$$61$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$61$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$550$$, $eventHandler$$6$$) {
    $event$$550$$.startIndex != this.$_startIndex$ && (this.$_startIndex$ = $event$$550$$.startIndex);
    this.$_updateEndIndex$($event$$550$$.data.length);
    if ("page" == this.$_fetchType$) {
      var $clonedEvent$$ = {};
      $oj$$61$$.$CollectionUtils$.$copyInto$($clonedEvent$$, $event$$550$$);
      $clonedEvent$$.startIndex = 0;
      $eventHandler$$6$$($clonedEvent$$);
    } else {
      $eventHandler$$6$$($event$$550$$);
    }
  };
  $oj$$61$$.$PagingTableDataSource$.prototype.$_updateEndIndex$ = function $$oj$$61$$$$PagingTableDataSource$$$$_updateEndIndex$$($resultSize$$) {
    var $totalSize$$2$$ = this.totalSize();
    0 < $totalSize$$2$$ ? (this.$_endIndex$ = this.$_startIndex$ + this.$_pageSize$ - 1, this.$_endIndex$ = this.$_endIndex$ > $totalSize$$2$$ - 1 ? $totalSize$$2$$ - 1 : this.$_endIndex$) : this.$_endIndex$ = 0 < $resultSize$$ ? this.$_startIndex$ + $resultSize$$ - 1 : -1;
  };
  $oj$$61$$.$PagingTableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingTableDataSource.EventType", $oj$$61$$.$PagingTableDataSource$.$EventType$, $oj$$61$$);
  $oj$$61$$.$PagingModel$ = function $$oj$$61$$$$PagingModel$$() {
  };
  $goog$exportPath_$$("PagingModel", $oj$$61$$.$PagingModel$, $oj$$61$$);
  $oj$$61$$.$PagingModel$.prototype.getPage = function $$oj$$61$$$$PagingModel$$$getPage$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPage", {getPage:$oj$$61$$.$PagingModel$.prototype.getPage});
  $oj$$61$$.$PagingModel$.prototype.setPage = function $$oj$$61$$$$PagingModel$$$setPage$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.setPage", {setPage:$oj$$61$$.$PagingModel$.prototype.setPage});
  $oj$$61$$.$PagingModel$.prototype.getStartItemIndex = function $$oj$$61$$$$PagingModel$$$getStartItemIndex$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$61$$.$PagingModel$.prototype.getStartItemIndex});
  $oj$$61$$.$PagingModel$.prototype.getEndItemIndex = function $$oj$$61$$$$PagingModel$$$getEndItemIndex$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$61$$.$PagingModel$.prototype.getEndItemIndex});
  $oj$$61$$.$PagingModel$.prototype.getPageCount = function $$oj$$61$$$$PagingModel$$$getPageCount$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPageCount", {getPageCount:$oj$$61$$.$PagingModel$.prototype.getPageCount});
  $oj$$61$$.$PagingModel$.prototype.totalSize = function $$oj$$61$$$$PagingModel$$$totalSize$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSize", {totalSize:$oj$$61$$.$PagingModel$.prototype.totalSize});
  $oj$$61$$.$PagingModel$.prototype.totalSizeConfidence = function $$oj$$61$$$$PagingModel$$$totalSizeConfidence$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$61$$.$PagingModel$.prototype.totalSizeConfidence});
  $oj$$61$$.$PagingModel$.$EventType$ = {BEFOREPAGE:"beforePage", PAGE:"page", PAGECOUNT:"pageCount"};
  $goog$exportPath_$$("PagingModel.EventType", $oj$$61$$.$PagingModel$.$EventType$, $oj$$61$$);
});
