/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTagCloud"], function($oj$$37$$, $$$$34$$, $comp$$10$$, $base$$8$$, $dvt$$6$$) {
  $oj$$37$$.$__registerWidget$("oj.ojTagCloud", $$$$34$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$129$$, $callback$$113$$, $callbackObj$$8$$) {
    return $dvt$$6$$.TagCloud.newInstance($context$$129$$, $callback$$113$$, $callbackObj$$8$$);
  }, $_ConvertLocatorToSubId$:function($locator$$41$$) {
    var $subId$$44$$ = $locator$$41$$.subId;
    "oj-tagcloud-item" == $subId$$44$$ ? $subId$$44$$ = "item[" + $locator$$41$$.index + "]" : "oj-tagcloud-tooltip" == $subId$$44$$ && ($subId$$44$$ = "tooltip");
    return $subId$$44$$;
  }, $_ConvertSubIdToLocator$:function($subId$$45$$) {
    var $locator$$42$$ = {};
    0 == $subId$$45$$.indexOf("item") ? ($locator$$42$$.subId = "oj-tagcloud-item", $locator$$42$$.index = this.$_GetFirstIndex$($subId$$45$$)) : "tooltip" == $subId$$45$$ && ($locator$$42$$.subId = "oj-tagcloud-tooltip");
    return $locator$$42$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$.push("oj-tagcloud");
    return $styleClasses$$13$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$["oj-tagcloud"] = {path:"styleDefaults/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$14$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$15$$ = this.options.translations, $ret$$40$$ = this._super();
    $ret$$40$$["DvtUtilBundle.TAG_CLOUD"] = $translations$$15$$.componentName;
    return $ret$$40$$;
  }, getItem:function($index$$199$$) {
    return this.$_component$.getAutomation().getItem($index$$199$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$130_node$$93$$) {
    return($context$$130_node$$93$$ = this.getSubIdByNode($context$$130_node$$93$$)) && "oj-tagcloud-tooltip" !== $context$$130_node$$93$$.subId ? $context$$130_node$$93$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }});
});
