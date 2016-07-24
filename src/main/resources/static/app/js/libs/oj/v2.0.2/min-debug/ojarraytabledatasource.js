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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$26$$, $$$$24$$) {
  $oj$$26$$.$ArrayTableDataSource$ = function $$oj$$26$$$$ArrayTableDataSource$$($data$$140$$, $options$$279$$) {
    this.data = {};
    if (!($data$$140$$ instanceof Array) && "function" != typeof $data$$140$$ && "function" != typeof $data$$140$$.$subscribe$) {
      throw Error($oj$$26$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$26$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    null != $options$$279$$ && null != $options$$279$$.idAttribute || $oj$$26$$.$Logger$.info($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);
    $oj$$26$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$140$$, $options$$279$$);
    this.$_eventHandlers$ = [];
    this.$_rows$ = {};
    if (null != $data$$140$$ && void 0 !== $data$$140$$ && (this.$_idAttribute$ = null, null != $options$$279$$ && null != $options$$279$$.idAttribute && (this.$_idAttribute$ = $options$$279$$.idAttribute), this.$_data$ = $data$$140$$ instanceof Array ? $data$$140$$ : $data$$140$$(), this.$_totalSize$ = this.$_data$.length, !($data$$140$$ instanceof Array))) {
      var $self$$146$$ = this;
      $data$$140$$.subscribe(function($changes$$5$$) {
        if ($self$$146$$.$_isDataLoaded$()) {
          var $i$$314$$, $rowArray$$3$$ = [], $indexArray$$2$$ = [];
          for ($i$$314$$ = 0;$i$$314$$ < $changes$$5$$.length;$i$$314$$++) {
            "deleted" === $changes$$5$$[$i$$314$$].status && $rowArray$$3$$.push($changes$$5$$[$i$$314$$].value);
          }
          $self$$146$$.remove($rowArray$$3$$, null);
          $rowArray$$3$$ = [];
          $indexArray$$2$$ = [];
          for ($i$$314$$ = 0;$i$$314$$ < $changes$$5$$.length;$i$$314$$++) {
            "added" === $changes$$5$$[$i$$314$$].status && ($rowArray$$3$$.push($changes$$5$$[$i$$314$$].value), $indexArray$$2$$.push($changes$$5$$[$i$$314$$].index));
          }
          $self$$146$$.add($rowArray$$3$$, {at:$indexArray$$2$$});
        }
      }, null, "arrayChange");
    }
    if (null != $options$$279$$ && ("enabled" == $options$$279$$.startFetch || null == $options$$279$$.startFetch) || null == $options$$279$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$26$$.$ArrayTableDataSource$, $oj$$26$$);
  $oj$$26$$.$Object$.$createSubclass$($oj$$26$$.$ArrayTableDataSource$, $oj$$26$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$26$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$26$$$$ArrayTableDataSource$$$Init$() {
    $oj$$26$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$26$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$26$$.$ArrayTableDataSource$.prototype.add = function $$oj$$26$$$$ArrayTableDataSource$$$add$($m$$19$$, $options$$280$$) {
    $options$$280$$ = $options$$280$$ || {};
    this.$_checkDataLoaded$();
    return this.$_addToRowSet$($m$$19$$, $options$$280$$.at, $options$$280$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$26$$.$ArrayTableDataSource$.prototype.add});
  $oj$$26$$.$ArrayTableDataSource$.prototype.at = function $$oj$$26$$$$ArrayTableDataSource$$$at$($index$$187$$) {
    this.$_checkDataLoaded$();
    var $row$$31$$;
    $row$$31$$ = 0 > $index$$187$$ || $index$$187$$ >= this.$_rows$.data.length ? null : {data:this.$_rows$.data[$index$$187$$], index:$index$$187$$, key:this.$_getId$(this.$_rows$.data[$index$$187$$])};
    return new Promise(function($resolve$$36$$) {
      $resolve$$36$$($row$$31$$);
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$26$$.$ArrayTableDataSource$.prototype.at});
  $oj$$26$$.$ArrayTableDataSource$.prototype.change = function $$oj$$26$$$$ArrayTableDataSource$$$change$($m$$20$$, $options$$282$$) {
    $options$$282$$ = $options$$282$$ || {};
    this.$_checkDataLoaded$();
    var $silent$$22$$ = $options$$282$$.silent, $i$$315$$, $row$$32$$, $key$$134$$, $changedRow$$, $rowArray$$4$$ = {data:[], keys:[], indexes:[]};
    $m$$20$$ instanceof Array || ($m$$20$$ = [$m$$20$$]);
    for ($i$$315$$ = 0;$i$$315$$ < $m$$20$$.length;$i$$315$$++) {
      $row$$32$$ = $m$$20$$[$i$$315$$], null != $row$$32$$ && ($key$$134$$ = this.$_getId$($row$$32$$), $changedRow$$ = this.$_getInternal$($key$$134$$, null), $rowArray$$4$$.data.push($row$$32$$), $rowArray$$4$$.keys.push($key$$134$$), $rowArray$$4$$.indexes.push($changedRow$$.index), this.$_rows$.data[$changedRow$$.index] = $row$$32$$);
    }
    !$silent$$22$$ && 0 < $rowArray$$4$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.CHANGE, $rowArray$$4$$);
    return Promise.resolve($rowArray$$4$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.change", {change:$oj$$26$$.$ArrayTableDataSource$.prototype.change});
  $oj$$26$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$26$$$$ArrayTableDataSource$$$fetch$($options$$283$$) {
    $options$$283$$ = $options$$283$$ || {};
    return "init" != $options$$283$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$283$$) : Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$26$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$26$$.$ArrayTableDataSource$.prototype.get = function $$oj$$26$$$$ArrayTableDataSource$$$get$($id$$39$$, $options$$284$$) {
    $options$$284$$ = $options$$284$$ || {};
    this.$_checkDataLoaded$();
    return Promise.resolve(this.$_getInternal$($id$$39$$, $options$$284$$));
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$26$$.$ArrayTableDataSource$.prototype.get});
  $oj$$26$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$26$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$26$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$26$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$26$$$$ArrayTableDataSource$$$remove$($m$$21$$, $options$$285$$) {
    $options$$285$$ = $options$$285$$ || {};
    this.$_checkDataLoaded$();
    return this.$_removeInternal$($m$$21$$, $options$$285$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$26$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$26$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$26$$$$ArrayTableDataSource$$$reset$($data$$141$$, $options$$286$$) {
    $options$$286$$ = $options$$286$$ || {};
    $options$$286$$.previousRows = this.$_rows$;
    var $silent$$23$$ = $options$$286$$.silent;
    null != $data$$141$$ && (this.$_data$ = $data$$141$$);
    this.$_rows$ = {};
    this.$_totalSize$ = 0;
    $silent$$23$$ || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.RESET, null);
    return Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$26$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$26$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$26$$$$ArrayTableDataSource$$$sort$($criteria$$1$$) {
    if (null == $criteria$$1$$) {
      return this.comparator = null, Promise.resolve();
    }
    this.$_checkDataLoaded$();
    var $key$$135$$ = $criteria$$1$$.key, $direction$$5$$ = $criteria$$1$$.direction, $comparator$$9$$ = null;
    "ascending" == $direction$$5$$ ? $comparator$$9$$ = function $$comparator$$9$$$($row$$33$$) {
      return $$$$24$$.isFunction($row$$33$$[$key$$135$$]) ? $row$$33$$[$key$$135$$]() : $row$$33$$[$key$$135$$];
    } : "descending" == $direction$$5$$ && ($comparator$$9$$ = function $$comparator$$9$$$($rowA$$, $rowB$$) {
      var $a$$107$$, $b$$64$$;
      $$$$24$$.isFunction($rowA$$[$key$$135$$]) ? ($a$$107$$ = $rowA$$[$key$$135$$](), $b$$64$$ = $rowB$$[$key$$135$$]()) : ($a$$107$$ = $rowA$$[$key$$135$$], $b$$64$$ = $rowB$$[$key$$135$$]);
      return $a$$107$$ === $b$$64$$ ? 0 : $a$$107$$ > $b$$64$$ ? -1 : 1;
    });
    this.comparator = $comparator$$9$$;
    this.direction = $direction$$5$$;
    var $self$$147$$ = this;
    return new Promise(function($resolve$$37$$) {
      $criteria$$1$$ = $criteria$$1$$ || {};
      if ($self$$147$$.$_hasComparator$()) {
        var $comparator$$10$$ = $self$$147$$.comparator;
        $self$$147$$.$_rows$.data.sort(function($a$$108$$, $b$$65$$) {
          return $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$($a$$108$$, $b$$65$$, $comparator$$10$$, $self$$147$$);
        });
        $self$$147$$.$_sorted$ = !0;
        var $result$$57$$ = {header:$criteria$$1$$.key, direction:$criteria$$1$$.direction};
        $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call($self$$147$$, $oj$$26$$.$TableDataSource$.$EventType$.SORT, $result$$57$$);
        $resolve$$37$$($result$$57$$);
      }
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$26$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$26$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$26$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$26$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_addToRowSet$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_addToRowSet$$($m$$22$$, $index$$188$$, $i$$317_options$$287$$) {
    var $j$$40_key$$136$$, $row$$34$$;
    $i$$317_options$$287$$ = $i$$317_options$$287$$ || {};
    var $silent$$24$$ = $i$$317_options$$287$$.silent, $rowArray$$5$$ = {data:[], keys:[], indexes:[]};
    $m$$22$$ instanceof Array || ($m$$22$$ = [$m$$22$$]);
    null == $index$$188$$ || $index$$188$$ instanceof Array || ($index$$188$$ = [$index$$188$$]);
    for ($i$$317_options$$287$$ = 0;$i$$317_options$$287$$ < $m$$22$$.length;$i$$317_options$$287$$++) {
      if ($row$$34$$ = $m$$22$$[$i$$317_options$$287$$], null != $row$$34$$) {
        $j$$40_key$$136$$ = this.$_getId$($row$$34$$);
        $rowArray$$5$$.data.push($row$$34$$);
        $rowArray$$5$$.keys.push($j$$40_key$$136$$);
        if (!0 == this.$_sorted$ && 0 < this.$_rows$.data.length) {
          for ($j$$40_key$$136$$ = 0;$j$$40_key$$136$$ < this.$_rows$.data.length;$j$$40_key$$136$$++) {
            if (0 > $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$($row$$34$$, this.$_rows$.data[$j$$40_key$$136$$], this.comparator, this)) {
              this.$_rows$.data.splice($j$$40_key$$136$$, 0, $row$$34$$);
              $rowArray$$5$$.indexes.push($j$$40_key$$136$$);
              break;
            } else {
              if ($j$$40_key$$136$$ == this.$_rows$.data.length - 1) {
                this.$_rows$.data.push($row$$34$$);
                $rowArray$$5$$.indexes.push($j$$40_key$$136$$ + 1);
                break;
              }
            }
          }
        } else {
          null == $index$$188$$ ? (this.$_rows$.data.push($row$$34$$), $rowArray$$5$$.indexes.push(this.$_rows$.data.length - 1)) : (this.$_rows$.data.splice($index$$188$$[$i$$317_options$$287$$], 0, $row$$34$$), $rowArray$$5$$.indexes.push($index$$188$$[$i$$317_options$$287$$]));
        }
        this.$_totalSize$++;
        this.$_realignRowIndices$();
      }
    }
    !$silent$$24$$ && 0 < $rowArray$$5$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.ADD, $rowArray$$5$$);
    return Promise.resolve($rowArray$$5$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_checkDataLoaded$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_checkDataLoaded$$() {
    this.$_isDataLoaded$() || (this.$_rows$ = this.$_getRowArray$(this.$_data$), this.$_totalSize$ = this.$_data$.length);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_isDataLoaded$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_isDataLoaded$$() {
    return null == this.$_rows$ || null == this.$_rows$.data ? !1 : !0;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_fetchInternal$$($options$$288$$) {
    $options$$288$$ = $options$$288$$ || {};
    this.$_startFetch$($options$$288$$);
    this.$_checkDataLoaded$();
    var $pageSize$$4_result$$58$$;
    try {
      $pageSize$$4_result$$58$$ = 0 < $options$$288$$.pageSize ? $options$$288$$.pageSize : -1;
      this.$_startIndex$ || (this.$_startIndex$ = 0);
      this.$_startIndex$ = null == $options$$288$$.startIndex ? this.$_startIndex$ : $options$$288$$.startIndex;
      var $endIndex$$4$$ = $oj$$26$$.$ArrayTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, $pageSize$$4_result$$58$$), $rowArray$$6$$ = [], $keyArray$$ = [], $i$$318$$;
      for ($i$$318$$ = this.$_startIndex$;$i$$318$$ <= $endIndex$$4$$;$i$$318$$++) {
        $rowArray$$6$$[$i$$318$$ - this.$_startIndex$] = this.$_rows$.data[$i$$318$$], $keyArray$$[$i$$318$$ - this.$_startIndex$] = this.$_getId$(this.$_rows$.data[$i$$318$$]);
      }
    } catch ($err$$20$$) {
      return this.$_endFetch$($options$$288$$, null, $err$$20$$), Promise.reject($err$$20$$);
    }
    $endIndex$$4$$ < this.$_startIndex$ && (this.$_startIndex$ = $endIndex$$4$$ + 1);
    $options$$288$$.pageSize = $pageSize$$4_result$$58$$;
    $options$$288$$.startIndex = this.$_startIndex$;
    $options$$288$$.refresh = !0;
    $pageSize$$4_result$$58$$ = {data:$rowArray$$6$$, keys:$keyArray$$, startIndex:this.$_startIndex$};
    this.$_endFetch$($options$$288$$, $pageSize$$4_result$$58$$, null);
    return Promise.resolve($pageSize$$4_result$$58$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getInternal$$($id$$40$$) {
    var $i$$319$$, $j$$41$$, $row$$35$$, $key$$137$$, $result$$59$$ = null;
    for ($i$$319$$ = 0;$i$$319$$ < this.$_rows$.data.length;$i$$319$$++) {
      if ($row$$35$$ = this.$_rows$.data[$i$$319$$], void 0 !== $row$$35$$) {
        if ($key$$137$$ = this.$_getId$($row$$35$$), $$$$24$$.isArray($key$$137$$) && $$$$24$$.isArray($id$$40$$)) {
          if ($key$$137$$.length == $id$$40$$.length) {
            var $equal$$ = !0;
            for ($j$$41$$ = 0;$j$$41$$ < $id$$40$$.length;$j$$41$$++) {
              if ($key$$137$$[$j$$41$$] != $id$$40$$[$j$$41$$]) {
                $equal$$ = !1;
                break;
              }
            }
            $equal$$ && ($result$$59$$ = {data:$row$$35$$, key:$key$$137$$, index:this.$_rows$.indexes[$i$$319$$]});
          }
        } else {
          $key$$137$$ == $id$$40$$ && ($result$$59$$ = {data:$row$$35$$, key:$key$$137$$, index:this.$_rows$.indexes[$i$$319$$]});
        }
      }
    }
    return $result$$59$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_hasComparator$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$320$$ = 0;$i$$320$$ < this.$_rows$.data.length;$i$$320$$++) {
      this.$_rows$.indexes[$i$$320$$] = $i$$320$$;
    }
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_removeInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_removeInternal$$($m$$23$$, $options$$290$$) {
    var $i$$321$$, $deletedRow_key$$138_row$$36$$;
    $options$$290$$ = $options$$290$$ || {};
    var $silent$$25$$ = $options$$290$$.silent, $rowArray$$7$$ = {data:[], keys:[], indexes:[]};
    $m$$23$$ instanceof Array || ($m$$23$$ = [$m$$23$$]);
    var $sortedRowArray$$ = [];
    for ($i$$321$$ = 0;$i$$321$$ < $m$$23$$.length;$i$$321$$++) {
      $deletedRow_key$$138_row$$36$$ = $m$$23$$[$i$$321$$], null != $deletedRow_key$$138_row$$36$$ && ($deletedRow_key$$138_row$$36$$ = this.$_getId$($deletedRow_key$$138_row$$36$$), $deletedRow_key$$138_row$$36$$ = this.$_getInternal$($deletedRow_key$$138_row$$36$$, null), null != $deletedRow_key$$138_row$$36$$ && $sortedRowArray$$.push({data:$deletedRow_key$$138_row$$36$$.data, key:$deletedRow_key$$138_row$$36$$.key, index:$deletedRow_key$$138_row$$36$$.index}));
    }
    $sortedRowArray$$.sort(function($a$$109$$, $b$$66$$) {
      return $a$$109$$.index - $b$$66$$.index;
    });
    for ($i$$321$$ = 0;$i$$321$$ < $sortedRowArray$$.length;$i$$321$$++) {
      $rowArray$$7$$.data.push($sortedRowArray$$[$i$$321$$].data), $rowArray$$7$$.keys.push($sortedRowArray$$[$i$$321$$].key), $rowArray$$7$$.indexes.push($sortedRowArray$$[$i$$321$$].index);
    }
    for ($i$$321$$ = $rowArray$$7$$.indexes.length - 1;0 <= $i$$321$$;$i$$321$$--) {
      this.$_rows$.data.splice($rowArray$$7$$.indexes[$i$$321$$], 1), this.$_rows$.indexes.splice($rowArray$$7$$.indexes[$i$$321$$], 1), this.$_totalSize$--, this.$_realignRowIndices$();
    }
    !$silent$$25$$ && 0 < $rowArray$$7$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.REMOVE, $rowArray$$7$$);
    return Promise.resolve($rowArray$$7$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_startFetch$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_startFetch$$($options$$291$$) {
    $options$$291$$.silent || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$291$$.startIndex});
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_endFetch$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_endFetch$$($options$$292$$, $result$$60$$, $error$$37$$) {
    null != $error$$37$$ ? $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.ERROR, $error$$37$$) : $options$$292$$.silent || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.SYNC, $result$$60$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$ = function $$oj$$26$$$$ArrayTableDataSource$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $direction$$6$$) {
    if ("descending" == $direction$$6$$) {
      if ($keyA$$4$$ < $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ < $keyA$$4$$) {
        return-1;
      }
    } else {
      if ($keyA$$4$$ > $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ > $keyA$$4$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_getEndIndex$ = function $$oj$$26$$$$ArrayTableDataSource$$$_getEndIndex$$($rows$$6$$, $startIndex$$28$$, $pageSize$$5$$) {
    var $endIndex$$5$$ = $rows$$6$$.data.length - 1;
    0 < $pageSize$$5$$ && ($endIndex$$5$$ = $startIndex$$28$$ + $pageSize$$5$$ - 1, $endIndex$$5$$ = $endIndex$$5$$ > $rows$$6$$.data.length - 1 ? $rows$$6$$.data.length - 1 : $endIndex$$5$$);
    return $endIndex$$5$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_getKey$ = function $$oj$$26$$$$ArrayTableDataSource$$$_getKey$$($val$$48$$, $attr$$17$$) {
    return $$$$24$$.isFunction($val$$48$$[$attr$$17$$]) ? $val$$48$$[$attr$$17$$]() : $val$$48$$[$attr$$17$$];
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getRowArray$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getRowArray$$($values$$13$$) {
    var $endIndex$$6$$ = $values$$13$$.length - 1, $rowArray$$8$$ = {}, $i$$322$$, $prop$$64$$;
    $rowArray$$8$$.data = [];
    $rowArray$$8$$.indexes = [];
    this.$_attributes$ = null;
    for ($i$$322$$ = 0;$i$$322$$ <= $endIndex$$6$$;$i$$322$$++) {
      var $clonedRowValues$$ = {}, $rowValues$$ = $values$$13$$[$i$$322$$];
      for ($prop$$64$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$64$$) && ($clonedRowValues$$[$prop$$64$$] = $rowValues$$[$prop$$64$$], 0 == $i$$322$$ && (null == this.$_attributes$ && (this.$_attributes$ = []), this.$_attributes$.push($prop$$64$$)));
      }
      $rowArray$$8$$.data[$i$$322$$] = $clonedRowValues$$;
      $rowArray$$8$$.indexes[$i$$322$$] = $i$$322$$;
    }
    return $rowArray$$8$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getId$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getId$$($errDetail$$8_row$$38$$) {
    var $id$$41$$, $idAttribute$$ = this.$_getIdAttr$($errDetail$$8_row$$38$$);
    if ($$$$24$$.isArray($idAttribute$$)) {
      var $i$$323$$;
      $id$$41$$ = [];
      for ($i$$323$$ = 0;$i$$323$$ < $idAttribute$$.length;$i$$323$$++) {
        if ($idAttribute$$[$i$$323$$] in $errDetail$$8_row$$38$$) {
          $id$$41$$[$i$$323$$] = $errDetail$$8_row$$38$$[$idAttribute$$[$i$$323$$]];
        } else {
          throw $errDetail$$8_row$$38$$ = $oj$$26$$.$Translations$.$applyParameters$($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$[$i$$323$$]]), Error($errDetail$$8_row$$38$$);
        }
      }
    } else {
      if ($idAttribute$$ in $errDetail$$8_row$$38$$) {
        $id$$41$$ = $errDetail$$8_row$$38$$[$idAttribute$$];
      } else {
        throw $errDetail$$8_row$$38$$ = $oj$$26$$.$Translations$.$applyParameters$($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$]), Error($errDetail$$8_row$$38$$);
      }
    }
    return $id$$41$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getIdAttr$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getIdAttr$$($row$$39$$) {
    if (null != this.$_idAttribute$) {
      return this.$_idAttribute$;
    }
    if (null == this.$_attributes$) {
      this.$_attributes$ = [];
      for (var $prop$$65$$ in $row$$39$$) {
        $row$$39$$.hasOwnProperty($prop$$65$$) && this.$_attributes$.push($prop$$65$$);
      }
    }
    return this.$_attributes$.hasOwnProperty("id") ? "id" : this.$_attributes$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$ = function $$oj$$26$$$$ArrayTableDataSource$$$_sortFunc$$($a$$110_attrs1$$2$$, $attrs2$$2_b$$67$$, $comparator$$12_i$$324$$, $self$$150$$) {
    var $keyA$$5_retVal$$16$$, $keyB$$5$$;
    if ($$$$24$$.isFunction($comparator$$12_i$$324$$)) {
      if (1 === $comparator$$12_i$$324$$.length) {
        $keyA$$5_retVal$$16$$ = $comparator$$12_i$$324$$.call($self$$150$$, $a$$110_attrs1$$2$$);
        $keyB$$5$$ = $comparator$$12_i$$324$$.call($self$$150$$, $attrs2$$2_b$$67$$);
        $a$$110_attrs1$$2$$ = $oj$$26$$.$StringUtils$.$isString$($keyA$$5_retVal$$16$$) ? $keyA$$5_retVal$$16$$.split(",") : [$keyA$$5_retVal$$16$$];
        $attrs2$$2_b$$67$$ = $oj$$26$$.$StringUtils$.$isString$($keyB$$5$$) ? $keyB$$5$$.split(",") : [$keyB$$5$$];
        for ($comparator$$12_i$$324$$ = 0;$comparator$$12_i$$324$$ < $a$$110_attrs1$$2$$.length;$comparator$$12_i$$324$$++) {
          if ($keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$($a$$110_attrs1$$2$$[$comparator$$12_i$$324$$], $attrs2$$2_b$$67$$[$comparator$$12_i$$324$$], $self$$150$$.direction), 0 !== $keyA$$5_retVal$$16$$) {
            return $keyA$$5_retVal$$16$$;
          }
        }
        return 0;
      }
      return $comparator$$12_i$$324$$.call($self$$150$$, $a$$110_attrs1$$2$$, $attrs2$$2_b$$67$$);
    }
    if ($oj$$26$$.$StringUtils$.$isString$($comparator$$12_i$$324$$)) {
      var $attrs$$21$$ = $comparator$$12_i$$324$$.split(",");
      for ($comparator$$12_i$$324$$ = 0;$comparator$$12_i$$324$$ < $attrs$$21$$.length;$comparator$$12_i$$324$$++) {
        if ($keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($a$$110_attrs1$$2$$, $attrs$$21$$[$comparator$$12_i$$324$$]), $keyB$$5$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($attrs2$$2_b$$67$$, $attrs$$21$$[$comparator$$12_i$$324$$]), $keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$($keyA$$5_retVal$$16$$, $keyB$$5$$, $self$$150$$.direction), 0 !== $keyA$$5_retVal$$16$$) {
          return $keyA$$5_retVal$$16$$;
        }
      }
    }
    return 0;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$ = {_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields.", _ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW:"Specified idAttribute {0} not in row data. Please ensure all specified idAttribute fields are in the row data or do not specify idAttribute and all fields will be used as id."};
});
