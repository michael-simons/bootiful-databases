/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$77$$, $$$$70$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-center oj-bottom", "center-bottom":"oj-center oj-bottom"};
    $oj$$77$$.$__registerWidget$("oj.ojPopup", $$$$70$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"auto", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", modality:"modeless", role:"tooltip", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$3$$ = $$$$70$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$3$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$3$$.addClass("oj-component");
      var $content$$39$$ = $$$$70$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$39$$.attr("role", "presentation");
      $content$$39$$.appendTo($rootElement$$3$$);
      this.element.after($rootElement$$3$$);
      this.element.appendTo($content$$39$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$70$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this.isOpen() && this.$_closeImplicitly$();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_popupServiceEvents$;
      $oj$$77$$.$DomUtils$.unwrap(this.element, this.$_rootElement$);
      this.element.hide();
      var $closeDelayTimer$$1$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$1$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$1$$));
      this.$_destroyVoiceOverAssist$();
      this._super();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$14$$, $position$$45$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$14$$);
      var $rootElement$$4$$ = this.$_rootElement$;
      $launcher$$14$$ = this.$_launcher$;
      $oj$$77$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$4$$.attr("id")) && $rootElement$$4$$.attr("id", this.$_getSubId$("wrapper"));
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$45$$);
        var $options$$393$$ = this.options;
        this.$_setAutoDismiss$($options$$393$$.autoDismiss);
        this.$_addDescribedBy$();
        $rootElement$$4$$.attr("role", $options$$393$$.role);
        $position$$45$$ = $options$$393$$.position;
        var $isRtl$$5_layerClass$$3$$ = "rtl" === this.$_GetReadingDirection$();
        $position$$45$$ = $oj$$77$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$45$$, $isRtl$$5_layerClass$$3$$);
        var $isRtl$$5_layerClass$$3$$ = "oj-popup-layer", $psOptions$$5_tailDecoration$$ = $options$$393$$.tail;
        "none" !== $psOptions$$5_tailDecoration$$ && ($isRtl$$5_layerClass$$3$$ += " " + ["oj-popup-tail", $psOptions$$5_tailDecoration$$].join("-"));
        $psOptions$$5_tailDecoration$$ = {};
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$4$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$14$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$POSITION$] = $position$$45$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = $isRtl$$5_layerClass$$3$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$MODALITY$] = $options$$393$$.modality;
        $oj$$77$$.$PopupService$.$getInstance$().open($psOptions$$5_tailDecoration$$);
        this._trigger("open");
        this.$_intialFocus$();
        this.$_initVoiceOverAssist$();
        this._on($rootElement$$4$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
        $launcher$$14$$ && 0 < $launcher$$14$$.length && this._on($launcher$$14$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
      }
    }, close:function() {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose") || this.$_ignoreBeforeCloseResultant$)) {
        this.$_restoreFocus$();
        var $launcher$$15_psOptions$$6$$ = this.$_launcher$, $position$$46_rootElement$$5$$ = this.$_rootElement$;
        this._off($position$$46_rootElement$$5$$, "keydown keyup");
        $launcher$$15_psOptions$$6$$ && 0 < $launcher$$15_psOptions$$6$$.length && this._off($launcher$$15_psOptions$$6$$, "keydown keyup");
        this.$_destroyVoiceOverAssist$();
        $launcher$$15_psOptions$$6$$ = {};
        $launcher$$15_psOptions$$6$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $position$$46_rootElement$$5$$;
        $oj$$77$$.$PopupService$.$getInstance$().close($launcher$$15_psOptions$$6$$);
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        delete this.$_launcher$;
        $position$$46_rootElement$$5$$ = this.options.position;
        $position$$46_rootElement$$5$$._ofo && (delete $position$$46_rootElement$$5$$._ofo, delete $position$$46_rootElement$$5$$.of);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_reposition$();
      var $rootElement$$6$$ = this.$_rootElement$;
      $oj$$77$$.$PopupService$.$getInstance$().$triggerOnDescendents$($rootElement$$6$$, $oj$$77$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($key$$192$$, $value$$316$$) {
      var $options$$394_psOptions$$7$$ = this.options;
      switch($key$$192$$) {
        case "tail":
          $value$$316$$ !== $options$$394_psOptions$$7$$.tail && this.$_setTail$($value$$316$$);
          break;
        case "chrome":
          $value$$316$$ !== $options$$394_psOptions$$7$$.chrome && this.$_setChrome$($value$$316$$);
          break;
        case "position":
          this.$_setPosition$($value$$316$$);
          this.refresh();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$316$$ !== $options$$394_psOptions$$7$$.autoDismiss && this.$_setAutoDismiss$($value$$316$$);
          break;
        case "modality":
          this.isOpen() && ($options$$394_psOptions$$7$$ = {}, $options$$394_psOptions$$7$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $options$$394_psOptions$$7$$[$oj$$77$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$316$$, $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($options$$394_psOptions$$7$$));
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_reposition$();
    }, $_createTail$:function($tail$$1_tailDecoration$$1_tailStyle$$) {
      $tail$$1_tailDecoration$$1_tailStyle$$ = $tail$$1_tailDecoration$$1_tailStyle$$ ? $tail$$1_tailDecoration$$1_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration$$1_tailStyle$$) {
        $tail$$1_tailDecoration$$1_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration$$1_tailStyle$$].join("-");
        var $options$$395_tailDom$$ = $$$$70$$("\x3cdiv\x3e").hide();
        $options$$395_tailDom$$.addClass("oj-popup-tail").addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        $options$$395_tailDom$$.attr("role", "presentation");
        this.$_tailId$ = $options$$395_tailDom$$.attr("id", this.$_getSubId$("tail")).attr("id");
        var $rootElement$$8$$ = this.$_rootElement$;
        $options$$395_tailDom$$.appendTo($rootElement$$8$$);
        $rootElement$$8$$.addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        this.isOpen() && ($options$$395_tailDom$$ = {}, $options$$395_tailDom$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$8$$, $options$$395_tailDom$$[$oj$$77$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer " + $tail$$1_tailDecoration$$1_tailStyle$$, $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($options$$395_tailDom$$));
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$70$$(document.getElementById($tailId$$)) : null;
    }, $_destroyTail$:function() {
      var $rootElement$$9_tail$$2$$ = this.$_getTail$();
      $rootElement$$9_tail$$2$$ && $rootElement$$9_tail$$2$$.remove();
      delete this.$_tailId$;
      $rootElement$$9_tail$$2$$ = this.$_rootElement$;
      $rootElement$$9_tail$$2$$.removeClass(["oj-popup-tail", this.options.tail].join("-"));
      if (this.isOpen()) {
        var $options$$396$$ = {};
        $options$$396$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$9_tail$$2$$;
        $options$$396$$[$oj$$77$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer";
        $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($options$$396$$);
      }
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$10$$ = this.$_rootElement$;
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$10$$.hasClass("oj-popup-no-chrome") ? $rootElement$$10$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$10$$.hasClass("oj-popup-no-chrome") || $rootElement$$10$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$16$$) {
      $launcher$$16$$ ? "string" === $$$$70$$.type($launcher$$16$$) ? $launcher$$16$$ = $$$$70$$($launcher$$16$$) : 1 === $launcher$$16$$.nodeType && ($launcher$$16$$ = $$$$70$$($launcher$$16$$)) : $launcher$$16$$ = $$$$70$$(document.activeElement);
      if ($launcher$$16$$ instanceof jQuery && 1 < $launcher$$16$$.length) {
        for (var $rootElement$$11$$ = this.$_rootElement$, $i$$476$$ = 0;$i$$476$$ < $launcher$$16$$.length;$i$$476$$++) {
          var $target$$100$$ = $launcher$$16$$[0];
          if (!$oj$$77$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $target$$100$$)) {
            $launcher$$16$$ = $$$$70$$($target$$100$$);
            break;
          }
        }
      } else {
        if (!($launcher$$16$$ instanceof jQuery) || $launcher$$16$$ instanceof jQuery && 0 === $launcher$$16$$.length) {
          $launcher$$16$$ = $$$$70$$(document.activeElement);
        }
      }
      this.$_launcher$ = $launcher$$16$$;
    }, $_setPosition$:function($position$$47$$) {
      var $launcher$$17_options$$397_usingCallback$$ = this.options;
      $position$$47$$ && ($launcher$$17_options$$397_usingCallback$$.position = $$$$70$$.extend($launcher$$17_options$$397_usingCallback$$[$position$$47$$], $position$$47$$));
      $position$$47$$ = $launcher$$17_options$$397_usingCallback$$.position;
      $launcher$$17_options$$397_usingCallback$$ = this.$_usingCallback$;
      $$$$70$$.isFunction($position$$47$$.using) && $position$$47$$.using !== $launcher$$17_options$$397_usingCallback$$ && ($position$$47$$.origUsing = $position$$47$$.using);
      $position$$47$$.using = $launcher$$17_options$$397_usingCallback$$;
      $launcher$$17_options$$397_usingCallback$$ = this.$_launcher$;
      $position$$47$$.of || ($position$$47$$.of = $launcher$$17_options$$397_usingCallback$$, $position$$47$$._ofo = !0);
    }, $_usingHandler$:function($pos$$18$$, $props$$30$$) {
      var $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $props$$30$$.element.element;
      if ($pos$$18$$.top !== $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css("top") || $pos$$18$$.left !== $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css("left")) {
        var $options$$398_tail$$3$$ = this.$_getTail$();
        if ($options$$398_tail$$3$$) {
          $options$$398_tail$$3$$.hide();
          for (var $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$++) {
            $options$$398_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]);
          }
          $options$$398_tail$$3$$.removeAttr("style");
          if ($props$$30$$.target && 0 === $props$$30$$.target.height && 0 === $props$$30$$.target.width && ($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = "rtl" === this.$_GetReadingDirection$(), $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $oj$$77$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$).my, !$oj$$77$$.$StringUtils$.$isEmptyOrUndefined$($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$))) {
            var $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.split(" "), $suggestedHrule$$ = $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[0], $suggestedVrule$$ = "middle";
            1 < $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.length && ($suggestedVrule$$ = "center" === $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1] ? "middle" : $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1]);
            $props$$30$$.horizontal = $suggestedHrule$$;
            $props$$30$$.vertical = $suggestedVrule$$;
          }
          $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$30$$.horizontal, $props$$30$$.vertical].join("-")];
          $options$$398_tail$$3$$.addClass($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.addClass($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $options$$398_tail$$3$$.show();
          "left" === $props$$30$$.horizontal ? ($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$398_tail$$3$$.outerWidth(), $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$398_tail$$3$$.css("left")), $pos$$18$$.left += $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "right" === $props$$30$$.horizontal && 
          ($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$398_tail$$3$$.outerWidth(), $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$398_tail$$3$$.css("right")), $pos$$18$$.left -= $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          "top" === $props$$30$$.vertical ? ($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$398_tail$$3$$.outerHeight(), $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$398_tail$$3$$.css($props$$30$$.vertical)), $pos$$18$$.top += $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "bottom" === 
          $props$$30$$.vertical && ($i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$398_tail$$3$$.outerHeight(), $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$398_tail$$3$$.css($props$$30$$.vertical)), $pos$$18$$.top -= $i$$477_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$18$$);
          "center" === $props$$30$$.horizontal ? ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $options$$398_tail$$3$$.outerWidth() / 2) / $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 100), $options$$398_tail$$3$$.css({left:$leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ + 
          "%"})) : "middle" === $props$$30$$.vertical && ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $options$$398_tail$$3$$.outerHeight() / 2) / $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 
          100), $options$$398_tail$$3$$.css({top:$leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ + "%"}));
        } else {
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$18$$);
        }
        $options$$398_tail$$3$$ = this.options;
        ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $options$$398_tail$$3$$.position.origUsing) && $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$($pos$$18$$, $props$$30$$);
        "focusLoss" === $options$$398_tail$$3$$.autoDismiss && $oj$$77$$.$PositionUtils$.$isAligningPositionClipped$($props$$30$$) && (this.$_ignoreRestoreFocus$ = !0, this.$_closeDelayTimer$ = this._delay($$$$70$$.proxy(this.$_closeImplicitly$, this), 1));
      }
    }, $_reposition$:function() {
      var $rootElement$$13$$ = this.$_rootElement$, $position$$49$$ = this.options.position, $isRtl$$7$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$13$$.position($oj$$77$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$49$$, $isRtl$$7$$));
    }, $_intialFocus$:function($nodes$$12_waiAriaAssisted$$) {
      var $initialFocus_rootElement$$14$$ = this.$_deriveInitialFocus$();
      $nodes$$12_waiAriaAssisted$$ && "none" === $initialFocus_rootElement$$14$$ && ($initialFocus_rootElement$$14$$ = "popup");
      "firstFocusable" === $initialFocus_rootElement$$14$$ && ($nodes$$12_waiAriaAssisted$$ = this.element.find(":focusable"), 0 < $nodes$$12_waiAriaAssisted$$.length ? ($$$$70$$($nodes$$12_waiAriaAssisted$$[0]).focus(), this._trigger("focus")) : $initialFocus_rootElement$$14$$ = "popup");
      "popup" === $initialFocus_rootElement$$14$$ && ($initialFocus_rootElement$$14$$ = this.$_rootElement$, $initialFocus_rootElement$$14$$.attr("tabindex", "-1"), $initialFocus_rootElement$$14$$.focus(), this._trigger("focus"));
    }, $_deriveInitialFocus$:function() {
      var $options$$399$$ = this.options, $initialFocus$$1$$ = $options$$399$$.initialFocus;
      "auto" === $initialFocus$$1$$ && ($initialFocus$$1$$ = "modal" === $options$$399$$.modality ? $oj$$77$$.$DomUtils$.$isTouchSupported$() ? "popup" : "firstFocusable" : "none");
      return $initialFocus$$1$$;
    }, $_isFocusInPopup$:function($activeElement$$2$$, $includeChildren$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      if (!$activeElement$$2$$) {
        return!1;
      }
      var $rootElement$$15$$ = this.$_rootElement$;
      $includeChildren$$ && ($rootElement$$15$$ = $rootElement$$15$$.parent());
      return $oj$$77$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$15$$[0], $activeElement$$2$$);
    }, $_isFocusInLauncher$:function($activeElement$$3$$) {
      $activeElement$$3$$ || ($activeElement$$3$$ = document.activeElement);
      return $oj$$77$$.$DomUtils$.$isAncestorOrSelf$(this.$_launcher$[0], $activeElement$$3$$);
    }, $_restoreFocus$:function() {
      this.$_ignoreRestoreFocus$ ? delete this.$_ignoreRestoreFocus$ : this.$_isFocusInPopup$(null, !0) && this.$_launcher$.focus();
    }, $_keyHandler$:function($event$$633_launcher$$20$$) {
      if (!$event$$633_launcher$$20$$.isDefaultPrevented()) {
        var $eventType$$55_firstNode$$ = $event$$633_launcher$$20$$.type, $options$$400_target$$101$$ = $event$$633_launcher$$20$$.target;
        if ("keyup" === $eventType$$55_firstNode$$ && $event$$633_launcher$$20$$.keyCode === $$$$70$$.ui.keyCode.ESCAPE && (this.$_isFocusInPopup$($options$$400_target$$101$$) || this.$_isFocusInLauncher$($options$$400_target$$101$$))) {
          $event$$633_launcher$$20$$.preventDefault(), this.close();
        } else {
          if ("keydown" === $eventType$$55_firstNode$$ && 117 === $event$$633_launcher$$20$$.keyCode) {
            this.$_isFocusInPopup$($options$$400_target$$101$$) ? ($options$$400_target$$101$$ = this.options, "modeless" === $options$$400_target$$101$$.modality ? ($event$$633_launcher$$20$$.preventDefault(), $event$$633_launcher$$20$$ = this.$_launcher$, $event$$633_launcher$$20$$.focus()) : this.close()) : this.$_isFocusInLauncher$($options$$400_target$$101$$) && ($event$$633_launcher$$20$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if ("keydown" === $eventType$$55_firstNode$$ && $event$$633_launcher$$20$$.keyCode === $$$$70$$.ui.keyCode.TAB && this.$_isFocusInPopup$($options$$400_target$$101$$)) {
              var $lastNode$$1_nodes$$13$$ = this.element.find(":tabbable");
              if (0 < $lastNode$$1_nodes$$13$$.length) {
                var $eventType$$55_firstNode$$ = $lastNode$$1_nodes$$13$$[0], $lastNode$$1_nodes$$13$$ = $lastNode$$1_nodes$$13$$[$lastNode$$1_nodes$$13$$.length - 1], $rootElement$$16$$ = this.$_rootElement$;
                $eventType$$55_firstNode$$ !== $options$$400_target$$101$$ && $rootElement$$16$$[0] !== $options$$400_target$$101$$ || !$event$$633_launcher$$20$$.shiftKey ? $lastNode$$1_nodes$$13$$ !== $options$$400_target$$101$$ || $event$$633_launcher$$20$$.shiftKey || ($event$$633_launcher$$20$$.preventDefault(), $lastNode$$1_nodes$$13$$ === $eventType$$55_firstNode$$ ? ($rootElement$$16$$.attr("tabindex", "-1"), $rootElement$$16$$.focus()) : $$$$70$$($eventType$$55_firstNode$$).focus()) : ($event$$633_launcher$$20$$.preventDefault(), 
                $eventType$$55_firstNode$$ === $lastNode$$1_nodes$$13$$ && $eventType$$55_firstNode$$ === $options$$400_target$$101$$ ? ($rootElement$$16$$.attr("tabindex", "-1"), $rootElement$$16$$.focus()) : $$$$70$$($lastNode$$1_nodes$$13$$).focus());
              } else {
                $event$$633_launcher$$20$$.preventDefault(), $options$$400_target$$101$$ = this.options, "modeless" === $options$$400_target$$101$$.modality ? ($event$$633_launcher$$20$$ = this.$_launcher$, $event$$633_launcher$$20$$.focus()) : this.close();
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss_options$$401$$) {
      var $focusLossCallback$$ = this.$_focusLossCallback$, $events$$15$$ = this.$_getPopupServiceEvents$();
      $focusLossCallback$$ && (delete $events$$15$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$], delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss_options$$401$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$70$$.proxy(this.$_dismissalHandler$, this), $events$$15$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $focusLossCallback$$);
      this.isOpen() && ($autoDismiss_options$$401$$ = {}, $autoDismiss_options$$401$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $autoDismiss_options$$401$$[$oj$$77$$.$PopupService$.$OPTION$.$EVENTS$] = $events$$15$$, $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($autoDismiss_options$$401$$));
    }, $_dismissalHandler$:function($event$$634$$) {
      var $launcher$$21$$ = this.$_launcher$, $layer$$25$$ = this.$_rootElement$.parent(), $target$$102$$ = $event$$634$$.target, $focusSkipLink_link$$5$$ = this.$_focusSkipLink$;
      if ($focusSkipLink_link$$5$$ && ($focusSkipLink_link$$5$$ = $focusSkipLink_link$$5$$.getLink()) && $oj$$77$$.$DomUtils$.$isAncestorOrSelf$($focusSkipLink_link$$5$$[0], $target$$102$$)) {
        return;
      }
      if (!$oj$$77$$.$DomUtils$.$isAncestorOrSelf$($launcher$$21$$[0], $target$$102$$) && !$oj$$77$$.$DomUtils$.$isAncestorOrSelf$($layer$$25$$[0], $target$$102$$)) {
        if ($$$$70$$($target$$102$$).is(":focusable")) {
          if ("mousedown" === $event$$634$$.type || "touchstart" === $event$$634$$.type) {
            return;
          }
          this.$_ignoreRestoreFocus$ = !0;
        }
        this.close();
      }
    }, $_addDescribedBy$:function() {
      var $launcher$$22$$ = this.$_launcher$, $popupId$$1$$ = this.$_rootElement$.attr("id"), $describedby$$2_tokens$$5$$ = $launcher$$22$$.attr("aria-describedby"), $describedby$$2_tokens$$5$$ = $describedby$$2_tokens$$5$$ ? $describedby$$2_tokens$$5$$.split(/\s+/) : [];
      $describedby$$2_tokens$$5$$.push($popupId$$1$$);
      $describedby$$2_tokens$$5$$ = $$$$70$$.trim($describedby$$2_tokens$$5$$.join(" "));
      $launcher$$22$$.attr("aria-describedby", $describedby$$2_tokens$$5$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$23$$ = this.$_launcher$, $index$$295_popupId$$2$$ = this.$_rootElement$.attr("id"), $describedby$$3_tokens$$6$$ = $launcher$$23$$.attr("aria-describedby"), $describedby$$3_tokens$$6$$ = $describedby$$3_tokens$$6$$ ? $describedby$$3_tokens$$6$$.split(/\s+/) : [], $index$$295_popupId$$2$$ = $$$$70$$.inArray($index$$295_popupId$$2$$, $describedby$$3_tokens$$6$$);
      -1 !== $index$$295_popupId$$2$$ && $describedby$$3_tokens$$6$$.splice($index$$295_popupId$$2$$, 1);
      ($describedby$$3_tokens$$6$$ = $$$$70$$.trim($describedby$$3_tokens$$6$$.join(" "))) ? $launcher$$23$$.attr("aria-describedby", $describedby$$3_tokens$$6$$) : $launcher$$23$$.removeAttr("aria-describedby");
    }, $_initVoiceOverAssist$:function() {
      var $callback$$135_isIOSVOSupported$$ = $oj$$77$$.$AgentUtils$.$getAgentInfo$().os === $oj$$77$$.$AgentUtils$.$OS$.$IOS$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$;
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$ = new $oj$$77$$.$PopupLiveRegion$);
      var $message$$37$$;
      $message$$37$$ = $callback$$135_isIOSVOSupported$$ ? this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$.$announce$($message$$37$$);
      if ($callback$$135_isIOSVOSupported$$) {
        if (!this.$_focusSkipLink$) {
          var $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("focusSkipLink"), $element$$162_launcher$$24$$ = this.$_launcher$, $callback$$135_isIOSVOSupported$$ = $$$$70$$.proxy(this.$_intialFocus$, this, !0);
          $message$$37$$ = this.$getTranslatedString$("ariaFocusSkipLink");
          this.$_focusSkipLink$ = new $oj$$77$$.$PopupSkipLink$($element$$162_launcher$$24$$, $message$$37$$, $callback$$135_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$);
        }
        this.$_closeSkipLink$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("closeSkipLink"), $element$$162_launcher$$24$$ = this.element, $callback$$135_isIOSVOSupported$$ = $$$$70$$.proxy(this.$_closeImplicitly$, this), $message$$37$$ = this.$getTranslatedString$("ariaCloseSkipLink"), this.$_closeSkipLink$ = new $oj$$77$$.$PopupSkipLink$($element$$162_launcher$$24$$, $message$$37$$, $callback$$135_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$));
      }
    }, $_destroyVoiceOverAssist$:function() {
      var $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_liveRegion$;
      $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ && ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_liveRegion$);
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_focusSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_focusSkipLink$;
      }
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_closeSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_closeSkipLink$;
      }
    }, $_getSubId$:function($sub$$1$$) {
      var $id$$68$$ = this.element.attr("id");
      $oj$$77$$.$StringUtils$.$isEmptyOrUndefined$($id$$68$$) && ($id$$68$$ = this.uuid);
      return[$id$$68$$, $sub$$1$$].join("_");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$16$$ = this.$_popupServiceEvents$ = {};
        $events$$16$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$70$$.proxy(this.$_closeImplicitly$, this);
        $events$$16$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$70$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$16$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$70$$.proxy(this.refresh, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
    $oj$$77$$.Components.$setDefaultOptions$({ojPopup:{modality:$oj$$77$$.Components.$createDynamicPropertyGetter$(function() {
      return $oj$$77$$.$ThemeUtils$.$getOptionDefaultMap$("popup").modality;
    })}});
  })();
});
