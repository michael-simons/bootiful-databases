/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$78$$, $$$$71$$) {
  function $ConveyorBeltCommon$$($agentName$$1_elem$$149$$, $orientation$$, $contentParent$$, $bRtl$$, $buttonInfo$$, $callbackInfo$$2$$) {
    this.$_elem$ = $agentName$$1_elem$$149$$;
    this.$_orientation$ = $orientation$$;
    this.$_contentParent$ = $contentParent$$;
    this.$_bRtl$ = $bRtl$$;
    $buttonInfo$$ && ($buttonInfo$$.$prevButtonId$ && (this.$_prevButtonId$ = $buttonInfo$$.$prevButtonId$), $buttonInfo$$.$nextButtonId$ && (this.$_nextButtonId$ = $buttonInfo$$.$nextButtonId$), $buttonInfo$$.$prevButtonStyleClass$ && (this.$_prevButtonStyleClass$ = $buttonInfo$$.$prevButtonStyleClass$), $buttonInfo$$.$nextButtonStyleClass$ && (this.$_nextButtonStyleClass$ = $buttonInfo$$.$nextButtonStyleClass$), $buttonInfo$$.$prevButtonIcon$ && (this.$_prevButtonIcon$ = $buttonInfo$$.$prevButtonIcon$), 
    $buttonInfo$$.$nextButtonIcon$ && (this.$_nextButtonIcon$ = $buttonInfo$$.$nextButtonIcon$));
    $callbackInfo$$2$$ && ($callbackInfo$$2$$.$scrollFunc$ && (this.$_scrollFunc$ = $callbackInfo$$2$$.$scrollFunc$), $callbackInfo$$2$$.$firstVisibleItemChangedFunc$ && (this.$_firstVisibleItemChangedFunc$ = $callbackInfo$$2$$.$firstVisibleItemChangedFunc$), $callbackInfo$$2$$.$callbackObj$ && (this.$_callbackObj$ = $callbackInfo$$2$$.$callbackObj$), $callbackInfo$$2$$.$addResizeListener$ && (this.$_addResizeListenerFunc$ = $callbackInfo$$2$$.$addResizeListener$), $callbackInfo$$2$$.$removeResizeListener$ && 
    (this.$_removeResizeListenerFunc$ = $callbackInfo$$2$$.$removeResizeListener$));
    this.$_bExternalScroll$ = !0;
    this.$_firstVisibleItemIndex$ = 0;
    $agentName$$1_elem$$149$$ = navigator.userAgent.toLowerCase();
    if (-1 !== $agentName$$1_elem$$149$$.indexOf("gecko/")) {
      this.$_bAgentGecko$ = !0;
    } else {
      if (-1 !== $agentName$$1_elem$$149$$.indexOf("opera")) {
        this.$_bAgentOpera$ = !0;
      } else {
        if (-1 !== $agentName$$1_elem$$149$$.indexOf("applewebkit") || -1 !== $agentName$$1_elem$$149$$.indexOf("safari")) {
          this.$_bAgentWebkit$ = !0;
        }
      }
    }
  }
  $ConveyorBeltCommon$$.prototype.$setup$ = function $$ConveyorBeltCommon$$$$$setup$$($bInit$$1$$) {
    var $self$$219$$ = this;
    if ($bInit$$1$$) {
      this.$_createInnerContainers$();
      this.$_createPrevButton$(this.$_prevButtonId$, this.$_prevButtonStyleClass$, this.$_prevButtonIcon$);
      this.$_createNextButton$(this.$_nextButtonId$, this.$_nextButtonStyleClass$, this.$_nextButtonIcon$);
      var $nextButton$$ = this.$_nextButton$, $tableCellDivNextButton_vertDivNextButton$$ = this.$_tableCellDivNextButton$;
      $tableCellDivNextButton_vertDivNextButton$$ ? (this.$_buttonWidth$ = $tableCellDivNextButton_vertDivNextButton$$.offsetWidth, this.$_buttonHeight$ = $nextButton$$.offsetHeight) : ($tableCellDivNextButton_vertDivNextButton$$ = this.$_vertDivNextButton$, this.$_buttonWidth$ = $nextButton$$.offsetWidth, this.$_buttonHeight$ = $tableCellDivNextButton_vertDivNextButton$$.offsetHeight);
      this.$_hidePrevButton$();
      this.$_hideNextButton$();
      this.$_mouseWheelListener$ = function $this$$_mouseWheelListener$$($event$$635$$) {
        $self$$219$$.$_handleMouseWheel$($event$$635$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_elem$, "mousewheel", this.$_mouseWheelListener$);
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_elem$, "wheel", this.$_mouseWheelListener$);
      this.$_touchStartListener$ = function $this$$_touchStartListener$$($event$$636$$) {
        $self$$219$$.$_handleTouchStart$($event$$636$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
      this.$_touchMoveListener$ = function $this$$_touchMoveListener$$($event$$637$$) {
        $self$$219$$.$_handleTouchMove$($event$$637$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
      this.$_touchEndListener$ = function $this$$_touchEndListener$$($event$$638$$) {
        $self$$219$$.$_handleTouchEnd$($event$$638$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
      this.$_origScroll$ = 0;
    } else {
      this.$_reinitializeInnerDom$();
    }
    this.$_clearCachedSizes$();
    this.$_adjustOverflowSize$($bInit$$1$$);
    this.$_handleResize$(!0);
    $bInit$$1$$ && this.$_addResizeListenerFunc$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
      $self$$219$$.$_handleResize$(!1);
    }, this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_elem$, this.$_handleResizeFunc$), this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$));
  };
  $ConveyorBeltCommon$$.prototype.destroy = function $$ConveyorBeltCommon$$$$destroy$() {
    var $elem$$150$$ = this.$_elem$;
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$($elem$$150$$, "mousewheel", this.$_mouseWheelListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$($elem$$150$$, "wheel", this.$_mouseWheelListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
    this.$_touchEndListener$ = this.$_touchMoveListener$ = this.$_touchStartListener$ = this.$_mouseWheelListener$ = null;
    this.$_removeResizeListenerFunc$ && this.$_handleResizeFunc$ && (this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, $elem$$150$$, this.$_handleResizeFunc$), this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$));
    this.$_handleResizeFunc$ = null;
    $ConveyorBeltCommon$$.$_reparentChildrenFromTable$(this.$_contentTableDiv$, $elem$$150$$);
    this.$_arContentElements$ = null;
    this.$_tableDiv$ ? $elem$$150$$.removeChild(this.$_tableDiv$) : ($elem$$150$$.removeChild(this.$_overflowContainer$), $elem$$150$$.removeChild(this.$_vertDivNextButton$), $elem$$150$$.removeChild(this.$_vertDivPrevButton$));
    this.$_vertDivNextButton$ = this.$_vertDivPrevButton$ = this.$_nextButtonWrapper$ = this.$_prevButtonWrapper$ = this.$_tableCellDivNextButton$ = this.$_tableCellDivPrevButton$ = this.$_tableDiv$ = this.$_contentTableDiv$ = this.$_overflowContainer$ = this.$_contentContainer$ = this.$_prevButton$ = this.$_nextButton$ = null;
    this.$_clearCachedSizes$();
    this.$_contentParent$ = this.$_callbackObj$ = this.$_removeResizeListenerFunc$ = this.$_addResizeListenerFunc$ = this.$_firstVisibleItemChangedFunc$ = this.$_scrollFunc$ = this.$_elem$ = null;
  };
  $ConveyorBeltCommon$$.$_reparentChildrenToTable$ = function $$ConveyorBeltCommon$$$$_reparentChildrenToTable$$($fromNode_fromNodeChildren$$, $toTable$$, $bHoriz$$) {
    var $tableRow$$ = null;
    $bHoriz$$ && ($tableRow$$ = $ConveyorBeltCommon$$.$_createTableRowDiv$(), $toTable$$.appendChild($tableRow$$));
    var $arElements$$ = null;
    for ($fromNode_fromNodeChildren$$ = $fromNode_fromNodeChildren$$.childNodes;0 < $fromNode_fromNodeChildren$$.length;) {
      $arElements$$ || ($arElements$$ = []);
      var $child$$25$$ = $fromNode_fromNodeChildren$$[0];
      if (1 === $child$$25$$.nodeType) {
        $bHoriz$$ || ($tableRow$$ = $ConveyorBeltCommon$$.$_createTableRowDiv$(), $toTable$$.appendChild($tableRow$$));
        var $tableCell$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$();
        $tableCell$$.appendChild($child$$25$$);
        $tableRow$$.appendChild($tableCell$$);
        $arElements$$.push($child$$25$$);
      } else {
        $bHoriz$$ ? $tableRow$$.appendChild($child$$25$$) : $toTable$$.appendChild($child$$25$$);
      }
    }
    return $arElements$$;
  };
  $ConveyorBeltCommon$$.$_reparentChildrenFromTable$ = function $$ConveyorBeltCommon$$$$_reparentChildrenFromTable$$($fromTable$$, $toNode$$) {
    if ($fromTable$$) {
      for (var $tableRows$$ = $fromTable$$.childNodes;0 < $tableRows$$.length;) {
        var $tableRow$$1$$ = $tableRows$$[0];
        if (1 === $tableRow$$1$$.nodeType) {
          for (var $tableCells$$ = $tableRow$$1$$.childNodes;0 < $tableCells$$.length;) {
            var $tableCell$$1$$ = $tableCells$$[0];
            1 === $tableCell$$1$$.nodeType ? ($toNode$$.appendChild($tableCell$$1$$.firstChild), $tableRow$$1$$.removeChild($tableCell$$1$$)) : $toNode$$.appendChild($tableCell$$1$$);
          }
          $fromTable$$.removeChild($tableRow$$1$$);
        } else {
          $toNode$$.appendChild($tableRow$$1$$);
        }
      }
    }
  };
  $ConveyorBeltCommon$$.$_getComputedStyle$ = function $$ConveyorBeltCommon$$$$_getComputedStyle$$($elem$$151$$) {
    var $defView$$1$$ = $elem$$151$$.ownerDocument.defaultView, $computedStyle$$3$$ = null;
    return $computedStyle$$3$$ = $defView$$1$$ ? $defView$$1$$.getComputedStyle($elem$$151$$, null) : $elem$$151$$.currentStyle;
  };
  $ConveyorBeltCommon$$.$_getElemInnerWidth$ = function $$ConveyorBeltCommon$$$$_getElemInnerWidth$$($computedStyle$$4_elem$$152$$) {
    $computedStyle$$4_elem$$152$$ = $ConveyorBeltCommon$$.$_getComputedStyle$($computedStyle$$4_elem$$152$$);
    return $ConveyorBeltCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$152$$.width);
  };
  $ConveyorBeltCommon$$.$_getElemInnerHeight$ = function $$ConveyorBeltCommon$$$$_getElemInnerHeight$$($computedStyle$$5_elem$$153$$) {
    $computedStyle$$5_elem$$153$$ = $ConveyorBeltCommon$$.$_getComputedStyle$($computedStyle$$5_elem$$153$$);
    return $ConveyorBeltCommon$$.$_getCSSLengthAsInt$($computedStyle$$5_elem$$153$$.height);
  };
  $ConveyorBeltCommon$$.$_getCSSLengthAsInt$ = function $$ConveyorBeltCommon$$$$_getCSSLengthAsInt$$($cssLength$$3_intLength$$2$$) {
    return 0 < $cssLength$$3_intLength$$2$$.length && "auto" != $cssLength$$3_intLength$$2$$ ? ($cssLength$$3_intLength$$2$$ = parseInt($cssLength$$3_intLength$$2$$, 10), isNaN($cssLength$$3_intLength$$2$$) && ($cssLength$$3_intLength$$2$$ = 0), $cssLength$$3_intLength$$2$$) : 0;
  };
  $ConveyorBeltCommon$$.$_addBubbleEventListener$ = function $$ConveyorBeltCommon$$$$_addBubbleEventListener$$($node$$179$$, $type$$115$$, $listener$$44$$) {
    $node$$179$$.addEventListener ? $node$$179$$.addEventListener($type$$115$$, $listener$$44$$, !1) : $node$$179$$.attachEvent && $node$$179$$.attachEvent("on" + $type$$115$$, $listener$$44$$);
  };
  $ConveyorBeltCommon$$.$_removeBubbleEventListener$ = function $$ConveyorBeltCommon$$$$_removeBubbleEventListener$$($node$$180$$, $type$$116$$, $listener$$45$$) {
    $node$$180$$.removeEventListener ? $node$$180$$.removeEventListener($type$$116$$, $listener$$45$$, !1) : $node$$180$$.detachEvent && $node$$180$$.detachEvent("on" + $type$$116$$, $listener$$45$$);
  };
  $ConveyorBeltCommon$$.$_getWheelDelta$ = function $$ConveyorBeltCommon$$$$_getWheelDelta$$($event$$639$$) {
    var $wheelDelta$$ = 0;
    return $wheelDelta$$ = null != $event$$639$$.wheelDelta ? $event$$639$$.wheelDelta : null != $event$$639$$.deltaY ? -$event$$639$$.deltaY : -$event$$639$$.detail;
  };
  $ConveyorBeltCommon$$.$_createTableDiv$ = function $$ConveyorBeltCommon$$$$_createTableDiv$$() {
    var $tableDiv$$ = document.createElement("div");
    $tableDiv$$.style.display = "table";
    return $tableDiv$$;
  };
  $ConveyorBeltCommon$$.$_createTableRowDiv$ = function $$ConveyorBeltCommon$$$$_createTableRowDiv$$() {
    var $tableRowDiv$$ = document.createElement("div");
    $tableRowDiv$$.style.display = "table-row";
    return $tableRowDiv$$;
  };
  $ConveyorBeltCommon$$.$_createTableCellDiv$ = function $$ConveyorBeltCommon$$$$_createTableCellDiv$$() {
    var $tableCellDiv$$ = document.createElement("div");
    $tableCellDiv$$.style.display = "table-cell";
    return $tableCellDiv$$;
  };
  $ConveyorBeltCommon$$.$_wrapAndRestrictSize$ = function $$ConveyorBeltCommon$$$$_wrapAndRestrictSize$$($elem$$154$$, $parentElem$$5$$, $bWidth$$, $bHeight$$) {
    var $wrapperDiv$$ = document.createElement("div"), $wrapperDivStyle$$ = $wrapperDiv$$.style;
    $wrapperDivStyle$$.display = "inline-block";
    $wrapperDiv$$.appendChild($elem$$154$$);
    $parentElem$$5$$.appendChild($wrapperDiv$$);
    $bWidth$$ && ($wrapperDivStyle$$.maxWidth = $wrapperDiv$$.offsetWidth + "px");
    $bHeight$$ && ($wrapperDivStyle$$.maxHeight = $wrapperDiv$$.offsetHeight + "px");
    return $wrapperDiv$$;
  };
  $ConveyorBeltCommon$$.prototype.$_isHorizontal$ = function $$ConveyorBeltCommon$$$$$_isHorizontal$$() {
    return "horizontal" === this.$_orientation$;
  };
  $ConveyorBeltCommon$$.prototype.$_isEmpty$ = function $$ConveyorBeltCommon$$$$$_isEmpty$$() {
    return!this.$_getContentParent$().hasChildNodes();
  };
  $ConveyorBeltCommon$$.prototype.$_reinitializeInnerDom$ = function $$ConveyorBeltCommon$$$$$_reinitializeInnerDom$$() {
    this.$_origScroll$ = this.$_getCurrScroll$();
    this.$_clearOverflowMaxSize$();
    this.$_setOverflowScroll$(0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
  };
  $ConveyorBeltCommon$$.prototype.$_clearCachedSizes$ = function $$ConveyorBeltCommon$$$$$_clearCachedSizes$$() {
    this.$_sizes$ = this.$_totalSize$ = null;
  };
  $ConveyorBeltCommon$$.prototype.$_handleResize$ = function $$ConveyorBeltCommon$$$$$_handleResize$$($bSetup_totalSize$$8$$) {
    $bSetup_totalSize$$8$$ || this.$_reinitializeInnerDom$();
    this.$_clearCachedSizes$();
    this.$_totalSize$ && this.$_sizes$ || (this.$_totalSize$ = this.$_measureContents$());
    $bSetup_totalSize$$8$$ || this.$_adjustOverflowSize$(!1);
    $bSetup_totalSize$$8$$ = this.$_totalSize$;
    this.$_alignButtons$($bSetup_totalSize$$8$$.$w$, $bSetup_totalSize$$8$$.$h$);
  };
  $ConveyorBeltCommon$$.prototype.$_alignButtons$ = function $$ConveyorBeltCommon$$$$$_alignButtons$$($w$$9$$, $h$$8$$) {
    var $nextButtonStyle$$ = this.$_nextButton$.style, $prevButtonStyle$$ = this.$_prevButton$.style;
    if (this.$_isHorizontal$()) {
      var $hOffset_vOffset$$ = .5 * ($h$$8$$ - this.$_buttonHeight$);
      $nextButtonStyle$$.top = $hOffset_vOffset$$ + "px";
      $prevButtonStyle$$.top = $hOffset_vOffset$$ + "px";
    } else {
      $hOffset_vOffset$$ = .5 * ($w$$9$$ - this.$_buttonWidth$), this.$_bRtl$ ? ($nextButtonStyle$$.left = -$hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = -$hOffset_vOffset$$ + "px") : ($nextButtonStyle$$.left = $hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = $hOffset_vOffset$$ + "px");
    }
  };
  $ConveyorBeltCommon$$.prototype.$_adjustOverflowSize$ = function $$ConveyorBeltCommon$$$$$_adjustOverflowSize$$($bInit$$2$$) {
    var $contentContainer$$1$$ = this.$_contentContainer$, $bHoriz$$2$$ = this.$_isHorizontal$(), $elemInnerSize$$ = $bHoriz$$2$$ ? $ConveyorBeltCommon$$.$_getElemInnerWidth$(this.$_elem$) : $ConveyorBeltCommon$$.$_getElemInnerHeight$(this.$_elem$);
    ($bHoriz$$2$$ ? $contentContainer$$1$$.offsetWidth : $contentContainer$$1$$.offsetHeight) > $elemInnerSize$$ && this.$_setOverflowMaxSize$($elemInnerSize$$);
    this.$_minScroll$ = 0;
    this.$_maxScroll$ = $bHoriz$$2$$ ? $contentContainer$$1$$.offsetWidth - $elemInnerSize$$ + this.$_buttonWidth$ : $contentContainer$$1$$.offsetHeight - $elemInnerSize$$ + this.$_buttonHeight$;
    0 > this.$_maxScroll$ && (this.$_maxScroll$ = 0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
    this.$_setCurrScroll$($bInit$$2$$ ? this.$_minScroll$ : this.$_origScroll$, !0);
    this.$_origScroll$ = 0;
  };
  $ConveyorBeltCommon$$.prototype.$_createInnerContainers$ = function $$ConveyorBeltCommon$$$$$_createInnerContainers$$() {
    var $self$$220$$ = this, $bHoriz$$3_overflowHeight$$ = this.$_isHorizontal$(), $overflowContainer$$ = document.createElement("div");
    this.$_overflowContainer$ = $overflowContainer$$;
    var $overflowContainerStyle$$ = $overflowContainer$$.style;
    $overflowContainerStyle$$.overflow = "hidden";
    $overflowContainerStyle$$.display = this.$_getCssDisplay$();
    $overflowContainerStyle$$.position = "relative";
    $bHoriz$$3_overflowHeight$$ && ($overflowContainerStyle$$.verticalAlign = "top");
    var $elem$$155$$ = this.$_elem$, $contentContainer$$2_contentHeight$$ = document.createElement("div");
    this.$_contentContainer$ = $contentContainer$$2_contentHeight$$;
    var $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = $contentContainer$$2_contentHeight$$.style;
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.position = "relative";
    $bHoriz$$3_overflowHeight$$ && ($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.display = "inline-block");
    $overflowContainer$$.appendChild($contentContainer$$2_contentHeight$$);
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = null;
    if ($bHoriz$$3_overflowHeight$$) {
      this.$_tableDiv$ = $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = $ConveyorBeltCommon$$.$_createTableDiv$();
      var $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = $ConveyorBeltCommon$$.$_createTableRowDiv$(), $arContentElements_tableCellDivPrevButton$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$();
      this.$_tableCellDivPrevButton$ = $arContentElements_tableCellDivPrevButton$$;
      var $contentChildren_tableCellDivOverflow$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$(), $numContentChildren_tableCellDivNextButton$$1$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$();
      this.$_tableCellDivNextButton$ = $numContentChildren_tableCellDivNextButton$$1$$;
      var $i$$479_tableCellDivNextButtonStyle$$ = $numContentChildren_tableCellDivNextButton$$1$$.style;
      $arContentElements_tableCellDivPrevButton$$.style.verticalAlign = "top";
      $i$$479_tableCellDivNextButtonStyle$$.verticalAlign = "top";
      $contentChildren_tableCellDivOverflow$$.appendChild($overflowContainer$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($arContentElements_tableCellDivPrevButton$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($contentChildren_tableCellDivOverflow$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($numContentChildren_tableCellDivNextButton$$1$$);
      $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$);
    }
    $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = $ConveyorBeltCommon$$.$_createTableDiv$();
    $arContentElements_tableCellDivPrevButton$$ = $ConveyorBeltCommon$$.$_reparentChildrenToTable$($elem$$155$$, $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$, $bHoriz$$3_overflowHeight$$);
    if (this.$_contentParent$) {
      for ($arContentElements_tableCellDivPrevButton$$ = [], $contentChildren_tableCellDivOverflow$$ = this.$_contentParent$.children, $numContentChildren_tableCellDivNextButton$$1$$ = $contentChildren_tableCellDivOverflow$$.length, $i$$479_tableCellDivNextButtonStyle$$ = 0;$i$$479_tableCellDivNextButtonStyle$$ < $numContentChildren_tableCellDivNextButton$$1$$;$i$$479_tableCellDivNextButtonStyle$$++) {
        var $child$$26$$ = $contentChildren_tableCellDivOverflow$$[$i$$479_tableCellDivNextButtonStyle$$];
        1 === $child$$26$$.nodeType && $arContentElements_tableCellDivPrevButton$$.push($child$$26$$);
      }
    }
    (this.$_arContentElements$ = $arContentElements_tableCellDivPrevButton$$) && 0 < $arContentElements_tableCellDivPrevButton$$.length && (this.$_contentTableDiv$ = $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$, $contentContainer$$2_contentHeight$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$));
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ ? $elem$$155$$.appendChild($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$) : (this.$_vertDivPrevButton$ = $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = document.createElement("div"), this.$_vertDivNextButton$ = $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = document.createElement("div"), $elem$$155$$.appendChild($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$), $elem$$155$$.appendChild($overflowContainer$$), 
    $elem$$155$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$));
    $bHoriz$$3_overflowHeight$$ && ($bHoriz$$3_overflowHeight$$ = $overflowContainer$$.offsetHeight, $contentContainer$$2_contentHeight$$ = $contentContainer$$2_contentHeight$$.offsetHeight, $bHoriz$$3_overflowHeight$$ > $contentContainer$$2_contentHeight$$ && ($overflowContainerStyle$$.marginBottom = $contentContainer$$2_contentHeight$$ - $bHoriz$$3_overflowHeight$$ + "px"));
    $ConveyorBeltCommon$$.$_addBubbleEventListener$($overflowContainer$$, "scroll", function() {
      $self$$220$$.$_handleScroll$();
    });
  };
  $ConveyorBeltCommon$$.prototype.$_getCssDisplay$ = function $$ConveyorBeltCommon$$$$$_getCssDisplay$$() {
    return this.$_isHorizontal$() ? "inline-block" : "block";
  };
  $ConveyorBeltCommon$$.prototype.$_createPrevButton$ = function $$ConveyorBeltCommon$$$$$_createPrevButton$$($buttonId_prevButtonStyle$$1$$, $bHoriz$$4_buttonStyleClass$$, $icon$$14$$) {
    var $self$$221$$ = this, $prevButton$$1$$ = document.createElement("div");
    this.$_prevButton$ = $prevButton$$1$$;
    $buttonId_prevButtonStyle$$1$$ && $prevButton$$1$$.setAttribute("id", $buttonId_prevButtonStyle$$1$$);
    $prevButton$$1$$.setAttribute("class", $bHoriz$$4_buttonStyleClass$$);
    $prevButton$$1$$.setAttribute("aria-hidden", "true");
    $buttonId_prevButtonStyle$$1$$ = $prevButton$$1$$.style;
    $buttonId_prevButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId_prevButtonStyle$$1$$.position = "relative";
    if ($bHoriz$$4_buttonStyleClass$$ = this.$_isHorizontal$()) {
      $buttonId_prevButtonStyle$$1$$.verticalAlign = "top";
    }
    $ConveyorBeltCommon$$.$_addBubbleEventListener$($prevButton$$1$$, "click", function() {
      $self$$221$$.$_scrollPrev$();
    });
    this.$_tableCellDivPrevButton$ ? this.$_prevButtonWrapper$ = $ConveyorBeltCommon$$.$_wrapAndRestrictSize$($prevButton$$1$$, this.$_tableCellDivPrevButton$, $bHoriz$$4_buttonStyleClass$$, !$bHoriz$$4_buttonStyleClass$$) : this.$_vertDivPrevButton$.appendChild($prevButton$$1$$);
    $icon$$14$$ && $prevButton$$1$$.appendChild($icon$$14$$);
  };
  $ConveyorBeltCommon$$.prototype.$_createNextButton$ = function $$ConveyorBeltCommon$$$$$_createNextButton$$($buttonId$$1_nextButtonStyle$$1$$, $bHoriz$$5_buttonStyleClass$$1$$, $icon$$15$$) {
    var $self$$222$$ = this, $nextButton$$2$$ = document.createElement("div");
    this.$_nextButton$ = $nextButton$$2$$;
    $buttonId$$1_nextButtonStyle$$1$$ && $nextButton$$2$$.setAttribute("id", $buttonId$$1_nextButtonStyle$$1$$);
    $nextButton$$2$$.setAttribute("class", $bHoriz$$5_buttonStyleClass$$1$$);
    $nextButton$$2$$.setAttribute("aria-hidden", "true");
    $buttonId$$1_nextButtonStyle$$1$$ = $nextButton$$2$$.style;
    $buttonId$$1_nextButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId$$1_nextButtonStyle$$1$$.position = "relative";
    if ($bHoriz$$5_buttonStyleClass$$1$$ = this.$_isHorizontal$()) {
      $buttonId$$1_nextButtonStyle$$1$$.verticalAlign = "top";
    }
    $ConveyorBeltCommon$$.$_addBubbleEventListener$($nextButton$$2$$, "click", function() {
      $self$$222$$.$_scrollNext$();
    });
    this.$_tableCellDivNextButton$ ? this.$_nextButtonWrapper$ = $ConveyorBeltCommon$$.$_wrapAndRestrictSize$($nextButton$$2$$, this.$_tableCellDivNextButton$, $bHoriz$$5_buttonStyleClass$$1$$, !$bHoriz$$5_buttonStyleClass$$1$$) : this.$_vertDivNextButton$.appendChild($nextButton$$2$$);
    $icon$$15$$ && $nextButton$$2$$.appendChild($icon$$15$$);
  };
  $ConveyorBeltCommon$$.prototype.$_getContentParent$ = function $$ConveyorBeltCommon$$$$$_getContentParent$$() {
    var $contentParent$$3$$ = this.$_contentParent$;
    $contentParent$$3$$ || ($contentParent$$3$$ = this.$_contentContainer$);
    return $contentParent$$3$$;
  };
  $ConveyorBeltCommon$$.prototype.$_measureContents$ = function $$ConveyorBeltCommon$$$$$_measureContents$$() {
    var $bHoriz$$6_contentTableDiv$$1$$ = this.$_contentTableDiv$, $arContentElements$$1$$ = this.$_arContentElements$, $totalSize$$9$$ = {$w$:0, $h$:0}, $sizes$$1$$ = [];
    if (this.$_getContentParent$().hasChildNodes() && $bHoriz$$6_contentTableDiv$$1$$ && $arContentElements$$1$$ && 0 < $arContentElements$$1$$.length) {
      for (var $bHoriz$$6_contentTableDiv$$1$$ = this.$_isHorizontal$(), $contentWidth$$1$$ = 0, $contentWidth$$1$$ = this.$_contentContainer$.offsetWidth, $startOffset$$ = 0, $prevSizeObj$$ = null, $i$$480$$ = 0;$i$$480$$ < $arContentElements$$1$$.length;$i$$480$$++) {
        var $child$$27_childParent$$ = $arContentElements$$1$$[$i$$480$$];
        if (1 === $child$$27_childParent$$.nodeType) {
          var $overlap_ww$$ = $child$$27_childParent$$.offsetWidth, $hh$$ = $child$$27_childParent$$.offsetHeight, $sizeObj$$1$$ = {$w$:$overlap_ww$$, $h$:$hh$$, id:$child$$27_childParent$$.id};
          if ($bHoriz$$6_contentTableDiv$$1$$) {
            var $offLeft_offTop$$ = $child$$27_childParent$$.offsetLeft;
            this.$_contentParent$ || 0 !== $offLeft_offTop$$ || ($child$$27_childParent$$ = $child$$27_childParent$$.parentNode, $offLeft_offTop$$ = $child$$27_childParent$$.offsetLeft);
            $sizeObj$$1$$.start = this.$_bRtl$ ? $contentWidth$$1$$ - ($offLeft_offTop$$ + $overlap_ww$$) : $offLeft_offTop$$;
            0 === $i$$480$$ && ($startOffset$$ = $sizeObj$$1$$.start);
            $sizeObj$$1$$.start -= $startOffset$$;
            $totalSize$$9$$.$w$ = $sizeObj$$1$$.start + $overlap_ww$$;
            $totalSize$$9$$.$h$ = Math.max($totalSize$$9$$.$h$, $hh$$);
            $sizeObj$$1$$.end = $totalSize$$9$$.$w$ - 1;
          } else {
            $offLeft_offTop$$ = $child$$27_childParent$$.offsetTop, this.$_contentParent$ || 0 !== $offLeft_offTop$$ || ($child$$27_childParent$$ = $child$$27_childParent$$.parentNode, $offLeft_offTop$$ = $child$$27_childParent$$.offsetTop), $sizeObj$$1$$.start = $offLeft_offTop$$, $totalSize$$9$$.$w$ = Math.max($totalSize$$9$$.$w$, $overlap_ww$$), $totalSize$$9$$.$h$ = $sizeObj$$1$$.start + $hh$$, $sizeObj$$1$$.end = $totalSize$$9$$.$h$ - 1;
          }
          $prevSizeObj$$ && $prevSizeObj$$.end >= $sizeObj$$1$$.start && ($overlap_ww$$ = $prevSizeObj$$.end - ($sizeObj$$1$$.start - 1), $prevSizeObj$$.end -= $overlap_ww$$, $bHoriz$$6_contentTableDiv$$1$$ ? $prevSizeObj$$.$w$ -= $overlap_ww$$ : $prevSizeObj$$.$h$ -= $overlap_ww$$);
          $sizes$$1$$.push($sizeObj$$1$$);
          $prevSizeObj$$ = $sizeObj$$1$$;
        }
      }
    }
    this.$_sizes$ = $sizes$$1$$;
    return $totalSize$$9$$;
  };
  $ConveyorBeltCommon$$.prototype.$_getSizes$ = function $$ConveyorBeltCommon$$$$$_getSizes$$() {
    if (!this.$_sizes$) {
      var $totalSize$$10$$ = this.$_measureContents$();
      this.$_totalSize$ || (this.$_totalSize$ = $totalSize$$10$$);
    }
    return this.$_sizes$;
  };
  $ConveyorBeltCommon$$.prototype.$_getNextButtonDisplayElem$ = function $$ConveyorBeltCommon$$$$$_getNextButtonDisplayElem$$() {
    return this.$_nextButtonWrapper$ ? this.$_nextButtonWrapper$ : this.$_nextButton$;
  };
  $ConveyorBeltCommon$$.prototype.$_getPrevButtonDisplayElem$ = function $$ConveyorBeltCommon$$$$$_getPrevButtonDisplayElem$$() {
    return this.$_prevButtonWrapper$ ? this.$_prevButtonWrapper$ : this.$_prevButton$;
  };
  $ConveyorBeltCommon$$.prototype.$_showNextButton$ = function $$ConveyorBeltCommon$$$$$_showNextButton$$() {
    this.$_getNextButtonDisplayElem$().style.display = this.$_getCssDisplay$();
  };
  $ConveyorBeltCommon$$.prototype.$_showPrevButton$ = function $$ConveyorBeltCommon$$$$$_showPrevButton$$() {
    this.$_getPrevButtonDisplayElem$().style.display = this.$_getCssDisplay$();
  };
  $ConveyorBeltCommon$$.prototype.$_hideNextButton$ = function $$ConveyorBeltCommon$$$$$_hideNextButton$$() {
    this.$_getNextButtonDisplayElem$().style.display = "none";
  };
  $ConveyorBeltCommon$$.prototype.$_hidePrevButton$ = function $$ConveyorBeltCommon$$$$$_hidePrevButton$$() {
    this.$_getPrevButtonDisplayElem$().style.display = "none";
  };
  $ConveyorBeltCommon$$.prototype.$_isNextButtonShown$ = function $$ConveyorBeltCommon$$$$$_isNextButtonShown$$() {
    return "none" !== this.$_getNextButtonDisplayElem$().style.display;
  };
  $ConveyorBeltCommon$$.prototype.$_isPrevButtonShown$ = function $$ConveyorBeltCommon$$$$$_isPrevButtonShown$$() {
    return "none" !== this.$_getPrevButtonDisplayElem$().style.display;
  };
  $ConveyorBeltCommon$$.prototype.$_getButtonSize$ = function $$ConveyorBeltCommon$$$$$_getButtonSize$$() {
    return this.$_isHorizontal$() ? this.$_buttonWidth$ : this.$_buttonHeight$;
  };
  $ConveyorBeltCommon$$.prototype.$_updateButtonVisibility$ = function $$ConveyorBeltCommon$$$$$_updateButtonVisibility$$($scroll$$2$$) {
    var $buttonSize$$ = this.$_getButtonSize$(), $ovScroll$$ = this.$_getCurrScroll$(), $ovSize$$ = this.$_getCurrViewportSize$(), $bNeedsScroll$$ = this.$_needsScroll$();
    $scroll$$2$$ <= this.$_minScroll$ ? (this.$_isPrevButtonShown$() && ($ovSize$$ += $buttonSize$$, $ovScroll$$ -= $buttonSize$$), this.$_hidePrevButton$()) : $bNeedsScroll$$ && (this.$_isPrevButtonShown$() || ($ovSize$$ -= $buttonSize$$, $ovScroll$$ += $buttonSize$$), this.$_showPrevButton$());
    $scroll$$2$$ >= this.$_maxScroll$ ? (this.$_isNextButtonShown$() && ($ovSize$$ += $buttonSize$$), this.$_hideNextButton$()) : $bNeedsScroll$$ && (this.$_isNextButtonShown$() || ($ovSize$$ -= $buttonSize$$), this.$_showNextButton$());
    this.$_setOverflowScroll$($ovScroll$$);
    $bNeedsScroll$$ ? this.$_setOverflowMaxSize$($ovSize$$) : this.$_clearOverflowMaxSize$();
  };
  $ConveyorBeltCommon$$.prototype.$_setOverflowMaxSize$ = function $$ConveyorBeltCommon$$$$$_setOverflowMaxSize$$($s$$37_size$$27$$) {
    var $overflowContainerStyle$$1$$ = this.$_overflowContainer$.style;
    $s$$37_size$$27$$ += "px";
    this.$_isHorizontal$() ? $overflowContainerStyle$$1$$.maxWidth = $s$$37_size$$27$$ : $overflowContainerStyle$$1$$.maxHeight = $s$$37_size$$27$$;
  };
  $ConveyorBeltCommon$$.prototype.$_clearOverflowMaxSize$ = function $$ConveyorBeltCommon$$$$$_clearOverflowMaxSize$$() {
    var $overflowContainerStyle$$2$$ = this.$_overflowContainer$.style;
    this.$_isHorizontal$() ? $overflowContainerStyle$$2$$.maxWidth = "" : $overflowContainerStyle$$2$$.maxHeight = "";
  };
  $ConveyorBeltCommon$$.prototype.$_setOverflowScroll$ = function $$ConveyorBeltCommon$$$$$_setOverflowScroll$$($scroll$$3$$) {
    var $overflowContainer$$3$$ = this.$_overflowContainer$;
    this.$_isHorizontal$() ? $overflowContainer$$3$$.scrollLeft = this.$_convertScrollLogicalToBrowser$($scroll$$3$$) : $overflowContainer$$3$$.scrollTop = $scroll$$3$$;
  };
  $ConveyorBeltCommon$$.prototype.$_getCurrViewportSize$ = function $$ConveyorBeltCommon$$$$$_getCurrViewportSize$$() {
    var $overflowContainer$$4$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $overflowContainer$$4$$.offsetWidth : $overflowContainer$$4$$.offsetHeight;
  };
  $ConveyorBeltCommon$$.prototype.$_setCurrScroll$ = function $$ConveyorBeltCommon$$$$$_setCurrScroll$$($scroll$$4$$, $bImmediate$$2$$) {
    this.$_bScrolling$ || (this.$_bExternalScroll$ = !1, this.$_setCurrScrollHelper$($scroll$$4$$, $bImmediate$$2$$));
  };
  $ConveyorBeltCommon$$.prototype.$_setCurrScrollHelper$ = function $$ConveyorBeltCommon$$$$$_setCurrScrollHelper$$($scroll$$5$$, $bImmediate$$3$$) {
    if (!this.$_isEmpty$()) {
      this.$_bScrolling$ = !0;
      $scroll$$5$$ = this.$_constrainScroll$($scroll$$5$$);
      this.$_updateButtonVisibility$($scroll$$5$$);
      var $scrollFunc$$ = this.$_scrollFunc$;
      if ($bImmediate$$3$$ || !$scrollFunc$$ || $scroll$$5$$ === this.$_getCurrScroll$()) {
        this.$_onScrollAnimEnd$(this.$_bExternalScroll$ ? this.$_getCurrScroll$() : $scroll$$5$$);
      } else {
        var $self$$223$$ = this;
        $scrollFunc$$.call(this.$_callbackObj$, this.$_overflowContainer$, this.$_convertScrollLogicalToBrowser$($scroll$$5$$), Math.abs(this.$_getCurrScroll$() - $scroll$$5$$) / $ConveyorBeltCommon$$.$_SCROLL_SPEED$, function() {
          $self$$223$$.$_onScrollAnimEnd$($scroll$$5$$);
        });
      }
    }
  };
  $ConveyorBeltCommon$$.prototype.$_getCurrScroll$ = function $$ConveyorBeltCommon$$$$$_getCurrScroll$$() {
    var $overflowContainer$$5$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? this.$_convertScrollBrowserToLogical$($overflowContainer$$5$$.scrollLeft) : $overflowContainer$$5$$.scrollTop;
  };
  $ConveyorBeltCommon$$.prototype.$_needsScroll$ = function $$ConveyorBeltCommon$$$$$_needsScroll$$() {
    var $contentContainer$$4$$ = this.$_contentContainer$, $overflowContainer$$6$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $contentContainer$$4$$.offsetWidth > $overflowContainer$$6$$.offsetWidth : $contentContainer$$4$$.offsetHeight > $overflowContainer$$6$$.offsetHeight;
  };
  $ConveyorBeltCommon$$.prototype.$_constrainScroll$ = function $$ConveyorBeltCommon$$$$$_constrainScroll$$($scroll$$6$$) {
    !this.$_needsScroll$() || $scroll$$6$$ < this.$_minScroll$ ? $scroll$$6$$ = this.$_minScroll$ : $scroll$$6$$ > this.$_maxScroll$ && ($scroll$$6$$ = this.$_maxScroll$);
    return $scroll$$6$$;
  };
  $ConveyorBeltCommon$$.prototype.$_handleMouseWheel$ = function $$ConveyorBeltCommon$$$$$_handleMouseWheel$$($event$$643$$) {
    var $bConsumeEvent$$ = this.$_bScrolling$;
    if (this.$_needsScroll$() && !this.$_bScrolling$) {
      var $wheelDelta$$1$$ = $ConveyorBeltCommon$$.$_getWheelDelta$($event$$643$$);
      0 > $wheelDelta$$1$$ && this.$_isNextButtonShown$() ? ($bConsumeEvent$$ = !0, this.$_scrollNext$()) : 0 < $wheelDelta$$1$$ && this.$_isPrevButtonShown$() && ($bConsumeEvent$$ = !0, this.$_scrollPrev$());
    }
    $bConsumeEvent$$ && ($event$$643$$.preventDefault(), $event$$643$$.stopPropagation());
  };
  $ConveyorBeltCommon$$.prototype.$_handleTouchStart$ = function $$ConveyorBeltCommon$$$$$_handleTouchStart$$($event$$644_eventTouches$$2_firstTouch$$5$$) {
    $event$$644_eventTouches$$2_firstTouch$$5$$ = $event$$644_eventTouches$$2_firstTouch$$5$$.touches;
    this.$_needsScroll$() && !this.$_bScrolling$ && 1 === $event$$644_eventTouches$$2_firstTouch$$5$$.length && (this.$_bTouch$ = !0, $event$$644_eventTouches$$2_firstTouch$$5$$ = $event$$644_eventTouches$$2_firstTouch$$5$$[0], this.$_touchStartCoord$ = this.$_isHorizontal$() ? $event$$644_eventTouches$$2_firstTouch$$5$$.pageX : $event$$644_eventTouches$$2_firstTouch$$5$$.pageY, this.$_touchStartScroll$ = this.$_getCurrScroll$(), this.$_touchStartNextScroll$ = this.$_calcNextScroll$(), this.$_touchStartPrevScroll$ = 
    this.$_calcPrevScroll$(), this.$_touchStartNextButtonShown$ = this.$_isNextButtonShown$(), this.$_touchStartPrevButtonShown$ = this.$_isPrevButtonShown$());
  };
  $ConveyorBeltCommon$$.prototype.$_handleTouchMove$ = function $$ConveyorBeltCommon$$$$$_handleTouchMove$$($event$$645$$) {
    var $bHoriz$$7$$ = this.$_isHorizontal$(), $diff$$1_firstTouch$$6$$ = $event$$645$$.touches[0], $diff$$1_firstTouch$$6$$ = ($bHoriz$$7$$ ? $diff$$1_firstTouch$$6$$.pageX : $diff$$1_firstTouch$$6$$.pageY) - this.$_touchStartCoord$, $bNext$$2$$ = $bHoriz$$7$$ && this.$_bRtl$ ? 0 < $diff$$1_firstTouch$$6$$ : 0 > $diff$$1_firstTouch$$6$$, $canScrollInSwipeDirection$$1_overflowContainer$$7$$ = $bNext$$2$$ && this.$_touchStartNextButtonShown$ || !$bNext$$2$$ && this.$_touchStartPrevButtonShown$;
    if (this.$_bTouch$ && $canScrollInSwipeDirection$$1_overflowContainer$$7$$) {
      $canScrollInSwipeDirection$$1_overflowContainer$$7$$ = this.$_overflowContainer$;
      if (Math.abs($diff$$1_firstTouch$$6$$) < $ConveyorBeltCommon$$.$_SWIPE_THRESHOLD$ * ($bHoriz$$7$$ ? $canScrollInSwipeDirection$$1_overflowContainer$$7$$.offsetWidth : $canScrollInSwipeDirection$$1_overflowContainer$$7$$.offsetHeight)) {
        if (this.$_setCurrScroll$(this.$_touchStartScroll$ - $diff$$1_firstTouch$$6$$, !0), this.$_touchStartNextButtonShown$ && !this.$_isNextButtonShown$() || this.$_touchStartPrevButtonShown$ && !this.$_isPrevButtonShown$()) {
          this.$_bTouch$ = !1;
        }
      } else {
        this.$_setCurrScroll$($bNext$$2$$ ? this.$_touchStartNextScroll$ : this.$_touchStartPrevScroll$, !1), this.$_bTouch$ = !1;
      }
      this.$_scrolledForThisTouch$ = !0;
    }
    this.$_scrolledForThisTouch$ && ($event$$645$$.preventDefault(), $event$$645$$.stopPropagation());
  };
  $ConveyorBeltCommon$$.prototype.$_handleTouchEnd$ = function $$ConveyorBeltCommon$$$$$_handleTouchEnd$$() {
    this.$_bTouch$ && this.$_setCurrScroll$(this.$_touchStartScroll$, !1);
    this.$_scrolledForThisTouch$ = this.$_bTouch$ = !1;
  };
  $ConveyorBeltCommon$$.prototype.$_handleScroll$ = function $$ConveyorBeltCommon$$$$$_handleScroll$$() {
    this.$_bExternalScroll$ && !this.$_bScrolling$ && this.$_setCurrScrollHelper$(this.$_getCurrScroll$(), !0);
  };
  $ConveyorBeltCommon$$.prototype.$_onScrollAnimEnd$ = function $$ConveyorBeltCommon$$$$$_onScrollAnimEnd$$($lastVisIndex_scroll$$7$$) {
    this.$_setOverflowScroll$($lastVisIndex_scroll$$7$$);
    this.$_setExternalScrollTimeout$();
    this.$_bScrolling$ = !1;
    if (this.$_firstVisibleItemChangedFunc$) {
      this.$_firstVisibleItemIndex$ = this.$_calcFirstVisibleItemIndex$();
      $lastVisIndex_scroll$$7$$ = this.$_calcLastVisibleItemIndex$();
      var $sizes$$2$$ = this.$_getSizes$(), $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$];
      this.$_firstVisibleItemIndex$ !== $lastVisIndex_scroll$$7$$ && this.$_getCurrScroll$() > $sizeObj$$2$$.start && this.$_firstVisibleItemIndex$ < $sizes$$2$$.length - 2 && (this.$_firstVisibleItemIndex$++, $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$]);
      this.$_firstVisibleItemId$ = $sizeObj$$2$$.id;
      this.$_firstVisibleItemChangedFunc$.call(this.$_callbackObj$, this.$_firstVisibleItemId$);
    }
  };
  $ConveyorBeltCommon$$.prototype.$_setExternalScrollTimeout$ = function $$ConveyorBeltCommon$$$$$_setExternalScrollTimeout$$() {
    var $self$$224$$ = this;
    window.setTimeout(function() {
      $self$$224$$ && ($self$$224$$.$_bExternalScroll$ = !0);
    }, 0);
  };
  $ConveyorBeltCommon$$.prototype.$_scrollNext$ = function $$ConveyorBeltCommon$$$$$_scrollNext$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcNextScroll$(), !1);
  };
  $ConveyorBeltCommon$$.prototype.$_scrollPrev$ = function $$ConveyorBeltCommon$$$$$_scrollPrev$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcPrevScroll$(), !1);
  };
  $ConveyorBeltCommon$$.prototype.$_calcNextScroll$ = function $$ConveyorBeltCommon$$$$$_calcNextScroll$$() {
    var $nextIndex$$1$$ = this.$_calcNextVisibleItemIndex$(), $scroll$$8$$ = 0;
    return $scroll$$8$$ = $nextIndex$$1$$ === this.$_calcFirstVisibleItemIndex$() ? this.$_getCurrScroll$() + this.$_getCurrViewportSize$() : this.$_calcStartScroll$($nextIndex$$1$$);
  };
  $ConveyorBeltCommon$$.prototype.$_calcPrevScroll$ = function $$ConveyorBeltCommon$$$$$_calcPrevScroll$$() {
    var $prevIndex$$ = this.$_calcPrevVisibleItemIndex$(), $scroll$$9$$ = 0, $scroll$$9$$ = $prevIndex$$ === this.$_calcLastVisibleItemIndex$() ? this.$_getCurrScroll$() - this.$_getCurrViewportSize$() : this.$_calcEndScroll$($prevIndex$$);
    this.$_isNextButtonShown$() || ($scroll$$9$$ += this.$_getButtonSize$());
    $scroll$$9$$ < this.$_getButtonSize$() && ($scroll$$9$$ = this.$_minScroll$);
    return $scroll$$9$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcStartScroll$ = function $$ConveyorBeltCommon$$$$$_calcStartScroll$$($index$$296$$) {
    return this.$_getSizes$()[$index$$296$$].start;
  };
  $ConveyorBeltCommon$$.prototype.$_calcEndScroll$ = function $$ConveyorBeltCommon$$$$$_calcEndScroll$$($index$$297$$) {
    return this.$_getSizes$()[$index$$297$$].end - this.$_getCurrViewportSize$() + 1;
  };
  $ConveyorBeltCommon$$.prototype.$_calcFirstVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcFirstVisibleItemIndex$$() {
    var $i$$481$$ = this.$_calcItemIndex$(this.$_getCurrScroll$());
    return 0 > $i$$481$$ ? 0 : $i$$481$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcLastVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcLastVisibleItemIndex$$() {
    var $i$$482$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$() - 1), $sizes$$5$$ = this.$_getSizes$();
    return 0 > $i$$482$$ ? $sizes$$5$$.length - 1 : $i$$482$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcPrevVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcPrevVisibleItemIndex$$() {
    var $i$$483$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() - 1);
    return 0 > $i$$483$$ ? 0 : $i$$483$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcNextVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcNextVisibleItemIndex$$() {
    var $i$$484$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$()), $sizes$$6$$ = this.$_getSizes$();
    return 0 > $i$$484$$ ? $sizes$$6$$.length - 1 : $i$$484$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcItemIndex$$($scroll$$10$$) {
    for (var $sizes$$7$$ = this.$_getSizes$(), $i$$485$$ = 0;$i$$485$$ < $sizes$$7$$.length;$i$$485$$++) {
      if ($scroll$$10$$ <= $sizes$$7$$[$i$$485$$].end) {
        return $i$$485$$;
      }
    }
    return-1;
  };
  $ConveyorBeltCommon$$.prototype.$_convertScrollLogicalToBrowser$ = function $$ConveyorBeltCommon$$$$$_convertScrollLogicalToBrowser$$($scroll$$11$$) {
    var $newScroll$$ = $scroll$$11$$;
    if (this.$_bRtl$ && this.$_isHorizontal$()) {
      if (this.$_bAgentGecko$) {
        $newScroll$$ = -$scroll$$11$$;
      } else {
        if (this.$_bAgentWebkit$ || this.$_bAgentOpera$) {
          $newScroll$$ = this.$_contentContainer$.offsetWidth - this.$_overflowContainer$.offsetWidth - $scroll$$11$$;
        }
      }
    }
    return $newScroll$$;
  };
  $ConveyorBeltCommon$$.prototype.$_convertScrollBrowserToLogical$ = function $$ConveyorBeltCommon$$$$$_convertScrollBrowserToLogical$$($scroll$$12$$) {
    return this.$_convertScrollLogicalToBrowser$($scroll$$12$$);
  };
  $ConveyorBeltCommon$$.$_SCROLL_SPEED$ = 1.1;
  $ConveyorBeltCommon$$.$_SWIPE_THRESHOLD$ = .33;
  (function() {
    $oj$$78$$.$__registerWidget$("oj.ojConveyorBelt", $$$$71$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{orientation:"horizontal", contentParent:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-conveyorbelt oj-component");
      this.options.disabled && $oj$$78$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$2$$);
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$1$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$1$$ && this.$_destroyCBCommon$();
      this.$_setup$($bRecreate$$1$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_setup$:function($children$$31_isInit$$2$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        var $elem$$165_oldIsInit$$2$$ = this.element, $options$$403$$ = this.options;
        if ($children$$31_isInit$$2$$ && !this.$_cbCommon$) {
          var $orientation$$1$$ = $options$$403$$.orientation, $callbackInfo$$3_prevStyleClass$$ = null, $nextStyleClass$$ = null, $prevIcon$$ = null, $nextIcon$$ = null, $animateScrollFunc_contentParentElem$$ = null;
          "vertical" !== $orientation$$1$$ ? ($callbackInfo$$3_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-start"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-end"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollLeft$) : ($callbackInfo$$3_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default", 
          $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-top"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-bottom"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollTop$);
          var $buttonInfo$$1$$ = {};
          $buttonInfo$$1$$.$prevButtonStyleClass$ = $callbackInfo$$3_prevStyleClass$$;
          $buttonInfo$$1$$.$nextButtonStyleClass$ = $nextStyleClass$$;
          $buttonInfo$$1$$.$prevButtonIcon$ = $prevIcon$$;
          $buttonInfo$$1$$.$nextButtonIcon$ = $nextIcon$$;
          $callbackInfo$$3_prevStyleClass$$ = {};
          $callbackInfo$$3_prevStyleClass$$.$addResizeListener$ = $oj$$78$$.$DomUtils$.$addResizeListener$;
          $callbackInfo$$3_prevStyleClass$$.$removeResizeListener$ = $oj$$78$$.$DomUtils$.$removeResizeListener$;
          "enabled" !== $oj$$78$$.$Config$.$getAutomationMode$() && ($callbackInfo$$3_prevStyleClass$$.$scrollFunc$ = $animateScrollFunc_contentParentElem$$);
          $animateScrollFunc_contentParentElem$$ = null;
          $options$$403$$.contentParent && ($animateScrollFunc_contentParentElem$$ = $$$$71$$($options$$403$$.contentParent)[0]);
          this.$_cbCommon$ = new $ConveyorBeltCommon$$($elem$$165_oldIsInit$$2$$[0], $orientation$$1$$, $animateScrollFunc_contentParentElem$$, this.$_bRTL$, $buttonInfo$$1$$, $callbackInfo$$3_prevStyleClass$$);
        }
        this.$_cbCommon$.$setup$($children$$31_isInit$$2$$);
        $children$$31_isInit$$2$$ && ($children$$31_isInit$$2$$ = $elem$$165_oldIsInit$$2$$.find(".oj-conveyorbelt-overflow-indicator"), this.$_setupButtonMouseStyles$($children$$31_isInit$$2$$));
      } else {
        $elem$$165_oldIsInit$$2$$ = !1, this.$_needsSetup$ && ($elem$$165_oldIsInit$$2$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$children$$31_isInit$$2$$ || $elem$$165_oldIsInit$$2$$];
      }
    }, _destroy:function() {
      this.$_destroyCBCommon$();
      this.element.removeClass("oj-conveyorbelt oj-component");
      this._super();
    }, _setOption:function($key$$193$$, $value$$317$$, $flags$$55$$) {
      var $bRecreate$$2$$ = !1;
      switch($key$$193$$) {
        case "containerParent":
        ;
        case "orientation":
          $bRecreate$$2$$ = !0;
          break;
        case "disabled":
          $oj$$78$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$2$$);
      }
      $bRecreate$$2$$ && this.$_destroyCBCommon$();
      this._super($key$$193$$, $value$$317$$, $flags$$55$$);
      $bRecreate$$2$$ && this.$_setup$(!0);
    }, $_destroyCBCommon$:function() {
      var $cbCommon$$1$$ = this.$_cbCommon$;
      $cbCommon$$1$$ && (this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace), $cbCommon$$1$$.destroy());
      this.$_cbCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$13$$ = document.createElement("div"), $elem$$168_style$$32$$ = $div$$13$$.style;
      $elem$$168_style$$32$$.width = "10px";
      $elem$$168_style$$32$$.height = "10px";
      $elem$$168_style$$32$$ = this.element[0];
      $elem$$168_style$$32$$.appendChild($div$$13$$);
      var $bCanCalcSizes$$2$$ = !1;
      try {
        $bCanCalcSizes$$2$$ = 0 < $div$$13$$.offsetWidth && 0 < $div$$13$$.offsetHeight;
      } catch ($e$$143$$) {
      }
      $elem$$168_style$$32$$.removeChild($div$$13$$);
      return $bCanCalcSizes$$2$$;
    }, $_setupButtonMouseStyles$:function($element$$164$$) {
      $element$$164$$.on("mousedown" + this.eventNamespace, function($event$$648$$) {
        $$$$71$$($event$$648$$.currentTarget).addClass("oj-active");
      }).on("mouseup" + this.eventNamespace, function($event$$649$$) {
        $$$$71$$($event$$649$$.currentTarget).removeClass("oj-active");
      }).on("mouseenter" + this.eventNamespace, function($currTarget$$6_event$$650$$) {
        $currTarget$$6_event$$650$$ = $currTarget$$6_event$$650$$.currentTarget;
        $$$$71$$($currTarget$$6_event$$650$$).addClass("oj-hover");
        $$$$71$$($currTarget$$6_event$$650$$).removeClass("oj-default");
      }).on("mouseleave" + this.eventNamespace, function($currTarget$$7_event$$651$$) {
        $currTarget$$7_event$$651$$ = $currTarget$$7_event$$651$$.currentTarget;
        $$$$71$$($currTarget$$7_event$$651$$).removeClass("oj-hover");
        $$$$71$$($currTarget$$7_event$$651$$).removeClass("oj-active");
        $$$$71$$($currTarget$$7_event$$651$$).addClass("oj-default");
      });
    }, $_createIcon$:function($iconStyleClass$$) {
      var $span$$3$$ = document.createElement("span");
      $span$$3$$.setAttribute("class", "oj-component-icon " + $iconStyleClass$$);
      return $span$$3$$;
    }, $_animateScrollLeft$:function($elem$$169$$, $value$$318$$, $duration$$12$$, $onEndFunc$$1$$) {
      var $props$$31$$ = {};
      $props$$31$$.scrollLeft = $value$$318$$;
      $$$$71$$($elem$$169$$).animate($props$$31$$, $duration$$12$$, "swing", $onEndFunc$$1$$);
    }, $_animateScrollTop$:function($elem$$170$$, $value$$319$$, $duration$$13$$, $onEndFunc$$2$$) {
      var $props$$32$$ = {};
      $props$$32$$.scrollTop = $value$$319$$;
      $$$$71$$($elem$$170$$).animate($props$$32$$, $duration$$13$$, "swing", $onEndFunc$$2$$);
    }, getNodeBySubId:function($locator$$66_subId$$69$$) {
      if (null == $locator$$66_subId$$69$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$66_subId$$69$$ = $locator$$66_subId$$69$$.subId;
      return "oj-conveyorbelt-start-overflow-indicator" === $locator$$66_subId$$69$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0] : "oj-conveyorbelt-end-overflow-indicator" === $locator$$66_subId$$69$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0] : "oj-conveyorbelt-top-overflow-indicator" === $locator$$66_subId$$69$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0] : "oj-conveyorbelt-bottom-overflow-indicator" === $locator$$66_subId$$69$$ ? 
      this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0] : null;
    }, getSubIdByNode:function($currentNode$$5_node$$181$$) {
      for (var $startIndicator$$ = this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}), $endIndicator$$ = this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}), $topIndicator$$ = this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}), $bottomIndicator$$ = this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}), $elem$$171$$ = this.element[0];$currentNode$$5_node$$181$$ && $currentNode$$5_node$$181$$ != $elem$$171$$;) {
        if ($currentNode$$5_node$$181$$ === $startIndicator$$) {
          return{subId:"oj-conveyorbelt-start-overflow-indicator"};
        }
        if ($currentNode$$5_node$$181$$ === $endIndicator$$) {
          return{subId:"oj-conveyorbelt-end-overflow-indicator"};
        }
        if ($currentNode$$5_node$$181$$ === $topIndicator$$) {
          return{subId:"oj-conveyorbelt-top-overflow-indicator"};
        }
        if ($currentNode$$5_node$$181$$ === $bottomIndicator$$) {
          return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};
        }
        $currentNode$$5_node$$181$$ = $currentNode$$5_node$$181$$.parentElement;
      }
      return null;
    }});
    var $_WARNING_DISABLED_OPTION$$2$$ = "JET ConveyorBelt: 'disabled' option not supported";
  })();
});
