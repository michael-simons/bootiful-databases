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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "jqueryui-amd/draggable", "ojs/ojtouchproxy"], function($oj$$45$$, $$$$41$$) {
  (function() {
    $oj$$45$$.$__registerWidget$("oj.ojSlider", $$$$41$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", version:"1.0.1", widgetEventPrefix:"oj", options:{distance:0, max:100, min:0, orientation:"horizontal", readOnly:!1, disabled:!1, step:1, type:"fromMin", value:0, rawValue:void 0}, $_numPages$:5, $_sliderDisplayValue$:null, $_isRTL$:function() {
      return "rtl" === $oj$$45$$.$DomUtils$.$getReadingDirection$();
    }, _ComponentCreate:function() {
      this._super();
      this.element.removeAttr("pattern");
      this.$_inputtag$ = !1;
      this.element.is("INPUT") ? (this.$_inputtag$ = !0, this.element[0].style && (this.$_styleFromInputTag$ = this.element[0].style.cssText), this.$_inputElementOriginalDisplay$ = this.element.css("display"), this.element.css("display", "none"), this.$_elementWrapped$ = $$$$41$$(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()) : this.$_elementWrapped$ = this.element;
      this.$_componentSetup$();
    }, $_componentSetup$:function() {
      this.$_newMultiValue$ = [];
      this.$_thumbIndex$ = null;
      var $classes$$1$$ = "oj-slider ", $classes$$1$$ = this.$_isVertical$() ? $classes$$1$$ + "oj-slider-vertical" : $classes$$1$$ + "oj-slider-horizontal", $classes$$1$$ = $classes$$1$$ + " oj-component oj-form-control";
      this.options.$readonly$ && ($classes$$1$$ += " oj-read-only");
      this.options.disabled && ($classes$$1$$ += " oj-disabled");
      this.$_elementWrapped$.removeClass();
      this.$_elementWrapped$.addClass($classes$$1$$);
      this.$_multipleThumbs$ = "range" === this.options.type ? !0 : !1;
      this.$_calculateNewMax$();
      this.$_createSliderContainer$();
      this.$_createBarBackground$();
      this.$_buildValueOption$();
      this.$_createRange$();
      this.$_createThumbs$();
      this.$_updateUI$();
      this.$_setupEvents$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$_makeDraggable$();
      var $ariaLabelString_label$$14$$ = this.$_GetLabelElementLocal$();
      if ($ariaLabelString_label$$14$$) {
        var $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $labelId$$ = $ariaLabelString_label$$14$$.attr("id");
        $labelId$$ || ($labelId$$ = $ariaLabelString_label$$14$$.attr("for"));
        $thumb$$.attr("aria-labelledby", $labelId$$);
        1 < $ariaLabelString_label$$14$$.length && 1 < $thumb$$.length && $thumb$$[1].attr("aria-labelledby", String($labelId$$));
      } else {
        if ($ariaLabelString_label$$14$$ = this.element.attr("aria-label")) {
          $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $thumb$$.attr("aria-label", $ariaLabelString_label$$14$$);
        }
      }
    }, $_GetLabelElementLocal$:function() {
      var $queryResult$$7$$ = this.$_getAriaLabelledByElementLocal$();
      if (null !== $queryResult$$7$$ && 0 !== $queryResult$$7$$.length) {
        return $queryResult$$7$$;
      }
      $queryResult$$7$$ = this.$_getAriaLabelForElementLocal$();
      if (null !== $queryResult$$7$$ && 0 !== $queryResult$$7$$.length) {
        return $queryResult$$7$$;
      }
    }, $_getAriaLabelForElementLocal$:function() {
      var $id$$45_spanQuery$$ = this.element.prop("id");
      if (void 0 !== $id$$45_spanQuery$$) {
        var $jqLabelQuery$$ = $$$$41$$("label[for\x3d'" + $id$$45_spanQuery$$ + "']");
        if (0 < $jqLabelQuery$$.length) {
          return $jqLabelQuery$$;
        }
        $id$$45_spanQuery$$ = "span[for\x3d'" + $id$$45_spanQuery$$ + "']";
        if (0 !== $$$$41$$($id$$45_spanQuery$$).length) {
          return $$$$41$$($id$$45_spanQuery$$);
        }
      }
      return null;
    }, $_getAriaLabelledByElementLocal$:function() {
      var $ariaId$$1_jqSpanQuery$$ = this.element.attr("aria-labelledby");
      if (void 0 !== $ariaId$$1_jqSpanQuery$$) {
        var $jqLabelQuery$$1$$ = $$$$41$$("label[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $jqLabelQuery$$1$$.length) {
          return $jqLabelQuery$$1$$;
        }
        $ariaId$$1_jqSpanQuery$$ = $$$$41$$("span[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $ariaId$$1_jqSpanQuery$$.length) {
          return $ariaId$$1_jqSpanQuery$$;
        }
      } else {
        return null;
      }
    }, widget:function() {
      return this.$_elementWrapped$;
    }, $_SetDisplayValue$:function($displayValue$$11$$) {
      this.$_sliderDisplayValue$ = $displayValue$$11$$;
    }, $_GetDisplayValue$:function() {
      return this.$_sliderDisplayValue$;
    }, $_getElementId$:function() {
      return this.element[0].id;
    }, $_getThumbId$:function($index$$206$$) {
      return this.$_getElementId$() + "-thumb" + $index$$206$$;
    }, $_getBarValueId$:function() {
      return this.$_getElementId$() + "-barValue";
    }, $_getBarBackgroundId$:function() {
      return this.$_getElementId$() + "-barBack";
    }, $_getSliderWrapperId$:function() {
      return this.$_getElementId$() + "-sliderWrapper";
    }, $_createThumbs$:function() {
      var $i$$352$$, $thumbCount$$, $thumb$$1$$ = "", $thumbClasses$$ = "class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'" + ("aria-valuemin \x3d '" + this.$_valueMin$() + "' ") + ("aria-valuemax \x3d '" + this.$_valueMax$() + "' ") + "\x3e\x3c/span\x3e", $thumbs$$ = [];
      $thumbCount$$ = this.$_multipleThumbs$ ? this.options.value.length : 1;
      for ($i$$352$$ = 0;$i$$352$$ < $thumbCount$$;$i$$352$$++) {
        $thumb$$1$$ = "\x3cspan " + ("id\x3d'" + this.$_getThumbId$($i$$352$$) + "' ") + $thumbClasses$$, $thumbs$$.push($thumb$$1$$);
      }
      this.$_thumbs$ = $$$$41$$($thumbs$$.join("")).appendTo(this.$_sliderContainer$);
      this.$_thumb$ = this.$_thumbs$.eq(0);
      var $that$$11$$ = this;
      this.$_thumbs$.each(function($i$$353$$) {
        $$$$41$$(this).data("oj-slider-thumb-index", $i$$353$$);
        $that$$11$$.$_isVertical$() && $$$$41$$(this).attr("aria-orientation", "vertical");
        $that$$11$$.options.disabled ? ($$$$41$$(this).attr("aria-disabled", "true"), $$$$41$$(this).removeAttr("tabindex")) : $$$$41$$(this).removeAttr("aria-disabled");
        $that$$11$$.options.readOnly ? $$$$41$$(this).attr("title", "read only") : $$$$41$$(this).removeAttr("title");
      });
    }, $_createSliderContainer$:function() {
      var $sliderWrapperId$$1$$ = this.$_getSliderWrapperId$(), $existingSliderWrapper$$ = this.$_elementWrapped$.find("#" + $sliderWrapperId$$1$$);
      $existingSliderWrapper$$.length && $existingSliderWrapper$$.remove();
      this.$_sliderContainer$ = $$$$41$$("\x3cdiv\x3e\x3c/div\x3e");
      $$$$41$$(this.$_sliderContainer$).attr("id", $sliderWrapperId$$1$$);
      this.$_sliderContainer$.addClass("oj-slider-container");
      this.element.after(this.$_sliderContainer$);
      this.$_sliderContainer$[0].style.cssText = this.$_styleFromInputTag$;
      this.$_isVertical$() && "" == this.$_sliderContainer$[0].style.height && (this.$_sliderContainer$[0].style.height = "150px");
    }, $_createBarBackground$:function() {
      var $barId$$ = this.$_getBarBackgroundId$(), $classes$$2_existingBarBack$$ = this.$_elementWrapped$.find("#" + $barId$$);
      $classes$$2_existingBarBack$$.length && $classes$$2_existingBarBack$$.remove();
      this.$_barback$ = $$$$41$$("\x3cdiv\x3e\x3c/div\x3e");
      $classes$$2_existingBarBack$$ = "oj-slider-bar";
      $classes$$2_existingBarBack$$ = this.$_isVertical$() ? $classes$$2_existingBarBack$$ + " oj-slider-vertical" : $classes$$2_existingBarBack$$ + " oj-slider-horizontal";
      $$$$41$$(this.$_barback$).attr("id", $barId$$);
      this.$_barback$.addClass($classes$$2_existingBarBack$$);
      this.$_sliderContainer$.append(this.$_barback$);
      var $that$$12$$ = this;
      this.$_barback$.on("mousedown" + $that$$12$$.eventNamespace, function($event$$476$$) {
        $that$$12$$.$_repositionThumb$($event$$476$$);
        $that$$12$$.$_mouseStop$($event$$476$$);
        $that$$12$$.$_getActiveThumb$().focus();
      });
    }, $_buildValueOption$:function() {
      this.options.type && (this.options.value ? this.$_multipleThumbs$ && 2 != this.options.value.length && (this.options.value = [0 < this.options.value.length ? this.options.value[0] : this.$_valueMin$(), this.$_valueMax$()], this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}})) : (this.options.value = this.$_multipleThumbs$ ? [this.$_valueMin$(), this.$_valueMax$()] : this.$_valueMin$(), this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}})));
    }, $_createRange$:function() {
      var $options$$316$$ = this.options, $classes$$3$$ = "";
      if ($options$$316$$.type) {
        this.$_range$ = $$$$41$$("\x3cdiv\x3e\x3c/div\x3e");
        $$$$41$$(this.$_range$).attr("id", this.$_getBarValueId$());
        this.$_sliderContainer$.append(this.$_range$);
        var $classes$$3$$ = "oj-slider-range oj-slider-bar-value", $that$$13$$ = this;
        this.$_range$.on("mousedown" + $that$$13$$.eventNamespace, function($event$$477$$) {
          $that$$13$$.$_repositionThumb$($event$$477$$);
          $that$$13$$.$_mouseStop$($event$$477$$);
          $that$$13$$.$_getActiveThumb$().focus();
        });
        this.$_range$ = this.$_sliderContainer$.find("#" + this.$_getBarValueId$());
        var $newClass$$ = "";
        "fromMin" === $options$$316$$.type ? $newClass$$ = " oj-slider-range-min" : "fromMax" === $options$$316$$.type && ($newClass$$ = " oj-slider-range-max");
        this.$_range$.addClass($classes$$3$$ + $newClass$$);
      } else {
        this.$_range$ && this.$_range$.remove(), this.$_range$ = null;
      }
    }, $_setupTouch$:function($e$$96$$) {
      this.$_touchProxy$ = $oj$$45$$.$_TouchProxy$.$addTouchListeners$($e$$96$$);
    }, $_tearDownTouch$:function($e$$97$$) {
      $oj$$45$$.$_TouchProxy$.$removeTouchListeners$($e$$97$$);
    }, $_setupEvents$:function() {
      this.$_CanSetValue$() && this._hoverable(this.$_elementWrapped$);
      this._focusable(this.$_elementWrapped$);
      this.$_thumbs$.toArray().forEach(function($current$$20_thumb$$4$$) {
        $current$$20_thumb$$4$$ = $$$$41$$($current$$20_thumb$$4$$);
        this.$_UnregisterChildNode$($current$$20_thumb$$4$$);
        this._on($current$$20_thumb$$4$$, this.$_thumbEvents$);
        this.$_setupTouch$($current$$20_thumb$$4$$);
      }, this);
    }, $_GetContentElement$:function() {
      return this.$_elementWrapped$;
    }, $_destroySliderDom$:function() {
      this.$_thumbs$.toArray().forEach(function($current$$21_thumb$$5$$) {
        $current$$21_thumb$$5$$ = $$$$41$$($current$$21_thumb$$5$$);
        this.$_tearDownTouch$($current$$21_thumb$$5$$);
      }, this);
      this.$_range$ && this.$_range$.remove();
      this.$_sliderContainer$ && this.$_sliderContainer$.remove();
    }, $_unwrapSlider$:function() {
      $oj$$45$$.$DomUtils$.unwrap(this.element, this.$_elementWrapped$);
      this.element.css("display", this.$_inputElementOriginalDisplay$);
      this.$_RestoreAttributes$(this.element);
    }, _destroy:function() {
      this.$_destroySliderDom$();
      this.$_unwrapSlider$();
      return this._super();
    }, $_repositionThumb$:function($event$$478$$) {
      var $normValue$$, $distance$$1$$, $index$$210$$, $that$$14$$ = this, $o$$11$$ = this.options;
      $index$$210$$ = 0;
      this.$_closestThumb$ = this.$_thumb$;
      if ($o$$11$$.disabled || $o$$11$$.readOnly) {
        return!1;
      }
      $normValue$$ = this.$_getNormValueFromMouse$({x:$event$$478$$.pageX, y:$event$$478$$.pageY});
      $distance$$1$$ = this.$_valueMax$() - this.$_valueMin$() + 1;
      this.$_multipleThumbs$ && this.$_thumbs$.each(function($i$$356$$) {
        var $thisDistance$$ = Math.abs($normValue$$ - $that$$14$$.$_getMultiValues$($i$$356$$));
        if ($distance$$1$$ > $thisDistance$$ || $distance$$1$$ === $thisDistance$$ && ($i$$356$$ === $that$$14$$.$_lastChangedValueIndex$ || $that$$14$$.$_getMultiValues$($i$$356$$) === $o$$11$$.min)) {
          $distance$$1$$ = $thisDistance$$, this.$_closestThumb$ = $$$$41$$(this), $index$$210$$ = $i$$356$$;
        }
      });
      this.$_thumbIndex$ = $index$$210$$;
      if (this.$_closestThumb$) {
        return this.$_thumbs$.hasClass("ui-state-hover") || this.$_slide$($event$$478$$, $index$$210$$, $normValue$$), this.$_getActiveThumb$().addClass("oj-active").focus(), this.$_range$.addClass("oj-active"), !0;
      }
    }, $_initDragging$:function($event$$479$$, $thumb$$7$$) {
      var $o$$12$$ = this.options;
      if ($o$$12$$.disabled || $o$$12$$.readOnly) {
        return!1;
      }
      $thumb$$7$$.addClass("oj-active").focus();
      this.$_range$.addClass("oj-active");
      return!0;
    }, $_mouseDragInternal$:function($event$$480$$, $thumb$$8$$) {
      var $normValue$$1_pct$$ = this.$_getNormValueFromThumb$($thumb$$8$$);
      this.$_slide$($event$$480$$, this.$_thumbIndex$, $normValue$$1_pct$$, !0);
      $normValue$$1_pct$$ = 100 * this.$_getFracFromThumb$($thumb$$8$$);
      this.$_multipleThumbs$ ? this.$_setRangeMultiThumb$($normValue$$1_pct$$, this.$_thumbIndex$) : this.$_setRange$($normValue$$1_pct$$);
      return!1;
    }, $_mouseStop$:function($event$$481$$, $thumb$$9$$) {
      this.$_thumbs$.removeClass("oj-active");
      this.$_range$.removeClass("oj-active");
      var $normValue$$2$$ = this.$_getNormValueFromThumb$($thumb$$9$$);
      this.$_slide$($event$$481$$, this.$_thumbIndex$, $normValue$$2$$);
      this.$_change$($event$$481$$, this.$_thumbIndex$, !1);
      this.$_thumbIndex$ = null;
      return!1;
    }, $_isVertical$:function() {
      return "vertical" === this.options.orientation;
    }, $_getOrientationAdjustedFrac$:function($frac$$) {
      1 < $frac$$ && ($frac$$ = 1);
      0 > $frac$$ && ($frac$$ = 0);
      this.$_isVertical$() && ($frac$$ = 1 - $frac$$);
      return $frac$$;
    }, $_getNormValueFromMouse$:function($position$$28_valueTotal$$) {
      var $fracMouse$$ = this.$_getFracFromMouse$($position$$28_valueTotal$$);
      $position$$28_valueTotal$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracMouse$$ = 1 - $fracMouse$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracMouse$$ * $position$$28_valueTotal$$);
    }, $_getFracFromMouse$:function($pixelMouse$$1_position$$29$$) {
      var $fracMouse$$1_pixelTotal$$1$$;
      this.$_isVertical$() ? ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.height(), $pixelMouse$$1_position$$29$$ = $pixelMouse$$1_position$$29$$.y - this.$_barback$.offset().top) : ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.width(), $pixelMouse$$1_position$$29$$ = $pixelMouse$$1_position$$29$$.x - this.$_barback$.offset().left);
      return 0 == $fracMouse$$1_pixelTotal$$1$$ ? 1 : $fracMouse$$1_pixelTotal$$1$$ = this.$_getOrientationAdjustedFrac$($pixelMouse$$1_position$$29$$ / $fracMouse$$1_pixelTotal$$1$$);
    }, $_getActiveThumb$:function() {
      return this.$_multipleThumbs$ ? $$$$41$$(this.$_thumbs$[this.$_thumbIndex$]) : this.$_thumb$;
    }, $_getFracFromThumb$:function($fracThumb_pixelTotal$$2_thumb$$10$$) {
      var $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$;
      $fracThumb_pixelTotal$$2_thumb$$10$$ || ($fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_getActiveThumb$());
      this.$_isVertical$() ? ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.outerHeight() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.offset().top + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$, $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_barback$.height(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ -= this.$_barback$.offset().top) : ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ = 
      $fracThumb_pixelTotal$$2_thumb$$10$$.outerWidth() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.offset().left + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$, $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_barback$.width(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ -= this.$_barback$.offset().left);
      return 0 == $fracThumb_pixelTotal$$2_thumb$$10$$ ? 1 : $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_getOrientationAdjustedFrac$($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$10$$ / $fracThumb_pixelTotal$$2_thumb$$10$$);
    }, $_getNormValueFromThumb$:function($fracThumb$$1_thumb$$11$$) {
      var $valueTotal$$1$$;
      $fracThumb$$1_thumb$$11$$ = this.$_getFracFromThumb$($fracThumb$$1_thumb$$11$$);
      $valueTotal$$1$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracThumb$$1_thumb$$11$$ = 1 - $fracThumb$$1_thumb$$11$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracThumb$$1_thumb$$11$$ * $valueTotal$$1$$);
    }, $_getOtherThumbValue$:function($index$$211$$) {
      return this.$_getMultiValues$($index$$211$$ ? 0 : 1);
    }, $_getNewThumbValueLimited$:function($index$$212$$, $newVal$$, $otherVal$$) {
      return 2 === this.options.value.length && (0 === $index$$212$$ && $newVal$$ > $otherVal$$ || 1 === $index$$212$$ && $newVal$$ < $otherVal$$) ? $otherVal$$ : $newVal$$;
    }, $_slide$:function($event$$482$$, $index$$213$$, $newVal$$1$$, $rawOnly$$) {
      var $otherVal$$1$$;
      this.$_multipleThumbs$ ? ($otherVal$$1$$ = this.$_getOtherThumbValue$($index$$213$$), $newVal$$1$$ = this.$_getNewThumbValueLimited$($index$$213$$, $newVal$$1$$, $otherVal$$1$$), $newVal$$1$$ !== this.$_getMultiValues$($index$$213$$) && this.$_setMultiValue$($event$$482$$, $index$$213$$, $newVal$$1$$, $rawOnly$$)) : $newVal$$1$$ !== this.$_getSingleValue$() && (this.$_setSingleValue$($event$$482$$, $newVal$$1$$, $rawOnly$$), $rawOnly$$ || this.$_inputtag$ && this.element.val($newVal$$1$$));
    }, $_setSingleValue$:function($event$$483$$, $newValue$$20$$, $rawOnly$$1$$) {
      this.$_newValue$ = this.$_trimAlignValue$($newValue$$20$$);
      $rawOnly$$1$$ || (this.$_SetValue$(this.$_newValue$, $event$$483$$), this.$_updateUI$());
      this.$_SetRawValue$(this.$_newValue$, $event$$483$$);
    }, $_change$:function($event$$484$$, $index$$214$$, $rawOnly$$2$$) {
      this.$_multipleThumbs$ ? (this.$_lastChangedValues$ = this.$_getNewValues$($index$$214$$, this.$_newMultiValue$[$index$$214$$]), this.$_SetRawValue$(this.$_lastChangedValues$, $event$$484$$), $rawOnly$$2$$ || this.$_SetValue$(this.$_lastChangedValues$, $event$$484$$)) : (this.$_SetRawValue$(this.$_newValue$, $event$$484$$), $rawOnly$$2$$ || this.$_SetValue$(this.$_newValue$, $event$$484$$));
      this.$_lastChangedValueIndex$ = $index$$214$$;
    }, $_getNewValues$:function($index$$215$$, $newValue$$21$$) {
      var $vals$$, $i$$357$$;
      $vals$$ = this.options.value.slice();
      for ($i$$357$$ = 0;$i$$357$$ < $vals$$.length;$i$$357$$ += 1) {
        $vals$$[$i$$357$$] = this.$_trimAlignValue$($vals$$[$i$$357$$]);
      }
      $index$$215$$ === this.$_thumbIndex$ && ($vals$$[$index$$215$$] = $newValue$$21$$);
      return $vals$$;
    }, $_getSingleValue$:function() {
      return this.$_getValueAligned$();
    }, $_getMultiValues$:function($index$$216$$) {
      return this.$_getValuesAligned$($index$$216$$);
    }, $_setMultiValue$:function($event$$485$$, $index$$217$$, $newValue$$22$$, $rawOnly$$3$$) {
      this.$_newMultiValue$[$index$$217$$] = this.$_trimAlignValue$($newValue$$22$$);
      this.$_change$($event$$485$$, $index$$217$$, $rawOnly$$3$$);
      $rawOnly$$3$$ || this.$_updateUI$();
    }, _setOption:function($key$$151$$, $coercedValue_value$$275$$, $flags$$39$$) {
      "value" === $key$$151$$ && (Array.isArray($coercedValue_value$$275$$) ? isNaN($coercedValue_value$$275$$[0]) ? (this.$_multipleThumbs$ = !1, this.$_parse$($key$$151$$, $coercedValue_value$$275$$[0])) : this.$_multipleThumbs$ = !0 : (this.$_multipleThumbs$ = !1, this.$_parse$($key$$151$$, $coercedValue_value$$275$$)));
      $coercedValue_value$$275$$ = "max" === $key$$151$$ || "min" === $key$$151$$ ? this.$_parse$($key$$151$$, $coercedValue_value$$275$$) : "step" === $key$$151$$ ? this.$_parseStep$($coercedValue_value$$275$$) : $coercedValue_value$$275$$;
      "disabled" != $key$$151$$ && this._super($key$$151$$, $coercedValue_value$$275$$, $flags$$39$$);
      "readOnly" === $key$$151$$ && (this.options.$readonly$ = $coercedValue_value$$275$$);
      "disabled" === $key$$151$$ && (this.options.disabled = $coercedValue_value$$275$$);
      switch($key$$151$$) {
        case "value":
          this.$_updateUI$();
          this.$_makeDraggable$();
          break;
        case "min":
        ;
        case "max":
          this.$_calculateNewMax$();
          this.$_updateUI$();
          this.$_makeDraggable$();
          break;
        case "orientation":
        ;
        case "readonly":
        ;
        case "step":
        ;
        case "type":
        ;
        case "disabled":
          this.$_reCreate$();
      }
    }, $_reCreate$:function() {
      this.$_destroySliderDom$();
      this.$_componentSetup$();
      this.$_AfterCreate$();
    }, $_getValueAligned$:function() {
      var $val$$53$$ = this.options.value;
      return $val$$53$$ = this.$_trimAlignValue$($val$$53$$);
    }, $_getValuesAligned$:function($index$$218$$) {
      return this.$_trimAlignValue$(this.options.value[$index$$218$$]);
    }, $_trimAlignValue$:function($alignValue_val$$55$$) {
      if ($alignValue_val$$55$$ <= this.$_valueMin$()) {
        return this.$_valueMin$();
      }
      if ($alignValue_val$$55$$ >= this.$_valueMax$()) {
        return this.$_valueMax$();
      }
      var $step$$1$$ = 0 < this.options.step ? this.options.step : 1, $valModStep$$ = ($alignValue_val$$55$$ - this.$_valueMin$()) % $step$$1$$;
      $alignValue_val$$55$$ -= $valModStep$$;
      2 * Math.abs($valModStep$$) >= $step$$1$$ && ($alignValue_val$$55$$ += 0 < $valModStep$$ ? $step$$1$$ : -$step$$1$$);
      return parseFloat($alignValue_val$$55$$.toFixed(5));
    }, $_calculateNewMax$:function() {
      var $min$$7$$ = this.$_valueMin$();
      this.max = 0 !== (this.options.max - $min$$7$$) / this.options.step % 1 ? this.options.max - (this.options.max - $min$$7$$) % this.options.step : this.options.max;
    }, $_valueMin$:function() {
      return this.options.min;
    }, $_valueMax$:function() {
      return this.max;
    }, $_getGrid$:function() {
      var $numIntervals_pixelInterval$$;
      $numIntervals_pixelInterval$$ = 0 < this.options.step ? (this.$_valueMax$() - this.$_valueMin$()) / this.options.step : 100;
      $numIntervals_pixelInterval$$ = (this.$_isVertical$() ? this.$_barback$.height() : this.$_barback$.width()) / $numIntervals_pixelInterval$$;
      1 > $numIntervals_pixelInterval$$ && ($numIntervals_pixelInterval$$ = 1);
      return this.$_isVertical$() ? [1, $numIntervals_pixelInterval$$] : [$numIntervals_pixelInterval$$, 1];
    }, $_getThumbsValueFrac$:function($index$$219$$) {
      return(this.$_getMultiValues$($index$$219$$) - this.$_valueMin$()) / (this.$_valueMax$() - this.$_valueMin$());
    }, $_updateUI$:function() {
      var $valPercent$$, $value$$276$$, $valueMin$$, $valueMax$$;
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$22$$, $i$$359$$) {
        var $thumb$$12$$ = $$$$41$$($current$$22$$);
        $valPercent$$ = 100 * this.$_getThumbsValueFrac$($i$$359$$);
        this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$);
        this.$_isVertical$() ? $$$$41$$($thumb$$12$$).css({top:100 - $valPercent$$ + "%"}) : $$$$41$$($thumb$$12$$).css({left:$valPercent$$ + "%"});
        $$$$41$$($thumb$$12$$).attr("aria-valuenow", this.$_getMultiValues$($i$$359$$));
        this.$_setRangeMultiThumb$($valPercent$$, $i$$359$$);
      }, this) : ($value$$276$$ = this.$_getValueAligned$(), $valueMin$$ = this.$_valueMin$(), $valueMax$$ = this.$_valueMax$(), $valPercent$$ = $valueMax$$ !== $valueMin$$ ? ($value$$276$$ - $valueMin$$) / ($valueMax$$ - $valueMin$$) * 100 : 0, this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$), this.$_isVertical$() ? this.$_thumb$.css({top:100 - $valPercent$$ + "%"}) : this.$_thumb$.css({left:$valPercent$$ + "%"}), $$$$41$$(this.$_thumb$).attr("aria-valuenow", $value$$276$$), 
      this.$_setRange$($valPercent$$));
    }, $_setRange$:function($val$$56$$) {
      var $oRange$$ = this.options.type;
      this.$_isVertical$() ? ("fromMin" === $oRange$$ && this.$_range$.css({height:$val$$56$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({height:100 - $val$$56$$ + "%"})) : this.$_isRTL$() ? ("fromMin" === $oRange$$ && this.$_range$.css({width:100 - $val$$56$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:$val$$56$$ + "%"})) : ("fromMin" === $oRange$$ && this.$_range$.css({width:$val$$56$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:100 - $val$$56$$ + "%"}));
    }, $_setRangeMultiThumb$:function($val$$57$$, $index$$220$$) {
      var $id$$46_thumb1Pct$$ = this.$_range$.attr("id");
      if (0 == $index$$220$$) {
        switch($id$$46_thumb1Pct$$ = 100 * this.$_getThumbsValueFrac$(1), this.options.type) {
          case "fromMin":
            this.$_isVertical$() ? this.$_range$.css({height:$val$$57$$ + "%"}) : this.$_range$.css({width:$val$$57$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? (this.$_range$.css({top:100 - $id$$46_thumb1Pct$$ + "%"}), this.$_range$.css({height:$id$$46_thumb1Pct$$ - $val$$57$$ + "%"})) : this.$_isRTL$() ? (this.$_range$.css({left:100 - $id$$46_thumb1Pct$$ + "%"}), this.$_range$.css({width:$id$$46_thumb1Pct$$ - (100 - $val$$57$$) + "%"})) : (this.$_range$.css({left:$val$$57$$ + "%"}), this.$_range$.css({width:$id$$46_thumb1Pct$$ - $val$$57$$ + "%"}));
        }
      } else {
        var $thumb0Pct$$ = 100 * this.$_getThumbsValueFrac$(0);
        switch(this.options.type) {
          case "fromMax":
            this.$_isVertical$() ? this.$_range$.css({height:100 - $val$$57$$ + "%"}) : this.$_range$.css({width:100 - $val$$57$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? document.getElementById($id$$46_thumb1Pct$$) && (this.$_range$.css({top:100 - $val$$57$$ + "%"}), this.$_range$.css({height:$val$$57$$ - $thumb0Pct$$ + "%"})) : this.$_isRTL$() ? document.getElementById($id$$46_thumb1Pct$$) && (this.$_range$.css({left:$val$$57$$ + "%"}), this.$_range$.css({width:-$val$$57$$ + 100 - $thumb0Pct$$ + "%"})) : document.getElementById($id$$46_thumb1Pct$$) && this.$_range$.css({width:$val$$57$$ - parseInt(document.getElementById($id$$46_thumb1Pct$$).style.left, 
            10) + "%"});
        }
      }
    }, $_thumbEvents$:{keydown:function($event$$486$$) {
      var $curVal_tempVal$$, $newVal$$2$$, $step$$2$$, $index$$221$$ = $$$$41$$($event$$486$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$221$$;
      switch($event$$486$$.keyCode) {
        case $$$$41$$.ui.keyCode.HOME:
        ;
        case $$$$41$$.ui.keyCode.END:
        ;
        case $$$$41$$.ui.keyCode.PAGE_UP:
        ;
        case $$$$41$$.ui.keyCode.PAGE_DOWN:
        ;
        case $$$$41$$.ui.keyCode.UP:
        ;
        case $$$$41$$.ui.keyCode.RIGHT:
        ;
        case $$$$41$$.ui.keyCode.DOWN:
        ;
        case $$$$41$$.ui.keyCode.LEFT:
          $event$$486$$.preventDefault(), $$$$41$$($event$$486$$.target).addClass("oj-active");
      }
      $step$$2$$ = this.options.step;
      $curVal_tempVal$$ = this.$_multipleThumbs$ ? $newVal$$2$$ = this.$_getMultiValues$($index$$221$$) : $newVal$$2$$ = this.$_getSingleValue$();
      switch($event$$486$$.keyCode) {
        case $$$$41$$.ui.keyCode.HOME:
          $newVal$$2$$ = this.$_valueMin$();
          break;
        case $$$$41$$.ui.keyCode.END:
          $newVal$$2$$ = this.$_valueMax$();
          break;
        case $$$$41$$.ui.keyCode.PAGE_UP:
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ + (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$41$$.ui.keyCode.PAGE_DOWN:
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ - (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$41$$.ui.keyCode.UP:
          if ($curVal_tempVal$$ === this.$_valueMax$()) {
            return;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ + $step$$2$$);
          break;
        case $$$$41$$.ui.keyCode.RIGHT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$2$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$2$$;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$);
          break;
        case $$$$41$$.ui.keyCode.DOWN:
          if ($curVal_tempVal$$ === this.$_valueMin$()) {
            return;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ - $step$$2$$);
          break;
        case $$$$41$$.ui.keyCode.LEFT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$2$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$2$$;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$);
      }
      this.$_slide$($event$$486$$, $index$$221$$, $newVal$$2$$);
    }, keyup:function($event$$487$$) {
      var $index$$222$$ = $$$$41$$($event$$487$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$222$$;
      this.$_change$($event$$487$$, $index$$222$$, !1);
      $$$$41$$($event$$487$$.target).removeClass("oj-active");
      this.$_thumbIndex$ = null;
    }}, $_InitOptions$:function($originalDefaults$$13$$, $constructorOptions$$15$$) {
      var $opts$$30$$ = this.options, $self$$162$$ = this;
      this._superApply(arguments);
      $oj$$45$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"value"}, {$attribute$:"title"}, {$attribute$:"min"}, {$attribute$:"max"}, {$attribute$:"step"}], $constructorOptions$$15$$, this, function($initializedOptions$$1$$) {
        for (var $toParse$$ = ["value", "step", "min", "max"], $i$$360$$ = 0;$i$$360$$ < $toParse$$.length;$i$$360$$++) {
          var $opt$$20$$ = $toParse$$[$i$$360$$], $value$$277$$ = $opt$$20$$ in $initializedOptions$$1$$ ? $initializedOptions$$1$$[$opt$$20$$] : $opts$$30$$[$opt$$20$$];
          null != $value$$277$$ && ("step" === $opt$$20$$ ? $initializedOptions$$1$$[$opt$$20$$] = $self$$162$$.$_parseStep$($value$$277$$) : "min" === $opt$$20$$ || "max" === $opt$$20$$ ? $initializedOptions$$1$$[$opt$$20$$] = $self$$162$$.$_parse$($opt$$20$$, $value$$277$$) : "value" === $opt$$20$$ && (Array.isArray($value$$277$$) ? $initializedOptions$$1$$[$opt$$20$$] = $value$$277$$ : $initializedOptions$$1$$[$opt$$20$$] = $self$$162$$.$_parse$($opt$$20$$, $value$$277$$)));
        }
      });
      if (void 0 === $opts$$30$$.value) {
        throw Error(this.$getTranslatedString$("noValue"));
      }
      if (null != $opts$$30$$.min && null != $opts$$30$$.max) {
        if ($opts$$30$$.max < $opts$$30$$.min) {
          throw Error(this.$getTranslatedString$("maxMin"));
        }
        if ($opts$$30$$.value < $opts$$30$$.min || $opts$$30$$.value > $opts$$30$$.max) {
          throw Error(this.$getTranslatedString$("valueRange"));
        }
      }
    }, getNodeBySubId:function($locator$$47_subId$$50$$) {
      if (null == $locator$$47_subId$$50$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$47_subId$$50$$ = $locator$$47_subId$$50$$.subId;
      return "oj-slider-thumb-0" === $locator$$47_subId$$50$$ ? this.widget().find(".oj-slider-thumb")[0] : "oj-slider-thumb-1" === $locator$$47_subId$$50$$ ? this.widget().find(".oj-slider-thumb")[1] : "oj-slider-bar" === $locator$$47_subId$$50$$ ? this.widget().find("." + $locator$$47_subId$$50$$)[0] : "oj-slider-bar-value" === $locator$$47_subId$$50$$ ? this.widget().find("." + $locator$$47_subId$$50$$)[0] : null;
    }, getSubIdByNode:function($node$$100$$) {
      if (null != $node$$100$$) {
        if ($node$$100$$.id === this.$_getThumbId$(0) && $$$$41$$($node$$100$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-0"};
        }
        if ($node$$100$$.id === this.$_getThumbId$(1) && $$$$41$$($node$$100$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-1"};
        }
        if ($$$$41$$($node$$100$$).hasClass("oj-slider-bar")) {
          return{subId:"oj-slider-bar"};
        }
        if ($$$$41$$($node$$100$$).hasClass("oj-slider-bar-value")) {
          return{subId:"oj-slider-bar-value"};
        }
      }
      return null;
    }, _GetDefaultStyleClass:function() {
      return "oj-slider";
    }, $_parse$:function($option$$33$$, $val$$58$$) {
      var $returnValue$$7$$;
      $returnValue$$7$$ = null !== $val$$58$$ ? +$val$$58$$ : $val$$58$$;
      if (isNaN($returnValue$$7$$)) {
        throw Error(this.$getTranslatedString$("optionNum", {option:$option$$33$$}));
      }
      return $returnValue$$7$$;
    }, $_parseStep$:function($parsedStep_val$$59$$) {
      if (null === $parsedStep_val$$59$$) {
        return 1;
      }
      $parsedStep_val$$59$$ = this.$_parse$("step", $parsedStep_val$$59$$);
      if (0 >= $parsedStep_val$$59$$) {
        throw Error(this.$getTranslatedString$("invalidStep"));
      }
      if (null === $parsedStep_val$$59$$ || 0 >= $parsedStep_val$$59$$) {
        $parsedStep_val$$59$$ = 1;
      }
      return $parsedStep_val$$59$$;
    }, $_getEndInterval$:function() {
      return this.$_barback$.offset().left + this.$_barback$.width();
    }, $_getStartInterval$:function() {
      return this.$_barback$.offset().left;
    }, $_callDraggable$:function($thumbParam$$) {
      var $g$$1$$ = this.$_getGrid$(), $cachedStyle$$ = $thumbParam$$[0].style, $that$$15$$ = this;
      $thumbParam$$.draggable({axis:this.$_isVertical$() ? "y" : "x", grid:$g$$1$$, disabled:!1, start:function($event$$488$$) {
        $thumbParam$$[0] == $$$$41$$($that$$15$$.$_thumbs$)[0] ? $that$$15$$.$_thumbIndex$ = 0 : $thumbParam$$[0] == $$$$41$$($that$$15$$.$_thumbs$)[1] && ($that$$15$$.$_thumbIndex$ = 1);
        $that$$15$$.$_initDragging$($event$$488$$, $thumbParam$$);
      }, drag:function($event$$489$$, $ui$$33$$) {
        var $pos$$11$$ = $ui$$33$$.position;
        $that$$15$$.$_isVertical$() ? ($cachedStyle$$.left = "", $pos$$11$$.left = "") : ($cachedStyle$$.top = "", $pos$$11$$.top = "");
        $that$$15$$.$_mouseDragInternal$($event$$489$$, $thumbParam$$);
        $that$$15$$.$_isVertical$() ? (0 > $pos$$11$$.top && ($pos$$11$$.top = 0), $pos$$11$$.top > $that$$15$$.$_barback$.height() && ($pos$$11$$.top = $that$$15$$.$_barback$.height())) : (0 > $pos$$11$$.left && ($pos$$11$$.left = 0), $pos$$11$$.left > $that$$15$$.$_barback$.width() && ($pos$$11$$.left = $that$$15$$.$_barback$.width()));
        if ($that$$15$$.$_multipleThumbs$) {
          var $otherThumb_pos2$$;
          $otherThumb_pos2$$ = 0 == $that$$15$$.$_thumbIndex$ ? $$$$41$$($that$$15$$.$_thumbs$[1]) : $$$$41$$($that$$15$$.$_thumbs$[0]);
          if ($that$$15$$.$_isVertical$()) {
            var $halfThumbHeight$$1_halfThumbWidth$$1$$ = $thumbParam$$.outerHeight() / 2, $parentLeft_parentTop$$ = $that$$15$$.$_barback$.offsetParent().offset().top;
            $thumbParam$$.offset();
            $otherThumb_pos2$$ = $otherThumb_pos2$$.offset().top + $halfThumbHeight$$1_halfThumbWidth$$1$$ - $parentLeft_parentTop$$;
          } else {
            $halfThumbHeight$$1_halfThumbWidth$$1$$ = $thumbParam$$.outerWidth() / 2, $parentLeft_parentTop$$ = $that$$15$$.$_barback$.offsetParent().offset().left, $thumbParam$$.offset(), $otherThumb_pos2$$ = $otherThumb_pos2$$.offset().left + $halfThumbHeight$$1_halfThumbWidth$$1$$ - $parentLeft_parentTop$$;
          }
          0 == $that$$15$$.$_thumbIndex$ ? $that$$15$$.$_isVertical$() ? $pos$$11$$.top < $otherThumb_pos2$$ && ($pos$$11$$.top = $otherThumb_pos2$$) : $that$$15$$.$_isRTL$() ? $pos$$11$$.left < $otherThumb_pos2$$ && ($pos$$11$$.left = $otherThumb_pos2$$) : $pos$$11$$.left > $otherThumb_pos2$$ && ($pos$$11$$.left = $otherThumb_pos2$$) : $that$$15$$.$_isVertical$() ? $pos$$11$$.top > $otherThumb_pos2$$ && ($pos$$11$$.top = $otherThumb_pos2$$) : $that$$15$$.$_isRTL$() ? $pos$$11$$.left > $otherThumb_pos2$$ && 
          ($pos$$11$$.left = $otherThumb_pos2$$) : $pos$$11$$.left < $otherThumb_pos2$$ && ($pos$$11$$.left = $otherThumb_pos2$$);
        }
      }, stop:function($event$$490$$) {
        this.style.width = "";
        this.style.height = "";
        $that$$15$$.$_mouseStop$($event$$490$$, $thumbParam$$);
      }});
    }, $_makeDraggable$:function() {
      this.options.disabled || (this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$23_thumb$$13$$) {
        $current$$23_thumb$$13$$ = $$$$41$$($current$$23_thumb$$13$$);
        this.$_callDraggable$($current$$23_thumb$$13$$);
      }, this) : this.$_callDraggable$(this.$_thumb$));
    }, $_disableDraggable$:function() {
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$24_thumb$$14$$) {
        $current$$24_thumb$$14$$ = $$$$41$$($current$$24_thumb$$14$$);
        $current$$24_thumb$$14$$.is(".ui-draggable") && $current$$24_thumb$$14$$.draggable("disable");
      }, this) : this.$_thumb$.is(".ui-draggable") && this.$_thumb$.draggable("disable");
    }});
  })();
});
