/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$70$$, $$$$64$$) {
  (function() {
    $oj$$70$$.$__registerWidget$("oj.ojRadioset", $$$$64$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiRadioset$;
    }, $_InitOptions$:function($originalDefaults$$20$$, $constructorOptions$$22$$) {
      var $checkedRadio_domValue$$3$$;
      this._super($originalDefaults$$20$$, $constructorOptions$$22$$);
      $oj$$70$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$22$$, this);
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      void 0 === $constructorOptions$$22$$.value && ($checkedRadio_domValue$$3$$ = this.$$radios$.filter(":checked"), $checkedRadio_domValue$$3$$ = 0 === $checkedRadio_domValue$$3$$.length ? void 0 : $checkedRadio_domValue$$3$$.val(), void 0 !== $checkedRadio_domValue$$3$$ && this.option("value", $checkedRadio_domValue$$3$$, {_context:{$writeback$:!0, $internalSet$:!0}}), void 0 === this.options.value && (this.options.value = null));
    }, _ComponentCreate:function() {
      var $element$$160$$ = this.element;
      this._super();
      if ($element$$160$$.is("fieldset")) {
        throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$radios$._ojRadioCheckbox();
      this.$uiRadioset$ = $element$$160$$.addClass("oj-radioset oj-component").attr("role", "radiogroup").wrapInner("\x3cdiv class\x3d'oj-radioset-wrapper'\x3e\x3c/div\x3e");
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      this.$$radios$.filter(".oj-radio").each(function() {
        var $disabledValue$$1$$ = void 0 !== $$$$64$$(this).attr("disabled") ? !!$$$$64$$(this).prop("disabled") : !1;
        $$$$64$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
      });
      this.$$radios$.not(".oj-radio")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findRadiosWithMatchingName$:function() {
      var $allradios_element$$161$$ = this.element, $first$$10_name$$147$$ = $allradios_element$$161$$.find("input[type\x3dradio]:first");
      0 === $first$$10_name$$147$$.length && $oj$$70$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
      $first$$10_name$$147$$ = $first$$10_name$$147$$.attr("name");
      return void 0 === $first$$10_name$$147$$ ? ($allradios_element$$161$$ = $allradios_element$$161$$.find("input[type\x3dradio]"), $allradios_element$$161$$.not("[name]")) : $allradios_element$$161$$.find("input[type\x3dradio][name\x3d" + $first$$10_name$$147$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$13_menu$$25_radios$$, $event$$609$$, $eventType$$53$$) {
      $launcher$$13_menu$$25_radios$$ = this.element.find("input[type\x3dradio]");
      var $checked$$5$$ = $launcher$$13_menu$$25_radios$$.filter(":checked");
      $launcher$$13_menu$$25_radios$$ = $checked$$5$$.length ? $checked$$5$$ : $launcher$$13_menu$$25_radios$$.filter(":enabled").first();
      this.$_OpenContextMenu$($event$$609$$, $eventType$$53$$, {launcher:$launcher$$13_menu$$25_radios$$});
    }, _GetMessagingLauncherElement:function() {
      var $inputElem$$1$$ = this.$_GetContentElement$(), $renderInputAs$$1$$ = $oj$$70$$.$ThemeUtils$.$getOptionDefaultMap$("radioset").renderInputAs;
      return $renderInputAs$$1$$ && "html" !== $renderInputAs$$1$$ ? this.widget() : $inputElem$$1$$;
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$610$$) {
      this.$_HandleChangeEvent$($event$$610$$);
    }}, $_HandleChangeEvent$:function($event$$611$$) {
      var $submittedValue$$5$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$5$$, $event$$611$$, $_sValueChangeCheckFalse$$1$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($displayValue$$13_radioWithMatchingValue$$) {
      var $notMatchingRadios_valueFilter$$1$$;
      $notMatchingRadios_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$13_radioWithMatchingValue$$ + "']";
      void 0 !== this.$$radios$ && ($displayValue$$13_radioWithMatchingValue$$ = this.$$radios$.filter($notMatchingRadios_valueFilter$$1$$), void 0 !== $displayValue$$13_radioWithMatchingValue$$ && 0 < $displayValue$$13_radioWithMatchingValue$$.length ? ($notMatchingRadios_valueFilter$$1$$ = this.$$radios$.not($notMatchingRadios_valueFilter$$1$$), $displayValue$$13_radioWithMatchingValue$$._ojRadioCheckbox("option", "checked", !0), void 0 !== $notMatchingRadios_valueFilter$$1$$ && 0 < $notMatchingRadios_valueFilter$$1$$.length && 
      $notMatchingRadios_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !1)) : this.$$radios$._ojRadioCheckbox("option", "checked", !1));
    }, $_GetElementValue$:function() {
      var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
      return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
    }, _GetDefaultStyleClass:function() {
      return "oj-radioset";
    }, $_GetContentElement$:function() {
      return this.$_findRadiosWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$11$$) {
      $disabled$$11$$ = !!$disabled$$11$$;
      this.$$radios$.each(function() {
        $$$$64$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$11$$);
      });
      this.$$radios$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$185$$, $value$$310$$) {
      this._superApply(arguments);
      "disabled" === $key$$185$$ && this.$_propagateDisabled$($value$$310$$);
    }, getNodeBySubId:function($locator$$64_subId$$67$$) {
      var $node$$175$$ = this._super($locator$$64_subId$$67$$);
      $node$$175$$ || ($locator$$64_subId$$67$$ = $locator$$64_subId$$67$$.subId, "oj-radioset-inputs" === $locator$$64_subId$$67$$ && ($node$$175$$ = this.$$radios$.get()));
      return $node$$175$$ || null;
    }, _destroy:function() {
      var $ret$$79$$ = this._super(), $wrapperDom$$1$$ = this.element[0].firstChild;
      this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
      $$$$64$$($wrapperDom$$1$$).contents().unwrap();
      return $ret$$79$$;
    }});
    var $_sValueChangeCheckFalse$$1$$ = {$doValueChangeCheck$:!1};
  })();
});
