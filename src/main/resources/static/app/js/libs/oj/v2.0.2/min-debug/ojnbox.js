/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtNBox"], function($oj$$36$$, $$$$33$$, $comp$$9$$, $base$$7$$, $dvt$$5$$) {
  $oj$$36$$.$__registerWidget$("oj.ojNBox", $$$$33$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$127$$, $callback$$112$$, $callbackObj$$7$$) {
    return $dvt$$5$$.NBox.newInstance($context$$127$$, $callback$$112$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$38$$) {
    var $subId$$42$$ = $locator$$38$$.subId;
    if ("oj-nbox-cell" == $subId$$42$$) {
      $subId$$42$$ = "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]";
    } else {
      if ("oj-nbox-dialog" == $subId$$42$$) {
        $subId$$42$$ = "dialog";
      } else {
        if ("oj-nbox-dialog-close-button" == $subId$$42$$) {
          $subId$$42$$ = "dialog#closeButton";
        } else {
          if ("oj-nbox-dialog-node" == $subId$$42$$) {
            $subId$$42$$ = "dialog#node[" + $locator$$38$$.index + "]";
          } else {
            if ("oj-nbox-group-node" == $subId$$42$$) {
              $subId$$42$$ = $locator$$38$$.row && $locator$$38$$.column ? "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]#groupNode[" : "groupNode[", $subId$$42$$ += $locator$$38$$.groupCategory + "]";
            } else {
              if ("oj-nbox-node" == $subId$$42$$) {
                var $id$$44_index$$197$$, $subId$$42$$ = "";
                $id$$44_index$$197$$ = $locator$$38$$.id;
                var $auto$$3$$ = this.$_component$.getAutomation();
                $id$$44_index$$197$$ && $auto$$3$$ ? $id$$44_index$$197$$ = $auto$$3$$.getNodeIndexFromId($id$$44_index$$197$$) : ($id$$44_index$$197$$ = $locator$$38$$.index, $locator$$38$$.row && $locator$$38$$.column && ($subId$$42$$ = "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]#"));
                $subId$$42$$ += "node[" + $id$$44_index$$197$$ + "]";
              } else {
                "oj-nbox-overflow" == $subId$$42$$ ? $subId$$42$$ = "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]#overflow" : "oj-nbox-tooltip" == $subId$$42$$ && ($subId$$42$$ = "tooltip");
              }
            }
          }
        }
      }
    }
    return $subId$$42$$;
  }, $_ConvertSubIdToLocator$:function($index$$198_subId$$43$$) {
    var $locator$$39$$ = {};
    if (0 == $index$$198_subId$$43$$.indexOf("node")) {
      $locator$$39$$.subId = "oj-nbox-node";
      $index$$198_subId$$43$$ = this.$_GetFirstIndex$($index$$198_subId$$43$$);
      var $auto$$4_cellIds_poundIndex$$ = this.$_component$.getAutomation();
      $auto$$4_cellIds_poundIndex$$ && ($locator$$39$$.id = $auto$$4_cellIds_poundIndex$$.getNodeIdFromIndex($index$$198_subId$$43$$));
    } else {
      if (0 == $index$$198_subId$$43$$.indexOf("cell")) {
        var $auto$$4_cellIds_poundIndex$$ = this.$_GetFirstBracketedString$($index$$198_subId$$43$$), $commaIndex$$ = $auto$$4_cellIds_poundIndex$$.indexOf(",");
        $locator$$39$$.row = $auto$$4_cellIds_poundIndex$$.substring(0, $commaIndex$$);
        $locator$$39$$.column = $auto$$4_cellIds_poundIndex$$.substring($commaIndex$$ + 1);
        $auto$$4_cellIds_poundIndex$$ = $index$$198_subId$$43$$.indexOf("#");
        0 < $index$$198_subId$$43$$.indexOf("#groupNode") ? ($locator$$39$$.subId = "oj-nbox-group-node", $locator$$39$$.groupCategory = this.$_GetFirstBracketedString$($index$$198_subId$$43$$.substring($auto$$4_cellIds_poundIndex$$))) : 0 < $index$$198_subId$$43$$.indexOf("#node") ? ($locator$$39$$.subId = "oj-nbox-node", $locator$$39$$.index = this.$_GetFirstIndex$($index$$198_subId$$43$$.substring($auto$$4_cellIds_poundIndex$$))) : 0 < $index$$198_subId$$43$$.indexOf("#overflow") ? $locator$$39$$.subId = 
        "oj-nbox-overflow" : $locator$$39$$.subId = "oj-nbox-cell";
      } else {
        0 == $index$$198_subId$$43$$.indexOf("dialog") ? 0 < $index$$198_subId$$43$$.indexOf("#closeButton") ? $locator$$39$$.subId = "oj-nbox-dialog-close-button" : 0 < $index$$198_subId$$43$$.indexOf("#node") ? ($locator$$39$$.subId = "oj-nbox-dialog-node", $locator$$39$$.index = this.$_GetFirstIndex$($index$$198_subId$$43$$)) : $locator$$39$$.subId = "oj-nbox-dialog" : 0 == $index$$198_subId$$43$$.indexOf("groupNode") ? ($locator$$39$$.subId = "oj-nbox-group-node", $locator$$39$$.groupCategory = 
        this.$_GetFirstBracketedString$($index$$198_subId$$43$$)) : "tooltip" == $index$$198_subId$$43$$ && ($locator$$39$$.subId = "oj-nbox-tooltip");
      }
    }
    return $locator$$39$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$.push("oj-nbox");
    return $styleClasses$$11$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$["oj-nbox-columns-title"] = {path:"styleDefaults/columnsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-rows-title"] = {path:"styleDefaults/rowsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-column-label"] = {path:"styleDefaults/columnLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-row-label"] = {path:"styleDefaults/rowLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell"] = {path:"styleDefaults/cellDefaults/style", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell oj-minimized"] = {path:"styleDefaults/cellDefaults/minimizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell oj-maximized"] = {path:"styleDefaults/cellDefaults/maximizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell-label"] = {path:"styleDefaults/cellDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell-countlabel"] = {path:"styleDefaults/cellDefaults/bodyCountLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell-countlabel oj-nbox-cell-header"] = {path:"styleDefaults/cellDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-node"] = {path:"styleDefaults/nodeDefaults/color", property:"background-color"};
    $styleClasses$$12$$["oj-nbox-node oj-hover"] = {path:"styleDefaults/nodeDefaults/hoverColor", property:"border-color"};
    $styleClasses$$12$$["oj-nbox-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$12$$["oj-nbox-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-node-secondarylabel"] = {path:"styleDefaults/nodeDefaults/secondaryLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-node-categorylabel"] = {path:"styleDefaults/__categoryNodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-dialog"] = [{path:"styleDefaults/__drawerDefaults/background", property:"background-color"}, {path:"styleDefaults/__drawerDefaults/borderColor", property:"border-color"}];
    $styleClasses$$12$$["oj-nbox-dialog-label"] = {path:"styleDefaults/__drawerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-dialog-countlabel"] = {path:"styleDefaults/__drawerDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$12$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$37$$ = this._super();
    $ret$$37$$["DvtUtilBundle.NBOX"] = $translations$$14$$.componentName;
    $ret$$37$$["DvtNBoxBundle.HIGHLIGHTED_COUNT"] = $translations$$14$$.highlightedCount;
    $ret$$37$$["DvtNBoxBundle.OTHER"] = $translations$$14$$.labelOther;
    $ret$$37$$["DvtNBoxBundle.GROUP_NODE"] = $translations$$14$$.labelGroup;
    $ret$$37$$["DvtNBoxBundle.SIZE"] = $translations$$14$$.labelSize;
    $ret$$37$$["DvtNBoxBundle.ADDITIONAL_DATA"] = $translations$$14$$.labelAdditionalData;
    return $ret$$37$$;
  }, $_HandleEvent$:function($event$$426_properties$$7$$) {
    if ("adfPropertyChange" === $event$$426_properties$$7$$.type) {
      $event$$426_properties$$7$$ = $event$$426_properties$$7$$.properties;
      for (var $key$$145$$ in $event$$426_properties$$7$$) {
        var $value$$267$$ = $event$$426_properties$$7$$[$key$$145$$];
        "_drawer" == $key$$145$$ ? this.options[$key$$145$$] = $value$$267$$ ? {id:$value$$267$$} : null : "maximizedRow" != $key$$145$$ && "maximizedColumn" != $key$$145$$ || this.$_UserOptionChange$($key$$145$$, $value$$267$$);
      }
    } else {
      this._super($event$$426_properties$$7$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$2$$ = this.options._resources;
    $resources$$2$$.overflow_dwn = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dwn.png"), width:34, height:9};
    $resources$$2$$.overflow_ovr = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ovr.png"), width:34, height:9};
    $resources$$2$$.overflow_ena = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ena.png"), width:34, height:9};
    $resources$$2$$.overflow_dis = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dis.png"), width:34, height:9};
    $resources$$2$$.close_dwn = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_dwn.png"), width:16, height:16};
    $resources$$2$$.close_ovr = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ovr.png"), width:16, height:16};
    $resources$$2$$.close_ena = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ena.png"), width:16, height:16};
  }, getNodeBySubId:function($locator$$40$$) {
    return this._super($locator$$40$$);
  }, getSubIdByNode:function($node$$91$$) {
    return this._super($node$$91$$);
  }, getRowsTitle:function() {
    var $auto$$5$$ = this.$_component$.getAutomation();
    return $auto$$5$$ ? $auto$$5$$.getData("rowsTitle") : null;
  }, getRowCount:function() {
    var $auto$$6$$ = this.$_component$.getAutomation();
    return $auto$$6$$ ? $auto$$6$$.getData("rowCount") : null;
  }, getRow:function($rowValue$$) {
    var $auto$$7$$ = this.$_component$.getAutomation();
    return $auto$$7$$ ? $auto$$7$$.getData("row", $rowValue$$) : null;
  }, getColumnsTitle:function() {
    var $auto$$8$$ = this.$_component$.getAutomation();
    return $auto$$8$$ ? $auto$$8$$.getData("columnsTitle") : null;
  }, getColumnCount:function() {
    var $auto$$9$$ = this.$_component$.getAutomation();
    return $auto$$9$$ ? $auto$$9$$.getData("columnCount") : -1;
  }, getColumn:function($columnValue$$) {
    var $auto$$10$$ = this.$_component$.getAutomation();
    return $auto$$10$$ ? $auto$$10$$.getData("column", $columnValue$$) : null;
  }, getCell:function($rowValue$$1$$, $columnValue$$1$$) {
    var $auto$$11$$ = this.$_component$.getAutomation(), $ret$$38$$ = $auto$$11$$ ? $auto$$11$$.getCell($rowValue$$1$$, $columnValue$$1$$) : null;
    $ret$$38$$ && ($ret$$38$$.getGroupNode = function $$ret$$38$$$getGroupNode$($groupMap$$) {
      return $auto$$11$$.getCellGroupNode($ret$$38$$, $groupMap$$);
    }, $ret$$38$$.getNode = function $$ret$$38$$$getNode$($nodeIndex$$) {
      return $auto$$11$$.getCellNode($ret$$38$$, $nodeIndex$$);
    });
    return $ret$$38$$;
  }, getGroupBehavior:function() {
    var $auto$$12$$ = this.$_component$.getAutomation();
    return $auto$$12$$ ? $auto$$12$$.getData("groupBehavior") : null;
  }, getGroupNode:function($groupCategory$$) {
    return this.$_component$.getAutomation().getGroupNode($groupCategory$$);
  }, getDialog:function() {
    var $auto$$14$$ = this.$_component$.getAutomation(), $ret$$39$$ = $auto$$14$$ ? $auto$$14$$.getDialog() : null;
    $ret$$39$$ && ($ret$$39$$.getNode = function $$ret$$39$$$getNode$($nodeIndex$$1$$) {
      return $auto$$14$$.getDialogNode($nodeIndex$$1$$);
    });
    return $ret$$39$$;
  }, getContextByNode:function($context$$128_node$$92$$) {
    return($context$$128_node$$92$$ = this.getSubIdByNode($context$$128_node$$92$$)) && "oj-nbox-tooltip" !== $context$$128_node$$92$$.subId && "oj-nbox-dialog-close-button" !== $context$$128_node$$92$$.subId && "oj-nbox-overflow" !== $context$$128_node$$92$$.subId ? $context$$128_node$$92$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["cells", "rows", "columns", "nodes"]};
  }});
});
