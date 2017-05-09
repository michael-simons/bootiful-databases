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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$65$$, $$$$59$$) {
  $oj$$65$$.$CollectionTableDataSource$ = function $$oj$$65$$$$CollectionTableDataSource$$($data$$165$$, $options$$346$$) {
    this.data = {};
    if (!($data$$165$$ instanceof $oj$$65$$.$Collection$)) {
      throw Error($oj$$65$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$65$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$65$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$165$$, $options$$346$$);
    this.$_collection$ = $data$$165$$;
    this.$_addCollectionEventListeners$();
    this.Init();
    if (null != $options$$346$$ && ("enabled" == $options$$346$$.startFetch || null == $options$$346$$.startFetch) || null == $options$$346$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$65$$.$CollectionTableDataSource$, $oj$$65$$);
  $oj$$65$$.$Object$.$createSubclass$($oj$$65$$.$CollectionTableDataSource$, $oj$$65$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$65$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$65$$$$CollectionTableDataSource$$$Init$() {
    $oj$$65$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$65$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$65$$.$CollectionTableDataSource$.prototype.at = function $$oj$$65$$$$CollectionTableDataSource$$$at$($index$$268$$, $options$$347$$) {
    $options$$347$$ = $options$$347$$ || {};
    $options$$347$$.deferred = !0;
    var $model$$99$$ = this.$_collection$.at($index$$268$$, $options$$347$$), $self$$198$$ = this;
    $self$$198$$.$_isFetchingForAt$ = !0;
    var $row$$43$$;
    return new Promise(function($resolve$$57$$, $reject$$52$$) {
      null != $model$$99$$ ? $model$$99$$.then(function($resolvedModel$$) {
        $self$$198$$.$_isFetchingForAt$ = !1;
        $row$$43$$ = {data:$resolvedModel$$.attributes, index:$index$$268$$, key:$resolvedModel$$.id};
        $resolve$$57$$($row$$43$$);
      }, function($e$$104$$) {
        $self$$198$$.$_isFetchingForAt$ = !1;
        $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$198$$, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $e$$104$$);
        $reject$$52$$($e$$104$$);
      }) : $resolve$$57$$(null);
    });
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$65$$.$CollectionTableDataSource$.prototype.at});
  $oj$$65$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$65$$$$CollectionTableDataSource$$$fetch$($options$$348$$) {
    $options$$348$$ = $options$$348$$ || {};
    return "init" != $options$$348$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$348$$) : Promise.resolve();
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$65$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$65$$.$CollectionTableDataSource$.prototype.get = function $$oj$$65$$$$CollectionTableDataSource$$$get$($id$$60$$, $options$$349$$) {
    $options$$349$$ = $options$$349$$ || {};
    $options$$349$$.deferred = !0;
    var $model$$100$$ = this.$_collection$.get($id$$60$$, $options$$349$$), $self$$199$$ = this, $row$$44$$;
    return new Promise(function($resolve$$58$$, $reject$$53$$) {
      null != $model$$100$$ ? $model$$100$$.then(function($resolvedModel$$1$$) {
        $row$$44$$ = {data:$resolvedModel$$1$$.attributes, index:$resolvedModel$$1$$.index, key:$resolvedModel$$1$$.id};
        $resolve$$58$$($row$$44$$);
      }, function($e$$105$$) {
        $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$199$$, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $e$$105$$);
        $reject$$53$$($e$$105$$);
      }) : $resolve$$58$$(null);
    });
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$65$$.$CollectionTableDataSource$.prototype.get});
  $oj$$65$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$65$$$$CollectionTableDataSource$$$sort$($criteria$$6$$) {
    if (null == $criteria$$6$$) {
      return Promise.resolve();
    }
    var $self$$200$$ = this;
    return new Promise(function($resolve$$59$$) {
      $self$$200$$.$_setComparator$($criteria$$6$$);
      $self$$200$$.$_collection$.sort(null);
      $resolve$$59$$({header:$criteria$$6$$.key, direction:$criteria$$6$$.direction});
    });
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$65$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$65$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$65$$$$CollectionTableDataSource$$$totalSize$() {
    var $totalSize$$4$$ = 0 <= this.$_collection$.totalResults ? this.$_collection$.totalResults : -1;
    if (-1 < $totalSize$$4$$) {
      var $size$$26$$ = this.$_collection$.size();
      return $size$$26$$ > $totalSize$$4$$ ? $size$$26$$ : $totalSize$$4$$;
    }
    if (0 < this.$_fetchResultSize$) {
      $totalSize$$4$$ = this.$_fetchResultSize$;
    } else {
      if ("atLeast" == this.totalSizeConfidence()) {
        return this.$_collection$.size();
      }
    }
    return $totalSize$$4$$;
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$65$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$65$$.$CollectionTableDataSource$.prototype.totalSizeConfidence = function $$oj$$65$$$$CollectionTableDataSource$$$totalSizeConfidence$() {
    return 0 <= this.$_collection$.totalResults ? "actual" : this.$_collection$.hasMore ? "atLeast" : "unknown";
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$65$$.$CollectionTableDataSource$.prototype.totalSizeConfidence});
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_addCollectionEventListeners$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_addCollectionEventListeners$$() {
    var $self$$201$$ = this;
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.SYNC, function($event$$553_result$$72$$) {
      if ($event$$553_result$$72$$ instanceof $oj$$65$$.$Collection$ && !$self$$201$$.$_isFetchingForAt$ && !$self$$201$$.$_isFetching$) {
        var $startIndex$$29$$ = $event$$553_result$$72$$.offset, $pageSize$$9$$ = $event$$553_result$$72$$.lastFetchCount;
        0 < $pageSize$$9$$ ? ($self$$201$$.$_startIndex$ = $startIndex$$29$$, $self$$201$$.$_pageSize$ = $pageSize$$9$$, $self$$201$$.$_isFetchingForAt$ = !0, $event$$553_result$$72$$.$IterativeAt$($startIndex$$29$$, $startIndex$$29$$ + $pageSize$$9$$).then(function($modelArray$$2$$) {
          $self$$201$$.$_isFetchingForAt$ = !1;
          var $rowArray$$9$$ = [], $keyArray$$1$$ = [], $i$$388$$;
          for ($i$$388$$ = 0;$i$$388$$ < $modelArray$$2$$.length;$i$$388$$++) {
            null != $modelArray$$2$$[$i$$388$$] && ($rowArray$$9$$.push($modelArray$$2$$[$i$$388$$].attributes), $keyArray$$1$$.push($modelArray$$2$$[$i$$388$$].id));
          }
          $self$$201$$.$_endFetch$.call($self$$201$$, {silent:!1}, {data:$rowArray$$9$$, keys:$keyArray$$1$$, startIndex:$startIndex$$29$$}, null);
        })) : ($event$$553_result$$72$$ = $self$$201$$.$_getRowArray$(), $self$$201$$.$_endFetch$.call($self$$201$$, {silent:!1}, $event$$553_result$$72$$, null));
      }
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.ALLADDED, function($event$$554$$, $modelArray$$3$$) {
      var $rowArray$$10$$ = [], $keyArray$$2$$ = [], $indexArray$$3$$ = [], $i$$389$$;
      for ($i$$389$$ = 0;$i$$389$$ < $modelArray$$3$$.length;$i$$389$$++) {
        $rowArray$$10$$.push($modelArray$$3$$[$i$$389$$].attributes), $keyArray$$2$$.push($modelArray$$3$$[$i$$389$$].id), $indexArray$$3$$.push($modelArray$$3$$[$i$$389$$].index);
      }
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$10$$, keys:$keyArray$$2$$, indexes:$indexArray$$3$$});
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.ALLREMOVED, function($event$$555$$, $modelArray$$4$$) {
      var $rowArray$$11$$ = [], $keyArray$$3$$ = [], $indexArray$$4$$ = [], $i$$390$$;
      for ($i$$390$$ = 0;$i$$390$$ < $modelArray$$4$$.length;$i$$390$$++) {
        $rowArray$$11$$.push($modelArray$$4$$[$i$$390$$].attributes), $keyArray$$3$$.push($modelArray$$4$$[$i$$390$$].id), $indexArray$$4$$.push($modelArray$$4$$[$i$$390$$].index);
      }
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$11$$, keys:$keyArray$$3$$, indexes:$indexArray$$4$$});
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.RESET, function($event$$556$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.RESET, $event$$556$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.SORT, function($event$$557$$, $eventOpts$$2$$) {
      null != $eventOpts$$2$$ && $eventOpts$$2$$.add || $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.SORT, $event$$557$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.CHANGE, function($event$$558$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.CHANGE, {data:[$event$$558$$.attributes], keys:[$event$$558$$.id], indexes:[$event$$558$$.index]});
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.DESTROY, function($event$$559$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.DESTROY, $event$$559$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.REFRESH, function($event$$560$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.REFRESH, $event$$560$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.ERROR, function($collection$$58$$, $xhr$$21$$, $options$$350$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$201$$, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $collection$$58$$, $xhr$$21$$, $options$$350$$);
    });
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_fetchInternal$$($options$$351$$) {
    this.$_startFetch$($options$$351$$);
    $options$$351$$ = $options$$351$$ || {};
    var $self$$202$$ = this;
    this.$_isPaged$ = 0 < $options$$351$$.pageSize ? !0 : !1;
    this.$_startIndex$ = null == $options$$351$$.startIndex ? this.$_startIndex$ : $options$$351$$.startIndex;
    this.$_pageSize$ = 0 < $options$$351$$.pageSize ? $options$$351$$.pageSize : -1;
    $options$$351$$.pageSize = this.$_pageSize$;
    $options$$351$$.startIndex = this.$_startIndex$;
    $options$$351$$.refresh = !0;
    return new Promise(function($resolve$$60$$, $reject$$55$$) {
      var $pageSize$$10$$ = $self$$202$$.$_pageSize$;
      $self$$202$$.$_isPaged$ || ($pageSize$$10$$ = 25);
      $self$$202$$.$_collection$.$setRangeLocal$($self$$202$$.$_startIndex$, $pageSize$$10$$).then(function($actual$$6$$) {
        var $result$$74_rowArray$$12$$;
        if ($self$$202$$.$_isPaged$) {
          $result$$74_rowArray$$12$$ = [];
          var $keyArray$$4$$ = [], $i$$391$$;
          for ($i$$391$$ = 0;$i$$391$$ < $actual$$6$$.models.length;$i$$391$$++) {
            $result$$74_rowArray$$12$$[$i$$391$$] = $actual$$6$$.models[$i$$391$$].attributes, $keyArray$$4$$[$i$$391$$] = $actual$$6$$.models[$i$$391$$].id;
          }
          $result$$74_rowArray$$12$$ = {data:$result$$74_rowArray$$12$$, keys:$keyArray$$4$$, startIndex:$self$$202$$.$_startIndex$};
          $actual$$6$$.models.length < $self$$202$$.$_pageSize$ ? 0 > $self$$202$$.totalSize() && ($self$$202$$.$_fetchResultSize$ = $self$$202$$.$_startIndex$ + $actual$$6$$.models.length) : $self$$202$$.$_fetchResultSize$ = null;
        } else {
          $result$$74_rowArray$$12$$ = $self$$202$$.$_getRowArray$();
        }
        $self$$202$$.$_endFetch$.call($self$$202$$, $options$$351$$, $result$$74_rowArray$$12$$, null);
        $resolve$$60$$($result$$74_rowArray$$12$$);
      }, function($error$$46$$) {
        $self$$202$$.$_endFetch$.call($self$$202$$, $options$$351$$, null, $error$$46$$);
        $reject$$55$$($error$$46$$);
      });
    });
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_startFetch$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_startFetch$$($options$$352$$) {
    this.$_isFetching$ = !0;
    $options$$352$$.silent || $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$65$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$352$$.startIndex});
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_endFetch$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_endFetch$$($options$$353$$, $result$$75$$, $error$$47$$) {
    this.$_isFetching$ = !1;
    null != $error$$47$$ ? $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $error$$47$$) : $options$$353$$.silent || $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$65$$.$TableDataSource$.$EventType$.SYNC, $result$$75$$);
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_setComparator$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_setComparator$$($criteria$$7_direction$$13$$) {
    if (null == $criteria$$7_direction$$13$$) {
      this.$_collection$.comparator = null;
    } else {
      var $key$$173$$ = $criteria$$7_direction$$13$$.key;
      $criteria$$7_direction$$13$$ = $criteria$$7_direction$$13$$.direction;
      var $comparator$$15$$ = null;
      this.$_collection$.$IsVirtual$() ? (this.$_collection$.comparator = $key$$173$$, this.$_collection$.sortDirection = "ascending" === $criteria$$7_direction$$13$$ ? 1 : -1) : ("ascending" == $criteria$$7_direction$$13$$ ? $comparator$$15$$ = function $$comparator$$15$$$($row$$45$$) {
        return $$$$59$$.isFunction($row$$45$$.get) ? $row$$45$$.get($key$$173$$) : $row$$45$$[$key$$173$$]();
      } : "descending" == $criteria$$7_direction$$13$$ && ($comparator$$15$$ = function $$comparator$$15$$$($rowA$$1$$, $rowB$$1$$) {
        var $a$$120$$, $b$$74$$;
        $$$$59$$.isFunction($rowA$$1$$.get) ? ($a$$120$$ = $rowA$$1$$.get($key$$173$$), $b$$74$$ = $rowB$$1$$.get($key$$173$$)) : ($a$$120$$ = $rowA$$1$$[$key$$173$$](), $b$$74$$ = $rowB$$1$$[$key$$173$$]());
        return $a$$120$$ === $b$$74$$ ? 0 : $a$$120$$ > $b$$74$$ ? -1 : 1;
      }), this.$_collection$.comparator = $comparator$$15$$);
    }
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_getRowArray$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_getRowArray$$() {
    var $endIndex$$7$$ = this.$_collection$.size() - 1, $rowArray$$13$$ = [], $keyArray$$5$$ = [], $i$$392$$;
    for ($i$$392$$ = 0;$i$$392$$ <= $endIndex$$7$$;$i$$392$$++) {
      $rowArray$$13$$[$i$$392$$] = this.$_collection$.at($i$$392$$).attributes, $keyArray$$5$$[$i$$392$$] = this.$_collection$.at($i$$392$$).id;
    }
    return{data:$rowArray$$13$$, keys:$keyArray$$5$$, startIndex:this.$_startIndex$};
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.getCapability = function $$oj$$65$$$$CollectionTableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.getCapability", {getCapability:$oj$$65$$.$CollectionTableDataSource$.prototype.getCapability});
});
