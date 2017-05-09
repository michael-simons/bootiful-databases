/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreeView"], function($oj$$33$$, $$$$30$$, $comp$$8$$, $base$$6$$, $dvt$$4$$) {
  $oj$$33$$.$__registerWidget$("oj.ojSunburst", $$$$30$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$125$$, $callback$$111$$, $callbackObj$$6$$) {
    return $dvt$$4$$.Sunburst.newInstance($context$$125$$, $callback$$111$$, $callbackObj$$6$$);
  }, $_ConvertLocatorToSubId$:function($locator$$35$$) {
    var $subId$$39$$ = $locator$$35$$.subId;
    "oj-sunburst-node" == $subId$$39$$ ? $subId$$39$$ = "node" + this.$_GetStringFromIndexPath$($locator$$35$$.indexPath) : "oj-sunburst-tooltip" == $subId$$39$$ && ($subId$$39$$ = "tooltip");
    return $subId$$39$$;
  }, $_ConvertSubIdToLocator$:function($subId$$40$$) {
    var $locator$$36$$ = {};
    0 == $subId$$40$$.indexOf("node") ? ($locator$$36$$.subId = "oj-sunburst-node", $locator$$36$$.indexPath = this.$_GetIndexPath$($subId$$40$$)) : "tooltip" == $subId$$40$$ && ($locator$$36$$.subId = "oj-sunburst-tooltip");
    return $locator$$36$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$.push("oj-sunburst");
    return $styleClasses$$9$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$10$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$10$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $translations$$13$$ = this.options.translations, $ret$$35$$ = this._super();
    $ret$$35$$["DvtSunburstBundle.COLOR"] = $translations$$13$$.labelColor;
    $ret$$35$$["DvtSunburstBundle.SIZE"] = $translations$$13$$.labelSize;
    $ret$$35$$["DvtUtilBundle.SUNBURST"] = $translations$$13$$.componentName;
    return $ret$$35$$;
  }, $_HandleEvent$:function($event$$405$$) {
    "rotation" === $event$$405$$.type ? $event$$405$$.complete ? this.$_UserOptionChange$("startAngle", $event$$405$$.startAngle) : this._trigger("rotateInput", null, {value:$event$$405$$.startAngle}) : this._super($event$$405$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$33$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNode:function($ret$$36_subIdPath$$) {
    $ret$$36_subIdPath$$ = this.$_component$.getAutomation().getNode($ret$$36_subIdPath$$);
    this.$_AddAutomationGetters$($ret$$36_subIdPath$$);
    return $ret$$36_subIdPath$$;
  }, getContextByNode:function($context$$126_node$$88$$) {
    return($context$$126_node$$88$$ = this.getSubIdByNode($context$$126_node$$88$$)) && "oj-sunburst-tooltip" !== $context$$126_node$$88$$.subId ? $context$$126_node$$88$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes"]};
  }});
});
