/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojL10n!ojtranslations/nls/localeElements", "ojs/ojmessaging"], function($oj$$6$$, $$$$6$$, $ojld$$1$$) {
  $oj$$6$$.$LocaleData$ = {};
  $goog$exportPath_$$("LocaleData", $oj$$6$$.$LocaleData$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$setBundle$ = function $$oj$$6$$$$LocaleData$$$setBundle$$($bundle$$3$$) {
    $oj$$6$$.$LocaleData$.$_bundle$ = $bundle$$3$$;
  };
  $goog$exportPath_$$("LocaleData.setBundle", $oj$$6$$.$LocaleData$.$setBundle$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$ = function $$oj$$6$$$$LocaleData$$$getFirstDayOfWeek$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("firstDay");
  };
  $goog$exportPath_$$("LocaleData.getFirstDayOfWeek", $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendStart$ = function $$oj$$6$$$$LocaleData$$$getWeekendStart$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendStart");
  };
  $goog$exportPath_$$("LocaleData.getWeekendStart", $oj$$6$$.$LocaleData$.$getWeekendStart$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendEnd$ = function $$oj$$6$$$$LocaleData$$$getWeekendEnd$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendEnd");
  };
  $goog$exportPath_$$("LocaleData.getWeekendEnd", $oj$$6$$.$LocaleData$.$getWeekendEnd$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getDayNames$ = function $$oj$$6$$$$LocaleData$$$getDayNames$$($days_type$$69$$) {
    if (null == $days_type$$69$$ || "abbreviated" !== $days_type$$69$$ && "narrow" !== $days_type$$69$$) {
      $days_type$$69$$ = "wide";
    }
    $days_type$$69$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().days["stand-alone"][$days_type$$69$$];
    return[$days_type$$69$$.sun, $days_type$$69$$.mon, $days_type$$69$$.tue, $days_type$$69$$.wed, $days_type$$69$$.thu, $days_type$$69$$.fri, $days_type$$69$$.sat];
  };
  $goog$exportPath_$$("LocaleData.getDayNames", $oj$$6$$.$LocaleData$.$getDayNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getMonthNames$ = function $$oj$$6$$$$LocaleData$$$getMonthNames$$($months_type$$70$$) {
    if (null == $months_type$$70$$ || "abbreviated" !== $months_type$$70$$ && "narrow" !== $months_type$$70$$) {
      $months_type$$70$$ = "wide";
    }
    $months_type$$70$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().months["stand-alone"][$months_type$$70$$];
    return[$months_type$$70$$["1"], $months_type$$70$$["2"], $months_type$$70$$["3"], $months_type$$70$$["4"], $months_type$$70$$["5"], $months_type$$70$$["6"], $months_type$$70$$["7"], $months_type$$70$$["8"], $months_type$$70$$["9"], $months_type$$70$$["10"], $months_type$$70$$["11"], $months_type$$70$$["12"]];
  };
  $goog$exportPath_$$("LocaleData.getMonthNames", $oj$$6$$.$LocaleData$.$getMonthNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$isMonthPriorToYear$ = function $$oj$$6$$$$LocaleData$$$isMonthPriorToYear$$() {
    var $longDateFormat_yearIndex$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().dateFormats["long"].toUpperCase(), $monthIndex$$ = $longDateFormat_yearIndex$$.indexOf("M"), $longDateFormat_yearIndex$$ = $longDateFormat_yearIndex$$.indexOf("Y");
    return $monthIndex$$ < $longDateFormat_yearIndex$$;
  };
  $goog$exportPath_$$("LocaleData.isMonthPriorToYear", $oj$$6$$.$LocaleData$.$isMonthPriorToYear$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$_getWeekData$ = function $$oj$$6$$$$LocaleData$$$_getWeekData$$($data$$51_key$$39$$) {
    var $b$$55$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $region_val$$22$$ = $oj$$6$$.$LocaleData$.$_getRegion$() || "001";
    $data$$51_key$$39$$ = $b$$55$$.supplemental.weekData[$data$$51_key$$39$$];
    $region_val$$22$$ = $data$$51_key$$39$$[$region_val$$22$$];
    void 0 === $region_val$$22$$ && ($region_val$$22$$ = $data$$51_key$$39$$["001"]);
    return $region_val$$22$$;
  };
  $oj$$6$$.$LocaleData$.$_getCalendarData$ = function $$oj$$6$$$$LocaleData$$$_getCalendarData$$() {
    var $main$$ = $oj$$6$$.$LocaleData$.$__getBundle$().main, $data$$52$$, $p$$1$$;
    for ($p$$1$$ in $main$$) {
      if ($main$$.hasOwnProperty($p$$1$$)) {
        $data$$52$$ = $main$$[$p$$1$$];
        break;
      }
    }
    return $data$$52$$.dates.calendars.gregorian;
  };
  $oj$$6$$.$LocaleData$.$_getRegion$ = function $$oj$$6$$$$LocaleData$$$_getRegion$$() {
    var $locale$$1_tokens$$3$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$1_tokens$$3$$ && ($locale$$1_tokens$$3$$ = $locale$$1_tokens$$3$$.toUpperCase().split(/-|_/), 2 <= $locale$$1_tokens$$3$$.length)) {
      var $tag$$ = $locale$$1_tokens$$3$$[1];
      if (4 == $tag$$.length) {
        if (3 <= $locale$$1_tokens$$3$$.length) {
          return $locale$$1_tokens$$3$$[2];
        }
      } else {
        return $tag$$;
      }
    }
    return null;
  };
  $oj$$6$$.$LocaleData$.$__getBundle$ = function $$oj$$6$$$$LocaleData$$$__getBundle$$() {
    var $b$$57$$ = $oj$$6$$.$LocaleData$.$_bundle$;
    return $b$$57$$ ? $b$$57$$ : $oj$$6$$.$__isAmdLoaderPresent$() ? ($oj$$6$$.$Assert$.assert(void 0 !== $ojld$$1$$, "LocaleElements module must be loaded"), $ojld$$1$$) : {};
  };
  $oj$$6$$.$LocaleData$.$__updateBundle$ = function $$oj$$6$$$$LocaleData$$$__updateBundle$$($bundle$$4$$) {
    $ojld$$1$$ = $bundle$$4$$;
  };
  $oj$$6$$.$Validation$ = {};
  $goog$exportPath_$$("Validation", $oj$$6$$.$Validation$, $oj$$6$$);
  $oj$$6$$.$Validation$.$_converterFactories$ = {};
  $oj$$6$$.$Validation$.$_validatorFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultConverterFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultValidatorFactories$ = {};
  $oj$$6$$.$Validation$.$_CONTRACTS$ = {converter:{name:"oj.ConverterFactory", type:$oj$$6$$.$ConverterFactory$}, validator:{name:"oj.ValidatorFactory", type:$oj$$6$$.$ValidatorFactory$}};
  $oj$$6$$.$Validation$.$converterFactory$ = function $$oj$$6$$$$Validation$$$converterFactory$$($type$$71$$, $instance$$6$$) {
    var $retValue$$;
    $type$$71$$ && !$instance$$6$$ ? $retValue$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$71$$, $oj$$6$$.$Validation$.$_converterFactories$) : $type$$71$$ && $instance$$6$$ && ($retValue$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$71$$, $instance$$6$$, $oj$$6$$.$Validation$.$_converterFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.converter));
    return $retValue$$;
  };
  $goog$exportPath_$$("Validation.converterFactory", $oj$$6$$.$Validation$.$converterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$validatorFactory$ = function $$oj$$6$$$$Validation$$$validatorFactory$$($type$$72$$, $instance$$7$$) {
    var $retValue$$1$$;
    $type$$72$$ && !$instance$$7$$ ? $retValue$$1$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$72$$, $oj$$6$$.$Validation$.$_validatorFactories$) : $type$$72$$ && $instance$$7$$ && ($retValue$$1$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$72$$, $instance$$7$$, $oj$$6$$.$Validation$.$_validatorFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.validator));
    return $retValue$$1$$;
  };
  $goog$exportPath_$$("Validation.validatorFactory", $oj$$6$$.$Validation$.$validatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$getDefaultConverterFactory$$($type$$73$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$73$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultConverterFactory", $oj$$6$$.$Validation$.$getDefaultConverterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$getDefaultValidatorFactory$$($type$$74$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$74$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultValidatorFactory", $oj$$6$$.$Validation$.$getDefaultValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultConverterFactory$$($name$$73$$, $instance$$8$$) {
    var $contractDef$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.converter;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$73$$, $instance$$8$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$, $contractDef$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$73$$, $instance$$8$$, $oj$$6$$.$Validation$.$_converterFactories$, $contractDef$$);
  };
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultValidatorFactory$$($name$$74$$, $instance$$9$$) {
    var $contractDef$$1$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.validator;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$74$$, $instance$$9$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$, $contractDef$$1$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$74$$, $instance$$9$$, $oj$$6$$.$Validation$.$_validatorFactories$, $contractDef$$1$$);
  };
  $oj$$6$$.$Validation$.$_doImplementsCheck$ = function $$oj$$6$$$$Validation$$$_doImplementsCheck$$($instance$$10$$, $type$$75$$, $typeName$$3$$) {
    if ($type$$75$$ && !$oj$$6$$.$Validation$.$_quacksLike$($instance$$10$$, $type$$75$$)) {
      throw Error("Factory instance does not implement the methods expected by the factory of type " + $typeName$$3$$);
    }
  };
  $oj$$6$$.$Validation$.$_getFactory$ = function $$oj$$6$$$$Validation$$$_getFactory$$($name$$75$$, $factories$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$75$$);
    var $cachedInstance$$ = null;
    $name$$75$$ && ($name$$75$$ = $name$$75$$.toLowerCase(), $cachedInstance$$ = ($factories$$[$name$$75$$] || {}).instance || null);
    return $cachedInstance$$;
  };
  $oj$$6$$.$Validation$.$_quacksLike$ = function $$oj$$6$$$$Validation$$$_quacksLike$$($thingie$$, $duck$$) {
    var $valid$$6$$ = !0, $property$$12$$;
    $oj$$6$$.$Assert$.$assertObject$($thingie$$);
    $oj$$6$$.$Assert$.$assertObject$($duck$$);
    for ($property$$12$$ in $duck$$) {
      if ($duck$$.hasOwnProperty($property$$12$$) && "function" === typeof $duck$$[$property$$12$$] && !$thingie$$[$property$$12$$] && "function" !== typeof $thingie$$[$property$$12$$]) {
        $valid$$6$$ = !1;
        break;
      }
    }
    return $valid$$6$$;
  };
  $oj$$6$$.$Validation$.$_registerFactory$ = function $$oj$$6$$$$Validation$$$_registerFactory$$($name$$76$$, $instance$$11$$, $factories$$1$$, $contractDef$$2$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$76$$);
    $oj$$6$$.$Assert$.$assertObject$($instance$$11$$);
    if ($name$$76$$) {
      var $props$$6$$ = {};
      $props$$6$$.instance = $instance$$11$$;
      $oj$$6$$.$Validation$.$_doImplementsCheck$($instance$$11$$, $contractDef$$2$$.type, $contractDef$$2$$.name);
      $factories$$1$$[$name$$76$$.toLowerCase()] = $props$$6$$;
    }
  };
  $oj$$6$$.$ConverterFactory$ = {CONVERTER_TYPE_NUMBER:"number", CONVERTER_TYPE_DATETIME:"datetime", createConverter:function $$oj$$6$$$$ConverterFactory$$createConverter$() {
  }};
  $goog$exportPath_$$("ConverterFactory", $oj$$6$$.$ConverterFactory$, $oj$$6$$);
  $oj$$6$$.$ValidatorFactory$ = {VALIDATOR_TYPE_REQUIRED:"required", VALIDATOR_TYPE_REGEXP:"regexp", VALIDATOR_TYPE_NUMBERRANGE:"numberRange", VALIDATOR_TYPE_LENGTH:"length", VALIDATOR_TYPE_DATETIMERANGE:"dateTimeRange", VALIDATOR_TYPE_DATERESTRICTION:"dateRestriction", createValidator:function $$oj$$6$$$$ValidatorFactory$$createValidator$() {
  }};
  $goog$exportPath_$$("ValidatorFactory", $oj$$6$$.$ValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Converter$ = function $$oj$$6$$$$Converter$$($options$$138$$) {
    this.Init($options$$138$$);
  };
  $goog$exportPath_$$("Converter", $oj$$6$$.$Converter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Converter$, $oj$$6$$.$Object$, "oj.Converter");
  $oj$$6$$.$Converter$.prototype.Init = function $$oj$$6$$$$Converter$$$Init$($options$$139$$) {
    $oj$$6$$.$Converter$.$superclass$.Init.call(this);
    this.$_options$ = $options$$139$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.Init", {Init:$oj$$6$$.$Converter$.prototype.Init});
  $oj$$6$$.$Converter$.prototype.$getHint$ = function $$oj$$6$$$$Converter$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getHint", {$getHint$:$oj$$6$$.$Converter$.prototype.$getHint$});
  $oj$$6$$.$Converter$.prototype.$getOptions$ = function $$oj$$6$$$$Converter$$$$getOptions$$() {
    return this.$_options$ || {};
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getOptions", {$getOptions$:$oj$$6$$.$Converter$.prototype.$getOptions$});
  $oj$$6$$.$Converter$.prototype.parse = function $$oj$$6$$$$Converter$$$parse$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.parse", {parse:$oj$$6$$.$Converter$.prototype.parse});
  $oj$$6$$.$Converter$.prototype.format = function $$oj$$6$$$$Converter$$$format$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.format", {format:$oj$$6$$.$Converter$.prototype.format});
  $oj$$6$$.$Converter$.prototype.resolvedOptions = function $$oj$$6$$$$Converter$$$resolvedOptions$() {
    var $resolved$$ = {};
    $$$$6$$.extend($resolved$$, this.$_options$);
    return $resolved$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$Converter$.prototype.resolvedOptions});
  $oj$$6$$.$ConverterError$ = function $$oj$$6$$$$ConverterError$$($summary$$8$$, $detail$$11$$) {
    var $message$$30$$ = new $oj$$6$$.$Message$($summary$$8$$, $detail$$11$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$30$$);
  };
  $goog$exportPath_$$("ConverterError", $oj$$6$$.$ConverterError$, $oj$$6$$);
  $oj$$6$$.$ConverterError$.prototype = Error();
  $oj$$6$$.$ConverterError$.prototype.Init = function $$oj$$6$$$$ConverterError$$$Init$($message$$31$$) {
    var $detail$$12$$ = $message$$31$$.detail, $summary$$9$$ = $message$$31$$.summary;
    this.$_message$ = $message$$31$$;
    this.name = "Converter Error";
    this.message = $detail$$12$$ || $summary$$9$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.Init", {Init:$oj$$6$$.$ConverterError$.prototype.Init});
  $oj$$6$$.$ConverterError$.prototype.$getMessage$ = function $$oj$$6$$$$ConverterError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ConverterError$.prototype.$getMessage$});
  $oj$$6$$.$NumberConverter$ = function $$oj$$6$$$$NumberConverter$$() {
    this.Init();
  };
  $goog$exportPath_$$("NumberConverter", $oj$$6$$.$NumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberConverter$, $oj$$6$$.$Converter$, "oj.NumberConverter");
  $oj$$6$$.$NumberConverter$.prototype.Init = function $$oj$$6$$$$NumberConverter$$$Init$($options$$140$$) {
    $oj$$6$$.$NumberConverter$.$superclass$.Init.call(this, $options$$140$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.Init", {Init:$oj$$6$$.$NumberConverter$.prototype.Init});
  $oj$$6$$.$NumberConverter$.prototype.format = function $$oj$$6$$$$NumberConverter$$$format$($value$$101$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.format.call(this, $value$$101$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.format", {format:$oj$$6$$.$NumberConverter$.prototype.format});
  $oj$$6$$.$NumberConverter$.prototype.parse = function $$oj$$6$$$$NumberConverter$$$parse$($value$$102$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.parse.call(this, $value$$102$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.parse", {parse:$oj$$6$$.$NumberConverter$.prototype.parse});
  $oj$$6$$.$DateTimeConverter$ = function $$oj$$6$$$$DateTimeConverter$$($options$$141$$) {
    this.Init($options$$141$$);
  };
  $goog$exportPath_$$("DateTimeConverter", $oj$$6$$.$DateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeConverter$, $oj$$6$$.$Converter$, "oj.DateTimeConverter");
  $oj$$6$$.$DateTimeConverter$.prototype.Init = function $$oj$$6$$$$DateTimeConverter$$$Init$($options$$142$$) {
    $oj$$6$$.$DateTimeConverter$.$superclass$.Init.call(this, $options$$142$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.Init", {Init:$oj$$6$$.$DateTimeConverter$.prototype.Init});
  $oj$$6$$.$DateTimeConverter$.prototype.format = function $$oj$$6$$$$DateTimeConverter$$$format$($value$$103$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.format.call(this, $value$$103$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.format", {format:$oj$$6$$.$DateTimeConverter$.prototype.format});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInAMPMSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMinuteSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMilliSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isYearSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMonthSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDayNameSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$calculateWeek$ = function $$oj$$6$$$$DateTimeConverter$$$$calculateWeek$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.calculateWeek", {$calculateWeek$:$oj$$6$$.$DateTimeConverter$.prototype.$calculateWeek$});
  $oj$$6$$.$DateTimeConverter$.prototype.parse = function $$oj$$6$$$$DateTimeConverter$$$parse$($value$$104$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.parse.call(this, $value$$104$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.parse", {parse:$oj$$6$$.$DateTimeConverter$.prototype.parse});
  $oj$$6$$.$Validator$ = function $$oj$$6$$$$Validator$$() {
    this.Init();
  };
  $goog$exportPath_$$("Validator", $oj$$6$$.$Validator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Validator$, $oj$$6$$.$Object$, "oj.Validator");
  $oj$$6$$.$Validator$.prototype.Init = function $$oj$$6$$$$Validator$$$Init$() {
    $oj$$6$$.$Validator$.$superclass$.Init.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.Init", {Init:$oj$$6$$.$Validator$.prototype.Init});
  $oj$$6$$.$Validator$.prototype.validate = function $$oj$$6$$$$Validator$$$validate$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.validate", {validate:$oj$$6$$.$Validator$.prototype.validate});
  $oj$$6$$.$Validator$.prototype.$getHint$ = function $$oj$$6$$$$Validator$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.getHint", {$getHint$:$oj$$6$$.$Validator$.prototype.$getHint$});
  $oj$$6$$.$ValidatorError$ = function $$oj$$6$$$$ValidatorError$$($summary$$10$$, $detail$$13$$) {
    var $message$$32$$ = new $oj$$6$$.$Message$($summary$$10$$, $detail$$13$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$32$$);
  };
  $goog$exportPath_$$("ValidatorError", $oj$$6$$.$ValidatorError$, $oj$$6$$);
  $oj$$6$$.$ValidatorError$.prototype = Error();
  $oj$$6$$.$ValidatorError$.prototype.Init = function $$oj$$6$$$$ValidatorError$$$Init$($message$$33$$) {
    var $detail$$14$$ = $message$$33$$.detail, $summary$$11$$ = $message$$33$$.summary;
    this.$_message$ = $message$$33$$;
    this.name = "Validator Error";
    this.message = $detail$$14$$ || $summary$$11$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.Init", {Init:$oj$$6$$.$ValidatorError$.prototype.Init});
  $oj$$6$$.$ValidatorError$.prototype.$getMessage$ = function $$oj$$6$$$$ValidatorError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ValidatorError$.prototype.$getMessage$});
  $oj$$6$$.$RequiredValidator$ = function $$oj$$6$$$$RequiredValidator$$($options$$143$$) {
    this.Init($options$$143$$);
  };
  $goog$exportPath_$$("RequiredValidator", $oj$$6$$.$RequiredValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RequiredValidator$, $oj$$6$$.$Validator$, "oj.RequiredValidator");
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.required.detail";
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.required.summary";
  $oj$$6$$.$RequiredValidator$.prototype.Init = function $$oj$$6$$$$RequiredValidator$$$Init$($options$$144$$) {
    $oj$$6$$.$RequiredValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$144$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.Init", {Init:$oj$$6$$.$RequiredValidator$.prototype.Init});
  $oj$$6$$.$RequiredValidator$.prototype.validate = function $$oj$$6$$$$RequiredValidator$$$validate$($localizedSummary_value$$106$$) {
    var $detail$$15_localizedDetail$$, $summary$$12$$, $label$$2_params$$6$$ = {}, $label$$2_params$$6$$ = "";
    if ("number" === typeof $localizedSummary_value$$106$$ && 0 === $localizedSummary_value$$106$$ || $localizedSummary_value$$106$$ && 0 !== $localizedSummary_value$$106$$.length) {
      return!0;
    }
    this.$_options$ && ($detail$$15_localizedDetail$$ = this.$_options$.messageDetail || this.$_options$.message || null, $summary$$12$$ = this.$_options$.messageSummary || null, $label$$2_params$$6$$ = this.$_options$.label || "");
    $label$$2_params$$6$$ = {label:$label$$2_params$$6$$};
    $localizedSummary_value$$106$$ = $summary$$12$$ ? $oj$$6$$.$Translations$.$applyParameters$($summary$$12$$, $label$$2_params$$6$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $label$$2_params$$6$$);
    $detail$$15_localizedDetail$$ = $detail$$15_localizedDetail$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$15_localizedDetail$$, $label$$2_params$$6$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $label$$2_params$$6$$);
    throw new $oj$$6$$.$ValidatorError$($localizedSummary_value$$106$$, $detail$$15_localizedDetail$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.validate", {validate:$oj$$6$$.$RequiredValidator$.prototype.validate});
  $oj$$6$$.$RequiredValidator$.prototype.$getHint$ = function $$oj$$6$$$$RequiredValidator$$$$getHint$$() {
    var $hint$$3$$ = "";
    this.$_options$ && this.$_options$.hint && ($hint$$3$$ = $oj$$6$$.$Translations$.$getTranslatedString$(this.$_options$.hint));
    return $hint$$3$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RequiredValidator$.prototype.$getHint$});
  $oj$$6$$.$RequiredValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RequiredValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$DateRestrictionValidator$ = function _DateRestrictionValidator($options$$145$$) {
    this.Init($options$$145$$);
  };
  $goog$exportPath_$$("DateRestrictionValidator", $oj$$6$$.$DateRestrictionValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateRestrictionValidator$, $oj$$6$$.$Validator$, "oj.DateRestrictionValidator");
  $oj$$6$$.$DateRestrictionValidator$.prototype.Init = function $$oj$$6$$$$DateRestrictionValidator$$$Init$($options$$146$$) {
    $oj$$6$$.$DateRestrictionValidator$.$superclass$.Init.call(this);
    this.$_dayFormatter$ = $options$$146$$.dayFormatter;
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$146$$.converter);
    $options$$146$$ && (this.$_messageSummary$ = $options$$146$$.messageSummary || null, this.$_messageDetail$ = $options$$146$$.messageDetail || null);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.Init", {Init:$oj$$6$$.$DateRestrictionValidator$.prototype.Init});
  $oj$$6$$.$DateRestrictionValidator$.prototype.$_inDisabled$ = function $$oj$$6$$$$DateRestrictionValidator$$$$_inDisabled$$($date$$2_valueDate$$) {
    var $dayFormatter_metaData$$ = this.$_dayFormatter$;
    if ($dayFormatter_metaData$$) {
      var $fullYear$$ = $date$$2_valueDate$$.getFullYear(), $month$$1$$ = $date$$2_valueDate$$.getMonth() + 1;
      $date$$2_valueDate$$ = $date$$2_valueDate$$.getDate();
      return($dayFormatter_metaData$$ = $dayFormatter_metaData$$({fullYear:$fullYear$$, month:$month$$1$$, date:$date$$2_valueDate$$})) && $dayFormatter_metaData$$.disabled;
    }
    return!1;
  };
  $oj$$6$$.$DateRestrictionValidator$.prototype.validate = function $$oj$$6$$$$DateRestrictionValidator$$$validate$($value$$107$$) {
    var $messageSummary_summary$$13$$ = "", $detail$$16_translations$$2$$ = "", $detail$$16_translations$$2$$ = $oj$$6$$.$Translations$, $messageSummary_summary$$13$$ = this.$_messageSummary$, $messageDetail$$ = this.$_messageDetail$, $valueStr$$ = $value$$107$$ ? this.$_converter$.format($value$$107$$) : $value$$107$$, $valueDate$$1$$ = $value$$107$$ ? $oj$$6$$.$IntlConverterUtils$.isoToLocalDate($value$$107$$) : null;
    if (null === $value$$107$$) {
      return $value$$107$$;
    }
    if (this.$_inDisabled$($valueDate$$1$$)) {
      throw $messageSummary_summary$$13$$ = $messageSummary_summary$$13$$ ? $detail$$16_translations$$2$$.$applyParameters$($messageSummary_summary$$13$$, {value:$valueStr$$}) : $detail$$16_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.messageSummary", {value:$valueStr$$}), $detail$$16_translations$$2$$ = $messageDetail$$ ? $detail$$16_translations$$2$$.$applyParameters$($messageDetail$$, {value:$valueStr$$}) : $detail$$16_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.messageDetail", 
      {value:$valueStr$$}), new $oj$$6$$.$ValidatorError$($messageSummary_summary$$13$$, $detail$$16_translations$$2$$);
    }
    return $value$$107$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.validate", {validate:$oj$$6$$.$DateRestrictionValidator$.prototype.validate});
  $oj$$6$$.$DateRestrictionValidator$.prototype.$getHint$ = function $$oj$$6$$$$DateRestrictionValidator$$$$getHint$$() {
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.getHint", {$getHint$:$oj$$6$$.$DateRestrictionValidator$.prototype.$getHint$});
  $oj$$6$$.$DateTimeRangeValidator$ = function _DateTimeRangeValidator($options$$147$$) {
    this.Init($options$$147$$);
  };
  $goog$exportPath_$$("DateTimeRangeValidator", $oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$.$Validator$, "oj.DateTimeRangeValidator");
  $oj$$6$$.$DateTimeRangeValidator$.prototype.Init = function $$oj$$6$$$$DateTimeRangeValidator$$$Init$($options$$148$$) {
    $oj$$6$$.$DateTimeRangeValidator$.$superclass$.Init.call(this);
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$148$$.converter);
    this.$_min$ = $options$$148$$.min || null;
    this.$_max$ = $options$$148$$.max || null;
    $options$$148$$ && (this.$_hint$ = $options$$148$$.hint || {}, this.$_customMessageSummary$ = $options$$148$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$148$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.Init", {Init:$oj$$6$$.$DateTimeRangeValidator$.prototype.Init});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.validate = function $$oj$$6$$$$DateTimeRangeValidator$$$validate$($value$$108$$) {
    var $customMessageSummary_messageSummaryRangeUnderflow$$ = this.$_customMessageSummary$, $customMessageDetail_messageDetailRangeUnderflow$$ = this.$_customMessageDetail$, $messageDetailRangeOverflow$$ = $customMessageDetail_messageDetailRangeUnderflow$$.rangeOverflow, $customMessageDetail_messageDetailRangeUnderflow$$ = $customMessageDetail_messageDetailRangeUnderflow$$.rangeUnderflow, $messageSummaryRangeOverflow$$ = $customMessageSummary_messageSummaryRangeUnderflow$$.rangeOverflow, $customMessageSummary_messageSummaryRangeUnderflow$$ = 
    $customMessageSummary_messageSummaryRangeUnderflow$$.rangeUnderflow, $converterUtils$$ = $oj$$6$$.$IntlConverterUtils$, $min$$1$$ = this.$_min$, $max$$1$$ = this.$_max$, $summary$$14$$ = "", $detail$$17$$ = "", $translations$$3$$ = $oj$$6$$.$Translations$, $params$$7_valStr$$ = null, $valDate$$, $minStr$$, $maxStr$$;
    if (null === $value$$108$$) {
      return $value$$108$$;
    }
    $params$$7_valStr$$ = this.$_converter$.format($value$$108$$);
    $valDate$$ = $converterUtils$$.isoToLocalDate($value$$108$$);
    $min$$1$$ && ($minStr$$ = this.$_converter$ ? this.$_converter$.format($min$$1$$) : $min$$1$$, $min$$1$$ = $converterUtils$$.isoToLocalDate($converterUtils$$._minMaxIsoString($min$$1$$, $value$$108$$)));
    $max$$1$$ && ($maxStr$$ = this.$_converter$ ? this.$_converter$.format($max$$1$$) : $max$$1$$, $max$$1$$ = $converterUtils$$.isoToLocalDate($converterUtils$$._minMaxIsoString($max$$1$$, $value$$108$$)));
    if (null !== $min$$1$$ && null !== $max$$1$$) {
      if ($valDate$$ >= $min$$1$$ && $valDate$$ <= $max$$1$$ || $min$$1$$ > $max$$1$$) {
        return $value$$108$$;
      }
    } else {
      if (null !== $min$$1$$) {
        if ($valDate$$ >= $min$$1$$) {
          return $value$$108$$;
        }
      } else {
        if (null === $max$$1$$ || $valDate$$ <= $max$$1$$) {
          return $value$$108$$;
        }
      }
    }
    null !== $max$$1$$ && $valDate$$ > $max$$1$$ ? ($params$$7_valStr$$ = {value:$params$$7_valStr$$, max:$maxStr$$}, $summary$$14$$ = $messageSummaryRangeOverflow$$ ? $messageSummaryRangeOverflow$$ : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageSummary.rangeOverflow"), $detail$$17$$ = $messageDetailRangeOverflow$$ ? $translations$$3$$.$applyParameters$($messageDetailRangeOverflow$$, $params$$7_valStr$$) : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageDetail.rangeOverflow", 
    $params$$7_valStr$$)) : null !== $min$$1$$ && $valDate$$ < $min$$1$$ && ($params$$7_valStr$$ = {value:$params$$7_valStr$$, min:$minStr$$}, $summary$$14$$ = $customMessageSummary_messageSummaryRangeUnderflow$$ ? $customMessageSummary_messageSummaryRangeUnderflow$$ : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageSummary.rangeUnderflow"), $detail$$17$$ = $customMessageDetail_messageDetailRangeUnderflow$$ ? $translations$$3$$.$applyParameters$($customMessageDetail_messageDetailRangeUnderflow$$, 
    $params$$7_valStr$$) : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageDetail.rangeUnderflow", $params$$7_valStr$$));
    throw new $oj$$6$$.$ValidatorError$($summary$$14$$, $detail$$17$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.validate", {validate:$oj$$6$$.$DateTimeRangeValidator$.prototype.validate});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$DateTimeRangeValidator$$$$getHint$$() {
    var $hint$$4$$ = null, $hintMaximum_hints$$4$$ = this.$_hint$, $hintInRange$$ = $hintMaximum_hints$$4$$.inRange, $hintMinimum$$ = $hintMaximum_hints$$4$$.min, $hintMaximum_hints$$4$$ = $hintMaximum_hints$$4$$.max, $min$$2$$ = this.$_min$, $max$$2$$ = this.$_max$, $minStr$$1$$ = $min$$2$$ && this.$_converter$ ? this.$_converter$.format($min$$2$$) : $min$$2$$, $maxStr$$1$$ = $max$$2$$ && this.$_converter$ ? this.$_converter$.format($max$$2$$) : $max$$2$$, $params$$8$$ = null, $translations$$4$$ = 
    $oj$$6$$.$Translations$;
    null !== $min$$2$$ && null !== $max$$2$$ ? ($params$$8$$ = {min:$minStr$$1$$, max:$maxStr$$1$$}, $hint$$4$$ = $hintInRange$$ ? $translations$$4$$.$applyParameters$($hintInRange$$, $params$$8$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.inRange", $params$$8$$)) : null !== $min$$2$$ ? ($params$$8$$ = {min:$minStr$$1$$}, $hint$$4$$ = $hintMinimum$$ ? $translations$$4$$.$applyParameters$($hintMinimum$$, $params$$8$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.min", 
    $params$$8$$)) : null !== $max$$2$$ && ($params$$8$$ = {max:$maxStr$$1$$}, $hint$$4$$ = $hintMaximum_hints$$4$$ ? $translations$$4$$.$applyParameters$($hintMaximum_hints$$4$$, $params$$8$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.max", $params$$8$$));
    return $hint$$4$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$NumberConverterFactory$ = function() {
    return{createConverter:function($options$$150$$) {
      return new $oj$$6$$.$IntlNumberConverter$($options$$150$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER, $oj$$6$$.$NumberConverterFactory$);
  $oj$$6$$.$DateTimeConverterFactory$ = function() {
    return{createConverter:function($options$$152$$) {
      return new $oj$$6$$.$IntlDateTimeConverter$($options$$152$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME, $oj$$6$$.$DateTimeConverterFactory$);
  $oj$$6$$.$RequiredValidatorFactory$ = function() {
    return{createValidator:function($options$$154$$) {
      return new $oj$$6$$.$RequiredValidator$($options$$154$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED, $oj$$6$$.$RequiredValidatorFactory$);
  $oj$$6$$.$RegExpValidatorFactory$ = function() {
    return{createValidator:function($options$$156$$) {
      return new $oj$$6$$.$RegExpValidator$($options$$156$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP, $oj$$6$$.$RegExpValidatorFactory$);
  $oj$$6$$.$DateTimeRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$158$$) {
      return new $oj$$6$$.$DateTimeRangeValidator$($options$$158$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE, $oj$$6$$.$DateTimeRangeValidatorFactory$);
  $oj$$6$$.$DateRestrictionValidatorFactory$ = function() {
    return{createValidator:function($options$$160$$) {
      return new $oj$$6$$.$DateRestrictionValidator$($options$$160$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION, $oj$$6$$.$DateRestrictionValidatorFactory$);
  $oj$$6$$.$NumberRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$162$$) {
      return new $oj$$6$$.$NumberRangeValidator$($options$$162$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE, $oj$$6$$.$NumberRangeValidatorFactory$);
  $oj$$6$$.$LengthValidatorFactory$ = function() {
    return{createValidator:function($options$$164$$) {
      return new $oj$$6$$.$LengthValidator$($options$$164$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_LENGTH, $oj$$6$$.$LengthValidatorFactory$);
  var $OraI18nUtils$$ = {$numeringSystems$:{latn:"0123456789", arab:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669", thai:"\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"}, $BCP47RE$:/^(?:(en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(art-lojban|cel-gaulish|no-(?:bok|nyn)|zh-(?:guoyu|hakka|min|min-nan|xiang)))$|^(x(?:-[0-9a-z]{1,8})+)$|^(?:((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?((?:-(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)?((?:-[0-9a-wy-z](?:-[a-z0-9]{2,8}){1,})*)?(-x(?:-[0-9a-z]{1,8})+)?)$/i, 
  $regexTrim$:/^\s+|\s+$|\u200f|\u200e/g, $regexTrimNumber$:/\s+|\u200f|\u200e/g, $zeros$:["0", "00", "000"], $_ISO_DATE_REGEXP$:/^\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?)?$|^T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?$/, $_getTimeZone$:function($isoString$$) {
    if (!$isoString$$ || "string" !== typeof $isoString$$) {
      return null;
    }
    var $match$$1$$ = $OraI18nUtils$$.$_ISO_DATE_REGEXP$.exec($isoString$$);
    null === $match$$1$$ && $OraI18nUtils$$.$_throwInvalidISOString$($isoString$$);
    return void 0 !== $match$$1$$[1] ? $match$$1$$[1] : null;
  }, dateToLocalIso:function($date$$3$$) {
    return $OraI18nUtils$$.$padZeros$($date$$3$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($date$$3$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($date$$3$$.getDate(), 2) + "T" + $OraI18nUtils$$.$padZeros$($date$$3$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($date$$3$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($date$$3$$.getSeconds(), 2) + "." + $OraI18nUtils$$.$padZeros$($date$$3$$.getMilliseconds(), 3);
  }, isoToLocalDate:function($isoString$$1$$) {
    if (!$isoString$$1$$ || "string" !== typeof $isoString$$1$$) {
      return null;
    }
    null !== $OraI18nUtils$$.$_getTimeZone$($isoString$$1$$) && $OraI18nUtils$$.$_throwTimeZoneNotSupported$();
    return this._isoToLocalDateIgnoreTimezone($isoString$$1$$);
  }, _isoToLocalDateIgnoreTimezone:function($i$$110_isoString$$2_today$$) {
    var $milliSecSplitted_splitted$$ = $i$$110_isoString$$2_today$$.split("T"), $tIndex_timeSplitted$$ = $i$$110_isoString$$2_today$$.indexOf("T");
    $i$$110_isoString$$2_today$$ = new Date;
    var $datetime$$ = [$i$$110_isoString$$2_today$$.getFullYear(), $i$$110_isoString$$2_today$$.getMonth(), $i$$110_isoString$$2_today$$.getDate(), 0, 0, 0, 0];
    if ("" !== $milliSecSplitted_splitted$$[0]) {
      var $dateSplitted$$ = $milliSecSplitted_splitted$$[0].split("-");
      for ($i$$110_isoString$$2_today$$ = 0;$i$$110_isoString$$2_today$$ < $dateSplitted$$.length;$i$$110_isoString$$2_today$$++) {
        $datetime$$[$i$$110_isoString$$2_today$$] = parseInt($dateSplitted$$[$i$$110_isoString$$2_today$$], 10), 1 === $i$$110_isoString$$2_today$$ && $datetime$$[$i$$110_isoString$$2_today$$]--;
      }
    }
    if (-1 !== $tIndex_timeSplitted$$) {
      $milliSecSplitted_splitted$$ = $milliSecSplitted_splitted$$[1].split(".");
      $tIndex_timeSplitted$$ = $milliSecSplitted_splitted$$[0].split(":");
      for ($i$$110_isoString$$2_today$$ = 0;$i$$110_isoString$$2_today$$ < $tIndex_timeSplitted$$.length;$i$$110_isoString$$2_today$$++) {
        $datetime$$[3 + $i$$110_isoString$$2_today$$] = parseInt($tIndex_timeSplitted$$[$i$$110_isoString$$2_today$$], 10);
      }
      2 === $milliSecSplitted_splitted$$.length && $milliSecSplitted_splitted$$[1] && ($datetime$$[6] = parseInt($milliSecSplitted_splitted$$[1], 10));
    }
    return new Date($datetime$$[0], $datetime$$[1], $datetime$$[2], $datetime$$[3], $datetime$$[4], $datetime$$[5], $datetime$$[6]);
  }, $_throwTimeZoneNotSupported$:function() {
    var $error$$17$$;
    $error$$17$$ = Error("time zone is not supported");
    $error$$17$$.errorInfo = {errorCode:"timeZoneNotSupported"};
    throw $error$$17$$;
  }, $_throwInvalidISOString$:function($str$$13$$) {
    var $error$$18$$;
    $error$$18$$ = Error("The string " + $str$$13$$ + " is not a valid ISO 8601 string.");
    $error$$18$$.errorInfo = {errorCode:"invalidISOString", parameterMap:{isoStr:$str$$13$$}};
    throw $error$$18$$;
  }, trim:function($value$$109$$) {
    return($value$$109$$ + "").replace($OraI18nUtils$$.$regexTrim$, "");
  }, $trimNumber$:function($value$$110$$) {
    return($value$$110$$ + "").replace($OraI18nUtils$$.$regexTrimNumber$, "");
  }, $startsWith$:function($value$$111$$, $pattern$$3$$) {
    return 0 === $value$$111$$.indexOf($pattern$$3$$);
  }, $toUpper$:function($value$$112$$) {
    return $value$$112$$.split("\u00a0").join(" ").toUpperCase();
  }, $padZeros$:function($num$$5$$, $c$$32$$) {
    var $r_s$$4$$;
    $r_s$$4$$ = $num$$5$$ + "";
    return 1 < $c$$32$$ && $r_s$$4$$.length < $c$$32$$ ? ($r_s$$4$$ = $OraI18nUtils$$.$zeros$[$c$$32$$ - 2] + $r_s$$4$$, $r_s$$4$$.substr($r_s$$4$$.length - $c$$32$$, $c$$32$$)) : $r_s$$4$$;
  }, $getNumberingSystemKey$:function($localeElements$$1$$, $locale$$2$$) {
    if (void 0 === $locale$$2$$) {
      return "latn";
    }
    var $numberingSystemKey$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$2$$, "nu") || "";
    void 0 === $localeElements$$1$$.numbers["symbols-numberSystem-" + $numberingSystemKey$$] && ($numberingSystemKey$$ = "latn");
    return $numberingSystemKey$$;
  }, $parseBCP47$:function($match$$2_tag$$1$$) {
    $match$$2_tag$$1$$ = $OraI18nUtils$$.$BCP47RE$.exec($match$$2_tag$$1$$);
    if (!$match$$2_tag$$1$$) {
      return null;
    }
    var $match4$$ = $match$$2_tag$$1$$[4], $match4$$ = $match4$$ ? $match4$$.split("-") : null, $language$$ = null;
    $match4$$ && ($language$$ = $match4$$.shift());
    var $match7$$ = $match$$2_tag$$1$$[7];
    ($match7$$ = $match7$$ ? $match7$$.split("-") : null) && $match7$$.shift();
    var $match9$$ = $match$$2_tag$$1$$[9];
    if ($match9$$ = $match9$$ ? $match9$$.split("-") : null) {
      $match9$$.shift(), $match9$$.shift();
    }
    var $match3$$ = $match$$2_tag$$1$$[3];
    ($match3$$ = $match3$$ ? $match3$$.split("-") : null) && $match3$$.shift();
    return{language:{language:$language$$, $extlang$:$match4$$ || []}, $script$:$match$$2_tag$$1$$[5] || null, region:$match$$2_tag$$1$$[6] || null, variant:$match7$$ || null, $extension$:$OraI18nUtils$$.$parseExtension$($match$$2_tag$$1$$[8]), $privateuse$:$match9$$ || $match3$$ || [], $grandfathered$:{$irregular$:$match$$2_tag$$1$$[1] || null, $regular$:$match$$2_tag$$1$$[2] || null}};
  }, $parseExtension$:function($tag$$2$$) {
    if (!$tag$$2$$) {
      return[];
    }
    for (var $extensions$$ = [], $e$$38$$, $c$$33$$, $newExtension$$ = !1, $singleton$$ = !1, $extension$$ = "", $parsingExtension$$ = !1, $i$$111$$ = 0, $len$$7$$ = $tag$$2$$.length;$i$$111$$ < $len$$7$$;$i$$111$$++) {
      $c$$33$$ = $tag$$2$$[$i$$111$$], "-" !== $c$$33$$ || $newExtension$$ ? $newExtension$$ && !$singleton$$ ? ($singleton$$ = !0, $e$$38$$.singleton = $c$$33$$) : "-" === $c$$33$$ ? $parsingExtension$$ ? 1 === $extension$$.length ? ($singleton$$ = $parsingExtension$$ = !1, $extensions$$.push($e$$38$$), $e$$38$$ = {singleton:null, extension:[]}) : ($e$$38$$.extension.push($extension$$), $extension$$ = "") : ($extension$$ = "", $parsingExtension$$ = !0) : $extension$$ += $c$$33$$ : ($newExtension$$ = 
      !0, $e$$38$$ = {singleton:null, extension:[]});
    }
    $e$$38$$.extension.push($extension$$);
    $extensions$$.push($e$$38$$);
    return $extensions$$;
  }, $getLanguageExtension$:function($locale$$3$$, $token$$5$$) {
    var $ext_parsedLang$$ = $OraI18nUtils$$.$parseBCP47$($locale$$3$$ || "en-US");
    if (null === $ext_parsedLang$$ || void 0 === $ext_parsedLang$$) {
      return null;
    }
    var $ext_parsedLang$$ = $ext_parsedLang$$.extension, $localeExtension$$, $i$$112$$;
    for ($i$$112$$ in $ext_parsedLang$$) {
      if ("u" === $ext_parsedLang$$[$i$$112$$].singleton) {
        for (var $j$$12$$ in $ext_parsedLang$$[$i$$112$$].extension) {
          if ($ext_parsedLang$$[$i$$112$$].extension[$j$$12$$] === $token$$5$$) {
            $j$$12$$++;
            $localeExtension$$ = $ext_parsedLang$$[$i$$112$$].extension[$j$$12$$];
            break;
          }
        }
        break;
      }
    }
    return $localeExtension$$;
  }, $haveSamePropertiesLength$:function($obj$$49$$) {
    var $count$$23$$ = 0, $n$$13$$;
    for ($n$$13$$ in $obj$$49$$) {
      $count$$23$$++;
    }
    return $count$$23$$;
  }, $getLocaleElementsMainNode$:function($bundle$$5_mainNode$$) {
    $bundle$$5_mainNode$$ = $bundle$$5_mainNode$$.main;
    var $subnode$$, $n$$14$$;
    for ($n$$14$$ in $bundle$$5_mainNode$$) {
      $subnode$$ = $n$$14$$;
      break;
    }
    return $bundle$$5_mainNode$$[$subnode$$];
  }, $getLocaleElementsMainNodeKey$:function($bundle$$6_mainNode$$1$$) {
    $bundle$$6_mainNode$$1$$ = $bundle$$6_mainNode$$1$$.main;
    var $subnode$$1$$, $n$$15$$;
    for ($n$$15$$ in $bundle$$6_mainNode$$1$$) {
      $subnode$$1$$ = $n$$15$$;
      break;
    }
    return $subnode$$1$$;
  }, $getGetOption$:function($options$$165$$, $getOptionCaller$$) {
    if (void 0 === $options$$165$$) {
      throw Error("Internal " + $getOptionCaller$$ + " error. Default options missing.");
    }
    return function getOption$$1($property$$13$$, $expectedValues_type$$76$$, $rangeError_values$$6$$, $defaultValue$$2_i$$113_value$$113$$) {
      if (void 0 !== $options$$165$$[$property$$13$$]) {
        $defaultValue$$2_i$$113_value$$113$$ = $options$$165$$[$property$$13$$];
        switch($expectedValues_type$$76$$) {
          case "boolean":
            $defaultValue$$2_i$$113_value$$113$$ = Boolean($defaultValue$$2_i$$113_value$$113$$);
            break;
          case "string":
            $defaultValue$$2_i$$113_value$$113$$ = String($defaultValue$$2_i$$113_value$$113$$);
            break;
          case "number":
            $defaultValue$$2_i$$113_value$$113$$ = Number($defaultValue$$2_i$$113_value$$113$$);
            break;
          default:
            throw Error("Internal error. Wrong value type.");;
        }
        if (void 0 !== $rangeError_values$$6$$ && -1 === $rangeError_values$$6$$.indexOf($defaultValue$$2_i$$113_value$$113$$)) {
          $expectedValues_type$$76$$ = [];
          for ($defaultValue$$2_i$$113_value$$113$$ = 0;$defaultValue$$2_i$$113_value$$113$$ < $rangeError_values$$6$$.length;$defaultValue$$2_i$$113_value$$113$$++) {
            $expectedValues_type$$76$$.push($rangeError_values$$6$$[$defaultValue$$2_i$$113_value$$113$$]);
          }
          $rangeError_values$$6$$ = new RangeError("The value '" + $options$$165$$[$property$$13$$] + "' is out of range for '" + $getOptionCaller$$ + "' options property '" + $property$$13$$ + "'. Valid values: " + $expectedValues_type$$76$$);
          $rangeError_values$$6$$.errorInfo = {errorCode:"optionOutOfRange", parameterMap:{propertyName:$property$$13$$, propertyValue:$options$$165$$[$property$$13$$], propertyValueValid:$expectedValues_type$$76$$, caller:$getOptionCaller$$}};
          throw $rangeError_values$$6$$;
        }
      }
      return $defaultValue$$2_i$$113_value$$113$$;
    };
  }};
  $oj$$6$$.$IntlDateTimeConverter$ = function $$oj$$6$$$$IntlDateTimeConverter$$($options$$166$$) {
    this.Init($options$$166$$);
  };
  $goog$exportPath_$$("IntlDateTimeConverter", $oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$.$DateTimeConverter$, "oj.IntlDateTimeConverter");
  $oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$ = new Date(1998, 10, 29, 15, 45, 31);
  $oj$$6$$.$IntlDateTimeConverter$.prototype.Init = function $$oj$$6$$$$IntlDateTimeConverter$$$Init$($options$$167$$) {
    $oj$$6$$.$IntlDateTimeConverter$.$superclass$.Init.call(this, $options$$167$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.Init", {Init:$oj$$6$$.$IntlDateTimeConverter$.prototype.Init});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraDateTimeConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.format = function $$oj$$6$$$$IntlDateTimeConverter$$$format$($converterError_value$$114$$) {
    var $localeElements$$2$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$4$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$ = this.resolvedOptions();
    if (null == $converterError_value$$114$$ || "string" === typeof $converterError_value$$114$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError_value$$114$$).length) {
      return "";
    }
    try {
      return this.$_getWrapped$().format($converterError_value$$114$$, $localeElements$$2$$, $resolvedOptions$$, $locale$$4$$);
    } catch ($e$$39$$) {
      throw $converterError_value$$114$$ = this.$_processConverterError$($e$$39$$, $converterError_value$$114$$), $converterError_value$$114$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.format", {format:$oj$$6$$.$IntlDateTimeConverter$.prototype.format});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$formatRelative$$($value$$115$$, $relativeOptions$$) {
    var $converterError$$1_localeElements$$3$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$5$$ = $oj$$6$$.$Config$.$getLocale$();
    try {
      return this.$_getWrapped$().$formatRelative$($value$$115$$, $converterError$$1_localeElements$$3$$, $relativeOptions$$, $locale$$5$$);
    } catch ($e$$40$$) {
      throw $converterError$$1_localeElements$$3$$ = this.$_processConverterError$($e$$40$$, $value$$115$$), $converterError$$1_localeElements$$3$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.formatRelative", {$formatRelative$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getHint$$() {
    var $patternFromOptions$$ = this.resolvedOptions().patternFromOptions || this.$getOptions$().pattern;
    return $patternFromOptions$$ ? $patternFromOptions$$.toLowerCase() : "";
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getHintValue$$() {
    var $value$$116$$ = "";
    try {
      $value$$116$$ = this.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$));
    } catch ($e$$41$$) {
      $e$$41$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$116$$ = "");
    } finally {
      return $value$$116$$;
    }
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlDateTimeConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlDateTimeConverter$$$resolvedOptions$() {
    var $converterError$$2_localeElements$$4$$, $locale$$6$$ = $oj$$6$$.$Config$.$getLocale$(), $options$$168$$ = this.$getOptions$();
    if ($locale$$6$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$2_localeElements$$4$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        if (!$converterError$$2_localeElements$$4$$) {
          return $oj$$6$$.$Logger$.error("locale bundle for the current locale %s is unavailable", $locale$$6$$), {};
        }
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$2_localeElements$$4$$, $options$$168$$, $locale$$6$$);
        this.$_locale$ = $locale$$6$$;
      } catch ($e$$42$$) {
        throw $converterError$$2_localeElements$$4$$ = this.$_processConverterError$($e$$42$$), $converterError$$2_localeElements$$4$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInDaySet$$() {
    var $ro$$ = this.resolvedOptions(), $hour12$$ = $ro$$.hour12;
    return $ro$$.hour && !$hour12$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInAMPMSet$$() {
    var $ro$$1$$ = this.resolvedOptions(), $hour12$$1$$ = $ro$$1$$.hour12;
    return $ro$$1$$.hour && $hour12$$1$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMinuteSet$$() {
    return this.$_isOptionSet$("minute");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isSecondSet$$() {
    return this.$_isOptionSet$("second");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMilliSecondSet$$() {
    return this.$_isOptionSet$("millisecond");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isYearSet$$() {
    return this.$_isOptionSet$("year");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMonthSet$$() {
    return this.$_isOptionSet$("month");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDaySet$$() {
    return this.$_isOptionSet$("day");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDayNameSet$$() {
    return this.$_isOptionSet$("weekday");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$calculateWeek$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$calculateWeek$$($value$$117$$) {
    return this.$_getWrapped$().$calculateWeek$($value$$117$$, $oj$$6$$.$LocaleData$.$__getBundle$(), $oj$$6$$.$Config$.$getLocale$());
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.calculateWeek", {$calculateWeek$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$calculateWeek$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.parse = function $$oj$$6$$$$IntlDateTimeConverter$$$parse$($converterError$$3_value$$118$$) {
    var $result$$7$$, $parsed$$1$$;
    if (null == $converterError$$3_value$$118$$ || "" === $converterError$$3_value$$118$$) {
      return null;
    }
    var $localeElements$$5$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$7$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$2$$ = this.resolvedOptions();
    try {
      return $result$$7$$ = this.$_getWrapped$().parse($converterError$$3_value$$118$$, $localeElements$$5$$, $resolvedOptions$$2$$, $locale$$7$$), ($parsed$$1$$ = $result$$7$$.value) && $result$$7$$.warning && $oj$$6$$.$Logger$.warn("The value " + $converterError$$3_value$$118$$ + " was leniently parsed to represent a date " + $parsed$$1$$.toString ? $parsed$$1$$.toString() : $parsed$$1$$), $parsed$$1$$;
    } catch ($e$$43$$) {
      throw $converterError$$3_value$$118$$ = this.$_processConverterError$($e$$43$$, $converterError$$3_value$$118$$), $converterError$$3_value$$118$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.parse", {parse:$oj$$6$$.$IntlDateTimeConverter$.prototype.parse});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_processConverterError$$($e$$44$$, $value$$119$$) {
    var $errorInfo$$3_parameterMap$$ = $e$$44$$.errorInfo, $errorCode_summary$$15$$, $converterError$$4_detail$$18$$, $propName$$, $resourceKey$$;
    if ($errorInfo$$3_parameterMap$$) {
      if ($errorCode_summary$$15$$ = $errorInfo$$3_parameterMap$$.errorCode, $errorInfo$$3_parameterMap$$ = $errorInfo$$3_parameterMap$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$3_parameterMap$$), $propName$$ = $errorInfo$$3_parameterMap$$.propertyName, $e$$44$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode_summary$$15$$ || "optionTypeInvalid" === $errorCode_summary$$15$$) {
          $converterError$$4_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$15$$, $errorInfo$$3_parameterMap$$);
        }
      } else {
        $e$$44$$ instanceof RangeError ? "optionOutOfRange" === $errorCode_summary$$15$$ ? $converterError$$4_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$15$$, $errorInfo$$3_parameterMap$$) : "datetimeOutOfRange" === $errorCode_summary$$15$$ && ($errorCode_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.summary", {propertyName:$propName$$, value:$errorInfo$$3_parameterMap$$.value}), $converterError$$4_detail$$18$$ = 
        $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.detail", {minValue:$errorInfo$$3_parameterMap$$.minValue, maxValue:$errorInfo$$3_parameterMap$$.maxValue}), $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$15$$, $converterError$$4_detail$$18$$)) : $e$$44$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode_summary$$15$$ && ($converterError$$4_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$15$$, 
        $errorInfo$$3_parameterMap$$)) : $e$$44$$ instanceof Error && ("dateFormatMismatch" === $errorCode_summary$$15$$ ? $resourceKey$$ = "oj-converter.datetime.dateFormatMismatch.summary" : "timeFormatMismatch" === $errorCode_summary$$15$$ ? $resourceKey$$ = "oj-converter.datetime.timeFormatMismatch.summary" : "datetimeFormatMismatch" === $errorCode_summary$$15$$ ? $resourceKey$$ = "oj-converter.datetime.datetimeFormatMismatch.summary" : "dateToWeekdayMismatch" === $errorCode_summary$$15$$ && 
        ($errorCode_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.summary", {date:$errorInfo$$3_parameterMap$$.date, weekday:$errorInfo$$3_parameterMap$$.weekday}), $converterError$$4_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.detail"), $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$15$$, $converterError$$4_detail$$18$$)), $resourceKey$$ && 
        ($errorCode_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$, {value:$value$$119$$ || $errorInfo$$3_parameterMap$$.value, format:$errorInfo$$3_parameterMap$$.format}), $converterError$$4_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$15$$, $converterError$$4_detail$$18$$)));
      }
    }
    $converterError$$4_detail$$18$$ || ($converterError$$4_detail$$18$$ = $errorCode_summary$$15$$ = $e$$44$$.message, $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$15$$, $converterError$$4_detail$$18$$));
    return $converterError$$4_detail$$18$$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_isOptionSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_isOptionSet$$($optionName$$1$$) {
    return this.resolvedOptions()[$optionName$$1$$] ? !0 : !1;
  };
  $oj$$6$$.$NumberRangeValidator$ = function _NumberRangeValidator($options$$169$$) {
    this.Init($options$$169$$);
  };
  $goog$exportPath_$$("NumberRangeValidator", $oj$$6$$.$NumberRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberRangeValidator$, $oj$$6$$.$Validator$, "oj.NumberRangeValidator");
  $oj$$6$$.$NumberRangeValidator$.prototype.Init = function $$oj$$6$$$$NumberRangeValidator$$$Init$($options$$170$$) {
    $oj$$6$$.$NumberRangeValidator$.$superclass$.Init.call(this);
    $options$$170$$ && (this.$_min$ = $options$$170$$.min, this.$_max$ = $options$$170$$.max, this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$170$$.converter), this.$_hint$ = $options$$170$$.hint || {}, this.$_customMessageSummary$ = $options$$170$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$170$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.Init", {Init:$oj$$6$$.$NumberRangeValidator$.prototype.Init});
  $oj$$6$$.$NumberRangeValidator$.prototype.validate = function $$oj$$6$$$$NumberRangeValidator$$$validate$($value$$120$$) {
    var $string$$1$$ = $value$$120$$ ? $value$$120$$.toString() : $value$$120$$, $numberValue$$ = parseFloat($string$$1$$), $customMessageSummary$$1_messageSummaryRangeUnderflow$$1$$ = this.$_customMessageSummary$, $customMessageDetail$$1_messageDetailRangeUnderflow$$1$$ = this.$_customMessageDetail$, $messageDetailRangeOverflow$$1$$ = $customMessageDetail$$1_messageDetailRangeUnderflow$$1$$.rangeOverflow, $customMessageDetail$$1_messageDetailRangeUnderflow$$1$$ = $customMessageDetail$$1_messageDetailRangeUnderflow$$1$$.rangeUnderflow, 
    $messageSummaryRangeOverflow$$1$$ = $customMessageSummary$$1_messageSummaryRangeUnderflow$$1$$.rangeOverflow, $customMessageSummary$$1_messageSummaryRangeUnderflow$$1$$ = $customMessageSummary$$1_messageSummaryRangeUnderflow$$1$$.rangeUnderflow, $min$$3$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$3$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$2$$ = $min$$3$$ && this.$_converter$ ? this.$_converter$.format($min$$3$$) : $min$$3$$, $maxStr$$2$$ = $max$$3$$ && 
    this.$_converter$ ? this.$_converter$.format($max$$3$$) : $max$$3$$, $summary$$16$$ = "", $detail$$19$$ = "", $params$$9$$ = null, $translations$$5$$ = $oj$$6$$.$Translations$;
    if (null === $value$$120$$) {
      return $value$$120$$;
    }
    if (null !== $min$$3$$ && null !== $max$$3$$) {
      if ($numberValue$$ >= $min$$3$$ && $numberValue$$ <= $max$$3$$ || $min$$3$$ > $max$$3$$) {
        return $string$$1$$;
      }
    } else {
      if (null !== $min$$3$$) {
        if ($numberValue$$ >= $min$$3$$) {
          return $string$$1$$;
        }
      } else {
        if (null === $max$$3$$ || $numberValue$$ <= $max$$3$$) {
          return $string$$1$$;
        }
      }
    }
    null !== $max$$3$$ && $numberValue$$ > $max$$3$$ ? ($params$$9$$ = {value:$value$$120$$, max:$maxStr$$2$$}, $summary$$16$$ = $messageSummaryRangeOverflow$$1$$ ? $messageSummaryRangeOverflow$$1$$ : $translations$$5$$.$getTranslatedString$("oj-validator.range.number.messageSummary.rangeOverflow"), $detail$$19$$ = $messageDetailRangeOverflow$$1$$ ? $translations$$5$$.$applyParameters$($messageDetailRangeOverflow$$1$$, $params$$9$$) : $translations$$5$$.$getTranslatedString$("oj-validator.range.number.messageDetail.rangeOverflow", 
    $params$$9$$)) : null !== $min$$3$$ && $numberValue$$ < $min$$3$$ && ($params$$9$$ = {value:$value$$120$$, min:$minStr$$2$$}, $summary$$16$$ = $customMessageSummary$$1_messageSummaryRangeUnderflow$$1$$ ? $customMessageSummary$$1_messageSummaryRangeUnderflow$$1$$ : $translations$$5$$.$getTranslatedString$("oj-validator.range.number.messageSummary.rangeUnderflow"), $detail$$19$$ = $customMessageDetail$$1_messageDetailRangeUnderflow$$1$$ ? $translations$$5$$.$applyParameters$($customMessageDetail$$1_messageDetailRangeUnderflow$$1$$, 
    $params$$9$$) : $translations$$5$$.$getTranslatedString$("oj-validator.range.number.messageDetail.rangeUnderflow", $params$$9$$));
    throw new $oj$$6$$.$ValidatorError$($summary$$16$$, $detail$$19$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.validate", {validate:$oj$$6$$.$NumberRangeValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$NumberRangeValidator$$$$getHint$$() {
    var $hint$$5$$ = null, $hintMaximum$$1_hints$$5$$ = this.$_hint$, $hintInRange$$1$$ = $hintMaximum$$1_hints$$5$$.inRange, $hintMinimum$$1$$ = $hintMaximum$$1_hints$$5$$.min, $hintMaximum$$1_hints$$5$$ = $hintMaximum$$1_hints$$5$$.max, $translations$$6$$ = $oj$$6$$.$Translations$, $min$$4$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$4$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$3$$ = $min$$4$$ && this.$_converter$ ? this.$_converter$.format($min$$4$$) : 
    $min$$4$$, $maxStr$$3$$ = $max$$4$$ && this.$_converter$ ? this.$_converter$.format($max$$4$$) : $max$$4$$;
    null !== $min$$4$$ && null !== $max$$4$$ ? $hint$$5$$ = $hintInRange$$1$$ ? $translations$$6$$.$applyParameters$($hintInRange$$1$$, {min:$minStr$$3$$, max:$maxStr$$3$$}) : $translations$$6$$.$getTranslatedString$("oj-validator.range.number.hint.inRange", {min:$minStr$$3$$, max:$maxStr$$3$$}) : null !== $min$$4$$ ? $hint$$5$$ = $hintMinimum$$1$$ ? $translations$$6$$.$applyParameters$($hintMinimum$$1$$, {min:$minStr$$3$$}) : $translations$$6$$.$getTranslatedString$("oj-validator.range.number.hint.min", 
    {min:$minStr$$3$$}) : null !== $max$$4$$ && ($hint$$5$$ = $hintMaximum$$1_hints$$5$$ ? $translations$$6$$.$applyParameters$($hintMaximum$$1_hints$$5$$, {max:$maxStr$$3$$}) : $translations$$6$$.$getTranslatedString$("oj-validator.range.number.hint.max", {max:$maxStr$$3$$}));
    return $hint$$5$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$NumberRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$IntlNumberConverter$ = function $$oj$$6$$$$IntlNumberConverter$$($options$$171$$) {
    this.Init($options$$171$$);
  };
  $goog$exportPath_$$("IntlNumberConverter", $oj$$6$$.$IntlNumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlNumberConverter$, $oj$$6$$.$NumberConverter$, "oj.IntlNumberConverter");
  $oj$$6$$.$IntlNumberConverter$.prototype.Init = function $$oj$$6$$$$IntlNumberConverter$$$Init$($options$$172$$) {
    $oj$$6$$.$IntlNumberConverter$.$superclass$.Init.call(this, $options$$172$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.Init", {Init:$oj$$6$$.$IntlNumberConverter$.prototype.Init});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraNumberConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.format = function $$oj$$6$$$$IntlNumberConverter$$$format$($converterError$$5_value$$121$$) {
    if (null == $converterError$$5_value$$121$$ || "string" === typeof $converterError$$5_value$$121$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError$$5_value$$121$$).length || "number" === typeof $converterError$$5_value$$121$$ && isNaN($converterError$$5_value$$121$$)) {
      return "";
    }
    var $localeElements$$6$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$8$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$3$$ = this.resolvedOptions();
    try {
      return this.$_getWrapped$().format($converterError$$5_value$$121$$, $localeElements$$6$$, $resolvedOptions$$3$$, $locale$$8$$);
    } catch ($e$$45$$) {
      throw $converterError$$5_value$$121$$ = this.$_processConverterError$($e$$45$$, $converterError$$5_value$$121$$), $converterError$$5_value$$121$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.format", {format:$oj$$6$$.$IntlNumberConverter$.prototype.format});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlNumberConverter$$$$getHint$$() {
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlNumberConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlNumberConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlNumberConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlNumberConverter$.prototype.parse = function $$oj$$6$$$$IntlNumberConverter$$$parse$($converterError$$6_value$$122$$) {
    var $localeElements$$7$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$9$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$4$$ = this.resolvedOptions();
    if (null == $converterError$$6_value$$122$$ || "" === $converterError$$6_value$$122$$) {
      return null;
    }
    try {
      return this.$_getWrapped$().parse($oj$$6$$.$StringUtils$.trim($converterError$$6_value$$122$$), $localeElements$$7$$, $resolvedOptions$$4$$, $locale$$9$$);
    } catch ($e$$46$$) {
      throw $converterError$$6_value$$122$$ = this.$_processConverterError$($e$$46$$, $converterError$$6_value$$122$$), $converterError$$6_value$$122$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.parse", {parse:$oj$$6$$.$IntlNumberConverter$.prototype.parse});
  $oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlNumberConverter$$$resolvedOptions$() {
    var $converterError$$7_localeElements$$8$$, $locale$$10$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$10$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$7_localeElements$$8$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        if (!$converterError$$7_localeElements$$8$$) {
          return $oj$$6$$.$Logger$.error("locale bundle for the current locale %s is unavailable", $locale$$10$$), {};
        }
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$7_localeElements$$8$$, this.$getOptions$(), $locale$$10$$);
        this.$_locale$ = $locale$$10$$;
      } catch ($e$$47$$) {
        throw $converterError$$7_localeElements$$8$$ = this.$_processConverterError$($e$$47$$), $converterError$$7_localeElements$$8$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlNumberConverter$$$$_processConverterError$$($e$$48$$, $value$$123$$) {
    var $errorInfo$$4_parameterMap$$1$$ = $e$$48$$.errorInfo, $errorCode$$1_summary$$17$$, $converterError$$8_detail$$20$$, $resourceKey$$1$$;
    if ($errorInfo$$4_parameterMap$$1$$) {
      if ($errorCode$$1_summary$$17$$ = $errorInfo$$4_parameterMap$$1$$.errorCode, $errorInfo$$4_parameterMap$$1$$ = $errorInfo$$4_parameterMap$$1$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$4_parameterMap$$1$$), $e$$48$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode$$1_summary$$17$$ || "optionTypeInvalid" === $errorCode$$1_summary$$17$$) {
          $converterError$$8_detail$$20$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$17$$, $errorInfo$$4_parameterMap$$1$$);
        }
      } else {
        $e$$48$$ instanceof RangeError ? "optionOutOfRange" === $errorCode$$1_summary$$17$$ && ($converterError$$8_detail$$20$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$17$$, $errorInfo$$4_parameterMap$$1$$)) : $e$$48$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode$$1_summary$$17$$ && ($converterError$$8_detail$$20$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$17$$, $errorInfo$$4_parameterMap$$1$$)) : 
        $e$$48$$ instanceof Error && ("decimalFormatMismatch" === $errorCode$$1_summary$$17$$ ? $resourceKey$$1$$ = "oj-converter.number.decimalFormatMismatch.summary" : "currencyFormatMismatch" === $errorCode$$1_summary$$17$$ ? $resourceKey$$1$$ = "oj-converter.number.currencyFormatMismatch.summary" : "percentFormatMismatch" === $errorCode$$1_summary$$17$$ ? $resourceKey$$1$$ = "oj-converter.number.percentFormatMismatch.summary" : "unsupportedParseFormat" === $errorCode$$1_summary$$17$$ && ($errorCode$$1_summary$$17$$ = 
        $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.number.decimalFormatUnsupportedParse.summary"), $converterError$$8_detail$$20$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.number.decimalFormatUnsupportedParse.detail"), $converterError$$8_detail$$20$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$17$$, $converterError$$8_detail$$20$$)), $resourceKey$$1$$ && ($errorCode$$1_summary$$17$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$1$$, 
        {value:$value$$123$$ || $errorInfo$$4_parameterMap$$1$$.value, format:$errorInfo$$4_parameterMap$$1$$.format}), $converterError$$8_detail$$20$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$8_detail$$20$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$17$$, $converterError$$8_detail$$20$$)));
      }
    }
    $converterError$$8_detail$$20$$ || ($converterError$$8_detail$$20$$ = $errorCode$$1_summary$$17$$ = $e$$48$$.message, $converterError$$8_detail$$20$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$17$$, $converterError$$8_detail$$20$$));
    return $converterError$$8_detail$$20$$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getHintValue$$() {
    var $value$$124$$ = "";
    try {
      $value$$124$$ = this.format(12345.98765);
    } catch ($e$$49$$) {
      $e$$49$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$124$$ = "");
    } finally {
      return $value$$124$$;
    }
  };
  var $OraNumberConverter$$;
  $OraNumberConverter$$ = function() {
    function $_init$$() {
      return{format:function($value$$125$$, $localeElements$$9$$, $options$$173$$, $locale$$11$$) {
        if (2 >= arguments.length || void 0 === $options$$173$$) {
          $options$$173$$ = {useGrouping:!0, style:"decimal"};
        }
        $_validateNumberOptions$$($options$$173$$, "OraNumberConverter.format");
        var $numberSettings$$ = {};
        $_getNumberSettings$$($localeElements$$9$$, $numberSettings$$, $options$$173$$, $locale$$11$$);
        return $_formatNumberImpl$$($value$$125$$, $options$$173$$, $localeElements$$9$$, $numberSettings$$, $locale$$11$$);
      }, parse:function($str$$14$$, $localeElements$$10$$, $options$$174$$, $locale$$12$$) {
        if ("number" === typeof $str$$14$$) {
          return $str$$14$$;
        }
        if ("[object Number]" === Object.prototype.toString.call($str$$14$$)) {
          return Number($str$$14$$);
        }
        if (2 >= arguments.length || void 0 === $options$$174$$) {
          $options$$174$$ = {useGrouping:!0, style:"decimal"};
        }
        var $errStr$$ = $str$$14$$;
        $_validateNumberOptions$$($options$$174$$, "OraNumberConverter.parse");
        var $localeElementsMainNode$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$10$$), $numberSettings$$1$$ = {}, $groupingSeparator_numberingSystemKey$$1_p$$2$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$12$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$1_p$$2$$] && ($groupingSeparator_numberingSystemKey$$1_p$$2$$ = "latn");
        if ("latn" !== $groupingSeparator_numberingSystemKey$$1_p$$2$$) {
          var $decimalSeparator_expSignInfo_fraction_idx$$2$$, $latnStr_ret$$8_sign_value1$$8$$ = [];
          for ($decimalSeparator_expSignInfo_fraction_idx$$2$$ = 0;$decimalSeparator_expSignInfo_fraction_idx$$2$$ < $str$$14$$.length;$decimalSeparator_expSignInfo_fraction_idx$$2$$++) {
            var $exponent_num$$6_pos$$1$$ = $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$1_p$$2$$].indexOf($str$$14$$[$decimalSeparator_expSignInfo_fraction_idx$$2$$]);
            -1 !== $exponent_num$$6_pos$$1$$ ? $latnStr_ret$$8_sign_value1$$8$$.push($exponent_num$$6_pos$$1$$) : $latnStr_ret$$8_sign_value1$$8$$.push($str$$14$$[$decimalSeparator_expSignInfo_fraction_idx$$2$$]);
          }
          $str$$14$$ = $latnStr_ret$$8_sign_value1$$8$$.join("");
        }
        $_getNumberSettings$$($localeElements$$10$$, $numberSettings$$1$$, $options$$174$$, $locale$$12$$);
        $decimalSeparator_expSignInfo_fraction_idx$$2$$ = $localeElementsMainNode$$.numbers[$numberSettings$$1$$.numberingSystem].decimal;
        $groupingSeparator_numberingSystemKey$$1_p$$2$$ = $localeElementsMainNode$$.numbers[$numberSettings$$1$$.numberingSystem].group;
        $latnStr_ret$$8_sign_value1$$8$$ = NaN;
        $latnStr_ret$$8_sign_value1$$8$$ = $str$$14$$.replace(/ /g, "");
        if ($_REGEX_INFINITY$$.test($latnStr_ret$$8_sign_value1$$8$$)) {
          return $latnStr_ret$$8_sign_value1$$8$$ = parseFloat($str$$14$$);
        }
        var $altGroupSep_intAndFraction_signInfo$$ = $_parseNegativePattern$$($str$$14$$, $options$$174$$, $numberSettings$$1$$, $localeElementsMainNode$$), $latnStr_ret$$8_sign_value1$$8$$ = $altGroupSep_intAndFraction_signInfo$$[0], $exponent_num$$6_pos$$1$$ = $altGroupSep_intAndFraction_signInfo$$[1], $latnStr_ret$$8_sign_value1$$8$$ = $latnStr_ret$$8_sign_value1$$8$$ || "+";
        if ($altGroupSep_intAndFraction_signInfo$$[2]) {
          return $latnStr_ret$$8_sign_value1$$8$$ = parseFloat($latnStr_ret$$8_sign_value1$$8$$ + $exponent_num$$6_pos$$1$$), $_throwNaNException$$($latnStr_ret$$8_sign_value1$$8$$, $options$$174$$, $numberSettings$$1$$, $errStr$$);
        }
        var $exponent_num$$6_pos$$1$$ = $exponent_num$$6_pos$$1$$.replace(/ /g, ""), $exponentSymbol_integer$$ = $numberSettings$$1$$.exponential, $decimalPos_exponentPos$$ = $exponent_num$$6_pos$$1$$.indexOf($exponentSymbol_integer$$.toLowerCase());
        0 > $decimalPos_exponentPos$$ && ($decimalPos_exponentPos$$ = $exponent_num$$6_pos$$1$$.indexOf($OraI18nUtils$$.$toUpper$($exponentSymbol_integer$$)));
        0 > $decimalPos_exponentPos$$ ? ($altGroupSep_intAndFraction_signInfo$$ = $exponent_num$$6_pos$$1$$, $exponent_num$$6_pos$$1$$ = null) : ($altGroupSep_intAndFraction_signInfo$$ = $exponent_num$$6_pos$$1$$.substr(0, $decimalPos_exponentPos$$), $exponent_num$$6_pos$$1$$ = $exponent_num$$6_pos$$1$$.substr($decimalPos_exponentPos$$ + $exponentSymbol_integer$$.length));
        $decimalPos_exponentPos$$ = $altGroupSep_intAndFraction_signInfo$$.indexOf($decimalSeparator_expSignInfo_fraction_idx$$2$$);
        0 > $decimalPos_exponentPos$$ ? ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction_signInfo$$, $decimalSeparator_expSignInfo_fraction_idx$$2$$ = null) : ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction_signInfo$$.substr(0, $decimalPos_exponentPos$$), $decimalSeparator_expSignInfo_fraction_idx$$2$$ = $altGroupSep_intAndFraction_signInfo$$.substr($decimalPos_exponentPos$$ + $decimalSeparator_expSignInfo_fraction_idx$$2$$.length));
        $exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($groupingSeparator_numberingSystemKey$$1_p$$2$$).join("");
        $altGroupSep_intAndFraction_signInfo$$ = $groupingSeparator_numberingSystemKey$$1_p$$2$$.replace(/\u00A0/g, " ");
        $groupingSeparator_numberingSystemKey$$1_p$$2$$ !== $altGroupSep_intAndFraction_signInfo$$ && ($exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($altGroupSep_intAndFraction_signInfo$$).join(""));
        $groupingSeparator_numberingSystemKey$$1_p$$2$$ = $latnStr_ret$$8_sign_value1$$8$$ + $exponentSymbol_integer$$;
        null !== $decimalSeparator_expSignInfo_fraction_idx$$2$$ && ($groupingSeparator_numberingSystemKey$$1_p$$2$$ += "." + $decimalSeparator_expSignInfo_fraction_idx$$2$$);
        null !== $exponent_num$$6_pos$$1$$ && ($decimalSeparator_expSignInfo_fraction_idx$$2$$ = $_parseNegativeExponent$$($exponent_num$$6_pos$$1$$, $localeElementsMainNode$$, $numberSettings$$1$$), $groupingSeparator_numberingSystemKey$$1_p$$2$$ += "e" + ($decimalSeparator_expSignInfo_fraction_idx$$2$$[0] || "+") + $decimalSeparator_expSignInfo_fraction_idx$$2$$[1]);
        $_REGEX_PARSE_FLOAT$$.test($groupingSeparator_numberingSystemKey$$1_p$$2$$) ? $latnStr_ret$$8_sign_value1$$8$$ = parseFloat($groupingSeparator_numberingSystemKey$$1_p$$2$$) : ($groupingSeparator_numberingSystemKey$$1_p$$2$$ = $_lenientParseNumber$$($str$$14$$, $numberSettings$$1$$, $localeElementsMainNode$$), $latnStr_ret$$8_sign_value1$$8$$ = parseFloat($groupingSeparator_numberingSystemKey$$1_p$$2$$[0] + $groupingSeparator_numberingSystemKey$$1_p$$2$$[1]));
        return $_throwNaNException$$($latnStr_ret$$8_sign_value1$$8$$, $options$$174$$, $numberSettings$$1$$, $errStr$$);
      }, resolvedOptions:function($localeElements$$11$$, $options$$175$$, $locale$$13$$) {
        if (3 > arguments.length || void 0 === $locale$$13$$) {
          $locale$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$11$$);
        }
        if (2 > arguments.length || void 0 === $options$$175$$) {
          $options$$175$$ = {useGrouping:!0, style:"decimal"};
        }
        var $numberSettings$$2_resOptions$$ = {};
        $_validateNumberOptions$$($options$$175$$, "OraNumberConverter.resolvedOptions");
        $_getNumberSettings$$($localeElements$$11$$, $numberSettings$$2_resOptions$$, $options$$175$$, $locale$$13$$);
        $numberSettings$$2_resOptions$$.numberingSystemKey = $OraI18nUtils$$.$getLanguageExtension$($locale$$13$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberSettings$$2_resOptions$$.numberingSystemKey] && ($numberSettings$$2_resOptions$$.numberingSystemKey = "latn");
        $numberSettings$$2_resOptions$$ = {locale:$locale$$13$$, style:void 0 === $options$$175$$.style ? "decimal" : $options$$175$$.style, useGrouping:void 0 === $options$$175$$.useGrouping ? !0 : $options$$175$$.useGrouping, minimumIntegerDigits:$numberSettings$$2_resOptions$$.minimumIntegerDigits, minimumFractionDigits:$numberSettings$$2_resOptions$$.minimumFractionDigits, maximumFractionDigits:$numberSettings$$2_resOptions$$.maximumFractionDigits, numberingSystem:$numberSettings$$2_resOptions$$.numberingSystemKey};
        "decimal" === $options$$175$$.style && void 0 !== $options$$175$$.decimalFormat && ($numberSettings$$2_resOptions$$.decimalFormat = $options$$175$$.decimalFormat);
        "currency" === $options$$175$$.style && ($numberSettings$$2_resOptions$$.currency = $options$$175$$.currency, $numberSettings$$2_resOptions$$.currencyDisplay = void 0 === $options$$175$$.currencyDisplay ? "symbol" : $options$$175$$.currencyDisplay);
        void 0 !== $options$$175$$.pattern && ($numberSettings$$2_resOptions$$.pattern = $options$$175$$.pattern);
        return $numberSettings$$2_resOptions$$;
      }};
    }
    var $_zeroPad$$, $_formatNumberImpl$$, $_applyPatternImpl$$, $_parseNegativePattern$$, $_lenientParseNumber$$, $_parseNegativeExponent$$, $_getNumberSettings$$, $_validateNumberOptions$$, $_throwMissingCurrency$$, $_throwNumberOutOfRange$$, $_getNumberOption$$, $_throwNaNException$$, $_throwUnsupportedParseOption$$, $_toRawFixed$$, $_toExponentialPrecision$$, $_toCompactNumber$$, $instance$$12$$, $_regionMatches$$, $_expandAffix$$, $_expandAffixes$$, $_throwSyntaxError$$, $_REGEX_INFINITY$$ = 
    /^[+\-]?infinity$/i, $_REGEX_PARSE_FLOAT$$ = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, $_LENIENT_REGEX_PARSE_FLOAT$$ = /([^+-.0-9]*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?).*$/, $_ESCAPE_REGEXP$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_REGEX_TRIM_ZEROS$$ = /(^0\.0*)([^0].*$)/, $_decimalTypeValues$$ = {trillion:[1E14, 1E13, 1E12], billion:[1E11, 1E10, 1E9], million:[1E8, 1E7, 1E6], thousand:[1E5, 1E4, 1E3]}, $_decimalTypeValuesMap$$ = {trillion:1E12, billion:1E9, million:1E6, thousand:1E3};
    $_zeroPad$$ = function $$_zeroPad$$$($str$$15$$, $count$$24$$, $left$$4$$) {
      var $l$$1$$;
      for ($l$$1$$ = $str$$15$$.length;$l$$1$$ < $count$$24$$;$l$$1$$ += 1) {
        $str$$15$$ = $left$$4$$ ? "0" + $str$$15$$ : $str$$15$$ + "0";
      }
      return $str$$15$$;
    };
    $_throwNumberOutOfRange$$ = function $$_throwNumberOutOfRange$$$($value$$126$$, $minimum$$, $maximum$$, $property$$14$$) {
      var $rangeError$$1$$ = new RangeError($value$$126$$ + " is out of range.  Enter a value between " + $minimum$$ + " and " + $maximum$$ + " for " + $property$$14$$);
      $rangeError$$1$$.errorInfo = {errorCode:"numberOptionOutOfRange", parameterMap:{value:$value$$126$$, minValue:$minimum$$, maxValue:$maximum$$, propertyName:$property$$14$$}};
      throw $rangeError$$1$$;
    };
    $_getNumberOption$$ = function $$_getNumberOption$$$($options$$176_value$$127$$, $property$$15$$, $minimum$$1$$, $maximum$$1$$, $fallback$$) {
      $options$$176_value$$127$$ = $options$$176_value$$127$$[$property$$15$$];
      return void 0 !== $options$$176_value$$127$$ ? ($options$$176_value$$127$$ = Number($options$$176_value$$127$$), (isNaN($options$$176_value$$127$$) || $options$$176_value$$127$$ < $minimum$$1$$ || $options$$176_value$$127$$ > $maximum$$1$$) && $_throwNumberOutOfRange$$($options$$176_value$$127$$, $minimum$$1$$, $maximum$$1$$, $property$$15$$), Math.floor($options$$176_value$$127$$)) : $fallback$$;
    };
    $_getNumberSettings$$ = function $$_getNumberSettings$$$($localeElements$$12$$, $numberSettings$$3$$, $options$$177$$, $locale$$14_numberingSystemKey$$2_pat$$) {
      var $localeElementsMainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$12$$);
      $locale$$14_numberingSystemKey$$2_pat$$ = $OraI18nUtils$$.$getNumberingSystemKey$($localeElementsMainNode$$1$$, $locale$$14_numberingSystemKey$$2_pat$$);
      $numberSettings$$3$$.numberingSystemKey = $locale$$14_numberingSystemKey$$2_pat$$;
      $numberSettings$$3$$.numberingSystem = "symbols-numberSystem-" + $locale$$14_numberingSystemKey$$2_pat$$;
      if (void 0 !== $options$$177$$.pattern && 0 < $options$$177$$.pattern.length) {
        $locale$$14_numberingSystemKey$$2_pat$$ = $options$$177$$.pattern;
      } else {
        var $key$$40_lang$$;
        switch($options$$177$$.style) {
          case "decimal":
            $key$$40_lang$$ = "decimalFormats-numberSystem-";
            break;
          case "currency":
            $key$$40_lang$$ = "currencyFormats-numberSystem-";
            break;
          case "percent":
            $key$$40_lang$$ = "percentFormats-numberSystem-";
            break;
          default:
            $key$$40_lang$$ = "decimalFormats-numberSystem-";
        }
        $key$$40_lang$$ += $numberSettings$$3$$.numberingSystemKey;
        $locale$$14_numberingSystemKey$$2_pat$$ = $localeElementsMainNode$$1$$.numbers[$key$$40_lang$$].standard;
        var $decFormatLength$$ = $options$$177$$.decimalFormat;
        void 0 !== $decFormatLength$$ && ($numberSettings$$3$$.shortDecimalFormat = $localeElementsMainNode$$1$$.numbers[$key$$40_lang$$][$decFormatLength$$].decimalFormat);
      }
      $key$$40_lang$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$12$$)).language.language;
      $numberSettings$$3$$.plurals = $localeElements$$12$$.supplemental.plurals;
      $numberSettings$$3$$.lang = $key$$40_lang$$;
      $numberSettings$$3$$.pat = $locale$$14_numberingSystemKey$$2_pat$$;
      $numberSettings$$3$$.minusSign = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].minusSign;
      $numberSettings$$3$$.decimalSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].decimal;
      $numberSettings$$3$$.exponential = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].exponential;
      $numberSettings$$3$$.groupingSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].group;
      $numberSettings$$3$$.currencyDisplay = $options$$177$$.currencyDisplay;
      void 0 !== $options$$177$$.currency && ($numberSettings$$3$$.currencyCode = $options$$177$$.currency.toUpperCase());
      $numberSettings$$3$$.style = $options$$177$$.style;
      $_applyPatternImpl$$($options$$177$$, $locale$$14_numberingSystemKey$$2_pat$$, $localeElementsMainNode$$1$$, $numberSettings$$3$$);
      void 0 === $options$$177$$.pattern && ($numberSettings$$3$$.minimumIntegerDigits = $_getNumberOption$$($options$$177$$, "minimumIntegerDigits", 1, 21, $numberSettings$$3$$.minimumIntegerDigits), void 0 !== $options$$177$$.maximumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $_getNumberOption$$($options$$177$$, "maximumFractionDigits", 0, 20, $numberSettings$$3$$.maximumFractionDigits), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && 
      ($numberSettings$$3$$.minimumFractionDigits = $numberSettings$$3$$.maximumFractionDigits)), void 0 !== $options$$177$$.minimumFractionDigits && ($numberSettings$$3$$.minimumFractionDigits = $_getNumberOption$$($options$$177$$, "minimumFractionDigits", 0, 20, $numberSettings$$3$$.minimumFractionDigits)), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $numberSettings$$3$$.minimumFractionDigits));
    };
    $_throwMissingCurrency$$ = function $$_throwMissingCurrency$$$($prop$$54$$) {
      var $typeError$$ = new TypeError('The property "currency" is required whenthe property "' + $prop$$54$$ + '" is "currency". An accepted value is a three-letter ISO 4217 currency code.');
      $typeError$$.errorInfo = {errorCode:"optionTypesMismatch", parameterMap:{propertyName:$prop$$54$$, propertyValue:"currency", requiredPropertyName:"currency", requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};
      throw $typeError$$;
    };
    $_throwUnsupportedParseOption$$ = function $$_throwUnsupportedParseOption$$$() {
      var $error$$19$$;
      $error$$19$$ = Error("long and short decimalFormats are not supported for parsing");
      $error$$19$$.errorInfo = {errorCode:"unsupportedParseFormat", parameterMap:{value:"decimal"}};
      throw $error$$19$$;
    };
    $_validateNumberOptions$$ = function $$_validateNumberOptions$$$($options$$178$$, $caller$$1$$) {
      var $c$$34_getOption$$2$$ = $OraI18nUtils$$.$getGetOption$($options$$178$$, $caller$$1$$), $s$$5$$ = $c$$34_getOption$$2$$("style", "string", ["currency", "decimal", "percent", "perMill"], "decimal");
      "decimal" === $s$$5$$ && ($s$$5$$ = $c$$34_getOption$$2$$("decimalFormat", "string", ["standard", "short", "long"]), "OraNumberConverter.parse" === $caller$$1$$ && void 0 !== $s$$5$$ && "standard" !== $s$$5$$ && $_throwUnsupportedParseOption$$());
      $c$$34_getOption$$2$$ = $c$$34_getOption$$2$$("currency", "string");
      "currency" === $s$$5$$ && void 0 === $c$$34_getOption$$2$$ && $_throwMissingCurrency$$("style");
    };
    $_toCompactNumber$$ = function $$_toCompactNumber$$$($number$$, $options$$179$$, $numberSettings$$4$$) {
      function $_getzerosInPattern$$($s$$7$$) {
        var $i$$115$$ = 0, $n$$16$$ = 0, $idx$$3$$ = 0, $prefix$$15$$ = "";
        if ("0" !== $s$$7$$[0]) {
          for (;"0" !== $s$$7$$[$i$$115$$] && $i$$115$$ < $s$$7$$.length;) {
            $i$$115$$++;
          }
          $prefix$$15$$ = $s$$7$$.substr(0, $i$$115$$);
          $idx$$3$$ = $i$$115$$;
        }
        for ($i$$115$$ = $idx$$3$$;$i$$115$$ < $s$$7$$.length;$i$$115$$++) {
          if ("0" === $s$$7$$[$i$$115$$]) {
            $n$$16$$++;
          } else {
            break;
          }
        }
        return[$prefix$$15$$, $n$$16$$];
      }
      var $s$$6_typeVal$$ = function _matchTypeValue($n$$17$$) {
        var $i$$116$$, $j$$13$$, $len$$8$$;
        for ($i$$116$$ in $_decimalTypeValues$$) {
          for ($len$$8$$ = $_decimalTypeValues$$[$i$$116$$].length, $j$$13$$ = 0;$j$$13$$ < $len$$8$$;$j$$13$$++) {
            if ($_decimalTypeValues$$[$i$$116$$][$j$$13$$] <= $n$$17$$) {
              return[$i$$116$$, $_decimalTypeValues$$[$i$$116$$][$j$$13$$]];
            }
          }
        }
        return[$n$$17$$, null];
      }($number$$), $plural_prefix$$14$$ = "";
      if (null !== $s$$6_typeVal$$[1]) {
        var $plural_prefix$$14$$ = $numberSettings$$4$$.plurals[$numberSettings$$4$$.lang](Math.floor($number$$ / $_decimalTypeValuesMap$$[$s$$6_typeVal$$[0]])), $decimalFormatType$$ = "" + $s$$6_typeVal$$[1] + "-count-" + $plural_prefix$$14$$, $decimalFormatType$$ = $numberSettings$$4$$.shortDecimalFormat[$decimalFormatType$$];
        void 0 === $decimalFormatType$$ && ($decimalFormatType$$ = "" + $s$$6_typeVal$$[1] + "-count-other", $decimalFormatType$$ = $numberSettings$$4$$.shortDecimalFormat[$decimalFormatType$$]);
        var $tokens$$4$$ = $_getzerosInPattern$$($decimalFormatType$$), $zeros$$ = $tokens$$4$$[1], $plural_prefix$$14$$ = $tokens$$4$$[0];
        if ($zeros$$ < $decimalFormatType$$.length) {
          var $i$$114$$ = 1 * Math.pow(10, $zeros$$), $i$$114$$ = $s$$6_typeVal$$[1] / $i$$114$$ * 10;
          $number$$ /= $i$$114$$;
        }
      }
      $s$$6_typeVal$$ = "";
      void 0 !== $decimalFormatType$$ && ($s$$6_typeVal$$ = $decimalFormatType$$.substr($zeros$$ + $tokens$$4$$[0].length));
      return $s$$6_typeVal$$ = $plural_prefix$$14$$ + $_toRawFixed$$($number$$, $options$$179$$, $numberSettings$$4$$) + $s$$6_typeVal$$;
    };
    $_toExponentialPrecision$$ = function $$_toExponentialPrecision$$$($number$$1$$, $numberSettings$$5$$) {
      var $numStr0_posExp$$ = $number$$1$$ + "", $str1_trimExp$$ = 0, $numStr1_split$$ = $numStr0_posExp$$.split(/e/i), $numStr$$ = $numStr1_split$$[0];
      $_REGEX_TRIM_ZEROS$$.lastIndex = 0;
      var $exponent$$1_match$$3$$ = $_REGEX_TRIM_ZEROS$$.exec($numStr$$);
      null !== $exponent$$1_match$$3$$ ? ($str1_trimExp$$ = $exponent$$1_match$$3$$[1].length - 1, $numStr$$ = $exponent$$1_match$$3$$[2]) : $numStr$$ = $numStr$$.replace(".", "");
      var $exponent$$1_match$$3$$ = 1 < $numStr1_split$$.length ? parseInt($numStr1_split$$[1], 10) : 0, $numStr1_split$$ = parseInt($numStr$$, 10), $len$$9_padLen$$ = $numberSettings$$5$$.minimumIntegerDigits + $numberSettings$$5$$.maximumFractionDigits;
      $numStr$$.length > $len$$9_padLen$$ && ($len$$9_padLen$$ -= $numStr$$.length, $numStr1_split$$ = Math.round($numStr1_split$$ * Math.pow(10, $len$$9_padLen$$)));
      $len$$9_padLen$$ = $numberSettings$$5$$.minimumIntegerDigits + $numberSettings$$5$$.minimumFractionDigits;
      $numStr1_split$$ = $_zeroPad$$($numStr1_split$$ + "", $len$$9_padLen$$, !1);
      $exponent$$1_match$$3$$ = -1 !== $numStr0_posExp$$.indexOf(".") ? $exponent$$1_match$$3$$ - ($numberSettings$$5$$.minimumIntegerDigits - $numStr0_posExp$$.indexOf(".") + $str1_trimExp$$) : $exponent$$1_match$$3$$ - ($len$$9_padLen$$ - $numStr$$.length - $numberSettings$$5$$.minimumFractionDigits);
      $numStr0_posExp$$ = Math.abs($exponent$$1_match$$3$$);
      $numStr0_posExp$$ = $_zeroPad$$($numStr0_posExp$$ + "", $numberSettings$$5$$.minExponentDigits, !0);
      0 > $exponent$$1_match$$3$$ && ($numStr0_posExp$$ = $numberSettings$$5$$.minusSign + $numStr0_posExp$$);
      $str1_trimExp$$ = $numStr1_split$$.slice(0, $numberSettings$$5$$.minimumIntegerDigits);
      return $str1_trimExp$$ = 0 < $numStr1_split$$.slice($numberSettings$$5$$.minimumIntegerDigits).length ? $str1_trimExp$$ + ($numberSettings$$5$$.decimalSeparator + $numStr1_split$$.slice($numberSettings$$5$$.minimumIntegerDigits) + $numberSettings$$5$$.exponential + $numStr0_posExp$$) : $str1_trimExp$$ + ($numberSettings$$5$$.exponential + $numStr0_posExp$$);
    };
    $_toRawFixed$$ = function $$_toRawFixed$$$($number$$2_sep$$, $options$$180_stringIndex$$, $numberSettings$$6_rets$$) {
      var $curSize$$ = $numberSettings$$6_rets$$.groupingSize, $curSize0$$ = $numberSettings$$6_rets$$.groupingSize0, $factor$$2_numberString_rounded$$, $split$$1$$ = ($number$$2_sep$$ + "").split(/e/i), $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      var $split$$1$$ = $factor$$2_numberString_rounded$$.split("."), $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      if (1 < $split$$1$$.length && $right$$4$$.length > $exponent$$2$$) {
        var $precision_ret$$9$$ = Math.min($numberSettings$$6_rets$$.maximumFractionDigits, $right$$4$$.length - $exponent$$2$$);
        $factor$$2_numberString_rounded$$ = Math.pow(10, $precision_ret$$9$$);
        $factor$$2_numberString_rounded$$ = Math.round($number$$2_sep$$ * $factor$$2_numberString_rounded$$) / $factor$$2_numberString_rounded$$;
        isFinite($factor$$2_numberString_rounded$$) || ($factor$$2_numberString_rounded$$ = $number$$2_sep$$);
        $number$$2_sep$$ = $factor$$2_numberString_rounded$$;
      }
      $split$$1$$ = ($number$$2_sep$$ + "").split(/e/i);
      $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $split$$1$$ = $factor$$2_numberString_rounded$$.split(".");
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      0 < $exponent$$2$$ ? ($right$$4$$ = $_zeroPad$$($right$$4$$, $exponent$$2$$, !1), $factor$$2_numberString_rounded$$ += $right$$4$$.slice(0, $exponent$$2$$), $right$$4$$ = $right$$4$$.substr($exponent$$2$$)) : 0 > $exponent$$2$$ && ($exponent$$2$$ = -$exponent$$2$$, $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $exponent$$2$$ + 1, !0), $right$$4$$ = $factor$$2_numberString_rounded$$.slice(-$exponent$$2$$, $factor$$2_numberString_rounded$$.length) + $right$$4$$, 
      $factor$$2_numberString_rounded$$ = $factor$$2_numberString_rounded$$.slice(0, -$exponent$$2$$));
      $right$$4$$ = 0 < $precision_ret$$9$$ ? $numberSettings$$6_rets$$.decimalSeparator + ($right$$4$$.length > $precision_ret$$9$$ ? $right$$4$$.slice(0, $precision_ret$$9$$) : $_zeroPad$$($right$$4$$, $precision_ret$$9$$, !1)) : 0 < $numberSettings$$6_rets$$.minimumFractionDigits ? $numberSettings$$6_rets$$.decimalSeparator : "";
      $right$$4$$ = $_zeroPad$$($right$$4$$, $numberSettings$$6_rets$$.decimalSeparator.length + $numberSettings$$6_rets$$.minimumFractionDigits, !1);
      $number$$2_sep$$ = $numberSettings$$6_rets$$.groupingSeparator;
      $precision_ret$$9$$ = "";
      !1 === $options$$180_stringIndex$$.useGrouping && void 0 === $options$$180_stringIndex$$.pattern && ($number$$2_sep$$ = "");
      $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $numberSettings$$6_rets$$.minimumIntegerDigits, !0);
      $options$$180_stringIndex$$ = $factor$$2_numberString_rounded$$.length - 1;
      for ($right$$4$$ = 1 < $right$$4$$.length ? $right$$4$$ : "";0 <= $options$$180_stringIndex$$;) {
        if (0 === $curSize$$ || $curSize$$ > $options$$180_stringIndex$$) {
          return $numberSettings$$6_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$180_stringIndex$$ + 1) + ($precision_ret$$9$$.length ? $number$$2_sep$$ + $precision_ret$$9$$ + $right$$4$$ : $right$$4$$);
        }
        $precision_ret$$9$$ = $factor$$2_numberString_rounded$$.slice($options$$180_stringIndex$$ - $curSize$$ + 1, $options$$180_stringIndex$$ + 1) + ($precision_ret$$9$$.length ? $number$$2_sep$$ + $precision_ret$$9$$ : "");
        $options$$180_stringIndex$$ -= $curSize$$;
        0 < $curSize0$$ && ($curSize$$ = $numberSettings$$6_rets$$.groupingSize0);
      }
      return $numberSettings$$6_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$180_stringIndex$$ + 1) + $number$$2_sep$$ + $precision_ret$$9$$ + $right$$4$$;
    };
    $_formatNumberImpl$$ = function $$_formatNumberImpl$$$($numberingSystemKey$$3_value$$128$$, $options$$181_ret$$10$$, $localeElements$$13_localeElementsMainNode$$2_number$$3$$, $idx$$4_numberSettings$$7$$, $locale$$15_nativeRet$$) {
      $localeElements$$13_localeElementsMainNode$$2_number$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$13_localeElementsMainNode$$2_number$$3$$);
      if (!isFinite($numberingSystemKey$$3_value$$128$$)) {
        return Infinity === $numberingSystemKey$$3_value$$128$$ || -Infinity === $numberingSystemKey$$3_value$$128$$ ? $localeElements$$13_localeElementsMainNode$$2_number$$3$$.numbers[$idx$$4_numberSettings$$7$$.numberingSystem].infinity : $localeElements$$13_localeElementsMainNode$$2_number$$3$$.numbers[$idx$$4_numberSettings$$7$$.numberingSystem].nan;
      }
      $localeElements$$13_localeElementsMainNode$$2_number$$3$$ = Math.abs($numberingSystemKey$$3_value$$128$$);
      !0 === $idx$$4_numberSettings$$7$$.isPercent || "percent" === $options$$181_ret$$10$$.style ? $localeElements$$13_localeElementsMainNode$$2_number$$3$$ *= 100 : !0 === $idx$$4_numberSettings$$7$$.isPerMill && ($localeElements$$13_localeElementsMainNode$$2_number$$3$$ *= 1E3);
      $localeElements$$13_localeElementsMainNode$$2_number$$3$$ = "decimal" === $options$$181_ret$$10$$.style && void 0 !== $options$$181_ret$$10$$.decimalFormat && "standard" !== $options$$181_ret$$10$$.decimalFormat ? $_toCompactNumber$$($localeElements$$13_localeElementsMainNode$$2_number$$3$$, $options$$181_ret$$10$$, $idx$$4_numberSettings$$7$$) : !0 === $idx$$4_numberSettings$$7$$.useExponentialNotation ? $_toExponentialPrecision$$($localeElements$$13_localeElementsMainNode$$2_number$$3$$, 
      $idx$$4_numberSettings$$7$$) : $_toRawFixed$$($localeElements$$13_localeElementsMainNode$$2_number$$3$$, $options$$181_ret$$10$$, $idx$$4_numberSettings$$7$$);
      $options$$181_ret$$10$$ = "";
      $options$$181_ret$$10$$ = 0 > $numberingSystemKey$$3_value$$128$$ ? $options$$181_ret$$10$$ + ($idx$$4_numberSettings$$7$$.negativePrefix + $localeElements$$13_localeElementsMainNode$$2_number$$3$$ + $idx$$4_numberSettings$$7$$.negativeSuffix) : $options$$181_ret$$10$$ + ($idx$$4_numberSettings$$7$$.positivePrefix + $localeElements$$13_localeElementsMainNode$$2_number$$3$$ + $idx$$4_numberSettings$$7$$.positiveSuffix);
      $numberingSystemKey$$3_value$$128$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$15_nativeRet$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$3_value$$128$$] && ($numberingSystemKey$$3_value$$128$$ = "latn");
      if ("latn" !== $numberingSystemKey$$3_value$$128$$) {
        $locale$$15_nativeRet$$ = [];
        for ($idx$$4_numberSettings$$7$$ = 0;$idx$$4_numberSettings$$7$$ < $options$$181_ret$$10$$.length;$idx$$4_numberSettings$$7$$++) {
          "0" <= $options$$181_ret$$10$$[$idx$$4_numberSettings$$7$$] && "9" >= $options$$181_ret$$10$$[$idx$$4_numberSettings$$7$$] ? $locale$$15_nativeRet$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$3_value$$128$$][$options$$181_ret$$10$$[$idx$$4_numberSettings$$7$$]]) : $locale$$15_nativeRet$$.push($options$$181_ret$$10$$[$idx$$4_numberSettings$$7$$]);
        }
        return $locale$$15_nativeRet$$.join("");
      }
      return $options$$181_ret$$10$$;
    };
    $_parseNegativePattern$$ = function $$_parseNegativePattern$$$($num$$7_value$$129$$, $options$$182_symbol$$1$$, $numberSettings$$8_ret$$11$$, $localeElements$$14$$) {
      $num$$7_value$$129$$ = $OraI18nUtils$$.$trimNumber$($num$$7_value$$129$$);
      var $sign$$1$$ = "", $exactMatch$$ = !1, $nbSettingNegSuffix_posSignRegExp$$ = new RegExp("^" + $localeElements$$14$$.numbers[$numberSettings$$8_ret$$11$$.numberingSystem].plusSign.replace($_ESCAPE_REGEXP$$, "\\$1"));
      $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($nbSettingNegSuffix_posSignRegExp$$, "");
      var $nbSettingPosPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$11$$.positivePrefix), $nbSettingPosSuffix_posSuffix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$11$$.positiveSuffix), $nbSettingNegPrefix_negPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$11$$.negativePrefix), $nbSettingNegSuffix_posSignRegExp$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$11$$.negativeSuffix), $code$$4_posPrefRegexp_posPrefix$$ = new RegExp("^" + ($nbSettingPosPrefix$$ || 
      "").replace($_ESCAPE_REGEXP$$, "\\$1")), $posSuffRegexp$$ = new RegExp(($nbSettingPosSuffix_posSuffix$$ || "").replace($_ESCAPE_REGEXP$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp("^" + ($nbSettingNegPrefix_negPrefix$$ || "").replace($_ESCAPE_REGEXP$$, "\\$1")), $negSuffRegexp$$ = new RegExp(($nbSettingNegSuffix_posSignRegExp$$ || "").replace($_ESCAPE_REGEXP$$, "\\$1") + "$");
      if (!0 === $negPrefRegexp$$.test($num$$7_value$$129$$) && !0 === $negSuffRegexp$$.test($num$$7_value$$129$$)) {
        $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($negPrefRegexp$$, ""), $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0;
      } else {
        if (!0 === $code$$4_posPrefRegexp_posPrefix$$.test($num$$7_value$$129$$) && !0 === $posSuffRegexp$$.test($num$$7_value$$129$$)) {
          $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = "+", $exactMatch$$ = !0;
        } else {
          if ("currency" === $options$$182_symbol$$1$$.style) {
            $options$$182_symbol$$1$$ = $code$$4_posPrefRegexp_posPrefix$$ = $numberSettings$$8_ret$$11$$.currencyCode;
            var $negSuffix_repStr$$;
            void 0 !== $localeElements$$14$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$] && ($options$$182_symbol$$1$$ = $localeElements$$14$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$].symbol);
            void 0 === $numberSettings$$8_ret$$11$$.currencyDisplay || "symbol" === $numberSettings$$8_ret$$11$$.currencyDisplay ? $negSuffix_repStr$$ = $options$$182_symbol$$1$$ : "code" === $numberSettings$$8_ret$$11$$.currencyDisplay && ($negSuffix_repStr$$ = $code$$4_posPrefRegexp_posPrefix$$);
            void 0 !== $negSuffix_repStr$$ && ($code$$4_posPrefRegexp_posPrefix$$ = ($nbSettingPosPrefix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingPosSuffix_posSuffix$$ = ($nbSettingPosSuffix_posSuffix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingNegPrefix_negPrefix$$ = ($nbSettingNegPrefix_negPrefix$$ || "").replace($negSuffix_repStr$$, ""), $negSuffix_repStr$$ = ($nbSettingNegSuffix_posSignRegExp$$ || "").replace($negSuffix_repStr$$, ""), $code$$4_posPrefRegexp_posPrefix$$ = 
            new RegExp(("^" + $code$$4_posPrefRegexp_posPrefix$$).replace($_ESCAPE_REGEXP$$, "\\$1")), $posSuffRegexp$$ = new RegExp($nbSettingPosSuffix_posSuffix$$.replace($_ESCAPE_REGEXP$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp(("^" + $nbSettingNegPrefix_negPrefix$$).replace($_ESCAPE_REGEXP$$, "\\$1")), $negSuffRegexp$$ = new RegExp($negSuffix_repStr$$.replace($_ESCAPE_REGEXP$$, "\\$1") + "$"), !0 === $negPrefRegexp$$.test($num$$7_value$$129$$) && !0 === $negSuffRegexp$$.test($num$$7_value$$129$$) ? 
            ($num$$7_value$$129$$ = $num$$7_value$$129$$.replace($negPrefRegexp$$, ""), $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0) : !0 === $code$$4_posPrefRegexp_posPrefix$$.test($num$$7_value$$129$$) && !0 === $posSuffRegexp$$.test($num$$7_value$$129$$) && ($num$$7_value$$129$$ = $num$$7_value$$129$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$7_value$$129$$ = $num$$7_value$$129$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = 
            "+", $exactMatch$$ = !0));
          }
        }
      }
      $exactMatch$$ ? $numberSettings$$8_ret$$11$$ = [$sign$$1$$, $num$$7_value$$129$$] : ($numberSettings$$8_ret$$11$$ = $_lenientParseNumber$$($num$$7_value$$129$$, $numberSettings$$8_ret$$11$$, $localeElements$$14$$), $numberSettings$$8_ret$$11$$[2] = !0);
      return $numberSettings$$8_ret$$11$$;
    };
    $_lenientParseNumber$$ = function $$_lenientParseNumber$$$($num$$8$$, $altGroupSep$$1_exponential_numberSettings$$9$$, $localeElements$$15$$) {
      var $groupingSeparator$$1_match$$4$$ = $localeElements$$15$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].group, $decimalSeparator$$1$$ = $localeElements$$15$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].decimal, $localeMinusSign$$ = $localeElements$$15$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].minusSign, $sign$$2$$ = "", $dot_resNum$$ = "";
      $altGroupSep$$1_exponential_numberSettings$$9$$ = $OraI18nUtils$$.$toUpper$($localeElements$$15$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].exponential);
      $num$$8$$ = $OraI18nUtils$$.$toUpper$($num$$8$$);
      $num$$8$$ = $num$$8$$.split($altGroupSep$$1_exponential_numberSettings$$9$$).join("E");
      $num$$8$$ = $num$$8$$.split($groupingSeparator$$1_match$$4$$).join("");
      $altGroupSep$$1_exponential_numberSettings$$9$$ = $groupingSeparator$$1_match$$4$$.replace(/\u00A0/g, " ");
      $groupingSeparator$$1_match$$4$$ !== $altGroupSep$$1_exponential_numberSettings$$9$$ && ($num$$8$$ = $num$$8$$.split($altGroupSep$$1_exponential_numberSettings$$9$$).join(""));
      $num$$8$$ = $num$$8$$.split($decimalSeparator$$1$$).join(".");
      "." === $num$$8$$.charAt(0) && ($num$$8$$ = $num$$8$$.substr(1), $dot_resNum$$ = ".");
      $num$$8$$ = $num$$8$$.replace($localeMinusSign$$, "-");
      $groupingSeparator$$1_match$$4$$ = $_LENIENT_REGEX_PARSE_FLOAT$$.exec($num$$8$$);
      $dot_resNum$$ += $groupingSeparator$$1_match$$4$$[2];
      $OraI18nUtils$$.$startsWith$($dot_resNum$$, "-") ? ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "-") : $OraI18nUtils$$.$startsWith$($num$$8$$, "+") && ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "+");
      return[$sign$$2$$, $dot_resNum$$];
    };
    $_parseNegativeExponent$$ = function $$_parseNegativeExponent$$$($value$$130$$, $localeElements$$16_pos$$2$$, $numberSettings$$10$$) {
      var $neg$$ = $localeElements$$16_pos$$2$$.numbers[$numberSettings$$10$$.numberingSystem].minusSign;
      $localeElements$$16_pos$$2$$ = $localeElements$$16_pos$$2$$.numbers[$numberSettings$$10$$.numberingSystem].plusSign;
      var $ret$$12$$;
      $value$$130$$ = $OraI18nUtils$$.$trimNumber$($value$$130$$);
      $neg$$ = $OraI18nUtils$$.$trimNumber$($neg$$);
      $localeElements$$16_pos$$2$$ = $OraI18nUtils$$.$trimNumber$($localeElements$$16_pos$$2$$);
      $OraI18nUtils$$.$startsWith$($value$$130$$, $neg$$) ? $ret$$12$$ = ["-", $value$$130$$.substr($neg$$.length)] : $OraI18nUtils$$.$startsWith$($value$$130$$, $OraI18nUtils$$.$trimNumber$($localeElements$$16_pos$$2$$)) && ($ret$$12$$ = ["+", $value$$130$$.substr($localeElements$$16_pos$$2$$.length)]);
      return $ret$$12$$ || ["", $value$$130$$];
    };
    var $posPrefixPattern$$, $posSuffixPattern$$, $negPrefixPattern$$, $negSuffixPattern$$;
    $_throwSyntaxError$$ = function $$_throwSyntaxError$$$($pattern$$4$$) {
      var $syntaxError$$;
      $syntaxError$$ = new SyntaxError('Unexpected character(s) encountered in the pattern "' + $pattern$$4$$ + ' An example of a valid pattern is "#,##0.###".');
      $syntaxError$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$pattern$$4$$, propertyValueHint:"#,##0.###"}};
      throw $syntaxError$$;
    };
    $_regionMatches$$ = function $$_regionMatches$$$($str1$$1$$, $offset1$$, $str2$$1$$) {
      return null !== (new RegExp($str2$$1$$, "i")).exec($str1$$1$$.substr($offset1$$, $str2$$1$$.length));
    };
    $_expandAffixes$$ = function $$_expandAffixes$$$($localeElements$$17$$, $numberSettings$$11$$) {
      var $curDisplay$$ = {};
      null !== $posPrefixPattern$$ && ($numberSettings$$11$$.positivePrefix = $_expandAffix$$($posPrefixPattern$$, $localeElements$$17$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $posSuffixPattern$$ && ($numberSettings$$11$$.positiveSuffix = $_expandAffix$$($posSuffixPattern$$, $localeElements$$17$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $negPrefixPattern$$ && ($numberSettings$$11$$.negativePrefix = $_expandAffix$$($negPrefixPattern$$, $localeElements$$17$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $negSuffixPattern$$ && ($numberSettings$$11$$.negativeSuffix = $_expandAffix$$($negSuffixPattern$$, $localeElements$$17$$, $numberSettings$$11$$, $curDisplay$$));
      void 0 !== $curDisplay$$.name && ($numberSettings$$11$$.positiveSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.positivePrefix = "", "ar" === $numberSettings$$11$$.lang ? ($numberSettings$$11$$.negativeSuffix = $localeElements$$17$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign + "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.negativePrefix = "") : ($numberSettings$$11$$.negativeSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.negativePrefix = $localeElements$$17$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign));
    };
    $_expandAffix$$ = function $$_expandAffix$$$($pattern$$5$$, $localeElements$$18$$, $numberSettings$$12$$, $currencyDisplay$$) {
      for (var $buffer$$9$$ = "", $i$$117$$ = 0;$i$$117$$ < $pattern$$5$$.length;) {
        var $c$$35_code$$5$$ = $pattern$$5$$.charAt($i$$117$$++);
        if ("'" !== $c$$35_code$$5$$) {
          switch($c$$35_code$$5$$) {
            case "\u00a4":
              var $name$$77$$ = $c$$35_code$$5$$ = $numberSettings$$12$$.currencyCode, $symbol$$2$$ = $c$$35_code$$5$$;
              void 0 !== $localeElements$$18$$.numbers.currencies[$c$$35_code$$5$$] && ($name$$77$$ = $localeElements$$18$$.numbers.currencies[$c$$35_code$$5$$].displayName, $symbol$$2$$ = $localeElements$$18$$.numbers.currencies[$c$$35_code$$5$$].symbol);
              void 0 === $numberSettings$$12$$.currencyDisplay || "symbol" === $numberSettings$$12$$.currencyDisplay ? $c$$35_code$$5$$ = $symbol$$2$$ : "code" !== $numberSettings$$12$$.currencyDisplay && ($c$$35_code$$5$$ = $name$$77$$, $currencyDisplay$$.name = $c$$35_code$$5$$);
              break;
            case "%":
              $c$$35_code$$5$$ = $localeElements$$18$$.numbers[$numberSettings$$12$$.numberingSystem].percentSign;
              break;
            case "\u2030":
              $c$$35_code$$5$$ = $localeElements$$18$$.numbers[$numberSettings$$12$$.numberingSystem].perMille;
              break;
            case "-":
              $c$$35_code$$5$$ = $localeElements$$18$$.numbers[$numberSettings$$12$$.numberingSystem].minusSign;
          }
          $buffer$$9$$ = $buffer$$9$$.concat($c$$35_code$$5$$);
        }
      }
      return $buffer$$9$$;
    };
    $_applyPatternImpl$$ = function $$_applyPatternImpl$$$($options$$183$$, $pattern$$6$$, $localeElements$$19$$, $numberSettings$$13$$) {
      for (var $gotNegative$$ = !1, $useExponentialNotation$$ = !1, $phaseOneLength$$ = 0, $start$$26$$ = 0, $isPrefix$$ = !0, $j$$14$$ = 1;0 <= $j$$14$$ && $start$$26$$ < $pattern$$6$$.length;--$j$$14$$) {
        for (var $digitTotalCount_inQuote$$ = !1, $prefix$$16$$ = "", $suffix$$ = "", $decimalPos$$1$$ = -1, $multiplier$$ = 1, $digitLeftCount$$ = 0, $n$$18_zeroDigitCount$$ = 0, $digitRightCount$$ = 0, $groupingCount$$ = -1, $groupingCount0$$ = -1, $minExponentDigits$$, $phase$$ = 0, $isPrefix$$ = !0, $pos$$3$$ = $start$$26$$;$pos$$3$$ < $pattern$$6$$.length;++$pos$$3$$) {
          var $ch$$1_doubled$$ = $pattern$$6$$.charAt($pos$$3$$);
          switch($phase$$) {
            case 0:
            ;
            case 2:
              if ($digitTotalCount_inQuote$$) {
                if ("'" === $ch$$1_doubled$$) {
                  $pos$$3$$ + 1 < $pattern$$6$$.length && "'" === $pattern$$6$$.charAt($pos$$3$$ + 1) ? (++$pos$$3$$, $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !1;
                  continue;
                }
              } else {
                if ("#" === $ch$$1_doubled$$ || "0" === $ch$$1_doubled$$ || "," === $ch$$1_doubled$$ || "." === $ch$$1_doubled$$) {
                  $phase$$ = 1;
                  --$pos$$3$$;
                  continue;
                } else {
                  if ("\u00a4" === $ch$$1_doubled$$) {
                    void 0 === $options$$183$$.currency && $_throwMissingCurrency$$("pattern");
                    $options$$183$$.style = "currency";
                    ($ch$$1_doubled$$ = $pos$$3$$ + 1 < $pattern$$6$$.length && "\u00a4" === $pattern$$6$$.charAt($pos$$3$$ + 1)) && ++$pos$$3$$;
                    $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4") : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4");
                    continue;
                  } else {
                    if ("'" === $ch$$1_doubled$$) {
                      if ("'" === $ch$$1_doubled$$) {
                        $pos$$3$$ + 1 < $pattern$$6$$.length && "'" === $pattern$$6$$.charAt($pos$$3$$ + 1) ? (++$pos$$3$$, $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !0;
                        continue;
                      }
                    } else {
                      if (";" === $ch$$1_doubled$$) {
                        0 !== $phase$$ && 0 !== $j$$14$$ || $_throwSyntaxError$$($pattern$$6$$);
                        $start$$26$$ = $pos$$3$$ + 1;
                        $pos$$3$$ = $pattern$$6$$.length;
                        continue;
                      } else {
                        if ("%" === $ch$$1_doubled$$) {
                          $options$$183$$.style = "percent";
                          1 !== $multiplier$$ && $_throwSyntaxError$$($pattern$$6$$);
                          $numberSettings$$13$$.isPercent = !0;
                          $multiplier$$ = 100;
                          $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'%") : $suffix$$ = $suffix$$.concat("'%");
                          continue;
                        } else {
                          if ("\u2030" === $ch$$1_doubled$$) {
                            1 !== $multiplier$$ && $_throwSyntaxError$$($pattern$$6$$);
                            $options$$183$$.style = "perMill";
                            $numberSettings$$13$$.isPerMill = !0;
                            $multiplier$$ = 1E3;
                            $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'\u2030") : $suffix$$ = $suffix$$.concat("'\u2030");
                            continue;
                          } else {
                            if ("-" === $ch$$1_doubled$$) {
                              $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'-") : $suffix$$ = $suffix$$.concat("'-");
                              continue;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat($ch$$1_doubled$$) : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$);
              break;
            case 1:
              if (1 === $j$$14$$) {
                ++$phaseOneLength$$;
              } else {
                0 === --$phaseOneLength$$ && ($phase$$ = 2, $isPrefix$$ = !1);
                continue;
              }
              if ("#" === $ch$$1_doubled$$) {
                0 < $n$$18_zeroDigitCount$$ ? ++$digitRightCount$$ : ++$digitLeftCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
              } else {
                if ("0" === $ch$$1_doubled$$) {
                  0 < $digitRightCount$$ && $_throwSyntaxError$$($pattern$$6$$), ++$n$$18_zeroDigitCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
                } else {
                  if ("," === $ch$$1_doubled$$) {
                    $groupingCount0$$ = $groupingCount$$, $groupingCount$$ = 0;
                  } else {
                    if ("." === $ch$$1_doubled$$) {
                      0 <= $decimalPos$$1$$ && $_throwSyntaxError$$($pattern$$6$$), $decimalPos$$1$$ = $digitLeftCount$$ + $n$$18_zeroDigitCount$$ + $digitRightCount$$;
                    } else {
                      if ($_regionMatches$$($pattern$$6$$, $pos$$3$$, "E")) {
                        $useExponentialNotation$$ && $_throwSyntaxError$$($pattern$$6$$);
                        $useExponentialNotation$$ = !0;
                        $minExponentDigits$$ = 0;
                        for ($pos$$3$$ += 1;$pos$$3$$ < $pattern$$6$$.length && "0" === $pattern$$6$$.charAt($pos$$3$$);) {
                          ++$minExponentDigits$$, ++$phaseOneLength$$, ++$pos$$3$$;
                        }
                        (1 > $digitLeftCount$$ + $n$$18_zeroDigitCount$$ || 1 > $minExponentDigits$$) && $_throwSyntaxError$$($pattern$$6$$);
                        $phase$$ = 2;
                        $isPrefix$$ = !1;
                        --$pos$$3$$;
                      } else {
                        $phase$$ = 2, $isPrefix$$ = !1, --$pos$$3$$, --$phaseOneLength$$;
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        0 === $n$$18_zeroDigitCount$$ && 0 < $digitLeftCount$$ && 0 <= $decimalPos$$1$$ && ($n$$18_zeroDigitCount$$ = $decimalPos$$1$$, 0 === $n$$18_zeroDigitCount$$ && ++$n$$18_zeroDigitCount$$, $digitRightCount$$ = $digitLeftCount$$ - $n$$18_zeroDigitCount$$, $digitLeftCount$$ = $n$$18_zeroDigitCount$$ - 1, $n$$18_zeroDigitCount$$ = 1);
        (0 > $decimalPos$$1$$ && 0 < $digitRightCount$$ || 0 <= $decimalPos$$1$$ && ($decimalPos$$1$$ < $digitLeftCount$$ || $decimalPos$$1$$ > $digitLeftCount$$ + $n$$18_zeroDigitCount$$) || 0 === $groupingCount$$ || $digitTotalCount_inQuote$$) && $_throwSyntaxError$$($pattern$$6$$);
        1 === $j$$14$$ ? ($posPrefixPattern$$ = $prefix$$16$$, $posSuffixPattern$$ = $suffix$$, $negPrefixPattern$$ = $posPrefixPattern$$, $negSuffixPattern$$ = $posSuffixPattern$$, $digitTotalCount_inQuote$$ = $digitLeftCount$$ + $n$$18_zeroDigitCount$$ + $digitRightCount$$, $numberSettings$$13$$.minimumIntegerDigits = (0 <= $decimalPos$$1$$ ? $decimalPos$$1$$ : $digitTotalCount_inQuote$$) - $digitLeftCount$$, $numberSettings$$13$$.maximumIntegerDigits = $useExponentialNotation$$ ? $digitLeftCount$$ + 
        $numberSettings$$13$$.minimumIntegerDigits : 2147483647, $numberSettings$$13$$.maximumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitTotalCount_inQuote$$ - $decimalPos$$1$$ : 0, $numberSettings$$13$$.minimumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitLeftCount$$ + $n$$18_zeroDigitCount$$ - $decimalPos$$1$$ : 0, $numberSettings$$13$$.groupingSize = 0 < $groupingCount$$ ? $groupingCount$$ : 0, $numberSettings$$13$$.groupingSize0 = $groupingCount0$$) : ($negPrefixPattern$$ = $prefix$$16$$, 
        $negSuffixPattern$$ = $suffix$$, $gotNegative$$ = !0);
      }
      0 === $pattern$$6$$.length && ($posPrefixPattern$$ = $posSuffixPattern$$ = "", $numberSettings$$13$$.minimumIntegerDigits = 0, $numberSettings$$13$$.maximumIntegerDigits = 2147483647, $numberSettings$$13$$.minimumFractionDigits = 0, $numberSettings$$13$$.maximumFractionDigits = 2147483647);
      $numberSettings$$13$$.useExponentialNotation = $useExponentialNotation$$;
      $numberSettings$$13$$.minExponentDigits = $minExponentDigits$$;
      if (!$gotNegative$$ || 0 === $negPrefixPattern$$.localeCompare($posPrefixPattern$$) && 0 === $negSuffixPattern$$.localeCompare($posSuffixPattern$$)) {
        "currency" === $options$$183$$.style && "ar" === $numberSettings$$13$$.lang ? ($negSuffixPattern$$ = $posSuffixPattern$$ + "'\u200f-", $negPrefixPattern$$ = $posPrefixPattern$$) : ($negSuffixPattern$$ = $posSuffixPattern$$, $negPrefixPattern$$ = "'-" + $posPrefixPattern$$);
      }
      $_expandAffixes$$($localeElements$$19$$, $numberSettings$$13$$);
    };
    $_throwNaNException$$ = function $$_throwNaNException$$$($msg$$17_ret$$13$$, $error$$20_options$$184$$, $numberSettings$$14$$, $errStr$$1$$) {
      if (isNaN($msg$$17_ret$$13$$)) {
        var $code$$6$$;
        $msg$$17_ret$$13$$ = "Unparsable number " + $errStr$$1$$ + " The expected number pattern is " + $numberSettings$$14$$.pat;
        switch($error$$20_options$$184$$.style) {
          case "decimal":
            $code$$6$$ = "decimalFormatMismatch";
            break;
          case "currency":
            $code$$6$$ = "currencyFormatMismatch";
            break;
          case "percent":
            $code$$6$$ = "percentFormatMismatch";
        }
        $error$$20_options$$184$$ = Error($msg$$17_ret$$13$$);
        $error$$20_options$$184$$.errorInfo = {errorCode:$code$$6$$, parameterMap:{value:$errStr$$1$$, format:$numberSettings$$14$$.pat}};
        throw $error$$20_options$$184$$;
      }
      !0 === $numberSettings$$14$$.isPercent || "percent" === $error$$20_options$$184$$.style ? $msg$$17_ret$$13$$ /= 100 : !0 === $numberSettings$$14$$.isPerMill && ($msg$$17_ret$$13$$ /= 1E3);
      return $msg$$17_ret$$13$$;
    };
    return{$getInstance$:function() {
      $instance$$12$$ || ($instance$$12$$ = $_init$$());
      return $instance$$12$$;
    }};
  }();
  $oj$$6$$.$RegExpValidator$ = function $$oj$$6$$$$RegExpValidator$$($options$$185$$) {
    this.Init($options$$185$$);
  };
  $goog$exportPath_$$("RegExpValidator", $oj$$6$$.$RegExpValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RegExpValidator$, $oj$$6$$.$Validator$, "oj.RegExpValidator");
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.regExp.detail";
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.regExp.summary";
  $oj$$6$$.$RegExpValidator$.prototype.Init = function $$oj$$6$$$$RegExpValidator$$$Init$($options$$186$$) {
    $oj$$6$$.$RegExpValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$186$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.Init", {Init:$oj$$6$$.$RegExpValidator$.prototype.Init});
  $oj$$6$$.$RegExpValidator$.prototype.validate = function $$oj$$6$$$$RegExpValidator$$$validate$($params$$10_value$$131$$) {
    var $pattern$$7$$ = this.$_options$ && this.$_options$.pattern || "", $label$$3$$, $localizedSummary$$1_summary$$18$$, $detail$$21_localizedDetail$$1$$;
    if (null === $params$$10_value$$131$$ || void 0 === $params$$10_value$$131$$ || "" === $params$$10_value$$131$$) {
      return!0;
    }
    $params$$10_value$$131$$ = $params$$10_value$$131$$ ? $params$$10_value$$131$$.toString() : $params$$10_value$$131$$;
    var $matchArr$$;
    $matchArr$$ = $params$$10_value$$131$$.match("^(" + $pattern$$7$$ + ")$");
    if (null === $matchArr$$ || $matchArr$$[0] !== $params$$10_value$$131$$) {
      throw this.$_options$ && ($localizedSummary$$1_summary$$18$$ = this.$_options$.messageSummary || null, $detail$$21_localizedDetail$$1$$ = this.$_options$.messageDetail || null, $label$$3$$ = this.$_options$ && this.$_options$.label || ""), $params$$10_value$$131$$ = {label:$label$$3$$, pattern:$pattern$$7$$, value:$params$$10_value$$131$$}, $localizedSummary$$1_summary$$18$$ = $localizedSummary$$1_summary$$18$$ ? $oj$$6$$.$Translations$.$applyParameters$($localizedSummary$$1_summary$$18$$, 
      $params$$10_value$$131$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $params$$10_value$$131$$), $detail$$21_localizedDetail$$1$$ = $detail$$21_localizedDetail$$1$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$21_localizedDetail$$1$$, $params$$10_value$$131$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $params$$10_value$$131$$), new $oj$$6$$.$ValidatorError$($localizedSummary$$1_summary$$18$$, $detail$$21_localizedDetail$$1$$);
    }
    return!0;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.validate", {validate:$oj$$6$$.$RegExpValidator$.prototype.validate});
  $oj$$6$$.$RegExpValidator$.prototype.$getHint$ = function $$oj$$6$$$$RegExpValidator$$$$getHint$$() {
    var $hint$$6$$ = null, $params$$11$$ = {};
    this.$_options$ && this.$_options$.hint && ($params$$11$$ = {pattern:this.$_options$.pattern}, $hint$$6$$ = $oj$$6$$.$Translations$.$applyParameters$(this.$_options$.hint, $params$$11$$));
    return $hint$$6$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RegExpValidator$.prototype.$getHint$});
  $oj$$6$$.$RegExpValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RegExpValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$IntlConverterUtils$ = {};
  $goog$exportPath_$$("IntlConverterUtils", $oj$$6$$.$IntlConverterUtils$, $oj$$6$$);
  $oj$$6$$.$IntlConverterUtils$.isoToLocalDate = function $$oj$$6$$$$IntlConverterUtils$$isoToLocalDate$($isoString$$3$$) {
    return $OraI18nUtils$$.isoToLocalDate($isoString$$3$$);
  };
  $oj$$6$$.$IntlConverterUtils$.dateToLocalIso = function $$oj$$6$$$$IntlConverterUtils$$dateToLocalIso$($date$$4$$) {
    return $OraI18nUtils$$.dateToLocalIso($date$$4$$);
  };
  $oj$$6$$.$IntlConverterUtils$._isoToLocalDateIgnoreTimezone = function $$oj$$6$$$$IntlConverterUtils$$_isoToLocalDateIgnoreTimezone$($isoString$$4$$) {
    return $OraI18nUtils$$._isoToLocalDateIgnoreTimezone($isoString$$4$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getTimeZone$ = function $$oj$$6$$$$IntlConverterUtils$$$_getTimeZone$$($isoString$$5$$) {
    return $OraI18nUtils$$.$_getTimeZone$($isoString$$5$$);
  };
  $oj$$6$$.$IntlConverterUtils$.getConverterInstance = function $$oj$$6$$$$IntlConverterUtils$$getConverterInstance$($cf_converterOption$$1$$) {
    var $cTypeStr$$ = "", $cOptions$$ = {}, $converterInstance$$ = null;
    $cf_converterOption$$1$$ && ("object" === typeof $cf_converterOption$$1$$ && ($cf_converterOption$$1$$ instanceof $oj$$6$$.$Converter$ || $cf_converterOption$$1$$.parse && "function" === typeof $cf_converterOption$$1$$.parse || $cf_converterOption$$1$$.format && "function" === typeof $cf_converterOption$$1$$.format ? $converterInstance$$ = $cf_converterOption$$1$$ : ($cTypeStr$$ = $cf_converterOption$$1$$.type, $cOptions$$ = $cf_converterOption$$1$$.options || {})), $converterInstance$$ || ($cTypeStr$$ = 
    $cTypeStr$$ || $cf_converterOption$$1$$) && "string" === typeof $cTypeStr$$ && ($cf_converterOption$$1$$ = $oj$$6$$.$Validation$.$converterFactory$($cTypeStr$$), $converterInstance$$ = $cf_converterOption$$1$$.createConverter($cOptions$$)));
    return $converterInstance$$;
  };
  $oj$$6$$.$IntlConverterUtils$._minMaxIsoString = function $$oj$$6$$$$IntlConverterUtils$$_minMaxIsoString$($minMax$$, $value$$132$$) {
    if ($minMax$$) {
      $value$$132$$ = $value$$132$$ || this.dateToLocalIso(new Date);
      var $vTindex$$ = $value$$132$$.indexOf("T");
      0 === $minMax$$.indexOf("T") && 0 < $vTindex$$ && ($minMax$$ = $value$$132$$.substring(0, $vTindex$$) + $minMax$$);
    }
    return $minMax$$;
  };
  $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$ = function $$oj$$6$$$$IntlConverterUtils$$$__getConverterOptionError$$($errorCode$$2$$, $parameterMap$$2$$) {
    $oj$$6$$.$Assert$.$assertObject$($parameterMap$$2$$);
    var $summary$$19$$ = "", $detail$$22_reqPropName$$ = "", $propName$$2$$ = $parameterMap$$2$$.propertyName, $propValueValid$$;
    "optionTypesMismatch" === $errorCode$$2$$ ? ($detail$$22_reqPropName$$ = $parameterMap$$2$$.requiredPropertyName, $propValueValid$$ = $parameterMap$$2$$.requiredPropertyValueValid, $summary$$19$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypesMismatch.summary", {propertyName:$propName$$2$$, propertyValue:$parameterMap$$2$$.propertyValue, requiredPropertyName:$detail$$22_reqPropName$$}), $detail$$22_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($detail$$22_reqPropName$$, 
    $propValueValid$$)) : "optionTypeInvalid" === $errorCode$$2$$ ? ($propName$$2$$ = $parameterMap$$2$$.propertyName, $propValueValid$$ = $parameterMap$$2$$.propertyValueValid, $summary$$19$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypeInvalid.summary", {propertyName:$propName$$2$$}), $detail$$22_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$2$$, $propValueValid$$)) : "optionOutOfRange" === $errorCode$$2$$ ? ($summary$$19$$ = 
    $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionOutOfRange.summary", {propertyName:$propName$$2$$, propertyValue:$parameterMap$$2$$.propertyValue}), $propValueValid$$ = $parameterMap$$2$$.propertyValueValid, $detail$$22_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$2$$, $propValueValid$$)) : "optionValueInvalid" === $errorCode$$2$$ && ($summary$$19$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionValueInvalid.summary", 
    {propertyName:$propName$$2$$, propertyValue:$parameterMap$$2$$.propertyValue}), $propValueValid$$ = $parameterMap$$2$$.propertyValueHint, $detail$$22_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$2$$, $propValueValid$$));
    return new $oj$$6$$.$ConverterError$($summary$$19$$, $detail$$22_reqPropName$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$ = function $$oj$$6$$$$IntlConverterUtils$$$_getOptionValueDetailMessage$$($propName$$3$$, $propValueValid$$1$$) {
    var $resourceKey$$2$$;
    return $propValueValid$$1$$ ? ("string" === typeof $propValueValid$$1$$ ? $resourceKey$$2$$ = "oj-converter.optionHint.detail" : ($resourceKey$$2$$ = "oj-converter.optionHint.detail-plural", $propValueValid$$1$$ = $propValueValid$$1$$.join($oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.plural-separator"))), $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$2$$, {propertyName:$propName$$3$$, propertyValueValid:$propValueValid$$1$$})) : "";
  };
  $oj$$6$$.$IntlConverterUtils$.$__getNullFormattedValue$ = function $$oj$$6$$$$IntlConverterUtils$$$__getNullFormattedValue$$() {
    return "";
  };
  var $OraDateTimeConverter$$;
  $OraDateTimeConverter$$ = function() {
    function $_init$$1$$() {
      return{format:function($value$$133$$, $localeElements$$20$$, $options$$187$$, $locale$$16$$) {
        var $ret$$14_val$$23$$;
        if ("number" === typeof $value$$133$$) {
          $ret$$14_val$$23$$ = new Date($value$$133$$);
        } else {
          if ("string" === typeof $value$$133$$) {
            if ("" === $OraI18nUtils$$.trim($value$$133$$)) {
              return null;
            }
            $ret$$14_val$$23$$ = $OraI18nUtils$$.isoToLocalDate($value$$133$$);
          } else {
            return null;
          }
        }
        if (2 >= arguments.length || void 0 === $options$$187$$) {
          $options$$187$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        $ret$$14_val$$23$$ = $_formatImpl$$($ret$$14_val$$23$$, $localeElements$$20$$, $options$$187$$);
        var $numberingSystemKey$$4$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$16$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$4$$] && ($numberingSystemKey$$4$$ = "latn");
        if ("latn" !== $numberingSystemKey$$4$$) {
          var $idx$$5$$, $nativeRet$$1$$ = [];
          for ($idx$$5$$ = 0;$idx$$5$$ < $ret$$14_val$$23$$.length;$idx$$5$$++) {
            "0" <= $ret$$14_val$$23$$[$idx$$5$$] && "9" >= $ret$$14_val$$23$$[$idx$$5$$] ? $nativeRet$$1$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$4$$][$ret$$14_val$$23$$[$idx$$5$$]]) : $nativeRet$$1$$.push($ret$$14_val$$23$$[$idx$$5$$]);
          }
          return $nativeRet$$1$$.join("");
        }
        return $ret$$14_val$$23$$;
      }, $formatRelative$:function($value$$134$$, $localeElements$$21$$, $options$$188$$) {
        return $_formatRelativeImpl$$($value$$134$$, $localeElements$$21$$, $options$$188$$);
      }, parse:function($str$$16$$, $localeElements$$22$$, $options$$189$$, $locale$$17$$) {
        return $_parseImpl$$($str$$16$$, $localeElements$$22$$, $options$$189$$, $locale$$17$$);
      }, resolvedOptions:function($localeElements$$23$$, $options$$190$$, $locale$$18$$) {
        if (3 > arguments.length || void 0 === $locale$$18$$) {
          $locale$$18$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$23$$);
        }
        if (2 > arguments.length || void 0 === $options$$190$$) {
          $options$$190$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        var $ecma_format$$7$$ = !1, $numberingSystemKey$$5_result$$8$$;
        $numberingSystemKey$$5_result$$8$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$18$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$5_result$$8$$] && ($numberingSystemKey$$5_result$$8$$ = "latn");
        if (void 0 !== $options$$190$$ && void 0 !== $options$$190$$.pattern) {
          return $numberingSystemKey$$5_result$$8$$ = $_getResolvedOptionsFromPattern$$($locale$$18$$, $numberingSystemKey$$5_result$$8$$, $options$$190$$.pattern), $numberingSystemKey$$5_result$$8$$.pattern = $options$$190$$.pattern, $numberingSystemKey$$5_result$$8$$;
        }
        if (void 0 !== $options$$190$$) {
          $numberingSystemKey$$5_result$$8$$ = {locale:$locale$$18$$, numberingSystem:$numberingSystemKey$$5_result$$8$$, calendar:"gregorian"};
          var $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$ = 0;
          for ($count$$25_getOption$$3_patternFromOptions$$1_tStyle$$ in $options$$190$$) {
            $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$++;
          }
          if (0 == $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$) {
            return $numberingSystemKey$$5_result$$8$$.year = "numeric", $numberingSystemKey$$5_result$$8$$.month = "numeric", $numberingSystemKey$$5_result$$8$$.day = "numeric", $numberingSystemKey$$5_result$$8$$;
          }
          var $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$ = $OraI18nUtils$$.$getGetOption$($options$$190$$, "OraDateTimeConverter.resolvedOptions"), $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("year", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.year = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("era", "string", ["narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.era = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.month = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("day", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.day = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("weekday", "string", ["narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.weekday = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("hour", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.hour = $fmtType_option$$14$$, $ecma_format$$7$$ = !0, $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("hour12", "boolean", [!0, !1]), void 0 === $fmtType_option$$14$$ && ($fmtType_option$$14$$ = $_isHour12$$($localeElements$$23$$)), $numberingSystemKey$$5_result$$8$$.hour12 = $fmtType_option$$14$$);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("minute", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.minute = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("second", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$5_result$$8$$.second = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $numberingSystemKey$$5_result$$8$$["two-digit-year-start"] = $_get2DigitYearStart$$($options$$190$$);
          if (!$ecma_format$$7$$) {
            var $ecma_format$$7$$ = $_expandPredefinedStylesFormat$$($options$$190$$, $localeElements$$23$$, $OraDateTimeConverter$$.resolvedOptions), $fmtType_option$$14$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("formatType", "string", ["date", "time", "datetime"], "date"), $dStyle$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("dateFormat", "string", ["short", "medium", "long", "full"], "short"), $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$ = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$("timeFormat", 
            "string", ["short", "medium", "long", "full"], "short");
            $numberingSystemKey$$5_result$$8$$.formatType = $fmtType_option$$14$$;
            if ("datetime" === $fmtType_option$$14$$ || "date" === $fmtType_option$$14$$) {
              $numberingSystemKey$$5_result$$8$$.dateFormat = $dStyle$$;
            }
            if ("datetime" === $fmtType_option$$14$$ || "time" === $fmtType_option$$14$$) {
              $numberingSystemKey$$5_result$$8$$.timeFormat = $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$;
            }
            $numberingSystemKey$$5_result$$8$$.patternFromOptions = $ecma_format$$7$$;
            return $numberingSystemKey$$5_result$$8$$;
          }
          $numberingSystemKey$$5_result$$8$$.patternFromOptions = $_expandFormat$$($options$$190$$, $localeElements$$23$$, "OraDateTimeConverter.resolvedOptions");
          return $numberingSystemKey$$5_result$$8$$;
        }
        $count$$25_getOption$$3_patternFromOptions$$1_tStyle$$ = $_expandFormat$$({year:"numeric", month:"numeric", day:"numeric"}, $localeElements$$23$$, "OraDateTimeConverter.resolvedOptions");
        return{calendar:"gregorian", locale:$locale$$18$$, numberingSystem:$numberingSystemKey$$5_result$$8$$, year:"numeric", month:"numeric", day:"numeric", patternFromOptions:$count$$25_getOption$$3_patternFromOptions$$1_tStyle$$};
      }, $calculateWeek$:function($d$$1_date$$5_time$$) {
        $d$$1_date$$5_time$$ = $OraI18nUtils$$.isoToLocalDate($d$$1_date$$5_time$$);
        var $checkDate$$ = new Date($d$$1_date$$5_time$$.getTime());
        $checkDate$$.setDate($checkDate$$.getDate() + 4 - ($checkDate$$.getDay() || 7));
        $d$$1_date$$5_time$$ = $checkDate$$.getTime();
        $checkDate$$.setMonth(0);
        $checkDate$$.setDate(1);
        return Math.floor(Math.round(($d$$1_date$$5_time$$ - $checkDate$$) / 864E5) / 7) + 1;
      }};
    }
    var $_appendPreOrPostMatch$$, $_expandFormat$$, $_parseExact$$, $_formatImpl$$, $_parseImpl$$, $_formatRelativeImpl$$, $_throwInvalidDateFormat$$, $_getResolvedOptionsFromPattern$$, $_dateTimeStyle$$, $_get2DigitYearStart$$, $_isHour12$$, $_dateTimeStyleFromPattern$$, $_expandPredefinedStylesFormat$$, $_localeDataCache$$ = {}, $_isLeapYear$$, $_getDaysInMonth$$, $instance$$13$$, $_toAvailableFormatsKeys$$, $_expandAvailableDateFormatsPattern$$, $_expandAvailableTimeFormatsPattern$$, $_basicFormatMatcher$$, 
    $_appendToKey$$, $_getDaysDif$$, $_getDayIndex$$, $_isSameYear$$, $_isNextYear$$, $_isPrevYear$$, $_isSameMonth$$, $_isNextMonth$$, $_isPrevMonth$$, $_isSameWeek$$, $_isNextWeek$$, $_isPrevWeek$$, $_isSameDay$$, $_isNextDay$$, $_isPrevDay$$, $_expandYear$$, $_getTokenIndex$$, $_parseLenient$$, $_parseLenientyMEd$$, $_parseLenientyMMMEd$$, $_parseLenienthms$$, $_getDayIndex1$$, $_getMonthIndex$$, $_getParseRegExp$$, $_validateRange$$, $_arrayIndexOfDay$$, $_arrayIndexOfMonth$$, $_throwDateFormatMismatch$$, 
    $_getPatternFromSingleToken$$, $_throwWeekdayMismatch$$, $_createParseISOString$$, $_getTimePart$$, $_getNameIndex$$, $_getWeekdayName$$, $_YEAR_AND_DATE_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})/g, $_YMD_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g, $_MONTH_REGEXP_FMT$$ = /^[M][^M]|[^M]M[^M]/g, $_MONTH_REGEXP_STD$$ = /^[L][^L]|[^L]L[^L]/g, $_DAY_REGEXP$$ = /^[d][^d]|[^d]d[^d]/g, $_HOUR_REGEXP$$ = /(?:^|[^h])h[^h]|[^H]H[^H]|[^k]k[^k]|[^K]K[^K]/, $_TIME_REGEXP$$ = /(\d{1,2})(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,3}))?/g, 
    $_TIME_FORMAT_REGEXP$$ = /h|H|K|k/g, $_ESCAPE_REGEXP$$1$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_TOKEN_REGEXP$$ = /ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SSS|SS|S|zzzz|zzz|zz|z|GGGGG|GGGG|GGG|GG|G/g, $_TIME_FORMATS_Z_TOKENS$$ = /\s?(?:\(|\[)??z{1,4}(?:\)|\])?/g, $_DAYS_INDEXES$$ = {0:"sun", 1:"mon", 2:"tue", 3:"wed", 4:"thu", 5:"fri", 6:"sat"}, $_PROPERTIES_MAP$$ = {MMM:{token:"months", style:"format", 
    mLen:"abbreviated", matchIndex:0, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMM:{token:"months", style:"format", mLen:"wide", matchIndex:0, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMMM:{token:"months", style:"format", mLen:"narrow", matchIndex:0, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLL:{token:"months", style:"stand-alone", mLen:"abbreviated", matchIndex:1, key:"month", value:"short", 
    regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLLL:{token:"months", style:"stand-alone", mLen:"wide", matchIndex:1, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLLLL:{token:"months", style:"stand-alone", mLen:"narrow", matchIndex:1, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, E:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EE:{token:"days", style:"format", 
    dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEE:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEE:{token:"days", style:"format", dLen:"wide", matchIndex:0, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEEE:{token:"days", style:"format", dLen:"narrow", matchIndex:0, key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, c:{token:"days", style:"stand-alone", 
    dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, ccc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cccc:{token:"days", style:"stand-alone", dLen:"wide", matchIndex:1, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, ccccc:{token:"days", 
    style:"stand-alone", dLen:"narrow", matchIndex:1, key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, h:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, hh:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, K:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, KK:{token:"time", timePart:"hour", 
    start1:0, end1:11, start2:0, end2:11, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, H:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, HH:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, k:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, kk:{token:"time", timePart:"hour", start1:0, 
    end1:23, start2:1, end2:24, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, m:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"numeric", regExp:"(\\d\\d?)"}, mm:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"2-digit", regExp:"(\\d\\d?)"}, s:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", value:"numeric", regExp:"(\\d\\d?)"}, ss:{token:"time", timePart:"second", start1:0, 
    end1:59, start2:0, end2:59, key:"second", value:"2-digit", regExp:"(\\d\\d?)"}, S:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SSS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, d:{token:"dayOfMonth", 
    key:"day", value:"numeric", getPartIdx:2, regExp:"(\\d\\d?)"}, dd:{token:"dayOfMonth", key:"day", value:"2-digit", getPartIdx:2, regExp:"(\\d\\d?)"}, M:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, MM:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, L:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, LL:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, 
    y:{token:"year", key:"year", value:"numeric", regExp:"(\\d{1,4})"}, yy:{token:"year", key:"year", value:"2-digit", regExp:"(\\d\\d?)"}, yyyy:{token:"year", key:"year", value:"numeric", regExp:"(\\d{1,4})"}, a:{token:"ampm", key:"hour12", value:!0, regExp:"(\\D*)"}, z:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, 
    zzzz:{token:"tz", key:"timeZoneName", value:"long", regExp:"([+-]?\\d{1,4})"}, G:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGG:{token:"era", key:"era", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGGG:{token:"era", key:"era", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, "/":{token:"slash", regExp:"(\\/)"}};
    $_get2DigitYearStart$$ = function $$_get2DigitYearStart$$$($option$$15_options$$191$$) {
      $option$$15_options$$191$$ = $option$$15_options$$191$$["two-digit-year-start"];
      if (void 0 === $option$$15_options$$191$$ || isNaN($option$$15_options$$191$$)) {
        $option$$15_options$$191$$ = 1950;
      }
      return $option$$15_options$$191$$ = parseInt($option$$15_options$$191$$, 10);
    };
    $_isHour12$$ = function $$_isHour12$$$($localeElements$$24$$) {
      var $territory$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$24$$)).region || "001";
      return "h" === $localeElements$$24$$.supplemental.prefferedHours[$territory$$];
    };
    $_isLeapYear$$ = function $$_isLeapYear$$$($y$$35$$) {
      return 0 == $y$$35$$ % 400 ? !0 : 0 == $y$$35$$ % 100 ? !1 : 0 == $y$$35$$ % 4 ? !0 : !1;
    };
    $_getDaysInMonth$$ = function $$_getDaysInMonth$$$($y$$36$$, $m$$11$$) {
      switch($m$$11$$) {
        case 0:
        ;
        case 2:
        ;
        case 4:
        ;
        case 6:
        ;
        case 7:
        ;
        case 9:
        ;
        case 11:
          return 31;
        case 1:
          return $_isLeapYear$$($y$$36$$) ? 29 : 28;
        default:
          return 30;
      }
    };
    $_expandPredefinedStylesFormat$$ = function $$_expandPredefinedStylesFormat$$$($fmtType$$1_options$$192$$, $dateFormats_localeElements$$25_mainNode$$3$$, $caller$$2_dStyle$$1$$) {
      $dateFormats_localeElements$$25_mainNode$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($dateFormats_localeElements$$25_mainNode$$3$$);
      var $getOption$$4_tStyle$$1$$ = $OraI18nUtils$$.$getGetOption$($fmtType$$1_options$$192$$, $caller$$2_dStyle$$1$$);
      $fmtType$$1_options$$192$$ = $getOption$$4_tStyle$$1$$("formatType", "string", ["date", "time", "datetime"], "date");
      $caller$$2_dStyle$$1$$ = $getOption$$4_tStyle$$1$$("dateFormat", "string", ["short", "medium", "long", "full"], "short");
      var $getOption$$4_tStyle$$1$$ = $getOption$$4_tStyle$$1$$("timeFormat", "string", ["short", "medium", "long", "full"], "short"), $cal_timeFormats$$ = $dateFormats_localeElements$$25_mainNode$$3$$.dates.calendars.gregorian;
      $dateFormats_localeElements$$25_mainNode$$3$$ = $cal_timeFormats$$.dateFormats;
      var $cal_timeFormats$$ = $cal_timeFormats$$.timeFormats, $dStyleFmt$$, $tStyleFmt$$, $format$$8$$;
      switch($caller$$2_dStyle$$1$$) {
        case "full":
          $dStyleFmt$$ = $dateFormats_localeElements$$25_mainNode$$3$$.full;
          break;
        case "long":
          $dStyleFmt$$ = $dateFormats_localeElements$$25_mainNode$$3$$["long"];
          break;
        case "medium":
          $dStyleFmt$$ = $dateFormats_localeElements$$25_mainNode$$3$$.medium;
          break;
        case "short":
          $dStyleFmt$$ = $dateFormats_localeElements$$25_mainNode$$3$$["short"];
      }
      switch($getOption$$4_tStyle$$1$$) {
        case "full":
          $tStyleFmt$$ = $cal_timeFormats$$.full;
          break;
        case "long":
          $tStyleFmt$$ = $cal_timeFormats$$["long"];
          break;
        case "medium":
          $tStyleFmt$$ = $cal_timeFormats$$.medium;
          break;
        case "short":
          $tStyleFmt$$ = $cal_timeFormats$$["short"];
      }
      void 0 === $dStyleFmt$$ || "datetime" !== $fmtType$$1_options$$192$$ && "date" !== $fmtType$$1_options$$192$$ || ($format$$8$$ = $dStyleFmt$$);
      void 0 === $tStyleFmt$$ || "datetime" !== $fmtType$$1_options$$192$$ && "time" !== $fmtType$$1_options$$192$$ || ($tStyleFmt$$ = $tStyleFmt$$.replace($_TIME_FORMATS_Z_TOKENS$$, ""), $format$$8$$ = $format$$8$$ ? $format$$8$$ + " " + $tStyleFmt$$ : $tStyleFmt$$);
      return $format$$8$$;
    };
    $_appendPreOrPostMatch$$ = function $$_appendPreOrPostMatch$$$($preMatch$$, $strings$$) {
      for (var $quoteCount$$ = 0, $escaped$$2$$ = !1, $i$$118$$ = 0, $il$$ = $preMatch$$.length;$i$$118$$ < $il$$;$i$$118$$++) {
        var $c$$36$$ = $preMatch$$.charAt($i$$118$$);
        switch($c$$36$$) {
          case "'":
            $escaped$$2$$ ? $strings$$.push("'") : $quoteCount$$++;
            $escaped$$2$$ = !1;
            break;
          case "\\":
            $escaped$$2$$ && $strings$$.push("\\");
            $escaped$$2$$ = !$escaped$$2$$;
            break;
          default:
            $strings$$.push($c$$36$$), $escaped$$2$$ = !1;
        }
      }
      return $quoteCount$$;
    };
    $_throwInvalidDateFormat$$ = function $$_throwInvalidDateFormat$$$($format$$9$$, $isTime_options$$193$$, $error$$21_m$$12$$) {
      var $isDate_samplePattern$$1$$;
      $isDate_samplePattern$$1$$ = void 0 !== $isTime_options$$193$$.year || void 0 !== $isTime_options$$193$$.month || void 0 !== $isTime_options$$193$$.weekday || void 0 !== $isTime_options$$193$$.day;
      $isTime_options$$193$$ = void 0 !== $isTime_options$$193$$.hour || void 0 !== $isTime_options$$193$$.minute || void 0 !== $isTime_options$$193$$.second;
      $isDate_samplePattern$$1$$ = $isDate_samplePattern$$1$$ && $isTime_options$$193$$ ? "MM/dd/yy hh:mm:ss a" : $isDate_samplePattern$$1$$ ? "MM/dd/yy" : "hh:mm:ss a";
      $error$$21_m$$12$$ = new SyntaxError("Unexpected character(s) " + $error$$21_m$$12$$ + ' encountered in the pattern "' + $format$$9$$ + ' An example of a valid pattern is "' + $isDate_samplePattern$$1$$ + '".');
      $error$$21_m$$12$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$format$$9$$, "propertyValueHint ":$isDate_samplePattern$$1$$}};
      throw $error$$21_m$$12$$;
    };
    $_basicFormatMatcher$$ = function $$_basicFormatMatcher$$$($dateTimeKeys$$, $availableFormats_localeElements$$26$$, $dateTimeFormats_isDate$$1$$, $hour12$$3$$) {
      $availableFormats_localeElements$$26$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($availableFormats_localeElements$$26$$).dates.calendars.gregorian.dateTimeFormats.availableFormats;
      $dateTimeFormats_isDate$$1$$ = "weekday era year month day hour minute second timeZoneName".split(" ");
      var $values$$7$$ = {"2-digit":0, numeric:1, narrow:2, "short":3, "long":4}, $bestScore$$ = -Infinity, $bestFormat$$ = void 0, $formatProp_m$$13_match$$5$$, $delta$$2_optionsProp_skip$$, $f$$1$$;
      for ($f$$1$$ in $availableFormats_localeElements$$26$$) {
        $delta$$2_optionsProp_skip$$ = !1;
        var $format$$10$$ = {};
        $format$$10$$.pattern = $availableFormats_localeElements$$26$$[$f$$1$$];
        for (var $score$$ = 0;null !== ($formatProp_m$$13_match$$5$$ = $_TOKEN_REGEXP$$.exec($f$$1$$));) {
          $formatProp_m$$13_match$$5$$ = $formatProp_m$$13_match$$5$$[0], "h" !== $formatProp_m$$13_match$$5$$ && "hh" !== $formatProp_m$$13_match$$5$$ || $hour12$$3$$ ? "H" !== $formatProp_m$$13_match$$5$$ && "HH" !== $formatProp_m$$13_match$$5$$ || !$hour12$$3$$ ? void 0 !== $_PROPERTIES_MAP$$[$formatProp_m$$13_match$$5$$] && ($format$$10$$[$_PROPERTIES_MAP$$[$formatProp_m$$13_match$$5$$].key] = $_PROPERTIES_MAP$$[$formatProp_m$$13_match$$5$$].value) : $delta$$2_optionsProp_skip$$ = !0 : $delta$$2_optionsProp_skip$$ = 
          !0;
        }
        if (!$delta$$2_optionsProp_skip$$) {
          for (var $property$$16$$ in $dateTimeFormats_isDate$$1$$) {
            $delta$$2_optionsProp_skip$$ = $dateTimeKeys$$[$dateTimeFormats_isDate$$1$$[$property$$16$$]], $formatProp_m$$13_match$$5$$ = $format$$10$$[$dateTimeFormats_isDate$$1$$[$property$$16$$]], void 0 === $delta$$2_optionsProp_skip$$ && void 0 !== $formatProp_m$$13_match$$5$$ ? $score$$ -= 20 : void 0 !== $delta$$2_optionsProp_skip$$ && void 0 === $formatProp_m$$13_match$$5$$ ? $score$$ -= 120 : void 0 !== $delta$$2_optionsProp_skip$$ && void 0 !== $formatProp_m$$13_match$$5$$ && ($delta$$2_optionsProp_skip$$ = 
            Math.max(Math.min($values$$7$$[$formatProp_m$$13_match$$5$$] - $values$$7$$[$delta$$2_optionsProp_skip$$], 2), -2), 2 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 6 : 1 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 3 : -1 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 6 : -2 === $delta$$2_optionsProp_skip$$ && ($score$$ -= 8));
          }
          $score$$ > $bestScore$$ && ($bestScore$$ = $score$$, $bestFormat$$ = $format$$10$$);
        }
      }
      return void 0 !== $bestFormat$$ ? $bestFormat$$.pattern : null;
    };
    $_toAvailableFormatsKeys$$ = function $$_toAvailableFormatsKeys$$$($getOption$$5_options$$194$$, $localeElements$$27$$, $caller$$3_option$$16$$) {
      var $dateKey$$ = "", $timeKey$$ = "", $dateOptions$$ = {}, $timeOptions$$ = {};
      $getOption$$5_options$$194$$ = $OraI18nUtils$$.$getGetOption$($getOption$$5_options$$194$$, $caller$$3_option$$16$$);
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("era", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "era", $caller$$3_option$$16$$, {narrow:"GGGGG", "short":"GGG", "long":"GGGG"});
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("year", "string", ["2-digit", "numeric"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "year", $caller$$3_option$$16$$, {"2-digit":"yy", numeric:"y"});
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "month", $caller$$3_option$$16$$, {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"});
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("weekday", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "weekday", $caller$$3_option$$16$$, {narrow:"EEEEE", "short":"E", "long":"EEEE"});
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("day", "string", ["2-digit", "numeric"]);
      var $dateKey$$ = $dateKey$$ + $_appendToKey$$($dateOptions$$, "day", $caller$$3_option$$16$$, {"2-digit":"dd", numeric:"d"}), $hr12$$ = $getOption$$5_options$$194$$("hour12", "boolean", [!0, !1]);
      void 0 === $hr12$$ && ($hr12$$ = $_isHour12$$($localeElements$$27$$));
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("hour", "string", ["2-digit", "numeric"]);
      $timeKey$$ = !0 === $hr12$$ ? $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$3_option$$16$$, {"2-digit":"hh", numeric:"h"}) : $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$3_option$$16$$, {"2-digit":"HH", numeric:"H"});
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("minute", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "minute", $caller$$3_option$$16$$, {"2-digit":"mm", numeric:"m"});
      $caller$$3_option$$16$$ = $getOption$$5_options$$194$$("second", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "second", $caller$$3_option$$16$$, {"2-digit":"ss", numeric:"s"});
      return[$dateKey$$, $timeKey$$, $dateOptions$$, $timeOptions$$];
    };
    $_appendToKey$$ = function $$_appendToKey$$$($obj$$50$$, $prop$$55$$, $option$$17$$, $pairs$$) {
      return void 0 !== $option$$17$$ ? ($obj$$50$$[$prop$$55$$] = $option$$17$$, $pairs$$[$option$$17$$]) : "";
    };
    $_expandAvailableDateFormatsPattern$$ = function $$_expandAvailableDateFormatsPattern$$$($formatTemplate$$, $getOption$$6_options$$195$$, $caller$$4_match$$6_option$$18$$) {
      var $datePat$$ = $formatTemplate$$;
      $getOption$$6_options$$195$$ = $OraI18nUtils$$.$getGetOption$($getOption$$6_options$$195$$, $caller$$4_match$$6_option$$18$$);
      $caller$$4_match$$6_option$$18$$ = $getOption$$6_options$$195$$("year", "string", ["2-digit", "numeric"]);
      var $pairs$$1$$ = {"2-digit":"yy", numeric:"yyyy"};
      void 0 !== $caller$$4_match$$6_option$$18$$ && ($datePat$$ = $datePat$$.replace(/y{1,4}/, $pairs$$1$$[$caller$$4_match$$6_option$$18$$]));
      $caller$$4_match$$6_option$$18$$ = $getOption$$6_options$$195$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      if (void 0 !== $caller$$4_match$$6_option$$18$$) {
        var $pairs$$1$$ = {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"}, $pairsL$$ = {"2-digit":"LL", numeric:"L", narrow:"LLLLL", "short":"LLL", "long":"LLLL"};
        void 0 !== $pairs$$1$$[$caller$$4_match$$6_option$$18$$] && 2 < $pairs$$1$$[$caller$$4_match$$6_option$$18$$].length ? ($datePat$$ = $datePat$$.replace(/M{3,5}/, $pairs$$1$$[$caller$$4_match$$6_option$$18$$]), $datePat$$ = $datePat$$.replace(/L{3,5}/, $pairsL$$[$caller$$4_match$$6_option$$18$$])) : "2-digit" === $caller$$4_match$$6_option$$18$$ && ($_MONTH_REGEXP_FMT$$.lastIndex = 0, ($caller$$4_match$$6_option$$18$$ = $_MONTH_REGEXP_FMT$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("M", 
        "MM")), ($caller$$4_match$$6_option$$18$$ = $_MONTH_REGEXP_STD$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("L", "LL")));
      }
      $caller$$4_match$$6_option$$18$$ = $getOption$$6_options$$195$$("weekday", "string", ["narrow", "short", "long"]);
      void 0 !== $caller$$4_match$$6_option$$18$$ && ($datePat$$ = $datePat$$.replace(/E{1,5}/, {narrow:"EEEEE", "short":"EEE", "long":"EEEE"}[$caller$$4_match$$6_option$$18$$]), $datePat$$ = $datePat$$.replace(/c{1,5}/, {narrow:"ccccc", "short":"ccc", "long":"cccc"}[$caller$$4_match$$6_option$$18$$]));
      $caller$$4_match$$6_option$$18$$ = $getOption$$6_options$$195$$("day", "string", ["2-digit", "numeric"]);
      void 0 !== $caller$$4_match$$6_option$$18$$ && "2-digit" === $caller$$4_match$$6_option$$18$$ && ($_DAY_REGEXP$$.lastIndex = 0, ($caller$$4_match$$6_option$$18$$ = $_DAY_REGEXP$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("d", "dd")));
      return $datePat$$;
    };
    $_expandAvailableTimeFormatsPattern$$ = function $$_expandAvailableTimeFormatsPattern$$$($formatTemplate$$1$$, $match$$7_options$$196$$, $caller$$5$$) {
      var $len$$10_timePat$$ = $formatTemplate$$1$$;
      "2-digit" === $OraI18nUtils$$.$getGetOption$($match$$7_options$$196$$, $caller$$5$$)("hour", "string", ["2-digit", "numeric"]) && ($_HOUR_REGEXP$$.lastIndex = 0, $match$$7_options$$196$$ = $_HOUR_REGEXP$$.exec($formatTemplate$$1$$), null !== $match$$7_options$$196$$ && ($len$$10_timePat$$ = $match$$7_options$$196$$[0].length - 2, $len$$10_timePat$$ = $formatTemplate$$1$$.replace($match$$7_options$$196$$[0][$len$$10_timePat$$], $match$$7_options$$196$$[0][$len$$10_timePat$$] + $match$$7_options$$196$$[0][$len$$10_timePat$$])));
      return $len$$10_timePat$$;
    };
    $_getPatternFromSingleToken$$ = function $$_getPatternFromSingleToken$$$($token$$6$$, $pattern$$8_tokenObj$$, $availableFormats$$1$$) {
      var $i$$119$$, $count$$26$$ = 0;
      for ($i$$119$$ in $pattern$$8_tokenObj$$) {
        $count$$26$$++;
      }
      if (1 < $count$$26$$) {
        return null;
      }
      for ($i$$119$$ = $token$$6$$.length;0 < $i$$119$$;$i$$119$$--) {
        if ($pattern$$8_tokenObj$$ = $availableFormats$$1$$[$token$$6$$.substr(0, $i$$119$$)], void 0 !== $pattern$$8_tokenObj$$) {
          return $pattern$$8_tokenObj$$;
        }
      }
      return $token$$6$$;
    };
    $_expandFormat$$ = function $$_expandFormat$$$($options$$197_pattern$$9$$, $localeElements$$28$$, $caller$$6$$) {
      var $availableFormats$$2_mainNode$$5$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$28$$), $locale$$19$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$28$$), $getOption$$8_timePattern$$ = $OraI18nUtils$$.$getGetOption$($options$$197_pattern$$9$$, $caller$$6$$), $matcher$$ = $getOption$$8_timePattern$$("formatMatcher", "string", ["basic", "munger"], "munger"), $count$$27_dateTimeKeys$$1$$ = 0;
      for ($count$$27_dateTimeKeys$$1$$ in $options$$197_pattern$$9$$) {
        $count$$27_dateTimeKeys$$1$$++;
      }
      0 == $count$$27_dateTimeKeys$$1$$ && ($options$$197_pattern$$9$$ = {year:"numeric", month:"numeric", day:"numeric"});
      $count$$27_dateTimeKeys$$1$$ = $_toAvailableFormatsKeys$$($options$$197_pattern$$9$$, $localeElements$$28$$, $caller$$6$$);
      if (void 0 !== $_localeDataCache$$[$locale$$19$$]) {
        var $cachedPattern_datePattern$$ = $_localeDataCache$$[$locale$$19$$].dates.calendars.gregorian.dateTimeFormats[$count$$27_dateTimeKeys$$1$$[0] + $count$$27_dateTimeKeys$$1$$[1]];
        if (void 0 !== $cachedPattern_datePattern$$) {
          return $cachedPattern_datePattern$$;
        }
      }
      if ("" === $count$$27_dateTimeKeys$$1$$[0] && "" === $count$$27_dateTimeKeys$$1$$[1]) {
        return $_expandPredefinedStylesFormat$$($options$$197_pattern$$9$$, $localeElements$$28$$, $caller$$6$$);
      }
      var $availableFormats$$2_mainNode$$5$$ = $availableFormats$$2_mainNode$$5$$.dates.calendars.gregorian.dateTimeFormats.availableFormats, $cachedPattern_datePattern$$ = $availableFormats$$2_mainNode$$5$$[$count$$27_dateTimeKeys$$1$$[0]], $hour12$$4$$ = $getOption$$8_timePattern$$("hour12", "boolean", [!0, !1]);
      void 0 === $hour12$$4$$ && ($hour12$$4$$ = $_isHour12$$($localeElements$$28$$));
      void 0 === $cachedPattern_datePattern$$ && "" !== $count$$27_dateTimeKeys$$1$$[0] && ($cachedPattern_datePattern$$ = $_getPatternFromSingleToken$$($count$$27_dateTimeKeys$$1$$[0], $count$$27_dateTimeKeys$$1$$[2], $availableFormats$$2_mainNode$$5$$), null === $cachedPattern_datePattern$$ && ($cachedPattern_datePattern$$ = $_basicFormatMatcher$$($count$$27_dateTimeKeys$$1$$[2], $localeElements$$28$$, 0, $hour12$$4$$)), null !== $cachedPattern_datePattern$$ ? "basic" !== $matcher$$ && ($cachedPattern_datePattern$$ = 
      $_expandAvailableDateFormatsPattern$$($cachedPattern_datePattern$$, $options$$197_pattern$$9$$, $caller$$6$$)) : $cachedPattern_datePattern$$ = $count$$27_dateTimeKeys$$1$$[0]);
      $getOption$$8_timePattern$$ = $availableFormats$$2_mainNode$$5$$[$count$$27_dateTimeKeys$$1$$[1]];
      void 0 === $getOption$$8_timePattern$$ && "" !== $count$$27_dateTimeKeys$$1$$[1] && ($getOption$$8_timePattern$$ = $_getPatternFromSingleToken$$($count$$27_dateTimeKeys$$1$$[1], $count$$27_dateTimeKeys$$1$$[3], $availableFormats$$2_mainNode$$5$$), null === $getOption$$8_timePattern$$ && ($getOption$$8_timePattern$$ = $_basicFormatMatcher$$($count$$27_dateTimeKeys$$1$$[3], $localeElements$$28$$, 0, $hour12$$4$$)), null !== $getOption$$8_timePattern$$ ? "basic" !== $matcher$$ && ($getOption$$8_timePattern$$ = 
      $_expandAvailableTimeFormatsPattern$$($getOption$$8_timePattern$$, $options$$197_pattern$$9$$, $caller$$6$$)) : $getOption$$8_timePattern$$ = $count$$27_dateTimeKeys$$1$$[1]);
      $options$$197_pattern$$9$$ = $cachedPattern_datePattern$$ || "";
      void 0 !== $getOption$$8_timePattern$$ && ($options$$197_pattern$$9$$ = "" !== $options$$197_pattern$$9$$ ? $options$$197_pattern$$9$$ + (" " + $getOption$$8_timePattern$$) : $getOption$$8_timePattern$$);
      void 0 === $_localeDataCache$$[$locale$$19$$] && ($_localeDataCache$$[$locale$$19$$] = {}, $_localeDataCache$$[$locale$$19$$].dates = {}, $_localeDataCache$$[$locale$$19$$].dates.calendars = {}, $_localeDataCache$$[$locale$$19$$].dates.calendars.gregorian = {}, $_localeDataCache$$[$locale$$19$$].dates.calendars.gregorian.dateTimeFormats = {});
      return $_localeDataCache$$[$locale$$19$$].dates.calendars.gregorian.dateTimeFormats[$count$$27_dateTimeKeys$$1$$[0] + $count$$27_dateTimeKeys$$1$$[1]] = $options$$197_pattern$$9$$;
    };
    $_formatImpl$$ = function $$_formatImpl$$$($value$$135$$, $localeElements$$29_ret$$15$$, $options$$198$$) {
      function $_getPart$$($date$$6$$, $part$$3$$) {
        switch($part$$3$$) {
          case 0:
            return $date$$6$$.getFullYear();
          case 1:
            return $date$$6$$.getMonth() + 1;
          case 2:
            return $date$$6$$.getDate();
          case 3:
            return $_DAYS_INDEXES$$[$date$$6$$.getDay()];
        }
      }
      function $_getPaddedPart$$($ret$$16$$, $val$$24_value$$136$$, $idx$$6$$, $len$$11$$) {
        $val$$24_value$$136$$ = $_getPart$$($val$$24_value$$136$$, $idx$$6$$);
        $ret$$16$$.push(1 < $len$$11$$ ? $OraI18nUtils$$.$padZeros$($val$$24_value$$136$$, $len$$11$$) : $val$$24_value$$136$$);
      }
      function $_getTimeParts$$($ret$$17$$, $value$$137$$, $len$$12$$, $currentPart$$1$$, $current$$2$$) {
        var $val$$25$$;
        switch($currentPart$$1$$.timePart) {
          case "hour":
            $val$$25$$ = 11 === $currentPart$$1$$.end1 ? $value$$137$$.getHours() % 12 : $value$$137$$.getHours();
            "h" === $current$$2$$ || "hh" === $current$$2$$ ? 0 === $val$$25$$ && ($val$$25$$ = 12) : "k" !== $current$$2$$ && "kk" !== $current$$2$$ || 0 !== $val$$25$$ || ($val$$25$$ = 24);
            break;
          case "minute":
            $val$$25$$ = $value$$137$$.getMinutes();
            break;
          case "second":
            $val$$25$$ = $value$$137$$.getSeconds();
            break;
          case "millisec":
            $val$$25$$ = $value$$137$$.getMilliseconds();
        }
        $ret$$17$$.push(1 < $len$$12$$ ? $OraI18nUtils$$.$padZeros$($val$$25$$, $len$$12$$) : $val$$25$$);
      }
      var $cal$$1_mainNode$$6$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$29_ret$$15$$), $format$$11$$ = $options$$198$$.pattern || $_expandFormat$$($options$$198$$, $localeElements$$29_ret$$15$$, "OraDateTimeConverter.format");
      $localeElements$$29_ret$$15$$ = [];
      for (var $current$$1_index$$89_part$$2_preMatch$$1$$, $quoteCount$$1$$ = 0, $cal$$1_mainNode$$6$$ = $cal$$1_mainNode$$6$$.dates.calendars.gregorian;;) {
        $current$$1_index$$89_part$$2_preMatch$$1$$ = $_TOKEN_REGEXP$$.lastIndex;
        var $ar_clength$$ = $_TOKEN_REGEXP$$.exec($format$$11$$);
        $current$$1_index$$89_part$$2_preMatch$$1$$ = $format$$11$$.slice($current$$1_index$$89_part$$2_preMatch$$1$$, $ar_clength$$ ? $ar_clength$$.index : $format$$11$$.length);
        $quoteCount$$1$$ += $_appendPreOrPostMatch$$($current$$1_index$$89_part$$2_preMatch$$1$$, $localeElements$$29_ret$$15$$);
        if (!$ar_clength$$) {
          break;
        }
        if ($quoteCount$$1$$ % 2) {
          $localeElements$$29_ret$$15$$.push($ar_clength$$[0]);
        } else {
          $current$$1_index$$89_part$$2_preMatch$$1$$ = $ar_clength$$[0];
          var $ar_clength$$ = $current$$1_index$$89_part$$2_preMatch$$1$$.length, $currentPart$$ = $_PROPERTIES_MAP$$[$current$$1_index$$89_part$$2_preMatch$$1$$];
          switch($currentPart$$.token) {
            case "days":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$6$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.dLen];
              $localeElements$$29_ret$$15$$.push($current$$1_index$$89_part$$2_preMatch$$1$$[$_getPart$$($value$$135$$, 3)]);
              break;
            case "months":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$6$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.mLen];
              $localeElements$$29_ret$$15$$.push($current$$1_index$$89_part$$2_preMatch$$1$$[$_getPart$$($value$$135$$, 1)]);
              break;
            case "dayOfMonth":
            ;
            case "monthIndex":
              $localeElements$$29_ret$$15$$.push($_getPaddedPart$$($localeElements$$29_ret$$15$$, $value$$135$$, $currentPart$$.getPartIdx, $ar_clength$$));
              break;
            case "year":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $value$$135$$.getFullYear();
              2 == $ar_clength$$ && ($current$$1_index$$89_part$$2_preMatch$$1$$ %= 100);
              $localeElements$$29_ret$$15$$.push($OraI18nUtils$$.$padZeros$($current$$1_index$$89_part$$2_preMatch$$1$$, $ar_clength$$));
              break;
            case "time":
              $_getTimeParts$$($localeElements$$29_ret$$15$$, $value$$135$$, $ar_clength$$, $currentPart$$, $current$$1_index$$89_part$$2_preMatch$$1$$);
              break;
            case "ampm":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = 12 > $value$$135$$.getHours() ? $cal$$1_mainNode$$6$$.dayPeriods.format.wide.am : $cal$$1_mainNode$$6$$.dayPeriods.format.wide.pm;
              $localeElements$$29_ret$$15$$.push($current$$1_index$$89_part$$2_preMatch$$1$$);
              break;
            case "tz":
              break;
            case "era":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$6$$.eras.eraAbbr;
              $localeElements$$29_ret$$15$$.push($current$$1_index$$89_part$$2_preMatch$$1$$["1"]);
              break;
            case "slash":
              $localeElements$$29_ret$$15$$.push("/");
              break;
            default:
              $_throwInvalidDateFormat$$($format$$11$$, $options$$198$$, $current$$1_index$$89_part$$2_preMatch$$1$$);
          }
        }
      }
      return $localeElements$$29_ret$$15$$.join("");
    };
    $_isSameYear$$ = function $$_isSameYear$$$($d1$$, $d2$$) {
      return $d1$$.getFullYear() == $d2$$.getFullYear();
    };
    $_isNextYear$$ = function $$_isNextYear$$$($d1$$1$$, $d2$$1$$) {
      return 1 == $d2$$1$$.getFullYear() - $d1$$1$$.getFullYear();
    };
    $_isPrevYear$$ = function $$_isPrevYear$$$($d1$$2$$, $d2$$2$$) {
      return $_isNextYear$$($d2$$2$$, $d1$$2$$);
    };
    $_isSameMonth$$ = function $$_isSameMonth$$$($d1$$3$$, $d2$$3$$) {
      return $_isSameYear$$($d1$$3$$, $d2$$3$$) && $d1$$3$$.getMonth() === $d2$$3$$.getMonth();
    };
    $_isNextMonth$$ = function $$_isNextMonth$$$($d1$$4$$, $d2$$4$$) {
      return $_isSameYear$$($d1$$4$$, $d2$$4$$) ? 1 == $d2$$4$$.getMonth() - $d1$$4$$.getMonth() : $_isNextYear$$($d1$$4$$, $d2$$4$$) ? 11 == $d1$$4$$.getMonth() && 0 == $d2$$4$$.getMonth() : !1;
    };
    $_isPrevMonth$$ = function $$_isPrevMonth$$$($d1$$5$$, $d2$$5$$) {
      return $_isNextMonth$$($d2$$5$$, $d1$$5$$);
    };
    $_getDaysDif$$ = function $$_getDaysDif$$$($d1$$6$$, $d2$$6$$) {
      var $day1$$ = $d1$$6$$.getDate(), $day2$$ = $d2$$6$$.getDate();
      $_isNextMonth$$($d1$$6$$, $d2$$6$$) && ($day2$$ += $_getDaysInMonth$$($d1$$6$$.getFullYear, $d1$$6$$.getMonth()));
      return $day2$$ - $day1$$;
    };
    $_getDayIndex$$ = function $$_getDayIndex$$$($localeElements$$30$$, $idx$$7$$) {
      var $ret$$18_territory$$1$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$30$$)).region || "001", $ret$$18_territory$$1$$ = $idx$$7$$ - $localeElements$$30$$.supplemental.weekData.firstDay[$ret$$18_territory$$1$$];
      0 > $ret$$18_territory$$1$$ && ($ret$$18_territory$$1$$ += 7);
      return $ret$$18_territory$$1$$;
    };
    $_isSameWeek$$ = function $$_isSameWeek$$$($dif_localeElements$$31$$, $d1$$7$$, $d2$$7$$) {
      if ($d1$$7$$ > $d2$$7$$) {
        var $tmp$$ = $d1$$7$$;
        $d1$$7$$ = $d2$$7$$;
        $d2$$7$$ = $tmp$$;
      }
      if (!$_isSameMonth$$($d1$$7$$, $d2$$7$$) && !$_isNextMonth$$($d1$$7$$, $d2$$7$$)) {
        return!1;
      }
      $dif_localeElements$$31$$ = $_getDaysDif$$($d1$$7$$, $d2$$7$$) + $_getDayIndex$$($dif_localeElements$$31$$, $d1$$7$$.getDay());
      return 0 <= $dif_localeElements$$31$$ && 6 >= $dif_localeElements$$31$$;
    };
    $_isNextWeek$$ = function $$_isNextWeek$$$($dif$$1_localeElements$$32$$, $d1$$8$$, $d2$$8$$) {
      if (!$_isSameMonth$$($d1$$8$$, $d2$$8$$) && !$_isNextMonth$$($d1$$8$$, $d2$$8$$)) {
        return!1;
      }
      $dif$$1_localeElements$$32$$ = $_getDaysDif$$($d1$$8$$, $d2$$8$$) + $_getDayIndex$$($dif$$1_localeElements$$32$$, $d1$$8$$.getDay());
      return 7 <= $dif$$1_localeElements$$32$$ && 13 >= $dif$$1_localeElements$$32$$;
    };
    $_isPrevWeek$$ = function $$_isPrevWeek$$$($localeElements$$33$$, $d1$$9$$, $d2$$9$$) {
      return $_isNextWeek$$($localeElements$$33$$, $d2$$9$$, $d1$$9$$);
    };
    $_isSameDay$$ = function $$_isSameDay$$$($d1$$10$$, $d2$$10$$) {
      return $_isSameYear$$($d1$$10$$, $d2$$10$$) && $_isSameMonth$$($d1$$10$$, $d2$$10$$) && $d1$$10$$.getDate() === $d2$$10$$.getDate();
    };
    $_isNextDay$$ = function $$_isNextDay$$$($d1$$11$$, $d2$$11$$) {
      return $_isSameMonth$$($d1$$11$$, $d2$$11$$) || $_isNextMonth$$($d1$$11$$, $d2$$11$$) ? 1 === $_getDaysDif$$($d1$$11$$, $d2$$11$$) : !1;
    };
    $_isPrevDay$$ = function $$_isPrevDay$$$($d1$$12$$, $d2$$12$$) {
      return $_isNextDay$$($d2$$12$$, $d1$$12$$);
    };
    $_formatRelativeImpl$$ = function $$_formatRelativeImpl$$$($value$$138$$, $localeElements$$34$$, $getOption$$9_option$$20_options$$199$$) {
      if ("number" === typeof $value$$138$$) {
        $value$$138$$ = new Date($value$$138$$);
      } else {
        if ("string" === typeof $value$$138$$) {
          if ("" === $OraI18nUtils$$.trim($value$$138$$)) {
            return null;
          }
          $value$$138$$ = $OraI18nUtils$$.isoToLocalDate($value$$138$$);
        } else {
          return null;
        }
      }
      var $fields$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$34$$).dates.fields;
      $getOption$$9_option$$20_options$$199$$ = $OraI18nUtils$$.$getGetOption$($getOption$$9_option$$20_options$$199$$, "OraDateTimeConverter.formatRelative");
      $getOption$$9_option$$20_options$$199$$("formatUsing", "string", ["displayName"]);
      $getOption$$9_option$$20_options$$199$$ = $getOption$$9_option$$20_options$$199$$("dateField", "string", ["day", "week", "month", "year"]);
      var $now$$ = new Date;
      switch($getOption$$9_option$$20_options$$199$$) {
        case "day":
          if ($_isSameDay$$($now$$, $value$$138$$)) {
            return $fields$$.day["relative-type-0"];
          }
          if ($_isNextDay$$($now$$, $value$$138$$)) {
            return $fields$$.day["relative-type-1"];
          }
          if ($_isPrevDay$$($now$$, $value$$138$$)) {
            return $fields$$.day["relative-type--1"];
          }
          break;
        case "week":
          if ($_isSameWeek$$($localeElements$$34$$, $now$$, $value$$138$$)) {
            return $fields$$.week["relative-type-0"];
          }
          if ($_isNextWeek$$($localeElements$$34$$, $now$$, $value$$138$$)) {
            return $fields$$.week["relative-type-1"];
          }
          if ($_isPrevWeek$$($localeElements$$34$$, $now$$, $value$$138$$)) {
            return $fields$$.week["relative-type--1"];
          }
          break;
        case "month":
          if ($_isSameMonth$$($now$$, $value$$138$$)) {
            return $fields$$.month["relative-type-0"];
          }
          if ($_isNextMonth$$($now$$, $value$$138$$)) {
            return $fields$$.month["relative-type-1"];
          }
          if ($_isPrevMonth$$($now$$, $value$$138$$)) {
            return $fields$$.month["relative-type--1"];
          }
          break;
        case "year":
          if ($_isSameYear$$($now$$, $value$$138$$)) {
            return $fields$$.year["relative-type-0"];
          }
          if ($_isNextYear$$($now$$, $value$$138$$)) {
            return $fields$$.year["relative-type-1"];
          }
          if ($_isPrevYear$$($now$$, $value$$138$$)) {
            return $fields$$.year["relative-type--1"];
          }
        ;
      }
      return null;
    };
    $_throwWeekdayMismatch$$ = function $$_throwWeekdayMismatch$$$($weekday$$, $day$$) {
      var $error$$22$$;
      $error$$22$$ = Error("The weekday " + $weekday$$ + " does not match the date " + $day$$);
      $error$$22$$.errorInfo = {errorCode:"dateToWeekdayMismatch", parameterMap:{weekday:$weekday$$, date:$day$$}};
      throw $error$$22$$;
    };
    $_throwDateFormatMismatch$$ = function $$_throwDateFormatMismatch$$$($value$$139$$, $format$$12$$, $errorCodeType_style$$1$$) {
      var $error$$23_msg$$20$$;
      2 === $errorCodeType_style$$1$$ ? ($error$$23_msg$$20$$ = 'The value "' + $value$$139$$ + '" does not match the expected date-time format "' + $format$$12$$ + '"', $errorCodeType_style$$1$$ = "datetimeFormatMismatch") : 0 === $errorCodeType_style$$1$$ ? ($error$$23_msg$$20$$ = 'The value "' + $value$$139$$ + '" does not match the expected date format "' + $format$$12$$ + '"', $errorCodeType_style$$1$$ = "dateFormatMismatch") : ($error$$23_msg$$20$$ = 'The value "' + $value$$139$$ + '" does not match the expected time format "' + 
      $format$$12$$ + '"', $errorCodeType_style$$1$$ = "timeFormatMismatch");
      $error$$23_msg$$20$$ = Error($error$$23_msg$$20$$);
      $error$$23_msg$$20$$.errorInfo = {errorCode:$errorCodeType_style$$1$$, parameterMap:{value:$value$$139$$, format:$format$$12$$}};
      throw $error$$23_msg$$20$$;
    };
    $_expandYear$$ = function $$_expandYear$$$($start2DigitYear$$, $year$$1$$) {
      100 > $year$$1$$ && ($year$$1$$ += 100 * Math.floor($start2DigitYear$$ / 100) + ($year$$1$$ < $start2DigitYear$$ % 100 ? 100 : 0));
      return $year$$1$$;
    };
    $_arrayIndexOfDay$$ = function $$_arrayIndexOfDay$$$($daysObj$$, $item$$1$$) {
      var $days$$1$$ = {sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6}, $d$$2$$;
      for ($d$$2$$ in $daysObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($daysObj$$[$d$$2$$])) == $OraI18nUtils$$.trim($item$$1$$)) {
          return $days$$1$$[$d$$2$$];
        }
      }
      return-1;
    };
    $_arrayIndexOfMonth$$ = function $$_arrayIndexOfMonth$$$($monthsObj$$, $item$$2$$) {
      for (var $m$$14$$ in $monthsObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($monthsObj$$[$m$$14$$])) === $OraI18nUtils$$.trim($item$$2$$)) {
          return $m$$14$$ - 1;
        }
      }
      return-1;
    };
    $_getDayIndex1$$ = function $$_getDayIndex1$$$($calDaysFmt_localeElements$$35$$, $value$$140$$, $fmt_ret$$19$$) {
      var $calDaysStdAlone_mainNode$$9$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calDaysFmt_localeElements$$35$$), $days$$2$$;
      $calDaysFmt_localeElements$$35$$ = $calDaysStdAlone_mainNode$$9$$.dates.calendars.gregorian.days.format;
      $calDaysStdAlone_mainNode$$9$$ = $calDaysStdAlone_mainNode$$9$$.dates.calendars.gregorian.days["stand-alone"];
      switch($fmt_ret$$19$$) {
        case 0:
          $days$$2$$ = [$calDaysFmt_localeElements$$35$$.abbreviated, $calDaysFmt_localeElements$$35$$.wide];
          break;
        case 1:
          $days$$2$$ = [$calDaysStdAlone_mainNode$$9$$.abbreviated, $calDaysStdAlone_mainNode$$9$$.wide];
      }
      $value$$140$$ = $OraI18nUtils$$.$toUpper$($value$$140$$);
      $fmt_ret$$19$$ = $_arrayIndexOfDay$$($days$$2$$[0], $value$$140$$);
      -1 === $fmt_ret$$19$$ && ($fmt_ret$$19$$ = $_arrayIndexOfDay$$($days$$2$$[1], $value$$140$$));
      return $fmt_ret$$19$$;
    };
    $_getMonthIndex$$ = function $$_getMonthIndex$$$($calMonthsFmt_localeElements$$36$$, $value$$141$$, $fmt$$1_months$$1$$) {
      var $ret$$20$$ = -1, $calMonthsStdAlone_mainNode$$10$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calMonthsFmt_localeElements$$36$$);
      $calMonthsFmt_localeElements$$36$$ = $calMonthsStdAlone_mainNode$$10$$.dates.calendars.gregorian.months.format;
      $calMonthsStdAlone_mainNode$$10$$ = $calMonthsStdAlone_mainNode$$10$$.dates.calendars.gregorian.months["stand-alone"];
      switch($fmt$$1_months$$1$$) {
        case 0:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$36$$.wide, $calMonthsFmt_localeElements$$36$$.abbreviated];
          break;
        case 1:
          $fmt$$1_months$$1$$ = [$calMonthsStdAlone_mainNode$$10$$.wide, $calMonthsStdAlone_mainNode$$10$$.abbreviated];
          break;
        case 2:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$36$$.wide, $calMonthsFmt_localeElements$$36$$.abbreviated, $calMonthsStdAlone_mainNode$$10$$.wide, $calMonthsStdAlone_mainNode$$10$$.abbreviated];
          break;
        default:
          return-1;
      }
      $value$$141$$ = $OraI18nUtils$$.$toUpper$($value$$141$$);
      for (var $m$$15$$ in $fmt$$1_months$$1$$) {
        if ($ret$$20$$ = $_arrayIndexOfMonth$$($fmt$$1_months$$1$$[$m$$15$$], $value$$141$$), -1 !== $ret$$20$$) {
          break;
        }
      }
      return $ret$$20$$;
    };
    $_getParseRegExp$$ = function $$_getParseRegExp$$$($format$$13$$, $options$$200$$) {
      for (var $expFormat_parseRegExp$$ = $format$$13$$.replace($_ESCAPE_REGEXP$$1$$, "\\\\$1"), $regexp$$4$$ = ["^"], $groups$$ = [], $index$$90$$ = 0, $quoteCount$$2$$ = 0, $match$$8$$;null !== ($match$$8$$ = $_TOKEN_REGEXP$$.exec($expFormat_parseRegExp$$));) {
        var $m$$16_preMatch$$2$$ = $expFormat_parseRegExp$$.slice($index$$90$$, $match$$8$$.index), $index$$90$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$2$$ = $quoteCount$$2$$ + $_appendPreOrPostMatch$$($m$$16_preMatch$$2$$, $regexp$$4$$);
        if ($quoteCount$$2$$ % 2) {
          $regexp$$4$$.push($match$$8$$[0]);
        } else {
          var $m$$16_preMatch$$2$$ = $match$$8$$[0], $add$$6$$;
          void 0 !== $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$] ? $add$$6$$ = $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$].regExp : $_throwInvalidDateFormat$$($format$$13$$, $options$$200$$, $m$$16_preMatch$$2$$);
          $add$$6$$ && $regexp$$4$$.push($add$$6$$);
          $groups$$.push($match$$8$$[0]);
        }
      }
      $_appendPreOrPostMatch$$($expFormat_parseRegExp$$.slice($index$$90$$), $regexp$$4$$);
      $regexp$$4$$.push("$");
      $expFormat_parseRegExp$$ = {regExp:$regexp$$4$$.join("").replace(/\s+/g, "\\s+"), groups:$groups$$};
      return{}[$format$$13$$] = $expFormat_parseRegExp$$;
    };
    $_validateRange$$ = function $$_validateRange$$$($name$$78$$, $rangeError$$2_value$$142$$, $low$$, $high$$, $displayValue$$2$$, $displayLow$$, $displayHigh$$) {
      if ($rangeError$$2_value$$142$$ < $low$$ || $rangeError$$2_value$$142$$ > $high$$) {
        throw $rangeError$$2_value$$142$$ = new RangeError($displayValue$$2$$ + " is out of range.  Enter a value between " + $displayLow$$ + " and " + $displayHigh$$ + " for " + $name$$78$$), $rangeError$$2_value$$142$$.errorInfo = {errorCode:"datetimeOutOfRange", parameterMap:{value:$displayValue$$2$$, minValue:$displayLow$$, maxValue:$displayHigh$$, propertyName:$name$$78$$}}, $rangeError$$2_value$$142$$;
      }
    };
    $_getTokenIndex$$ = function $$_getTokenIndex$$$($arr$$19$$, $token$$7$$) {
      for (var $i$$120$$ in $arr$$19$$) {
        for (var $n$$19$$ in $arr$$19$$[$i$$120$$]) {
          if ($n$$19$$ === $token$$7$$) {
            return parseInt($i$$120$$, 10);
          }
        }
      }
      return 0;
    };
    $_parseLenienthms$$ = function $$_parseLenienthms$$$($result$$9$$, $idx$$8_timepart$$, $format$$14$$, $hour$$2_localeElements$$37$$, $dtype$$) {
      var $calPM$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($hour$$2_localeElements$$37$$).dates.calendars.gregorian.dayPeriods.format.wide.pm, $minute$$ = $hour$$2_localeElements$$37$$ = $_TIME_REGEXP$$.lastIndex = 0, $second$$2$$ = 0, $msec$$ = 0, $match$$9$$ = $_TIME_REGEXP$$.exec($idx$$8_timepart$$);
      null === $match$$9$$ && $_throwDateFormatMismatch$$($idx$$8_timepart$$, $format$$14$$, $dtype$$);
      void 0 !== $match$$9$$[1] && ($hour$$2_localeElements$$37$$ = parseInt($match$$9$$[1], 10));
      void 0 !== $match$$9$$[2] && ($minute$$ = parseInt($match$$9$$[2], 10));
      void 0 !== $match$$9$$[3] && ($second$$2$$ = parseInt($match$$9$$[3], 10));
      void 0 !== $match$$9$$[4] && ($msec$$ = parseInt($match$$9$$[4], 10));
      $_TIME_FORMAT_REGEXP$$.lastIndex = 0;
      $match$$9$$ = $_TIME_FORMAT_REGEXP$$.exec($format$$14$$);
      switch($match$$9$$[0]) {
        case "h":
          12 === $hour$$2_localeElements$$37$$ && ($hour$$2_localeElements$$37$$ = 0);
          $_validateRange$$("hour", $hour$$2_localeElements$$37$$, 0, 11, $hour$$2_localeElements$$37$$, 1, 12);
          $idx$$8_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$8_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$8_timepart$$ && 12 > $hour$$2_localeElements$$37$$ && ($hour$$2_localeElements$$37$$ += 12);
          break;
        case "K":
          $_validateRange$$("hour", $hour$$2_localeElements$$37$$, 0, 11, $hour$$2_localeElements$$37$$, 0, 11);
          $idx$$8_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$8_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$8_timepart$$ && 12 > $hour$$2_localeElements$$37$$ && ($hour$$2_localeElements$$37$$ += 12);
          break;
        case "H":
          $_validateRange$$("hour", $hour$$2_localeElements$$37$$, 0, 23, $hour$$2_localeElements$$37$$, 0, 23);
          break;
        case "k":
          24 === $hour$$2_localeElements$$37$$ && ($hour$$2_localeElements$$37$$ = 0), $_validateRange$$("hour", $hour$$2_localeElements$$37$$, 0, 23, $hour$$2_localeElements$$37$$, 1, 24);
      }
      $_validateRange$$("minute", $minute$$, 0, 59, $minute$$, 0, 59);
      $_validateRange$$("second", $second$$2$$, 0, 59, $second$$2$$, 0, 59);
      $_validateRange$$("millisec", $msec$$, 0, 999, $msec$$, 0, 999);
      $result$$9$$.setHours($hour$$2_localeElements$$37$$, $minute$$, $second$$2$$, $msec$$);
    };
    $_getWeekdayName$$ = function $$_getWeekdayName$$$($value$$143$$, $localeElements$$38$$) {
      var $calDaysStandAlone_foundMatch_mainNode$$12$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$38$$), $calDaysFmt$$1_days$$3$$ = $calDaysStandAlone_foundMatch_mainNode$$12$$.dates.calendars.gregorian.days.format, $calDaysStandAlone_foundMatch_mainNode$$12$$ = $calDaysStandAlone_foundMatch_mainNode$$12$$.dates.calendars.gregorian.days["stand-alone"], $calDaysFmt$$1_days$$3$$ = [$calDaysFmt$$1_days$$3$$.wide, $calDaysFmt$$1_days$$3$$.abbreviated, $calDaysStandAlone_foundMatch_mainNode$$12$$.wide, 
      $calDaysStandAlone_foundMatch_mainNode$$12$$.abbreviated], $calDaysStandAlone_foundMatch_mainNode$$12$$ = !1, $dName$$, $i$$121$$, $j$$15$$;
      for ($i$$121$$ in $calDaysFmt$$1_days$$3$$) {
        for ($j$$15$$ in $calDaysFmt$$1_days$$3$$[$i$$121$$]) {
          if ($dName$$ = $calDaysFmt$$1_days$$3$$[$i$$121$$][$j$$15$$], (new RegExp($dName$$ + "\\b", "i")).test($value$$143$$)) {
            $calDaysStandAlone_foundMatch_mainNode$$12$$ = !0;
            break;
          }
        }
        if ($calDaysStandAlone_foundMatch_mainNode$$12$$) {
          break;
        }
        $dName$$ = null;
      }
      return $dName$$;
    };
    $_parseLenientyMEd$$ = function $$_parseLenientyMEd$$$($timepart$$1_value$$144$$, $format$$15$$, $options$$201_parsedDate_result$$10$$, $localeElements$$39$$, $isDateTime$$) {
      $_YMD_REGEXP$$.lastIndex = 0;
      var $daysInMonth_match$$10$$ = $_YMD_REGEXP$$.exec($timepart$$1_value$$144$$);
      null === $daysInMonth_match$$10$$ && $_throwDateFormatMismatch$$($timepart$$1_value$$144$$, $format$$15$$, $isDateTime$$ ? 2 : 0);
      var $tokenIndexes$$ = [{y:$format$$15$$.indexOf("y")}, {M:$format$$15$$.indexOf("M")}, {d:$format$$15$$.indexOf("d")}];
      $tokenIndexes$$.sort(function($a$$98$$, $b$$58$$) {
        for (var $n1$$ in $a$$98$$) {
          break;
        }
        for (var $n2$$ in $b$$58$$) {
          break;
        }
        return $a$$98$$[$n1$$] - $b$$58$$[$n2$$];
      });
      var $dName$$1_year$$2$$, $month$$2_weekDay$$, $day$$1$$, $yearIndex$$1$$, $foundDayIndex$$, $i$$122$$, $dayIndex$$ = $_getTokenIndex$$($tokenIndexes$$, "d"), $foundYear$$ = !1, $foundDay$$ = !1;
      for ($i$$122$$ = 1;3 >= $i$$122$$;$i$$122$$++) {
        var $tokenMatch$$ = $daysInMonth_match$$10$$[$i$$122$$];
        2 < $tokenMatch$$.length && ($dName$$1_year$$2$$ = $tokenMatch$$, $foundYear$$ = !0, $yearIndex$$1$$ = $i$$122$$ - 1);
      }
      $foundYear$$ || ($yearIndex$$1$$ = $_getTokenIndex$$($tokenIndexes$$, "y"), $dName$$1_year$$2$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]);
      for ($i$$122$$ = 0;3 > $i$$122$$;$i$$122$$++) {
        if ($i$$122$$ !== $yearIndex$$1$$ && 12 < $daysInMonth_match$$10$$[$i$$122$$ + 1]) {
          $day$$1$$ = $daysInMonth_match$$10$$[$i$$122$$ + 1];
          $foundDay$$ = !0;
          $foundDayIndex$$ = $i$$122$$;
          break;
        }
      }
      if ($foundDay$$) {
        for ($i$$122$$ = 0;3 > $i$$122$$;$i$$122$$++) {
          if ($i$$122$$ !== $foundDayIndex$$ && $i$$122$$ !== $yearIndex$$1$$) {
            $month$$2_weekDay$$ = $daysInMonth_match$$10$$[$i$$122$$ + 1];
            break;
          }
        }
        void 0 === $month$$2_weekDay$$ && ($month$$2_weekDay$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      } else {
        $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "d") ? ($day$$1$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1], $month$$2_weekDay$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]) : $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "M") ? ($day$$1$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "d") + 1], $month$$2_weekDay$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]) : ($day$$1$$ = 
        $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "d") + 1], $month$$2_weekDay$$ = $daysInMonth_match$$10$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      }
      $month$$2_weekDay$$ -= 1;
      $daysInMonth_match$$10$$ = $_getDaysInMonth$$($dName$$1_year$$2$$, $month$$2_weekDay$$);
      $foundDay$$ && $dayIndex$$ !== $foundDayIndex$$ && 12 < $month$$2_weekDay$$ && $_validateRange$$("month", $day$$1$$, 0, 11, $day$$1$$, 1, 12);
      $_validateRange$$("month", $month$$2_weekDay$$, 0, 11, $month$$2_weekDay$$ + 1, 1, 12);
      $_validateRange$$("day", $day$$1$$, 1, $daysInMonth_match$$10$$, $day$$1$$, 1, $daysInMonth_match$$10$$);
      $dName$$1_year$$2$$ = $_expandYear$$($_get2DigitYearStart$$($options$$201_parsedDate_result$$10$$), parseInt($dName$$1_year$$2$$, 10));
      $_validateRange$$("year", $dName$$1_year$$2$$, 0, 9999, $dName$$1_year$$2$$, 0, 9999);
      $options$$201_parsedDate_result$$10$$ = new Date($dName$$1_year$$2$$, $month$$2_weekDay$$, $day$$1$$);
      $dName$$1_year$$2$$ = $_getWeekdayName$$($timepart$$1_value$$144$$, $localeElements$$39$$);
      null !== $dName$$1_year$$2$$ && ($month$$2_weekDay$$ = $_getDayIndex1$$($localeElements$$39$$, $dName$$1_year$$2$$, 0), $options$$201_parsedDate_result$$10$$.getDay() !== $month$$2_weekDay$$ && $_throwWeekdayMismatch$$($dName$$1_year$$2$$, $options$$201_parsedDate_result$$10$$.getDate()));
      $options$$201_parsedDate_result$$10$$ = {value:$options$$201_parsedDate_result$$10$$, warning:"lenient parsing was used"};
      $isDateTime$$ && ($timepart$$1_value$$144$$ = $timepart$$1_value$$144$$.substr($_YMD_REGEXP$$.lastIndex), 0 === $timepart$$1_value$$144$$.length ? $options$$201_parsedDate_result$$10$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($options$$201_parsedDate_result$$10$$.value, $timepart$$1_value$$144$$, $format$$15$$, $localeElements$$39$$, 2));
      return $options$$201_parsedDate_result$$10$$;
    };
    $_parseLenientyMMMEd$$ = function $$_parseLenientyMMMEd$$$($timepart$$2_value$$145$$, $format$$16$$, $options$$202_parsedDate$$1$$, $localeElements$$40$$, $isDateTime$$1$$) {
      var $origValue_tokenIndexes$$1$$ = $timepart$$2_value$$145$$;
      $timepart$$2_value$$145$$ = $OraI18nUtils$$.$toUpper$($timepart$$2_value$$145$$);
      var $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$40$$), $calMonthsFmt$$1_match$$11_months$$2$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$.dates.calendars.gregorian.months.format, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$.dates.calendars.gregorian.months["stand-alone"], $calMonthsFmt$$1_match$$11_months$$2$$ = 
      [$calMonthsFmt$$1_match$$11_months$$2$$.wide, $calMonthsFmt$$1_match$$11_months$$2$$.abbreviated, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$.wide, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$.abbreviated], $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ = !1, $reverseMonth_tokenMatch$$1$$, $dRegExp$$1_i$$123_weekDay$$1$$, $j$$17_month$$3$$, $dName$$2_mName$$;
      for ($dRegExp$$1_i$$123_weekDay$$1$$ in $calMonthsFmt$$1_match$$11_months$$2$$) {
        $reverseMonth_tokenMatch$$1$$ = [];
        for ($j$$17_month$$3$$ in $calMonthsFmt$$1_match$$11_months$$2$$[$dRegExp$$1_i$$123_weekDay$$1$$]) {
          $dName$$2_mName$$ = $OraI18nUtils$$.$toUpper$($calMonthsFmt$$1_match$$11_months$$2$$[$dRegExp$$1_i$$123_weekDay$$1$$][$j$$17_month$$3$$]), $reverseMonth_tokenMatch$$1$$.push({idx:$j$$17_month$$3$$, name:$dName$$2_mName$$});
        }
        $reverseMonth_tokenMatch$$1$$.sort(function($a$$99$$, $b$$59$$) {
          return $b$$59$$.idx - $a$$99$$.idx;
        });
        for ($j$$17_month$$3$$ in $reverseMonth_tokenMatch$$1$$) {
          if ($dName$$2_mName$$ = $reverseMonth_tokenMatch$$1$$[$j$$17_month$$3$$].name, -1 != $timepart$$2_value$$145$$.indexOf($dName$$2_mName$$)) {
            $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ = !0;
            $timepart$$2_value$$145$$ = $timepart$$2_value$$145$$.replace($dName$$2_mName$$, "");
            break;
          }
        }
        if ($calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$) {
          break;
        }
      }
      if (!$calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$) {
        return $_parseLenientyMEd$$($origValue_tokenIndexes$$1$$, $format$$16$$, $options$$202_parsedDate$$1$$, $localeElements$$40$$, $isDateTime$$1$$);
      }
      $j$$17_month$$3$$ = $_getMonthIndex$$($localeElements$$40$$, $dName$$2_mName$$, 2);
      $_validateRange$$("month", $j$$17_month$$3$$, 0, 11, $j$$17_month$$3$$, 1, 12);
      $dName$$2_mName$$ = $_getWeekdayName$$($origValue_tokenIndexes$$1$$, $localeElements$$40$$);
      $dRegExp$$1_i$$123_weekDay$$1$$ = new RegExp($dName$$2_mName$$ + "\\W", "i");
      null !== $dName$$2_mName$$ && ($timepart$$2_value$$145$$ = $timepart$$2_value$$145$$.replace($dRegExp$$1_i$$123_weekDay$$1$$, ""));
      $_YEAR_AND_DATE_REGEXP$$.lastIndex = 0;
      $calMonthsFmt$$1_match$$11_months$$2$$ = $_YEAR_AND_DATE_REGEXP$$.exec($timepart$$2_value$$145$$);
      null === $calMonthsFmt$$1_match$$11_months$$2$$ && $_throwDateFormatMismatch$$($origValue_tokenIndexes$$1$$, $format$$16$$, $isDateTime$$1$$ ? 2 : 0);
      $origValue_tokenIndexes$$1$$ = [{y:$format$$16$$.indexOf("y")}, {d:$format$$16$$.indexOf("d")}];
      $origValue_tokenIndexes$$1$$.sort(function($a$$100$$, $b$$60$$) {
        for (var $n1$$1$$ in $a$$100$$) {
          break;
        }
        for (var $n2$$1$$ in $b$$60$$) {
          break;
        }
        return $a$$100$$[$n1$$1$$] - $b$$60$$[$n2$$1$$];
      });
      var $daysInMonth$$1_result$$11_year$$3$$, $day$$2_yearIndex$$2$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ = !1;
      for ($dRegExp$$1_i$$123_weekDay$$1$$ = 1;2 >= $dRegExp$$1_i$$123_weekDay$$1$$;$dRegExp$$1_i$$123_weekDay$$1$$++) {
        $reverseMonth_tokenMatch$$1$$ = $calMonthsFmt$$1_match$$11_months$$2$$[$dRegExp$$1_i$$123_weekDay$$1$$], 2 < $reverseMonth_tokenMatch$$1$$.length && ($daysInMonth$$1_result$$11_year$$3$$ = $reverseMonth_tokenMatch$$1$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ = !0, $day$$2_yearIndex$$2$$ = $dRegExp$$1_i$$123_weekDay$$1$$ - 1);
      }
      $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$13$$ || ($day$$2_yearIndex$$2$$ = $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y"), $daysInMonth$$1_result$$11_year$$3$$ = $calMonthsFmt$$1_match$$11_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1]);
      $day$$2_yearIndex$$2$$ = $day$$2_yearIndex$$2$$ === $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") ? $calMonthsFmt$$1_match$$11_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1] : $calMonthsFmt$$1_match$$11_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") + 1];
      $daysInMonth$$1_result$$11_year$$3$$ = $_expandYear$$($_get2DigitYearStart$$($options$$202_parsedDate$$1$$), parseInt($daysInMonth$$1_result$$11_year$$3$$, 10));
      $_validateRange$$("year", $daysInMonth$$1_result$$11_year$$3$$, 0, 9999, $daysInMonth$$1_result$$11_year$$3$$, 0, 9999);
      $options$$202_parsedDate$$1$$ = new Date($daysInMonth$$1_result$$11_year$$3$$, $j$$17_month$$3$$, $day$$2_yearIndex$$2$$);
      null !== $dName$$2_mName$$ && ($dRegExp$$1_i$$123_weekDay$$1$$ = $_getDayIndex1$$($localeElements$$40$$, $dName$$2_mName$$, 0), $options$$202_parsedDate$$1$$.getDay() !== $dRegExp$$1_i$$123_weekDay$$1$$ && $_throwWeekdayMismatch$$($dName$$2_mName$$, $options$$202_parsedDate$$1$$.getDate()));
      $daysInMonth$$1_result$$11_year$$3$$ = $_getDaysInMonth$$($daysInMonth$$1_result$$11_year$$3$$, $j$$17_month$$3$$);
      $_validateRange$$("day", $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$11_year$$3$$, $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$11_year$$3$$);
      $daysInMonth$$1_result$$11_year$$3$$ = {value:$options$$202_parsedDate$$1$$, warning:"lenient parsing was used"};
      $isDateTime$$1$$ && ($timepart$$2_value$$145$$ = $timepart$$2_value$$145$$.substr($_YEAR_AND_DATE_REGEXP$$.lastIndex), 0 === $timepart$$2_value$$145$$.length ? $daysInMonth$$1_result$$11_year$$3$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($daysInMonth$$1_result$$11_year$$3$$.value, $timepart$$2_value$$145$$, $format$$16$$, $localeElements$$40$$, 2));
      return $daysInMonth$$1_result$$11_year$$3$$;
    };
    $_parseLenient$$ = function $$_parseLenient$$$($value$$146$$, $format$$17$$, $d$$3_options$$203$$, $localeElements$$41$$) {
      switch($_dateTimeStyle$$($d$$3_options$$203$$, "OraDateTimeConverter.parse")) {
        case 0:
          return $_parseLenientyMMMEd$$($value$$146$$, $format$$17$$, $d$$3_options$$203$$, $localeElements$$41$$, !1);
        case 1:
          return $d$$3_options$$203$$ = new Date, $_parseLenienthms$$($d$$3_options$$203$$, $value$$146$$, $format$$17$$, $localeElements$$41$$, 1), {value:$d$$3_options$$203$$, warning:"lenient parsing was used"};
        case 2:
          return $_parseLenientyMMMEd$$($value$$146$$, $format$$17$$, $d$$3_options$$203$$, $localeElements$$41$$, !0);
      }
      return null;
    };
    $_getNameIndex$$ = function $$_getNameIndex$$$($index$$91_localeElements$$42$$, $datePart$$, $matchGroup$$, $mLength$$, $monthsFormat_style$$2$$, $matchIndex$$, $start1$$, $end1$$, $start2$$, $end2$$, $name$$79$$) {
      $monthsFormat_style$$2$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($index$$91_localeElements$$42$$).dates.calendars.gregorian[$datePart$$][$monthsFormat_style$$2$$];
      $index$$91_localeElements$$42$$ = "months" === $datePart$$ ? $_getMonthIndex$$($index$$91_localeElements$$42$$, $matchGroup$$, $matchIndex$$) : $_getDayIndex1$$($index$$91_localeElements$$42$$, $matchGroup$$, $matchIndex$$);
      $_validateRange$$($name$$79$$, $index$$91_localeElements$$42$$, $start1$$, $end1$$, $matchGroup$$, $monthsFormat_style$$2$$[$mLength$$][$start2$$], $monthsFormat_style$$2$$[$mLength$$][$end2$$]);
      return $index$$91_localeElements$$42$$;
    };
    $_getTimePart$$ = function $$_getTimePart$$$($matchInt$$, $timeObj$$, $objMap$$, $clength$$1$$, $timeToken$$) {
      $timeObj$$[$objMap$$.timePart] = $matchInt$$;
      "h" === $timeToken$$ || "hh" === $timeToken$$ ? 12 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "k" === $timeToken$$ || "kk" === $timeToken$$ ? 24 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "S" === $timeToken$$ && ($timeObj$$[$objMap$$.timePart] = $matchInt$$ * Math.pow(10, 3 - $clength$$1$$));
      $_validateRange$$($objMap$$.timePart, $timeObj$$[$objMap$$.timePart], $objMap$$.start1, $objMap$$.end1, $matchInt$$, $objMap$$.start2, $objMap$$.end2);
    };
    $_parseExact$$ = function $$_parseExact$$$($parsedDate$$2_value$$147$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$204$$, $localeElements$$43$$) {
      var $calPM$$1_mainNode$$15$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$43$$);
      $parsedDate$$2_value$$147$$ = $OraI18nUtils$$.trim($parsedDate$$2_value$$147$$);
      var $eraPart_parseInfo_year$$4$$ = $calPM$$1_mainNode$$15$$.dates.calendars.gregorian.eras.eraAbbr["1"], $month$$4_trimEraPart$$ = $OraI18nUtils$$.$trimNumber$($eraPart_parseInfo_year$$4$$);
      $parsedDate$$2_value$$147$$ = $parsedDate$$2_value$$147$$.replace($eraPart_parseInfo_year$$4$$, $month$$4_trimEraPart$$);
      var $eraPart_parseInfo_year$$4$$ = $_getParseRegExp$$($daysInMonth$$2_defaultYear_format$$18$$, $options$$204$$), $match$$12$$ = (new RegExp($eraPart_parseInfo_year$$4$$.regExp)).exec($parsedDate$$2_value$$147$$);
      if (null === $match$$12$$) {
        return $_parseLenient$$($parsedDate$$2_value$$147$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$204$$, $localeElements$$43$$);
      }
      var $groups$$1$$ = $eraPart_parseInfo_year$$4$$.groups, $date$$7$$ = $month$$4_trimEraPart$$ = $eraPart_parseInfo_year$$4$$ = null, $weekDay$$2$$ = null, $hourOffset_tzMinOffset$$;
      $hourOffset_tzMinOffset$$ = null;
      for (var $pmHour$$ = !1, $matchInt$$1_minOffset$$, $adjustedMin_weekDayName$$, $timeObj$$1$$ = {hour:0, minute:0, second:0, millisec:0}, $calPM$$1_mainNode$$15$$ = $calPM$$1_mainNode$$15$$.dates.calendars.gregorian.dayPeriods.format.wide.pm, $start2DigitYear$$3$$ = $_get2DigitYearStart$$($options$$204$$), $j$$18$$ = 0, $jl$$ = $groups$$1$$.length;$j$$18$$ < $jl$$;$j$$18$$++) {
        var $matchGroup$$1$$ = $match$$12$$[$j$$18$$ + 1];
        if ($matchGroup$$1$$) {
          var $current$$3$$ = $groups$$1$$[$j$$18$$], $clength$$2$$ = $current$$3$$.length;
          $matchInt$$1_minOffset$$ = parseInt($matchGroup$$1$$, 10);
          var $currentGroup$$ = $_PROPERTIES_MAP$$[$current$$3$$];
          switch($currentGroup$$.token) {
            case "months":
              $month$$4_trimEraPart$$ = $_getNameIndex$$($localeElements$$43$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.mLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 11, "1", "12", "month name");
              break;
            case "days":
              $adjustedMin_weekDayName$$ = $matchGroup$$1$$;
              $weekDay$$2$$ = $_getNameIndex$$($localeElements$$43$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.dLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 6, "sun", "sat", "weekday");
              break;
            case "time":
              $_getTimePart$$($matchInt$$1_minOffset$$, $timeObj$$1$$, $currentGroup$$, $clength$$2$$, $current$$3$$);
              break;
            case "dayOfMonth":
              $date$$7$$ = $matchInt$$1_minOffset$$;
              if (31 < $date$$7$$) {
                return $_parseLenient$$($parsedDate$$2_value$$147$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$204$$, $localeElements$$43$$);
              }
              break;
            case "monthIndex":
              $month$$4_trimEraPart$$ = $matchInt$$1_minOffset$$ - 1;
              if (11 < $month$$4_trimEraPart$$) {
                return $_parseLenient$$($parsedDate$$2_value$$147$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$204$$, $localeElements$$43$$);
              }
              break;
            case "year":
              $eraPart_parseInfo_year$$4$$ = $_expandYear$$($start2DigitYear$$3$$, $matchInt$$1_minOffset$$);
              $_validateRange$$("year", $eraPart_parseInfo_year$$4$$, 0, 9999, $eraPart_parseInfo_year$$4$$, 0, 9999);
              break;
            case "ampm":
              $pmHour$$ = $OraI18nUtils$$.$toUpper$($matchGroup$$1$$) === $OraI18nUtils$$.$toUpper$($calPM$$1_mainNode$$15$$);
              break;
            case "tz":
              $hourOffset_tzMinOffset$$ = $matchInt$$1_minOffset$$ / 100 << 0, $_validateRange$$("TZ Offset", $hourOffset_tzMinOffset$$, -12, 13, $matchInt$$1_minOffset$$, -12, 13), $matchInt$$1_minOffset$$ = Math.abs($matchInt$$1_minOffset$$ % 100), $_validateRange$$("TZ Offset", $matchInt$$1_minOffset$$, 0, 59, $matchInt$$1_minOffset$$, 0, 59), $hourOffset_tzMinOffset$$ = 60 * $hourOffset_tzMinOffset$$ + ($OraI18nUtils$$.$startsWith$($matchGroup$$1$$, "-") ? -$matchInt$$1_minOffset$$ : $matchInt$$1_minOffset$$);
          }
        }
      }
      $parsedDate$$2_value$$147$$ = new Date;
      $daysInMonth$$2_defaultYear_format$$18$$ = $parsedDate$$2_value$$147$$.getFullYear();
      null === $eraPart_parseInfo_year$$4$$ && ($eraPart_parseInfo_year$$4$$ = $daysInMonth$$2_defaultYear_format$$18$$);
      null === $month$$4_trimEraPart$$ && null === $date$$7$$ ? ($month$$4_trimEraPart$$ = $parsedDate$$2_value$$147$$.getMonth(), $date$$7$$ = $parsedDate$$2_value$$147$$.getDate()) : null === $date$$7$$ && ($date$$7$$ = 1);
      $daysInMonth$$2_defaultYear_format$$18$$ = $_getDaysInMonth$$($eraPart_parseInfo_year$$4$$, $month$$4_trimEraPart$$);
      $_validateRange$$("day", $date$$7$$, 1, $daysInMonth$$2_defaultYear_format$$18$$, $date$$7$$, 1, $daysInMonth$$2_defaultYear_format$$18$$);
      $parsedDate$$2_value$$147$$.setFullYear($eraPart_parseInfo_year$$4$$, $month$$4_trimEraPart$$, $date$$7$$);
      null !== $weekDay$$2$$ && $parsedDate$$2_value$$147$$.getDay() !== $weekDay$$2$$ && $_throwWeekdayMismatch$$($adjustedMin_weekDayName$$, $parsedDate$$2_value$$147$$.getDate());
      $pmHour$$ && 12 > $timeObj$$1$$.hour && ($timeObj$$1$$.hour += 12);
      $parsedDate$$2_value$$147$$.setHours($timeObj$$1$$.hour, $timeObj$$1$$.minute, $timeObj$$1$$.second, $timeObj$$1$$.millisec);
      null !== $hourOffset_tzMinOffset$$ && ($adjustedMin_weekDayName$$ = $parsedDate$$2_value$$147$$.getMinutes() - ($hourOffset_tzMinOffset$$ + $parsedDate$$2_value$$147$$.getTimezoneOffset()), $parsedDate$$2_value$$147$$.setHours($parsedDate$$2_value$$147$$.getHours() + ($adjustedMin_weekDayName$$ / 60 << 0), $adjustedMin_weekDayName$$ % 60));
      return{value:$parsedDate$$2_value$$147$$};
    };
    $_getResolvedOptionsFromPattern$$ = function $$_getResolvedOptionsFromPattern$$$($locale$$20_result$$14$$, $m$$17_match$$13_numberingSystemKey$$6$$, $pattern$$10$$) {
      var $expFormat$$1$$ = $pattern$$10$$.replace($_ESCAPE_REGEXP$$1$$, "\\\\$1"), $regexp$$5$$ = ["^"], $quoteCount$$3$$ = 0, $index$$92$$ = 0;
      for ($locale$$20_result$$14$$ = {locale:$locale$$20_result$$14$$, numberingSystem:$m$$17_match$$13_numberingSystemKey$$6$$, calendar:"gregorian"};null !== ($m$$17_match$$13_numberingSystemKey$$6$$ = $_TOKEN_REGEXP$$.exec($expFormat$$1$$));) {
        var $preMatch$$3$$ = $expFormat$$1$$.slice($index$$92$$, $m$$17_match$$13_numberingSystemKey$$6$$.index), $index$$92$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$3$$ = $quoteCount$$3$$ + $_appendPreOrPostMatch$$($preMatch$$3$$, $regexp$$5$$);
        if (!($quoteCount$$3$$ % 2) && ($m$$17_match$$13_numberingSystemKey$$6$$ = $m$$17_match$$13_numberingSystemKey$$6$$[0], "/" !== $m$$17_match$$13_numberingSystemKey$$6$$ && "zzzz" !== $m$$17_match$$13_numberingSystemKey$$6$$ && "zzz" !== $m$$17_match$$13_numberingSystemKey$$6$$ && "zz" !== $m$$17_match$$13_numberingSystemKey$$6$$ && "z" !== $m$$17_match$$13_numberingSystemKey$$6$$)) {
          if (void 0 !== $_PROPERTIES_MAP$$[$m$$17_match$$13_numberingSystemKey$$6$$]) {
            if ($locale$$20_result$$14$$[$_PROPERTIES_MAP$$[$m$$17_match$$13_numberingSystemKey$$6$$].key] = $_PROPERTIES_MAP$$[$m$$17_match$$13_numberingSystemKey$$6$$].value, "kk" === $m$$17_match$$13_numberingSystemKey$$6$$ || "HH" === $m$$17_match$$13_numberingSystemKey$$6$$ || "H" === $m$$17_match$$13_numberingSystemKey$$6$$ || "k" === $m$$17_match$$13_numberingSystemKey$$6$$) {
              $locale$$20_result$$14$$.hour12 = !1;
            } else {
              if ("KK" === $m$$17_match$$13_numberingSystemKey$$6$$ || "hh" === $m$$17_match$$13_numberingSystemKey$$6$$ || "h" === $m$$17_match$$13_numberingSystemKey$$6$$ || "K" === $m$$17_match$$13_numberingSystemKey$$6$$) {
                $locale$$20_result$$14$$.hour12 = !0;
              }
            }
          } else {
            $_throwInvalidDateFormat$$($pattern$$10$$, $locale$$20_result$$14$$, $m$$17_match$$13_numberingSystemKey$$6$$);
          }
        }
      }
      return $locale$$20_result$$14$$;
    };
    $_dateTimeStyleFromPattern$$ = function $$_dateTimeStyleFromPattern$$$($pattern$$11_result$$15$$) {
      $pattern$$11_result$$15$$ = $_getResolvedOptionsFromPattern$$("", "", $pattern$$11_result$$15$$);
      var $isTime$$1$$ = void 0 !== $pattern$$11_result$$15$$.hour || void 0 !== $pattern$$11_result$$15$$.minute || void 0 !== $pattern$$11_result$$15$$.second;
      return void 0 === $pattern$$11_result$$15$$.year && void 0 === $pattern$$11_result$$15$$.month && void 0 === $pattern$$11_result$$15$$.weekday && void 0 === $pattern$$11_result$$15$$.day || !$isTime$$1$$ ? $isTime$$1$$ ? 1 : 0 : 2;
    };
    $_dateTimeStyle$$ = function $$_dateTimeStyle$$$($options$$205$$, $caller$$7$$) {
      if (void 0 !== $options$$205$$.pattern) {
        return $_dateTimeStyleFromPattern$$($options$$205$$.pattern);
      }
      var $getOption$$10_option$$21$$ = $OraI18nUtils$$.$getGetOption$($options$$205$$, $caller$$7$$), $isTime$$2$$ = void 0 !== $getOption$$10_option$$21$$("hour", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$10_option$$21$$("minute", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$10_option$$21$$("second", "string", ["2-digit", "numeric"]), $isDate$$3$$ = void 0 !== $getOption$$10_option$$21$$("year", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$10_option$$21$$("month", 
      "string", ["2-digit", "numeric", "narrow", "short", "long"]) || void 0 !== $getOption$$10_option$$21$$("day", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$10_option$$21$$("weekday", "string", ["narrow", "short", "long"]);
      if ($isDate$$3$$ && $isTime$$2$$) {
        return 2;
      }
      if ($isTime$$2$$) {
        return 1;
      }
      if ($isDate$$3$$) {
        return 0;
      }
      $getOption$$10_option$$21$$ = $getOption$$10_option$$21$$("formatType", "string", ["date", "time", "datetime"], "date");
      return "datetime" === $getOption$$10_option$$21$$ ? 2 : "time" === $getOption$$10_option$$21$$ ? 1 : 0;
    };
    $_createParseISOString$$ = function $$_createParseISOString$$$($dtStyle$$1$$, $d$$4$$) {
      var $ms$$, $val$$26$$;
      switch($dtStyle$$1$$) {
        case 0:
          $val$$26$$ = $OraI18nUtils$$.$padZeros$($d$$4$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getDate(), 2);
          break;
        case 1:
          $val$$26$$ = "T" + $OraI18nUtils$$.$padZeros$($d$$4$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getSeconds(), 2);
          $ms$$ = $d$$4$$.getMilliseconds();
          0 < $ms$$ && ($val$$26$$ += "." + $ms$$);
          break;
        default:
          $val$$26$$ = $OraI18nUtils$$.$padZeros$($d$$4$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getDate(), 2) + "T" + $OraI18nUtils$$.$padZeros$($d$$4$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getSeconds(), 2), $ms$$ = $d$$4$$.getMilliseconds(), 0 < $ms$$ && ($val$$26$$ += "." + $ms$$);
      }
      return $val$$26$$;
    };
    $_parseImpl$$ = function $$_parseImpl$$$($str$$17$$, $localeElements$$44$$, $options$$206$$, $locale$$21$$) {
      var $dtStyle$$2_numberingSystemKey$$7$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$21$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$dtStyle$$2_numberingSystemKey$$7$$] && ($dtStyle$$2_numberingSystemKey$$7$$ = "latn");
      if ("latn" !== $dtStyle$$2_numberingSystemKey$$7$$) {
        var $dateObj_idx$$9$$, $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$ = [];
        for ($dateObj_idx$$9$$ = 0;$dateObj_idx$$9$$ < $str$$17$$.length;$dateObj_idx$$9$$++) {
          var $d$$5_pos$$4$$ = $OraI18nUtils$$.$numeringSystems$[$dtStyle$$2_numberingSystemKey$$7$$].indexOf($str$$17$$[$dateObj_idx$$9$$]);
          -1 != $d$$5_pos$$4$$ ? $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$.push($d$$5_pos$$4$$) : $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$.push($str$$17$$[$dateObj_idx$$9$$]);
        }
        $str$$17$$ = $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$.join("");
      }
      if (2 >= arguments.length || void 0 === $options$$206$$) {
        $options$$206$$ = {year:"numeric", month:"numeric", day:"numeric"};
      }
      $dtStyle$$2_numberingSystemKey$$7$$ = $_dateTimeStyle$$($options$$206$$, "OraDateTimeConverter.parse");
      $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$ = $options$$206$$.pattern || $_expandFormat$$($options$$206$$, $localeElements$$44$$, "OraDateTimeConverter.parse");
      $dateObj_idx$$9$$ = {};
      if (!0 === $OraI18nUtils$$.$_ISO_DATE_REGEXP$.test($str$$17$$)) {
        return $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$ = $OraI18nUtils$$.isoToLocalDate($str$$17$$), $dateObj_idx$$9$$.value = $_createParseISOString$$($dtStyle$$2_numberingSystemKey$$7$$, $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$), $dateObj_idx$$9$$;
      }
      $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$ = $_parseExact$$($str$$17$$, $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$, $options$$206$$, $localeElements$$44$$);
      $d$$5_pos$$4$$ = $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$.value;
      $dateObj_idx$$9$$.warning = $dateFromISOStr_formats_latnStr$$1_parsedDateObj$$.warning;
      $dateObj_idx$$9$$.value = $_createParseISOString$$($dtStyle$$2_numberingSystemKey$$7$$, $d$$5_pos$$4$$);
      return $dateObj_idx$$9$$;
    };
    return{$getInstance$:function() {
      $instance$$13$$ || ($instance$$13$$ = $_init$$1$$());
      return $instance$$13$$;
    }};
  }();
  $oj$$6$$.$LengthValidator$ = function $$oj$$6$$$$LengthValidator$$($options$$207$$) {
    this.Init($options$$207$$);
  };
  $goog$exportPath_$$("LengthValidator", $oj$$6$$.$LengthValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$LengthValidator$, $oj$$6$$.$Validator$, "oj.LengthValidator");
  $oj$$6$$.$LengthValidator$.prototype.Init = function $$oj$$6$$$$LengthValidator$$$Init$($options$$208$$) {
    $oj$$6$$.$LengthValidator$.$superclass$.Init.call(this);
    this.$_min$ = $options$$208$$.min;
    this.$_max$ = $options$$208$$.max;
    $options$$208$$ && (this.$_hint$ = $options$$208$$.hint || {}, this.$_customMessageSummary$ = $options$$208$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$208$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.Init", {Init:$oj$$6$$.$LengthValidator$.prototype.Init});
  $oj$$6$$.$LengthValidator$.prototype.$getHint$ = function $$oj$$6$$$$LengthValidator$$$$getHint$$() {
    var $hint$$7_params$$12$$ = null, $hintExact_hints$$6$$ = this.$_hint$, $hintInRange$$2$$ = $hintExact_hints$$6$$.inRange, $hintMinimum$$2$$ = $hintExact_hints$$6$$.min, $hintMaximum$$2$$ = $hintExact_hints$$6$$.max, $hintExact_hints$$6$$ = $hintExact_hints$$6$$.exact, $translations$$7$$ = $oj$$6$$.$Translations$, $min$$5$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$5$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    null !== $min$$5$$ && null !== $max$$5$$ ? $min$$5$$ !== $max$$5$$ ? ($hint$$7_params$$12$$ = {min:$min$$5$$, max:$max$$5$$}, $hint$$7_params$$12$$ = $hintInRange$$2$$ ? $translations$$7$$.$applyParameters$($hintInRange$$2$$, $hint$$7_params$$12$$) : $translations$$7$$.$getTranslatedString$("oj-validator.length.hint.inRange", $hint$$7_params$$12$$)) : ($hint$$7_params$$12$$ = {length:$min$$5$$}, $hint$$7_params$$12$$ = $hintExact_hints$$6$$ ? $translations$$7$$.$applyParameters$($hintExact_hints$$6$$, 
    $hint$$7_params$$12$$) : $translations$$7$$.$getTranslatedString$("oj-validator.length.hint.exact", $hint$$7_params$$12$$)) : null !== $min$$5$$ ? ($hint$$7_params$$12$$ = {min:$min$$5$$}, $hint$$7_params$$12$$ = $hintMinimum$$2$$ ? $translations$$7$$.$applyParameters$($hintMinimum$$2$$, $hint$$7_params$$12$$) : $translations$$7$$.$getTranslatedString$("oj-validator.length.hint.min", $hint$$7_params$$12$$)) : null !== $max$$5$$ && ($hint$$7_params$$12$$ = {max:$max$$5$$}, $hint$$7_params$$12$$ = 
    $hintMaximum$$2$$ ? $translations$$7$$.$applyParameters$($hintMaximum$$2$$, $hint$$7_params$$12$$) : $translations$$7$$.$getTranslatedString$("oj-validator.length.hint.max", $hint$$7_params$$12$$));
    return $hint$$7_params$$12$$;
  };
  $oj$$6$$.$LengthValidator$.prototype.validate = function $$oj$$6$$$$LengthValidator$$$validate$($params$$13_value$$148$$) {
    var $string$$2_summary$$20$$ = "", $detail$$23_messageTooShort$$ = "", $string$$2_summary$$20$$ = "" + $params$$13_value$$148$$, $length$$12$$ = $string$$2_summary$$20$$.length, $customMessageDetail$$2_messageTooLong$$ = this.$_customMessageDetail$, $customMessageSummary$$2_translations$$8$$ = this.$_customMessageSummary$, $detail$$23_messageTooShort$$ = $customMessageDetail$$2_messageTooLong$$.tooShort, $customMessageDetail$$2_messageTooLong$$ = $customMessageDetail$$2_messageTooLong$$.tooLong, 
    $messageSummaryTooShort$$ = $customMessageSummary$$2_translations$$8$$.tooShort, $messageSummaryTooLong$$ = $customMessageSummary$$2_translations$$8$$.tooLong, $customMessageSummary$$2_translations$$8$$ = $oj$$6$$.$Translations$, $min$$6$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$6$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    if ((null === $min$$6$$ || $length$$12$$ >= this.$_min$) && (null === $max$$6$$ || $length$$12$$ <= this.$_max$)) {
      return $string$$2_summary$$20$$;
    }
    $length$$12$$ < this.$_min$ ? ($params$$13_value$$148$$ = {value:$params$$13_value$$148$$, min:$min$$6$$}, $string$$2_summary$$20$$ = $messageSummaryTooShort$$ ? $customMessageSummary$$2_translations$$8$$.$applyParameters$($messageSummaryTooShort$$, $params$$13_value$$148$$) : $customMessageSummary$$2_translations$$8$$.$getTranslatedString$("oj-validator.length.messageSummary.tooShort"), $detail$$23_messageTooShort$$ = $detail$$23_messageTooShort$$ ? $customMessageSummary$$2_translations$$8$$.$applyParameters$($detail$$23_messageTooShort$$, 
    $params$$13_value$$148$$) : $customMessageSummary$$2_translations$$8$$.$getTranslatedString$("oj-validator.length.messageDetail.tooShort", $params$$13_value$$148$$)) : ($params$$13_value$$148$$ = {value:$params$$13_value$$148$$, max:$max$$6$$}, $string$$2_summary$$20$$ = $messageSummaryTooLong$$ ? $customMessageSummary$$2_translations$$8$$.$applyParameters$($messageSummaryTooLong$$, $params$$13_value$$148$$) : $customMessageSummary$$2_translations$$8$$.$getTranslatedString$("oj-validator.length.messageSummary.tooLong"), 
    $detail$$23_messageTooShort$$ = $customMessageDetail$$2_messageTooLong$$ ? $customMessageSummary$$2_translations$$8$$.$applyParameters$($customMessageDetail$$2_messageTooLong$$, $params$$13_value$$148$$) : $customMessageSummary$$2_translations$$8$$.$getTranslatedString$("oj-validator.length.messageDetail.tooLong", $params$$13_value$$148$$));
    throw new $oj$$6$$.$ValidatorError$($string$$2_summary$$20$$, $detail$$23_messageTooShort$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.validate", {validate:$oj$$6$$.$LengthValidator$.prototype.validate});
});
