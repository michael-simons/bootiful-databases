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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$32$$, $$$$29$$) {
  (function() {
    var $uid$$1$$ = 0;
    $oj$$32$$.$__registerWidget$("oj.ojCollapsible", $$$$29$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"header", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
      this.$_initialRender$ = !0;
      var $elem$$73$$ = this.element[0];
      this.$_expandCollapseHandler$({type:this.options.expanded ? "ojexpand" : "ojcollapse", target:$elem$$73$$, currentTarget:$elem$$73$$, preventDefault:$$$$29$$.noop});
      this.$_initialRender$ = void 0;
    }, $_NotifyContextMenuGesture$:function($menu$$13$$, $event$$396$$, $eventType$$43$$) {
      this.$_OpenContextMenu$($event$$396$$, $eventType$$43$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, $_createIcons$:function() {
      var $icon$$12$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$29$$("\x3cspan\x3e") : $$$$29$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon " + $icon$$12$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && ($oj$$32$$.$DomUtils$.unwrap(this.content), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled");
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$141$$, $value$$263$$, $flags$$36$$) {
      "expanded" === $key$$141$$ ? $value$$263$$ !== this.options.expanded && this.$_setExpanded$($value$$263$$) : "disabled" === $key$$141$$ ? (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$263$$)) : "expandOn" === $key$$141$$ || "expandArea" === $key$$141$$ ? (this.$_tearDownEvents$(), this._super($key$$141$$, $value$$263$$, $flags$$36$$), this.$_setupEvents$()) : this._super($key$$141$$, $value$$263$$, $flags$$36$$);
    }, $_keydown$:function($event$$397$$) {
      if (!$event$$397$$.altKey && !$event$$397$$.ctrlKey) {
        var $keyCode$$17$$ = $$$$29$$.ui.keyCode;
        switch($event$$397$$.keyCode) {
          case $keyCode$$17$$.SPACE:
          ;
          case $keyCode$$17$$.ENTER:
            this.$_toggleHandler$($event$$397$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1);
    }, $_refresh$:function() {
      var $focusable$$3_header$$10$$ = this.header, $content$$31$$ = this.content, $options$$304$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$1$$), $headerId$$ = $focusable$$3_header$$10$$.attr("id"), $contentId$$ = $content$$31$$.attr("id");
      $headerId$$ || $focusable$$3_header$$10$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$31$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$3_header$$10$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$3_header$$10$$.attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$304$$.expanded);
      this.$_isDisabled$() && $focusable$$3_header$$10$$.attr("aria-disabled", "true");
      $options$$304$$.expanded ? $content$$31$$.removeAttr("aria-hidden") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$31$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$10$$) {
      $expanded$$10$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$11$$ = {keydown:this.$_keydown$}, $event$$398_expandArea$$ = this.options.expandOn;
      if ($event$$398_expandArea$$) {
        var $self$$151$$ = this;
        $$$$29$$.each($event$$398_expandArea$$.split(" "), function($index$$191$$, $eventName$$1$$) {
          $oj$$32$$.$DomUtils$.$isValidIdentifier$($eventName$$1$$) && ($events$$11$$[$eventName$$1$$] = $self$$151$$.$_toggleHandler$);
        });
      }
      $event$$398_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$398_expandArea$$, $events$$11$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($event$$398_expandArea$$), this._focusable($event$$398_expandArea$$), this.$_activeable$($event$$398_expandArea$$));
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$399$$) {
      this.$_isDisabled$() || $event$$399$$.isDefaultPrevented() || (this.options.expanded ? this.collapse(!0, $event$$399$$) : this.expand(!0, $event$$399$$), $event$$399$$.preventDefault(), $event$$399$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus());
    }, $_expandCollapseHandler$:function($event$$400$$) {
      if (!this.$_isDisabled$() && $event$$400$$.target === this.element[0] && (this.$_initialRender$ || !$event$$400$$.isDefaultPrevented())) {
        var $element$$130$$ = this.element, $options$$305$$ = this.options, $content$$32$$ = this.content, $wrapper$$ = this.$wrapper$, $isExpanded$$ = "ojexpand" === $event$$400$$.type;
        $event$$400$$.preventDefault();
        this.$_initialRender$ ? ($options$$305$$.expanded = $isExpanded$$) ? ($element$$130$$.removeClass("oj-collapsed"), $element$$130$$.addClass("oj-expanded"), $oj$$32$$.Components.$subtreeShown$($wrapper$$[0])) : ($element$$130$$.removeClass("oj-expanded"), $element$$130$$.addClass("oj-collapsed"), $wrapper$$.css("max-height", 0), $wrapper$$.hide(), $oj$$32$$.Components.$subtreeHidden$($wrapper$$[0])) : (this.$_changeExpandedOption$($isExpanded$$, $event$$400$$), $wrapper$$.$contentHeight$ = 
        $wrapper$$.outerHeight(), $isExpanded$$ ? ($wrapper$$.show(), setTimeout(function() {
          $wrapper$$.$contentHeight$ += $content$$32$$.outerHeight();
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$.$contentHeight$});
          $element$$130$$.removeClass("oj-collapsed");
          $element$$130$$.addClass("oj-expanded");
          $oj$$32$$.Components.$subtreeShown$($wrapper$$[0]);
        }, 1)) : ($wrapper$$.removeClass("oj-collapsible-transition"), $wrapper$$.css({"max-height":$wrapper$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$130$$.removeClass("oj-expanded");
          $element$$130$$.addClass("oj-collapsed");
          $oj$$32$$.Components.$subtreeHidden$($wrapper$$[0]);
        }, 10)));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", $isExpanded$$).toggleClass("oj-collapsible-close-icon", !$isExpanded$$ || !1).end();
        $isExpanded$$ ? this.content.removeAttr("aria-hidden") : this.content.attr("aria-hidden", "true");
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", $isExpanded$$);
      }
    }, $_focusHandler$:function($event$$401$$) {
      if (this.$_isDisabled$()) {
        return null;
      }
      "ojfocusout" == $event$$401$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$401$$.preventDefault(), $event$$401$$.stopPropagation()) : "ojfocus" == $event$$401$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$401$$.preventDefault(), $event$$401$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_findFocusables$:function($start$$46$$) {
      return this.$_isDisabled$() ? $start$$46$$.find("span") : $start$$46$$.find("a,:input");
    }, expand:function($vetoable$$4$$, $event$$402$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$9$$ = {header:this.header, content:this.content};
        $vetoable$$4$$ && !1 === this._trigger("beforeExpand", $event$$402$$, $eventData$$9$$) || this._trigger("expand", $event$$402$$, $eventData$$9$$);
      }
    }, collapse:function($vetoable$$5$$, $event$$403$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$10$$ = {header:this.header, content:this.content};
        $vetoable$$5$$ && !1 === this._trigger("beforeCollapse", $event$$403$$, $eventData$$10$$) || this._trigger("collapse", $event$$403$$, $eventData$$10$$);
      }
    }, $_transitionEndHandler$:function($event$$404$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$404$$.originalEvent ? $event$$404$$.originalEvent.propertyName : null) && ($event$$404$$.preventDefault(), $event$$404$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"));
    }, $_changeExpandedOption$:function($value$$264$$, $originalEvent$$4$$) {
      this.option("expanded", $value$$264$$, {_context:{originalEvent:$originalEvent$$4$$, $writeback$:!0, $internalSet$:!0}});
    }, getNodeBySubId:function($locator$$34$$) {
      if (null == $locator$$34$$) {
        return this.element ? this.element[0] : null;
      }
      switch($locator$$34$$.subId) {
        case "oj-collapsible-content":
          return this.content[0];
        case "oj-collapsible-header":
          return this.header[0];
        case "oj-collapsible-disclosure":
        ;
        case "oj-collapsible-header-icon":
          return this.header.find(".oj-collapsible-header-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($currentNode$$1_node$$87$$) {
      for (var $headerIcon$$ = this.getNodeBySubId({subId:"oj-collapsible-disclosure"});$currentNode$$1_node$$87$$;) {
        if ($currentNode$$1_node$$87$$ === this.content[0]) {
          return{subId:"oj-collapsible-content"};
        }
        if ($currentNode$$1_node$$87$$ === this.header[0]) {
          return{subId:"oj-collapsible-header"};
        }
        if ($currentNode$$1_node$$87$$ === $headerIcon$$) {
          return{subId:"oj-collapsible-disclosure"};
        }
        $currentNode$$1_node$$87$$ = $currentNode$$1_node$$87$$.parentElement;
      }
      return null;
    }});
  })();
});
