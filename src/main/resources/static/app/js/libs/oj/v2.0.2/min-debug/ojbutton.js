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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$24$$, $$$$22$$) {
  (function() {
    function $_getChromingDefault$$($componentName$$8$$, $element$$125_element$$inline_824$$, $actualContainers$$1_containerConstructor$$) {
      a: {
        for (var $interestingContainers$$inline_826$$ = $_interestingContainers$$[$componentName$$8$$], $i$$inline_827$$ = 0;$i$$inline_827$$ < $interestingContainers$$inline_826$$.length;++$i$$inline_827$$) {
          var $containerName$$inline_828$$ = $interestingContainers$$inline_826$$[$i$$inline_827$$];
          if (0 <= $actualContainers$$1_containerConstructor$$.indexOf($containerName$$inline_828$$)) {
            for (;;$element$$125_element$$inline_824$$ = $element$$125_element$$inline_824$$.parentNode) {
              var $func$$inline_829$$ = $oj$$24$$.Components.$getWidgetConstructor$($element$$125_element$$inline_824$$, $containerName$$inline_828$$);
              if ($func$$inline_829$$) {
                $actualContainers$$1_containerConstructor$$ = $func$$inline_829$$;
                break a;
              }
            }
          }
        }
        $actualContainers$$1_containerConstructor$$ = null;
      }
      return $actualContainers$$1_containerConstructor$$ ? $actualContainers$$1_containerConstructor$$("option", "chroming") : $oj$$24$$.$ThemeUtils$.$getOptionDefaultMap$($componentName$$8$$).chroming;
    }
    function $_radioGroup$$($radio$$, $$elems$$) {
      var $name$$123_selector$$30$$ = $radio$$.name, $$radios_form$$1$$ = $radio$$.form;
      $name$$123_selector$$30$$ ? ($name$$123_selector$$30$$ = $name$$123_selector$$30$$.replace(/'/g, "\\'"), $name$$123_selector$$30$$ = ":radio[name\x3d'" + $name$$123_selector$$30$$ + "']:oj-button", $$radios_form$$1$$ = $$elems$$ ? $$elems$$.filter($name$$123_selector$$30$$) : $$radios_form$$1$$ ? $$$$22$$($$radios_form$$1$$).find($name$$123_selector$$30$$) : $$$$22$$($name$$123_selector$$30$$, $radio$$.ownerDocument).filter(function() {
        return!this.form;
      })) : $$radios_form$$1$$ = ($$elems$$ ? $$elems$$.filter($radio$$) : $$$$22$$($radio$$)).filter(":oj-button");
      return $$radios_form$$1$$;
    }
    function $_setChromingClass$$($$elem$$2$$, $chroming$$) {
      $$elem$$2$$.removeClass($CHROMING_CLASSES$$).addClass($_chromingMap$$[$chroming$$]);
    }
    $oj$$24$$.$__registerWidget$("oj.ojButton", $$$$22$$.oj.baseComponent, {defaultElement:"\x3cbutton\x3e", widgetEventPrefix:"oj", options:{chroming:"full", disabled:!1, display:"all", label:null, icons:{start:null, end:null}, menu:null}, $_InitOptions$:function($originalDefaults$$10$$, $constructorOptions$$12$$) {
      this._super($originalDefaults$$10$$, $constructorOptions$$12$$);
      this.$_initButtonTypes$();
      "disabled" in $constructorOptions$$12$$ || this.option("disabled", !!this.element.prop("disabled"), {_context:{$internalSet$:!0}});
      "label" in $constructorOptions$$12$$ || (this.$keepDomLabel$ = !0, this.option("label", "inputPush" === this.type ? this.$buttonElement$.val() : this.$buttonElement$.html(), {_context:{$internalSet$:!0}}));
      !this.options.menu || $constructorOptions$$12$$.icons && void 0 !== $constructorOptions$$12$$.icons.end || this.option("icons.end", "oj-component-icon oj-button-menu-dropdown-icon", {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      function $endHandler$$() {
        $self$$139$$.$_lastTouch$ = Date.now();
        $self$$139$$.$rootElement$.removeClass($activeClass$$);
        $self$$139$$.$rootElement$.removeClass("oj-hover");
        $self$$139$$.$_toggleDefaultClasses$();
      }
      this._super();
      this.element.closest("form").unbind("reset" + $BUTTON_EVENT_NAMESPACE$$).bind("reset" + $BUTTON_EVENT_NAMESPACE$$, function() {
        var $form$$ = $$$$22$$(this);
        setTimeout(function() {
          $form$$.find(":oj-button").each(function() {
            $$$$22$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
          }).length || $form$$.unbind("reset" + $BUTTON_EVENT_NAMESPACE$$);
        }, 1);
      });
      this.$menuEventNamespace$ = this.eventNamespace + "menu";
      this.$_initButtonTypes2$();
      this.$hasTitle$ = !!this.$rootElement$.attr("title");
      var $self$$139$$ = this, $tabIndex$$4_toggleButton$$ = this.$_isToggle$, $activeClass$$ = $tabIndex$$4_toggleButton$$ ? "" : "oj-active";
      this.$rootElement$.addClass($BASE_CLASSES$$);
      $_setChromingClass$$(this.$rootElement$, this.options.chroming);
      this.document.bind("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, $endHandler$$);
      this.$buttonElement$.bind("touchstart" + this.eventNamespace, function() {
        $self$$139$$.$_IsEffectivelyDisabled$() || ($$$$22$$(this).addClass($activeClass$$), $self$$139$$.$_toggleDefaultClasses$());
      }).bind("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, $endHandler$$).bind("mouseenter" + this.eventNamespace, function() {
        $self$$139$$.$_IsEffectivelyDisabled$() || $self$$139$$.$_recentTouch$() || (this === $_lastActive$$ && $self$$139$$.$rootElement$.addClass("oj-active"), $self$$139$$.$rootElement$.addClass("oj-hover").removeClass("oj-default oj-focus-only"));
      }).bind("mouseleave" + this.eventNamespace, function() {
        $self$$139$$.$rootElement$.removeClass("oj-hover");
        $self$$139$$.$_IsEffectivelyDisabled$() || ($self$$139$$.$rootElement$.removeClass($activeClass$$), $self$$139$$.$_toggleDefaultClasses$());
      }).bind("click" + this.eventNamespace, function($event$$350$$) {
        $self$$139$$.$_IsEffectivelyDisabled$() && ($event$$350$$.preventDefault(), $event$$350$$.stopImmediatePropagation());
      });
      this.element.bind("focus" + this.eventNamespace, function() {
        $self$$139$$.$rootElement$.addClass("oj-focus");
        $self$$139$$.$_toggleDefaultClasses$();
      }).bind("blur" + this.eventNamespace, function() {
        $self$$139$$.$rootElement$.removeClass("oj-focus");
        $self$$139$$.$_toggleDefaultClasses$();
      });
      $tabIndex$$4_toggleButton$$ && (this.element.bind("change" + this.eventNamespace, function($event$$351$$) {
        $self$$139$$.$_applyCheckedStateFromDom$(!0);
        var $buttonset$$ = $$$$22$$(this).closest(":oj-buttonset").data("oj-ojButtonset"), $checkedState$$ = $buttonset$$ && $buttonset$$.$_getCheckedFromDom$($buttonset$$.$$buttons$);
        $buttonset$$ && void 0 !== $checkedState$$ && $buttonset$$.option("checked", $checkedState$$, {_context:{$writeback$:!0, originalEvent:$event$$351$$, $internalSet$:!0}});
      }), this.$buttonElement$.bind("mousedown" + this.eventNamespace, function() {
        $self$$139$$.$_IsEffectivelyDisabled$() || ($_lastToggleActive$$ = this, $self$$139$$.document.one("mouseup", function() {
          $_lastToggleActive$$ = null;
        }));
      }).bind("mouseup" + this.eventNamespace, function() {
        $self$$139$$.$_IsEffectivelyDisabled$() || this !== $_lastToggleActive$$ || $self$$139$$.element.focus();
      }));
      "checkbox" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if ($self$$139$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$355$$) {
        $event$$355$$.keyCode === $$$$22$$.ui.keyCode.ENTER && ($self$$139$$.$_IsEffectivelyDisabled$() || $self$$139$$.element.click());
      })) : "radio" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if ($self$$139$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$356$$) {
        $event$$356$$.keyCode !== $$$$22$$.ui.keyCode.ENTER || $self$$139$$.element[0].checked || $self$$139$$.$_IsEffectivelyDisabled$() || ($self$$139$$.element[0].checked = !0, $self$$139$$.element.change(), $self$$139$$.element.click());
      })) : (this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$357$$) {
        if ($self$$139$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        1 !== $event$$357$$.which || $self$$139$$.$_recentTouch$() || ($$$$22$$(this).addClass("oj-active").removeClass("oj-default oj-focus-only"), $_lastActive$$ = this, $self$$139$$.document.one("mouseup", function() {
          $_lastActive$$ = null;
        }));
      }).bind("mouseup" + this.eventNamespace, function() {
        if ($self$$139$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        $$$$22$$(this).removeClass("oj-active");
        $self$$139$$.$_toggleDefaultClasses$();
      }).bind("keydown" + this.eventNamespace, function($event$$358$$) {
        if ($self$$139$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        var $isSpace$$ = $event$$358$$.keyCode === $$$$22$$.ui.keyCode.SPACE, $isAnchor$$ = "anchor" === $self$$139$$.type;
        $isAnchor$$ && $isSpace$$ && $event$$358$$.preventDefault();
        ($isSpace$$ && !$isAnchor$$ || $event$$358$$.keyCode === $$$$22$$.ui.keyCode.ENTER) && $$$$22$$(this).addClass("oj-active").removeClass("oj-default oj-focus-only");
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
        $$$$22$$(this).removeClass("oj-active");
        $self$$139$$.$_toggleDefaultClasses$();
      }), "anchor" === this.type && ($tabIndex$$4_toggleButton$$ = this.$buttonElement$.attr("tabindex"), ("undefined" === $tabIndex$$4_toggleButton$$ || null === $tabIndex$$4_toggleButton$$ || isNaN($tabIndex$$4_toggleButton$$)) && this.$buttonElement$.attr("tabindex", "0")));
      this.$_updateEffectivelyDisabled$();
      this.$_handleLabelAndIconsAtCreateTime$();
      this.$_setupMenuButton$();
      this.$_toggleDefaultClasses$();
    }, $_recentTouch$:function() {
      return 500 > Date.now() - this.$_lastTouch$;
    }, $_NotifyContextMenuGesture$:function($menu$$9$$, $event$$359$$, $eventType$$39$$) {
      this.$_OpenContextMenu$($event$$359$$, $eventType$$39$$, {position:{of:"keyboard" === $eventType$$39$$ ? this.$rootElement$ : $event$$359$$}});
    }, $_initButtonTypes$:function() {
      if (this.element.is("input[type\x3dcheckbox]")) {
        this.type = "checkbox", this.$_isToggle$ = !0;
      } else {
        if (this.element.is("input[type\x3dradio]")) {
          this.type = "radio", this.$_isToggle$ = !0;
        } else {
          if (this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]")) {
            this.type = "inputPush";
          } else {
            if (this.element.is("button")) {
              this.type = "button";
            } else {
              if (this.element.is("a")) {
                this.type = "anchor";
              } else {
                throw Error("JET Button not supported on this element type");
              }
            }
          }
        }
      }
      if (this.$_isToggle$) {
        var $labelSelector$$ = "label[for\x3d'" + this.element.attr("id") + "']";
        this.$buttonElement$ = this.element.siblings().filter($labelSelector$$);
      } else {
        this.$buttonElement$ = this.element;
      }
    }, $_initButtonTypes2$:function() {
      this.$_isToggle$ ? (this.$buttonElement$.addClass("oj-button-label"), this.element.addClass("oj-button-input oj-helper-hidden-accessible").add(this.$buttonElement$).wrapAll("\x3cspan\x3e\x3c/span\x3e"), this.$rootElement$ = this.element.parent(), this.$rootElement$.addClass("oj-button-toggle"), this.element[0].checked && this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only")) : this.$rootElement$ = this.element;
    }, widget:function() {
      return this.$rootElement$;
    }, _destroy:function() {
      this.$_removeMenuBehavior$();
      this.document.off(this.eventNamespace);
      this.element.removeClass("oj-helper-hidden-accessible").removeUniqueId();
      var $isToggle$$ = this.$_isToggle$;
      $isToggle$$ || this.$rootElement$.removeClass($BASE_CLASSES$$ + " " + $STATE_CLASSES$$ + " " + $TYPE_CLASSES$$ + " " + $CHROMING_CLASSES$$);
      this.$buttonElement$.html(this.$buttonElement$.find(".oj-button-text").html());
      $isToggle$$ ? (this.$buttonElement$.removeClass("oj-button-label"), $oj$$24$$.$DomUtils$.unwrap(this.element)) : this.$hasTitle$ || this.$rootElement$.removeAttr("title");
      $_lastToggleActive$$ === this.$buttonElement$[0] && ($_lastToggleActive$$ = null);
    }, $_NotifyDetached$:function() {
      this._super();
      this.$_toggleDefaultClasses$();
    }, $__setAncestorComponentDisabled$:function($disabled$$6$$) {
      this._super($disabled$$6$$);
      this.$_updateEffectivelyDisabled$();
    }, $_updateEffectivelyDisabled$:function() {
      var $effectivelyDisabled$$ = this.$_IsEffectivelyDisabled$();
      this.$rootElement$.toggleClass("oj-disabled", $effectivelyDisabled$$);
      this.$rootElement$.toggleClass("oj-enabled", !$effectivelyDisabled$$);
      "anchor" !== this.type ? (this.element.prop("disabled", $effectivelyDisabled$$), this.$rootElement$.removeAttr("aria-disabled")) : this.$rootElement$.attr("aria-disabled", $effectivelyDisabled$$);
      $effectivelyDisabled$$ ? (this.widget().removeClass("oj-active oj-default oj-focus-only oj-hover oj-focus"), $_lastActive$$ = null, this.$_dismissMenu$()) : this.$_toggleDefaultClasses$();
    }, _setOption:function($key$$130$$, $value$$259$$, $flags$$33$$) {
      this._super($key$$130$$, $value$$259$$, $flags$$33$$);
      switch($key$$130$$) {
        case "chroming":
          $_setChromingClass$$(this.$rootElement$, $value$$259$$);
          break;
        case "disabled":
          this.$_updateEffectivelyDisabled$();
          break;
        case "label":
          this.$_setLabelOption$();
          break;
        case "display":
          "inputPush" !== this.type && this.$_setDisplayOptionOnDom$();
          break;
        case "icons":
          this.$_setIconsOption$(!0);
          break;
        case "menu":
          this.$_setupMenuButton$();
      }
    }, refresh:function() {
      this._super();
      this.$_ancestorDisabled$ && !$$$$22$$(this).closest(":oj-buttonset").length && this.$__setAncestorComponentDisabled$(!1);
      $_setChromingClass$$(this.$rootElement$, this.options.chroming);
    }, $_applyCheckedStateFromDom$:function($wholeGroup$$) {
      "radio" === this.type ? ($wholeGroup$$ ? $_radioGroup$$(this.element[0]) : this.element).each(function() {
        var $$radioWidget$$ = $$$$22$$(this).data("oj-ojButton");
        this.checked ? $$radioWidget$$.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only") : ($$radioWidget$$.$rootElement$.removeClass("oj-selected"), $$radioWidget$$.$_toggleDefaultClasses$());
      }) : "checkbox" === this.type && (this.element[0].checked ? this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only") : (this.$rootElement$.removeClass("oj-selected"), this.$_toggleDefaultClasses$()));
    }, $_handleLabelAndIconsAtCreateTime$:function() {
      if ("inputPush" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$();
      } else {
        var $textSpan$$1$$ = this.$_setLabelOnDomAtCreateTime$(), $hasStartIcon$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$($textSpan$$1$$, $hasStartIcon$$, $hasEndIcon$$);
      }
    }, $_setLabelOnDomAtCreateTime$:function() {
      var $buttonElement$$ = this.$buttonElement$, $textSpan$$2$$ = $$$$22$$("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e", this.document[0]);
      this.$keepDomLabel$ ? $textSpan$$2$$.append($buttonElement$$.contents()) : ($buttonElement$$.empty(), $textSpan$$2$$.text(this.options.label));
      $buttonElement$$.append($textSpan$$2$$);
      return $textSpan$$2$$;
    }, $_setLabelOption$:function() {
      if ("inputPush" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$();
      } else {
        var $textSpan$$3$$ = this.$buttonElement$.find(".oj-button-text");
        $textSpan$$3$$.text(this.options.label);
        this.$_setDisplayOptionOnDom$($textSpan$$3$$);
      }
    }, $_setLabelOnDomOfSpanlessButton$:function() {
      this.options.label && this.element.val(this.options.label);
    }, $_setIconsOption$:function() {
      if ("inputPush" !== this.type) {
        var $hasStartIcon$$1$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$1$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$(void 0, $hasStartIcon$$1$$, $hasEndIcon$$1$$);
      }
    }, $_setIconOnDom$:function($isStart_standardIconClasses$$) {
      if ($isStart_standardIconClasses$$) {
        var $iconSpan_iconSpanSelector$$ = ".oj-button-icon.oj-start";
        $isStart_standardIconClasses$$ = "oj-button-icon oj-start";
        var $appIconClass$$ = this.options.icons.start, $lastIvar$$ = "_lastStartIcon", $pendTo$$ = "prependTo";
      } else {
        $iconSpan_iconSpanSelector$$ = ".oj-button-icon.oj-end", $isStart_standardIconClasses$$ = "oj-button-icon oj-end", $appIconClass$$ = this.options.icons.end, $lastIvar$$ = "_lastEndIcon", $pendTo$$ = "appendTo";
      }
      $iconSpan_iconSpanSelector$$ = this.$buttonElement$.find($iconSpan_iconSpanSelector$$);
      $appIconClass$$ ? ($iconSpan_iconSpanSelector$$.length ? $iconSpan_iconSpanSelector$$.removeClass(this[$lastIvar$$]) : $iconSpan_iconSpanSelector$$ = $$$$22$$("\x3cspan\x3e\x3c/span\x3e").addClass($isStart_standardIconClasses$$)[$pendTo$$](this.$buttonElement$), $iconSpan_iconSpanSelector$$.addClass($appIconClass$$)) : $iconSpan_iconSpanSelector$$.remove();
      this[$lastIvar$$] = $appIconClass$$;
      return!!$appIconClass$$;
    }, $_setDisplayOptionOnDom$:function($buttonText_textSpan$$4$$, $buttonClass_hasStartIcon$$2$$, $atLeastOneIcon_hasEndIcon$$2$$) {
      void 0 === $buttonText_textSpan$$4$$ && ($buttonText_textSpan$$4$$ = this.$buttonElement$.find(".oj-button-text"));
      void 0 === $buttonClass_hasStartIcon$$2$$ && ($buttonClass_hasStartIcon$$2$$ = !!this.options.icons.start);
      void 0 === $atLeastOneIcon_hasEndIcon$$2$$ && ($atLeastOneIcon_hasEndIcon$$2$$ = !!this.options.icons.end);
      var $multipleIcons$$ = $buttonClass_hasStartIcon$$2$$ && $atLeastOneIcon_hasEndIcon$$2$$;
      $atLeastOneIcon_hasEndIcon$$2$$ = $buttonClass_hasStartIcon$$2$$ || $atLeastOneIcon_hasEndIcon$$2$$;
      var $displayIsIcons$$ = "icons" === this.options.display;
      $atLeastOneIcon_hasEndIcon$$2$$ && $displayIsIcons$$ ? ($buttonText_textSpan$$4$$.addClass("oj-helper-hidden-accessible"), this.$hasTitle$ || ($buttonText_textSpan$$4$$ = $buttonText_textSpan$$4$$.text(), this.$rootElement$.attr("title", $$$$22$$.trim($buttonText_textSpan$$4$$)))) : ($buttonText_textSpan$$4$$.removeClass("oj-helper-hidden-accessible"), this.$hasTitle$ || this.$rootElement$.removeAttr("title"));
      $buttonClass_hasStartIcon$$2$$ = $atLeastOneIcon_hasEndIcon$$2$$ ? $displayIsIcons$$ ? $multipleIcons$$ ? "oj-button-icons-only" : "oj-button-icon-only" : $multipleIcons$$ ? "oj-button-text-icons" : $buttonClass_hasStartIcon$$2$$ ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only";
      this.$rootElement$.removeClass($TYPE_CLASSES$$).addClass($buttonClass_hasStartIcon$$2$$);
    }, $_setupMenuButton$:function() {
      if (this.options.menu && this.element.is("input")) {
        throw Error("Menu Button functionality is not supported on input elements.");
      }
      this.$_removeMenuBehavior$();
      if (this.options.menu) {
        var $self$$140$$ = this;
        this.element.attr("aria-haspopup", !0).on("keydown" + this.$menuEventNamespace$, function($event$$360$$) {
          if ($event$$360$$.which === $$$$22$$.ui.keyCode.DOWN) {
            $self$$140$$.$_showMenu$($event$$360$$, "firstItem"), $event$$360$$.preventDefault();
          } else {
            if ($event$$360$$.which === $$$$22$$.ui.keyCode.ESCAPE) {
              var $bubbleEscUp$$ = $self$$140$$.$_checkMenuParent$($self$$140$$.$rootElement$);
              $self$$140$$.$_dismissMenu$($event$$360$$);
              return $bubbleEscUp$$;
            }
          }
          return!0;
        }).on("click" + this.$menuEventNamespace$, function($event$$361$$) {
          var $menu$$10$$ = $self$$140$$.$_getMenu$();
          $menu$$10$$.$__spaceEnterDownInMenu$ || $self$$140$$.$_showMenu$($event$$361$$, "firstItem");
          $menu$$10$$.$__spaceEnterDownInMenu$ = !1;
          $event$$361$$.preventDefault();
          return!0;
        });
      }
    }, $_checkMenuParent$:function($element$$123$$) {
      return!$element$$123$$.hasClass("oj-selected");
    }, $_removeMenuBehavior$:function() {
      this.element.removeAttr("aria-haspopup").off(this.$menuEventNamespace$);
      this.$_dismissMenu$();
      this.$_menu$ && this.$_menu$.widget().off(this.$menuEventNamespace$);
      this.$_menu$ = void 0;
    }, $_getMenu$:function() {
      if (!this.$_menu$) {
        this.$_menu$ = $$$$22$$(this.options.menu).data("oj-ojMenu");
        if (!this.$_menu$) {
          throw Error('JET Button: "menu" option specified, but does not reference a valid JET Menu.');
        }
        var $self$$141$$ = this;
        this.$_menu$.widget().on("ojclose" + this.$menuEventNamespace$, function($event$$362$$) {
          $self$$141$$.$_menuDismissHandler$($event$$362$$);
        });
      }
      return this.$_menu$;
    }, $_showMenu$:function($event$$363$$, $focus$$) {
      if (!this.$_IsEffectivelyDisabled$()) {
        var $menu$$11$$ = this.$_getMenu$(), $menuElem$$ = $menu$$11$$.widget();
        $menu$$11$$.open($event$$363$$, {launcher:this.element, initialFocus:$focus$$});
        this.$_menuVisible$ = !0;
        $menuElem$$.attr("aria-label") || $menuElem$$.attr("aria-labelledby") || (this.element.uniqueId(), this.$_setAriaLabelledBy$ = !0, $menuElem$$.attr("aria-labelledby", this.element.attr("id")));
        this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only");
      }
    }, $_dismissMenu$:function($event$$364$$) {
      this.$_menuVisible$ && (this.$_menu$.$__collapseAll$($event$$364$$, !0), this.$_menu$.$__dismiss$($event$$364$$));
    }, $_menuDismissHandler$:function() {
      this.$_setAriaLabelledBy$ && (this.$_getMenu$().widget().removeAttr("aria-labelledby"), this.$_setAriaLabelledBy$ = !1);
      this.$rootElement$.removeClass("oj-selected");
      this.$_toggleDefaultClasses$();
      this.$_menuVisible$ = !1;
    }, $_toggleDefaultClasses$:function() {
      var $defaultState$$, $focused$$8_focusedOnly$$;
      this.$rootElement$.is(".oj-hover, .oj-active, .oj-selected, .oj-disabled") ? $focused$$8_focusedOnly$$ = $defaultState$$ = !1 : ($focused$$8_focusedOnly$$ = this.$rootElement$.is(".oj-focus"), $defaultState$$ = !$focused$$8_focusedOnly$$);
      this.$rootElement$.toggleClass("oj-default", $defaultState$$);
      this.$rootElement$.toggleClass("oj-focus-only", $focused$$8_focusedOnly$$);
    }});
    $oj$$24$$.$__registerWidget$("oj.ojButtonset", $$$$22$$.oj.baseComponent, {$_items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a", widgetEventPrefix:"oj", options:{checked:null, chroming:"full", focusManagement:"oneTabstop"}, $_setCheckedOnDom$:function($checked$$1$$, $$buttons$$1$$) {
      var $name$$121_type$$89_valid$$10_validRadios$$ = $$$$22$$.type($checked$$1$$), $allCheckboxes$$;
      if ("null" === $name$$121_type$$89_valid$$10_validRadios$$ || "array" === $name$$121_type$$89_valid$$10_validRadios$$) {
        $allCheckboxes$$ = $$buttons$$1$$.filter("input[type\x3dcheckbox]").length === $$buttons$$1$$.length;
      }
      if ($allCheckboxes$$ && "null" === $name$$121_type$$89_valid$$10_validRadios$$) {
        throw Error("Invalid 'checked' value set on JET Buttonset: " + $checked$$1$$);
      }
      if ("string" === $name$$121_type$$89_valid$$10_validRadios$$ || "null" === $name$$121_type$$89_valid$$10_validRadios$$) {
        ($name$$121_type$$89_valid$$10_validRadios$$ = (($name$$121_type$$89_valid$$10_validRadios$$ = $$buttons$$1$$[0].name) || 1 >= $$buttons$$1$$.length) && $$buttons$$1$$.filter("input[type\x3dradio][name\x3d" + $name$$121_type$$89_valid$$10_validRadios$$ + "]").length === $$buttons$$1$$.length && (null === $checked$$1$$ || $$buttons$$1$$.filter("[value\x3d" + $checked$$1$$ + "]").length)) && $$buttons$$1$$.each(function() {
          this.checked = this.value === $checked$$1$$;
        }), $name$$121_type$$89_valid$$10_validRadios$$ = $name$$121_type$$89_valid$$10_validRadios$$ || null === $checked$$1$$;
      } else {
        if ("array" === $name$$121_type$$89_valid$$10_validRadios$$) {
          var $last$$2$$;
          ($name$$121_type$$89_valid$$10_validRadios$$ = $allCheckboxes$$ && $checked$$1$$.concat().sort().every(function($elem$$71$$) {
            var $retVal$$15$$ = $elem$$71$$ !== $last$$2$$ && $$buttons$$1$$.filter("[value\x3d" + $elem$$71$$ + "]").length;
            $last$$2$$ = $elem$$71$$;
            return $retVal$$15$$;
          })) && $$buttons$$1$$.each(function() {
            this.checked = -1 < $checked$$1$$.indexOf(this.value);
          });
        } else {
          $name$$121_type$$89_valid$$10_validRadios$$ = !1;
        }
      }
      if (!$name$$121_type$$89_valid$$10_validRadios$$) {
        throw Error("Invalid 'checked' value set on JET Buttonset: " + $checked$$1$$);
      }
    }, $_getCheckedFromDom$:function($$buttons$$2$$) {
      var $checked$$2$$ = void 0, $isRadio$$ = null, $name$$122$$ = null;
      $$buttons$$2$$.each(function() {
        if ("input" !== this.tagName.toLowerCase()) {
          return $checked$$2$$ = void 0, !1;
        }
        var $currentIsRadio_currentType$$ = this.type.toLowerCase(), $currentName$$;
        if ("radio" === $currentIsRadio_currentType$$) {
          $currentIsRadio_currentType$$ = !0, $currentName$$ = this.name.toLowerCase();
        } else {
          if ("checkbox" === $currentIsRadio_currentType$$) {
            $currentIsRadio_currentType$$ = !1, $currentName$$ = null;
          } else {
            return $checked$$2$$ = void 0, !1;
          }
        }
        if (void 0 !== $checked$$2$$ && ($currentIsRadio_currentType$$ !== $isRadio$$ || $currentName$$ !== $name$$122$$ || $isRadio$$ && !$name$$122$$)) {
          return $checked$$2$$ = void 0, !1;
        }
        void 0 === $checked$$2$$ ? ($checked$$2$$ = $currentIsRadio_currentType$$ ? this.checked ? this.value : null : this.checked ? [this.value] : [], $isRadio$$ = $currentIsRadio_currentType$$, $name$$122$$ = $currentName$$) : this.checked && ($isRadio$$ ? $checked$$2$$ = this.value : $checked$$2$$.push(this.value));
      });
      return $checked$$2$$;
    }, $_CompareOptionValues$:function($option$$32$$, $value1$$9$$, $value2$$8$$) {
      return "checked" === $option$$32$$ ? $value1$$9$$ === $value2$$8$$ ? !0 : "array" === $$$$22$$.type($value1$$9$$) && "array" === $$$$22$$.type($value2$$8$$) && !$$$$22$$($value1$$9$$).not($value2$$8$$).length && !$$$$22$$($value2$$8$$).not($value1$$9$$).length : this._superApply(arguments);
    }, $_InitOptions$:function($originalDefaults$$11$$, $constructorOptions$$13$$) {
      this._super($originalDefaults$$11$$, $constructorOptions$$13$$);
      this.$$buttons$ = this.element.find(this.$_items$);
      if (!("checked" in $constructorOptions$$13$$)) {
        this.$initCheckedFromDom$ = !0;
        var $checked$$3$$ = this.$_getCheckedFromDom$(this.$$buttons$);
        "array" === $$$$22$$.type($checked$$3$$) && (this.options.checked = []);
        void 0 !== $checked$$3$$ && this.option("checked", $checked$$3$$, {_context:{$internalSet$:!0}});
      }
    }, _ComponentCreate:function() {
      this._super();
      this.element.attr($oj$$24$$.Components.$_OJ_CONTAINER_ATTR$, this.widgetName).addClass("oj-buttonset oj-component");
      this.$_setRole$(this.options.focusManagement);
      this.$_setup$(!0);
    }, $_NotifyContextMenuGesture$:function($currentButton_menu$$12$$, $event$$366$$, $eventType$$40$$) {
      $currentButton_menu$$12$$ = this.element.find(":oj-button[tabindex\x3d0]");
      this.$_OpenContextMenu$($event$$366$$, $eventType$$40$$, {launcher:$currentButton_menu$$12$$, position:{of:"keyboard" === $eventType$$40$$ ? $currentButton_menu$$12$$.ojButton("widget") : $event$$366$$}});
    }, $_propagateDisabled$:function($disabled$$7$$) {
      $disabled$$7$$ = !!$disabled$$7$$;
      this.$$buttons$.each(function() {
        $$$$22$$(this).data("oj-ojButton").$__setAncestorComponentDisabled$($disabled$$7$$);
      });
    }, $_setRole$:function($focusManagement$$) {
      "oneTabstop" === $focusManagement$$ ? this.element.attr("role", "toolbar") : this.element.removeAttr("role");
    }, _setOption:function($key$$131$$, $value$$260$$, $flags$$34$$) {
      this._superApply(arguments);
      "disabled" === $key$$131$$ ? this.$_propagateDisabled$($value$$260$$) : "checked" === $key$$131$$ ? (this.$_setCheckedOnDom$($value$$260$$, this.$$buttons$), this.$$buttons$.each(function() {
        $$$$22$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
      })) : "focusManagement" === $key$$131$$ ? this.$_setRole$($value$$260$$) : "chroming" === $key$$131$$ && ($_setChromingClass$$(this.element, $value$$260$$), this.$$buttons$.ojButton("refresh"));
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$1$$) {
      var $self$$142$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      $_setChromingClass$$(this.element, this.options.chroming);
      $isCreate$$1$$ ? this.$initCheckedFromDom$ || this.$_setCheckedOnDom$(this.options.checked, this.$$buttons$) : this.$$buttons$ = this.element.find(this.$_items$);
      this.element.toggleClass("oj-buttonset-multi", 1 < this.$$buttons$.length);
      this.$$buttons$.filter(":oj-button").ojButton("refresh").each(function() {
        $$$$22$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
      }).end().not(":oj-button").ojButton().end().map(function() {
        return $$$$22$$(this).ojButton("widget")[0];
      }).removeClass("oj-buttonset-first oj-buttonset-last").filter(":first").addClass("oj-buttonset-first").end().filter(":last").addClass("oj-buttonset-last").end().end();
      this.$_propagateDisabled$(this.options.disabled);
      "oneTabstop" === this.options.focusManagement && (this.$$buttons$.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$367$$) {
        $self$$142$$.$_handleKeyDown$($event$$367$$, $$$$22$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$22$$(this).data("oj-ojButton").$_IsEffectivelyDisabled$() || $self$$142$$.$_setTabStop$($$$$22$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$142$$.$_setTabStop$($$$$22$$(this));
      }), this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$22$$(this).data("oj-ojButton").$_IsEffectivelyDisabled$();
      }), this.$_initTabindexes$($isCreate$$1$$));
    }, $_initTabindexes$:function($$newTabStop_isCreate$$2$$) {
      var $$last$$ = $$$$22$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop_isCreate$$2$$ = $$newTabStop_isCreate$$2$$ || !$$last$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$;
      this.$_setTabStop$($$newTabStop_isCreate$$2$$);
    }, $_mapToTabbable$:function($$button$$) {
      var $$enabledButtons$$ = this.$$enabledButtons$;
      return $$button$$.map(function($index$$179$$, $elem$$72$$) {
        if ("radio" != $elem$$72$$.type || $elem$$72$$.checked || "" == $elem$$72$$.name) {
          return $elem$$72$$;
        }
        var $$checkedRadio$$ = $_radioGroup$$($elem$$72$$, $$enabledButtons$$).filter(":checked");
        return $$checkedRadio$$.length ? $$checkedRadio$$[0] : $elem$$72$$;
      });
    }, $_setTabStop$:function($$button$$1$$) {
      $$button$$1$$ = this.$_mapToTabbable$($$button$$1$$);
      var $button$$ = $$button$$1$$[0], $last$$3$$ = this.$_lastTabStop$;
      $button$$ !== $last$$3$$ && ($$$$22$$($last$$3$$).attr("tabindex", "-1"), $$button$$1$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$);
    }, $_handleKeyDown$:function($event$$370$$, $$button$$2$$) {
      switch($event$$370$$.which) {
        case $$$$22$$.ui.keyCode.LEFT:
        ;
        case $$$$22$$.ui.keyCode.RIGHT:
          $event$$370$$.preventDefault();
          var $$enabledButtons$$1$$ = this.$$enabledButtons$, $length$$17$$ = $$enabledButtons$$1$$.length;
          if (2 > $length$$17$$) {
            break;
          }
          var $oldIndex$$1$$ = $$enabledButtons$$1$$.index($$button$$2$$);
          $$enabledButtons$$1$$.eq(($oldIndex$$1$$ + ($event$$370$$.which == $$$$22$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$17$$) % $length$$17$$).focus();
          break;
        case $$$$22$$.ui.keyCode.UP:
        ;
        case $$$$22$$.ui.keyCode.DOWN:
          "radio" == $$button$$2$$.attr("type") && $event$$370$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-buttonset oj-component " + $CHROMING_CLASSES$$).removeAttr($oj$$24$$.Components.$_OJ_CONTAINER_ATTR$).removeAttr("role");
      "oneTabstop" === this.options.focusManagement && this.$$buttons$.attr("tabindex", "0");
      this.$$buttons$.map(function() {
        return $$$$22$$(this).ojButton("widget")[0];
      }).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy");
    }});
    var $_lastActive$$, $_lastToggleActive$$, $BUTTON_EVENT_NAMESPACE$$ = ".ojButton", $BASE_CLASSES$$ = "oj-button oj-component oj-enabled oj-default", $STATE_CLASSES$$ = "oj-hover oj-active oj-selected", $TYPE_CLASSES$$ = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only", $CHROMING_CLASSES$$ = "oj-button-full-chrome oj-button-half-chrome oj-button-outlined-chrome", $_chromingMap$$ = {full:"oj-button-full-chrome", 
    half:"oj-button-half-chrome", outlined:"oj-button-outlined-chrome"}, $_interestingContainers$$ = {button:["ojButtonset", "ojToolbar"], buttonset:["ojToolbar"]};
    $oj$$24$$.Components.$setDefaultOptions$({ojButton:{chroming:$oj$$24$$.Components.$createDynamicPropertyGetter$(function($context$$109$$) {
      return $_getChromingDefault$$("button", $context$$109$$.element, $context$$109$$.containers);
    })}, ojButtonset:{chroming:$oj$$24$$.Components.$createDynamicPropertyGetter$(function($context$$110$$) {
      return $_getChromingDefault$$("buttonset", $context$$110$$.element, $context$$110$$.containers);
    })}});
  })();
});
