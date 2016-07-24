/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$57$$) {
  $oj$$57$$.$ArrayDataGridDataSource$ = function $$oj$$57$$$$ArrayDataGridDataSource$$($data$$156$$, $options$$327$$) {
    if (!($data$$156$$ instanceof Array) && "function" != typeof $data$$156$$ && "function" != typeof $data$$156$$.$subscribe$) {
      throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");
    }
    this.$rowHeaderKey$ = this.$_getRowHeaderFromOptions$($options$$327$$);
    null != $options$$327$$ && (this.columns = $options$$327$$.columns, this.$_sortInfo$ = $options$$327$$.initialSort);
    $oj$$57$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$156$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$57$$.$ArrayDataGridDataSource$, $oj$$57$$);
  $oj$$57$$.$Object$.$createSubclass$($oj$$57$$.$ArrayDataGridDataSource$, $oj$$57$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$57$$$$ArrayDataGridDataSource$$$Init$() {
    null == this.columns && (this.columns = this.$_getColumnsForScaffolding$(this.$getDataArray$()));
    this.$_initializeRowKeys$();
    "function" == typeof this.data && this.data.subscribe(this.$_subscribe$.bind(this), null, "arrayChange");
    $oj$$57$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$57$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getRowHeaderFromOptions$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getRowHeaderFromOptions$$($option$$38_options$$328$$) {
    if (null != $option$$38_options$$328$$ && null != $option$$38_options$$328$$.rowHeader) {
      if ($option$$38_options$$328$$ = $option$$38_options$$328$$.rowHeader, "object" === typeof $option$$38_options$$328$$) {
        if (null != $option$$38_options$$328$$["default"] && "none" == $option$$38_options$$328$$["default"]) {
          return;
        }
      } else {
        if (null != $option$$38_options$$328$$) {
          return $option$$38_options$$328$$;
        }
      }
    }
    return "m_defaultIndex";
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $data$$157$$;
    $data$$157$$ = this.$getDataArray$();
    for (this.$lastKey$ = 0;this.$lastKey$ < $data$$157$$.length;this.$lastKey$ += 1) {
      $data$$157$$[this.$lastKey$].ojKey = this.$lastKey$.toString();
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$158$$) {
    var $propertyName$$8$$, $columns$$23$$;
    if ("number" !== typeof $data$$158$$.length || 0 === $data$$158$$.length) {
      return[];
    }
    $columns$$23$$ = [];
    for ($propertyName$$8$$ in $data$$158$$[0]) {
      $data$$158$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$23$$.push($propertyName$$8$$));
    }
    return $columns$$23$$;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$37$$) {
    return "row" === $axis$$37$$ ? this.$_size$() : "column" === $axis$$37$$ ? this.columns.length : 0;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getCountPrecision$$() {
    return "exact";
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getHeaderData$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getHeaderData$$($axis$$39$$, $index$$243$$) {
    var $data$$159$$;
    if ("row" === $axis$$39$$) {
      if (void 0 == this.$rowHeaderKey$) {
        return null;
      }
      if ("m_defaultIndex" == this.$rowHeaderKey$) {
        return this.$_getRowKeyByIndex$($index$$243$$);
      }
      $data$$159$$ = this.$getDataArray$();
      return $data$$159$$[$index$$243$$][this.$rowHeaderKey$];
    }
    if ("column" === $axis$$39$$) {
      return this.columns[$index$$243$$];
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getHeaderMetadata$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getHeaderMetadata$$($axis$$40$$, $index$$244$$) {
    var $key$$158$$;
    if ("row" === $axis$$40$$) {
      return{key:this.$_getRowKeyByIndex$($index$$244$$)};
    }
    if ("column" === $axis$$40$$) {
      return $key$$158$$ = this.$_getHeaderData$($axis$$40$$, $index$$244$$), null != this.$_sortInfo$ && this.$_sortInfo$.key === $key$$158$$ ? {key:this.$_getHeaderData$($axis$$40$$, $index$$244$$), sortDirection:this.$_sortInfo$.direction} : {key:$key$$158$$};
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$5$$, $callbacks$$30$$, $callbackObjects$$16$$) {
    var $axis$$41_headerSet$$1$$, $start$$51$$, $count$$52_end$$17$$, $data$$160$$;
    $axis$$41_headerSet$$1$$ = $headerRange$$5$$.axis;
    $start$$51$$ = $headerRange$$5$$.start;
    $count$$52_end$$17$$ = $headerRange$$5$$.count;
    $start$$51$$ = Math.max(0, $start$$51$$);
    "column" === $axis$$41_headerSet$$1$$ ? $count$$52_end$$17$$ = Math.min(this.columns.length, $start$$51$$ + $count$$52_end$$17$$) : ($data$$160$$ = this.$getDataArray$(), $count$$52_end$$17$$ = void 0 === this.$rowHeaderKey$ ? $start$$51$$ : Math.min($data$$160$$.length, $start$$51$$ + $count$$52_end$$17$$));
    $axis$$41_headerSet$$1$$ = new $oj$$57$$.$ArrayHeaderSet$($start$$51$$, $count$$52_end$$17$$, $axis$$41_headerSet$$1$$, this);
    null != $callbacks$$30$$ && null != $callbacks$$30$$.success && (null == $callbackObjects$$16$$ && ($callbackObjects$$16$$ = {}), $callbacks$$30$$.success.call($callbackObjects$$16$$.success, $axis$$41_headerSet$$1$$, $headerRange$$5$$));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getCellData$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getCellData$$($row$$41$$, $column$$24$$) {
    var $col$$2$$ = this.columns[$column$$24$$];
    return this.$getDataArray$()[$row$$41$$][$col$$2$$];
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getCellMetadata$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getCellMetadata$$($row$$42$$, $column$$25$$) {
    return{keys:{row:this.$_getRowKeyByIndex$($row$$42$$), column:this.columns[$column$$25$$]}};
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$6$$, $callbacks$$31$$, $callbackObjects$$17$$) {
    var $cellSet$$1_i$$373$$, $cellRange$$3$$, $rowStart$$5$$, $rowEnd$$2$$, $colStart$$2$$, $colEnd$$1$$;
    for ($cellSet$$1_i$$373$$ = 0;$cellSet$$1_i$$373$$ < $cellRanges$$6$$.length;$cellSet$$1_i$$373$$ += 1) {
      $cellRange$$3$$ = $cellRanges$$6$$[$cellSet$$1_i$$373$$], "row" === $cellRange$$3$$.axis ? ($rowStart$$5$$ = $cellRange$$3$$.start, $rowEnd$$2$$ = Math.min(this.$_size$(), $rowStart$$5$$ + $cellRange$$3$$.count)) : "column" === $cellRange$$3$$.axis && ($colStart$$2$$ = $cellRange$$3$$.start, $colEnd$$1$$ = Math.min(this.columns.length, $colStart$$2$$ + $cellRange$$3$$.count));
    }
    void 0 === $rowEnd$$2$$ || void 0 === $colEnd$$1$$ ? null != $callbacks$$31$$ && null != $callbacks$$31$$.error && (null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$31$$.error.call($callbackObjects$$17$$.error)) : ($cellSet$$1_i$$373$$ = new $oj$$57$$.$ArrayCellSet$($rowStart$$5$$, $rowEnd$$2$$, $colStart$$2$$, $colEnd$$1$$, this), null != $callbacks$$31$$ && null != $callbacks$$31$$.success && (null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$31$$.success.call($callbackObjects$$17$$.success, 
    $cellSet$$1_i$$373$$, $cellRanges$$6$$)));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$57$$$$ArrayDataGridDataSource$$$keys$($indexes$$12$$) {
    var $rowIndex$$9$$ = $indexes$$12$$.row, $columnIndex$$5$$ = $indexes$$12$$.column;
    return new Promise(function($resolve$$47$$) {
      $resolve$$47$$({row:this.$_getRowKeyByIndex$($rowIndex$$9$$), column:this.columns[$columnIndex$$5$$]});
    }.bind(this));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$57$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$41$$) {
    var $rowKey$$36$$ = $keys$$41$$.row, $columnKey$$4$$ = $keys$$41$$.column;
    return new Promise(function($resolve$$48$$) {
      $resolve$$48$$({row:this.$_getRowIndexByKey$($rowKey$$36$$), column:this.columns.indexOf($columnKey$$4$$)});
    }.bind(this));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$57$$$$ArrayDataGridDataSource$$$sort$($criteria$$3_direction$$11$$, $callbacks$$32$$, $callbackObjects$$18$$) {
    var $sortArray$$ = [], $newColumns$$ = [], $axis$$42_i$$374$$, $headerIndex$$1_headerKey$$;
    null != $callbacks$$32$$ && null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {});
    if (null == $criteria$$3_direction$$11$$) {
      this.$_resetSortOrder$($callbacks$$32$$, $callbackObjects$$18$$);
    } else {
      if ($axis$$42_i$$374$$ = $criteria$$3_direction$$11$$.axis, $headerIndex$$1_headerKey$$ = $criteria$$3_direction$$11$$.key, $criteria$$3_direction$$11$$ = $criteria$$3_direction$$11$$.direction, "column" === $axis$$42_i$$374$$) {
        void 0 == this.$origData$ && (this.$_origSortInfo$ = this.$_sortInfo$, this.$origData$ = this.data.slice()), this.$_sortInfo$ = {key:$headerIndex$$1_headerKey$$, direction:$criteria$$3_direction$$11$$}, this.$getDataArray$().sort(this.$_naturalSort$($criteria$$3_direction$$11$$, $headerIndex$$1_headerKey$$)), null != $callbacks$$32$$ && null != $callbacks$$32$$.success && $callbacks$$32$$.success.call($callbackObjects$$18$$.success);
      } else {
        if ("row" === $axis$$42_i$$374$$) {
          $headerIndex$$1_headerKey$$ = this.$_getRowIndexByKey$($headerIndex$$1_headerKey$$);
          for ($axis$$42_i$$374$$ = 0;$axis$$42_i$$374$$ < this.columns.length;$axis$$42_i$$374$$ += 1) {
            $sortArray$$[$axis$$42_i$$374$$] = this.$getDataArray$()[$headerIndex$$1_headerKey$$][this.columns[$axis$$42_i$$374$$]];
          }
          $sortArray$$.sort(this.$_naturalSort$($criteria$$3_direction$$11$$));
          for ($axis$$42_i$$374$$ = 0;$axis$$42_i$$374$$ < this.columns.length;$axis$$42_i$$374$$ += 1) {
            $newColumns$$[$axis$$42_i$$374$$] = this.columns[$sortArray$$.indexOf(this.$getDataArray$()[$headerIndex$$1_headerKey$$][this.columns[$axis$$42_i$$374$$]])];
          }
          this.$origColumns$ = this.columns;
          this.columns = $newColumns$$;
          null != $callbacks$$32$$ && null != $callbacks$$32$$.success && $callbacks$$32$$.success.call($callbackObjects$$18$$.success);
        } else {
          null !== $callbacks$$32$$ && null != $callbacks$$32$$.error && $callbacks$$32$$.error.call($callbackObjects$$18$$.error, "Invalid axis value");
        }
      }
    }
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$57$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_resetSortOrder$$($callbacks$$33$$, $callbackObjects$$19$$) {
    null != this.$origData$ && (this.data = this.$origData$, this.$_sortInfo$ = this.$_origSortInfo$);
    null != this.$origColumns$ && (this.columns = this.$origColumns$);
    null != $callbacks$$33$$ && null != $callbacks$$33$$.success && $callbacks$$33$$.success.call($callbackObjects$$19$$.success);
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$57$$$$ArrayDataGridDataSource$$$getCapability$($feature$$10$$) {
    return "sort" === $feature$$10$$ ? "column" : "move" === $feature$$10$$ ? "row" : null;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$57$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_naturalSort$$($direction$$12$$, $key$$159$$) {
    if ("ascending" === $direction$$12$$) {
      return function($a$$117$$, $b$$71$$) {
        var $as$$2$$, $bs$$2$$;
        void 0 != $key$$159$$ && ($a$$117$$ instanceof Array ? ($a$$117$$ = $a$$117$$[parseInt($key$$159$$, 10)], $b$$71$$ = $b$$71$$[parseInt($key$$159$$, 10)]) : ($a$$117$$ = $a$$117$$[$key$$159$$], $b$$71$$ = $b$$71$$[$key$$159$$]));
        $as$$2$$ = isNaN($a$$117$$);
        $bs$$2$$ = isNaN($b$$71$$);
        $a$$117$$ instanceof Date && ($a$$117$$ = $a$$117$$.toISOString(), $as$$2$$ = !0);
        $b$$71$$ instanceof Date && ($b$$71$$ = $b$$71$$.toISOString(), $bs$$2$$ = !0);
        return $as$$2$$ && $bs$$2$$ ? $a$$117$$ < $b$$71$$ ? -1 : $a$$117$$ === $b$$71$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$117$$ - $b$$71$$;
      };
    }
    if ("descending" === $direction$$12$$) {
      return function($a$$118$$, $b$$72$$) {
        var $as$$3$$, $bs$$3$$;
        void 0 != $key$$159$$ && ($a$$118$$ instanceof Array ? ($a$$118$$ = $a$$118$$[parseInt($key$$159$$, 10)], $b$$72$$ = $b$$72$$[parseInt($key$$159$$, 10)]) : ($a$$118$$ = $a$$118$$[$key$$159$$], $b$$72$$ = $b$$72$$[$key$$159$$]));
        $as$$3$$ = isNaN($a$$118$$);
        $bs$$3$$ = isNaN($b$$72$$);
        $a$$118$$ instanceof Date && ($a$$118$$ = $a$$118$$.toISOString(), $as$$3$$ = !0);
        $b$$72$$ instanceof Date && ($b$$72$$ = $b$$72$$.toISOString(), $bs$$3$$ = !0);
        return $as$$3$$ && $bs$$3$$ ? $a$$118$$ > $b$$72$$ ? -1 : $a$$118$$ === $b$$72$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$72$$ - $a$$118$$;
      };
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$57$$$$ArrayDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    var $atKeyIndex_event$$530_moveKeyIndex$$, $moveData$$;
    $atKeyIndex_event$$530_moveKeyIndex$$ = this.$_getRowIndexByKey$($moveKey$$1$$);
    $moveData$$ = this.data.splice($atKeyIndex_event$$530_moveKeyIndex$$, 1)[0];
    this.data instanceof Array && ($atKeyIndex_event$$530_moveKeyIndex$$ = this.$_getModelEvent$("delete", $moveKey$$1$$, null, $atKeyIndex_event$$530_moveKeyIndex$$, -1, !0), this.handleEvent("change", $atKeyIndex_event$$530_moveKeyIndex$$));
    null === $atKey$$1$$ ? (this.data.push($moveData$$), $atKeyIndex_event$$530_moveKeyIndex$$ = this.data.length - 1) : ($atKeyIndex_event$$530_moveKeyIndex$$ = this.$_getRowIndexByKey$($atKey$$1$$), this.data.splice($atKeyIndex_event$$530_moveKeyIndex$$, 0, $moveData$$));
    this.data instanceof Array && ($atKeyIndex_event$$530_moveKeyIndex$$ = this.$_getModelEvent$("insert", $moveKey$$1$$, null, $atKeyIndex_event$$530_moveKeyIndex$$, -1), this.handleEvent("change", $atKeyIndex_event$$530_moveKeyIndex$$));
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$57$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$moveOK$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$moveOK$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getDataArray$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getDataArray$$() {
    return "function" === typeof this.data ? this.data() : this.data;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getRowIndexByKey$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getRowIndexByKey$$($key$$160$$) {
    var $i$$375$$, $data$$162$$ = this.$getDataArray$();
    for ($i$$375$$ = 0;$i$$375$$ < $data$$162$$.length;$i$$375$$++) {
      if ($data$$162$$[$i$$375$$].ojKey === $key$$160$$) {
        return $i$$375$$;
      }
    }
    return-1;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getRowKeyByIndex$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getRowKeyByIndex$$($index$$245$$) {
    var $data$$163$$ = this.$getDataArray$();
    return $data$$163$$[$index$$245$$] ? $data$$163$$[$index$$245$$].ojKey : null;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getModelEvent$$($operation$$5$$, $rowKey$$37$$, $columnKey$$5$$, $rowIndex$$10$$, $columnIndex$$6$$, $silent$$26$$) {
    var $event$$531$$ = {source:this};
    $event$$531$$.operation = $operation$$5$$;
    $event$$531$$.keys = {row:$rowKey$$37$$, column:$columnKey$$5$$};
    $event$$531$$.indexes = {row:$rowIndex$$10$$, column:$columnIndex$$6$$};
    $event$$531$$.silent = $silent$$26$$;
    return $event$$531$$;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_subscribe$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_subscribe$$($changes$$6$$) {
    var $i$$376$$, $move_rowData$$4_rowKey$$38$$, $change$$5_event$$532_rowIndex$$11$$, $added$$1$$ = !1;
    $move_rowData$$4_rowKey$$38$$ = !1;
    var $keys$$42$$ = [], $indexes$$13$$ = [];
    for ($i$$376$$ = 0;$i$$376$$ < $changes$$6$$.length;$i$$376$$++) {
      $change$$5_event$$532_rowIndex$$11$$ = $changes$$6$$[$i$$376$$];
      if (void 0 !== $change$$5_event$$532_rowIndex$$11$$.moved) {
        $move_rowData$$4_rowKey$$38$$ = !0;
        $change$$5_event$$532_rowIndex$$11$$ = this.$_getModelEvent$("refresh", null, null);
        this.handleEvent("change", $change$$5_event$$532_rowIndex$$11$$);
        break;
      }
      "added" === $change$$5_event$$532_rowIndex$$11$$.status && ($added$$1$$ = !0);
    }
    if (!$move_rowData$$4_rowKey$$38$$) {
      for ($i$$376$$ = 0;$i$$376$$ < $changes$$6$$.length;$i$$376$$++) {
        $change$$5_event$$532_rowIndex$$11$$ = $changes$$6$$[$i$$376$$], "deleted" === $change$$5_event$$532_rowIndex$$11$$.status && ($move_rowData$$4_rowKey$$38$$ = $change$$5_event$$532_rowIndex$$11$$.value, $change$$5_event$$532_rowIndex$$11$$ = $change$$5_event$$532_rowIndex$$11$$.index, $move_rowData$$4_rowKey$$38$$ = $move_rowData$$4_rowKey$$38$$.ojKey, $keys$$42$$.push({row:$move_rowData$$4_rowKey$$38$$, column:-1}), $indexes$$13$$.push({row:$change$$5_event$$532_rowIndex$$11$$, column:-1}))
        ;
      }
      0 < $keys$$42$$.length && ($change$$5_event$$532_rowIndex$$11$$ = {source:this, operation:"delete", keys:$keys$$42$$, indexes:$indexes$$13$$, silent:$added$$1$$}, this.handleEvent("change", $change$$5_event$$532_rowIndex$$11$$));
      for ($i$$376$$ = 0;$i$$376$$ < $changes$$6$$.length;$i$$376$$++) {
        $change$$5_event$$532_rowIndex$$11$$ = $changes$$6$$[$i$$376$$], "added" === $change$$5_event$$532_rowIndex$$11$$.status && ($move_rowData$$4_rowKey$$38$$ = $change$$5_event$$532_rowIndex$$11$$.value, $change$$5_event$$532_rowIndex$$11$$ = $change$$5_event$$532_rowIndex$$11$$.index, null == $move_rowData$$4_rowKey$$38$$.ojKey && ($move_rowData$$4_rowKey$$38$$.ojKey = this.$lastKey$.toString(), this.$lastKey$++), $move_rowData$$4_rowKey$$38$$ = $move_rowData$$4_rowKey$$38$$.ojKey, $change$$5_event$$532_rowIndex$$11$$ = 
        this.$_getModelEvent$("insert", $move_rowData$$4_rowKey$$38$$, null, $change$$5_event$$532_rowIndex$$11$$, -1), this.handleEvent("change", $change$$5_event$$532_rowIndex$$11$$));
      }
    }
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_size$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_size$$() {
    return this.$getDataArray$().length;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$57$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$57$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$57$$.$ArrayHeaderSet$ = function $$oj$$57$$$$ArrayHeaderSet$$($start$$52$$, $end$$18$$, $axis$$43$$, $callback$$121$$) {
    this.$m_start$ = $start$$52$$;
    this.$m_end$ = $end$$18$$;
    this.$m_axis$ = $axis$$43$$;
    this.$m_callback$ = $callback$$121$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$57$$.$ArrayHeaderSet$, $oj$$57$$);
  $oj$$57$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$57$$$$ArrayHeaderSet$$$getData$($index$$246$$, $level$$34$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$57$$.$Assert$.assert($index$$246$$ <= this.$m_end$ && $index$$246$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$34$$ || 0 == $level$$34$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderData$(this.$m_axis$, $index$$246$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$57$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$57$$$$ArrayHeaderSet$$$getMetadata$($index$$247$$, $level$$35$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$57$$.$Assert$.assert($index$$247$$ <= this.$m_end$ && $index$$247$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$35$$ || 0 == $level$$35$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderMetadata$(this.$m_axis$, $index$$247$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$57$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$57$$.$ArrayHeaderSet$.prototype.$getLevelCount$ = function $$oj$$57$$$$ArrayHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$57$$.$ArrayHeaderSet$.prototype.$getLevelCount$});
  $oj$$57$$.$ArrayHeaderSet$.prototype.$getExtent$ = function $$oj$$57$$$$ArrayHeaderSet$$$$getExtent$$($index$$248$$, $level$$36$$) {
    $oj$$57$$.$Assert$.assert($index$$248$$ <= this.$m_end$ && $index$$248$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$36$$ || 0 == $level$$36$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getExtent", {$getExtent$:$oj$$57$$.$ArrayHeaderSet$.prototype.$getExtent$});
  $oj$$57$$.$ArrayHeaderSet$.prototype.$getDepth$ = function $$oj$$57$$$$ArrayHeaderSet$$$$getDepth$$($index$$249$$, $level$$37$$) {
    $oj$$57$$.$Assert$.assert($index$$249$$ <= this.$m_end$ && $index$$249$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$37$$ || 0 == $level$$37$$, "level out of bounds");
    return 1;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getDepth", {$getDepth$:$oj$$57$$.$ArrayHeaderSet$.prototype.$getDepth$});
  $oj$$57$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$57$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$57$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$57$$.$ArrayHeaderSet$.prototype.$getStart$ = function $$oj$$57$$$$ArrayHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$57$$.$ArrayHeaderSet$.prototype.$getStart$});
  $oj$$57$$.$ArrayCellSet$ = function $$oj$$57$$$$ArrayCellSet$$($startRow$$2$$, $endRow$$1$$, $startColumn$$2$$, $endColumn$$1$$, $callback$$122$$) {
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_callback$ = $callback$$122$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$57$$.$ArrayCellSet$, $oj$$57$$);
  $oj$$57$$.$ArrayCellSet$.prototype.getData = function $$oj$$57$$$$ArrayCellSet$$$getData$($indexes$$14$$) {
    return this.$m_callback$.$_getCellData$($indexes$$14$$.row, $indexes$$14$$.column);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$57$$.$ArrayCellSet$.prototype.getData});
  $oj$$57$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$57$$$$ArrayCellSet$$$getMetadata$($indexes$$15$$) {
    return this.$m_callback$.$_getCellMetadata$($indexes$$15$$.row, $indexes$$15$$.column);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$57$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$57$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$57$$$$ArrayCellSet$$$$getStart$$($axis$$44$$) {
    return "row" == $axis$$44$$ ? this.$m_startRow$ : "column" == $axis$$44$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$57$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$57$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$57$$$$ArrayCellSet$$$$getCount$$($axis$$45$$) {
    return "row" === $axis$$45$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$45$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$57$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$57$$.$ArrayCellSet$.prototype.getStartRow = function $$oj$$57$$$$ArrayCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {getStartRow:$oj$$57$$.$ArrayCellSet$.prototype.getStartRow});
  $oj$$57$$.$ArrayCellSet$.prototype.getStartColumn = function $$oj$$57$$$$ArrayCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {getStartColumn:$oj$$57$$.$ArrayCellSet$.prototype.getStartColumn});
});
