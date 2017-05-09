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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$79$$) {
  $oj$$79$$.$FlattenedTreeTableDataSource$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$($data$$182$$, $options$$404$$) {
    $options$$404$$ = $options$$404$$ || {};
    if (!($data$$182$$ instanceof $oj$$79$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$79$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$79$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$_data$ = $data$$182$$;
    this.$_eventHandlers$ = [];
    this.$_startIndex$ = 0;
    this.$_nodeSetList$ = [];
    null == this.$_data$.$getOption$("fetchSize") && (this.$_data$.$getFetchSize$ = function $this$$_data$$$getFetchSize$$() {
      return-1;
    });
    var $self$$225$$ = this;
    this.$_data$.$insertRows$ = function $this$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$486_insertAtKey$$1$$, $nodeSet$$35$$) {
      var $row$$52$$, $rowIdx$$41$$, $rowKey$$41$$, $rowArray$$14$$ = [], $keyArray$$6$$ = [], $indexArray$$5$$ = [];
      for ($i$$486_insertAtKey$$1$$ = 0;$i$$486_insertAtKey$$1$$ < $nodeSet$$35$$.$getCount$();$i$$486_insertAtKey$$1$$++) {
        $row$$52$$ = $nodeSet$$35$$.getData($i$$486_insertAtKey$$1$$), $rowKey$$41$$ = $nodeSet$$35$$.getMetadata($i$$486_insertAtKey$$1$$).key, $rowIdx$$41$$ = $insertAtIndex$$2$$ + $i$$486_insertAtKey$$1$$, $self$$225$$.$_nodeSetList$[$rowIdx$$41$$] = {}, $self$$225$$.$_nodeSetList$[$rowIdx$$41$$].nodeSet = $nodeSet$$35$$, $self$$225$$.$_nodeSetList$[$rowIdx$$41$$].startIndex = $insertAtIndex$$2$$, $rowArray$$14$$.push($row$$52$$), $keyArray$$6$$.push($rowKey$$41$$), $indexArray$$5$$.push($rowIdx$$41$$), 
        $self$$225$$.$_rows$.data.splice($rowIdx$$41$$, 0, $row$$52$$), $self$$225$$.$_rows$.keys.splice($rowIdx$$41$$, 0, $rowKey$$41$$), $self$$225$$.$_rows$.indexes.splice($rowIdx$$41$$, 0, $rowIdx$$41$$);
      }
      $self$$225$$.$_pageSize$ || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call($self$$225$$, $oj$$79$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$14$$, keys:$keyArray$$6$$, indexes:$indexArray$$5$$});
      $self$$225$$.$_realignRowIndices$();
      $self$$225$$.$_pageSize$ && setTimeout(function() {
        $self$$225$$.$_data$.refresh();
        $self$$225$$.$_rows$ = null;
        $self$$225$$.fetch();
      }, 0);
    };
    this.$_data$.$removeRows$ = function $this$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$487$$, $rowIdx$$42$$, $rowArray$$15$$ = [], $keyArray$$7$$ = [], $indexArray$$6$$ = [];
      for ($i$$487$$ = 0;$i$$487$$ < $rowKeys$$2$$.length;$i$$487$$++) {
        $rowIdx$$42$$ = $rowKeys$$2$$[$i$$487$$].index - $i$$487$$, $rowArray$$15$$.push(""), $keyArray$$7$$.push(""), $indexArray$$6$$.push($rowIdx$$42$$), $self$$225$$.$_rows$.data.splice($rowIdx$$42$$, 1), $self$$225$$.$_rows$.keys.splice($rowIdx$$42$$, 1), $self$$225$$.$_rows$.indexes.splice($rowIdx$$42$$, 1);
      }
      $self$$225$$.$_pageSize$ || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call($self$$225$$, $oj$$79$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$15$$, keys:$keyArray$$7$$, indexes:$indexArray$$6$$});
      $self$$225$$.$_realignRowIndices$();
      $self$$225$$.$_pageSize$ && setTimeout(function() {
        $self$$225$$.$_data$.refresh();
        $self$$225$$.$_rows$ = null;
        $self$$225$$.fetch();
      }, 0);
    };
    this.Init();
    if (null != $options$$404$$ && ("enabled" == $options$$404$$.startFetch || null == $options$$404$$.startFetch) || null == $options$$404$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$79$$.$FlattenedTreeTableDataSource$, $oj$$79$$);
  $oj$$79$$.$Object$.$createSubclass$($oj$$79$$.$FlattenedTreeTableDataSource$, $oj$$79$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$79$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$_data$;
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$fetch$($options$$405$$) {
    $options$$405$$ = $options$$405$$ || {};
    return "init" != $options$$405$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$405$$) : Promise.resolve();
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$at$($index$$298$$) {
    var $row$$54$$;
    $row$$54$$ = 0 > $index$$298$$ || $index$$298$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$298$$], index:$index$$298$$, key:this.$_rows$.keys[$index$$298$$]};
    return new Promise(function($resolve$$67$$) {
      $resolve$$67$$($row$$54$$);
    });
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$42$$) {
    this.$_data$.collapse($rowKey$$42$$);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$43$$) {
    this.$_data$.expand($rowKey$$43$$);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$get$() {
    $oj$$79$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$on$($eventType$$56$$, $eventHandler$$7$$) {
    if ("expand" == $eventType$$56$$ || "collapse" == $eventType$$56$$) {
      this.$_data$.on($eventType$$56$$, $eventHandler$$7$$);
    } else {
      $oj$$79$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$56$$, $eventHandler$$7$$);
    }
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$off$($eventType$$57$$, $eventHandler$$8$$) {
    "expand" == $eventType$$57$$ || "collapse" == $eventType$$57$$ ? this.$_data$.off($eventType$$57$$, $eventHandler$$8$$) : $oj$$79$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$57$$, $eventHandler$$8$$);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$12$$) {
    if (null == $criteria$$12$$) {
      return Promise.resolve();
    }
    var $self$$227$$ = this;
    $criteria$$12$$.axis = "column";
    return new Promise(function($resolve$$68$$, $reject$$63$$) {
      $self$$227$$.$_data$.getWrappedDataSource().sort($criteria$$12$$, {success:function() {
        setTimeout(function() {
          $self$$227$$.$_data$.refresh();
          $self$$227$$.$_rows$ = null;
          var $result$$80$$ = {header:$criteria$$12$$.key, direction:$criteria$$12$$.direction};
          $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call($self$$227$$, $oj$$79$$.$TableDataSource$.$EventType$.SORT, $result$$80$$);
          $resolve$$68$$($result$$80$$);
        }, 0);
      }.bind(this), error:function($status$$33$$) {
        $reject$$63$$($status$$33$$);
      }.bind(this)});
    });
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return-1;
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$totalSizeConfidence$() {
    return "unknown";
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_getMetadata$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_getMetadata$$($index$$299$$) {
    return this.$_nodeSetList$[$index$$299$$].nodeSet.getMetadata($index$$299$$ - this.$_nodeSetList$[$index$$299$$].startIndex);
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_fetchInternal$$($options$$408$$) {
    $options$$408$$ = $options$$408$$ || {};
    this.$_startFetch$($options$$408$$);
    this.$_startIndex$ = null == $options$$408$$.startIndex ? this.$_startIndex$ : $options$$408$$.startIndex;
    var $rangeCount$$1_rowArray$$16$$ = Number.MAX_VALUE;
    this.$_pageSize$ = null == $options$$408$$.pageSize ? this.$_pageSize$ : $options$$408$$.pageSize;
    null != this.$_pageSize$ && ($rangeCount$$1_rowArray$$16$$ = this.$_pageSize$);
    var $startIndex$$32$$ = this.$_startIndex$;
    if (null != this.$_rows$) {
      if (null != this.$_pageSize$) {
        var $endIndex$$8_result$$81$$ = this.$_rows$.data.length - 1;
        if (this.$_startIndex$ + this.$_pageSize$ - 1 <= $endIndex$$8_result$$81$$) {
          var $endIndex$$8_result$$81$$ = $oj$$79$$.$FlattenedTreeTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), $rangeCount$$1_rowArray$$16$$ = [], $keyArray$$8$$ = [], $i$$488$$;
          for ($i$$488$$ = this.$_startIndex$;$i$$488$$ <= $endIndex$$8_result$$81$$;$i$$488$$++) {
            $rangeCount$$1_rowArray$$16$$[$i$$488$$ - this.$_startIndex$] = this.$_rows$.data[$i$$488$$], $keyArray$$8$$[$i$$488$$ - this.$_startIndex$] = this.$_getMetadata$($i$$488$$).key;
          }
          $endIndex$$8_result$$81$$ = {data:$rangeCount$$1_rowArray$$16$$, keys:$keyArray$$8$$, startIndex:this.$_startIndex$};
          this.$_endFetch$($options$$408$$, $endIndex$$8_result$$81$$, null);
          return Promise.resolve($endIndex$$8_result$$81$$);
        }
        this.$_startIndex$ <= $endIndex$$8_result$$81$$ && ($startIndex$$32$$ = $endIndex$$8_result$$81$$ + 1);
      } else {
        this.$_data$.refresh(), this.$_rows$ = null;
      }
    } else {
      $startIndex$$32$$ = 0;
    }
    var $rangeOption$$ = {start:$startIndex$$32$$, count:$rangeCount$$1_rowArray$$16$$}, $self$$228$$ = this;
    return new Promise(function($resolve$$69$$, $reject$$64$$) {
      $self$$228$$.$_data$.$fetchRows$($rangeOption$$, {success:function($endIndex$$9_nodeSet$$37_result$$82$$) {
        $self$$228$$.$_handleFetchRowsSuccess$($endIndex$$9_nodeSet$$37_result$$82$$, $startIndex$$32$$);
        $options$$408$$.refresh = !0;
        $endIndex$$9_nodeSet$$37_result$$82$$ = $oj$$79$$.$FlattenedTreeTableDataSource$.$_getEndIndex$($self$$228$$.$_rows$, $self$$228$$.$_startIndex$, $self$$228$$.$_pageSize$);
        var $rowArray$$17$$ = [], $keyArray$$9$$ = [], $i$$489$$;
        for ($i$$489$$ = $self$$228$$.$_startIndex$;$i$$489$$ <= $endIndex$$9_nodeSet$$37_result$$82$$;$i$$489$$++) {
          $rowArray$$17$$[$i$$489$$ - $self$$228$$.$_startIndex$] = $self$$228$$.$_rows$.data[$i$$489$$], $keyArray$$9$$[$i$$489$$ - $self$$228$$.$_startIndex$] = $self$$228$$.$_getMetadata$($i$$489$$).key;
        }
        $endIndex$$9_nodeSet$$37_result$$82$$ = {data:$rowArray$$17$$, keys:$keyArray$$9$$, startIndex:$self$$228$$.$_startIndex$};
        $self$$228$$.$_endFetch$($options$$408$$, $endIndex$$9_nodeSet$$37_result$$82$$, null);
        $resolve$$69$$($endIndex$$9_nodeSet$$37_result$$82$$);
      }.bind(this), error:function($error$$52$$) {
        $self$$228$$.$_endFetch$($options$$408$$, null, $error$$52$$);
        $reject$$64$$($error$$52$$);
      }.bind(this)});
    });
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_handleFetchRowsSuccess$$($nodeSet$$38$$, $startIndex$$33$$) {
    var $i$$490$$, $rowIdx$$43$$;
    for ($i$$490$$ = 0;$i$$490$$ < $nodeSet$$38$$.$getCount$();$i$$490$$++) {
      $rowIdx$$43$$ = $startIndex$$33$$ + $i$$490$$, this.$_nodeSetList$[$rowIdx$$43$$] = {}, this.$_nodeSetList$[$rowIdx$$43$$].nodeSet = $nodeSet$$38$$, this.$_nodeSetList$[$rowIdx$$43$$].startIndex = $startIndex$$33$$;
    }
    this.$_rows$ || (this.$_rows$ = {}, this.$_rows$.data = [], this.$_rows$.keys = [], this.$_rows$.indexes = []);
    $oj$$79$$.$FlattenedTreeTableDataSource$.$_getRowArray$($nodeSet$$38$$, this, this.$_rows$);
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_startFetch$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_startFetch$$($options$$409$$) {
    $options$$409$$.silent || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$79$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$409$$.startIndex});
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_endFetch$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_endFetch$$($options$$410$$, $result$$83$$, $error$$53$$) {
    null != $error$$53$$ ? $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$79$$.$TableDataSource$.$EventType$.ERROR, $error$$53$$) : $options$$410$$.silent || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$79$$.$TableDataSource$.$EventType$.SYNC, $result$$83$$);
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.$_getEndIndex$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$_getEndIndex$$($rows$$8$$, $startIndex$$34$$, $pageSize$$13$$) {
    var $endIndex$$10$$ = $rows$$8$$.data.length - 1;
    0 < $pageSize$$13$$ && ($endIndex$$10$$ = $startIndex$$34$$ + $pageSize$$13$$ - 1, $endIndex$$10$$ = $endIndex$$10$$ > $rows$$8$$.data.length - 1 ? $rows$$8$$.data.length - 1 : $endIndex$$10$$);
    return $endIndex$$10$$;
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.$_getRowArray$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$_getRowArray$$($nodeSet$$39$$, $endIndex$$11_rowSet$$, $rows$$9$$) {
    $endIndex$$11_rowSet$$ = $nodeSet$$39$$.$getCount$() - 1;
    var $i$$491$$;
    for ($i$$491$$ = $nodeSet$$39$$.$getStart$();$i$$491$$ <= $endIndex$$11_rowSet$$;$i$$491$$++) {
      var $row$$55$$ = $nodeSet$$39$$.getData($i$$491$$);
      $rows$$9$$.data[$i$$491$$] = $row$$55$$;
      $rows$$9$$.keys[$i$$491$$] = "";
      $rows$$9$$.indexes[$i$$491$$] = $i$$491$$;
    }
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$492$$ = 0;$i$$492$$ < this.$_rows$.data.length;$i$$492$$++) {
      this.$_rows$.indexes[$i$$492$$] = $i$$492$$;
    }
  };
});
