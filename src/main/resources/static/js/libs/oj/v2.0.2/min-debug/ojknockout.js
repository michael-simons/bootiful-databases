/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "jqueryui-amd/widget"], function($oj$$7$$, $$$$7$$, $ko$$1$$) {
  function $GlobalChangeQueue$$() {
    this.Init();
  }
  function $_extractValueFromChangeEvent$$($event$$60$$, $eventData$$1$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$1$$.value;
    return $nameVal$$;
  }
  function $_extractOptionChange$$($event$$61$$, $eventData$$2$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$2$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$2$$.option] = $eventData$$2$$.value);
    return $nameVal$$1$$;
  }
  function $_getComboboxOptionRenderer$$($bindingContext$$, $template$$) {
    return function($context$$43$$) {
      var $parent$$4$$, $childContext$$;
      $parent$$4$$ = $context$$43$$.parentElement;
      $childContext$$ = $bindingContext$$.createChildContext($context$$43$$.data, null, function($binding$$) {
        $binding$$.$optionContext = $context$$43$$;
      });
      $ko$$1$$.renderTemplate($template$$, $childContext$$, null, $parent$$4$$);
      return null;
    };
  }
  function $_handleComboboxManagedAttributes$$($name$$80$$, $value$$149$$, $bindingContext$$1$$) {
    return "optionTemplate" === $name$$80$$ && null !== $value$$149$$ ? {optionRenderer:$_getComboboxOptionRenderer$$($bindingContext$$1$$, String($value$$149$$))} : null;
  }
  function $_getDataLayerRenderer$$($bindingContext$$2$$, $template$$2$$) {
    return function($context$$44$$) {
      var $model$$56$$ = $bindingContext$$2$$.createChildContext($context$$44$$.data);
      $ko$$1$$.renderTemplate($template$$2$$, $model$$56$$, {afterRender:function($renderedElement$$) {
        $$$$7$$($renderedElement$$)._ojDetectCleanData();
      }}, $context$$44$$.parentElement);
      return null;
    };
  }
  function $_handleManagedAttributes$$($i$$124_name$$81$$, $value$$150$$, $bindingContext$$3$$) {
    if ("areaLayers" === $i$$124_name$$81$$) {
      for ($i$$124_name$$81$$ = 0;$i$$124_name$$81$$ < $value$$150$$.length;$i$$124_name$$81$$++) {
        var $areaDataLayer$$ = $value$$150$$[$i$$124_name$$81$$].areaDataLayer;
        if ($areaDataLayer$$) {
          var $template$$3$$ = $areaDataLayer$$.template;
          null != $template$$3$$ && ($areaDataLayer$$._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$3$$, $template$$3$$));
        }
      }
      return{areaLayers:$value$$150$$};
    }
    if ("pointDataLayers" === $i$$124_name$$81$$) {
      for ($i$$124_name$$81$$ = 0;$i$$124_name$$81$$ < $value$$150$$.length;$i$$124_name$$81$$++) {
        $template$$3$$ = $value$$150$$[$i$$124_name$$81$$].template, null != $template$$3$$ && ($value$$150$$[$i$$124_name$$81$$]._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$3$$, $template$$3$$));
      }
      return{pointDataLayers:$value$$150$$};
    }
    return null;
  }
  function $_getTooltipRenderer$$($bindingContext$$4$$, $template$$4$$) {
    return function($context$$45_elem$$19_model$$57$$) {
      var $dummyDiv$$ = document.createElement("div");
      $dummyDiv$$.style.display = "none";
      $context$$45_elem$$19_model$$57$$ = $bindingContext$$4$$.createChildContext($context$$45_elem$$19_model$$57$$);
      $ko$$1$$.renderTemplate($template$$4$$, $context$$45_elem$$19_model$$57$$, {afterRender:function($renderedElement$$1$$) {
        $$$$7$$($renderedElement$$1$$)._ojDetectCleanData();
      }}, $dummyDiv$$);
      return($context$$45_elem$$19_model$$57$$ = $dummyDiv$$.children[0]) ? ($dummyDiv$$.removeChild($context$$45_elem$$19_model$$57$$), $$$$7$$($dummyDiv$$).remove(), $context$$45_elem$$19_model$$57$$) : null;
    };
  }
  function $_handleManagedTooltipAttribute$$($name$$82$$, $value$$151$$, $bindingContext$$5$$) {
    "tooltip" === $name$$82$$ && $value$$151$$.template && ($value$$151$$.renderer = $_getTooltipRenderer$$($bindingContext$$5$$, $value$$151$$.template));
    return{tooltip:$value$$151$$};
  }
  function $_handleAttributes$$($name$$83$$, $value$$152$$, $bindingContext$$7$$) {
    "pieCenter" === $name$$83$$ && $value$$152$$.template && ($value$$152$$.renderer = $_getCenterRenderer$$($bindingContext$$7$$, $value$$152$$.template));
    return{pieCenter:$value$$152$$};
  }
  function $ComponentChangeTracker$$($component$$6$$, $queue$$) {
    this.Init($component$$6$$, $queue$$);
  }
  function $_getDiagramNodeRenderer$$($bindingContext$$8$$, $template$$6$$) {
    return function($context$$47$$) {
      var $model$$59$$ = $bindingContext$$8$$.createChildContext($context$$47$$.data);
      $ko$$1$$.renderTemplate($template$$6$$, $model$$59$$, {afterRender:function($renderedElement$$3$$) {
        $$$$7$$($renderedElement$$3$$)._ojDetectCleanData();
      }}, $context$$47$$.parentElement);
      return null;
    };
  }
  function $_modifyOjComponentBinding$$($info$$1_node$$25$$, $bindingName$$1$$, $bindingList_wrapped$$3$$, $bindingContext$$11$$, $accessorMap$$2$$) {
    $info$$1_node$$25$$ = $_getBindingValueInfo$$($info$$1_node$$25$$, $bindingName$$1$$, $bindingList_wrapped$$3$$, $bindingContext$$11$$);
    $bindingList_wrapped$$3$$ = $info$$1_node$$25$$.$attrList$;
    if (null == $bindingList_wrapped$$3$$) {
      return $accessorMap$$2$$;
    }
    var $bindingMap$$ = {};
    $_keyValueArrayForEach$$($bindingList_wrapped$$3$$, function($key$$43$$, $value$$154$$) {
      $bindingMap$$[$key$$43$$] = $value$$154$$;
    });
    $accessorMap$$2$$ = $oj$$7$$.$CollectionUtils$.$copyInto$({}, $accessorMap$$2$$);
    $accessorMap$$2$$[$bindingName$$1$$] = $_getOjComponent2BindingAccessor$$($bindingContext$$11$$, $bindingMap$$, $info$$1_node$$25$$.$bindingExpr$);
    return $accessorMap$$2$$;
  }
  function $_getOjComponent2BindingAccessor$$($bindingContext$$12$$, $attributeMap$$, $bindingExpr$$) {
    function $accessorFunc$$() {
      var $accessor$$ = {};
      Object.keys($attributeMap$$).forEach(function($option$$22$$) {
        var $getter$$1$$ = $oj$$7$$.$ComponentBinding$.$__CreateEvaluator$($attributeMap$$[$option$$22$$]).bind(null, $bindingContext$$12$$);
        Object.defineProperty($accessor$$, $option$$22$$, {get:$getter$$1$$, enumerable:!0});
      });
      Object.defineProperty($accessor$$, $oj$$7$$.$ComponentBinding$.$_OPTION_MAP$, {value:$attributeMap$$});
      return $accessor$$;
    }
    $accessorFunc$$.toString = function $$accessorFunc$$$toString$() {
      return $bindingExpr$$;
    };
    return $accessorFunc$$;
  }
  function $_getBindingString$$($match$$14_node$$26$$, $wrapped$$4$$, $bindingContext$$13$$) {
    var $func$$6$$ = $wrapped$$4$$.getBindingsString;
    if ($func$$6$$) {
      return $func$$6$$.call($wrapped$$4$$, $match$$14_node$$26$$, $bindingContext$$13$$);
    }
    switch($match$$14_node$$26$$.nodeType) {
      case 1:
        return $match$$14_node$$26$$.getAttribute("data-bind");
      case 8:
        return($match$$14_node$$26$$ = $match$$14_node$$26$$.nodeValue.match(/^\s*ko(?:\s+([\s\S]+))?\s*$/)) ? $match$$14_node$$26$$[1] : null;
    }
    return null;
  }
  function $_getBindingValueInfo$$($bindingString_keyValueArray_node$$27$$, $bindingName$$2$$, $wrapped$$5$$, $bindingContext$$14$$) {
    var $list$$ = null;
    $bindingString_keyValueArray_node$$27$$ = $_getBindingString$$($bindingString_keyValueArray_node$$27$$, $wrapped$$5$$, $bindingContext$$14$$);
    $bindingString_keyValueArray_node$$27$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingString_keyValueArray_node$$27$$);
    var $selfVal$$ = null;
    $_keyValueArrayForEach$$($bindingString_keyValueArray_node$$27$$, function($key$$44$$, $value$$155$$) {
      return $key$$44$$ === $bindingName$$2$$ ? ($selfVal$$ = $value$$155$$, !0) : !1;
    });
    null != $selfVal$$ && 0 === $selfVal$$.indexOf("{") && ($list$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($selfVal$$));
    return{$attrList$:$list$$, $bindingExpr$:$selfVal$$};
  }
  function $_keyValueArrayForEach$$($array$$14$$, $callback$$83$$) {
    for (var $i$$126$$ = 0;$i$$126$$ < $array$$14$$.length;$i$$126$$++) {
      var $entry_value$$156$$ = $array$$14$$[$i$$126$$], $key$$45$$ = $entry_value$$156$$.key, $entry_value$$156$$ = $entry_value$$156$$.value;
      if (null != $key$$45$$ && null != $entry_value$$156$$ && $callback$$83$$($key$$45$$.trim(), $entry_value$$156$$.trim())) {
        break;
      }
    }
  }
  function $_getCenterRenderer$$($bindingContext$$15$$, $template$$7$$) {
    return function($context$$48_elem$$21_model$$60$$) {
      var $dummyDiv$$2$$ = document.createElement("div");
      $dummyDiv$$2$$.style.display = "none";
      $context$$48_elem$$21_model$$60$$ = $bindingContext$$15$$.createChildContext($context$$48_elem$$21_model$$60$$);
      $ko$$1$$.renderTemplate($template$$7$$, $context$$48_elem$$21_model$$60$$, {afterRender:function($renderedElement$$4$$) {
        $$$$7$$($renderedElement$$4$$)._ojDetectCleanData();
      }}, $dummyDiv$$2$$);
      return($context$$48_elem$$21_model$$60$$ = $dummyDiv$$2$$.children[0]) ? ($dummyDiv$$2$$.removeChild($context$$48_elem$$21_model$$60$$), $$$$7$$($dummyDiv$$2$$).remove(), $context$$48_elem$$21_model$$60$$) : null;
    };
  }
  function $_handleManagedGaugeAttributes$$($name$$87$$, $value$$157$$, $bindingContext$$16$$) {
    "center" === $name$$87$$ && $value$$157$$.template && ($value$$157$$.renderer = $_getCenterRenderer$$($bindingContext$$16$$, $value$$157$$.template));
    return{center:$value$$157$$};
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$17$$, $template$$8$$) {
    return function($context$$49$$) {
      var $parent$$5$$, $childContext$$1$$;
      $parent$$5$$ = $context$$49$$.parentElement;
      $childContext$$1$$ = $bindingContext$$17$$.createChildContext($context$$49$$.data, null, function($binding$$1$$) {
        $binding$$1$$.$key = $context$$49$$.key;
        $binding$$1$$.$metadata = $context$$49$$.metadata;
        $binding$$1$$.$headerContext = $context$$49$$;
      });
      $ko$$1$$.renderTemplate($template$$8$$, $childContext$$1$$, {afterRender:function($renderedElement$$5$$) {
        $$$$7$$($renderedElement$$5$$)._ojDetectCleanData();
      }}, $parent$$5$$);
      return null;
    };
  }
  function $_getDataGridCellRenderer$$($bindingContext$$18$$, $template$$9$$) {
    return function($context$$50$$) {
      var $parent$$6$$, $childContext$$2$$;
      $parent$$6$$ = $context$$50$$.parentElement;
      $childContext$$2$$ = $bindingContext$$18$$.createChildContext($context$$50$$.data, null, function($binding$$2$$) {
        $binding$$2$$.$keys = $context$$50$$.keys;
        $binding$$2$$.$metadata = $context$$50$$.metadata;
        $binding$$2$$.$cellContext = $context$$50$$;
      });
      $ko$$1$$.renderTemplate($template$$9$$, $childContext$$2$$, {afterRender:function($renderedElement$$6$$) {
        $$$$7$$($renderedElement$$6$$)._ojDetectCleanData();
      }}, $parent$$6$$);
      return null;
    };
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$19$$, $type$$77$$, $template$$10$$) {
    var $rendererOption$$ = {};
    (function($template$$11$$, $type$$78$$) {
      $rendererOption$$ = function $$rendererOption$$$($params$$14$$) {
        var $childContext$$3$$ = null, $parentElement$$ = null;
        "header" == $type$$78$$ ? ($childContext$$3$$ = $bindingContext$$19$$.createChildContext(null, null, function($binding$$3$$) {
          $binding$$3$$.$columnIndex = $params$$14$$.columnIndex;
          $binding$$3$$.$headerContext = $params$$14$$.headerContext;
          $binding$$3$$.$data = $params$$14$$.data;
        }), $parentElement$$ = $params$$14$$.headerContext.parentElement) : "cell" == $type$$78$$ && ($childContext$$3$$ = $bindingContext$$19$$.createChildContext($params$$14$$.row, null, function($binding$$4$$) {
          $binding$$4$$.$columnIndex = $params$$14$$.columnIndex;
          $binding$$4$$.$cellContext = $params$$14$$.cellContext;
        }), $parentElement$$ = $params$$14$$.cellContext.parentElement);
        "footer" == $type$$78$$ && ($childContext$$3$$ = $bindingContext$$19$$.createChildContext(null, null, function($binding$$5$$) {
          $binding$$5$$.$columnIndex = $params$$14$$.columnIndex;
          $binding$$5$$.$footerContext = $params$$14$$.footerContext;
        }), $parentElement$$ = $params$$14$$.footerContext.parentElement);
        $ko$$1$$.renderTemplate($template$$11$$, $childContext$$3$$, {afterRender:function($renderedElement$$7$$) {
          $$$$7$$($renderedElement$$7$$)._ojDetectCleanData();
        }}, $parentElement$$, "replaceNode");
      };
    })($template$$10$$, $type$$77$$);
    return $rendererOption$$;
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$20$$, $template$$12$$) {
    return function($params$$15$$) {
      var $childContext$$4$$ = $bindingContext$$20$$.createChildContext($params$$15$$.row, null, function($binding$$6$$) {
        $binding$$6$$.$rowContext = $params$$15$$.rowContext;
      });
      $ko$$1$$.renderTemplate($template$$12$$, $childContext$$4$$, {afterRender:function($renderedElement$$8$$) {
        $$$$7$$($renderedElement$$8$$)._ojDetectCleanData();
      }}, $params$$15$$.rowContext.parentElement, "replaceNode");
    };
  }
  function $_getListViewItemRenderer$$($bindingContext$$21$$, $template$$13$$) {
    return function($context$$51$$) {
      var $parent$$7$$, $childContext$$5$$;
      $parent$$7$$ = $context$$51$$.parentElement;
      $childContext$$5$$ = $bindingContext$$21$$.createChildContext($context$$51$$.data, null, function($binding$$7$$) {
        $binding$$7$$.$itemContext = $context$$51$$;
      });
      $ko$$1$$.renderTemplate($template$$13$$, $childContext$$5$$, {afterRender:function($renderedElement$$9$$) {
        $$$$7$$($renderedElement$$9$$)._ojDetectCleanData();
      }}, $parent$$7$$, "replaceNode");
      return null;
    };
  }
  function $_handleListViewManagedAttributes$$($name$$88_template$$14$$, $value$$158$$, $bindingContext$$22$$) {
    return "item" == $name$$88_template$$14$$ ? ($name$$88_template$$14$$ = $value$$158$$.template, null != $name$$88_template$$14$$ && ($value$$158$$.renderer = $_getListViewItemRenderer$$($bindingContext$$22$$, $name$$88_template$$14$$)), {item:$value$$158$$}) : null;
  }
  $oj$$7$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$7$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.Init = function $$GlobalChangeQueue$$$$Init$() {
    $GlobalChangeQueue$$.$superclass$.Init.call(this);
    this.$_trackers$ = [];
    this.$_queue$ = [];
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($tracker$$3$$) {
    -1 === this.$_trackers$.indexOf($tracker$$3$$) && (this.$_trackers$.push($tracker$$3$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$7$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)));
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$();
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$127_record$$3$$;
    this.$_delayTimer$ = null;
    var $trackers$$ = this.$_trackers$;
    this.$_trackers$ = [];
    for ($i$$127_record$$3$$ = 0;$i$$127_record$$3$$ < $trackers$$.length;$i$$127_record$$3$$++) {
      var $tracker$$4$$ = $trackers$$[$i$$127_record$$3$$];
      this.$_queue$.push({$tracker$:$tracker$$4$$, $changes$:$tracker$$4$$.$flushChanges$()});
    }
    for (;0 < this.$_queue$.length;) {
      $i$$127_record$$3$$ = this.$_queue$.shift(), $i$$127_record$$3$$.$tracker$.$applyChanges$($i$$127_record$$3$$.$changes$);
    }
  };
  $oj$$7$$.$ComponentBinding$ = function $$oj$$7$$$$ComponentBinding$$($name$$89$$, $options$$209$$) {
    this.Init($name$$89$$, $options$$209$$);
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$7$$.$ComponentBinding$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ComponentBinding$, $oj$$7$$.$Object$, "oj.ComponentBinding");
  $oj$$7$$.$ComponentBinding$.create = function $$oj$$7$$$$ComponentBinding$$create$($name$$90$$, $options$$210$$) {
    if (null == $name$$90$$) {
      throw "Binding name is required!";
    }
    var $instance$$14$$ = new $oj$$7$$.$ComponentBinding$($name$$90$$, $options$$210$$), $handlers$$5$$ = $ko$$1$$.bindingHandlers, $i$$128$$, $names$$1$$ = Array.isArray($name$$90$$) ? $name$$90$$ : [$name$$90$$];
    for ($i$$128$$ = 0;$i$$128$$ < $names$$1$$.length;$i$$128$$++) {
      var $nm$$ = $names$$1$$[$i$$128$$];
      $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$.push($nm$$);
      $handlers$$5$$[$nm$$] = $instance$$14$$;
    }
    return $instance$$14$$;
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$7$$.$ComponentBinding$.create, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$7$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$7$$.$ComponentBinding$.$_INSTANCE$;
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$7$$.$ComponentBinding$.$getDefaultInstance$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$9$$) {
    var $forName$$ = $opts$$9$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$, $managers$$ = this.$_managedAttrOptions$[$forName$$] || [];
    $managers$$.push($opts$$9$$);
    this.$_managedAttrOptions$[$forName$$] = $managers$$;
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$7$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$7$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$7$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$();
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$7$$.$ComponentBinding$.$deliverChanges$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.Init = function $$oj$$7$$$$ComponentBinding$$$Init$($names$$2$$, $options$$211$$) {
    $oj$$7$$.$ComponentBinding$.$superclass$.Init.call(this);
    "string" === typeof $options$$211$$ && ($options$$211$$ = {componentName:$options$$211$$});
    this.$_bindingOptions$ = $options$$211$$ || {};
    Array.isArray($names$$2$$);
    this.init = this._init.bind(this);
    this.update = this.$_update$.bind(this);
    this.$_managedAttrOptions$ = {};
  };
  $oj$$7$$.$ComponentBinding$.prototype._init = function $$oj$$7$$$$ComponentBinding$$$_init$($element$$43$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$23$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$23$$, $element$$43$$);
    return{controlsDescendantBindings:!0};
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$7$$$$ComponentBinding$$$$_update$$($element$$44$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $viewModel$$2$$, $bindingContext$$24$$) {
    function $cleanup$$($destroyComponent$$) {
      $componentComputeds$$.forEach(function($computed$$) {
        $computed$$.dispose();
      });
      $componentComputeds$$ = [];
      $destroyComponent$$ && $component$$7$$ && ($component$$7$$("destroy"), $component$$7$$ = null);
      $changeTracker$$ && ($changeTracker$$.$dispose$(), $changeTracker$$ = null);
      $jelem$$4$$.off($oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$);
    }
    function $createComponent$$($componentName$$3$$, $nameOption$$, $bindingValue$$) {
      if (null != $componentName$$3$$) {
        var $comp$$2$$ = $jelem$$4$$[$componentName$$3$$];
        if ("function" !== typeof $comp$$2$$) {
          $oj$$7$$.$Logger$.error("Component %s is not found", $componentName$$3$$);
        } else {
          $comp$$2$$ = $comp$$2$$.bind($jelem$$4$$);
          $changeTracker$$ = new $ComponentChangeTracker$$($comp$$2$$, $oj$$7$$.$ComponentBinding$.$_changeQueue$);
          var $specifiedOptions$$ = Object.keys($bindingValue$$).filter(function($value$$159$$) {
            return!(null == $value$$159$$ || $value$$159$$ === $nameOption$$);
          });
          $component$$7$$ = this.$_initComponent$($element$$44$$, {$component$:$comp$$2$$, $changeTracker$:$changeTracker$$, $componentName$:$componentName$$3$$, $specifiedOptions$:$specifiedOptions$$, $computeds$:$componentComputeds$$, $valueAccessor$:function() {
            return $bindingValue$$;
          }, $allBindingsAccessor$:$allBindingsAccessor$$1$$, $bindingContext$:$bindingContext$$24$$, $destroyCallback$:function() {
            $component$$7$$ = null;
          }});
        }
      }
    }
    var $componentComputeds$$ = [], $stage$$ = 0, $component$$7$$, $changeTracker$$, $jelem$$4$$ = $$$$7$$($element$$44$$);
    $ko$$1$$.ignoreDependencies(function() {
      $ko$$1$$.computed(function() {
        var $bindingValue$$1$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$1$$());
        "object" !== typeof $bindingValue$$1$$ && $oj$$7$$.$Logger$.error("ojComponent binding should evaluate to an object");
        var $componentName$$4$$ = this.$_bindingOptions$.componentName, $nameOpt$$, $nameOptionFound$$ = !1;
        if (null == $componentName$$4$$ & null != $bindingValue$$1$$) {
          for (var $name_attrs$$ = [$oj$$7$$.$ComponentBinding$.$_COMPONENT_OPTION$, "role"], $n$$20$$ = 0;!$nameOptionFound$$ && $n$$20$$ < $name_attrs$$.length;$n$$20$$++) {
            $nameOpt$$ = $name_attrs$$[$n$$20$$], $nameOpt$$ in $bindingValue$$1$$ && ($nameOptionFound$$ = !0, $componentName$$4$$ = $bindingValue$$1$$[$nameOpt$$]);
          }
          $nameOptionFound$$ || $oj$$7$$.$Logger$.error("component attribute is required for the ojComponent binding");
          $componentName$$4$$ = $ko$$1$$.utils.unwrapObservable($componentName$$4$$);
        }
        0 == $stage$$ ? $stage$$ = 1 : $ko$$1$$.ignoreDependencies($cleanup$$, this, [!0]);
        $ko$$1$$.ignoreDependencies($createComponent$$, this, [$componentName$$4$$, $nameOpt$$, $bindingValue$$1$$]);
      }, this, {disposeWhenNodeIsRemoved:$element$$44$$});
    }, this);
    $ko$$1$$.utils.domNodeDisposal.addDisposeCallback($element$$44$$, $cleanup$$.bind(this, !1));
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$7$$$$ComponentBinding$$$$_initComponent$$($element$$45$$, $ctx$$) {
    function $propertyReadFunc$$() {
      var $initProps_prop$$57_updateProps$$ = this.$_property$, $updateKeys_value$$160$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($ctx$$.$valueAccessor$()[$initProps_prop$$57_updateProps$$]);
      if (0 === $stage$$1$$) {
        var $initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$];
        null != $initFunc_k$$5_managedPropEntry_updateFunc$$ ? ($specifiedManagedAttrs$$[$initProps_prop$$57_updateProps$$] = $initFunc_k$$5_managedPropEntry_updateFunc$$, $initFunc_k$$5_managedPropEntry_updateFunc$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$.$init$, null != $initFunc_k$$5_managedPropEntry_updateFunc$$ && ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $updateKeys_value$$160$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, 
        $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$) || {}, $oj$$7$$.$CollectionUtils$.$copyInto$($resolvedInitialOptions$$, $initProps_prop$$57_updateProps$$))) : $resolvedInitialOptions$$[$initProps_prop$$57_updateProps$$] = $updateKeys_value$$160$$;
      } else {
        if (!$disposed$$) {
          if (null != $managedAttrMap$$[$initProps_prop$$57_updateProps$$]) {
            if ($initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$].update, null != $initFunc_k$$5_managedPropEntry_updateFunc$$) {
              for ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $updateKeys_value$$160$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$) || {}, $updateKeys_value$$160$$ = Object.keys($initProps_prop$$57_updateProps$$), $initFunc_k$$5_managedPropEntry_updateFunc$$ = 0;$initFunc_k$$5_managedPropEntry_updateFunc$$ < $updateKeys_value$$160$$.length;$initFunc_k$$5_managedPropEntry_updateFunc$$++) {
                var $p$$3$$ = $updateKeys_value$$160$$[$initFunc_k$$5_managedPropEntry_updateFunc$$];
                $ctx$$.$changeTracker$.$addChange$($p$$3$$, $initProps_prop$$57_updateProps$$[$p$$3$$]);
              }
            }
          } else {
            $ctx$$.$changeTracker$.$addChange$($initProps_prop$$57_updateProps$$, $updateKeys_value$$160$$);
          }
        }
      }
    }
    function $destroyListener$$($destroyCallback_evt$$19$$) {
      $destroyCallback_evt$$19$$.target && $destroyCallback_evt$$19$$.target == $element$$45$$ && ($ctx$$.$destroyCallback$(), ($destroyCallback_evt$$19$$ = $self$$50$$.$_bindingOptions$.beforeDestroy) && $destroyCallback_evt$$19$$($element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$), $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!1, $specifiedManagedAttrs$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, 
      $ctx$$.$bindingContext$), $disposed$$ = !0, $ctx$$.$changeTracker$.$dispose$(), $element$$45$$.removeEventListener("_ojDestroy", $destroyListener$$));
    }
    var $disposed$$ = !1, $stage$$1$$ = 0, $specifiedManagedAttrs$$ = {}, $createCallback_jelem$$5_mutationOptions$$ = $$$$7$$($element$$45$$), $comp$$3$$ = $ctx$$.$component$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = $ctx$$.$componentName$, $self$$50$$ = this;
    $element$$45$$.addEventListener("_ojDestroy", $destroyListener$$);
    var $managedAttrMap$$ = $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $ctx$$.$specifiedOptions$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$), $defaultInstance_m$$18$$ = $oj$$7$$.$ComponentBinding$.$getDefaultInstance$();
    this !== $defaultInstance_m$$18$$ && ($componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = $defaultInstance_m$$18$$.$_getManagedAttributes$($ctx$$.$specifiedOptions$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$), $oj$$7$$.$CollectionUtils$.$copyInto$($componentName$$5_defaultManagedMap_k$$4_mutationKeys$$, $managedAttrMap$$), $managedAttrMap$$ = $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$);
    for (var $resolvedInitialOptions$$ = {}, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = 0;$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ < $ctx$$.$specifiedOptions$.length;$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$++) {
      $ctx$$.$computeds$.push($ko$$1$$.computed($propertyReadFunc$$, {$_property$:$ctx$$.$specifiedOptions$[$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$]}));
    }
    $stage$$1$$ = 1;
    $oj$$7$$.$ComponentBinding$.$_registerWritebacks$($createCallback_jelem$$5_mutationOptions$$, $ctx$$);
    $createCallback_jelem$$5_mutationOptions$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($resolvedInitialOptions$$);
    $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = Object.keys($createCallback_jelem$$5_mutationOptions$$);
    $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$.forEach(function($mutationOpt$$) {
      delete $resolvedInitialOptions$$[$mutationOpt$$];
    });
    $comp$$3$$($resolvedInitialOptions$$);
    for ($defaultInstance_m$$18$$ = 0;$defaultInstance_m$$18$$ < $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$.length;$defaultInstance_m$$18$$++) {
      var $mo$$ = $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$[$defaultInstance_m$$18$$];
      $comp$$3$$("option", $mo$$, $createCallback_jelem$$5_mutationOptions$$[$mo$$]);
    }
    ($createCallback_jelem$$5_mutationOptions$$ = this.$_bindingOptions$.afterCreate) && $createCallback_jelem$$5_mutationOptions$$($element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$);
    $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!0, $specifiedManagedAttrs$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$);
    $resolvedInitialOptions$$ = null;
    return $comp$$3$$;
  };
  $oj$$7$$.$ComponentBinding$.$__CreateEvaluator$ = function $$oj$$7$$$$ComponentBinding$$$__CreateEvaluator$$($expr$$3$$) {
    return new Function("$context", "with($context){with($data||{}){return " + $expr$$3$$ + ";}}");
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$_getManagedAttributes$$($specifiedOptions$$1$$, $componentName$$6$$) {
    return $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $specifiedOptions$$1$$, $componentName$$6$$);
  };
  $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $specifiedOptions$$2$$, $componentName$$7_k$$6_proto$$4_widgetClass$$) {
    function $traverseOptions$$($name$$91$$, $followLinks$$) {
      var $managers$$1$$ = $optionMap$$[$name$$91$$];
      if (null != $managers$$1$$) {
        for (var $n$$21$$ = $managers$$1$$.length - 1;0 <= $n$$21$$;$n$$21$$--) {
          var $opt$$17_parents$$ = $managers$$1$$[$n$$21$$];
          null != $opt$$17_parents$$.attributes && $applicableOptions$$.push($opt$$17_parents$$);
          if ($followLinks$$ && ($opt$$17_parents$$ = $opt$$17_parents$$.use, null != $opt$$17_parents$$)) {
            for (var $opt$$17_parents$$ = Array.isArray($opt$$17_parents$$) ? $opt$$17_parents$$ : [$opt$$17_parents$$], $i$$129$$ = 0;$i$$129$$ < $opt$$17_parents$$.length;$i$$129$$++) {
              $traverseOptions$$($opt$$17_parents$$[$i$$129$$], !0);
            }
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$7_k$$6_proto$$4_widgetClass$$, !0);
    $componentName$$7_k$$6_proto$$4_widgetClass$$ = $$$$7$$.oj[$componentName$$7_k$$6_proto$$4_widgetClass$$];
    if (null != $componentName$$7_k$$6_proto$$4_widgetClass$$) {
      for ($componentName$$7_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$7_k$$6_proto$$4_widgetClass$$.prototype);null != $componentName$$7_k$$6_proto$$4_widgetClass$$ && "oj" === $componentName$$7_k$$6_proto$$4_widgetClass$$.namespace;) {
        $traverseOptions$$($componentName$$7_k$$6_proto$$4_widgetClass$$.widgetName, !0), $componentName$$7_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$7_k$$6_proto$$4_widgetClass$$);
      }
    }
    $traverseOptions$$("@global", !1);
    if (0 < $applicableOptions$$.length) {
      for ($componentName$$7_k$$6_proto$$4_widgetClass$$ = 0;$componentName$$7_k$$6_proto$$4_widgetClass$$ < $specifiedOptions$$2$$.length;$componentName$$7_k$$6_proto$$4_widgetClass$$++) {
        for (var $attr$$13$$ = $specifiedOptions$$2$$[$componentName$$7_k$$6_proto$$4_widgetClass$$], $l$$2$$ = 0;$l$$2$$ < $applicableOptions$$.length;$l$$2$$++) {
          var $opts$$10$$ = $applicableOptions$$[$l$$2$$];
          if (0 <= $opts$$10$$.attributes.indexOf($attr$$13$$)) {
            $managedAttrMap$$1$$[$attr$$13$$] = {$init$:$opts$$10$$.init, update:$opts$$10$$.update, $afterCreate$:$opts$$10$$.afterCreate, $beforeDestroy$:$opts$$10$$.beforeDestroy};
            break;
          }
        }
      }
    }
    return $managedAttrMap$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".oj_ko";
  $oj$$7$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$6$$, $ctx$$1$$) {
    for (var $eventInfos_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $cachedWriterFunctionEvaluators$$ = {}, $i$$130_keys$$9$$ = Object.keys($eventInfos_writablePropMap$$), $info$$2_k$$7$$ = 0;$info$$2_k$$7$$ < $i$$130_keys$$9$$.length;$info$$2_k$$7$$++) {
      var $pattern$$12$$ = $i$$130_keys$$9$$[$info$$2_k$$7$$];
      if ($ctx$$1$$.$componentName$.match($pattern$$12$$)) {
        $eventInfos_writablePropMap$$ = $eventInfos_writablePropMap$$[$pattern$$12$$];
        for ($i$$130_keys$$9$$ = 0;$i$$130_keys$$9$$ < $eventInfos_writablePropMap$$.length;$i$$130_keys$$9$$++) {
          $info$$2_k$$7$$ = $eventInfos_writablePropMap$$[$i$$130_keys$$9$$], $jelem$$6$$.on($info$$2_k$$7$$.event + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info$$2_k$$7$$.getter}, function($evt$$20$$, $data$$53$$) {
            $evt$$20$$.stopPropagation();
            var $nameValues$$ = $evt$$20$$.data.$getter$($evt$$20$$, $data$$53$$), $accessor$$1$$ = $ctx$$1$$.$valueAccessor$(), $name$$92$$;
            for ($name$$92$$ in $nameValues$$) {
              $ctx$$1$$.$changeTracker$.$suspend$($name$$92$$);
              try {
                if (0 <= $ctx$$1$$.$specifiedOptions$.indexOf($name$$92$$)) {
                  var $optionMap$$1$$ = $accessor$$1$$[$oj$$7$$.$ComponentBinding$.$_OPTION_MAP$];
                  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$($name$$92$$, $accessor$$1$$[$name$$92$$], $nameValues$$[$name$$92$$], null == $optionMap$$1$$ ? null : $optionMap$$1$$[$name$$92$$], $ctx$$1$$.$bindingContext$, $cachedWriterFunctionEvaluators$$);
                }
              } finally {
                $ctx$$1$$.$changeTracker$.$resume$($name$$92$$);
              }
            }
          });
        }
        break;
      }
    }
  };
  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$7$$$$ComponentBinding$$$_writeValueToProperty$$($func$$7_name$$93$$, $inContextWriter_target$$78$$, $value$$161$$, $propertyExpression_writerExpr$$, $bindingContext$$25$$, $cachedWriterFunctionEvaluators$$1$$) {
    null != $inContextWriter_target$$78$$ && $ko$$1$$.isObservable($inContextWriter_target$$78$$) ? $ko$$1$$.isWriteableObservable($inContextWriter_target$$78$$) && $inContextWriter_target$$78$$($value$$161$$) : ($func$$7_name$$93$$ in $cachedWriterFunctionEvaluators$$1$$ || ($inContextWriter_target$$78$$ = null, $propertyExpression_writerExpr$$ = $oj$$7$$.$ExpressionUtils$.$getPropertyWriterExpression$($propertyExpression_writerExpr$$), null != $propertyExpression_writerExpr$$ && ($inContextWriter_target$$78$$ = 
    $oj$$7$$.$ComponentBinding$.$__CreateEvaluator$($propertyExpression_writerExpr$$)), $cachedWriterFunctionEvaluators$$1$$[$func$$7_name$$93$$] = $inContextWriter_target$$78$$), ($func$$7_name$$93$$ = $cachedWriterFunctionEvaluators$$1$$[$func$$7_name$$93$$]) && $func$$7_name$$93$$($bindingContext$$25$$)($value$$161$$));
  };
  $oj$$7$$.$ComponentBinding$.$_toJS$ = function $$oj$$7$$$$ComponentBinding$$$_toJS$$($prop$$58$$) {
    $prop$$58$$ = $ko$$1$$.utils.unwrapObservable($prop$$58$$);
    (Array.isArray($prop$$58$$) || $oj$$7$$.$CollectionUtils$.isPlainObject($prop$$58$$)) && $prop$$58$$.ojConvertToJS && ($prop$$58$$ = $ko$$1$$.toJS($prop$$58$$));
    return $prop$$58$$;
  };
  $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$ = function $$oj$$7$$$$ComponentBinding$$$_extractDotNotationOptions$$($options$$212$$) {
    for (var $mutationOptions$$1$$ = {}, $keys$$10$$ = Object.keys($options$$212$$), $k$$8$$ = 0;$k$$8$$ < $keys$$10$$.length;$k$$8$$++) {
      var $opt$$18$$ = $keys$$10$$[$k$$8$$];
      0 <= $opt$$18$$.indexOf(".") && ($mutationOptions$$1$$[$opt$$18$$] = $options$$212$$[$opt$$18$$]);
    }
    return $mutationOptions$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$ = function $$oj$$7$$$$ComponentBinding$$$_deliverCreateDestroyEventToManagedProps$$($isCreate$$, $managedAttrMap$$2$$, $element$$46$$, $comp$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$26$$) {
    for (var $props$$7$$ = Object.keys($managedAttrMap$$2$$), $i$$131$$ = 0;$i$$131$$ < $props$$7$$.length;$i$$131$$++) {
      var $prop$$59$$ = $props$$7$$[$i$$131$$], $callback$$84_entry$$1$$ = $managedAttrMap$$2$$[$prop$$59$$];
      ($callback$$84_entry$$1$$ = $isCreate$$ ? $callback$$84_entry$$1$$.$afterCreate$ : $callback$$84_entry$$1$$.$beforeDestroy$) && $callback$$84_entry$$1$$($prop$$59$$, $element$$46$$, $comp$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$26$$);
    }
  };
  $oj$$7$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$7$$.$ComponentBinding$.$__getKnockoutVersion$ = function $$oj$$7$$$$ComponentBinding$$$__getKnockoutVersion$$() {
    return $oj$$7$$.$__isAmdLoaderPresent$() && $ko$$1$$ ? $ko$$1$$.version : "";
  };
  $oj$$7$$.$ComponentBinding$.$_isNameRegistered$ = function $$oj$$7$$$$ComponentBinding$$$_isNameRegistered$$($bindingName$$3$$) {
    return 0 <= $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$.indexOf($bindingName$$3$$);
  };
  $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$ = [];
  $oj$$7$$.$ComponentBinding$.$_COMPONENT_OPTION$ = "component";
  $oj$$7$$.$ComponentBinding$.$_OPTION_MAP$ = "_ojOptions";
  (function() {
    var $wrapped$$6$$ = $ko$$1$$.removeNode;
    $ko$$1$$.removeNode = function $$ko$$1$$$removeNode$($node$$28$$) {
      var $ojComponents$$ = $oj$$7$$.Components;
      $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$($node$$28$$);
      try {
        $wrapped$$6$$($node$$28$$);
      } finally {
        $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$(null);
      }
    };
  })();
  $oj$$7$$.$ComponentBinding$.$_INSTANCE$ = $oj$$7$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  $$$$7$$.widget("oj._ojDetectCleanData", {_destroy:function() {
    var $disposal$$, $oldCleanExternal$$;
    $disposal$$ = $ko$$1$$.utils.domNodeDisposal;
    $oldCleanExternal$$ = $disposal$$.cleanExternalData;
    $disposal$$.cleanExternalData = function $$disposal$$$cleanExternalData$() {
    };
    try {
      $ko$$1$$.cleanNode(this.element[0]);
    } finally {
      $disposal$$.cleanExternalData = $oldCleanExternal$$;
    }
  }});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["optionTemplate"], init:function($name$$95_result$$16$$, $value$$162$$, $element$$47$$, $widgetConstructor$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$27$$) {
    $name$$95_result$$16$$ = $_handleComboboxManagedAttributes$$($name$$95_result$$16$$, $value$$162$$, $bindingContext$$27$$);
    if (null !== $name$$95_result$$16$$) {
      return $name$$95_result$$16$$;
    }
  }, update:function($name$$96$$, $value$$163$$, $element$$48$$, $widgetConstructor$$1$$, $valueAccessor$$4$$, $allBindingsAccessor$$4$$, $bindingContext$$28$$) {
    return $_handleComboboxManagedAttributes$$($name$$96$$, $value$$163$$, $bindingContext$$28$$);
  }, "for":"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojSelect", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputSearch", use:"ComboboxOptionRenderer"});
  $oj$$7$$.ResponsiveKnockoutUtils = {};
  $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createMediaQueryObservable$($query$$4_queryString$$1$$) {
    if (null == $query$$4_queryString$$1$$) {
      throw Error("oj.ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");
    }
    $query$$4_queryString$$1$$ = window.matchMedia($query$$4_queryString$$1$$);
    var $observable$$ = $ko$$1$$.observable($query$$4_queryString$$1$$.matches);
    $query$$4_queryString$$1$$.addListener(function($query$$5$$) {
      $observable$$($query$$5$$.matches);
    });
    -1 != navigator.userAgent.indexOf("WebKit") && -1 == navigator.userAgent.indexOf("Chrome") && $$$$7$$(window).resize(function() {
      0 === $$$$7$$("body").has(".oj-webkit-bug-123293").length && $$$$7$$("body").append('\x3cdiv aria-hidden\x3d"true" class\x3d"oj-helper-hidden-accessible oj-webkit-bug-123293"\x3e');
      $$$$7$$(".oj-webkit-bug-123293").text((new Date).getMilliseconds().toString());
    });
    return $observable$$;
  };
  $oj$$7$$.ResponsiveKnockoutUtils.createScreenRangeObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createScreenRangeObservable$() {
    var $xxlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XXL_UP), $xlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XL_UP), $lgQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP), $mdQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP), $smQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_UP), 
    $xxlObservable$$ = null == $xxlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xxlQuery$$), $xlObservable$$ = null == $xlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xlQuery$$), $lgObservable$$ = null == $lgQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($lgQuery$$), $mdObservable$$ = null == $mdQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($mdQuery$$), $smObservable$$ = 
    null == $smQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($smQuery$$);
    return $ko$$1$$.computed(function() {
      if ($xxlObservable$$ && $xxlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XXL;
      }
      if ($xlObservable$$ && $xlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XL;
      }
      if ($lgObservable$$ && $lgObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.LG;
      }
      if ($mdObservable$$ && $mdObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.MD;
      }
      if ($smObservable$$ && $smObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.SM;
      }
      throw Error(" NO MATCH in oj.ResponsiveKnockoutUtils.createScreenRangeObservable");
    });
  };
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["areaLayers", "pointDataLayers"], init:function($name$$97$$, $value$$164$$, $element$$49$$, $widgetConstructor$$2$$, $valueAccessor$$5$$, $allBindingsAccessor$$5$$, $bindingContext$$29$$) {
    return $_handleManagedAttributes$$($name$$97$$, $value$$164$$, $bindingContext$$29$$);
  }, update:function($name$$98$$, $value$$165$$, $element$$50$$, $widgetConstructor$$3$$, $valueAccessor$$6$$, $allBindingsAccessor$$6$$, $bindingContext$$30$$) {
    return $_handleManagedAttributes$$($name$$98$$, $value$$165$$, $bindingContext$$30$$);
  }, "for":"ojThematicMap"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["tooltip"], init:function($name$$99$$, $value$$166$$, $element$$51$$, $widgetConstructor$$4$$, $valueAccessor$$7$$, $allBindingsAccessor$$7$$, $bindingContext$$31$$) {
    return $_handleManagedTooltipAttribute$$($name$$99$$, $value$$166$$, $bindingContext$$31$$);
  }, update:function($name$$100$$, $value$$167$$, $element$$52$$, $widgetConstructor$$5$$, $valueAccessor$$8$$, $allBindingsAccessor$$8$$, $bindingContext$$32$$) {
    return $_handleManagedTooltipAttribute$$($name$$100$$, $value$$167$$, $bindingContext$$32$$);
  }, "for":"tooltipOptionRenderer"});
  (function() {
    for (var $componentsArray$$ = "ojChart ojDiagram ojNBox ojPictoChart ojSunburst ojTagCloud ojThematicMap ojTreemap ojDialGauge ojLedGauge ojRatingGauge ojSparkChart ojStatusMeterGauge".split(" "), $i$$132$$ = 0;$i$$132$$ < $componentsArray$$.length;$i$$132$$++) {
      $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":$componentsArray$$[$i$$132$$], use:"tooltipOptionRenderer"});
    }
  })();
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["pieCenter"], init:function($name$$101$$, $value$$168$$, $element$$53$$, $widgetConstructor$$6$$, $valueAccessor$$9$$, $allBindingsAccessor$$9$$, $bindingContext$$33$$) {
    return $_handleAttributes$$($name$$101$$, $value$$168$$, $bindingContext$$33$$);
  }, update:function($name$$102$$, $value$$169$$, $element$$54$$, $widgetConstructor$$7$$, $valueAccessor$$10$$, $allBindingsAccessor$$10$$, $bindingContext$$34$$) {
    return $_handleAttributes$$($name$$102$$, $value$$169$$, $bindingContext$$34$$);
  }, "for":"ojChart"});
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$55$$, $valueAccessor$$11$$) {
    function $launch$$1$$($event$$64$$, $eventType$$29_openOptions$$1$$, $pressHold$$1$$) {
      $isPressHold$$1$$ = $pressHold$$1$$;
      var $menu$$3$$ = $getContextMenu$$();
      if ($isPressHold$$1$$) {
        $$element$$.one("touchend.ojContextMenu", function() {
          $menu$$3$$.$__contextMenuPressHoldJustEnded$(!0);
          setTimeout(function() {
            $menu$$3$$.$__contextMenuPressHoldJustEnded$(!1);
          }, 50);
        });
      }
      "touchstart" === $doubleOpenType$$1$$ && "contextmenu" === $event$$64$$.type || "contextmenu" === $doubleOpenType$$1$$ && "touchstart" === $event$$64$$.type ? ($doubleOpenType$$1$$ = null, clearTimeout($doubleOpenTimer$$1$$)) : !$event$$64$$.isDefaultPrevented() && ($eventType$$29_openOptions$$1$$ = {launcher:$$element$$, initialFocus:"menu", position:{mouse:{my:"start top", at:"start bottom", of:$event$$64$$}, touch:{my:"start\x3e40 center", at:"start bottom", of:$event$$64$$, collision:"flipfit"}, 
      keyboard:{my:"start top", at:"start bottom", of:"launcher"}}[$eventType$$29_openOptions$$1$$]}, $menu$$3$$.$__openingContextMenu$ = !0, $menu$$3$$.open($event$$64$$, $eventType$$29_openOptions$$1$$), $menu$$3$$.$__openingContextMenu$ = !1, $getContextMenuNode$$().is(":visible") && ($event$$64$$.preventDefault(), document.addEventListener("keyup", $preventKeyUpEventIfMenuOpen$$), "touchstart" === $event$$64$$.type || "contextmenu" === $event$$64$$.type)) && ($doubleOpenType$$1$$ = $event$$64$$.type, 
      $doubleOpenTimer$$1$$ = setTimeout(function() {
        $doubleOpenType$$1$$ = null;
      }, 300));
    }
    function $preventKeyUpEventIfMenuOpen$$($event$$63$$) {
      121 == $event$$63$$.which && $event$$63$$.shiftKey && $getContextMenuNode$$().is(":visible") && $event$$63$$.preventDefault();
    }
    function $getContextMenuNode$$() {
      $$menu$$ || $setContextMenuIvars$$();
      return $$menu$$;
    }
    function $getContextMenu$$() {
      $_menu$$ || $setContextMenuIvars$$();
      return $_menu$$;
    }
    function $setContextMenuIvars$$() {
      $$menu$$ = $$$$7$$($menuSelector$$).first();
      $_menu$$ = $$menu$$.data("oj-ojMenu");
      if (!$_menu$$) {
        throw Error('"contextMenu" set to "' + $menuSelector$$ + '", which does not reference a valid JET Menu.');
      }
      $$menu$$.on("ojclose.ojContextMenu", function() {
        document.removeEventListener("keyup", $preventKeyUpEventIfMenuOpen$$);
      });
    }
    var $$element$$ = $$$$7$$($element$$55$$), $$menu$$, $_menu$$, $pressHoldTimer$$, $isPressHold$$1$$ = !1, $touchInProgress$$1$$ = !1, $doubleOpenTimer$$1$$, $doubleOpenType$$1$$ = null, $clickListener$$;
    $$element$$.off(".ojContextMenu").removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", $clickListener$$, !0);
    $$menu$$ && $$menu$$.off(".ojContextMenu");
    clearTimeout($pressHoldTimer$$);
    $$menu$$ = $_menu$$ = void 0;
    var $menuSelector$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$11$$());
    "string" !== $$$$7$$.type($menuSelector$$) && ($menuSelector$$ = $element$$55$$.getAttribute("contextmenu")) && ($menuSelector$$ = "#" + $menuSelector$$);
    $clickListener$$ = function $$clickListener$$$($event$$66$$) {
      if ($isPressHold$$1$$) {
        return $event$$66$$.preventDefault(), $event$$66$$.stopPropagation(), $isPressHold$$1$$ = !1;
      }
    };
    $element$$55$$.addEventListener("click", $clickListener$$, !0);
    $$element$$.on("touchstart.ojContextMenu mousedown.ojContextMenu keydown.ojContextMenu ", function($event$$67$$) {
      if ("mousedown" !== $event$$67$$.type || !$getContextMenu$$().$__contextMenuPressHoldJustEnded$()) {
        return $isPressHold$$1$$ = !1, "touchstart" === $event$$67$$.type && ($touchInProgress$$1$$ = !0, $pressHoldTimer$$ = setTimeout($launch$$1$$.bind(void 0, $event$$67$$, "touch", !0), 750)), !0;
      }
    }).on("touchend.ojContextMenu touchcancel.ojContextMenu", function() {
      $touchInProgress$$1$$ = !1;
      clearTimeout($pressHoldTimer$$);
      return!0;
    }).on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$69$$) {
      ("contextmenu" === $event$$69$$.type || 121 == $event$$69$$.which && $event$$69$$.shiftKey) && $launch$$1$$($event$$69$$, $touchInProgress$$1$$ ? "touch" : "keydown" === $event$$69$$.type ? "keyboard" : "mouse", !1);
      return!0;
    }).addClass($oj$$7$$.$DomUtils$.$isTouchSupported$() ? "oj-menu-context-menu-launcher" : "");
  }};
  $oj$$7$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$7$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.Init = function $$ComponentChangeTracker$$$$Init$($component$$8$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.Init.call(this);
    this.$_component$ = $component$$8$$;
    this.$_queue$ = $queue$$1$$;
    this.$_changes$ = {};
    this.$_suspendCountMap$ = {};
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$17$$, $value$$170$$) {
    this.$_isSuspended$($property$$17$$) || this.$_disposed$ || (this.$_changes$[$property$$17$$] = $value$$170$$, this.$_queue$.$registerComponentChanges$(this));
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_disposed$ = !0;
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$($option$$23$$) {
    var $count$$28$$ = this.$_suspendCountMap$[$option$$23$$] || 0;
    $oj$$7$$.$Assert$.assert(0 < $count$$28$$, "ComponentChangeTracker suspendCount underflow");
    $count$$28$$--;
    0 == $count$$28$$ ? delete this.$_suspendCountMap$[$option$$23$$] : this.$_suspendCountMap$[$option$$23$$] = $count$$28$$;
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$($option$$24$$) {
    this.$_suspendCountMap$[$option$$24$$] = (this.$_suspendCountMap$[$option$$24$$] || 0) + 1;
  };
  $ComponentChangeTracker$$.prototype.$applyChanges$ = function $$ComponentChangeTracker$$$$$applyChanges$$($changes$$1$$) {
    if (!this.$_disposed$) {
      var $mutationOptions$$2$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($changes$$1$$), $flags$$15$$ = {changed:!0};
      this.$_component$("option", $changes$$1$$, $flags$$15$$);
      for (var $mo$$1$$ in $mutationOptions$$2$$) {
        this.$_component$("option", $mo$$1$$, $mutationOptions$$2$$[$mo$$1$$], $flags$$15$$);
      }
    }
  };
  $ComponentChangeTracker$$.prototype.$flushChanges$ = function $$ComponentChangeTracker$$$$$flushChanges$$() {
    var $changes$$2$$ = this.$_changes$;
    this.$_changes$ = {};
    return $changes$$2$$;
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$($option$$25$$) {
    return 1 <= (this.$_suspendCountMap$[$option$$25$$] || 0);
  };
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["template"], init:function($name$$103$$, $value$$171$$, $element$$56$$, $widgetConstructor$$8$$, $valueAccessor$$12$$, $allBindingsAccessor$$11$$, $bindingContext$$36$$) {
    return "template" === $name$$103$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$36$$, $value$$171$$)} : null;
  }, update:function($name$$104$$, $value$$172$$, $element$$57$$, $widgetConstructor$$9$$, $valueAccessor$$13$$, $allBindingsAccessor$$12$$, $bindingContext$$37$$) {
    return "template" === $name$$104$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$37$$, $value$$172$$)} : null;
  }, "for":"ojDiagram"});
  $oj$$7$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$7$$.$koStringTemplateEngine$, $oj$$7$$);
  $oj$$7$$.$koStringTemplateEngine$.$install$ = function $$oj$$7$$$$koStringTemplateEngine$$$install$$() {
    if (!$ko$$1$$.templates) {
      var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine, $StringTemplate$$ = function $$StringTemplate$$$($template$$15$$) {
        this.$_templateName$ = $template$$15$$;
        this.text = function $this$text$($value$$173$$) {
          if (!$value$$173$$) {
            return $_templateText$$[this.$_templateName$];
          }
          $_templateText$$[this.$_templateName$] = $value$$173$$;
        };
        this.data = function $this$data$($key$$46$$, $value$$174$$) {
          $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
          if (1 === arguments.length) {
            return $_templateData$$[this.$_templateName$][$key$$46$$];
          }
          $_templateData$$[this.$_templateName$][$key$$46$$] = $value$$174$$;
        };
      };
      $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$16$$, $templateDocument$$) {
        if ("string" == typeof $template$$16$$) {
          $templateDocument$$ = $templateDocument$$ || document;
          var $elem$$22$$ = $templateDocument$$.getElementById($template$$16$$);
          return $elem$$22$$ ? new $ko$$1$$.templateSources.domElement($elem$$22$$) : new $StringTemplate$$($template$$16$$);
        }
        if ($template$$16$$ && 1 == $template$$16$$.nodeType || 8 == $template$$16$$.nodeType) {
          return new $ko$$1$$.templateSources.anonymousTemplate($template$$16$$);
        }
      };
      $ko$$1$$.templates = $_templateText$$;
      $ko$$1$$.setTemplateEngine($_engine$$);
    }
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$7$$.$koStringTemplateEngine$.$install$, $oj$$7$$);
  (function() {
    $oj$$7$$.$ExpressionUtils$ = {};
    $oj$$7$$.$ExpressionUtils$.$getExpressionInfo$ = function $$oj$$7$$$$ExpressionUtils$$$getExpressionInfo$$($attrValue$$) {
      var $info$$3$$ = {};
      if ($attrValue$$) {
        var $exp$$1$$ = $_ATTR_EXP$$.exec($attrValue$$), $exp$$1$$ = $exp$$1$$ ? $exp$$1$$[1] : null;
        $exp$$1$$ || ($info$$3$$.$downstreamOnly$ = !0, $exp$$1$$ = ($exp$$1$$ = $_ATTR_EXP_RO$$.exec($attrValue$$)) ? $exp$$1$$[1] : null);
        $info$$3$$.expr = $exp$$1$$;
      }
      return $info$$3$$;
    };
    $oj$$7$$.$ExpressionUtils$.$getPropertyWriterExpression$ = function $$oj$$7$$$$ExpressionUtils$$$getPropertyWriterExpression$$($expression$$4$$) {
      var $match$$15_reserveddWords$$ = ["true", "false", "null", "undefined"];
      if (null == $expression$$4$$ || 0 <= $match$$15_reserveddWords$$.indexOf($expression$$4$$)) {
        return null;
      }
      $match$$15_reserveddWords$$ = $expression$$4$$.match($_ASSIGNMENT_TARGET_EXP$$);
      return null === $match$$15_reserveddWords$$ ? null : "function(v){" + ($match$$15_reserveddWords$$[1] ? "Object(" + $match$$15_reserveddWords$$[1] + ")" + $match$$15_reserveddWords$$[2] : $expression$$4$$) + "\x3dv;}";
    };
    var $_ATTR_EXP$$ = /(?:\{\{\s*)([^\s]+)(?:\s*\}\})/, $_ATTR_EXP_RO$$ = /(?:\[\[\s*)([^\s]+)(?:\s*\]\])/, $_ASSIGNMENT_TARGET_EXP$$ = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
  })();
  $oj$$7$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$ = (new function _KoCustomBindingProvider() {
    function $_wrap$$($wrapped$$, $target$$76$$, $name$$85$$) {
      var $delegate$$ = $wrapped$$[$name$$85$$];
      $target$$76$$[$name$$85$$] = function $$target$$76$$$$name$$85$$$() {
        var $ret$$21$$ = $delegate$$ ? $delegate$$.apply($wrapped$$, arguments) : null, $postprocessHandlers$$ = $_postprocessors$$[$name$$85$$];
        if (null != $postprocessHandlers$$) {
          var $originalArgs$$ = arguments;
          $postprocessHandlers$$.forEach(function($handler$$46$$) {
            var $args$$16$$ = Array.prototype.slice.call($originalArgs$$);
            $args$$16$$.push($ret$$21$$, $wrapped$$);
            $ret$$21$$ = $handler$$46$$.apply(null, $args$$16$$);
          });
        }
        return $ret$$21$$;
      };
    }
    this.$install$ = function $this$$install$$() {
      var $methodsToWrap_provider$$ = $ko$$1$$.bindingProvider, $wrapped$$1$$ = $methodsToWrap_provider$$.instance;
      if (!$wrapped$$1$$.getBindingAccessors) {
        return $oj$$7$$.$Logger$.error("JET's Knockout bindings are not compatible with the current binding provider since it does not implement getBindingAccessors()"), this;
      }
      var $custom$$2$$ = $methodsToWrap_provider$$.instance = {}, $methodsToWrap_provider$$ = [];
      $methodsToWrap_provider$$.push("getBindingAccessors", "nodeHasBindings", "getBindings", "preprocessNode");
      $methodsToWrap_provider$$.forEach(function($name$$86$$) {
        $_wrap$$($wrapped$$1$$, $custom$$2$$, $name$$86$$);
      });
      return this;
    };
    this.$addPostprocessor$ = function $this$$addPostprocessor$$($postprocessor$$) {
      Object.keys($postprocessor$$).forEach(function($key$$41$$) {
        $_postprocessors$$[$key$$41$$] = $_postprocessors$$[$key$$41$$] || [];
        $_postprocessors$$[$key$$41$$].push($postprocessor$$[$key$$41$$]);
      });
    };
    var $_postprocessors$$ = {};
  }).$install$();
  $oj$$7$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$.$addPostprocessor$({getBindingAccessors:function _replaceComponentBindingWithV2($node$$24$$, $bindingContext$$10$$, $accessorMap$$, $wrapped$$2$$) {
    if (null == $accessorMap$$) {
      return null;
    }
    var $bindingName_keys$$inline_647$$;
    a: {
      $bindingName_keys$$inline_647$$ = Object.keys($accessorMap$$);
      for (var $i$$inline_648$$ = -0;$i$$inline_648$$ < $bindingName_keys$$inline_647$$.length;$i$$inline_648$$++) {
        var $key$$inline_649$$ = $bindingName_keys$$inline_647$$[$i$$inline_648$$];
        if ($oj$$7$$.$ComponentBinding$.$_isNameRegistered$($key$$inline_649$$)) {
          $bindingName_keys$$inline_647$$ = $key$$inline_649$$;
          break a;
        }
      }
      $bindingName_keys$$inline_647$$ = null;
    }
    null != $bindingName_keys$$inline_647$$ && ($accessorMap$$ = $_modifyOjComponentBinding$$($node$$24$$, $bindingName_keys$$inline_647$$, $wrapped$$2$$, $bindingContext$$10$$, $accessorMap$$));
    return $accessorMap$$;
  }});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["center"], init:function($name$$105$$, $value$$175$$, $element$$58$$, $widgetConstructor$$10$$, $valueAccessor$$14$$, $allBindingsAccessor$$13$$, $bindingContext$$38$$) {
    return $_handleManagedGaugeAttributes$$($name$$105$$, $value$$175$$, $bindingContext$$38$$);
  }, update:function($name$$106$$, $value$$176$$, $element$$59$$, $widgetConstructor$$11$$, $valueAccessor$$15$$, $allBindingsAccessor$$14$$, $bindingContext$$39$$) {
    return $_handleManagedGaugeAttributes$$($name$$106$$, $value$$176$$, $bindingContext$$39$$);
  }, "for":"ojStatusMeterGauge"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$107_row$$, $value$$177$$, $columnTemplate_element$$60_rowTemplate$$, $widgetConstructor$$12$$, $valueAccessor$$16$$, $allBindingsAccessor$$15$$, $bindingContext$$40$$) {
    if ("header" === $cellTemplate_column_name$$107_row$$) {
      return $cellTemplate_column_name$$107_row$$ = $value$$177$$.row, null != $cellTemplate_column_name$$107_row$$ && ($columnTemplate_element$$60_rowTemplate$$ = $cellTemplate_column_name$$107_row$$.template, null != $columnTemplate_element$$60_rowTemplate$$ && ($cellTemplate_column_name$$107_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$40$$, $columnTemplate_element$$60_rowTemplate$$))), $cellTemplate_column_name$$107_row$$ = $value$$177$$.column, null != $cellTemplate_column_name$$107_row$$ && 
      ($columnTemplate_element$$60_rowTemplate$$ = $cellTemplate_column_name$$107_row$$.template, null != $columnTemplate_element$$60_rowTemplate$$ && ($cellTemplate_column_name$$107_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$40$$, $columnTemplate_element$$60_rowTemplate$$))), {header:$value$$177$$};
    }
    if ("cell" === $cellTemplate_column_name$$107_row$$) {
      return $cellTemplate_column_name$$107_row$$ = $value$$177$$.template, null != $cellTemplate_column_name$$107_row$$ && ($value$$177$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$40$$, $cellTemplate_column_name$$107_row$$)), {cell:$value$$177$$};
    }
  }, update:function($cellTemplate$$1_column$$1_name$$108_row$$1$$, $value$$178$$, $columnTemplate$$1_element$$61_rowTemplate$$1$$, $widgetConstructor$$13$$, $valueAccessor$$17$$, $allBindingsAccessor$$16$$, $bindingContext$$41$$) {
    return "header" === $cellTemplate$$1_column$$1_name$$108_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$108_row$$1$$ = $value$$178$$.row, null != $cellTemplate$$1_column$$1_name$$108_row$$1$$ && ($columnTemplate$$1_element$$61_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$108_row$$1$$.template, null != $columnTemplate$$1_element$$61_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$108_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$41$$, $columnTemplate$$1_element$$61_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$108_row$$1$$ = $value$$178$$.column, null != $cellTemplate$$1_column$$1_name$$108_row$$1$$ && ($columnTemplate$$1_element$$61_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$108_row$$1$$.template, null != $columnTemplate$$1_element$$61_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$108_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$41$$, $columnTemplate$$1_element$$61_rowTemplate$$1$$))), {header:$value$$178$$}) : "cell" === $cellTemplate$$1_column$$1_name$$108_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$108_row$$1$$ = $value$$178$$.template, null != $cellTemplate$$1_column$$1_name$$108_row$$1$$ && ($value$$178$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$41$$, $cellTemplate$$1_column$$1_name$$108_row$$1$$)), {cell:$value$$178$$}) : null;
  }, "for":"ojDataGrid"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columns", "columnsDefault", "rowTemplate"], init:function($name$$109$$, $value$$179$$, $element$$62_i$$133$$, $template$$17_widgetConstructor$$14$$, $footerTemplate_valueAccessor$$18$$, $allBindingsAccessor$$17_headerTemplate$$, $bindingContext$$42$$) {
    if ("columns" == $name$$109$$ || "columnsDefault" == $name$$109$$) {
      for ($element$$62_i$$133$$ = 0;$element$$62_i$$133$$ < $value$$179$$.length;$element$$62_i$$133$$++) {
        var $column$$2$$ = $value$$179$$[$element$$62_i$$133$$];
        $template$$17_widgetConstructor$$14$$ = $column$$2$$.template;
        $footerTemplate_valueAccessor$$18$$ = $column$$2$$.footerTemplate;
        $allBindingsAccessor$$17_headerTemplate$$ = $column$$2$$.headerTemplate;
        null != $template$$17_widgetConstructor$$14$$ && ($column$$2$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$42$$, "cell", $template$$17_widgetConstructor$$14$$));
        null != $footerTemplate_valueAccessor$$18$$ && ($column$$2$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$42$$, "footer", $footerTemplate_valueAccessor$$18$$));
        null != $allBindingsAccessor$$17_headerTemplate$$ && ($column$$2$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$42$$, "header", $allBindingsAccessor$$17_headerTemplate$$));
      }
      return "columns" == $name$$109$$ ? {columns:$value$$179$$} : {columnsDefault:$value$$179$$};
    }
    if ("rowTemplate" == $name$$109$$) {
      return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$42$$, $value$$179$$)};
    }
  }, update:function($name$$110$$, $value$$180$$, $element$$63_i$$134$$, $widgetConstructor$$15$$, $template$$18_valueAccessor$$19$$, $allBindingsAccessor$$18_footerTemplate$$1$$, $bindingContext$$43$$) {
    if ("columns" == $name$$110$$ || "columnsDefault" == $name$$110$$) {
      var $headerTemplate$$1$$;
      for ($element$$63_i$$134$$ = 0;$element$$63_i$$134$$ < $value$$180$$.length;$element$$63_i$$134$$++) {
        var $column$$3$$ = $value$$180$$[$element$$63_i$$134$$];
        $template$$18_valueAccessor$$19$$ = $column$$3$$.template;
        $allBindingsAccessor$$18_footerTemplate$$1$$ = $column$$3$$.footerTemplate;
        $headerTemplate$$1$$ = $column$$3$$.headerTemplate;
        null != $template$$18_valueAccessor$$19$$ && ($column$$3$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$43$$, "cell", $template$$18_valueAccessor$$19$$));
        null != $allBindingsAccessor$$18_footerTemplate$$1$$ && ($column$$3$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$43$$, "footer", $allBindingsAccessor$$18_footerTemplate$$1$$));
        null != $headerTemplate$$1$$ && ($column$$3$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$43$$, "header", $headerTemplate$$1$$));
      }
      "columns" == $name$$110$$ ? $widgetConstructor$$15$$({columns:$value$$180$$}) : $widgetConstructor$$15$$({columnsDefault:$value$$180$$});
    } else {
      if ("rowTemplate" == $name$$110$$) {
        return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$43$$, $value$$180$$)};
      }
    }
    return null;
  }, "for":"ojTable"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["item"], init:function($name$$111_result$$17$$, $value$$181$$, $element$$64$$, $widgetConstructor$$16$$, $valueAccessor$$20$$, $allBindingsAccessor$$19$$, $bindingContext$$44$$) {
    $name$$111_result$$17$$ = $_handleListViewManagedAttributes$$($name$$111_result$$17$$, $value$$181$$, $bindingContext$$44$$);
    if (null != $name$$111_result$$17$$) {
      return $name$$111_result$$17$$;
    }
  }, update:function($name$$112$$, $value$$182$$, $element$$65$$, $widgetConstructor$$17$$, $valueAccessor$$21$$, $allBindingsAccessor$$20$$, $bindingContext$$45$$) {
    return $_handleListViewManagedAttributes$$($name$$112$$, $value$$182$$, $bindingContext$$45$$);
  }, "for":"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojListView", use:"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojNavigationList", use:"ojListViewRenderer"});
});
