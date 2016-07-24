/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$81$$, $$$$74$$, $comp$$17$$, $base$$14$$, $dvt$$12$$) {
  $oj$$81$$.$__registerWidget$("oj.ojDiagram", $$$$74$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$81$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$3$$ = this;
    return function($context$$172_elem$$173$$) {
      var $dummyDiv$$4$$ = document.createElement("div");
      $dummyDiv$$4$$.style.display = "none";
      $dummyDiv$$4$$.$_dvtcontext$ = $thisRef$$3$$.$_context$;
      $thisRef$$3$$.element.append($dummyDiv$$4$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$4$$, data:$context$$172_elem$$173$$.data});
      return($context$$172_elem$$173$$ = $dummyDiv$$4$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$172_elem$$173$$.namespaceURI ? ($dummyDiv$$4$$.removeChild($context$$172_elem$$173$$), $$$$74$$($dummyDiv$$4$$).remove(), $context$$172_elem$$173$$) : $context$$172_elem$$173$$ ? $thisRef$$3$$.$_GetDvtComponent$($context$$172_elem$$173$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$4$$ = this;
    return function($parentElement$$10$$, $rootElement$$21$$, $data$$183$$, $state$$14$$, $previousState$$1$$) {
      return{component:$oj$$81$$.Components.$getWidgetConstructor$($thisRef$$4$$.element), parentElement:$parentElement$$10$$, rootElement:$rootElement$$21$$, data:$data$$183$$, state:$state$$14$$, previousState:$previousState$$1$$, id:$data$$183$$.id, type:"node", label:$data$$183$$.label};
    };
  }, renderDefaultHover:function($context$$174$$) {
    $context$$174$$.previousState && $context$$174$$.state.hovered == $context$$174$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$174$$.id, $context$$174$$.state.hovered);
  }, renderDefaultSelection:function($context$$175$$) {
    $context$$175$$.previousState && $context$$175$$.state.selected == $context$$175$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$175$$.id, $context$$175$$.state.selected);
  }, renderDefaultFocus:function($context$$176$$) {
    $context$$176$$.previousState && $context$$176$$.state.focused == $context$$176$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$176$$.id, $context$$176$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$177$$, $callback$$136$$, $callbackObj$$15$$) {
    return $dvt$$12$$.Diagram.newInstance($context$$177$$, $callback$$136$$, $callbackObj$$15$$);
  }, $_ConvertLocatorToSubId$:function($locator$$67$$) {
    var $subId$$70$$ = $locator$$67$$.subId;
    "oj-diagram-link" == $subId$$70$$ ? $subId$$70$$ = "link[" + $locator$$67$$.index + "]" : "oj-diagram-node" == $subId$$70$$ ? $subId$$70$$ = "node[" + $locator$$67$$.index + "]" : "oj-diagram-tooltip" == $subId$$70$$ && ($subId$$70$$ = "tooltip");
    return $subId$$70$$;
  }, $_ConvertSubIdToLocator$:function($subId$$71$$) {
    var $locator$$68$$ = {};
    0 == $subId$$71$$.indexOf("link") ? ($locator$$68$$.subId = "oj-diagram-link", $locator$$68$$.index = this.$_GetFirstIndex$($subId$$71$$)) : 0 == $subId$$71$$.indexOf("node") ? ($locator$$68$$.subId = "oj-diagram-node", $locator$$68$$.index = this.$_GetFirstIndex$($subId$$71$$)) : "tooltip" == $subId$$71$$ && ($locator$$68$$.subId = "oj-diagram-tooltip");
    return $locator$$68$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$26$$ = this._super();
    $styleClasses$$26$$.push("oj-diagram");
    return $styleClasses$$26$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$27$$ = this._super();
    $styleClasses$$27$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$27$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$27$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$27$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$27$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$27$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$80$$ = this._super();
    $ret$$80$$["DvtUtilBundle.DIAGRAM"] = $translations$$22$$.componentName;
    return $ret$$80$$;
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$2$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$2$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getContextByNode:function($context$$178_node$$182$$) {
    return($context$$178_node$$182$$ = this.getSubIdByNode($context$$178_node$$182$$)) && "oj-diagram-tooltip" !== $context$$178_node$$182$$.subId ? $context$$178_node$$182$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes", "links"]};
  }});
});
