/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTimeline"], function($oj$$30$$, $$$$27$$, $comp$$7$$, $base$$5$$, $dvt$$3$$) {
  $oj$$30$$.$__registerWidget$("oj.ojTimeline", $$$$27$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{viewportChange:null}, $_CreateDvtComponent$:function($context$$124$$, $callback$$110$$, $callbackObj$$5$$) {
    return $dvt$$3$$.Timeline.newInstance($context$$124$$, $callback$$110$$, $callbackObj$$5$$);
  }, $_ConvertLocatorToSubId$:function($locator$$32$$) {
    var $subId$$36$$ = $locator$$32$$.subId;
    "oj-timeline-item" == $subId$$36$$ && ($subId$$36$$ = "timelineItem[" + $locator$$32$$.seriesIndex + "][" + $locator$$32$$.itemIndex + "]");
    return $subId$$36$$;
  }, $_ConvertSubIdToLocator$:function($indexPath$$2_subId$$37$$) {
    var $locator$$33$$ = {};
    0 == $indexPath$$2_subId$$37$$.indexOf("timelineItem") && ($indexPath$$2_subId$$37$$ = this.$_GetIndexPath$($indexPath$$2_subId$$37$$), $locator$$33$$.subId = "oj-timeline-item", $locator$$33$$.seriesIndex = $indexPath$$2_subId$$37$$[0], $locator$$33$$.itemIndex = $indexPath$$2_subId$$37$$[1]);
    return $locator$$33$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    this.options.styleDefaults.series || (this.options.styleDefaults.series = {});
    if (!this.options.styleDefaults.series.colors) {
      var $handler$$51$$ = new $oj$$30$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.series.colors = $handler$$51$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$.push("oj-timeline");
    return $styleClasses$$7$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$["oj-timeline"] = {path:"styleDefaults/borderColor", property:"border-color"};
    $styleClasses$$8$$["oj-timeline-item"] = [{path:"styleDefaults/item/borderColor", property:"border-color"}, {path:"styleDefaults/item/backgroundColor", property:"background-color"}];
    $styleClasses$$8$$["oj-timeline-item oj-hover"] = [{path:"styleDefaults/item/hoverBorderColor", property:"border-color"}, {path:"styleDefaults/item/hoverBackgroundColor", property:"background-color"}];
    $styleClasses$$8$$["oj-timeline-item oj-selected"] = [{path:"styleDefaults/item/selectedBorderColor", property:"border-color"}, {path:"styleDefaults/item/selectedBackgroundColor", property:"background-color"}];
    $styleClasses$$8$$["oj-timeline-item-description"] = {path:"styleDefaults/item/descriptionStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-item-title"] = {path:"styleDefaults/item/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-major-axis-label"] = {path:"styleDefaults/majorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-major-axis-separator"] = {path:"styleDefaults/majorAxis/separatorColor", property:"color"};
    $styleClasses$$8$$["oj-timeline-minor-axis"] = [{path:"styleDefaults/minorAxis/backgroundColor", property:"background-color"}, {path:"styleDefaults/minorAxis/borderColor", property:"border-color"}];
    $styleClasses$$8$$["oj-timeline-minor-axis-label"] = {path:"styleDefaults/minorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-minor-axis-separator"] = {path:"styleDefaults/minorAxis/separatorColor", property:"color"};
    $styleClasses$$8$$["oj-timeline-overview"] = {path:"styleDefaults/overview/backgroundColor", property:"background-color"};
    $styleClasses$$8$$["oj-timeline-overview-label"] = {path:"styleDefaults/overview/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-overview-window"] = [{path:"styleDefaults/overview/window/backgroundColor", property:"background-color"}, {path:"styleDefaults/overview/window/borderColor", property:"border-color"}];
    $styleClasses$$8$$["oj-timeline-reference-object"] = {path:"styleDefaults/referenceObject/color", property:"color"};
    $styleClasses$$8$$["oj-timeline-series"] = {path:"styleDefaults/series/backgroundColor", property:"background-color"};
    $styleClasses$$8$$["oj-timeline-series-empty-text"] = {path:"styleDefaults/series/emptyTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-series-label"] = {path:"styleDefaults/series/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-timeline-zoomin-icon"] = {path:"_resources/zoomIn", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomin-icon oj-hover"] = {path:"_resources/zoomIn_h", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomin-icon oj-active"] = {path:"_resources/zoomIn_a", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomin-icon oj-disabled"] = {path:"_resources/zoomIn_d", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomout-icon"] = {path:"_resources/zoomOut", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomout-icon oj-hover"] = {path:"_resources/zoomOut_h", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomout-icon oj-active"] = {path:"_resources/zoomOut_a", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-zoomout-icon oj-disabled"] = {path:"_resources/zoomOut_d", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-scroll-indicator-back"] = {path:"_resources/scrollLeft", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-scroll-indicator-forward"] = {path:"_resources/scrollRight", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-scroll-indicator-up"] = {path:"_resources/scrollUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-scroll-indicator-down"] = {path:"_resources/scrollDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-overview-window-handle-horizontal"] = {path:"_resources/overviewHandleHor", property:"CSS_URL"};
    $styleClasses$$8$$["oj-timeline-overview-window-handle-vertical"] = {path:"_resources/overviewHandleVert", property:"CSS_URL"};
    return $styleClasses$$8$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "viewportChange"];
  }, $_GetTranslationMap$:function() {
    var $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$ = this.options.translations, $ret$$34$$ = this._super();
    $ret$$34$$["DvtUtilBundle.TIMELINE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$.componentName;
    $ret$$34$$["DvtUtilBundle.TIMELINE_SERIES"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$.labelSeries;
    $ret$$34$$["DvtUtilBundle.ZOOM_IN"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$.tooltipZoomIn;
    $ret$$34$$["DvtUtilBundle.ZOOM_OUT"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$.tooltipZoomOut;
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$ = $oj$$30$$.$LocaleData$.$getMonthNames$("wide");
    $ret$$34$$["DvtUtilBundle.MONTH_JANUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[0];
    $ret$$34$$["DvtUtilBundle.MONTH_FEBRUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[1];
    $ret$$34$$["DvtUtilBundle.MONTH_MARCH"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[2];
    $ret$$34$$["DvtUtilBundle.MONTH_APRIL"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[3];
    $ret$$34$$["DvtUtilBundle.MONTH_MAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[4];
    $ret$$34$$["DvtUtilBundle.MONTH_JUNE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[5];
    $ret$$34$$["DvtUtilBundle.MONTH_JULY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[6];
    $ret$$34$$["DvtUtilBundle.MONTH_AUGUST"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[7];
    $ret$$34$$["DvtUtilBundle.MONTH_SEPTEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[8];
    $ret$$34$$["DvtUtilBundle.MONTH_OCTOBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[9];
    $ret$$34$$["DvtUtilBundle.MONTH_NOVEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[10];
    $ret$$34$$["DvtUtilBundle.MONTH_DECEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[11];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$ = $oj$$30$$.$LocaleData$.$getDayNames$("wide");
    $ret$$34$$["DvtUtilBundle.DAY_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[0];
    $ret$$34$$["DvtUtilBundle.DAY_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[1];
    $ret$$34$$["DvtUtilBundle.DAY_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[2];
    $ret$$34$$["DvtUtilBundle.DAY_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[3];
    $ret$$34$$["DvtUtilBundle.DAY_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[4];
    $ret$$34$$["DvtUtilBundle.DAY_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[5];
    $ret$$34$$["DvtUtilBundle.DAY_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[6];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$ = $oj$$30$$.$LocaleData$.$getDayNames$("abbreviated");
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[0];
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[1];
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[2];
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[3];
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[4];
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[5];
    $ret$$34$$["DvtUtilBundle.DAY_SHORT_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$12$$[6];
    return $ret$$34$$;
  }, $_HandleEvent$:function($event$$386_minorAxisScale$$) {
    if ("viewportChange" === $event$$386_minorAxisScale$$.type) {
      var $viewportStart$$ = (new Date($event$$386_minorAxisScale$$.viewportStart)).toISOString(), $viewportEnd$$ = (new Date($event$$386_minorAxisScale$$.viewportEnd)).toISOString();
      $event$$386_minorAxisScale$$ = $event$$386_minorAxisScale$$.minorAxisScale;
      var $viewportChangePayload$$ = {viewportStart:$viewportStart$$, viewportEnd:$viewportEnd$$, minorAxisScale:$event$$386_minorAxisScale$$};
      this.$_UserOptionChange$("viewportStart", $viewportStart$$);
      this.$_UserOptionChange$("viewportEnd", $viewportEnd$$);
      this.$_UserOptionChange$("minorAxis.scale", $event$$386_minorAxisScale$$);
      this._trigger("viewportChange", null, $viewportChangePayload$$);
    } else {
      this._super($event$$386_minorAxisScale$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$ = this.options._resources, $converterFactory_yearsConverterVert$$ = $oj$$30$$.$Validation$.$converterFactory$("datetime"), $secondsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit", second:"2-digit"}), $minutesConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit"}), $hoursConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric"}), $daysConverter$$ = 
    $converterFactory_yearsConverterVert$$.createConverter({month:"numeric", day:"2-digit"}), $monthsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"long"}), $yearsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"numeric"}), $converterVert_monthsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"short"}), $converterFactory_yearsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"2-digit"}), 
    $converterVert_monthsConverterVert$$ = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$converterVert_monthsConverterVert$$, quarters:$converterVert_monthsConverterVert$$, years:$converterFactory_yearsConverterVert$$};
    $resources$$.converter = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$monthsConverter$$, quarters:$monthsConverter$$, years:$yearsConverter$$};
    $resources$$.converterVert = $converterVert_monthsConverterVert$$;
  }, getContextByNode:function($node$$86$$) {
    return this.getSubIdByNode($node$$86$$);
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["series"]};
  }, whenReady:function() {
  }});
});
