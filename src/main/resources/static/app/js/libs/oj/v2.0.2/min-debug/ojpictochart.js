/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtPictoChart"], function($oj$$50$$, $$$$45$$, $comp$$12$$, $base$$10$$, $dvt$$8$$) {
  $oj$$50$$.$__registerWidget$("oj.ojPictoChart", $$$$45$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, drill:null}, $_CreateDvtComponent$:function($context$$152$$, $callback$$117$$, $callbackObj$$10$$) {
    return $dvt$$8$$.PictoChart.newInstance($context$$152$$, $callback$$117$$, $callbackObj$$10$$);
  }, $_ConvertLocatorToSubId$:function($locator$$50$$) {
    var $subId$$54$$ = $locator$$50$$.subId;
    "oj-pictochart-item" == $subId$$54$$ ? $subId$$54$$ = "item[" + $locator$$50$$.index + "]" : "oj-pictochart-tooltip" == $subId$$54$$ && ($subId$$54$$ = "tooltip");
    return $subId$$54$$;
  }, $_ConvertSubIdToLocator$:function($subId$$55$$) {
    var $locator$$51$$ = {};
    0 == $subId$$55$$.indexOf("item") ? ($locator$$51$$.subId = "oj-pictochart-item", $locator$$51$$.index = this.$_GetFirstIndex$($subId$$55$$)) : "tooltip" == $subId$$55$$ && ($locator$$51$$.subId = "oj-pictochart-tooltip");
    return $locator$$51$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$17$$ = this._super();
    $styleClasses$$17$$.push("oj-pictochart");
    return $styleClasses$$17$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$18$$ = this._super();
    $styleClasses$$18$$["oj-pictochart-item"] = {path:"_defaultColor", property:"background-color"};
    return $styleClasses$$18$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_HandleEvent$:function($event$$515$$) {
    "drill" === $event$$515$$.type ? this._trigger("drill", null, {id:$event$$515$$.id}) : this._super($event$$515$$);
  }, getItem:function($index$$223$$) {
    return this.$_component$.getAutomation().getItem($index$$223$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$153_node$$106$$) {
    return($context$$153_node$$106$$ = this.getSubIdByNode($context$$153_node$$106$$)) && "oj-pictochart-tooltip" !== $context$$153_node$$106$$.subId ? $context$$153_node$$106$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }, $_IsFlowingLayoutSupported$:function() {
    return!0;
  }});
});
