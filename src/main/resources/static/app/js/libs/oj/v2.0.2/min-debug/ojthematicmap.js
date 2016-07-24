/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$55$$, $$$$50$$, $comp$$14$$, $base$$12$$, $dvt$$10$$) {
  $oj$$55$$.$__registerWidget$("oj.ojThematicMap", $$$$50$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_basemapPath$:"resources/internal-deps/dvt/thematicMap/basemaps/", $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", 
  th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this._super();
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
  }, $_CreateDvtComponent$:function($context$$158$$, $callback$$120$$, $callbackObj$$13$$) {
    return $dvt$$10$$.ThematicMap.newInstance($context$$158$$, $callback$$120$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$56$$) {
    var $subId$$60$$ = $locator$$56$$.subId;
    "oj-thematicmap-area" == $subId$$60$$ ? $subId$$60$$ = $locator$$56$$.dataLayer + ":area[" + $locator$$56$$.index + "]" : "oj-thematicmap-marker" == $subId$$60$$ ? $subId$$60$$ = $locator$$56$$.dataLayer + ":marker[" + $locator$$56$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$60$$ && ($subId$$60$$ = "tooltip");
    return $subId$$60$$;
  }, $_ConvertSubIdToLocator$:function($subId$$61$$) {
    var $locator$$57$$ = {};
    0 < $subId$$61$$.indexOf(":area") ? ($locator$$57$$.subId = "oj-thematicmap-area", $locator$$57$$.dataLayer = $subId$$61$$.substring(0, $subId$$61$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$61$$)) : 0 < $subId$$61$$.indexOf(":marker") ? ($locator$$57$$.subId = "oj-thematicmap-marker", $locator$$57$$.dataLayer = $subId$$61$$.substring(0, $subId$$61$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$61$$)) : "tooltip" == $subId$$61$$ && ($locator$$57$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$57$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$.push("oj-thematicmap");
    return $styleClasses$$22$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$23$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$23$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$23$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$23$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$324$$, $flags$$48$$) {
    var $i$$368_numUpdates$$ = Object.keys($options$$324$$).length, $newAreaLayers$$ = $options$$324$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$324$$.pointDataLayers;
    if (1 == $i$$368_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$368_numUpdates$$ = 0;$i$$368_numUpdates$$ < $newAreaLayers$$.length;$i$$368_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$368_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$368_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$55$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$368_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$368_numUpdates$$ = 0;$i$$368_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$368_numUpdates$$++) {
          $oj$$55$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$368_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$368_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$368_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$368_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$324$$, $flags$$48$$);
  }, $_Render$:function() {
    this.$_NotReady$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if (this.options.basemap && $areaLayers_pointDataLayers$$1$$ && !(1 > $areaLayers_pointDataLayers$$1$$.length)) {
      this.$_loadBasemap$();
      for (var $i$$369_tooltipObj$$ = 0;$i$$369_tooltipObj$$ < this.$_checkBasemaps$.length;$i$$369_tooltipObj$$++) {
        if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$369_tooltipObj$$]]) {
          return;
        }
      }
      this.$_checkBasemaps$ = [];
      this.$_updateDataLayerSelection$();
      var $tooltipFun$$ = ($i$$369_tooltipObj$$ = this.options.tooltip) ? $i$$369_tooltipObj$$.renderer : null;
      $tooltipFun$$ && (this.options._tooltip = function $this$options$_tooltip$($context$$159$$) {
        var $defaultTooltip$$ = $context$$159$$.tooltip;
        try {
          return $tooltipFun$$($context$$159$$) || $defaultTooltip$$;
        } catch ($error$$42$$) {
          return $oj$$55$$.$Logger$.warn("Showing default tooltip. " + $error$$42$$), $defaultTooltip$$;
        }
      });
      if ($areaLayers_pointDataLayers$$1$$) {
        for ($i$$369_tooltipObj$$ = 0;$i$$369_tooltipObj$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$369_tooltipObj$$++) {
          var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$369_tooltipObj$$].areaDataLayer;
          if ($areaDataLayer$$1_pointDataLayer$$) {
            var $dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
            $dl_renderer$$2$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
          }
        }
      }
      if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
        for ($i$$369_tooltipObj$$ = 0;$i$$369_tooltipObj$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$369_tooltipObj$$++) {
          ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$369_tooltipObj$$]) && ($dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
      this.options._contextHandler = this.$_getContextHandler$();
      if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
        if (this.$_context$.isReadyToRender()) {
          for ($i$$369_tooltipObj$$ = 0;$i$$369_tooltipObj$$ < this.$_dataLayersToUpdate$.length;$i$$369_tooltipObj$$++) {
            $dl_renderer$$2$$ = this.$_dataLayersToUpdate$[$i$$369_tooltipObj$$], this.$_component$.updateLayer($dl_renderer$$2$$.options, $dl_renderer$$2$$.parentLayer, $dl_renderer$$2$$.isADL);
          }
          this.$_dataLayersToUpdate$ = [];
        }
      } else {
        this._super(), this.$_initiallyRendered$ = !0;
      }
      this._trigger("load", null, null);
    }
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$160_elem$$79$$) {
      var $dummyDiv$$3$$ = document.createElement("div");
      $dummyDiv$$3$$.style.display = "none";
      $dummyDiv$$3$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$3$$);
      $templateFunction$$({parentElement:$dummyDiv$$3$$, data:$context$$160_elem$$79$$.data});
      return($context$$160_elem$$79$$ = $dummyDiv$$3$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$160_elem$$79$$.namespaceURI ? ($dummyDiv$$3$$.removeChild($context$$160_elem$$79$$), $$$$50$$($dummyDiv$$3$$).remove(), $context$$160_elem$$79$$) : $thisRef$$.$_GetDvtComponent$($context$$160_elem$$79$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$9$$, $rootElement$$2$$, $data$$155$$, $state$$12$$, $previousState$$) {
      return{component:$oj$$55$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$9$$, rootElement:$rootElement$$2$$, data:$data$$155$$, state:$state$$12$$, previousState:$previousState$$, id:$data$$155$$.id, label:$data$$155$$.label, color:$data$$155$$.color, location:$data$$155$$.location, x:$data$$155$$.x, y:$data$$155$$.y};
    };
  }, renderDefaultHover:function($context$$162$$) {
    $context$$162$$.previousState && $context$$162$$.state.hovered == $context$$162$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$162$$.id, $context$$162$$.state.hovered);
  }, renderDefaultSelection:function($context$$163$$) {
    $context$$163$$.previousState && $context$$163$$.state.selected == $context$$163$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$163$$.id, $context$$163$$.state.selected);
  }, renderDefaultFocus:function($context$$164$$) {
    $context$$164$$.previousState && $context$$164$$.state.focused == $context$$164$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$164$$.id, $context$$164$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$55$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$370$$ = 0;$i$$370$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$370$$++) {
          var $layer$$21$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$370$$].layer;
          $layer$$21$$ && this.$_loadBasemapHelper$($basemap$$, $layer$$21$$, $locale$$22$$);
        }
      }
      $areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers;
      !this.options.mapProvider && $areaLayers$$1_pointDataLayers$$2$$ && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$35$$, $bRenderOnFail$$) {
    if (!this.$_loadedBasemaps$[$url$$35$$]) {
      var $thisRef$$2$$ = this, $getScript$$ = $$$$50$$.getScript($oj$$55$$.$Config$.$getResourceUrl$($url$$35$$), function() {
        $thisRef$$2$$.$_loadedBasemaps$[$url$$35$$] = !0;
        $thisRef$$2$$.$_Render$();
      });
      $bRenderOnFail$$ && $getScript$$.fail(function() {
        $thisRef$$2$$.$_loadedBasemaps$[$url$$35$$] = !0;
        $thisRef$$2$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$371_layer$$22$$, $locale$$23_localeList$$) {
    var $isLoaded_mapProvider_relativeUrl_splitLocale$$ = !0;
    try {
      $isLoaded_mapProvider_relativeUrl_splitLocale$$ = 0 < Object.keys($dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$1_bundleName_bundleUrl$$, $i$$371_layer$$22$$)).length;
    } catch ($err$$21$$) {
      $isLoaded_mapProvider_relativeUrl_splitLocale$$ = !1;
    }
    $isLoaded_mapProvider_relativeUrl_splitLocale$$ || (($isLoaded_mapProvider_relativeUrl_splitLocale$$ = this.options.mapProvider) ? $oj$$55$$.$MapProviderUtils$.$geoJsonToBasemap$($basemap$$1_bundleName_bundleUrl$$, $i$$371_layer$$22$$, $isLoaded_mapProvider_relativeUrl_splitLocale$$) : ($isLoaded_mapProvider_relativeUrl_splitLocale$$ = this.$_basemapPath$ + "ojthematicmap-" + $basemap$$1_bundleName_bundleUrl$$ + "-" + $i$$371_layer$$22$$ + ".js", -1 == this.$_checkBasemaps$.indexOf($isLoaded_mapProvider_relativeUrl_splitLocale$$) && 
    (this.$_checkBasemaps$.push($isLoaded_mapProvider_relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($isLoaded_mapProvider_relativeUrl_splitLocale$$, !1))));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($isLoaded_mapProvider_relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$isLoaded_mapProvider_relativeUrl_splitLocale$$[0]], 1 < $isLoaded_mapProvider_relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($isLoaded_mapProvider_relativeUrl_splitLocale$$[0] + "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[1]), 2 < $isLoaded_mapProvider_relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($isLoaded_mapProvider_relativeUrl_splitLocale$$[0] + 
      "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[2], $isLoaded_mapProvider_relativeUrl_splitLocale$$[0] + "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[1] + "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$.charAt(0).toUpperCase() + $basemap$$1_bundleName_bundleUrl$$.slice(1), $i$$371_layer$$22$$ = $i$$371_layer$$22$$.charAt(0).toUpperCase() + $i$$371_layer$$22$$.slice(1), $basemap$$1_bundleName_bundleUrl$$ = 
      this.$_basemapPath$ + "resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$371_layer$$22$$ + "Bundle_", $i$$371_layer$$22$$ = 0;$i$$371_layer$$22$$ < $locale$$23_localeList$$.length;$i$$371_layer$$22$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$371_layer$$22$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$371_layer$$22$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$, !0));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$529$$) {
    if ("selection" === $event$$529$$.type) {
      var $selection$$15$$ = {}, $id$$53$$ = $event$$529$$.clientId;
      $selection$$15$$[$id$$53$$] = $event$$529$$.selection;
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$53$$ !== $dataLayerId$$ && ($selection$$15$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$15$$);
    } else {
      this._super($event$$529$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$20$$ = this.options.translations, $ret$$55$$ = this._super();
    $ret$$55$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$20$$.componentName;
    return $ret$$55$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$16$$ = this.options.selection;
    if ($selection$$16$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$372$$ = 0;$i$$372$$ < $als_pdls$$.length;$i$$372$$++) {
          $selection$$16$$[$als_pdls$$[$i$$372$$].id] && ($als_pdls$$[$i$$372$$].selection = $selection$$16$$[$als_pdls$$[$i$$372$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$372$$ = 0;$i$$372$$ < $als_pdls$$.length;$i$$372$$++) {
          var $adl$$ = $als_pdls$$[$i$$372$$].areaDataLayer;
          $adl$$ && $selection$$16$$[$adl$$.id] && ($adl$$.selection = $selection$$16$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$241$$) {
    var $ret$$56$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$241$$);
    this.$_AddAutomationGetters$($ret$$56$$);
    return $ret$$56$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$242$$) {
    var $ret$$57$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$242$$);
    this.$_AddAutomationGetters$($ret$$57$$);
    return $ret$$57$$;
  }, getContextByNode:function($context$$165_node$$110$$) {
    return($context$$165_node$$110$$ = this.getSubIdByNode($context$$165_node$$110$$)) && "oj-thematicmap-tooltip" !== $context$$165_node$$110$$.subId ? $context$$165_node$$110$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{areaLayers:["areaDataLayer/areas", "areaDataLayer/markers"], pointDataLayers:["markers"]};
  }, $_GetDataContext$:function($layer$$23_options$$325$$) {
    var $basemap$$2$$ = this.options.basemap;
    $layer$$23_options$$325$$ = $layer$$23_options$$325$$.layer ? $layer$$23_options$$325$$.layer : "cities";
    return{basemap:$basemap$$2$$, layer:$layer$$23_options$$325$$, ids:$dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$2$$, $layer$$23_options$$325$$)};
  }});
  $oj$$55$$.$MapProviderUtils$ = {};
  $oj$$55$$.$MapProviderUtils$.$_MANAGER$ = "DvtBaseMapManager";
  $oj$$55$$.$MapProviderUtils$.$_UNPROCESSED$ = "_UNPROCESSED_MAPS";
  $oj$$55$$.$MapProviderUtils$.$_TYPE$ = "type";
  $oj$$55$$.$MapProviderUtils$.$_GEOMETRY$ = "geometry";
  $oj$$55$$.$MapProviderUtils$.$_COORDINATES$ = "coordinates";
  $oj$$55$$.$MapProviderUtils$.$_FEATURES$ = "features";
  $oj$$55$$.$MapProviderUtils$.$_PROPERTIES$ = "properties";
  $oj$$55$$.$MapProviderUtils$.$_TYPE_FEATURE_COLLECTION$ = "FeatureCollection";
  $oj$$55$$.$MapProviderUtils$.$_TYPE_GEOMETRY_COLLECTION$ = "GeometryCollection";
  $oj$$55$$.$MapProviderUtils$.$_TYPE_FEATURE$ = "Feature";
  $oj$$55$$.$MapProviderUtils$.$_TYPE_POLYGON$ = "Polygon";
  $oj$$55$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ = "MultiPolygon";
  $oj$$55$$.$MapProviderUtils$.$_ID$ = "id";
  $oj$$55$$.$MapProviderUtils$.$_SHORT_LABEL$ = "shortLabel";
  $oj$$55$$.$MapProviderUtils$.$_LONG_LABEL$ = "longLabel";
  $oj$$55$$.$MapProviderUtils$.$geoJsonToBasemap$ = function $$oj$$55$$$$MapProviderUtils$$$geoJsonToBasemap$$($basemap$$3$$, $layer$$24$$, $mapProvider$$1_type$$102$$) {
    var $labels$$ = {}, $areas$$ = {}, $geoJson$$ = $mapProvider$$1_type$$102$$.geo, $keys$$38$$ = $mapProvider$$1_type$$102$$.propertiesKeys || {};
    $mapProvider$$1_type$$102$$ = $geoJson$$[$oj$$55$$.$MapProviderUtils$.$_TYPE$];
    if ($mapProvider$$1_type$$102$$ === $oj$$55$$.$MapProviderUtils$.$_TYPE_FEATURE_COLLECTION$) {
      $geoJson$$[$oj$$55$$.$MapProviderUtils$.$_FEATURES$].forEach(function($feature$$8$$) {
        $oj$$55$$.$MapProviderUtils$.$parseFeature$($feature$$8$$, $keys$$38$$, $areas$$, $labels$$);
      });
    } else {
      if ($mapProvider$$1_type$$102$$ === $oj$$55$$.$MapProviderUtils$.$_TYPE_FEATURE$) {
        $oj$$55$$.$MapProviderUtils$.$parseFeature$($geoJson$$, $keys$$38$$, $areas$$, $labels$$);
      } else {
        $oj$$55$$.$Logger$.error("GeoJSON type of " + $mapProvider$$1_type$$102$$ + " is not supported. Only Feature and FeatureCollection types are supported.");
        return;
      }
    }
    0 === Object.keys($areas$$).length ? $oj$$55$$.$Logger$.error("No valid Features found in GeoJSON.") : (window[$oj$$55$$.$MapProviderUtils$.$_MANAGER$] || (window[$oj$$55$$.$MapProviderUtils$.$_MANAGER$] = {}, window[$oj$$55$$.$MapProviderUtils$.$_MANAGER$][$oj$$55$$.$MapProviderUtils$.$_UNPROCESSED$] = [[], [], []]), window[$oj$$55$$.$MapProviderUtils$.$_MANAGER$][$oj$$55$$.$MapProviderUtils$.$_UNPROCESSED$][0].push([$basemap$$3$$, $layer$$24$$, $labels$$, $areas$$, null, null, 0]));
  };
  $oj$$55$$.$MapProviderUtils$.$parseFeature$ = function $$oj$$55$$$$MapProviderUtils$$$parseFeature$$($feature$$9_geom$$, $keys$$39_longLabel$$, $areas$$1$$, $labels$$1$$) {
    var $props$$22$$ = $feature$$9_geom$$[$oj$$55$$.$MapProviderUtils$.$_PROPERTIES$];
    $feature$$9_geom$$ = $feature$$9_geom$$[$oj$$55$$.$MapProviderUtils$.$_GEOMETRY$];
    if ($oj$$55$$.$MapProviderUtils$.$isSupportedGeometry$($feature$$9_geom$$)) {
      var $id$$54$$ = $props$$22$$[$keys$$39_longLabel$$[$oj$$55$$.$MapProviderUtils$.$_ID$]];
      if ($id$$54$$) {
        var $shortLabel$$ = $props$$22$$[$keys$$39_longLabel$$[$oj$$55$$.$MapProviderUtils$.$_SHORT_LABEL$]];
        $keys$$39_longLabel$$ = $props$$22$$[$keys$$39_longLabel$$[$oj$$55$$.$MapProviderUtils$.$_LONG_LABEL$]];
        if ($shortLabel$$ || $keys$$39_longLabel$$) {
          $labels$$1$$[$id$$54$$] = [$shortLabel$$, $keys$$39_longLabel$$];
        }
        $areas$$1$$[$id$$54$$] = $oj$$55$$.$MapProviderUtils$.$geomToPath$($feature$$9_geom$$);
      } else {
        $oj$$55$$.$Logger$.warn("No 'id' value found in the mapProvider.propertiesKey object. A Feature's 'properties' object must have an id in the field specified by the mapProvider.propertiesKey.id value.");
      }
    } else {
      $oj$$55$$.$Logger$.warn("A geometry of type " + $feature$$9_geom$$[$oj$$55$$.$MapProviderUtils$.$_TYPE$] + " is not supported and will be skipped.");
    }
  };
  $oj$$55$$.$MapProviderUtils$.$isSupportedGeometry$ = function $$oj$$55$$$$MapProviderUtils$$$isSupportedGeometry$$($geom$$1_type$$103$$) {
    $geom$$1_type$$103$$ = $geom$$1_type$$103$$[$oj$$55$$.$MapProviderUtils$.$_TYPE$];
    return $geom$$1_type$$103$$ === $oj$$55$$.$MapProviderUtils$.$_TYPE_POLYGON$ || $geom$$1_type$$103$$ === $oj$$55$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ ? !0 : !1;
  };
  $oj$$55$$.$MapProviderUtils$.$geomToPath$ = function $$oj$$55$$$$MapProviderUtils$$$geomToPath$$($coords_geom$$2$$) {
    var $path$$17$$ = "", $type$$104$$ = $coords_geom$$2$$[$oj$$55$$.$MapProviderUtils$.$_TYPE$];
    $coords_geom$$2$$ = $coords_geom$$2$$[$oj$$55$$.$MapProviderUtils$.$_COORDINATES$];
    $type$$104$$ === $oj$$55$$.$MapProviderUtils$.$_TYPE_POLYGON$ ? $path$$17$$ = $oj$$55$$.$MapProviderUtils$.$polygonToPath$($coords_geom$$2$$) : $type$$104$$ === $oj$$55$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ && $coords_geom$$2$$.forEach(function($polygonCoords$$) {
      $path$$17$$ += $oj$$55$$.$MapProviderUtils$.$polygonToPath$($polygonCoords$$);
    });
    return $path$$17$$;
  };
  $oj$$55$$.$MapProviderUtils$.$polygonToPath$ = function $$oj$$55$$$$MapProviderUtils$$$polygonToPath$$($coords$$1$$) {
    var $path$$18$$ = "";
    $coords$$1$$.forEach(function($linearArrayCoords$$) {
      $path$$18$$ += $oj$$55$$.$MapProviderUtils$.$linearRingToPath$($linearArrayCoords$$);
    });
    return $path$$18$$;
  };
  $oj$$55$$.$MapProviderUtils$.$linearRingToPath$ = function $$oj$$55$$$$MapProviderUtils$$$linearRingToPath$$($coords$$2$$) {
    var $path$$19$$, $prevX$$, $prevY$$, $prevCmd$$ = "M";
    $coords$$2$$.forEach(function($coord_y$$40$$) {
      var $x$$56$$ = $coord_y$$40$$[0];
      $coord_y$$40$$ = -$coord_y$$40$$[1];
      if ("M" === $prevCmd$$) {
        $prevX$$ = $x$$56$$, $prevY$$ = $coord_y$$40$$, $prevCmd$$ = "x", $path$$19$$ = "M" + $x$$56$$ + " " + $coord_y$$40$$;
      } else {
        var $relX$$ = $x$$56$$ - $prevX$$, $relY$$ = $coord_y$$40$$ - $prevY$$;
        if ("l" == $prevCmd$$) {
          if ($prevX$$ == $x$$56$$) {
            $prevCmd$$ = "v";
            $prevY$$ = $coord_y$$40$$;
            $path$$19$$ = $path$$19$$ + $prevCmd$$ + $relY$$;
            return;
          }
          if ($prevY$$ == $coord_y$$40$$) {
            $prevCmd$$ = "h";
            $prevX$$ = $x$$56$$;
            $path$$19$$ = $path$$19$$ + $prevCmd$$ + $relX$$;
            return;
          }
          $path$$19$$ = $path$$19$$ + " " + $relX$$ + " " + $relY$$;
        } else {
          $prevCmd$$ = "l", $path$$19$$ = $path$$19$$ + "l" + $relX$$ + " " + $relY$$;
        }
        $prevX$$ = $x$$56$$;
        $prevY$$ = $coord_y$$40$$;
      }
    });
    return $path$$19$$ + "Z";
  };
});
