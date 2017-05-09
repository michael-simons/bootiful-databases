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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$80$$, $$$$73$$) {
  (function() {
    $oj$$80$$.$__registerWidget$("oj.ojMenu", $$$$73$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom", collision:"flipfit"}}, submenuOpenOptions:{position:{my:"start top", at:"end top", collision:"flipfit"}}, beforeOpen:null, close:null, open:null, select:null}, _ComponentCreate:function() {
      this._super();
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$652$$) {
        this.options.disabled && $event$$652$$.preventDefault();
      }, click:function($event$$653$$) {
        this.options.disabled && $event$$653$$.preventDefault();
      }, keydown:function($event$$654$$) {
        !this.options.disabled || $event$$654$$.keyCode !== $$$$73$$.ui.keyCode.ESCAPE && $event$$654$$.keyCode !== $$$$73$$.ui.keyCode.TAB || ($event$$654$$.keyCode === $$$$73$$.ui.keyCode.TAB && $event$$654$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$654$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$655$$) {
        if (!this.$focusHandled$) {
          this.$focusHandled$ = !0;
          var $target$$103$$ = $$$$73$$($event$$655$$.currentTarget);
          $target$$103$$.siblings().removeClass("oj-focus-ancestor");
          this.$_focus$($event$$655$$, $target$$103$$);
        }
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$656$$) {
        $event$$656$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$657$$) {
        $event$$657$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$focusHandled$ = !1;
      }, mouseover:function() {
        this.$focusHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$661$$) {
        var $target$$104$$ = $$$$73$$($event$$661$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$104$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$661$$.preventDefault(), this.$active$ && this.$active$.closest($target$$104$$).length && this.$active$.get(0) != $target$$104$$.get(0) || ($target$$104$$.has(".oj-menu").length ? this.$_expand$($event$$661$$) : (this.$_select$($event$$661$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":$handleMouseEnterMenuItem$$, mouseleave:function($event$$662$$) {
        this.$_collapse$($event$$662$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$663$$) {
        this.$_collapse$($event$$663$$, "eventSubtree");
      }, focus:function($event$$664$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$126$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$664$$, $item$$126$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$665$$) {
        if ($event$$665$$.keyCode == $$$$73$$.ui.keyCode.ENTER || $event$$665$$.keyCode == $$$$73$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_usingCallback$ = $$$$73$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$85$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$85$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$666$$) {
      if (("focus" === $event$$666$$.type || "mousedown" === $event$$666$$.type || "touchstart" === $event$$666$$.type || 93 == $event$$666$$.which || 121 == $event$$666$$.which && $event$$666$$.shiftKey || 93 == $event$$666$$.keyCode) && ("mousedown" !== $event$$666$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$73$$.each($openPopupMenus$$, function($index$$300$$, $menu$$26$$) {
          !$$$$73$$($event$$666$$.target).closest($menu$$26$$.element).length && ("keydown" === $event$$666$$.type || "mousedown" === $event$$666$$.type && 3 === $event$$666$$.which || !$$$$73$$($event$$666$$.target).closest($menu$$26$$.$_launcher$).length || $menu$$26$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$666$$.type && 3 !== $event$$666$$.which || "touchstart" === $event$$666$$.type)) && ($menu$$26$$.$_collapse$($event$$666$$, "eventSubtree"), $menu$$26$$.$_launcher$ && $menu$$26$$.$__dismiss$($event$$666$$));
        });
      }
    }, _setOption:function($key$$194$$, $value$$320$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$194$$ ? this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$320$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$194$$ && (this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$320$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$172$$ = $$$$73$$(this);
        $elem$$172$$.data("oj-ojMenu-submenu-icon") && $elem$$172$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this._super();
    }, $_keydown$:function($event$$667$$) {
      function $escape$$1$$($value$$321$$) {
        return $value$$321$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$27_prev$$4$$, $activeItemId_character$$1$$, $skip$$3_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$667$$.keyCode) {
        case $$$$73$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$667$$);
          break;
        case $$$$73$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$667$$);
          break;
        case $$$$73$$.ui.keyCode.UP:
          this.$_previous$($event$$667$$);
          break;
        case $$$$73$$.ui.keyCode.DOWN:
          this.$_next$($event$$667$$);
          break;
        case $$$$73$$.ui.keyCode.LEFT:
        ;
        case $$$$73$$.ui.keyCode.RIGHT:
          $event$$667$$.keyCode === $$$$73$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$667$$) : this.$_collapse$($event$$667$$, "active");
          break;
        case $$$$73$$.ui.keyCode.ENTER:
        ;
        case $$$$73$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$667$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$229$$ = this;
          setTimeout(function() {
            $self$$229$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$73$$.ui.keyCode.TAB:
          $event$$667$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$667$$);
          break;
        case $$$$73$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$3_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$73$$("#" + $activeItemId_character$$1$$).is($skip$$3_topLevelAnchorSelector$$) ? this.$_collapse$($event$$667$$, "active") : this.$_focusLauncherAndDismiss$($event$$667$$)) : this.$_collapse$($event$$667$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$27_prev$$4$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$667$$.keyCode), $skip$$3_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$27_prev$$4$$ ? $skip$$3_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$27_prev$$4$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$27_prev$$4$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$73$$(this).children("a").text());
          }), $match$$27_prev$$4$$ = $skip$$3_topLevelAnchorSelector$$ && -1 !== $match$$27_prev$$4$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$27_prev$$4$$, $match$$27_prev$$4$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$667$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$27_prev$$4$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$73$$(this).children("a").text());
          })), $match$$27_prev$$4$$.length ? (this.$_focus$($event$$667$$, $match$$27_prev$$4$$), 1 < $match$$27_prev$$4$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$667$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$668$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$668$$) : this.$_select$($event$$668$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$165$$ = this.element;
      if ($element$$165$$.is(":visible")) {
        var $position$$50$$ = $element$$165$$.data("oj-menu-position");
        $position$$50$$ && $element$$165$$.position($position$$50$$);
        $element$$165$$.find(".oj-menu").each(function() {
          var $menu$$27$$ = $$$$73$$(this);
          $menu$$27$$.is(":visible") && ($position$$50$$ = $menu$$27$$.data("oj-menu-position")) && $menu$$27$$.position($position$$50$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$230$$ = this, $submenus$$ = this.element.find(this.options.menuSelector), $menus$$ = $submenus$$.add(this.element), $children$$33$$ = $menus$$.children();
      $children$$33$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$33$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$33$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$127$$ = $$$$73$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$127$$.text()) || $item$$127$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$33$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$33$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      $submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$28$$ = $$$$73$$(this), $item$$128_itemId$$1$$ = $self$$230$$.$_getSubmenuAnchor$($menu$$28$$), $submenuIcon$$ = $$$$73$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$128_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").append($submenuIcon$$);
        $item$$128_itemId$$1$$ = $item$$128_itemId$$1$$.attr("id");
        $menu$$28$$.attr("aria-labelledby", $item$$128_itemId$$1$$);
      });
      $menus$$.each(function() {
        var $menu$$29$$ = $$$$73$$(this), $iconCount$$ = $menu$$29$$.children().children().children(".oj-menu-item-icon").length;
        $menu$$29$$.toggleClass("oj-menu-icons", !!$iconCount$$).toggleClass("oj-menu-text-only", !$iconCount$$);
      });
      this.$active$ && !$$$$73$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_addDividers$:function($menuItem$$2$$) {
      return $menuItem$$2$$.add($menuItem$$2$$.prev(".oj-menu-divider")).add($menuItem$$2$$.next(".oj-menu-divider"));
    }, $_focus$:function($event$$669$$, $item$$129$$) {
      $event$$669$$ && "focus" === $event$$669$$.type || clearTimeout(this.$timer$);
      $item$$129$$ = $item$$129$$.first();
      this.$_makeActive$($item$$129$$, $event$$669$$);
      var $nested$$1_parentMenuItem$$ = $item$$129$$.parent().closest(".oj-menu-item");
      this.$_addDividers$($nested$$1_parentMenuItem$$).addClass("oj-focus-ancestor");
      $event$$669$$ && "keydown" === $event$$669$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      $nested$$1_parentMenuItem$$ = $item$$129$$.children(".oj-menu");
      $nested$$1_parentMenuItem$$.length && $event$$669$$ && /^mouse/.test($event$$669$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$1_parentMenuItem$$);
      this.$activeMenu$ = $item$$129$$.parent();
    }, $_makeActive$:function($item$$130$$, $event$$670$$) {
      if (!$item$$130$$.is(this.$active$)) {
        var $previousItem$$2$$ = this.$active$ ? this.$active$ : $$$$73$$(), $anchor$$8$$ = $item$$130$$.children("a");
        this.$active$ = $item$$130$$;
        this.element.attr("aria-activedescendant", $anchor$$8$$.attr("id"));
        this.$_addDividers$($previousItem$$2$$).removeClass("oj-focus");
        this.$_addDividers$($item$$130$$).addClass("oj-focus");
        this._trigger("_activeItem", $event$$670$$, {previousItem:$previousItem$$2$$, item:$item$$130$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$671$$) {
      if (this.$active$) {
        var $previousItem$$3$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        this.$_addDividers$($previousItem$$3$$).removeClass("oj-focus");
        this._trigger("_activeItem", $event$$671$$, {previousItem:$previousItem$$3$$, item:$$$$73$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$672$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$672$$);
    }, $_focusLauncherAndDismiss$:function($event$$673$$, $selectUi$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$673$$, $selectUi$$);
    }, $__dismiss$:function($event$$674$$, $selectUi$$1$$) {
      var $isOpen$$2$$ = this.element.is(":visible"), $psOptions$$8$$ = {};
      $psOptions$$8$$[$oj$$80$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$80$$.$PopupService$.$getInstance$().close($psOptions$$8$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      $selectUi$$1$$ && ($event$$674$$ = this.$_trigger2$("select", $event$$674$$, $selectUi$$1$$).event);
      $isOpen$$2$$ && this._trigger("close", $event$$674$$, {});
      this.$_currentOpenOptions$ = null;
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, getCurrentOpenOptions:function() {
      return $$$$73$$.extend(!0, {}, this.$_currentOpenOptions$ || this.options.openOptions);
    }, open:function($event$$675$$, $initialFocus$$2_openOptions$$7$$, $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$) {
      $initialFocus$$2_openOptions$$7$$ = $$$$73$$.extend({}, this.options.openOptions, $initialFocus$$2_openOptions$$7$$);
      $initialFocus$$2_openOptions$$7$$.position = $$$$73$$.extend({}, $initialFocus$$2_openOptions$$7$$.position);
      $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = $$$$73$$.extend({}, this.options.submenuOpenOptions, $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
      var $launcher$$25_oldOpenOptions$$ = this.$_currentOpenOptions$;
      this.$_currentOpenOptions$ = $initialFocus$$2_openOptions$$7$$;
      $oj$$80$$.$PositionUtils$.$_normalizeEventForPosition$($event$$675$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      var $beforeOpenResults_position$$51$$ = !this.$_trigger2$("beforeOpen", $event$$675$$, {openOptions:$initialFocus$$2_openOptions$$7$$});
      if ($beforeOpenResults_position$$51$$.proceed) {
        this.$_currentOpenOptions$ = $launcher$$25_oldOpenOptions$$;
      } else {
        if (this.element.is(":visible") && (this.$_currentOpenOptions$ = $launcher$$25_oldOpenOptions$$, this.$__dismiss$($beforeOpenResults_position$$51$$.event), this.$_currentOpenOptions$ = $initialFocus$$2_openOptions$$7$$), $launcher$$25_oldOpenOptions$$ = $initialFocus$$2_openOptions$$7$$.launcher, ($launcher$$25_oldOpenOptions$$ = "string" === $$$$73$$.type($launcher$$25_oldOpenOptions$$) ? $$$$73$$($launcher$$25_oldOpenOptions$$) : $launcher$$25_oldOpenOptions$$) && $launcher$$25_oldOpenOptions$$.length) {
          if ($beforeOpenResults_position$$51$$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus$$2_openOptions$$7$$.position, this.$isRtl$), $beforeOpenResults_position$$51$$.of = $oj$$80$$.$PositionUtils$.$normalizePositionOf$($beforeOpenResults_position$$51$$.of, $launcher$$25_oldOpenOptions$$, $event$$675$$), null == $beforeOpenResults_position$$51$$.of) {
            $oj$$80$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call."), this.$_currentOpenOptions$ = null;
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$73$$.each($openPopupMenus$$1$$, function($index$$301$$, $menu$$30$$) {
              $menu$$30$$.element[0] !== $currentMenu$$ && ($menu$$30$$.$_collapse$($event$$675$$, "eventSubtree"), $menu$$30$$.$_launcher$ && $menu$$30$$.$__dismiss$($event$$675$$));
            });
            this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$.position, this.$isRtl$);
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = this.$_usingCallback$;
            $$$$73$$.isFunction($beforeOpenResults_position$$51$$.using) && $beforeOpenResults_position$$51$$.using !== $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ && ($beforeOpenResults_position$$51$$.origUsing = $beforeOpenResults_position$$51$$.using);
            $beforeOpenResults_position$$51$$.using = $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = {};
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$25_oldOpenOptions$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$POSITION$] = $beforeOpenResults_position$$51$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$80$$.$PopupService$.$getInstance$().open($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
            this.element.data("oj-menu-position", $beforeOpenResults_position$$51$$);
            $initialFocus$$2_openOptions$$7$$ = $initialFocus$$2_openOptions$$7$$.initialFocus;
            (($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = "firstItem" === $initialFocus$$2_openOptions$$7$$) || "menu" === $initialFocus$$2_openOptions$$7$$) && this.element.focus();
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ ? this.$_focus$($event$$675$$, this.element.children().first()) : this.$_blur$($event$$675$$);
            this.$_launcher$ = $launcher$$25_oldOpenOptions$$;
            $_openPopupMenus$$.push(this);
            this._trigger("open", $event$$675$$, {});
          }
        } else {
          $oj$$80$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."), this.$_currentOpenOptions$ = null;
        }
      }
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$52$$ = $$$$73$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$52$$).data("oj-menu-position", $position$$52$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$676$$, $all$$1$$, $delay$$3$$) {
      function $collapseMenu$$() {
        delete $self$$231$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$231$$.element : $$$$73$$($event$$676$$ && $event$$676$$.target).closest($self$$231$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$231$$.element);
        $self$$231$$.$_close$($currentMenu$$1$$);
        $self$$231$$.$_blur$($event$$676$$);
        $self$$231$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$231$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$677$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$677$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$677$$, "all" === $which$$, this.delay) : $oj$$80$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$678$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$678$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$679$$) {
      this.$_move$("next", "first", $event$$679$$);
    }, $_previous$:function($event$$680$$) {
      this.$_move$("prev", "last", $event$$680$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$14$$, $filter$$5$$, $event$$681$$) {
      var $next$$10$$;
      this.$active$ && ($next$$10$$ = "first" === $direction$$14$$ || "last" === $direction$$14$$ ? this.$active$["first" === $direction$$14$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$14$$ + "All"](".oj-menu-item").eq(0));
      $next$$10$$ && $next$$10$$.length && this.$active$ || ($next$$10$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$681$$, $next$$10$$);
    }, $_select$:function($event$$682$$) {
      if (!this.$active$ && $event$$682$$ && $event$$682$$.target) {
        var $menuItem$$3_ui$$48$$ = $$$$73$$($event$$682$$.target).closest(".oj-menu-item");
        $menuItem$$3_ui$$48$$.closest(this.element).length && this.$_makeActive$($menuItem$$3_ui$$48$$, $event$$682$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$80$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$3_ui$$48$$ = {item:this.$active$}, this.$__collapseAll$($event$$682$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$682$$, $menuItem$$3_ui$$48$$)) : $oj$$80$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$17$$ = this.$_popupServiceEvents$ = {};
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$73$$.proxy(this.$_closeAll$, this);
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$73$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$73$$.proxy(this.refresh, this);
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$73$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$19$$, $props$$33$$) {
      var $origUsing$$1_position$$53_rootMenu$$ = $props$$33$$.element.element;
      $origUsing$$1_position$$53_rootMenu$$.css($pos$$19$$);
      ($origUsing$$1_position$$53_rootMenu$$ = $origUsing$$1_position$$53_rootMenu$$.data("oj-menu-position")) && ($origUsing$$1_position$$53_rootMenu$$ = $origUsing$$1_position$$53_rootMenu$$.origUsing) && $origUsing$$1_position$$53_rootMenu$$($pos$$19$$, $props$$33$$);
      $oj$$80$$.$PositionUtils$.$isAligningPositionClipped$($props$$33$$) && (this.$_closeDelayTimer$ = this._delay($$$$73$$.proxy(this.$_closeAll$, this), 1));
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1;
  })();
});
