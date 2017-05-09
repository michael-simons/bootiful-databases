/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreeView"], function($oj$$41$$, $$$$38$$, $comp$$11$$, $base$$9$$, $dvt$$7$$) {
  $oj$$41$$.$__registerWidget$("oj.ojTreemap", $$$$38$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$131$$, $callback$$114$$, $callbackObj$$9$$) {
    return $dvt$$7$$.Treemap.newInstance($context$$131$$, $callback$$114$$, $callbackObj$$9$$);
  }, $_ConvertLocatorToSubId$:function($locator$$44$$) {
    var $subId$$47$$ = $locator$$44$$.subId;
    "oj-treemap-node" == $subId$$47$$ ? $subId$$47$$ = "node" + this.$_GetStringFromIndexPath$($locator$$44$$.indexPath) : "oj-treemap-tooltip" == $subId$$47$$ && ($subId$$47$$ = "tooltip");
    return $subId$$47$$;
  }, $_ConvertSubIdToLocator$:function($subId$$48$$) {
    var $locator$$45$$ = {};
    0 == $subId$$48$$.indexOf("node") ? ($locator$$45$$.subId = "oj-treemap-node", $locator$$45$$.indexPath = this.$_GetIndexPath$($subId$$48$$)) : "tooltip" == $subId$$48$$ && ($locator$$45$$.subId = "oj-treemap-tooltip");
    return $locator$$45$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$.push("oj-treemap");
    return $styleClasses$$15$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$16$$ = this._super();
    $styleClasses$$16$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$16$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$16$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$16$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}, {path:"nodeDefaults/header/_hoverLabelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$16$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}, {path:"nodeDefaults/header/_selectedLabelStyle", property:"CSS_TEXT_PROPERTIES"}];
    return $styleClasses$$16$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$41$$ = this._super();
    $ret$$41$$["DvtTreemapBundle.COLOR"] = $translations$$16$$.labelColor;
    $ret$$41$$["DvtTreemapBundle.ISOLATE"] = $translations$$16$$.tooltipIsolate;
    $ret$$41$$["DvtTreemapBundle.RESTORE"] = $translations$$16$$.tooltipRestore;
    $ret$$41$$["DvtTreemapBundle.SIZE"] = $translations$$16$$.labelSize;
    $ret$$41$$["DvtUtilBundle.TREEMAP"] = $translations$$16$$.componentName;
    return $ret$$41$$;
  }, $_HandleEvent$:function($event$$466_isolatedNode$$) {
    if ("isolate" === $event$$466_isolatedNode$$.type) {
      var $isolatedNodes$$ = this.options.$_isolatedNodes$;
      $isolatedNodes$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes$$ = this.options.$_isolatedNodes$);
      ($event$$466_isolatedNode$$ = $event$$466_isolatedNode$$.id) ? ($isolatedNodes$$.push($event$$466_isolatedNode$$), this.$_UserOptionChange$("isolatedNode", $event$$466_isolatedNode$$)) : ($isolatedNodes$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes$$.length ? $isolatedNodes$$[$isolatedNodes$$.length] : null));
    } else {
      this._super($event$$466_isolatedNode$$);
    }
  }, getNode:function($ret$$42_subIdPath$$1$$) {
    $ret$$42_subIdPath$$1$$ = this.$_component$.getAutomation().getNode($ret$$42_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$42_subIdPath$$1$$);
    return $ret$$42_subIdPath$$1$$;
  }, getContextByNode:function($context$$132_node$$95$$) {
    return($context$$132_node$$95$$ = this.getSubIdByNode($context$$132_node$$95$$)) && "oj-treemap-tooltip" !== $context$$132_node$$95$$.subId ? $context$$132_node$$95$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes"]};
  }});
});
