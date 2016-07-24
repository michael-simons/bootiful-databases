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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt", "ojs/ojmenu", "jqueryui-amd/sortable", "ojs/ojtouchproxy"], function($oj$$53$$, $$$$48$$) {
  (function() {
    var $_arMenuCmdMap$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter", remove:"ojtabsremove"}, $_arMenuKeyMap$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter", remove:"labelRemove"};
    $oj$$53$$.$__registerWidget$("oj.ojTabs", $$$$48$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabledTabs:null, truncation:"auto", selectOn:"click", orientation:"horizontal", edge:"top", removable:!1, reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, beforeReorder:null, reorder:null, optionChange:null}, _ComponentCreate:function() {
      var $options$$321_selectedIndex$$2$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_initialRender$ = !0;
      this.$_setupEdge$($options$$321_selectedIndex$$2$$.edge);
      this.$_isOldMarkup$ = 0 == this.element.children("ul").length;
      this.$_createTabbarFromOldMarkup$();
      this.$_processTabs$();
      this.$_menu$ = {};
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_refresh$();
      $options$$321_selectedIndex$$2$$ = this.$_getIndexByTabOrContentId$($options$$321_selectedIndex$$2$$.selected);
      void 0 === $options$$321_selectedIndex$$2$$ && ($options$$321_selectedIndex$$2$$ = 0);
      this.$_fireSelectEvents$($options$$321_selectedIndex$$2$$);
      this.$_initialRender$ = void 0;
    }, $_fireSelectEvents$:function($selectedIndex$$3$$, $flags$$43$$) {
      this.$_isTabDisabled$($selectedIndex$$3$$) && ($selectedIndex$$3$$ = this.$_getNextEnabledTab$($selectedIndex$$3$$));
      this.$_activate$(void 0 === $selectedIndex$$3$$ ? void 0 : $$$$48$$(this.$tabs$[$selectedIndex$$3$$]), $flags$$43$$);
    }, $_NotifyContextMenuGesture$:function($menu$$15_openOptions$$5$$, $event$$517$$, $eventType$$45$$) {
      if (this.$_isInATab$($event$$517$$.target) && (!this.$_touchProxy$ || !this.$_touchProxy$.$_touchMoved$)) {
        var $disabledState_keyboard$$ = "keyboard" === $eventType$$45$$;
        if ("contextmenu" == $event$$517$$.type || $disabledState_keyboard$$ || "touch" == $eventType$$45$$) {
          var $tab$$ = $$$$48$$($event$$517$$.target).closest("li");
          $menu$$15_openOptions$$5$$ = {launcher:$tab$$};
          this.$_menu$.tab = $disabledState_keyboard$$ ? this.$active$ : $menu$$15_openOptions$$5$$.launcher;
          if (this.$_menu$.tab) {
            if (this.$_menu$.$$elemRemove$) {
              if ($tab$$.hasClass("oj-disabled") && 1 == this.$_menu$.$$container$.children().length) {
                $event$$517$$.preventDefault();
                return;
              }
              $tab$$.hasClass("oj-disabled") ? this.$_menu$.$$elemRemove$.addClass("oj-disabled") : this.$_menu$.$$elemRemove$.removeClass("oj-disabled");
            }
            if (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$) {
              $disabledState_keyboard$$ = !this.$_menu$.$cutTab$, this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState_keyboard$$ && ($disabledState_keyboard$$ ? (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), this.$_menu$.$$container$.ojMenu("refresh"));
            }
            this.$_OpenContextMenu$($event$$517$$, $eventType$$45$$, $menu$$15_openOptions$$5$$);
          } else {
            $event$$517$$.preventDefault();
          }
        }
      }
    }, $_tabKeydown$:function($event$$518$$) {
      if (!this.$_handlePageNav$($event$$518$$)) {
        var $anchor$$2_focusedTab$$ = $$$$48$$(this.document[0].activeElement).closest("li"), $enabledTabs$$ = this.$_getEnabledTabs$(), $selectedIndex$$4$$ = $enabledTabs$$.index($anchor$$2_focusedTab$$), $length$$18$$ = $enabledTabs$$.length;
        switch($event$$518$$.keyCode) {
          case $$$$48$$.ui.keyCode.RIGHT:
          ;
          case $$$$48$$.ui.keyCode.DOWN:
            $selectedIndex$$4$$ = ($selectedIndex$$4$$ + 1) % $length$$18$$;
            break;
          case $$$$48$$.ui.keyCode.UP:
          ;
          case $$$$48$$.ui.keyCode.LEFT:
            $selectedIndex$$4$$ = ((0 == $selectedIndex$$4$$ ? $length$$18$$ : $selectedIndex$$4$$) - 1) % $length$$18$$;
            break;
          case $$$$48$$.ui.keyCode.END:
            $selectedIndex$$4$$ = $length$$18$$ - 1;
            break;
          case $$$$48$$.ui.keyCode.HOME:
            $selectedIndex$$4$$ = 0;
            break;
          case 46:
            this.options.removable && ($anchor$$2_focusedTab$$ = this.$_getCloseIcons$(this.$active$)) && ($event$$518$$.preventDefault(), this.$_removeTabHandler$({target:$anchor$$2_focusedTab$$, currentTarget:$anchor$$2_focusedTab$$, preventDefault:$$$$48$$.noop}, $event$$518$$));
            return;
          default:
            return;
        }
        $event$$518$$.preventDefault();
        clearTimeout(this.$activating$);
        var $selTab$$ = $$$$48$$($enabledTabs$$[$selectedIndex$$4$$]);
        $selTab$$.focus();
        if (!$event$$518$$.ctrlKey) {
          $anchor$$2_focusedTab$$.attr("aria-selected", "false");
          $selTab$$.attr("aria-selected", "true");
          this.$_getTabIdOrIndex$($selTab$$);
          var $self$$167$$ = this;
          this.$activating$ = this._delay(function() {
            $self$$167$$ && $self$$167$$.$tabs$ && $self$$167$$.$_activate$($selTab$$, $event$$518$$);
          }, this.delay);
        }
      }
    }, $_panelKeydown$:function($event$$519$$) {
      $$$$48$$($event$$519$$.target).closest(".oj-tabs-selected").attr("id") === this.element.children(".oj-tabs-selected").attr("id") && !this.$_handlePageNav$($event$$519$$) && $event$$519$$.ctrlKey && $event$$519$$.keyCode === $$$$48$$.ui.keyCode.UP && ($event$$519$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$520$$) {
      var $selectedIndex$$5$$ = this.$_getSelectedIndex$();
      if ($event$$520$$.ctrlKey && $event$$520$$.keyCode === $$$$48$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$5$$, !1)), !0;
      }
      if ($event$$520$$.ctrlKey && $event$$520$$.keyCode === $$$$48$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$5$$, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$224$$) {
      return 0 <= $index$$224$$ && $index$$224$$ < this.$tabs$.length ? $$$$48$$(this.$tabs$[$index$$224$$]).hasClass("oj-disabled") : !1;
    }, $_focusNextTab$:function($index$$225$$, $goingForward$$) {
      var $enabledTabs$$1_selTab$$1$$ = this.$_getEnabledTabs$(), $currentIndex$$3$$ = $enabledTabs$$1_selTab$$1$$.index(this.$tabs$[$index$$225$$]), $length$$19$$ = $enabledTabs$$1_selTab$$1$$.length, $enabledTabs$$1_selTab$$1$$ = $$$$48$$($enabledTabs$$1_selTab$$1$$[$goingForward$$ ? ($currentIndex$$3$$ + 1) % $length$$19$$ : ((0 == $currentIndex$$3$$ ? $length$$19$$ : $currentIndex$$3$$) - 1) % $length$$19$$]);
      $enabledTabs$$1_selTab$$1$$.focus();
      return $enabledTabs$$1_selTab$$1$$;
    }, $_getNextEnabledTab$:function($index$$226$$) {
      for (var $next$$8$$ = $index$$226$$ + 1, $lastTabIndex$$ = this.$tabs$.length - 1;$next$$8$$ <= $lastTabIndex$$;) {
        if (!this.$_isTabDisabled$($next$$8$$)) {
          return $next$$8$$;
        }
        $next$$8$$++;
      }
      for ($next$$8$$ = $index$$226$$ - 1;0 <= $next$$8$$;) {
        if (!this.$_isTabDisabled$($next$$8$$)) {
          return $next$$8$$;
        }
        $next$$8$$--;
      }
    }, $_isHorizontal$:function() {
      return "top" == this.options.edge || "bottom" == this.options.edge;
    }, _setOption:function($edge$$13_key$$155_selectedIndex$$6$$, $value$$287$$, $flags$$44$$) {
      "selected" === $edge$$13_key$$155_selectedIndex$$6$$ ? ($value$$287$$ = this.$_getTab$($value$$287$$), void 0 !== $value$$287$$ && this.$_activate$($value$$287$$)) : "disabledTabs" === $edge$$13_key$$155_selectedIndex$$6$$ ? Array.isArray($value$$287$$) && (this.$_setOjDisabledOnTab$($value$$287$$), $edge$$13_key$$155_selectedIndex$$6$$ = this.$_getSelectedIndex$(), this.$_isTabDisabled$($edge$$13_key$$155_selectedIndex$$6$$) && this.$_fireSelectEvents$($edge$$13_key$$155_selectedIndex$$6$$), 
      this.refresh()) : "removable" === $edge$$13_key$$155_selectedIndex$$6$$ || "truncation" === $edge$$13_key$$155_selectedIndex$$6$$ ? $value$$287$$ != this.options[$edge$$13_key$$155_selectedIndex$$6$$] && (this._super($edge$$13_key$$155_selectedIndex$$6$$, $value$$287$$, $flags$$44$$), this.refresh()) : "reorderable" === $edge$$13_key$$155_selectedIndex$$6$$ ? $value$$287$$ !== this.options.reorderable && (this._super($edge$$13_key$$155_selectedIndex$$6$$, $value$$287$$, $flags$$44$$), this.refresh()) : 
      "orientation" === $edge$$13_key$$155_selectedIndex$$6$$ ? this.$_edgeSpecified$ || ($edge$$13_key$$155_selectedIndex$$6$$ = this.$_orientationToEdge$($value$$287$$)) && this.$_setupEdge$($edge$$13_key$$155_selectedIndex$$6$$) && this.refresh() : "edge" === $edge$$13_key$$155_selectedIndex$$6$$ ? this.$_setupEdge$($value$$287$$) && (this.$_edgeSpecified$ = !0, this._super($edge$$13_key$$155_selectedIndex$$6$$, $value$$287$$, $flags$$44$$), this.refresh()) : "selectOn" === $edge$$13_key$$155_selectedIndex$$6$$ ? 
      (this.$_tearDownEvents$(!0), this._super($edge$$13_key$$155_selectedIndex$$6$$, $value$$287$$, $flags$$44$$), this.$_setupEvents$()) : ("contextMenu" === $edge$$13_key$$155_selectedIndex$$6$$ && (this.$_clearMenu$(), $value$$287$$ && this.$_initMenu$($value$$287$$)), this._super($edge$$13_key$$155_selectedIndex$$6$$, $value$$287$$, $flags$$44$$), "translations" === $edge$$13_key$$155_selectedIndex$$6$$ && $flags$$44$$ && "removeCueText" === $flags$$44$$.subkey && this.$tablist$ && this.$_getCloseIcons$(this.$tablist$).attr("aria-label", 
      $value$$287$$ ? $value$$287$$.removeCueText : ""));
    }, refresh:function() {
      this._super();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $selectedPanel$$ = this.element.children(".oj-tabs-selected");
      this.$active$ = $selectedPanel$$.length ? this.$tablist$.children(".oj-selected") : $$$$48$$();
      this.$_createCloseIcons$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), $selectedPanel$$.show().attr("aria-expanded", "true").removeAttr("aria-hidden")) : $$$$48$$(this.$tabs$[0]).attr("tabIndex", "0");
      this.$_isHorizontal$() && (0 < this.$tabs$.length ? (this.$_truncateBeforeOverflow$(), this.$_addConveyor$()) : this.$_getTabbarWrapper$(), this.$_addFacets$());
      void 0 === this.options.selected || 0 == this.$_getSelectedIndex$() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected");
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      var $cparent_tabsId$$ = this.$tablist$.uniqueId().attr("id");
      this.$conveyor$ = this.$_getTabbarWrapper$().parent().ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $cparent_tabsId$$});
      $cparent_tabsId$$ = this.$conveyor$.parent();
      if ($cparent_tabsId$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
        var $flex$$ = "0 1 " + this.$_getConveyorWrapperMaxWidth$() + "px";
        $cparent_tabsId$$.css("flex", $flex$$);
        $cparent_tabsId$$.css("-webkit-flex", $flex$$);
        $cparent_tabsId$$.css("-ms-flex", $flex$$);
      }
    }, $_processTabs$:function() {
      var $self$$168$$ = this, $edge$$14$$ = this.options.edge;
      this.$_destroyTabBar$();
      this.$_createTabbar$();
      this.$tablist$ = this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist");
      var $tabbarIndex$$ = this.$tablist$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$ = $$$$48$$(this);
        $facet$$.index() < $tabbarIndex$$ ? $facet$$.addClass("oj-start") : $facet$$.removeClass("oj-start");
      });
      var $tabContents$$ = this.element.children(".oj-tabs-panel");
      "start" == $edge$$14$$ || "top" == $edge$$14$$ ? $$$$48$$($tabContents$$[0]).before(this.$tablist$) : $$$$48$$($tabContents$$[$tabContents$$.length - 1]).after(this.$tablist$);
      this.$tabs$ = $$$$48$$();
      this.$panels$ = $$$$48$$();
      this.$tablist$.children("li").each(function() {
        var $tab$$1$$ = $$$$48$$(this).addClass("oj-tabs-tab").attr({role:"tab", tabIndex:"-1"}).removeAttr("aria-hidden"), $anchor$$3_anchorId_div$$3$$ = $tab$$1$$.children();
        $anchor$$3_anchorId_div$$3$$.addClass("oj-tabs-tab-content");
        $anchor$$3_anchorId_div$$3$$ = $anchor$$3_anchorId_div$$3$$.children();
        $anchor$$3_anchorId_div$$3$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $anchor$$3_anchorId_div$$3$$.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$168$$.$tabs$ = $self$$168$$.$tabs$.add($tab$$1$$);
        var $anchor$$3_anchorId_div$$3$$ = $anchor$$3_anchorId_div$$3$$.uniqueId().attr("id"), $panelId$$ = $tab$$1$$.attr("data-content"), $panel$$2$$ = $self$$168$$.element.find($self$$168$$.$_sanitizeSelector$("#" + $panelId$$));
        $tab$$1$$.attr({"aria-controls":$panelId$$, "aria-labelledby":$anchor$$3_anchorId_div$$3$$});
        $self$$168$$.$panels$ = $self$$168$$.$panels$.add($panel$$2$$);
        $panel$$2$$.attr("aria-labelledby", $anchor$$3_anchorId_div$$3$$).attr("role", "tabpanel");
      });
      "start" != $edge$$14$$ && "end" != $edge$$14$$ || $self$$168$$.$tablist$.addClass("oj-tabs-nav-root");
      this.$_initialRender$ && this.$_setOjDisabledOnTab$(this.options.disabledTabs);
    }, $_setupEvents$:function() {
      var $events$$13$$ = {keydown:this.$_tabKeydown$}, $enabledTabs$$2_event$$521$$ = this.options.selectOn, $selectOnClick$$ = !1;
      if ($enabledTabs$$2_event$$521$$) {
        var $self$$169$$ = this;
        $$$$48$$.each($enabledTabs$$2_event$$521$$.split(" "), function($index$$228$$, $eventName$$2$$) {
          "click" == $eventName$$2$$ && ($selectOnClick$$ = !0);
          $oj$$53$$.$DomUtils$.$isValidIdentifier$($eventName$$2$$) && ($events$$13$$[$eventName$$2$$] = $self$$169$$.$_eventHandler$);
        });
      }
      $enabledTabs$$2_event$$521$$ = this.$_getEnabledTabs$();
      this._on($enabledTabs$$2_event$$521$$, $events$$13$$);
      $selectOnClick$$ || this._on($enabledTabs$$2_event$$521$$, {click:function($e$$99$$) {
        $e$$99$$.preventDefault();
      }});
      this.$panels$.on("keydown" + this.eventNamespace, this.$_panelKeydown$.bind(this));
      if (this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on(this.$_getCloseIcons$($enabledTabs$$2_event$$521$$), $revents$$);
      }
      this._focusable($enabledTabs$$2_event$$521$$);
      this._hoverable($enabledTabs$$2_event$$521$$);
      this.$_activeable$($enabledTabs$$2_event$$521$$);
    }, $_tearDownEvents$:function($noCloseIcon$$) {
      var $enabledTabs$$3$$ = this.$_getEnabledTabs$();
      $noCloseIcon$$ || this.$_UnregisterChildNode$(this.$_getCloseIcons$($enabledTabs$$3$$));
      this.$_UnregisterChildNode$($enabledTabs$$3$$);
      this.$panels$ && this.$panels$.off("keydown" + this.eventNamespace);
    }, $_eventHandler$:function($event$$522$$, $flags$$45$$) {
      var $active$$2_eventData$$11$$ = this.$active$, $tab$$2$$ = $$$$48$$($event$$522$$.currentTarget).closest("li"), $clickedIsActive$$ = $active$$2_eventData$$11$$ && $tab$$2$$[0] === $active$$2_eventData$$11$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$2$$), $oFromContent$$ = $active$$2_eventData$$11$$ && $active$$2_eventData$$11$$.length ? this.$_getPanelForTab$($active$$2_eventData$$11$$) : $$$$48$$(), $active$$2_eventData$$11$$ = {fromTab:$active$$2_eventData$$11$$, fromContent:$oFromContent$$, 
      toTab:$tab$$2$$, toContent:$oToContent$$};
      $event$$522$$.preventDefault();
      var $oEvent$$ = $flags$$45$$ ? $flags$$45$$ : $event$$522$$;
      $tab$$2$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || $oFromContent$$ && $oFromContent$$.length && !1 === this._trigger("beforeDeselect", $oEvent$$, $active$$2_eventData$$11$$) || !this.$_initialRender$ && !1 === this._trigger("beforeSelect", $oEvent$$, $active$$2_eventData$$11$$) || (this.$_initialRender$ ? this.options.selected = this.$_getTabIdOrIndex$($tab$$2$$) : this.option("selected", this.$_getTabIdOrIndex$($tab$$2$$), {_context:{originalEvent:$oEvent$$, $internalSet$:!0}}), 
      this.$active$ = $tab$$2$$, $oToContent$$.addClass("oj-tabs-selected"), $oFromContent$$ && $oFromContent$$.length && $oFromContent$$.removeClass("oj-tabs-selected"), this.$_toggle$($oEvent$$, $active$$2_eventData$$11$$));
    }, $_toggle$:function($event$$523$$, $eventData$$12$$) {
      var $toTab$$ = $eventData$$12$$.toTab.closest("li"), $toShow$$ = $eventData$$12$$.toContent, $toHide$$ = $eventData$$12$$.fromContent;
      this.$running$ = !0;
      var $fromTab$$ = $eventData$$12$$.fromTab.closest("li").removeClass("oj-selected");
      $toHide$$.hide();
      0 < $toHide$$.length && $oj$$53$$.Components.$subtreeHidden$($toHide$$[0]);
      $toTab$$.addClass("oj-selected");
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (0 == $toTab$$.index() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected"));
      $toShow$$.show();
      0 < $toShow$$.length && $oj$$53$$.Components.$subtreeShown$($toShow$$[0]);
      this.$running$ = !1;
      this.$_initialRender$ || (this._trigger("deselect", $event$$523$$, $eventData$$12$$), this._trigger("select", $event$$523$$, $eventData$$12$$));
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$48$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr("aria-expanded", "true").removeAttr("aria-hidden");
      $toTab$$.attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$3$$, $flags$$46$$) {
      if (void 0 !== $active$$3$$) {
        var $anchor$$4$$;
        this.$active$ && $active$$3$$[0] === this.$active$[0] || ($anchor$$4$$ = $active$$3$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$4$$, currentTarget:$anchor$$4$$, preventDefault:$$$$48$$.noop}, $flags$$46$$));
      }
    }, $_createCloseIcons$:function() {
      if (this.options.removable && this.$_isHorizontal$()) {
        var $removeCueText$$ = this.$getTranslatedString$("removeCueText");
        this.$_getEnabledTabs$().each(function($index$$229_rmId$$) {
          var $div$$4$$ = $$$$48$$(this).find("\x3e :first-child");
          $div$$4$$.addClass("oj-removable");
          $index$$229_rmId$$ = "ojtabs-id_rm_" + $index$$229_rmId$$;
          $$$$48$$(this).attr("aria-describedby", $index$$229_rmId$$);
          $$$$48$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:$index$$229_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$4$$);
        });
      }
    }, $_getEnabledTabs$:function() {
      return $$$$48$$(this.$tabs$.not(".oj-disabled"));
    }, $_getCloseIcons$:function($elem$$77$$) {
      return $elem$$77$$.find(".oj-tabs-close-icon");
    }, $_destroyTabBar$:function() {
      this.$tabs$ && this.$_tearDownEvents$();
      this.$_hasResizeListener$ && ($oj$$53$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$_sortable$ && ($oj$$53$$.$DomUtils$.$isTouchSupported$() && this.$_tearDownTouchReorder$(), this.$tablist$.sortable("destroy"), this.$_sortable$ = void 0);
      var $navRoot$$ = this.element.children(".oj-tabs-nav-root"), $navRootNotUL$$ = !$navRoot$$.hasClass("oj-tabs-nav");
      if (this.$tabs$ && (this.$_getCloseIcons$(this.$tabs$).remove(), $navRoot$$.length)) {
        var $afterMe$$ = $navRoot$$, $noFacet$$ = !0, $tabbar$$ = this.$tablist$;
        $navRoot$$.children().each(function() {
          var $child$$10$$ = $$$$48$$(this);
          if ($child$$10$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
            $child$$10$$ = $tabbar$$;
          } else {
            if (!$child$$10$$.hasClass("oj-tabs-facet")) {
              return;
            }
          }
          $noFacet$$ = !1;
          $afterMe$$.after($child$$10$$);
          $afterMe$$ = $child$$10$$;
        });
        $noFacet$$ && $navRootNotUL$$ && $navRoot$$.after($tabbar$$);
      }
      this.$conveyor$ && (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null);
      $navRootNotUL$$ && $navRoot$$.remove();
      this.$tablist$ = this.$tabs$ = null;
    }, _destroy:function() {
      this.$_clearMenu$();
      this.$_isHorizontal$() ? this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected") : this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
      var $self$$171$$ = this, $tab$$3$$, $div$$5$$, $anchor$$5$$, $header$$13$$;
      this.$tabs$.each(function($index$$230$$) {
        $tab$$3$$ = $$$$48$$(this);
        $tab$$3$$.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display", "");
        $div$$5$$ = $tab$$3$$.children("div").removeClass("oj-tabs-tab-content");
        $anchor$$5$$ = $div$$5$$.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
        $header$$13$$ = $anchor$$5$$.children();
        $header$$13$$.removeClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$171$$.$_isOldMarkup$ ? $header$$13$$.prependTo($self$$171$$.$panels$.get($index$$230$$)) : $div$$5$$.hasClass("oj-tabs-gen-div") && $anchor$$5$$.hasClass("oj-tabs-gen-a") ? ($header$$13$$.prependTo($tab$$3$$), $div$$5$$.remove()) : $anchor$$5$$.hasClass("oj-tabs-gen-a") ? ($header$$13$$.prependTo($div$$5$$), $anchor$$5$$.remove()) : $div$$5$$.hasClass("oj-tabs-gen-div") && ($anchor$$5$$.prependTo($tab$$3$$), $div$$5$$.remove());
      });
      var $tabbar$$1$$ = this.$tablist$;
      this.$_destroyTabBar$();
      $tabbar$$1$$.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
      this.$_isOldMarkup$ && $tabbar$$1$$.remove();
      this.$panels$.each(function() {
        $$$$48$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display", "");
      });
      this.element.children(".oj-tabs-facet").removeClass("oj-start");
    }, $_removeTabHandler$:function($event$$524$$, $flags$$47$$) {
      var $tab$$4$$ = $$$$48$$($event$$524$$.currentTarget).closest("li"), $panel$$4$$ = this.$_getPanelForTab$($tab$$4$$), $eventData$$13$$ = {tab:$tab$$4$$, content:$panel$$4$$}, $oEvent$$1$$ = $flags$$47$$ ? $flags$$47$$ : $event$$524$$;
      if ($tab$$4$$ && !1 !== this._trigger("beforeRemove", $oEvent$$1$$, $eventData$$13$$)) {
        $event$$524$$.preventDefault();
        if ($tab$$4$$.hasClass("oj-selected")) {
          var $nextIndex$$ = this.$_getNextEnabledTab$(this.$tabs$.index($tab$$4$$));
          void 0 === $nextIndex$$ ? (this.$active$ = void 0, this.option("selected", void 0, {_context:{originalEvent:$oEvent$$1$$, $internalSet$:!0}})) : (this.$_fireSelectEvents$($nextIndex$$, $oEvent$$1$$), this.option("selected", this.$_getTabIdOrIndex$($$$$48$$(this.$tabs$[$nextIndex$$])), {_context:{originalEvent:$oEvent$$1$$, $internalSet$:!0}}));
        }
        this.$_tearDownEvents$();
        this.$tabs$ = this.$tabs$.not($tab$$4$$);
        $tab$$4$$.remove();
        $panel$$4$$.remove();
        this.$_updateDisabledTabs$();
        this.refresh();
        this._trigger("remove", $oEvent$$1$$, $eventData$$13$$);
      }
    }, $_wrapLi$:function($header$$14$$, $contentId$$1$$) {
      var $tab$$5$$;
      if ("li" == $header$$14$$.prop("tagName").toLowerCase()) {
        $tab$$5$$ = $header$$14$$;
        var $anchor$$6_div$$6$$ = $tab$$5$$.children("div");
        1 == $anchor$$6_div$$6$$.length && $anchor$$6_div$$6$$.hasClass("oj-tabs-tab-content") ? ($anchor$$6_div$$6$$ = $anchor$$6_div$$6$$.children("a"), 1 != $anchor$$6_div$$6$$.length && ($tab$$5$$.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"), $anchor$$6_div$$6$$.addClass("oj-tabs-gen-a"))) : ($anchor$$6_div$$6$$ = $tab$$5$$.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(), $anchor$$6_div$$6$$.addClass("oj-tabs-gen-div oj-tabs-tab-content"), $anchor$$6_div$$6$$.children().addClass("oj-tabs-gen-a"));
      } else {
        $tab$$5$$ = $header$$14$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(), $tab$$5$$.addClass("oj-tabs-gen-li"), $tab$$5$$.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");
      }
      $contentId$$1$$ && $tab$$5$$.attr("data-content", $contentId$$1$$);
      return $tab$$5$$;
    }, addTab:function($contentAfter_navRoot$$1_newTab_tabbar$$2$$) {
      var $tab$$6$$, $content$$36$$, $index$$232_tabAfter$$ = -1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content ? ($content$$36$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content, $tab$$6$$ = this.$_wrapLi$($contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab, this.$_getUniqueId$($content$$36$$)), void 0 !== $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index && ($index$$232_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index)) : ($content$$36$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$, 
      $tab$$6$$ = this.$_wrapLi$($$$$48$$($contentAfter_navRoot$$1_newTab_tabbar$$2$$).find("\x3e :first-child"), this.$_getUniqueId$($content$$36$$)));
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children(".oj-tabs-nav-root");
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.hasClass("oj-tabs-nav") ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$ : $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      var $isNew$$6$$ = !1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length || ($contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $$$$48$$("\x3cul\x3e"), $isNew$$6$$ = !0);
      $isNew$$6$$ && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.prependTo(this.element);
      0 <= $index$$232_tabAfter$$ && $index$$232_tabAfter$$ < $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children().length ? ($index$$232_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children(":eq(" + $index$$232_tabAfter$$ + ")"), $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children("#" + $index$$232_tabAfter$$.attr("aria-controls")), $index$$232_tabAfter$$.before($tab$$6$$), $contentAfter_navRoot$$1_newTab_tabbar$$2$$.before($content$$36$$)) : ($tab$$6$$.appendTo($contentAfter_navRoot$$1_newTab_tabbar$$2$$), 
      $content$$36$$.appendTo(this.element));
      this.refresh();
      0 == this.$active$.length && this.$_fireSelectEvents$(0);
      var $self$$172$$ = this;
      window.setTimeout(function() {
        $self$$172$$.$tabs$ && $tab$$6$$[0].scrollIntoView(!1);
      }, 0);
    }, $_setupTouchReorder$:function() {
      this.$_touchProxy$ = $oj$$53$$.$_TouchProxy$.$addTouchListeners$(this.$tablist$);
    }, $_tearDownTouchReorder$:function() {
      $oj$$53$$.$_TouchProxy$.$removeTouchListeners$(this.$tablist$);
    }, $_setupReorder$:function() {
      if (this.options.reorderable) {
        var $self$$173$$ = this;
        $oj$$53$$.$DomUtils$.$isTouchSupported$() && this.$_setupTouchReorder$();
        this.$tablist$.sortable({axis:$self$$173$$.$_isHorizontal$() ? "x" : "y", stop:function($event$$525$$, $ui$$38$$) {
          var $mvTab$$ = $ui$$38$$.item;
          $self$$173$$.$_doReorder$($event$$525$$, $mvTab$$, $mvTab$$.prev()) || $self$$173$$.$tablist$.sortable("cancel");
        }});
        this.$_sortable$ = !0;
      } else {
        this.$_tearDownTouchReorder$(), this.$_sortable$ = !1;
      }
    }, $_InitOptions$:function($originalDefaults$$17$$, $constructorOptions$$19$$) {
      var $edge$$15$$ = $constructorOptions$$19$$.edge;
      this.$_edgeSpecified$ = "top" == $edge$$15$$ || "bottom" == $edge$$15$$ || "start" == $edge$$15$$ || "end" == $edge$$15$$;
      this._super($originalDefaults$$17$$, $constructorOptions$$19$$);
    }, $_orientationToEdge$:function($value$$288$$) {
      return "horizontal" == $value$$288$$ ? "top" : "vertical" == $value$$288$$ ? "start" : null;
    }, $_setupEdge$:function($edge$$16$$) {
      if (this.$_initialRender$ && !this.$_edgeSpecified$ || !$edge$$16$$) {
        $edge$$16$$ = this.$_orientationToEdge$(this.options.orientation);
      }
      var $oEdge$$ = this.options.edge;
      this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");
      switch($edge$$16$$) {
        case "top":
        ;
        case "bottom":
          !this.$panels$ || "start" != $oEdge$$ && "end" != $oEdge$$ || this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");
          this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
          "bottom" == $edge$$16$$ ? this.element.addClass("oj-tabs-bottom") : this.element.addClass("oj-tabs-top");
          this.$_initialRender$ ? this.options.orientation = "horizontal" : "horizontal" != this.options.orientation && this.option("orientation", "horizontal", {_context:{$internalSet$:!0}, changed:!0});
          break;
        case "start":
        ;
        case "end":
          !this.$panels$ || "top" != $oEdge$$ && "bottom" != $oEdge$$ || this.element.removeClass("oj-tabs-horizontal");
          this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
          "end" == $edge$$16$$ ? this.element.addClass("oj-tabs-end") : this.element.addClass("oj-tabs-start");
          this.$_initialRender$ ? this.options.orientation = "vertical" : "vertical" != this.options.orientation && this.option("orientation", "vertical", {_context:{$internalSet$:!0}, changed:!0});
          break;
        default:
          return!1;
      }
      this.$_initialRender$ ? this.options.edge = $edge$$16$$ : this.options.edge != $edge$$16$$ && this.option("edge", $edge$$16$$, {_context:{$internalSet$:!0}, changed:!0});
      return!0;
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"), (0 < this.element.children(".oj-tabs-facet").length ? $ulParent$$.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper") : $ulParent$$).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$78$$) {
      0 > $elem$$78$$.id.indexOf("ojtabs-id_") && $$$$48$$($elem$$78$$).attr("id", "ojtabs-id_" + $elem$$78$$.id);
    }, getNodeBySubId:function($index$$233_locator$$55$$) {
      if (null == $index$$233_locator$$55$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$59$$ = $index$$233_locator$$55$$.subId;
      $index$$233_locator$$55$$ = $index$$233_locator$$55$$.index;
      if ("oj-conveyorbelt" != $subId$$59$$ && ("number" !== typeof $index$$233_locator$$55$$ || 0 > $index$$233_locator$$55$$ || $index$$233_locator$$55$$ >= this.$panels$.length)) {
        return null;
      }
      switch($subId$$59$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$_getPanelForTab$(this.$tabs$[$index$$233_locator$$55$$])[0];
        case "oj-tabs-tab":
          return this.$tabs$[$index$$233_locator$$55$$];
        case "oj-tabs-title":
          return $$$$48$$(this.$tabs$[$index$$233_locator$$55$$]).find(".oj-tabs-title")[0];
        case "oj-tabs-close-icon":
        ;
        case "oj-tabs-close":
          return $$$$48$$(this.$tabs$[$index$$233_locator$$55$$]).find(".oj-tabs-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$109$$) {
      for (var $panels_title$$11$$ = [], $i$$366_tabIndex$$5$$ = 0;$i$$366_tabIndex$$5$$ < this.$tabs$.length;$i$$366_tabIndex$$5$$++) {
        $panels_title$$11$$.push(this.$_getPanelForTab$(this.$tabs$[$i$$366_tabIndex$$5$$])[0]);
      }
      for (var $closeIcon_panelIndex$$ = $i$$366_tabIndex$$5$$ = -1, $currentNode$$2$$ = $node$$109$$;$currentNode$$2$$;) {
        if (this.$conveyor$ && $currentNode$$2$$ === this.$conveyor$[0]) {
          return{subId:"oj-conveyorbelt"};
        }
        $i$$366_tabIndex$$5$$ = Array.prototype.indexOf.call(this.$tabs$, $currentNode$$2$$);
        if (-1 != $i$$366_tabIndex$$5$$) {
          break;
        }
        $closeIcon_panelIndex$$ = $panels_title$$11$$.indexOf($currentNode$$2$$);
        if (-1 != $closeIcon_panelIndex$$) {
          return{subId:"oj-tabs-panel", index:$closeIcon_panelIndex$$};
        }
        $currentNode$$2$$ = $currentNode$$2$$.parentElement;
      }
      if (-1 != $i$$366_tabIndex$$5$$) {
        for ($panels_title$$11$$ = this.getNodeBySubId({subId:"oj-tabs-title", index:$i$$366_tabIndex$$5$$}), $closeIcon_panelIndex$$ = this.getNodeBySubId({subId:"oj-tabs-close", index:$i$$366_tabIndex$$5$$}), $currentNode$$2$$ = $node$$109$$;$currentNode$$2$$;) {
          if ($currentNode$$2$$ === $panels_title$$11$$) {
            return{subId:"oj-tabs-title", index:$i$$366_tabIndex$$5$$};
          }
          if ($currentNode$$2$$ === $closeIcon_panelIndex$$) {
            return{subId:"oj-tabs-close", index:$i$$366_tabIndex$$5$$};
          }
          if ($currentNode$$2$$ === this.$tabs$[$i$$366_tabIndex$$5$$]) {
            return{subId:"oj-tabs-tab", index:$i$$366_tabIndex$$5$$};
          }
          $currentNode$$2$$ = $currentNode$$2$$.parentElement;
        }
      }
      return null;
    }, $_getConveyorWrapperMaxWidth$:function() {
      return this.$_originalWidth$ + 10;
    }, $_getTabsWidth$:function() {
      var $tabbar$$3$$ = this.element.find(".oj-tabs-conveyorbelt-wrapper");
      return $tabbar$$3$$.length ? $tabbar$$3$$[0].clientWidth : this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$;
    }, $_applyTabMaxWidth$:function() {
      var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$48$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow");
      });
    }, $_removeTabMaxWidth$:function() {
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$48$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      });
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isProgressive$() && (this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$());
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$53$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isProgressive$() && this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_NotifyShown$:function() {
      this._super();
      this.refresh();
    }, $_NotifyAttached$:function() {
      this._super();
      this.refresh();
    }, $_buildContextMenuItem$:function($cmd$$) {
      return $$$$48$$("\x3ca\x3e").text(this.$getTranslatedString$($_arMenuKeyMap$$[$cmd$$])).attr("href", "#").wrap("\x3cli\x3e").parent().attr("id", $_arMenuCmdMap$$[$cmd$$]).addClass("oj-menu-item");
    }, $_menu_cut$:function($obj$$55$$) {
      if (!$obj$$55$$ || !$obj$$55$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$55$$;
    }, $_menu_paste$:function($event$$526$$, $obj$$56$$, $pasteBefore$$) {
      if (!$obj$$56$$ || !$obj$$56$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($event$$526$$, $mvTab$$1$$, $obj$$56$$, $pasteBefore$$);
    }, $_menu_remove$:function($event$$527$$, $obj$$57$$) {
      if (!$obj$$57$$ || !$obj$$57$$.length) {
        return!1;
      }
      var $anchor$$7$$ = this.$_getCloseIcons$($obj$$57$$);
      this.$_removeTabHandler$({target:$anchor$$7$$, currentTarget:$anchor$$7$$, preventDefault:$$$$48$$.noop}, $event$$527$$);
    }, $_handleContextMenuSelect$:function($ev$$3$$, $ui$$39$$) {
      var $id$$49$$ = $ui$$39$$ ? $ui$$39$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$49$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$49$$ ? this.$_menu_paste$($ev$$3$$, this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$49$$ ? this.$_menu_paste$($ev$$3$$, this.$_menu$.tab, !1) : "ojtabsremove" === $id$$49$$ && this.$_menu_remove$($ev$$3$$, this.$_menu$.tab);
    }, $_initMenu$:function($menu$$16_newVal$$3$$) {
      if ($menu$$16_newVal$$3$$ = $menu$$16_newVal$$3$$ || this.options.contextMenu) {
        var $t$$1$$ = $$$$48$$.type($menu$$16_newVal$$3$$);
        if ("function" == $t$$1$$) {
          try {
            $menu$$16_newVal$$3$$ = $menu$$16_newVal$$3$$();
          } catch ($e$$100$$) {
            $menu$$16_newVal$$3$$ = null;
          }
          $t$$1$$ = $$$$48$$.type($menu$$16_newVal$$3$$);
        }
        "string" == $t$$1$$ && $menu$$16_newVal$$3$$ && $$$$48$$($menu$$16_newVal$$3$$).length && (this.options.contextMenu = $menu$$16_newVal$$3$$);
      }
      this.$_addContextMenu$();
    }, $_addIfNotExist$:function($$ul$$, $itemList_menuItem$$1$$, $command$$12$$) {
      -1 == $itemList_menuItem$$1$$.indexOf($command$$12$$) && ($itemList_menuItem$$1$$ = this.$_buildContextMenuItem$($command$$12$$), $$ul$$.append($itemList_menuItem$$1$$));
    }, $_addContextMenu$:function() {
      var $$menuContainer$$ = $$$$48$$(this.options.contextMenu);
      if ($$menuContainer$$ || this.options.reorderable || this.options.removable) {
        var $self$$174$$ = this;
        if (0 == $$menuContainer$$.length) {
          var $key$$156$$ = this.options.reorderable ? "labelReorder" : $_arMenuKeyMap$$.remove, $menuId$$ = this.element.uniqueId().attr("id") + "contextmenu", $$menuContainer$$ = $$$$48$$("\x3cul\x3e");
          $$menuContainer$$.css("display", "none").attr("id", $menuId$$).attr("aria-label", this.$getTranslatedString$($key$$156$$));
          $$$$48$$(document.body).append($$menuContainer$$);
          $$menuContainer$$.ojMenu();
          this.options.contextMenu = "#" + $menuId$$;
        }
        var $itemList$$1$$ = [];
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$48$$(this).children("a").length) {
            var $command$$13$$ = $$$$48$$(this).attr("data-oj-command").slice(8);
            $$$$48$$(this).replaceWith($self$$174$$.$_buildContextMenuItem$($command$$13$$));
            $$$$48$$(this).addClass("oj-menu-item");
            $itemList$$1$$.push($command$$13$$);
          }
        });
        this.options.reorderable && (this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "cut"), this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "paste-before"), this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "paste-after"), this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$.find("#ojtabspastebefore"), this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$.find("#ojtabspasteafter"));
        this.options.removable && (this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "remove"), this.$_menu$.$$elemRemove$ = $$menuContainer$$.find("#ojtabsremove"));
        this.$_menu$.$$container$ = $$menuContainer$$;
        $$menuContainer$$.ojMenu("refresh");
        $$menuContainer$$.on("ojselect", $$$$48$$.proxy(this.$_handleContextMenuSelect$, this));
      }
    }, $_clearMenu$:function() {
      var $menu$$17$$ = this.$_menu$;
      $menu$$17$$ && ($menu$$17$$.$$container$.off("ojselect"), $menu$$17$$.$$container$ = null);
    }, $_doReorder$:function($event$$528$$, $mvTab$$2$$, $prevTab$$, $pasteBefore$$1$$) {
      var $mvContent$$ = this.$_getPanelForTab$($mvTab$$2$$), $eventData$$14$$ = {tab:$mvTab$$2$$, content:$mvContent$$};
      if (!1 === this._trigger("beforeReorder", $event$$528$$, $eventData$$14$$)) {
        return!1;
      }
      var $mvInd_prevContent$$ = this.$tabs$.index($mvTab$$2$$);
      if ($prevTab$$.length) {
        if (this.$tabs$.index($prevTab$$) == $mvInd_prevContent$$) {
          return!0;
        }
        $mvInd_prevContent$$ = this.$_getPanelForTab$($prevTab$$);
        $pasteBefore$$1$$ ? ($prevTab$$.before($mvTab$$2$$), $mvInd_prevContent$$.before($mvContent$$)) : ($prevTab$$.after($mvTab$$2$$), $mvInd_prevContent$$.after($mvContent$$));
      } else {
        if (0 < this.$tabs$.length) {
          if (0 == $mvInd_prevContent$$) {
            return!0;
          }
          this.$tabs$.first().before($mvTab$$2$$);
          this.$panels$.first().before($mvContent$$);
        }
      }
      this.$_updateDisabledTabs$();
      this.refresh();
      $mvTab$$2$$.focus();
      this._trigger("reorder", $event$$528$$, $eventData$$14$$);
      return!0;
    }, $_sanitizeSelector$:function($hash$$7$$) {
      return $hash$$7$$ ? $hash$$7$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($tab$$7$$) {
      return this.element.find(this.$_sanitizeSelector$("#" + $$$$48$$($tab$$7$$).attr("aria-controls")));
    }, $_getUniqueId$:function($panel$$5$$) {
      var $id$$50$$ = $panel$$5$$.attr("id");
      $id$$50$$ || ($id$$50$$ = $panel$$5$$.uniqueId().attr("id"), $panel$$5$$.addClass("oj-tabs-gen-id"));
      return $id$$50$$;
    }, $_getTab$:function($idOrIndex$$1_index$$236$$) {
      $idOrIndex$$1_index$$236$$ = this.$_getIndexByTabOrContentId$($idOrIndex$$1_index$$236$$);
      if (-1 !== $idOrIndex$$1_index$$236$$) {
        return $$$$48$$(this.$tabs$[$idOrIndex$$1_index$$236$$]);
      }
    }, $_getIndexByTabOrContentId$:function($idOrIndex$$2_selector$$37_tabOrContent$$) {
      var $index$$237$$ = -1;
      "number" === typeof $idOrIndex$$2_selector$$37_tabOrContent$$ ? 0 <= $idOrIndex$$2_selector$$37_tabOrContent$$ && $idOrIndex$$2_selector$$37_tabOrContent$$ < this.$tabs$.length && ($index$$237$$ = $idOrIndex$$2_selector$$37_tabOrContent$$) : "string" === typeof $idOrIndex$$2_selector$$37_tabOrContent$$ && ($idOrIndex$$2_selector$$37_tabOrContent$$ = this.$_sanitizeSelector$($idOrIndex$$2_selector$$37_tabOrContent$$), $oj$$53$$.$DomUtils$.$isValidIdentifier$($idOrIndex$$2_selector$$37_tabOrContent$$) && 
      ($idOrIndex$$2_selector$$37_tabOrContent$$ = this.element.find("#" + $idOrIndex$$2_selector$$37_tabOrContent$$), $idOrIndex$$2_selector$$37_tabOrContent$$.length && ($index$$237$$ = this.$tabs$.index($idOrIndex$$2_selector$$37_tabOrContent$$), -1 == $index$$237$$ && ($index$$237$$ = this.$panels$.index($idOrIndex$$2_selector$$37_tabOrContent$$)))));
      return $index$$237$$;
    }, $_getSelectedIndex$:function() {
      var $selected$$24$$ = this.options.selected;
      return "number" === typeof $selected$$24$$ ? $selected$$24$$ : this.$tabs$.index($$$$48$$("#" + $selected$$24$$));
    }, $_getTabIdOrIndex$:function($tab$$8$$) {
      if ($tab$$8$$) {
        var $id$$51$$ = $tab$$8$$.attr("id");
        return $id$$51$$ ? $id$$51$$ : this.$tabs$.index($tab$$8$$);
      }
    }, $_setOjDisabledOnTab$:function($disTabs$$) {
      var $children$$12$$ = (this.$tablist$ ? this.$tablist$ : this.element.children("ul")).children("li");
      $children$$12$$.removeClass("oj-disabled").removeAttr("aria-disabled");
      var $arr$$23$$ = [];
      if ($disTabs$$ && 0 < $disTabs$$.length) {
        for (var $id$$52$$, $tab$$9$$, $i$$367$$ = 0;$i$$367$$ < $disTabs$$.length;$i$$367$$++) {
          if ($tab$$9$$ = this.$_getTab$($disTabs$$[$i$$367$$])) {
            $tab$$9$$.addClass("oj-disabled"), $tab$$9$$.attr("aria-disabled", "true"), $tab$$9$$.find(".oj-tabs-anchor").removeAttr("href"), $id$$52$$ = $tab$$9$$.attr("id"), $arr$$23$$.push($id$$52$$ ? $id$$52$$ : $children$$12$$.index($tab$$9$$));
          }
        }
      }
      this.$_updateDisabledTabs$($arr$$23$$);
    }, $_updateDisabledTabs$:function($arr$$24$$) {
      if (!$arr$$24$$) {
        $arr$$24$$ = [];
        var $self$$175$$ = this;
        this.$tablist$.children().each(function() {
          var $tab$$10$$ = $$$$48$$(this);
          $tab$$10$$.hasClass("oj-disabled") && $arr$$24$$.push($self$$175$$.$_getTabIdOrIndex$($tab$$10$$));
        });
      }
      $oj$$53$$.$Object$.$_compareSet$(this.options.disabledTabs, $arr$$24$$) || (this.$_initialRender$ ? this.options.disabledTabs = $arr$$24$$ : this.option({disabledTabs:$arr$$24$$}, {_context:{$internalSet$:!0, $writeback$:!0}, changed:!0}));
    }, $_isInATab$:function($element$$145$$) {
      var $found$$8$$ = !1;
      this.$tabs$.each(function() {
        if (this === $element$$145$$ || $$$$48$$.contains(this, $element$$145$$)) {
          return $found$$8$$ = !0, !1;
        }
      });
      return $found$$8$$;
    }, $_createTabbar$:function() {
      var $contentIds$$ = this.$_getContentIds$(), $self$$176$$ = this, $tabbar$$5$$ = this.element.children("ul");
      0 < $tabbar$$5$$.length && $tabbar$$5$$.children("li").each(function($index$$239$$) {
        $self$$176$$.$_wrapLi$($$$$48$$(this), $contentIds$$[$index$$239$$]);
      });
    }, $_createTabbarFromOldMarkup$:function() {
      var $tabbar$$6$$ = this.element.children("ul");
      if (0 == $tabbar$$6$$.length) {
        var $self$$177$$ = this, $contentIds$$1$$ = this.$_getContentIds$(), $tabbar$$6$$ = $$$$48$$("\x3cul\x3e");
        this.element.children().each(function($index$$240$$) {
          $self$$177$$.$_wrapLi$($$$$48$$(this).find("\x3e :first-child"), $contentIds$$1$$[$index$$240$$]).appendTo($tabbar$$6$$);
        });
        $tabbar$$6$$.prependTo(this.element);
      }
    }, $_addFacets$:function() {
      var $navRoot$$3$$ = this.element.children(".oj-tabs-nav-root"), $self$$178$$ = this, $tabbarWrapper$$ = $navRoot$$3$$.children(".oj-tabs-conveyorbelt-wrapper");
      $navRoot$$3$$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$1$$ = $$$$48$$(this), $facetId$$ = $self$$178$$.$_getUniqueId$($facet$$1$$);
        0 == $navRoot$$3$$.find("#" + $facetId$$).length && ($facet$$1$$.hasClass("oj-start") ? $tabbarWrapper$$.before($facet$$1$$) : $facet$$1$$.appendTo($navRoot$$3$$));
      });
    }, $_getContentIds$:function() {
      var $contentIds$$2$$ = [], $self$$179$$ = this;
      this.element.children(":not(ul):not(.oj-tabs-facet)").each(function() {
        var $panel$$6$$ = $$$$48$$(this);
        $panel$$6$$.addClass("oj-tabs-panel");
        $contentIds$$2$$.push($self$$179$$.$_getUniqueId$($panel$$6$$));
      });
      return $contentIds$$2$$;
    }});
  })();
});
