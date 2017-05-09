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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$49$$, $$$$44$$) {
  $oj$$49$$.$__registerWidget$("oj.ojInputNumber", $$$$44$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$49$$.$Validation$.$converterFactory$($oj$$49$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:null, min:null, placeholder:void 0, rawValue:void 0, readOnly:!1, step:1, value:null}, getNodeBySubId:function($locator$$49$$) {
    var $node$$103$$ = this._superApply(arguments), $subId$$52$$;
    $node$$103$$ || ($subId$$52$$ = $locator$$49$$.subId, "oj-inputnumber-up" === $subId$$52$$ && ($node$$103$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $subId$$52$$ && ($node$$103$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $subId$$52$$ && ($node$$103$$ = this.widget().find(".oj-inputnumber-input")[0]));
    return $node$$103$$ || null;
  }, getSubIdByNode:function($node$$104$$) {
    var $subId$$53$$ = null;
    null != $node$$104$$ && ($node$$104$$ === this.widget().find(".oj-inputnumber-up")[0] ? $subId$$53$$ = {subId:"oj-inputnumber-up"} : $node$$104$$ === this.widget().find(".oj-inputnumber-down")[0] ? $subId$$53$$ = {subId:"oj-inputnumber-down"} : $node$$104$$ === this.widget().find(".oj-inputnumber-input")[0] && ($subId$$53$$ = {subId:"oj-inputnumber-input"}));
    return $subId$$53$$ || this._superApply(arguments);
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, stepDown:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !1);
  }, stepUp:function($steps$$2$$) {
    this.$_step$($steps$$2$$, !0);
  }, widget:function() {
    return this.$uiInputNumber$;
  }, $_InitOptions$:function($originalDefaults$$15$$, $constructorOptions$$17$$) {
    var $opts$$31$$ = this.options, $self$$163$$ = this;
    this._superApply(arguments);
    $oj$$49$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"value"}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}, {$attribute$:"min"}, {$attribute$:"max"}, {$attribute$:"step"}], $constructorOptions$$17$$, this, function($initializedOptions$$2$$) {
      for (var $toParse$$1$$ = ["value", "step", "min", "max"], $i$$363$$ = 0;$i$$363$$ < $toParse$$1$$.length;$i$$363$$++) {
        var $opt$$21$$ = $toParse$$1$$[$i$$363$$], $value$$279$$ = $opt$$21$$ in $initializedOptions$$2$$ ? $initializedOptions$$2$$[$opt$$21$$] : $opts$$31$$[$opt$$21$$];
        null != $value$$279$$ && ($initializedOptions$$2$$[$opt$$21$$] = "step" === $opt$$21$$ ? $self$$163$$.$_parseStep$($value$$279$$) : $self$$163$$.$_parse$($opt$$21$$, $value$$279$$));
      }
    });
    if (void 0 === $opts$$31$$.value) {
      throw Error("ojInputNumber has no value");
    }
    if (null != $opts$$31$$.min && null != $opts$$31$$.max && $opts$$31$$.max < $opts$$31$$.min) {
      throw Error("ojInputNumber's max must not be less than min");
    }
  }, _ComponentCreate:function() {
    var $node$$105$$ = this.element;
    this._super();
    this.$_draw$();
    $node$$105$$.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {};
    this.$_setup$();
    this._on(this.$_events$);
    this._focusable(this.$uiInputNumber$);
    this.$_activeable$(this.$uiInputNumber$);
  }, $_AfterSetOption$:function($option$$34$$, $previous$$1$$, $flags$$41$$) {
    this._superApply(arguments);
    switch($option$$34$$) {
      case "min":
      ;
      case "max":
        this.$_Refresh$($option$$34$$, this.options[$option$$34$$]);
    }
  }, _setOption:function($key$$153$$, $value$$280$$, $flags$$42$$) {
    var $coercedValue$$2$$;
    $coercedValue$$2$$ = "value" === $key$$153$$ || "max" === $key$$153$$ || "min" === $key$$153$$ ? this.$_parse$($key$$153$$, $value$$280$$) : "step" === $key$$153$$ ? this.$_parseStep$($value$$280$$) : $value$$280$$;
    this._super($key$$153$$, $coercedValue$$2$$, $flags$$42$$);
    if ("max" === $key$$153$$ || "min" === $key$$153$$) {
      this.$_createRangeValidator$(), this.$_AfterSetOptionValidators$();
    }
    "disabled" === $key$$153$$ && this.element.prop("disabled", !!$value$$280$$);
    "readOnly" === $key$$153$$ && (this.element.prop("readonly", !!$value$$280$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
  }, _destroy:function() {
    var $ret$$44$$ = this._super();
    this.$upButton$.ojButton("destroy");
    this.$downButton$.ojButton("destroy");
    this.$upButton$.remove();
    this.$downButton$.remove();
    this.$downButton$ = this.$upButton$ = null;
    $oj$$49$$.$DomUtils$.unwrap(this.element, this.$uiInputNumber$);
    clearTimeout(this.$timer$);
    return $ret$$44$$;
  }, $_Refresh$:function($name$$127$$, $value$$281$$, $forceDisplayValueRefresh$$1$$) {
    this._superApply(arguments);
    var $valueMinMax$$ = "value" === $name$$127$$ || "max" === $name$$127$$ || "min" === $name$$127$$, $valueMinMaxDisabled$$ = $valueMinMax$$ || "disabled" === $name$$127$$, $valuenow$$;
    $valueMinMaxDisabled$$ && ($valuenow$$ = this.$_getConvertedDisplayValue$());
    $valueMinMax$$ && this.$_refreshAriaMinMaxValue$($valuenow$$);
    "converter" === $name$$127$$ && this.$_refreshAriaText$($valuenow$$);
    $valueMinMaxDisabled$$ && this.$_updateButtons$($valuenow$$);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$44$$.oj.ojInputNumber.prototype.options.converter;
  }, $_GetImplicitValidators$:function() {
    var $ret$$45$$ = this._superApply(arguments);
    null == this.options.min && null == this.options.max || this.$_createRangeValidator$();
    return $$$$44$$.extend(this.$_inputNumberDefaultValidators$, $ret$$45$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-inputnumber";
  }, $_events$:{input:function($event$$502$$) {
    this.$_SetRawValue$(this.element.val(), $event$$502$$);
  }, keydown:function($event$$503$$) {
    $event$$503$$.keyCode === $$$$44$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$503$$), $event$$503$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$503$$) && $event$$503$$.preventDefault();
  }, keyup:function($event$$504$$) {
    this.$_stop$($event$$504$$);
  }, focus:function() {
    this.$previous$ = this.element.val();
  }, blur:function($event$$505$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$505$$);
  }, "mousedown .oj-inputnumber-button":function($event$$506$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.$previous$ = $previous$$2$$, this._delay(function() {
        this.$previous$ = $previous$$2$$;
      }));
    }
    var $previous$$2$$;
    $previous$$2$$ = this.element[0] === this.document[0].activeElement ? this.$previous$ : this.element.val();
    $event$$506$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this);
    });
    this.$_start$();
    this.$_repeat$(null, $$$$44$$($event$$506$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$506$$);
  }, "mouseup .oj-inputnumber-button":function($event$$507$$) {
    this.$_stop$($event$$507$$);
  }, "mouseenter .oj-inputnumber-button":function($event$$508$$) {
    $$$$44$$($event$$508$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$44$$($event$$508$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$508$$));
  }, "mouseleave .oj-inputnumber-button":function($event$$509$$) {
    this.$_stop$($event$$509$$);
  }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_setup$:function() {
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$), $valuenow$$1$$ = this.$_getConvertedDisplayValue$();
    this.$upButton$.ojButton({label:$incrementString$$});
    this.$downButton$.ojButton({label:$decrementString$$});
    this.$_refreshAriaMinMaxValue$($valuenow$$1$$);
    this.$_updateButtons$($valuenow$$1$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_refreshStateTheming$("readOnly", this.options.readOnly);
    this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
  }, $_createOjButton$:function() {
    this.$upButton$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});
    this.$downButton$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});
  }, $_draw$:function() {
    var $element$$141$$ = this.element, $uiInputNumber$$ = this.$uiInputNumber$ = $element$$141$$.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
    this.saveType = $element$$141$$.prop("type");
    $element$$141$$.attr("type", "text");
    $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
    this.$_createOjButton$();
  }, $_keydown$:function($event$$510$$) {
    var $keyCode$$19$$ = $$$$44$$.ui.keyCode;
    switch($event$$510$$.keyCode) {
      case $keyCode$$19$$.UP:
        return this.$_repeat$(null, 1, $event$$510$$), !0;
      case $keyCode$$19$$.DOWN:
        return this.$_repeat$(null, -1, $event$$510$$), !0;
    }
    return!1;
  }, $_uiInputNumberHtml$:function() {
    return "\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e";
  }, $_buttonHtml$:function() {
    return "\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e";
  }, $_start$:function() {
    return this.$spinning$ = !0;
  }, $_repeat$:function($i$$364$$, $steps$$3$$, $event$$511$$) {
    $i$$364$$ = $i$$364$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$3$$, $event$$511$$);
    }, $i$$364$$);
    this.$_spin$($steps$$3$$ * this.options.step, $event$$511$$);
  }, $_spin$:function($step$$3$$, $event$$512$$) {
    var $value$$282$$ = this.$_getConvertedDisplayValue$(), $value$$282$$ = this.$_adjustValue$($value$$282$$, $step$$3$$);
    this.$_SetValue$($value$$282$$, $event$$512$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
  }, $_precision$:function() {
    var $opts$$32_precision$$1$$ = this.options, $minOpt$$ = $opts$$32_precision$$1$$.min, $opts$$32_precision$$1$$ = this.$_precisionOf$($opts$$32_precision$$1$$.step);
    null != $minOpt$$ && ($opts$$32_precision$$1$$ = Math.max($opts$$32_precision$$1$$, this.$_precisionOf$($minOpt$$)));
    return $opts$$32_precision$$1$$;
  }, $_precisionOf$:function($num$$9_str$$19$$) {
    $num$$9_str$$19$$ = $num$$9_str$$19$$.toString();
    var $decimal$$ = $num$$9_str$$19$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$19$$.length - $decimal$$ - 1;
  }, $_adjustValue$:function($value$$283$$, $step$$4$$) {
    var $aboveMin_newValue$$23$$, $stepBase$$, $options$$318_precision$$2$$ = this.options, $minOpt$$1_validMax$$ = $options$$318_precision$$2$$.min, $stepOpt$$ = $options$$318_precision$$2$$.step, $maxOpt$$ = $options$$318_precision$$2$$.max, $options$$318_precision$$2$$ = this.$_precision$();
    $stepBase$$ = null != $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : 0;
    $aboveMin_newValue$$23$$ = $value$$283$$ - $stepBase$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$23$$ / $stepOpt$$) * $stepOpt$$, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($options$$318_precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$23$$ ? ($aboveMin_newValue$$23$$ = 0 > $step$$4$$ ? Math.ceil($aboveMin_newValue$$23$$ / $stepOpt$$) * $stepOpt$$ : Math.floor($aboveMin_newValue$$23$$ / $stepOpt$$) * $stepOpt$$, $aboveMin_newValue$$23$$ = $stepBase$$ + $aboveMin_newValue$$23$$ + $step$$4$$) : $aboveMin_newValue$$23$$ = $value$$283$$ + $step$$4$$;
    $aboveMin_newValue$$23$$ = parseFloat($aboveMin_newValue$$23$$.toFixed($options$$318_precision$$2$$));
    return null != $minOpt$$1_validMax$$ && $aboveMin_newValue$$23$$ < $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : null != $maxOpt$$ && $aboveMin_newValue$$23$$ > $maxOpt$$ ? ($minOpt$$1_validMax$$ = Math.floor(($maxOpt$$ - $stepBase$$) / $stepOpt$$) * $stepOpt$$ + $stepBase$$, $minOpt$$1_validMax$$ = parseFloat($minOpt$$1_validMax$$.toFixed($options$$318_precision$$2$$))) : $aboveMin_newValue$$23$$;
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
  }, $_updateButtons$:function($valuenow$$2$$) {
    var $options$$319$$ = this.options, $minOpt$$2$$ = $options$$319$$.min, $maxOpt$$1$$ = $options$$319$$.max;
    if (this.$uiInputNumber$) {
      var $downButton$$ = this.$downButton$, $upButton$$ = this.$upButton$;
      $options$$319$$.disabled || void 0 === $valuenow$$2$$ ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $maxOpt$$1$$ && $valuenow$$2$$ >= $maxOpt$$1$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $minOpt$$2$$ && $valuenow$$2$$ <= $minOpt$$2$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"));
    }
  }, $_getConvertedDisplayValue$:function() {
    var $value$$284$$, $displayValue$$12$$;
    try {
      $displayValue$$12$$ = this.$_GetDisplayValue$() || 0, $value$$284$$ = this.$_parseValue$($displayValue$$12$$);
    } catch ($e$$98$$) {
      $value$$284$$ = void 0;
    }
    return $value$$284$$;
  }, $_blurEnterSetValue$:function($event$$514$$) {
    var $val$$61$$ = this.element.val();
    this.$_stop$();
    var $valuenow$$3$$ = this.$_getConvertedDisplayValue$();
    this.$_refreshAriaMinMaxValue$($valuenow$$3$$);
    this.$_updateButtons$($valuenow$$3$$);
    this.$_SetValue$($val$$61$$, $event$$514$$);
  }, $_createRangeValidator$:function() {
    var $hint$$8_options$$320_translations$$17$$ = this.options, $minOpt$$3_numberRangeOptions$$ = $hint$$8_options$$320_translations$$17$$.min, $maxOpt$$2$$ = $hint$$8_options$$320_translations$$17$$.max, $messageSummary$$1_reqTrans$$1$$ = ($hint$$8_options$$320_translations$$17$$ = $hint$$8_options$$320_translations$$17$$.translations) ? $hint$$8_options$$320_translations$$17$$.numberRange || {} : {}, $hintMin$$, $hintMax$$, $hintInRange$$3$$, $messageDetailRangeOverflow$$2$$, $messageDetailRangeUnderflow$$2$$, 
    $messageSummaryRangeOverflow$$2$$, $messageSummaryRangeUnderflow$$2$$, $hint$$8_options$$320_translations$$17$$ = $messageSummary$$1_reqTrans$$1$$.hint || {}, $messageDetail$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageDetail || {}, $messageSummary$$1_reqTrans$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageSummary || {};
    null !== $hint$$8_options$$320_translations$$17$$ && ($hintMin$$ = $hint$$8_options$$320_translations$$17$$.min || null, $hintMax$$ = $hint$$8_options$$320_translations$$17$$.max || null, $hintInRange$$3$$ = $hint$$8_options$$320_translations$$17$$.inRange || null);
    null !== $messageDetail$$1$$ && ($messageDetailRangeOverflow$$2$$ = $messageDetail$$1$$.rangeOverflow || null, $messageDetailRangeUnderflow$$2$$ = $messageDetail$$1$$.rangeUnderflow || null);
    null !== $messageSummary$$1_reqTrans$$1$$ && ($messageSummaryRangeOverflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeOverflow || null, $messageSummaryRangeUnderflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeUnderflow || null);
    $minOpt$$3_numberRangeOptions$$ = {min:null != $minOpt$$3_numberRangeOptions$$ ? $minOpt$$3_numberRangeOptions$$ : void 0, max:null != $maxOpt$$2$$ ? $maxOpt$$2$$ : void 0, hint:{min:$hintMin$$ || null, max:$hintMax$$ || null, inRange:$hintInRange$$3$$ || null}, messageDetail:{rangeOverflow:$messageDetailRangeOverflow$$2$$ || null, rangeUnderflow:$messageDetailRangeUnderflow$$2$$ || null}, messageSummary:{rangeOverflow:$messageSummaryRangeOverflow$$2$$ || null, rangeUnderflow:$messageSummaryRangeUnderflow$$2$$ || 
    null}, converter:this.$_GetConverter$()};
    this.$_inputNumberDefaultValidators$[$oj$$49$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$49$$.$Validation$.$validatorFactory$($oj$$49$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($minOpt$$3_numberRangeOptions$$);
  }, $_parse$:function($option$$35$$, $val$$62$$) {
    var $returnValue$$8$$;
    $returnValue$$8$$ = null !== $val$$62$$ ? +$val$$62$$ : $val$$62$$;
    if (isNaN($returnValue$$8$$)) {
      throw Error("ojInputNumber's " + $option$$35$$ + " option is not a number");
    }
    return $returnValue$$8$$;
  }, $_parseStep$:function($parsedStep$$1_val$$63$$) {
    if (null === $parsedStep$$1_val$$63$$) {
      return 1;
    }
    $parsedStep$$1_val$$63$$ = this.$_parse$("step", $parsedStep$$1_val$$63$$);
    if (0 >= $parsedStep$$1_val$$63$$) {
      throw Error("Invalid step for ojInputNumber; step must be \x3e 0");
    }
    if (null === $parsedStep$$1_val$$63$$ || 0 >= $parsedStep$$1_val$$63$$) {
      $parsedStep$$1_val$$63$$ = 1;
    }
    return $parsedStep$$1_val$$63$$;
  }, $_refreshStateTheming$:function($option$$36$$, $value$$285$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$36$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$36$$], !!$value$$285$$);
  }, $_refreshRoleSpinbutton$:function($option$$37$$, $readOnly$$2$$) {
    $readOnly$$2$$ ? this.element.removeAttr("role") : this.element.attr("role", "spinbutton");
  }, $_refreshAriaMinMaxValue$:function($valuenow$$4$$) {
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$4$$});
    this.$_refreshAriaText$($valuenow$$4$$);
  }, $_refreshAriaText$:function($valuenow$$5$$) {
    var $element$$143$$ = this.element, $valuetext$$ = $element$$143$$.val();
    this.$_CompareOptionValues$("value", "" + $valuenow$$5$$, $valuetext$$) || $element$$143$$.attr({"aria-valuetext":$valuetext$$});
  }, $_step$:function($steps$$4$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$4$$ || 1) * this.options.step) : this.$_spin$(($steps$$4$$ || 1) * -this.options.step);
    this.$_stop$();
  }});
});
