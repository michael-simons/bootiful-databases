/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$42$$) {
  $oj$$42$$.$CollectionHeaderSet$ = function $$oj$$42$$$$CollectionHeaderSet$$($start$$48$$, $end$$15$$, $headers$$4$$, $rowHeader$$1$$, $sortInfo$$) {
    $oj$$42$$.$Assert$.$assertArrayOrNull$($headers$$4$$);
    this.$m_start$ = $start$$48$$;
    this.$m_end$ = $end$$15$$;
    this.$m_headers$ = $headers$$4$$;
    this.$m_rowHeader$ = $rowHeader$$1$$;
    this.$m_sortInfo$ = $sortInfo$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$42$$.$CollectionHeaderSet$, $oj$$42$$);
  $oj$$42$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$42$$$$CollectionHeaderSet$$$$setModels$$($models$$15$$) {
    $oj$$42$$.$Assert$.$assertArray$($models$$15$$);
    null != $models$$15$$ && $models$$15$$.length === this.$getCount$() && (this.$m_models$ = $models$$15$$);
  };
  $oj$$42$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$42$$$$CollectionHeaderSet$$$getData$($index$$202$$, $level$$30$$) {
    var $model$$70$$;
    $oj$$42$$.$Assert$.assert($index$$202$$ <= this.$m_end$ && $index$$202$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$30$$ || 0 == $level$$30$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$70$$ = this.$m_models$[$index$$202$$ - this.$m_start$];
      return $model$$70$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$202$$];
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$42$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$42$$$$CollectionHeaderSet$$$getMetadata$($index$$203$$, $level$$31$$) {
    var $data$$153_model$$71$$;
    $oj$$42$$.$Assert$.assert($index$$203$$ <= this.$m_end$ && $index$$203$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$31$$ || 0 == $level$$31$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $data$$153_model$$71$$ = this.$m_models$[$index$$203$$ - this.$m_start$];
      return{key:$oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($data$$153_model$$71$$)};
    }
    $data$$153_model$$71$$ = this.getData($index$$203$$, $level$$31$$);
    return this.$m_sortInfo$.key === $data$$153_model$$71$$ ? {key:$data$$153_model$$71$$, sortDirection:this.$m_sortInfo$.direction} : {key:$data$$153_model$$71$$};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$42$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getLevelCount$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getLevelCount$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getExtent$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getExtent$$($index$$204$$, $level$$32$$) {
    $oj$$42$$.$Assert$.assert($index$$204$$ <= this.$m_end$ && $index$$204$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$32$$ || 0 == $level$$32$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getExtent", {$getExtent$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getExtent$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getDepth$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getDepth$$($index$$205$$, $level$$33$$) {
    $oj$$42$$.$Assert$.assert($index$$205$$ <= this.$m_end$ && $index$$205$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$33$$ || 0 == $level$$33$$, "level out of bounds");
    return 1;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getDepth", {$getDepth$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getDepth$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getStart$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$42$$.$CollectionCellSet$ = function $$oj$$42$$$$CollectionCellSet$$($startRow$$1$$, $endRow$$, $startColumn$$1$$, $endColumn$$, $columns$$22$$) {
    $oj$$42$$.$Assert$.$assertArrayOrNull$($columns$$22$$);
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_columns$ = $columns$$22$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$42$$.$CollectionCellSet$, $oj$$42$$);
  $oj$$42$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$42$$$$CollectionCellSet$$$$setModels$$($models$$16$$) {
    $oj$$42$$.$Assert$.$assertArray$($models$$16$$);
    null != $models$$16$$ && $models$$16$$.length === this.$getCount$("row") && (this.$m_models$ = $models$$16$$);
  };
  $oj$$42$$.$CollectionCellSet$.prototype.getData = function $$oj$$42$$$$CollectionCellSet$$$getData$($indexes$$8$$) {
    var $model$$72$$;
    $model$$72$$ = this.$_getModel$($indexes$$8$$);
    return null == $model$$72$$ ? null : $model$$72$$.get(this.$m_columns$[$indexes$$8$$.column]);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$42$$.$CollectionCellSet$.prototype.getData});
  $oj$$42$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$42$$$$CollectionCellSet$$$getMetadata$($indexes$$9$$) {
    var $model$$73$$;
    $model$$73$$ = this.$_getModel$($indexes$$9$$);
    return null == $model$$73$$ ? null : {keys:{row:$oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$73$$), column:this.$m_columns$[$indexes$$9$$.column]}};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$42$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$42$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$42$$$$CollectionCellSet$$$$_getModel$$($column$$23_indexes$$10$$) {
    var $row$$40$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$42$$.$Assert$.$assertObject$($column$$23_indexes$$10$$);
    $row$$40$$ = $column$$23_indexes$$10$$.row;
    $column$$23_indexes$$10$$ = $column$$23_indexes$$10$$.column;
    $oj$$42$$.$Assert$.assert($row$$40$$ >= this.$m_startRow$ && $row$$40$$ <= this.$m_endRow$ && $column$$23_indexes$$10$$ >= this.$m_startColumn$ && $column$$23_indexes$$10$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$40$$ - this.$m_startRow$];
  };
  $oj$$42$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$42$$$$CollectionCellSet$$$$getCount$$($axis$$29$$) {
    return "row" === $axis$$29$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$29$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$42$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$42$$.$CollectionCellSet$.prototype.getStartRow = function $$oj$$42$$$$CollectionCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {getStartRow:$oj$$42$$.$CollectionCellSet$.prototype.getStartRow});
  $oj$$42$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$42$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$42$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$42$$.$CollectionCellSet$.prototype.getStartColumn = function $$oj$$42$$$$CollectionCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {getStartColumn:$oj$$42$$.$CollectionCellSet$.prototype.getStartColumn});
  $oj$$42$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$42$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$42$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$42$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$42$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$42$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$42$$.$CollectionDataGridUtils$ = function $$oj$$42$$$$CollectionDataGridUtils$$() {
  };
  $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$42$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$74$$) {
    var $key$$147$$;
    $key$$147$$ = $model$$74$$.$GetId$();
    null == $key$$147$$ && ($key$$147$$ = $model$$74$$.$GetCid$());
    return $key$$147$$;
  };
  $oj$$42$$.$CollectionDataGridDataSource$ = function $$oj$$42$$$$CollectionDataGridDataSource$$($collection$$31$$, $options$$313$$) {
    this.$collection$ = $collection$$31$$;
    null != $options$$313$$ && (this.$rowHeader$ = $options$$313$$.rowHeader, this.columns = $options$$313$$.columns);
    this.$_setSortInfo$();
    $oj$$42$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$42$$.$CollectionDataGridDataSource$, $oj$$42$$);
  $oj$$42$$.$Object$.$createSubclass$($oj$$42$$.$CollectionDataGridDataSource$, $oj$$42$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$42$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$42$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_registerEventListeners$();
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$42$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
    this.$collection$.on("reset", this.$_handleCollectionReset$.bind(this));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return null != this.data;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$30$$) {
    var $totalSize$$;
    void 0 == this.precision && (this.precision = {});
    if ("row" == $axis$$30$$) {
      $totalSize$$ = this.$_totalSize$();
      if (-1 === $totalSize$$ || 0 === $totalSize$$ && (!this.$_isDataAvailable$() || 0 < this.$_size$())) {
        return this.precision[$axis$$30$$] = "estimate", -1;
      }
      this.precision[$axis$$30$$] = "exact";
      return this.$_size$();
    }
    if ("column" == $axis$$30$$) {
      if (null != this.columns) {
        return this.precision[$axis$$30$$] = "exact", this.columns.length;
      }
      this.precision[$axis$$30$$] = "estimate";
      return-1;
    }
    return 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$31$$) {
    null != this.precision && null != this.precision[$axis$$31$$] || this.$getCount$($axis$$31$$);
    return this.precision[$axis$$31$$];
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$18$$, $callbackObjects$$4$$) {
    var $axis$$32$$, $callback$$115$$;
    null != $callbacks$$18$$ && ($axis$$32$$ = $headerRange$$1$$.axis, $callback$$115$$ = {}, $callback$$115$$.$headerRange$ = $headerRange$$1$$, $callback$$115$$.callbacks = $callbacks$$18$$, $callback$$115$$.$callbackObjects$ = $callbackObjects$$4$$, this.$pendingHeaderCallback$[$axis$$32$$] = $callback$$115$$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$2$$, $callbacks$$19$$, $callbackObjects$$5$$, $actualRange_end$$16$$) {
    var $axis$$33$$, $start$$49$$, $count$$50$$, $headerSet$$;
    $axis$$33$$ = $headerRange$$2$$.axis;
    $start$$49$$ = $headerRange$$2$$.start;
    $count$$50$$ = $headerRange$$2$$.count;
    if ("column" === $axis$$33$$) {
      null != this.columns ? ($actualRange_end$$16$$ = Math.min(this.columns.length, $start$$49$$ + $count$$50$$), $headerSet$$ = new $oj$$42$$.$CollectionHeaderSet$($start$$49$$, $actualRange_end$$16$$, this.columns, void 0, this.$_sortInfo$)) : $headerSet$$ = new $oj$$42$$.$ArrayHeaderSet$($start$$49$$, $start$$49$$, $axis$$33$$, null);
    } else {
      if ("row" === $axis$$33$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$16$$ && ($count$$50$$ = $actualRange_end$$16$$.count);
          $actualRange_end$$16$$ = Math.min(this.$_size$(), $start$$49$$ + $count$$50$$);
          $headerSet$$ = new $oj$$42$$.$CollectionHeaderSet$($start$$49$$, $actualRange_end$$16$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$49$$, $actualRange_end$$16$$, $headerSet$$, $headerRange$$2$$, $callbacks$$19$$, $callbackObjects$$5$$);
          return;
        }
        $headerSet$$ = new $oj$$42$$.$ArrayHeaderSet$($start$$49$$, $start$$49$$, $axis$$33$$, null);
      }
    }
    null != $callbacks$$19$$ && $callbacks$$19$$.success && $callbacks$$19$$.success.call($callbackObjects$$5$$.success, $headerSet$$, $headerRange$$2$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$) {
    var $i$$348$$, $cellRange$$2$$, $rowStart$$1$$, $rowCount$$6$$, $colStart$$, $colCount$$1$$;
    for ($i$$348$$ = 0;$i$$348$$ < $cellRanges$$.length;$i$$348$$ += 1) {
      $cellRange$$2$$ = $cellRanges$$[$i$$348$$], "row" === $cellRange$$2$$.axis ? ($rowStart$$1$$ = $cellRange$$2$$.start, $rowCount$$6$$ = $cellRange$$2$$.count) : "column" === $cellRange$$2$$.axis && ($colStart$$ = $cellRange$$2$$.start, $colCount$$1$$ = $cellRange$$2$$.count);
    }
    return{rowStart:$rowStart$$1$$, rowCount:$rowCount$$6$$, colStart:$colStart$$, colCount:$colCount$$1$$};
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$1$$, $callbacks$$20$$, $callbackObjects$$6$$, $actualRange$$1_rowEnd$$) {
    var $cellSet_colEnd_ranges$$, $rowStart$$2$$, $colStart$$1$$;
    $cellSet_colEnd_ranges$$ = this.$_getRanges$($cellRanges$$1$$);
    $rowStart$$2$$ = $cellSet_colEnd_ranges$$.rowStart;
    $actualRange$$1_rowEnd$$ = null != $actualRange$$1_rowEnd$$ ? Math.min(this.$_size$(), $rowStart$$2$$ + $actualRange$$1_rowEnd$$.count) : Math.min(this.$_size$(), $rowStart$$2$$ + $cellSet_colEnd_ranges$$.rowCount);
    $colStart$$1$$ = $cellSet_colEnd_ranges$$.colStart;
    $cellSet_colEnd_ranges$$ = Math.min(null == this.columns ? 0 : this.columns.length, $colStart$$1$$ + $cellSet_colEnd_ranges$$.colCount);
    $cellSet_colEnd_ranges$$ = new $oj$$42$$.$CollectionCellSet$($rowStart$$2$$, $actualRange$$1_rowEnd$$, $colStart$$1$$, $cellSet_colEnd_ranges$$, this.columns);
    this.$_resolveModels$($rowStart$$2$$, $actualRange$$1_rowEnd$$, $cellSet_colEnd_ranges$$, $cellRanges$$1$$, $callbacks$$20$$, $callbackObjects$$6$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$349_rowStart$$3$$, $rowEnd$$1$$, $set$$4$$, $ranges$$1$$, $callbacks$$21$$, $callbackObjects$$7$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$349_rowStart$$3$$ < $rowEnd$$1$$;$i$$349_rowStart$$3$$++) {
      $promises$$.push(this.$collection$.at($i$$349_rowStart$$3$$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$17$$) {
      $set$$4$$.$setModels$($models$$17$$);
      $callbacks$$21$$.success.call($callbackObjects$$7$$.success, $set$$4$$, $ranges$$1$$);
    });
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$2$$, $callbacks$$22$$, $callbackObjects$$8$$) {
    null != $callbacks$$22$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$2$$, this.$pendingCellCallback$.callbacks = $callbacks$$22$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$8$$);
    this.$_fetchCells$($cellRanges$$2$$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$34$$) {
    var $pendingCallback$$, $headerRange$$3$$, $callbacks$$23$$, $callbackObjects$$9$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$34$$];
    null != $pendingCallback$$ && ($headerRange$$3$$ = $pendingCallback$$.$headerRange$, $callbacks$$23$$ = $pendingCallback$$.callbacks, $callbackObjects$$9$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$34$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$3$$, $callbacks$$23$$, $callbackObjects$$9$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$34$$] = null);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$4_ranges$$2$$) {
    var $rowStart$$4$$;
    $cellRanges$$4_ranges$$2$$ = this.$_getRanges$($cellRanges$$4_ranges$$2$$);
    $rowStart$$4$$ = $cellRanges$$4_ranges$$2$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$4$$, $cellRanges$$4_ranges$$2$$.rowCount).then(function($actual$$5$$) {
      this.data = !0;
      this.$_setActualCallbackRanges$($actual$$5$$.start, $actual$$5$$.count);
      void 0 === this.columns ? this.$collection$.at($rowStart$$4$$, {deferred:!0}).then(function($model$$75$$) {
        null != $model$$75$$ && this.$_setupColumns$($model$$75$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this), function($e$$95$$) {
      this.$_fetchCellsError$($e$$95$$);
    }.bind(this));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsError$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_fetchCellsError$$($error$$39$$) {
    $oj$$42$$.$Logger$.error($error$$39$$);
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderErrorCallbacks$("column", $error$$39$$), this.$_processPendingHeaderErrorCallbacks$("row", $error$$39$$));
    null != this.$pendingCellCallback$ && this.$_processPendingCellErrorCallbacks$($error$$39$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderErrorCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingHeaderErrorCallbacks$$($axis$$35$$, $error$$40$$) {
    var $headerRange$$4_pendingCallback$$1$$, $callbacks$$25$$, $callbackObjects$$11$$;
    $headerRange$$4_pendingCallback$$1$$ = this.$pendingHeaderCallback$[$axis$$35$$];
    null != $headerRange$$4_pendingCallback$$1$$ && ($callbacks$$25$$ = $headerRange$$4_pendingCallback$$1$$.callbacks, $callbackObjects$$11$$ = $headerRange$$4_pendingCallback$$1$$.$callbackObjects$, $headerRange$$4_pendingCallback$$1$$ = $headerRange$$4_pendingCallback$$1$$.$headerRange$, $callbacks$$25$$.error && $callbacks$$25$$.error.call($callbackObjects$$11$$.error, $error$$40$$, $headerRange$$4_pendingCallback$$1$$), this.$pendingHeaderCallback$[$axis$$35$$] = null);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellErrorCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingCellErrorCallbacks$$($error$$41$$) {
    var $callbacks$$26$$, $callbackObjects$$12$$, $cellRanges$$5$$;
    $callbacks$$26$$ = this.$pendingCellCallback$.callbacks;
    $callbackObjects$$12$$ = this.$pendingCellCallback$.$callbackObjects$;
    $cellRanges$$5$$ = this.$pendingCellCallback$.$cellRanges$;
    $callbacks$$26$$.error && $callbacks$$26$$.error.call($callbackObjects$$12$$.error, $error$$41$$, $cellRanges$$5$$);
    this.$pendingCellCallback$ = null;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$50$$, $count$$51$$) {
    var $actualRange$$4$$ = {start:$start$$50$$, count:$count$$51$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$76$$) {
    this.columns = $model$$76$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$42$$$$CollectionDataGridDataSource$$$keys$($indexes$$11$$) {
    var $rowIndex$$6$$, $columnIndex$$2$$, $rowKey$$30$$, $columnKey$$1$$, $self$$160$$;
    $rowIndex$$6$$ = $indexes$$11$$.row;
    $columnIndex$$2$$ = $indexes$$11$$.column;
    $self$$160$$ = this;
    return new Promise(function($resolve$$44$$) {
      $self$$160$$.$collection$.at($rowIndex$$6$$, {deferred:!0}).then(function($rowModel$$) {
        null == $rowModel$$ ? $resolve$$44$$({row:null, column:null}) : ($rowKey$$30$$ = $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$), null == $self$$160$$.columns && $self$$160$$.$_setupColumns$($rowModel$$), $columnKey$$1$$ = $self$$160$$.columns[$columnIndex$$2$$], $resolve$$44$$({row:$rowKey$$30$$, column:$columnKey$$1$$}));
      }.bind($self$$160$$));
    });
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$42$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$37$$) {
    var $rowKey$$31$$, $columnKey$$2$$, $columnIndex$$3$$, $self$$161$$;
    $rowKey$$31$$ = $keys$$37$$.row;
    $columnKey$$2$$ = $keys$$37$$.column;
    $self$$161$$ = this;
    return new Promise(function($resolve$$45$$) {
      $self$$161$$.$collection$.indexOf($rowKey$$31$$, {deferred:!0}).then(function($rowIndex$$7$$) {
        -1 === $rowIndex$$7$$ ? $resolve$$45$$({row:-1, column:-1}) : null == $self$$161$$.columns ? $self$$161$$.$collection$.at($rowIndex$$7$$, {deferred:!0}).then(function($model$$77$$) {
          $self$$161$$.$_setupColumns$($model$$77$$);
          $columnIndex$$3$$ = $self$$161$$.columns.indexOf($columnKey$$2$$);
          -1 === $columnIndex$$3$$ && ($rowIndex$$7$$ = -1);
          $resolve$$45$$({row:$rowIndex$$7$$, column:$columnIndex$$3$$});
        }.bind($self$$161$$)) : ($columnIndex$$3$$ = $self$$161$$.columns.indexOf($columnKey$$2$$), -1 === $columnIndex$$3$$ && ($rowIndex$$7$$ = -1), $resolve$$45$$({row:$rowIndex$$7$$, column:$columnIndex$$3$$}));
      }.bind($self$$161$$));
    });
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$42$$$$CollectionDataGridDataSource$$$getCapability$($feature$$7$$) {
    return "sort" === $feature$$7$$ ? "column" : "move" === $feature$$7$$ ? "row" : null;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$42$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$42$$$$CollectionDataGridDataSource$$$sort$($axis$$36_criteria$$2$$, $callbacks$$27$$, $callbackObjects$$13$$) {
    var $comparator$$13$$, $direction$$8$$, $key$$148$$;
    null == $callbackObjects$$13$$ && ($callbackObjects$$13$$ = {});
    null == $axis$$36_criteria$$2$$ ? this.$_resetSortOrder$($callbacks$$27$$, $callbackObjects$$13$$) : ($direction$$8$$ = $axis$$36_criteria$$2$$.direction, $key$$148$$ = $axis$$36_criteria$$2$$.key, $axis$$36_criteria$$2$$ = $axis$$36_criteria$$2$$.axis, "column" === $axis$$36_criteria$$2$$ ? (this.$collection$.$IsVirtual$() ? (this.$collection$.comparator = $key$$148$$, this.$collection$.sortDirection = "ascending" === $direction$$8$$ ? 1 : -1) : ("ascending" === $direction$$8$$ && ($comparator$$13$$ = 
    function $$comparator$$13$$$($a$$115$$, $b$$69$$) {
      var $as$$, $bs$$;
      $a$$115$$ = $a$$115$$.get($key$$148$$);
      $b$$69$$ = $b$$69$$.get($key$$148$$);
      $as$$ = isNaN($a$$115$$);
      $bs$$ = isNaN($b$$69$$);
      $a$$115$$ instanceof Date && ($a$$115$$ = $a$$115$$.toISOString(), $as$$ = !0);
      $b$$69$$ instanceof Date && ($b$$69$$ = $b$$69$$.toISOString(), $bs$$ = !0);
      return $as$$ && $bs$$ ? $a$$115$$ < $b$$69$$ ? -1 : $a$$115$$ === $b$$69$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$115$$ - $b$$69$$;
    }), "descending" === $direction$$8$$ && ($comparator$$13$$ = function $$comparator$$13$$$($a$$116$$, $b$$70$$) {
      var $as$$1$$, $bs$$1$$;
      $a$$116$$ = $a$$116$$.get($key$$148$$);
      $b$$70$$ = $b$$70$$.get($key$$148$$);
      $as$$1$$ = isNaN($a$$116$$);
      $bs$$1$$ = isNaN($b$$70$$);
      $a$$116$$ instanceof Date && ($a$$116$$ = $a$$116$$.toISOString());
      $b$$70$$ instanceof Date && ($b$$70$$ = $b$$70$$.toISOString());
      return $as$$1$$ && $bs$$1$$ ? $a$$116$$ > $b$$70$$ ? -1 : $a$$116$$ === $b$$70$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$70$$ - $a$$116$$;
    }), this.$collection$.comparator = $comparator$$13$$), this.$collection$.sort(), this.$_setSortInfo$($key$$148$$), null != $callbacks$$27$$ && null != $callbacks$$27$$.success && $callbacks$$27$$.success.call($callbackObjects$$13$$.success)) : null != $callbacks$$27$$ && null != $callbacks$$27$$.error && $callbacks$$27$$.error.call($callbackObjects$$13$$.error, "Axis value not supported"));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$42$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_resetSortOrder$$($callbacks$$28$$, $callbackObjects$$14$$) {
    this.$collection$.comparator = null;
    this.$collection$.reset();
    null != $callbacks$$28$$ && null != $callbacks$$28$$.success && $callbacks$$28$$.success.call($callbackObjects$$14$$.success);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_setSortInfo$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_setSortInfo$$($key$$149$$) {
    var $comparator$$14$$, $direction$$9$$;
    $comparator$$14$$ = this.$collection$.comparator;
    $direction$$9$$ = -1 === this.$collection$.sortDirection ? "descending" : "ascending";
    null == $key$$149$$ && "function" === typeof $comparator$$14$$ ? this.$_sortInfo$ = {} : (this.$_sortInfo$ = {}, this.$_sortInfo$.axis = "column", this.$_sortInfo$.direction = $direction$$9$$, this.$_sortInfo$.key = null == $key$$149$$ ? $comparator$$14$$ : null);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$42$$$$CollectionDataGridDataSource$$$move$($moveKey$$, $atKey$$, $position$$25$$, $callbacks$$29$$, $callbackObjects$$15$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$), null != $callbacks$$29$$ && null != $callbacks$$29$$.success && $callbacks$$29$$.success.call($callbackObjects$$15$$.success)) : ($moveKey$$ === $atKey$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$2$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$2$$, $force$:!0});
        null != $callbacks$$29$$ && null != $callbacks$$29$$.success && $callbacks$$29$$.success.call($callbackObjects$$15$$.success);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$42$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$moveOK$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$moveOK$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$4$$, $rowKey$$32$$, $columnKey$$3$$, $rowIndex$$8$$, $columnIndex$$4$$) {
    var $event$$467$$ = {source:this};
    $event$$467$$.operation = $operation$$4$$;
    $event$$467$$.keys = {row:$rowKey$$32$$, column:$columnKey$$3$$};
    $event$$467$$.indexes = {row:$rowIndex$$8$$, column:$columnIndex$$4$$};
    return $event$$467$$;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$78$$) {
    this.handleEvent("change", this.$_getModelEvent$("insert", $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$78$$), null, $model$$78$$.index, -1));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$79$$, $collection$$33$$, $args$$20$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$79$$), null, $args$$20$$.index, -1));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$80$$) {
    this.handleEvent("change", this.$_getModelEvent$("update", $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$80$$), null, $model$$80$$.index, -1));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionReset$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleCollectionReset$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("reset", null, null));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_size$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_size$$() {
    return this.$collection$.size();
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_totalSize$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_totalSize$$() {
    return void 0 === this.$collection$.totalResults ? -1 : this.$collection$.totalResults;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getCollection$$() {
    return this.$collection$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$42$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$42$$.$CollectionDataGridDataSource$.prototype.getData});
});
