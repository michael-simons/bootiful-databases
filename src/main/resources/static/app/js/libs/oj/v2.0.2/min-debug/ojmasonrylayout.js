/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$67$$, $$$$61$$) {
  function $MasonryLayoutCommon$$($elem$$83$$, $rtl$$4_sizeDivWrapper$$, $automationEnabled_style$$10$$, $selectors$$8_sizeDiv$$, $styles$$2$$, $callbackInfo$$) {
    null == $MasonryLayoutCommon$$.$_agentTypeAndVersion$ && ($MasonryLayoutCommon$$.$_agentTypeAndVersion$ = $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$());
    this.$_elem$ = $elem$$83$$;
    this.$_rtl$ = $rtl$$4_sizeDivWrapper$$;
    this.$_automationEnabled$ = $automationEnabled_style$$10$$;
    $selectors$$8_sizeDiv$$ && $selectors$$8_sizeDiv$$.$tiles$ && (this.$_tilesSelector$ = $selectors$$8_sizeDiv$$.$tiles$);
    $styles$$2$$ && ($styles$$2$$.$transitionComponentResizeToStyleClass$ && (this.$_transitionComponentResizeToStyleClass$ = $styles$$2$$.$transitionComponentResizeToStyleClass$), $styles$$2$$.$transitionComponentResizeToFastStyleClass$ && (this.$_transitionComponentResizeToFastStyleClass$ = $styles$$2$$.$transitionComponentResizeToFastStyleClass$), $styles$$2$$.$transitionMoveToStyleClass$ && (this.$_transitionMoveToStyleClass$ = $styles$$2$$.$transitionMoveToStyleClass$), $styles$$2$$.$transitionMoveToFastStyleClass$ && 
    (this.$_transitionMoveToFastStyleClass$ = $styles$$2$$.$transitionMoveToFastStyleClass$), $styles$$2$$.$transitionHideFromStyleClass$ && (this.$_transitionHideFromStyleClass$ = $styles$$2$$.$transitionHideFromStyleClass$), $styles$$2$$.$transitionHideToStyleClass$ && (this.$_transitionHideToStyleClass$ = $styles$$2$$.$transitionHideToStyleClass$), $styles$$2$$.$transitionShowFromStyleClass$ && (this.$_transitionShowFromStyleClass$ = $styles$$2$$.$transitionShowFromStyleClass$), $styles$$2$$.$transitionShowToStyleClass$ && 
    (this.$_transitionShowToStyleClass$ = $styles$$2$$.$transitionShowToStyleClass$), $styles$$2$$.$transitionResizeToStyleClass$ && (this.$_transitionResizeToStyleClass$ = $styles$$2$$.$transitionResizeToStyleClass$));
    $callbackInfo$$ && ($callbackInfo$$.$addStyleClassName$ && (this.$_addStyleClassNameFunc$ = $callbackInfo$$.$addStyleClassName$), $callbackInfo$$.$removeStyleClassName$ && (this.$_removeStyleClassNameFunc$ = $callbackInfo$$.$removeStyleClassName$), $callbackInfo$$.$getSizeStyleClassName$ && (this.$_getSizeStyleClassNameFunc$ = $callbackInfo$$.$getSizeStyleClassName$), $callbackInfo$$.$getTileSpan$ && (this.$_getTileSpanFunc$ = $callbackInfo$$.$getTileSpan$), $callbackInfo$$.$showTileOnEndFunc$ && 
    (this.$_showTileOnEndFunc$ = $callbackInfo$$.$showTileOnEndFunc$), $callbackInfo$$.$hideTileOnEndFunc$ && (this.$_hideTileOnEndFunc$ = $callbackInfo$$.$hideTileOnEndFunc$), $callbackInfo$$.$layoutOnEndFunc$ && (this.$_layoutOnEndFunc$ = $callbackInfo$$.$layoutOnEndFunc$), $callbackInfo$$.$layoutCycleOnStartFunc$ && (this.$_layoutCycleOnStartFunc$ = $callbackInfo$$.$layoutCycleOnStartFunc$), $callbackInfo$$.$layoutCycleOnEndFunc$ && (this.$_layoutCycleOnEndFunc$ = $callbackInfo$$.$layoutCycleOnEndFunc$), 
    $callbackInfo$$.$sortTilesOriginalOrderFunc$ && (this.$_sortTilesOriginalOrderFunc$ = $callbackInfo$$.$sortTilesOriginalOrderFunc$), $callbackInfo$$.$subtreeAttached$ && (this.$_subtreeAttachedFunc$ = $callbackInfo$$.$subtreeAttached$), $callbackInfo$$.$subtreeDetached$ && (this.$_subtreeDetachedFunc$ = $callbackInfo$$.$subtreeDetached$));
    $rtl$$4_sizeDivWrapper$$ = document.createElement("div");
    $automationEnabled_style$$10$$ = $rtl$$4_sizeDivWrapper$$.style;
    $automationEnabled_style$$10$$.display = "inline-block";
    $automationEnabled_style$$10$$.overflow = "hidden";
    $automationEnabled_style$$10$$.visibility = "hidden";
    $selectors$$8_sizeDiv$$ = document.createElement("div");
    $automationEnabled_style$$10$$ = $selectors$$8_sizeDiv$$.style;
    $automationEnabled_style$$10$$.display = "inline-block";
    $rtl$$4_sizeDivWrapper$$.appendChild($selectors$$8_sizeDiv$$);
    $elem$$83$$.insertBefore($rtl$$4_sizeDivWrapper$$, $elem$$83$$.firstChild);
    this.$_sizeDivWrapper$ = $rtl$$4_sizeDivWrapper$$;
    this.$_sizeDiv$ = $selectors$$8_sizeDiv$$;
    var $self$$203$$ = this;
    this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$($event$$583$$) {
      $self$$203$$.$_handleTransitionEnd$($event$$583$$);
    };
    this.$_hideTilesFunc$ = function $this$$_hideTilesFunc$$() {
      $self$$203$$.$_hideTiles$();
    };
    this.$_handleHideTransitionEndFunc$ = function $this$$_handleHideTransitionEndFunc$$($event$$584$$) {
      $self$$203$$.$_handleHideTransitionEnd$($event$$584$$);
    };
    this.$_handleShowTransitionEndFunc$ = function $this$$_handleShowTransitionEndFunc$$($event$$585$$) {
      $self$$203$$.$_handleShowTransitionEnd$($event$$585$$);
    };
  }
  (function() {
    function $_getNextElement$$($currElem$$1_elem$$115_nextElem$$2$$) {
      for (;$currElem$$1_elem$$115_nextElem$$2$$;) {
        $currElem$$1_elem$$115_nextElem$$2$$ = $currElem$$1_elem$$115_nextElem$$2$$.nextSibling;
        var $bVisible$$ = !0;
        if ($currElem$$1_elem$$115_nextElem$$2$$) {
          var $style$$17$$ = $currElem$$1_elem$$115_nextElem$$2$$.style;
          !$style$$17$$ || $style$$17$$.visibility !== $_HIDDEN$$ && $style$$17$$.display !== $_NONE$$ || ($bVisible$$ = !1);
        }
        if ($currElem$$1_elem$$115_nextElem$$2$$ && 1 === $currElem$$1_elem$$115_nextElem$$2$$.nodeType && $bVisible$$) {
          return $currElem$$1_elem$$115_nextElem$$2$$;
        }
      }
      return null;
    }
    function $_findContainingTile$$($elem$$114$$, $rootElem$$) {
      for (var $currElem$$ = $elem$$114$$;$currElem$$;) {
        var $parentElem$$3_style$$16$$ = $currElem$$.style;
        if ($parentElem$$3_style$$16$$ && ($parentElem$$3_style$$16$$.visibility === $_HIDDEN$$ || $parentElem$$3_style$$16$$.display === $_NONE$$)) {
          break;
        }
        $parentElem$$3_style$$16$$ = $currElem$$.parentNode;
        if ($parentElem$$3_style$$16$$ === $rootElem$$) {
          return $currElem$$;
        }
        $currElem$$ = $parentElem$$3_style$$16$$;
      }
      return null;
    }
    function $_compareTilesOriginalOrder$$($tile1$$, $tile2$$) {
      return $tile2$$.$_jetDataMasonryOriginalOrder$ < $tile1$$.$_jetDataMasonryOriginalOrder$ ? 1 : $tile1$$.$_jetDataMasonryOriginalOrder$ < $tile2$$.$_jetDataMasonryOriginalOrder$ ? -1 : 0;
    }
    function $_sortTilesOriginalOrder$$($arTiles$$4$$) {
      $arTiles$$4$$ && $arTiles$$4$$.sort($_compareTilesOriginalOrder$$);
      return $arTiles$$4$$;
    }
    function $_getTileSpan$$($elem$$113_tile$$12$$) {
      var $span$$2$$ = null;
      $elem$$113_tile$$12$$ = $$$$61$$($elem$$113_tile$$12$$);
      $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-1x1") ? $span$$2$$ = {colSpan:1, rowSpan:1} : $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-2x1") ? $span$$2$$ = {colSpan:2, rowSpan:1} : $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-3x1") ? $span$$2$$ = {colSpan:3, rowSpan:1} : $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-1x2") ? $span$$2$$ = {colSpan:1, rowSpan:2} : $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-1x3") ? $span$$2$$ = {colSpan:1, rowSpan:3} : 
      $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-2x2") ? $span$$2$$ = {colSpan:2, rowSpan:2} : $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-2x3") ? $span$$2$$ = {colSpan:2, rowSpan:3} : $elem$$113_tile$$12$$.hasClass("oj-masonrylayout-tile-3x2") && ($span$$2$$ = {colSpan:3, rowSpan:2});
      return $span$$2$$;
    }
    function $_getSizeStyleClassName$$($elem$$112_tile$$11$$) {
      var $str$$22$$ = null;
      $elem$$112_tile$$11$$ = $$$$61$$($elem$$112_tile$$11$$);
      $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-1x1") ? $str$$22$$ = "oj-masonrylayout-tile-1x1" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-2x1") ? $str$$22$$ = "oj-masonrylayout-tile-2x1" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-3x1") ? $str$$22$$ = "oj-masonrylayout-tile-3x1" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-1x2") ? $str$$22$$ = "oj-masonrylayout-tile-1x2" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-1x3") ? $str$$22$$ = 
      "oj-masonrylayout-tile-1x3" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-2x2") ? $str$$22$$ = "oj-masonrylayout-tile-2x2" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-2x3") ? $str$$22$$ = "oj-masonrylayout-tile-2x3" : $elem$$112_tile$$11$$.hasClass("oj-masonrylayout-tile-3x2") && ($str$$22$$ = "oj-masonrylayout-tile-3x2");
      return $str$$22$$;
    }
    function $_removeStyleClassName$$($elem$$111$$, $styleClass$$9$$) {
      $$$$61$$($elem$$111$$).removeClass($styleClass$$9$$);
    }
    function $_addStyleClassName$$($elem$$110$$, $styleClass$$8$$) {
      $$$$61$$($elem$$110$$).addClass($styleClass$$8$$);
    }
    $oj$$67$$.$__registerWidget$("oj.ojMasonryLayout", $$$$61$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{reorderHandle:null, beforeInsert:null, insert:null, beforeRemove:null, remove:null, beforeResize:null, resize:null, beforeReorder:null, reorder:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-masonrylayout oj-component");
      this.options.disabled && $oj$$67$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
      this.$reorderHandleEventNamespace$ = this.eventNamespace + "ReorderHandle";
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemCut$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyMLCommon$();
      this.$_setup$($bRecreate$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyContextMenuGesture$:function($menu$$21$$, $event$$586$$, $eventType$$51$$) {
      this.$_prepareContextMenuBeforeOpen$($event$$586$$);
      this.$_OpenContextMenu$($event$$586$$, $eventType$$51$$, {launcher:$$$$61$$($event$$586$$.target).closest(":tabbable")});
    }, $_setup$:function($isInit$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$67$$.$DomUtils$.$isTouchSupported$();
        var $elem$$85_oldIsInit$$ = this.element, $children$$14_options$$355$$ = this.options;
        if ($isInit$$) {
          var $self$$204$$ = this;
          this.$_showTileOnEndFunc$ = function $this$$_showTileOnEndFunc$$($elem$$86$$) {
            $self$$204$$.$_showTileOnEnd$($elem$$86$$);
          };
          this.$_hideTileOnEndFunc$ = function $this$$_hideTileOnEndFunc$$($elem$$87$$) {
            $self$$204$$.$_hideTileOnEnd$($elem$$87$$);
          };
          this.$_layoutOnEndFunc$ = function $this$$_layoutOnEndFunc$$() {
            $self$$204$$.$_layoutOnEnd$();
          };
          this.$_layoutCycleOnStartFunc$ = function $this$$_layoutCycleOnStartFunc$$() {
            $self$$204$$.$_layoutCycleOnStart$();
          };
          this.$_layoutCycleOnEndFunc$ = function $this$$_layoutCycleOnEndFunc$$() {
            $self$$204$$.$_layoutCycleOnEnd$();
          };
          if (!this.$_mlCommon$) {
            var $selectors$$9$$ = {};
            $selectors$$9$$.$tiles$ = $_TILE_SELECTOR$$;
            var $styles$$3$$ = {$transitionComponentResizeToStyleClass$:"oj-masonrylayout-transition-resize-to", $transitionComponentResizeToFastStyleClass$:"oj-masonrylayout-transition-resize-to-fast", $transitionMoveToStyleClass$:"oj-masonrylayout-tile-transition-move-to", $transitionMoveToFastStyleClass$:"oj-masonrylayout-tile-transition-move-to-fast", $transitionHideFromStyleClass$:"oj-masonrylayout-tile-transition-hide-from", $transitionHideToStyleClass$:"oj-masonrylayout-tile-transition-hide-to"};
            $styles$$3$$.$transitionShowFromStyleClass$ = $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$;
            $styles$$3$$.$transitionShowToStyleClass$ = "oj-masonrylayout-tile-transition-show-to";
            $styles$$3$$.$transitionResizeToStyleClass$ = "oj-masonrylayout-tile-transition-resize-to";
            var $callbackInfo$$1$$ = {};
            $callbackInfo$$1$$.$addStyleClassName$ = $_addStyleClassName$$;
            $callbackInfo$$1$$.$removeStyleClassName$ = $_removeStyleClassName$$;
            $callbackInfo$$1$$.$getSizeStyleClassName$ = $_getSizeStyleClassName$$;
            $callbackInfo$$1$$.$getTileSpan$ = $_getTileSpan$$;
            $callbackInfo$$1$$.$showTileOnEndFunc$ = this.$_showTileOnEndFunc$;
            $callbackInfo$$1$$.$hideTileOnEndFunc$ = this.$_hideTileOnEndFunc$;
            $callbackInfo$$1$$.$layoutOnEndFunc$ = this.$_layoutOnEndFunc$;
            $callbackInfo$$1$$.$layoutCycleOnStartFunc$ = this.$_layoutCycleOnStartFunc$;
            $callbackInfo$$1$$.$layoutCycleOnEndFunc$ = this.$_layoutCycleOnEndFunc$;
            $callbackInfo$$1$$.$sortTilesOriginalOrderFunc$ = $_sortTilesOriginalOrder$$;
            $callbackInfo$$1$$.$subtreeAttached$ = $oj$$67$$.Components.$subtreeAttached$;
            $callbackInfo$$1$$.$subtreeDetached$ = $oj$$67$$.Components.$subtreeDetached$;
            this.$_saveTilesOriginalOrder$();
            this.$_mlCommon$ = new $MasonryLayoutCommon$$($elem$$85_oldIsInit$$[0], this.$_bRTL$, "enabled" === $oj$$67$$.$Config$.$getAutomationMode$(), $selectors$$9$$, $styles$$3$$, $callbackInfo$$1$$);
          }
          this.$_handleDragStartFunc$ = function $this$$_handleDragStartFunc$$($event$$587$$) {
            $self$$204$$.$_handleDragStart$($event$$587$$);
          };
          this.$_handleDragEnterFunc$ = function $this$$_handleDragEnterFunc$$($event$$588$$) {
            $self$$204$$.$_handleDragEnter$($event$$588$$);
          };
          this.$_handleDragOverFunc$ = function $this$$_handleDragOverFunc$$($event$$589$$) {
            $self$$204$$.$_handleDragOver$($event$$589$$);
          };
          this.$_handleDragLeaveFunc$ = function $this$$_handleDragLeaveFunc$$($event$$590$$) {
            $self$$204$$.$_handleDragLeave$($event$$590$$);
          };
          this.$_handleDragEndFunc$ = function $this$$_handleDragEndFunc$$($event$$591$$) {
            $self$$204$$.$_handleDragEnd$($event$$591$$);
          };
          this.$_handleDropFunc$ = function $this$$_handleDropFunc$$($event$$592$$) {
            $self$$204$$.$_handleDrop$($event$$592$$);
          };
          $children$$14_options$$355$$.reorderHandle && this.$_setupReorderHandles$();
        } else {
          $children$$14_options$$355$$ = $elem$$85_oldIsInit$$.children(), this.$_tearDownReorderHandlesForElem$($children$$14_options$$355$$), this.$_setupReorderHandlesForElem$($children$$14_options$$355$$), this.$_checkTilesOriginalOrder$();
        }
        this.$_mlCommon$.$setup$($isInit$$);
        $isInit$$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$204$$.$_handleResize$();
        }, $oj$$67$$.$DomUtils$.$addResizeListener$($elem$$85_oldIsInit$$[0], this.$_handleResizeFunc$));
      } else {
        $elem$$85_oldIsInit$$ = !1, this.$_needsSetup$ && ($elem$$85_oldIsInit$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$ || $elem$$85_oldIsInit$$];
      }
    }, _destroy:function() {
      this.$_clearMenu$();
      var $elem$$88$$ = this.element;
      $oj$$67$$.$DomUtils$.$removeResizeListener$($elem$$88$$[0], this.$_handleResizeFunc$);
      this.$_handleResizeFunc$ = null;
      this.$_restoreTilesOriginalOrder$();
      for (var $children$$15$$ = this.$_getTileElements$(), $numChildren$$ = $children$$15$$.length, $i$$426$$ = 0;$i$$426$$ < $numChildren$$;$i$$426$$++) {
        delete $children$$15$$[$i$$426$$].$_jetDataMasonryOriginalOrder$;
      }
      this.$_destroyMLCommon$();
      $elem$$88$$.removeClass("oj-masonrylayout oj-component");
      this.options.reorderHandle && this.$_tearDownReorderHandles$();
      this.$_arTilesToInsert$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_handleDropFunc$ = this.$_handleDragEndFunc$ = this.$_handleDragLeaveFunc$ = this.$_handleDragOverFunc$ = this.$_handleDragEnterFunc$ = this.$_handleDragStartFunc$ = null;
      this._super();
    }, _setOption:function($key$$182$$, $value$$306$$, $flags$$53$$) {
      var $bReorderHandle$$ = !1;
      switch($key$$182$$) {
        case "reorderHandle":
          this.$_tearDownReorderHandles$();
          $bReorderHandle$$ = !0;
          break;
        case "disabled":
          $oj$$67$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
          break;
        case "contextMenu":
          $oj$$67$$.$DomUtils$.$isTouchSupported$() || (this.$_clearMenu$(), $value$$306$$ && this.$_initMenu$($value$$306$$));
      }
      this._super($key$$182$$, $value$$306$$, $flags$$53$$);
      $bReorderHandle$$ && $value$$306$$ && this.$_setupReorderHandles$();
    }, resizeTile:function($selector$$39$$, $sizeStyleClass$$) {
      var $mlCommon$$1$$ = this.$_mlCommon$;
      $mlCommon$$1$$.$isInLayoutCycle$() && $mlCommon$$1$$.$finishLayoutCycle$();
      var $jqElem$$1$$ = $$$$61$$($selector$$39$$), $elem$$90$$ = $jqElem$$1$$[0], $prevSizeStyleClass$$ = $_getSizeStyleClassName$$($elem$$90$$);
      if ($sizeStyleClass$$ == $prevSizeStyleClass$$) {
        throw Error("JET MasonryLayout: Unable to resize child " + $selector$$39$$ + " to style class " + $sizeStyleClass$$ + " because " + $sizeStyleClass$$ + " is already applied.");
      }
      !1 !== this._trigger("beforeResize", null, {tile:$jqElem$$1$$, previousSizeStyleClass:$prevSizeStyleClass$$, sizeStyleClass:$sizeStyleClass$$}) && (this.$_arResizingTiles$ || (this.$_arResizingTiles$ = []), this.$_arResizingTiles$.push($elem$$90$$, $prevSizeStyleClass$$, $sizeStyleClass$$), $mlCommon$$1$$.resizeTile($selector$$39$$, $sizeStyleClass$$));
    }, insertTile:function($selector$$40$$, $index$$269$$) {
      var $mlCommon$$2$$ = this.$_mlCommon$;
      $mlCommon$$2$$.$isInLayoutCycle$() && $mlCommon$$2$$.$finishLayoutCycle$();
      isNaN($index$$269$$) && ($index$$269$$ = -1);
      var $jqElem$$2_style$$11$$ = $$$$61$$($selector$$40$$), $elem$$91$$ = $jqElem$$2_style$$11$$[0];
      !1 !== this._trigger("beforeInsert", null, {tile:$jqElem$$2_style$$11$$, index:$index$$269$$}) && ($elem$$91$$.$_jetDataTileInsertIndex$ = $index$$269$$, $mlCommon$$2$$.$isAnimationEnabled$() && $jqElem$$2_style$$11$$.addClass($_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$), $jqElem$$2_style$$11$$ = $elem$$91$$.style, $jqElem$$2_style$$11$$.top = "-1px", this.$_bRTL$ ? $jqElem$$2_style$$11$$.right = "-1px" : $jqElem$$2_style$$11$$.left = "-1px", this.$_insertTileOriginalOrder$($elem$$91$$, 
      $index$$269$$), $mlCommon$$2$$.$insertTileDomElem$($elem$$91$$, $index$$269$$), $oj$$67$$.Components.$subtreeAttached$($elem$$91$$), this.$_arTilesToInsert$ || (this.$_arTilesToInsert$ = []), this.$_arTilesToInsert$.push($selector$$40$$));
    }, removeTile:function($selector$$41$$) {
      var $mlCommon$$3$$ = this.$_mlCommon$;
      $mlCommon$$3$$.$isInLayoutCycle$() && $mlCommon$$3$$.$finishLayoutCycle$();
      var $jqInfolet$$ = $$$$61$$($selector$$41$$), $index$$270_infolet$$ = $jqInfolet$$[0];
      if ($oj$$67$$.$FocusUtils$.$containsFocus$($index$$270_infolet$$)) {
        var $children$$16$$ = this.$_getTileElements$(!0), $index$$270_infolet$$ = $children$$16$$.indexOf($index$$270_infolet$$);
        0 < $index$$270_infolet$$ && (this.$_deletingTileWithFocusPrev$ = $children$$16$$[$index$$270_infolet$$ - 1]);
      }
      !1 !== this._trigger("beforeRemove", null, {tile:$jqInfolet$$}) && $mlCommon$$3$$.$hideTile$($selector$$41$$);
    }, $_handleResize$:function() {
      this.$_bDragging$ || this.$_inLayoutCycle$ || this.$_mlCommon$.$resizeNotify$();
    }, $_showTileOnEnd$:function($elem$$92$$) {
      var $jqElem$$3$$ = $$$$61$$($elem$$92$$), $index$$271$$ = $elem$$92$$.$_jetDataTileInsertIndex$;
      delete $elem$$92$$.$_jetDataTileInsertIndex$;
      this.options.reorderHandle && this.$_setupReorderHandlesForElem$($jqElem$$3$$);
      this._trigger("insert", null, {tile:$jqElem$$3$$, index:$index$$271$$});
    }, $_hideTileOnEnd$:function($elem$$93$$) {
      var $jqElem$$4$$ = $$$$61$$($elem$$93$$);
      this.options.reorderHandle && this.$_tearDownReorderHandlesForElem$($jqElem$$4$$);
      $oj$$67$$.Components.$subtreeDetached$($elem$$93$$);
      $elem$$93$$.parentNode.removeChild($elem$$93$$);
      this.$_removeTileOriginalOrder$($elem$$93$$);
      this._trigger("remove", null, {tile:$jqElem$$4$$});
    }, $_layoutOnEnd$:function() {
      if (this.$_arTilesToInsert$) {
        for (var $arResizingTiles$$1_mlCommon$$5$$ = this.$_mlCommon$, $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$ = this.$_arTilesToInsert$, $i$$427$$ = 0;$i$$427$$ < $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$.length;$i$$427$$++) {
          $arResizingTiles$$1_mlCommon$$5$$.$showTile$($arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$[$i$$427$$]);
        }
        this.$_arTilesToInsert$ = null;
      }
      if (this.$_arResizingTiles$) {
        $arResizingTiles$$1_mlCommon$$5$$ = this.$_arResizingTiles$;
        for ($i$$427$$ = 0;$i$$427$$ < $arResizingTiles$$1_mlCommon$$5$$.length;$i$$427$$ += 3) {
          var $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$427$$ + 1], $sizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$427$$ + 2], $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$ = {tile:$$$$61$$($arResizingTiles$$1_mlCommon$$5$$[$i$$427$$]), previousSizeStyleClass:$arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$, sizeStyleClass:$sizeStyleClass$$1$$};
          this._trigger("resize", null, $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$);
        }
        this.$_arResizingTiles$ = null;
      }
      this.$_bDragging$ && (this.$_bDragMoveTransition$ ? this.$_handleDragMoveTransitionEnd$() : this.$_bDragEndTransition$ && this.$_handleDragEndTransitionEnd$());
    }, $_layoutCycleOnStart$:function() {
      this.$_inLayoutCycle$ = !0;
      this.$_layoutStartActiveDomElem$ = null;
      var $activeDomElem$$ = document.activeElement;
      $activeDomElem$$ && $oj$$67$$.$DomUtils$.$isAncestor$(this.element[0], $activeDomElem$$) && (this.$_layoutStartActiveDomElem$ = $activeDomElem$$);
    }, $_layoutCycleOnEnd$:function() {
      this.$_inLayoutCycle$ = !1;
      var $children$$17_elem$$95$$ = this.element[0];
      if (this.$_layoutStartActiveDomElem$) {
        var $layoutStartActiveDomElem_tile$$ = this.$_layoutStartActiveDomElem$;
        this.$_layoutStartActiveDomElem$ = null;
        if (this.$_deletingTileWithFocusPrev$) {
          if ($layoutStartActiveDomElem_tile$$ = this.$_deletingTileWithFocusPrev$, this.$_deletingTileWithFocusPrev$ = null, $layoutStartActiveDomElem_tile$$ && $oj$$67$$.$DomUtils$.$isAncestor$($children$$17_elem$$95$$, $layoutStartActiveDomElem_tile$$)) {
            var $children$$17_elem$$95$$ = this.$_getTileElements$($children$$17_elem$$95$$, !0), $index$$272$$ = $children$$17_elem$$95$$.indexOf($layoutStartActiveDomElem_tile$$);
            0 <= $index$$272$$ && $index$$272$$ < $children$$17_elem$$95$$.length - 1 ? $oj$$67$$.$FocusUtils$.$focusFirstTabStop$($children$$17_elem$$95$$[$index$$272$$ + 1]) : $oj$$67$$.$FocusUtils$.$focusFirstTabStop$($layoutStartActiveDomElem_tile$$);
          }
        } else {
          $oj$$67$$.$DomUtils$.$isAncestor$($children$$17_elem$$95$$, $layoutStartActiveDomElem_tile$$) ? $oj$$67$$.$FocusUtils$.$focusElement$($layoutStartActiveDomElem_tile$$) : $oj$$67$$.$FocusUtils$.$focusFirstTabStop$($children$$17_elem$$95$$);
        }
      }
    }, $_destroyMLCommon$:function() {
      var $mlCommon$$6$$ = this.$_mlCommon$;
      $mlCommon$$6$$ && $mlCommon$$6$$.destroy();
      this.$_mlCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$11$$ = document.createElement("div"), $elem$$96_style$$12$$ = $div$$11$$.style;
      $elem$$96_style$$12$$.width = "10px";
      $elem$$96_style$$12$$.height = "10px";
      $elem$$96_style$$12$$ = this.element[0];
      $elem$$96_style$$12$$.appendChild($div$$11$$);
      var $bCanCalcSizes$$ = !1;
      try {
        $bCanCalcSizes$$ = 0 < $div$$11$$.offsetWidth && 0 < $div$$11$$.offsetHeight;
      } catch ($e$$132$$) {
      }
      $elem$$96_style$$12$$.removeChild($div$$11$$);
      return $bCanCalcSizes$$;
    }, $_getTileElements$:function($excludeDropSite$$) {
      for (var $children$$18$$ = this.element.children($_TILE_SELECTOR$$), $numChildren$$1$$ = $children$$18$$.length, $arChildren$$ = [], $i$$428$$ = 0;$i$$428$$ < $numChildren$$1$$;$i$$428$$++) {
        var $child$$15$$ = $children$$18$$[$i$$428$$];
        if (!$excludeDropSite$$ || $excludeDropSite$$ && $child$$15$$ !== this.$_dropSite$) {
          var $style$$13$$ = $child$$15$$.style;
          $style$$13$$.visibility !== $_HIDDEN$$ && $style$$13$$.display !== $_NONE$$ && $arChildren$$.push($child$$15$$);
        }
      }
      return $arChildren$$;
    }, $_saveTilesOriginalOrder$:function() {
      var $arTiles$$ = this.$_getTileElements$();
      if ($arTiles$$) {
        for (var $i$$429$$ = 0;$i$$429$$ < $arTiles$$.length;$i$$429$$++) {
          var $tile$$1$$ = $arTiles$$[$i$$429$$];
          $tile$$1$$.$_jetDataMasonryOriginalOrder$ || ($tile$$1$$.$_jetDataMasonryOriginalOrder$ = $i$$429$$ + 1);
        }
      }
    }, $_checkTilesOriginalOrder$:function() {
      var $arTiles$$1$$ = this.$_getTileElements$();
      if ($arTiles$$1$$) {
        for (var $i$$430$$ = 0;$i$$430$$ < $arTiles$$1$$.length;$i$$430$$++) {
          var $tile$$2$$ = $arTiles$$1$$[$i$$430$$];
          $tile$$2$$.$_jetDataMasonryOriginalOrder$ || this.$_insertTileOriginalOrder$($tile$$2$$, $i$$430$$);
        }
      }
    }, $_restoreTilesOriginalOrder$:function() {
      var $children$$19$$ = this.$_getTileElements$(), $sortedChildren$$ = this.$_getTileElements$();
      $_sortTilesOriginalOrder$$($sortedChildren$$);
      for (var $i$$431$$ = 0;$i$$431$$ < $children$$19$$.length;$i$$431$$++) {
        var $child$$16_sortedChildIndex$$ = $children$$19$$[$i$$431$$], $sortedChild$$ = $sortedChildren$$[$i$$431$$];
        $child$$16_sortedChildIndex$$ != $sortedChild$$ && ($oj$$67$$.Components.$subtreeDetached$($sortedChild$$), $child$$16_sortedChildIndex$$.parentNode.insertBefore($sortedChild$$, $child$$16_sortedChildIndex$$), $oj$$67$$.Components.$subtreeAttached$($sortedChild$$), $child$$16_sortedChildIndex$$ = $children$$19$$.indexOf($sortedChild$$), $child$$16_sortedChildIndex$$ > $i$$431$$ && ($children$$19$$.splice($child$$16_sortedChildIndex$$, 1), $children$$19$$.splice($i$$431$$, 0, $sortedChild$$)));
      }
    }, $_insertTileOriginalOrder$:function($insertedTile$$, $index$$273$$) {
      var $arTiles$$2$$ = this.$_getTileElements$();
      0 > $index$$273$$ && ($index$$273$$ = $arTiles$$2$$.length);
      if ($arTiles$$2$$) {
        for (var $i$$432$$ = 0;$i$$432$$ < $arTiles$$2$$.length;$i$$432$$++) {
          var $tile$$3$$ = $arTiles$$2$$[$i$$432$$];
          $tile$$3$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$ >= $index$$273$$ + 1 && $tile$$3$$.$_jetDataMasonryOriginalOrder$++;
        }
      }
      $insertedTile$$.$_jetDataMasonryOriginalOrder$ = $index$$273$$ + 1;
    }, $_removeTileOriginalOrder$:function($removedTile$$) {
      if ($removedTile$$.$_jetDataMasonryOriginalOrder$) {
        var $arTiles$$3$$ = this.$_getTileElements$();
        if ($arTiles$$3$$) {
          for (var $i$$433$$ = 0;$i$$433$$ < $arTiles$$3$$.length;$i$$433$$++) {
            var $tile$$4$$ = $arTiles$$3$$[$i$$433$$];
            $tile$$4$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$ > $removedTile$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$--;
          }
        }
        delete $removedTile$$.$_jetDataMasonryOriginalOrder$;
      }
    }, $_initMenu$:function($newVal$$7$$) {
      var $$m$$2_menu$$22$$ = null, $dm$$1_t$$18$$ = null;
      $newVal$$7$$ || this.options.contextMenu || ($$m$$2_menu$$22$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$2_menu$$22$$);
      if ($newVal$$7$$ || this.options.contextMenu) {
        $$m$$2_menu$$22$$ = $newVal$$7$$ || this.options.contextMenu;
        $dm$$1_t$$18$$ = $$$$61$$.type($$m$$2_menu$$22$$);
        if ("function" == $dm$$1_t$$18$$) {
          try {
            $$m$$2_menu$$22$$ = $$m$$2_menu$$22$$();
          } catch ($e$$133$$) {
            $$m$$2_menu$$22$$ = null;
          }
          $dm$$1_t$$18$$ = $$$$61$$.type($$m$$2_menu$$22$$);
        }
        if ("string" === $dm$$1_t$$18$$) {
          if ($$m$$2_menu$$22$$ = $$$$61$$($$m$$2_menu$$22$$)) {
            $$m$$2_menu$$22$$.css("display", $_NONE$$);
            $dm$$1_t$$18$$ = this.$_menu$;
            if (!$dm$$1_t$$18$$) {
              return;
            }
            $dm$$1_t$$18$$.$$container$ = $$m$$2_menu$$22$$;
            $dm$$1_t$$18$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$7$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderHandle) {
        var $$menuContainer$$2$$ = this.$_menu$.$$container$, $self$$205$$ = this;
        $$menuContainer$$2$$.on("ojselect", $$$$61$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$2$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$61$$(this).children("a").length) {
            var $command$$14$$ = $$$$61$$(this).attr("data-oj-command").slice(17);
            $$$$61$$(this).replaceWith($self$$205$$.$_buildContextMenuItem$($command$$14$$));
            $$$$61$$(this).addClass("oj-menu-item");
            $bChanged$$1$$ = !0;
          }
        });
        $bChanged$$1$$ && $$menuContainer$$2$$.ojMenu("refresh");
        this.$_menu$.$$elemCut$ = $$menuContainer$$2$$.find("#" + $_OJMASONRYLAYOUTCUT$$);
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$2$$.find("#" + $_OJMASONRYLAYOUTPASTEBEFORE$$);
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$2$$.find("#" + $_OJMASONRYLAYOUTPASTEAFTER$$);
      }
    }, $_clearMenu$:function() {
      var $menu$$23$$ = this.$_menu$;
      $menu$$23$$ && $menu$$23$$.$usermenu$ && ($menu$$23$$.$usermenu$ = !1, $menu$$23$$.$$container$.off("ojselect"), $menu$$23$$.$$container$ = null);
    }, $_prepareContextMenuBeforeOpen$:function($e$$134_tile$$5$$) {
      $e$$134_tile$$5$$ = $_findContainingTile$$($e$$134_tile$$5$$.originalEvent.target, this.element[0]);
      this.$_menu$.tile = $e$$134_tile$$5$$;
      if (this.$_menu$.$usermenu$) {
        var $cutTile$$ = this.$_menu$.$cutTile$, $bRefreshMenu$$ = !1, $elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemCut$;
        if ($elemCut_elemPasteAfter_elemPasteBefore$$) {
          var $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1;
          $cutTile$$ && $e$$134_tile$$5$$ === $cutTile$$ && ($bDisable$$ = !0);
          $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteBefore$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $e$$134_tile$$5$$ !== $cutTile$$ && $e$$134_tile$$5$$ !== $_getNextElement$$($cutTile$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteAfter$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $cutTile$$ !== $e$$134_tile$$5$$ && $cutTile$$ !== $_getNextElement$$($e$$134_tile$$5$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        $bRefreshMenu$$ && this.$_menu$.$$container$.ojMenu("refresh");
      }
    }, $_buildContextMenuItem$:function($cmd$$5_transKey$$) {
      var $id$$66$$ = $_MENU_CMD_MAP$$[$cmd$$5_transKey$$];
      $cmd$$5_transKey$$ = $_MENU_TRANSLATION_MAP$$[$cmd$$5_transKey$$];
      var $label$$15$$ = $$$$61$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
      $label$$15$$.text(this.$getTranslatedString$($cmd$$5_transKey$$));
      $label$$15$$.wrap("\x3cli id\x3d" + $id$$66$$ + "\x3e\x3c/li\x3e");
      return $label$$15$$.parent();
    }, $_menuCut$:function($obj$$111$$) {
      $obj$$111$$ && (this.$_menu$.$cutTile$ = $obj$$111$$);
    }, $_menuPaste$:function($obj$$112$$, $pasteBefore$$2$$) {
      if ($obj$$112$$ && this.$_menu$.$cutTile$) {
        var $cutTile$$1$$ = this.$_menu$.$cutTile$;
        this.$_menu$.$cutTile$ = !1;
        this.$_doPaste$($cutTile$$1$$, $obj$$112$$, $pasteBefore$$2$$);
      }
    }, $_doPaste$:function($cutTile$$2$$, $nextElem_pasteTile$$, $pasteBefore$$3$$) {
      var $fromIndex$$3$$ = $cutTile$$2$$.$_jetDataMasonryOriginalOrder$ - 1, $jqCutTile$$ = $$$$61$$($cutTile$$2$$);
      if (!1 !== this._trigger("beforeReorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$})) {
        this.$_removeTileOriginalOrder$($cutTile$$2$$);
        var $toIndex$$ = $nextElem_pasteTile$$.$_jetDataMasonryOriginalOrder$ - 1;
        $pasteBefore$$3$$ || $toIndex$$++;
        var $elem$$99$$ = this.element[0];
        $pasteBefore$$3$$ || ($nextElem_pasteTile$$ = $_getNextElement$$($nextElem_pasteTile$$));
        this.$_insertTileOriginalOrder$($cutTile$$2$$, $toIndex$$);
        $elem$$99$$.insertBefore($cutTile$$2$$, $nextElem_pasteTile$$);
        this.$_mlCommon$.$setup$(!0);
        this._trigger("reorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$, toIndex:$toIndex$$});
      }
    }, $_handleContextMenuSelect$:function($ev$$8$$, $ui$$47$$) {
      var $id$$67$$ = $ui$$47$$ ? $ui$$47$$.item.attr("id") : void 0;
      $id$$67$$ === $_OJMASONRYLAYOUTCUT$$ ? this.$_menuCut$(this.$_menu$.tile) : $id$$67$$ === $_OJMASONRYLAYOUTPASTEBEFORE$$ ? this.$_menuPaste$(this.$_menu$.tile, !0) : $id$$67$$ === $_OJMASONRYLAYOUTPASTEAFTER$$ && this.$_menuPaste$(this.$_menu$.tile, !1);
    }, $_getTileIndex$:function($tile$$6$$) {
      var $children$$20$$ = this.$_getTileElements$(!0);
      $_sortTilesOriginalOrder$$($children$$20$$);
      for (var $numChildren$$2$$ = $children$$20$$.length, $i$$434$$ = 0;$i$$434$$ < $numChildren$$2$$;$i$$434$$++) {
        if ($children$$20$$[$i$$434$$] === $tile$$6$$) {
          return $i$$434$$;
        }
      }
      return-1;
    }, $_setupReorderHandles$:function() {
      var $elem$$100$$ = this.element, $children$$21$$ = $elem$$100$$.children();
      this.$_setupReorderHandlesForElem$($children$$21$$);
      $elem$$100$$.on("dragstart" + this.$reorderHandleEventNamespace$, this.$_handleDragStartFunc$).on("dragenter" + this.$reorderHandleEventNamespace$, this.$_handleDragEnterFunc$).on("dragover" + this.$reorderHandleEventNamespace$, this.$_handleDragOverFunc$).on("dragleave" + this.$reorderHandleEventNamespace$, this.$_handleDragLeaveFunc$).on("dragend" + this.$reorderHandleEventNamespace$, this.$_handleDragEndFunc$).on("drop" + this.$reorderHandleEventNamespace$, this.$_handleDropFunc$);
    }, $_setupReorderHandlesForElem$:function($jqElem$$5$$) {
      var $options$$360$$ = this.options;
      $jqElem$$5$$.filter($options$$360$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
      $jqElem$$5$$.find($options$$360$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
    }, $_tearDownReorderHandles$:function() {
      var $elem$$101$$ = this.element, $children$$22$$ = $elem$$101$$.children();
      this.$_tearDownReorderHandlesForElem$($children$$22$$);
      $elem$$101$$.off(this.$reorderHandleEventNamespace$);
    }, $_tearDownReorderHandlesForElem$:function($jqElem$$6$$) {
      var $options$$361$$ = this.options;
      $jqElem$$6$$.filter($options$$361$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
      $jqElem$$6$$.find($options$$361$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
    }, $_handleDragStart$:function($event$$593_originalEvent$$5$$) {
      if (this.options.reorderHandle && !this.$_bDragging$) {
        var $tile$$7$$ = $_findContainingTile$$($event$$593_originalEvent$$5$$.target, this.element[0]);
        if ($tile$$7$$) {
          var $eventData$$28_index$$274$$ = this.$_getTileIndex$($tile$$7$$);
          $tile$$7$$.$_jetDataMasonryDragSourceIndex$ = $eventData$$28_index$$274$$;
          $eventData$$28_index$$274$$ = {tile:$$$$61$$($tile$$7$$), fromIndex:$eventData$$28_index$$274$$};
          !1 !== this._trigger("beforeReorder", null, $eventData$$28_index$$274$$) && ($event$$593_originalEvent$$5$$ = $event$$593_originalEvent$$5$$.originalEvent, this.$_dragStart$($tile$$7$$, $event$$593_originalEvent$$5$$.pageX, $event$$593_originalEvent$$5$$.pageY, $event$$593_originalEvent$$5$$.dataTransfer));
        }
      }
    }, $_handleDragEnter$:function($event$$594_originalEvent$$6$$) {
      $event$$594_originalEvent$$6$$ = $event$$594_originalEvent$$6$$.originalEvent;
      var $elemUnderPoint_relatedTarget$$ = $event$$594_originalEvent$$6$$.relatedTarget, $elem$$103$$ = this.element[0], $enteringMasonryLayout$$ = !1;
      $elemUnderPoint_relatedTarget$$ ? $enteringMasonryLayout$$ = $elem$$103$$ != $elemUnderPoint_relatedTarget$$ && !$oj$$67$$.$DomUtils$.$isAncestor$($elem$$103$$, $elemUnderPoint_relatedTarget$$) : this.$_dragLeftMasonryLayout$ && ($enteringMasonryLayout$$ = ($elemUnderPoint_relatedTarget$$ = document.elementFromPoint($event$$594_originalEvent$$6$$.clientX, $event$$594_originalEvent$$6$$.clientY)) && ($elemUnderPoint_relatedTarget$$ == $elem$$103$$ || $oj$$67$$.$DomUtils$.$isAncestor$($elem$$103$$, 
      $elemUnderPoint_relatedTarget$$)));
      $enteringMasonryLayout$$ && ((this.$_dragLeftMasonryLayout$ = !1, this.$_draggedTile$) ? this.$_dropSite$ && ($$$$61$$(this.$_dropSite$).css("display", ""), this.$_mlCommon$.$setup$(!1, !0)) : $event$$594_originalEvent$$6$$.dataTransfer.dropEffect = "none");
    }, $_handleDragOver$:function($event$$595$$) {
      var $originalEvent$$7$$ = $event$$595$$.originalEvent;
      $originalEvent$$7$$.dataTransfer.dropEffect = "move";
      this.$_dragMove$($originalEvent$$7$$.pageX, $originalEvent$$7$$.clientX, $originalEvent$$7$$.clientY);
      $event$$595$$.preventDefault();
      return!1;
    }, $_handleDragLeave$:function($elem$$104_event$$596$$) {
      var $elemUnderPoint$$1_originalEvent$$8$$ = $elem$$104_event$$596$$.originalEvent, $relatedTarget$$1$$ = $elemUnderPoint$$1_originalEvent$$8$$.relatedTarget;
      $elem$$104_event$$596$$ = this.element[0];
      var $leavingMasonryLayout$$ = !1;
      $leavingMasonryLayout$$ = $relatedTarget$$1$$ ? $elem$$104_event$$596$$ != $relatedTarget$$1$$ && !$oj$$67$$.$DomUtils$.$isAncestor$($elem$$104_event$$596$$, $relatedTarget$$1$$) : ($elemUnderPoint$$1_originalEvent$$8$$ = document.elementFromPoint($elemUnderPoint$$1_originalEvent$$8$$.clientX, $elemUnderPoint$$1_originalEvent$$8$$.clientY)) && $elemUnderPoint$$1_originalEvent$$8$$ != $elem$$104_event$$596$$ && !$oj$$67$$.$DomUtils$.$isAncestor$($elem$$104_event$$596$$, $elemUnderPoint$$1_originalEvent$$8$$);
      $leavingMasonryLayout$$ && (this.$_dragLeftMasonryLayout$ = !0, this.$_dropSite$ && ($$$$61$$(this.$_dropSite$).css("display", $_NONE$$), this.$_mlCommon$.$setup$(!1, !0)));
    }, $_clearDragStartHideTileTimeout$:function() {
      if (this.$_dragStartHideTileTimeout$) {
        clearTimeout(this.$_dragStartHideTileTimeout$);
        this.$_dragStartHideTileTimeout$ = null;
        var $draggedTile$$ = this.$_draggedTile$;
        $draggedTile$$ && $$$$61$$($draggedTile$$).removeClass("oj-drag");
      }
    }, $_handleDragEnd$:function() {
      this.$_clearDragStartHideTileTimeout$();
      if (!this.$_bDropping$) {
        var $draggedTile$$1$$ = this.$_draggedTile$;
        if ($draggedTile$$1$$ && this.$_dropSite$) {
          var $dropSite$$ = this.$_dropSite$;
          $oj$$67$$.$DomUtils$.$isAncestor$(this.element[0], $draggedTile$$1$$) && ($$$$61$$($dropSite$$).css("display", ""), this.$_removeTileOriginalOrder$($dropSite$$), $dropSite$$.parentNode.removeChild($dropSite$$), $$$$61$$($draggedTile$$1$$).css("display", ""), this.$_insertTileOriginalOrder$($draggedTile$$1$$, $draggedTile$$1$$.$_jetDataMasonryOriginalOrder$ - 1), this.$_mlCommon$.$setup$(!1, !0));
          delete $draggedTile$$1$$.$_jetDataMasonryDragSourceIndex$;
        }
        this.$_dropSite$ = this.$_draggedTile$ = null;
        this.$_bMouseMoved$ = this.$_bDragMoveTransition$ = !1;
        this.$_dragOffset$ = null;
        this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      }
    }, $_handleDrop$:function($event$$598$$) {
      var $mlCommon$$11_originalEvent$$9$$ = this.$_mlCommon$;
      $mlCommon$$11_originalEvent$$9$$.$isInLayoutCycle$() && $mlCommon$$11_originalEvent$$9$$.$finishLayoutCycle$();
      this.$_clearDragStartHideTileTimeout$();
      $mlCommon$$11_originalEvent$$9$$ = $event$$598$$.originalEvent;
      this.$_drop$(this.$_draggedTile$, $mlCommon$$11_originalEvent$$9$$.pageX, $mlCommon$$11_originalEvent$$9$$.pageY);
      $event$$598$$.stopPropagation();
      return!1;
    }, $_dragStart$:function($tile$$8$$, $dragOffset_pageX$$1$$, $pageY$$1$$, $dataTransfer$$4$$) {
      this.$_bDragging$ = !0;
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = !1;
      this.$_draggedTile$ = $tile$$8$$;
      var $elem$$106$$ = this.element[0], $offset$$28_sizeClass_style$$14$$ = $_getSizeStyleClassName$$($tile$$8$$), $dropSite$$1$$ = this.$_dropSite$ = document.createElement("div");
      $dropSite$$1$$.$_jetDataMasonryOriginalOrder$ = $tile$$8$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$1$$.className = $offset$$28_sizeClass_style$$14$$ + " oj-drop";
      var $offset$$28_sizeClass_style$$14$$ = $dropSite$$1$$.style, $tileStyle$$ = $tile$$8$$.style;
      $offset$$28_sizeClass_style$$14$$.top = $tileStyle$$.top;
      this.$_bRTL$ ? $offset$$28_sizeClass_style$$14$$.right = $tileStyle$$.right : $offset$$28_sizeClass_style$$14$$.left = $tileStyle$$.left;
      $offset$$28_sizeClass_style$$14$$ = $$$$61$$($tile$$8$$).offset();
      $elem$$106$$.insertBefore($dropSite$$1$$, $tile$$8$$);
      this.$_dragOffset$ = $dragOffset_pageX$$1$$ = {left:$dragOffset_pageX$$1$$ - $offset$$28_sizeClass_style$$14$$.left, top:$pageY$$1$$ - $offset$$28_sizeClass_style$$14$$.top};
      $$$$61$$($tile$$8$$).addClass("oj-drag");
      $dataTransfer$$4$$.effectAllowed = "move";
      $dataTransfer$$4$$.setData("text/html", $tile$$8$$.outerHTML);
      $dataTransfer$$4$$.setDragImage($tile$$8$$, $dragOffset_pageX$$1$$.left, $dragOffset_pageX$$1$$.top);
      var $self$$206$$ = this;
      this.$_dragStartHideTileTimeout$ = setTimeout(function() {
        $self$$206$$.$_bDragStartTileHidden$ = !0;
        $tileStyle$$.display = $_NONE$$;
        $$$$61$$($tile$$8$$).removeClass("oj-drag");
        $self$$206$$.$_dragStartHideTileTimeout$ = null;
        $oj$$67$$.Components.$subtreeHidden$($tile$$8$$);
      }, 0);
    }, $_dragMove$:function($bRightSide_nextElem$$1_pageX$$2$$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$) {
      this.$_bMouseMoved$ = !0;
      if (this.$_bDragStartTileHidden$ && !this.$_bDragMoveTransition$) {
        var $elem$$107$$ = this.element[0];
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = document.elementFromPoint($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$);
        if (($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = $_findContainingTile$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $elem$$107$$)) && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_dropSite$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_draggedTile$) {
          var $offset$$29$$ = $$$$61$$($elem$$107$$).offset();
          $clientY$$2_oldNextSibling$$ = $_getNextElement$$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ = $bRightSide_nextElem$$1_pageX$$2$$ - $offset$$29$$.left >= $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetLeft + .5 * $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetWidth;
          this.$_removeTileOriginalOrder$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ && !this.$_bRTL$ || !$bRightSide_nextElem$$1_pageX$$2$$ && this.$_bRTL$ ? ($bRightSide_nextElem$$1_pageX$$2$$ = $_getNextElement$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)) ? (this.$_insertTileOriginalOrder$(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$107$$.insertBefore(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$), 
          $elem$$107$$.appendChild(this.$_dropSite$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$107$$.insertBefore(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$));
          $clientY$$2_oldNextSibling$$ !== $_getNextElement$$(this.$_dropSite$) && (this.$_bDragMoveTransition$ = this.$_mlCommon$.$setup$(!1, !0));
        }
      }
    }, $_handleDragMoveTransitionEnd$:function() {
      this.$_bDragMoveTransition$ = !1;
    }, $_drop$:function($tile$$9$$, $newLeft_pageX$$3$$, $pageY$$2$$) {
      this.$_bDropping$ = !0;
      var $elem$$108$$ = this.element[0], $dropSite$$2_style$$15$$ = this.$_dropSite$;
      this.$_dropSite$ = null;
      $oj$$67$$.Components.$subtreeDetached$($tile$$9$$);
      $elem$$108$$.replaceChild($tile$$9$$, $dropSite$$2_style$$15$$);
      $oj$$67$$.Components.$subtreeAttached$($tile$$9$$);
      $tile$$9$$.$_jetDataMasonryOriginalOrder$ = $dropSite$$2_style$$15$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$2_style$$15$$ = $tile$$9$$.style;
      $dropSite$$2_style$$15$$.display = "";
      $oj$$67$$.Components.$subtreeShown$($tile$$9$$);
      var $offset$$30$$ = $$$$61$$($elem$$108$$).offset(), $dragOffset$$1$$ = this.$_dragOffset$;
      $dropSite$$2_style$$15$$.top = $pageY$$2$$ - $dragOffset$$1$$.top - $offset$$30$$.top + $_PX$$;
      $newLeft_pageX$$3$$ = $newLeft_pageX$$3$$ - $dragOffset$$1$$.left - $offset$$30$$.left;
      this.$_bRTL$ ? ($dropSite$$2_style$$15$$.right = $elem$$108$$.offsetWidth - ($newLeft_pageX$$3$$ + $$$$61$$($tile$$9$$).outerWidth(!0)) + $_PX$$, $dropSite$$2_style$$15$$.left = "") : $dropSite$$2_style$$15$$.left = $newLeft_pageX$$3$$ + $_PX$$;
      this.$_dragOffset$ = null;
      this.$_bMouseMoved$ ? this.$_bDragEndTransition$ = this.$_mlCommon$.$setup$(!1, !0) : this.$_handleDragEndTransitionEnd$();
    }, $_handleDragEndTransitionEnd$:function() {
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      var $eventData$$29_tile$$10$$ = this.$_draggedTile$;
      this.$_draggedTile$ = null;
      var $fromIndex$$4$$ = $eventData$$29_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      delete $eventData$$29_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      var $toIndex$$1$$ = this.$_getTileIndex$($eventData$$29_tile$$10$$), $eventData$$29_tile$$10$$ = {tile:$$$$61$$($eventData$$29_tile$$10$$), fromIndex:$fromIndex$$4$$, toIndex:$toIndex$$1$$};
      this._trigger("reorder", null, $eventData$$29_tile$$10$$);
    }, getNodeBySubId:function($locator$$63$$) {
      return this._super($locator$$63$$);
    }, getSubIdByNode:function($node$$171$$) {
      return this._super($node$$171$$);
    }});
    var $_PX$$ = "px", $_HIDDEN$$ = "hidden", $_NONE$$ = "none", $_DRAGGABLE$$ = "draggable", $_OJ_DISABLED$$ = "oj-disabled", $_OJ_DRAGGABLE$$ = "oj-draggable", $_TILE_SELECTOR$$ = ".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2", $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$ = "oj-masonrylayout-tile-transition-show-from", 
    $_WARNING_DISABLED_OPTION$$ = "JET MasonryLayout: 'disabled' option not supported", $_OJMASONRYLAYOUTCUT$$ = "ojmasonrylayoutcut", $_OJMASONRYLAYOUTPASTEBEFORE$$ = "ojmasonrylayoutpastebefore", $_OJMASONRYLAYOUTPASTEAFTER$$ = "ojmasonrylayoutpasteafter", $_MENU_CMD_MAP$$ = {cut:$_OJMASONRYLAYOUTCUT$$, "paste-before":$_OJMASONRYLAYOUTPASTEBEFORE$$, "paste-after":$_OJMASONRYLAYOUTPASTEAFTER$$}, $_MENU_TRANSLATION_MAP$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
  })();
  $MasonryLayoutCommon$$.prototype.$setup$ = function $$MasonryLayoutCommon$$$$$setup$$($init$$, $reorder$$1$$) {
    var $ret$$77$$ = !1;
    $init$$ ? ($ret$$77$$ = this.$_layout$() ? !0 : !1, this.$_reorderTilesForLayout$()) : (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$($reorder$$1$$), $ret$$77$$ = this.$_transitionLayout$());
    return $ret$$77$$;
  };
  $MasonryLayoutCommon$$.prototype.destroy = function $$MasonryLayoutCommon$$$$destroy$() {
    for (var $elem$$116$$ = this.$_elem$, $children$$23$$ = this.$_getTileChildren$(), $i$$435$$ = 0;$i$$435$$ < $children$$23$$.length;$i$$435$$++) {
      var $style$$18$$ = $children$$23$$[$i$$435$$].style;
      this.$_rtl$ ? $style$$18$$.right = "" : $style$$18$$.left = "";
      $style$$18$$.top = "";
    }
    $elem$$116$$.removeChild(this.$_sizeDivWrapper$);
    this.$_subtreeDetachedFunc$ = this.$_subtreeAttachedFunc$ = this.$_sortTilesOriginalOrderFunc$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_getTileSpanFunc$ = this.$_getSizeStyleClassNameFunc$ = this.$_removeStyleClassNameFunc$ = this.$_addStyleClassNameFunc$ = this.$_elem$ = this.$_arFireHideOnEnd$ = this.$_arInfoletsToHide$ = this.$_arInfoletsToShow$ = this.$_arInfoletsToResize$ = this.$_arMovedInfolets$ = 
    this.$_handleShowTransitionEndFunc$ = this.$_handleHideTransitionEndFunc$ = this.$_hideTilesFunc$ = this.$_handleTransitionEndFunc$ = this.$_sizeDiv$ = this.$_sizeDivWrapper$ = null;
  };
  $MasonryLayoutCommon$$.prototype.resizeTile = function $$MasonryLayoutCommon$$$$resizeTile$($selector$$43$$, $sizeStyleClass$$2$$) {
    var $infolet$$1$$ = this.$_elem$.querySelector($selector$$43$$);
    if ($infolet$$1$$) {
      this.$_arInfoletsToResize$ || (this.$_arInfoletsToResize$ = []);
      var $arInfoletsToResize$$ = this.$_arInfoletsToResize$;
      $arInfoletsToResize$$.push($infolet$$1$$);
      $arInfoletsToResize$$.push($sizeStyleClass$$2$$);
      this.$_resizingInfolet$ = !0;
      this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$insertTileDomElem$ = function $$MasonryLayoutCommon$$$$$insertTileDomElem$$($tileDomElem$$, $index$$275$$) {
    var $arChildren$$1$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($arChildren$$1$$);
    var $currChildAtIndex$$ = null;
    0 <= $index$$275$$ && $index$$275$$ < $arChildren$$1$$.length && ($currChildAtIndex$$ = $arChildren$$1$$[$index$$275$$]);
    this.$_elem$.insertBefore($tileDomElem$$, $currChildAtIndex$$);
    this.$_queueRelayout$();
  };
  $MasonryLayoutCommon$$.prototype.$showTile$ = function $$MasonryLayoutCommon$$$$$showTile$$($infolet$$2_selector$$44$$) {
    if ($infolet$$2_selector$$44$$ = this.$_elem$.querySelector($infolet$$2_selector$$44$$)) {
      this.$_arInfoletsToShow$ || (this.$_arInfoletsToShow$ = []), this.$_arInfoletsToShow$.push($infolet$$2_selector$$44$$), this.$_showingInfolets$ = !0, this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_HIDE$ && this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ ? this.$_queueRelayout$() : this.$_showingInfolets$ = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$hideTile$ = function $$MasonryLayoutCommon$$$$$hideTile$$($infolet$$3_selector$$45$$) {
    if ($infolet$$3_selector$$45$$ = this.$_elem$.querySelector($infolet$$3_selector$$45$$)) {
      this.$_arInfoletsToHide$ || (this.$_arInfoletsToHide$ = []), this.$_arInfoletsToHide$.push($infolet$$3_selector$$45$$), this.$_hidingInfolets$ = !0, this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$resizeNotify$ = function $$MasonryLayoutCommon$$$$$resizeNotify$$() {
    this.$_resizingInfolet$ || this.$_hidingInfolets$ || this.$_showingInfolets$ || (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$(!1), this.$_transitionLayout$());
  };
  $MasonryLayoutCommon$$.prototype.$isAnimationEnabled$ = function $$MasonryLayoutCommon$$$$$isAnimationEnabled$$() {
    if (this.$_temporarilyDisableAnimation$) {
      return!1;
    }
    this.$_cachedAnimationEnabled$ || (this.$_animationEnabled$ = this.$_automationEnabled$ ? !1 : $MasonryLayoutCommon$$.$_isMinimumAgentMet$($MasonryLayoutCommon$$.$_agentTypeAndVersion$[0], $MasonryLayoutCommon$$.$_agentTypeAndVersion$[1]), this.$_cachedAnimationEnabled$ = !0);
    return this.$_animationEnabled$;
  };
  $MasonryLayoutCommon$$.prototype.$isInLayoutCycle$ = function $$MasonryLayoutCommon$$$$$isInLayoutCycle$$() {
    return null != this.$_layoutPhase$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length;
  };
  $MasonryLayoutCommon$$.prototype.$finishLayoutCycle$ = function $$MasonryLayoutCommon$$$$$finishLayoutCycle$$() {
    this.$_temporarilyDisableAnimation$ = !0;
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$);
    for (var $tileChildren$$ = this.$_getTileChildren$(), $i$$436$$ = 0;$i$$436$$ < $tileChildren$$.length;$i$$436$$++) {
      var $child$$18$$ = $tileChildren$$[$i$$436$$];
      $child$$18$$.$_afrOldSizeStyleClass$ && delete $child$$18$$.$_afrOldSizeStyleClass$;
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
    }
    this.$_hideTilesInternalTimeout$ ? (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null, this.$_handleHideTransitionEnd$(null)) : this.$_showTilesTimeout$ ? (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null, this.$_showTiles$()) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length ? this.$_handleTransitionEnd$(null) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_SHOW$ && 
    this.$_handleShowTransitionEnd$(null);
    this.$_temporarilyDisableAnimation$ = !1;
  };
  $MasonryLayoutCommon$$.$_getElemSize$ = function $$MasonryLayoutCommon$$$$_getElemSize$$($elem$$121$$) {
    var $computedStyle$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($elem$$121$$);
    return{$w$:$elem$$121$$.offsetWidth + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginLeft) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginRight)), $h$:$elem$$121$$.offsetHeight + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginTop) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginBottom))};
  };
  $MasonryLayoutCommon$$.$_getElemInsets$ = function $$MasonryLayoutCommon$$$$_getElemInsets$$($computedStyle$$1_elem$$122$$) {
    $computedStyle$$1_elem$$122$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($computedStyle$$1_elem$$122$$);
    return{paddingLeft:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.paddingLeft), paddingRight:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.paddingRight), paddingTop:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.paddingTop), paddingBottom:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.paddingBottom), borderLeftWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.borderLeftWidth), 
    borderRightWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.borderRightWidth), borderTopWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.borderTopWidth), borderBottomWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$122$$.borderBottomWidth)};
  };
  $MasonryLayoutCommon$$.$_getComputedStyle$ = function $$MasonryLayoutCommon$$$$_getComputedStyle$$($elem$$123$$) {
    var $defView$$ = $elem$$123$$.ownerDocument.defaultView, $computedStyle$$2$$ = null;
    return $computedStyle$$2$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$123$$, null) : $elem$$123$$.currentStyle;
  };
  $MasonryLayoutCommon$$.$_getCSSLengthAsInt$ = function $$MasonryLayoutCommon$$$$_getCSSLengthAsInt$$($cssLength$$2_intLength$$1$$) {
    return 0 < $cssLength$$2_intLength$$1$$.length && "auto" != $cssLength$$2_intLength$$1$$ ? ($cssLength$$2_intLength$$1$$ = parseInt($cssLength$$2_intLength$$1$$, 10), isNaN($cssLength$$2_intLength$$1$$) && ($cssLength$$2_intLength$$1$$ = 0), $cssLength$$2_intLength$$1$$) : 0;
  };
  $MasonryLayoutCommon$$.$_addBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_addBubbleEventListener$$($node$$172$$, $type$$113$$, $listener$$42$$) {
    $node$$172$$.addEventListener ? $node$$172$$.addEventListener($type$$113$$, $listener$$42$$, !1) : $node$$172$$.attachEvent && $node$$172$$.attachEvent("on" + $type$$113$$, $listener$$42$$);
  };
  $MasonryLayoutCommon$$.$_removeBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_removeBubbleEventListener$$($node$$173$$, $type$$114$$, $listener$$43$$) {
    $node$$173$$.removeEventListener ? $node$$173$$.removeEventListener($type$$114$$, $listener$$43$$, !1) : $node$$173$$.detachEvent && $node$$173$$.detachEvent("on" + $type$$114$$, $listener$$43$$);
  };
  $MasonryLayoutCommon$$.$_arrayIndexOf$ = function $$MasonryLayoutCommon$$$$_arrayIndexOf$$($array$$17$$, $item$$123$$) {
    if ($array$$17$$) {
      for (var $i$$437$$ = 0;$i$$437$$ < $array$$17$$.length;$i$$437$$++) {
        if ($array$$17$$[$i$$437$$] == $item$$123$$) {
          return $i$$437$$;
        }
      }
    }
    return-1;
  };
  $MasonryLayoutCommon$$.$_isMinimumAgentMet$ = function $$MasonryLayoutCommon$$$$_isMinimumAgentMet$$($actualAgentType$$, $actualAgentVersion$$) {
    var $agentRequirements$$ = ["gecko", 16, "trident", 6, "webkit", 533.1], $argCount$$ = $agentRequirements$$.length;
    if (0 == $argCount$$ % 2) {
      for (var $i$$438$$ = 0;$i$$438$$ <= $argCount$$ - 2;$i$$438$$ += 2) {
        if ($actualAgentType$$ == $agentRequirements$$[$i$$438$$]) {
          if ($actualAgentVersion$$ >= $agentRequirements$$[1 + $i$$438$$]) {
            return!0;
          }
          break;
        }
      }
    }
    return!1;
  };
  $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$ = function $$MasonryLayoutCommon$$$$_getAgentTypeAndVersion$$() {
    var $versionParser$$ = $MasonryLayoutCommon$$.$_parseFloatVersion$, $agentType$$1$$ = null, $agentVersion$$1_possibleVersion$$ = -1, $userAgent$$3$$ = navigator.userAgent.toLowerCase();
    -1 != $userAgent$$3$$.indexOf("msie") || -1 != $userAgent$$3$$.indexOf("trident") ? ($agentType$$1$$ = "trident", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /trident\/(\d+[.]\d+)/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+);/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+)b;/)), $agentVersion$$1_possibleVersion$$ -= 
    4), null != document.documentMode && ($agentVersion$$1_possibleVersion$$ = Math.min($agentVersion$$1_possibleVersion$$, document.documentMode - 4))) : -1 != $userAgent$$3$$.indexOf("applewebkit") ? ($agentType$$1$$ = "webkit", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /applewebkit\/(\d+([.]\d+)*)/)) : -1 != $userAgent$$3$$.indexOf("gecko/") && ($agentType$$1$$ = "gecko", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /rv:(\d+[.]\d+)/));
    return[$agentType$$1$$, $agentVersion$$1_possibleVersion$$];
  };
  $MasonryLayoutCommon$$.$_parseFloatVersion$ = function $$MasonryLayoutCommon$$$$_parseFloatVersion$$($userAgent$$4$$, $versionNumberPattern$$1$$) {
    var $matches$$5_versionString$$1$$ = $userAgent$$4$$.match($versionNumberPattern$$1$$);
    return $matches$$5_versionString$$1$$ && ($matches$$5_versionString$$1$$ = $matches$$5_versionString$$1$$[1]) ? parseFloat($matches$$5_versionString$$1$$) : -1;
  };
  $MasonryLayoutCommon$$.$_compareTilePositions$ = function $$MasonryLayoutCommon$$$$_compareTilePositions$$($pos1$$1$$, $pos2$$1$$) {
    return $pos1$$1$$.$startRow$ > $pos2$$1$$.$startRow$ ? 1 : $pos1$$1$$.$startRow$ < $pos2$$1$$.$startRow$ ? -1 : $pos1$$1$$.$startCol$ > $pos2$$1$$.$startCol$ ? 1 : $pos1$$1$$.$startCol$ < $pos2$$1$$.$startCol$ ? -1 : 0;
  };
  $MasonryLayoutCommon$$.prototype.$_queueRelayout$ = function $$MasonryLayoutCommon$$$$$_queueRelayout$$() {
    this.$_hideTilesTimeout$ || (this.$_layoutPhase$ ? this.$_queuedRelayout$ || (this.$_queuedRelayout$ = !0) : this.$_hideTilesTimeout$ = setTimeout(this.$_hideTilesFunc$, 0));
  };
  $MasonryLayoutCommon$$.prototype.$_getTileChildren$ = function $$MasonryLayoutCommon$$$$$_getTileChildren$$() {
    for (var $children$$24$$ = this.$_elem$.querySelectorAll(this.$_tilesSelector$), $arChildren$$2$$ = [], $i$$439$$ = 0;$i$$439$$ < $children$$24$$.length;$i$$439$$++) {
      var $child$$19$$ = $children$$24$$[$i$$439$$], $childStyle$$ = $child$$19$$.style;
      0 < $child$$19$$.offsetWidth && 0 < $child$$19$$.offsetHeight && "hidden" != $childStyle$$.visibility && $arChildren$$2$$.push($child$$19$$);
    }
    return $arChildren$$2$$;
  };
  $MasonryLayoutCommon$$.prototype.$_transitionLayout$ = function $$MasonryLayoutCommon$$$$$_transitionLayout$$() {
    var $oldMovedInfolets_ret$$78$$ = this.$_arMovedInfolets$, $newMovedInfolets$$ = this.$_layout$();
    if (this.$_arInfoletsToResize$) {
      var $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = this.$_arInfoletsToResize$;
      $newMovedInfolets$$ || ($newMovedInfolets$$ = []);
      for (var $i$$440$$ = 0;$i$$440$$ < $arInfoletsToResize$$1_calledHandleTransitionEnd$$.length;$i$$440$$ += 2) {
        var $resizedInfolet$$ = $arInfoletsToResize$$1_calledHandleTransitionEnd$$[$i$$440$$];
        0 > $MasonryLayoutCommon$$.$_arrayIndexOf$($newMovedInfolets$$, $resizedInfolet$$) && $newMovedInfolets$$.push($resizedInfolet$$);
      }
    }
    $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !1;
    if (!$newMovedInfolets$$ || 1 > $newMovedInfolets$$.length) {
      if (!$oldMovedInfolets_ret$$78$$ || 1 > $oldMovedInfolets_ret$$78$$.length) {
        this.$_arMovedInfolets$ = null, this.$_handleTransitionEnd$(null), $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !0;
      }
    } else {
      this.$_arMovedInfolets$ = $newMovedInfolets$$;
    }
    $oldMovedInfolets_ret$$78$$ = null != $newMovedInfolets$$ && 0 < $newMovedInfolets$$.length;
    this.$isAnimationEnabled$() || $arInfoletsToResize$$1_calledHandleTransitionEnd$$ || this.$_handleTransitionEnd$(null);
    return $oldMovedInfolets_ret$$78$$;
  };
  $MasonryLayoutCommon$$.prototype.$_layout$ = function $$MasonryLayoutCommon$$$$$_layout$$() {
    var $elem$$125_style$$19$$ = this.$_elem$, $children$$25$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($children$$25$$);
    var $cellSize_oldSizeStyleClass$$ = this.$_cellSize$ = null;
    this.$_cols$ = 0;
    this.$_rows$ = 1;
    this.$_occupancyMap$ = null;
    var $arMovedInfolets$$ = [], $arOldPositions$$ = [], $arCols$$ = [], $rtl$$5$$ = this.$_rtl$, $insets$$ = $MasonryLayoutCommon$$.$_getElemInsets$($elem$$125_style$$19$$), $maxColSpan$$ = 0, $arTilePositions$$ = [];
    this.$_arTilePositions$ = $arTilePositions$$;
    for (var $i$$441$$ = 0;$i$$441$$ < $children$$25$$.length;$i$$441$$++) {
      var $child$$20$$ = $children$$25$$[$i$$441$$], $childSpan$$ = this.$_getTileSpanFunc$($child$$20$$);
      ($cellSize_oldSizeStyleClass$$ = $child$$20$$.$_afrOldSizeStyleClass$) && delete $child$$20$$.$_afrOldSizeStyleClass$;
      if (!this.$_cellSize$) {
        var $r$$6_spanForCellSize_tmpDiv$$ = $childSpan$$;
        $cellSize_oldSizeStyleClass$$ && ($r$$6_spanForCellSize_tmpDiv$$ = document.createElement("div"), $r$$6_spanForCellSize_tmpDiv$$.className = $cellSize_oldSizeStyleClass$$, $r$$6_spanForCellSize_tmpDiv$$ = this.$_getTileSpanFunc$($r$$6_spanForCellSize_tmpDiv$$));
        this.$_cellSize$ = this.$_calcCellSize$($child$$20$$, $r$$6_spanForCellSize_tmpDiv$$);
      }
      $cellSize_oldSizeStyleClass$$ = this.$_cellSize$;
      this.$_occupancyMap$ || (this.$_cols$ = Math.max(Math.floor(($elem$$125_style$$19$$.offsetWidth - $insets$$.paddingLeft - $insets$$.paddingRight - $insets$$.borderLeftWidth - $insets$$.borderRightWidth) / $cellSize_oldSizeStyleClass$$.$w$), 1), this.$_initOccupancyMap$(this.$_cols$, this.$_rows$), $maxColSpan$$ = this.$_cols$);
      $childSpan$$.colSpan > $maxColSpan$$ && ($maxColSpan$$ = $childSpan$$.colSpan);
      $childSpan$$.colSpan > this.$_cols$ && ($childSpan$$.colSpan = this.$_cols$);
      for (var $childStyle$$1_next$$9$$ = !1, $r$$6_spanForCellSize_tmpDiv$$ = 0;$r$$6_spanForCellSize_tmpDiv$$ < this.$_rows$;$r$$6_spanForCellSize_tmpDiv$$++) {
        for (var $c$$53$$ = 0;$c$$53$$ < this.$_cols$;$c$$53$$++) {
          if (this.$_fits$($c$$53$$, $r$$6_spanForCellSize_tmpDiv$$, $childSpan$$)) {
            var $childStyle$$1_next$$9$$ = $child$$20$$.style, $oldPosition$$ = {top:$childStyle$$1_next$$9$$.top};
            $rtl$$5$$ ? $oldPosition$$.right = $childStyle$$1_next$$9$$.right : $oldPosition$$.left = $childStyle$$1_next$$9$$.left;
            $arOldPositions$$.push($oldPosition$$);
            this.$_position$($child$$20$$, $c$$53$$, $r$$6_spanForCellSize_tmpDiv$$, $childSpan$$, $cellSize_oldSizeStyleClass$$, $insets$$);
            $rtl$$5$$ && $arCols$$.push($c$$53$$);
            $childStyle$$1_next$$9$$ = !0;
            $arTilePositions$$.push({$startCol$:$c$$53$$, $startRow$:$r$$6_spanForCellSize_tmpDiv$$, tile:$child$$20$$});
            break;
          }
        }
        if ($childStyle$$1_next$$9$$) {
          break;
        }
        $r$$6_spanForCellSize_tmpDiv$$ === this.$_rows$ - 1 && this.$_addRow$();
      }
    }
    $cellSize_oldSizeStyleClass$$ && ($elem$$125_style$$19$$ = this.$_sizeDiv$.style, $elem$$125_style$$19$$.width = $maxColSpan$$ * $cellSize_oldSizeStyleClass$$.$w$ + "px", $elem$$125_style$$19$$.height = this.$_rows$ * $cellSize_oldSizeStyleClass$$.$h$ + "px");
    for ($i$$441$$ = 0;$i$$441$$ < $children$$25$$.length;$i$$441$$++) {
      $child$$20$$ = $children$$25$$[$i$$441$$], $childStyle$$1_next$$9$$ = $child$$20$$.style, $oldPosition$$ = $arOldPositions$$[$i$$441$$], "" != $oldPosition$$.top && ($rtl$$5$$ && parseInt($childStyle$$1_next$$9$$.right, 10) !== parseInt($oldPosition$$.right, 10) || !$rtl$$5$$ && parseInt($childStyle$$1_next$$9$$.left, 10) !== parseInt($oldPosition$$.left, 10) || parseInt($childStyle$$1_next$$9$$.top, 10) !== parseInt($oldPosition$$.top, 10)) && $arMovedInfolets$$.push($child$$20$$);
    }
    1 > $arMovedInfolets$$.length && ($arMovedInfolets$$ = null);
    return $arMovedInfolets$$;
  };
  $MasonryLayoutCommon$$.prototype.$_reorderTilesForLayout$ = function $$MasonryLayoutCommon$$$$$_reorderTilesForLayout$$() {
    var $arTilePositions$$1$$ = this.$_arTilePositions$;
    this.$_arTilePositions$ = null;
    for (var $arTilePositions$$1$$ = $arTilePositions$$1$$.sort($MasonryLayoutCommon$$.$_compareTilePositions$), $children$$26$$ = this.$_getTileChildren$(), $i$$442$$ = 0;$i$$442$$ < $children$$26$$.length;$i$$442$$++) {
      var $child$$21_posTileIndex$$ = $children$$26$$[$i$$442$$], $posTile$$ = $arTilePositions$$1$$[$i$$442$$].tile;
      $child$$21_posTileIndex$$ != $posTile$$ && (this.$_subtreeDetachedFunc$($posTile$$), $child$$21_posTileIndex$$.parentNode.insertBefore($posTile$$, $child$$21_posTileIndex$$), this.$_subtreeAttachedFunc$($posTile$$), $child$$21_posTileIndex$$ = $MasonryLayoutCommon$$.$_arrayIndexOf$($children$$26$$, $posTile$$), $child$$21_posTileIndex$$ > $i$$442$$ && ($children$$26$$.splice($child$$21_posTileIndex$$, 1), $children$$26$$.splice($i$$442$$, 0, $posTile$$)));
    }
  };
  $MasonryLayoutCommon$$.prototype.$_initOccupancyMap$ = function $$MasonryLayoutCommon$$$$$_initOccupancyMap$$($cols$$1$$, $rows$$7$$) {
    for (var $occupancyMap$$ = this.$_occupancyMap$ = [], $row$$46$$ = 0;$row$$46$$ < $rows$$7$$;$row$$46$$++) {
      var $arCols$$1$$ = [];
      $occupancyMap$$.push($arCols$$1$$);
      for (var $col$$3$$ = 0;$col$$3$$ < $cols$$1$$;$col$$3$$++) {
        $arCols$$1$$[$col$$3$$] = !1;
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_addRow$ = function $$MasonryLayoutCommon$$$$$_addRow$$() {
    this.$_rows$++;
    var $arCols$$2$$ = [];
    this.$_occupancyMap$.push($arCols$$2$$);
    for (var $col$$4$$ = 0;$col$$4$$ < this.$_cols$;$col$$4$$++) {
      $arCols$$2$$[$col$$4$$] = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$_fits$ = function $$MasonryLayoutCommon$$$$$_fits$$($col$$5$$, $row$$47$$, $childSpan$$1_rowSpan$$) {
    var $colSpan$$2$$ = $childSpan$$1_rowSpan$$.colSpan;
    $childSpan$$1_rowSpan$$ = $childSpan$$1_rowSpan$$.rowSpan;
    for (var $r$$7$$ = $row$$47$$;$r$$7$$ < $row$$47$$ + $childSpan$$1_rowSpan$$;$r$$7$$++) {
      $r$$7$$ >= this.$_rows$ && this.$_addRow$();
      for (var $c$$54$$ = $col$$5$$;$c$$54$$ < $col$$5$$ + $colSpan$$2$$;$c$$54$$++) {
        if ($c$$54$$ >= this.$_cols$ || this.$_occupancyMap$[$r$$7$$][$c$$54$$]) {
          return!1;
        }
      }
    }
    return!0;
  };
  $MasonryLayoutCommon$$.prototype.$_position$ = function $$MasonryLayoutCommon$$$$$_position$$($child$$22_style$$20$$, $col$$6$$, $row$$48$$, $childSpan$$2_rowSpan$$1$$, $cellSize$$1$$, $insets$$1$$) {
    var $colSpan$$3$$ = $childSpan$$2_rowSpan$$1$$.colSpan;
    $childSpan$$2_rowSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.rowSpan;
    for (var $occupancyMap$$2$$ = this.$_occupancyMap$, $r$$8$$ = $row$$48$$;$r$$8$$ < $row$$48$$ + $childSpan$$2_rowSpan$$1$$;$r$$8$$++) {
      for (var $c$$55$$ = $col$$6$$;$c$$55$$ < $col$$6$$ + $colSpan$$3$$;$c$$55$$++) {
        $occupancyMap$$2$$[$r$$8$$][$c$$55$$] = !0;
      }
    }
    $child$$22_style$$20$$ = $child$$22_style$$20$$.style;
    $child$$22_style$$20$$.top = $insets$$1$$.paddingTop + $row$$48$$ * $cellSize$$1$$.$h$ + "px";
    this.$_rtl$ ? $child$$22_style$$20$$.right = $insets$$1$$.paddingRight + $col$$6$$ * $cellSize$$1$$.$w$ + "px" : $child$$22_style$$20$$.left = $insets$$1$$.paddingLeft + $col$$6$$ * $cellSize$$1$$.$w$ + "px";
  };
  $MasonryLayoutCommon$$.prototype.$_addStyleClassToTiles$ = function $$MasonryLayoutCommon$$$$$_addStyleClassToTiles$$($styleClassName$$) {
    for (var $children$$27$$ = this.$_getTileChildren$(), $i$$443$$ = 0;$i$$443$$ < $children$$27$$.length;$i$$443$$++) {
      this.$_addStyleClassNameFunc$($children$$27$$[$i$$443$$], $styleClassName$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_removeStyleClassFromTiles$ = function $$MasonryLayoutCommon$$$$$_removeStyleClassFromTiles$$($styleClassName$$1$$) {
    for (var $children$$28$$ = this.$_getTileChildren$(), $i$$444$$ = 0;$i$$444$$ < $children$$28$$.length;$i$$444$$++) {
      this.$_removeStyleClassNameFunc$($children$$28$$[$i$$444$$], $styleClassName$$1$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_transitionStart$ = function $$MasonryLayoutCommon$$$$$_transitionStart$$($reorder$$2$$) {
    this.$_layoutTransition$ || (this.$_reorderTransitionStarted$ = $reorder$$2$$, this.$isAnimationEnabled$() && (this.$_addStyleClassToTiles$($reorder$$2$$ ? this.$_transitionMoveToFastStyleClass$ : this.$_transitionMoveToStyleClass$), this.$_addStyleClassNameFunc$(this.$_sizeDiv$, $reorder$$2$$ ? this.$_transitionComponentResizeToFastStyleClass$ : this.$_transitionComponentResizeToStyleClass$), $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), 
    $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$)), this.$_layoutTransition$ = !0);
  };
  $MasonryLayoutCommon$$.prototype.$_handleTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleTransitionEnd$$($event$$599_i$$445$$) {
    var $arInfoletsToResize$$2_doneTransitioning$$ = !0;
    if (this.$_arMovedInfolets$) {
      var $arMovedInfolets$$1$$ = this.$_arMovedInfolets$;
      if ($event$$599_i$$445$$) {
        var $target$$98$$ = $event$$599_i$$445$$.target;
        for ($event$$599_i$$445$$ = 0;$event$$599_i$$445$$ < $arMovedInfolets$$1$$.length;$event$$599_i$$445$$++) {
          if ($target$$98$$ === $arMovedInfolets$$1$$[$event$$599_i$$445$$]) {
            $arMovedInfolets$$1$$.splice($event$$599_i$$445$$, 1);
            break;
          }
        }
      } else {
        this.$isAnimationEnabled$() || ($arMovedInfolets$$1$$ = this.$_arMovedInfolets$ = []);
      }
      0 < $arMovedInfolets$$1$$.length && ($arInfoletsToResize$$2_doneTransitioning$$ = !1);
    }
    if ($arInfoletsToResize$$2_doneTransitioning$$) {
      if (this.$_arInfoletsToResize$ && ($arInfoletsToResize$$2_doneTransitioning$$ = this.$_arInfoletsToResize$, this.$_arInfoletsToResize$ = null, this.$isAnimationEnabled$())) {
        for ($event$$599_i$$445$$ = 0;$event$$599_i$$445$$ < $arInfoletsToResize$$2_doneTransitioning$$.length;$event$$599_i$$445$$ += 2) {
          this.$_removeStyleClassNameFunc$($arInfoletsToResize$$2_doneTransitioning$$[$event$$599_i$$445$$], this.$_transitionResizeToStyleClass$);
        }
      }
      this.$_reorderTransitionStarted$ ? (this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$)), this.$_reorderTransitionStarted$ = !1) : this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$));
      this.$isAnimationEnabled$() && ($MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$));
      this.$_showingInfolets$ = this.$_hidingInfolets$ = this.$_resizingInfolet$ = this.$_layoutTransition$ = !1;
      this.$_reorderTilesForLayout$();
      this.$_layoutOnEndFunc$ && this.$_layoutOnEndFunc$();
      if (this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$) {
        if (this.$isAnimationEnabled$()) {
          var $self$$207$$ = this;
          this.$_showTilesTimeout$ = setTimeout(function() {
            $self$$207$$.$_showTiles$();
          }, 0);
        } else {
          this.$_showTiles$();
        }
      } else {
        this.$_layoutPhase$ || this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$();
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_calcCellSize$ = function $$MasonryLayoutCommon$$$$$_calcCellSize$$($child$$23$$, $childSpan$$3$$) {
    var $childSize$$ = $MasonryLayoutCommon$$.$_getElemSize$($child$$23$$);
    return{$w$:$childSize$$.$w$ / $childSpan$$3$$.colSpan, $h$:$childSize$$.$h$ / $childSpan$$3$$.rowSpan};
  };
  $MasonryLayoutCommon$$.prototype.$_hideTiles$ = function $$MasonryLayoutCommon$$$$$_hideTiles$$() {
    this.$_hideTilesTimeout$ && (clearTimeout(this.$_hideTilesTimeout$), this.$_hideTilesTimeout$ = null);
    this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$();
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_HIDE$;
    if (this.$_arInfoletsToHide$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToHide$$1$$ = this.$_arInfoletsToHide$, $i$$446$$ = 0;$i$$446$$ < $arInfoletsToHide$$1$$.length;$i$$446$$++) {
        var $infolet$$5$$ = $arInfoletsToHide$$1$$[$i$$446$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "transitionend", this.$_handleHideTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$5$$, this.$_transitionHideFromStyleClass$);
      }
      var $self$$208$$ = this;
      this.$_hideTilesInternalTimeout$ = setTimeout(function() {
        for (var $i$$447$$ = 0;$i$$447$$ < $arInfoletsToHide$$1$$.length;$i$$447$$++) {
          var $infolet$$6$$ = $arInfoletsToHide$$1$$[$i$$447$$];
          $self$$208$$.$_removeStyleClassNameFunc$($infolet$$6$$, $self$$208$$.$_transitionHideFromStyleClass$);
          $self$$208$$.$_addStyleClassNameFunc$($infolet$$6$$, $self$$208$$.$_transitionHideToStyleClass$);
        }
      }, 0);
    } else {
      this.$_handleHideTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleHideTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleHideTransitionEnd$$($event$$600_infolet$$7$$) {
    this.$_hideTilesInternalTimeout$ && (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null);
    if ($event$$600_infolet$$7$$) {
      $event$$600_infolet$$7$$.preventDefault();
      $event$$600_infolet$$7$$.stopPropagation();
      $event$$600_infolet$$7$$ = $event$$600_infolet$$7$$.target;
      this.$_removeStyleClassNameFunc$($event$$600_infolet$$7$$, this.$_transitionHideToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$600_infolet$$7$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$600_infolet$$7$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      var $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$ = this.$_arInfoletsToHide$;
      if ($arInfoletsToHide$$2_newSizeStyleClass_style$$21$$) {
        for (var $i$$448$$ = 0;$i$$448$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.length;$i$$448$$++) {
          var $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$[$i$$448$$];
          if ($oldSizeStyleClass$$1_tmpInfolet$$ === $event$$600_infolet$$7$$) {
            $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.splice($i$$448$$, 1);
            this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []);
            var $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
            $arFireHideOnEnd_arInfoletsToResize$$3$$.push($event$$600_infolet$$7$$);
            break;
          }
        }
        1 > $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.length && (this.$_arInfoletsToHide$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToHide$$2_newSizeStyleClass_style$$21$$ = this.$_arInfoletsToHide$)) {
        for ($i$$448$$ = 0;$i$$448$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.length;$i$$448$$++) {
          $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$[$i$$448$$], this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []), $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$, $arFireHideOnEnd_arInfoletsToResize$$3$$.push($oldSizeStyleClass$$1_tmpInfolet$$);
        }
        this.$_arInfoletsToHide$ = null;
      }
    }
    if (!this.$_arInfoletsToHide$) {
      if (this.$_arFireHideOnEnd$) {
        $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
        for ($i$$448$$ = 0;$i$$448$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$448$$++) {
          $event$$600_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$448$$], this.$isAnimationEnabled$() && this.$_removeStyleClassNameFunc$($event$$600_infolet$$7$$, this.$_transitionHideToStyleClass$), $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$ = $event$$600_infolet$$7$$.style, this.$_rtl$ ? $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.right = "" : $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.left = "", $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$.top = "", 
          this.$_hideTileOnEndFunc$ && this.$_hideTileOnEndFunc$($event$$600_infolet$$7$$);
        }
        this.$_arFireHideOnEnd$ = null;
      }
      this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_LAYOUT$;
      this.$_transitionStart$(!1);
      if (this.$_arInfoletsToResize$) {
        for ($arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arInfoletsToResize$, $i$$448$$ = 0;$i$$448$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$448$$ += 2) {
          $event$$600_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$448$$], $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$448$$ + 1], $oldSizeStyleClass$$1_tmpInfolet$$ = this.$_getSizeStyleClassNameFunc$($event$$600_infolet$$7$$), this.$_removeStyleClassNameFunc$($event$$600_infolet$$7$$, $oldSizeStyleClass$$1_tmpInfolet$$), this.$_addStyleClassNameFunc$($event$$600_infolet$$7$$, $arInfoletsToHide$$2_newSizeStyleClass_style$$21$$), 
          this.$isAnimationEnabled$() && (this.$_addStyleClassNameFunc$($event$$600_infolet$$7$$, this.$_transitionResizeToStyleClass$), $event$$600_infolet$$7$$.$_afrOldSizeStyleClass$ = $oldSizeStyleClass$$1_tmpInfolet$$);
        }
      }
      this.$_transitionLayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$_showTiles$ = function $$MasonryLayoutCommon$$$$$_showTiles$$() {
    this.$_showTilesTimeout$ && (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null);
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_SHOW$;
    if (this.$_arInfoletsToShow$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$449$$ = 0;$i$$449$$ < $arInfoletsToShow$$1$$.length;$i$$449$$++) {
        var $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$449$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "transitionend", this.$_handleShowTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowToStyleClass$);
        this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
      }
    } else {
      if (this.$_arInfoletsToShow$) {
        for ($arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$449$$ = 0;$i$$449$$ < $arInfoletsToShow$$1$$.length;$i$$449$$++) {
          $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$449$$], this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
        }
      }
      this.$_handleShowTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleShowTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleShowTransitionEnd$$($event$$601_infolet$$9$$) {
    if ($event$$601_infolet$$9$$) {
      $event$$601_infolet$$9$$.preventDefault();
      $event$$601_infolet$$9$$.stopPropagation();
      $event$$601_infolet$$9$$ = $event$$601_infolet$$9$$.target;
      this.$_removeStyleClassNameFunc$($event$$601_infolet$$9$$, this.$_transitionShowToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$601_infolet$$9$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$601_infolet$$9$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
      var $arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$;
      if ($arInfoletsToShow$$2$$) {
        for (var $i$$450$$ = 0;$i$$450$$ < $arInfoletsToShow$$2$$.length;$i$$450$$++) {
          var $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$450$$];
          if ($tmpInfolet$$1$$ === $event$$601_infolet$$9$$) {
            $arInfoletsToShow$$2$$.splice($i$$450$$, 1);
            this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($event$$601_infolet$$9$$);
            break;
          }
        }
        1 > $arInfoletsToShow$$2$$.length && (this.$_arInfoletsToShow$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$)) {
        for ($i$$450$$ = 0;$i$$450$$ < $arInfoletsToShow$$2$$.length;$i$$450$$++) {
          $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$450$$], this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($tmpInfolet$$1$$);
        }
        this.$_arInfoletsToShow$ = null;
      }
    }
    this.$_arInfoletsToShow$ || (this.$_layoutPhase$ = null, this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$(), this.$_queuedRelayout$ && (this.$_queuedRelayout$ = !1, this.$_queueRelayout$()));
  };
  $MasonryLayoutCommon$$.$_PHASE_HIDE$ = 1;
  $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ = 2;
  $MasonryLayoutCommon$$.$_PHASE_SHOW$ = 3;
});
