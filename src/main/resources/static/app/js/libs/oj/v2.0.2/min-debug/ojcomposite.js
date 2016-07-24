/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojknockout"], function($oj$$64$$, $ko$$7$$) {
  function $PropertyUpdater$$($element$$147$$, $bindingContext$$47$$) {
    function $_setPropertyFromAttribute$$($metadata$$14_value$$296$$, $propName$$6$$, $attrVal$$1$$) {
      $_setupExpression$$($attrVal$$1$$, $propName$$6$$, $metadata$$14_value$$296$$) || $metadata$$14_value$$296$$.readOnly || ($metadata$$14_value$$296$$ = $_coerceValue$$($attrVal$$1$$, $metadata$$14_value$$296$$.type), $_setElementProperty$$($propName$$6$$, $metadata$$14_value$$296$$));
    }
    function $_coerceValue$$($val$$64$$, $type$$106$$) {
      switch($type$$106$$.toLowerCase()) {
        case "boolean":
          return Boolean($val$$64$$);
        case "number":
          return Number($val$$64$$);
        case "string":
          return $val$$64$$;
        default:
          return JSON.parse($val$$64$$);
      }
    }
    function $_attributeToPropertyName$$($attr$$18$$) {
      return $attr$$18$$.toLowerCase().replace(/-(.)/g, function($match$$25$$, $group1$$) {
        return $group1$$.toUpperCase();
      });
    }
    function $_setupExpression$$($attrVal$$2_info$$4$$, $propName$$7$$, $metadata$$15$$) {
      $attrVal$$2_info$$4$$ = $oj$$64$$.$ExpressionUtils$.$getExpressionInfo$($attrVal$$2_info$$4$$);
      delete $propsWithLocalValue$$[$propName$$7$$];
      var $changeListener_oldListener_readOnly$$3$$ = $expressionListeners$$[$propName$$7$$];
      $changeListener_oldListener_readOnly$$3$$ && ($changeListener_oldListener_readOnly$$3$$.dispose(), delete $expressionListeners$$[$propName$$7$$]);
      if ($changeListener_oldListener_readOnly$$3$$ = $changeListeners$$[$propName$$7$$]) {
        $element$$147$$.removeEventListener($propName$$7$$ + $_CHANGED_EVENT_SUFFIX$$, $changeListener_oldListener_readOnly$$3$$), delete $changeListeners$$[$propName$$7$$];
      }
      var $cleanupObservableListener$$, $changeListener_oldListener_readOnly$$3$$ = $metadata$$15$$.readOnly;
      $changeListener_oldListener_readOnly$$3$$ || ($cleanupObservableListener$$ = function $$cleanupObservableListener$$$() {
        var $observableListener$$ = $observableListeners$$[$propName$$7$$];
        $observableListener$$ && ($observableListener$$.dispose(), delete $observableListeners$$[$propName$$7$$]);
      }, $cleanupObservableListener$$());
      var $expr$$5$$ = $attrVal$$2_info$$4$$.expr;
      if ($expr$$5$$) {
        var $evaluator$$ = $oj$$64$$.$ComponentBinding$.$__CreateEvaluator$($expr$$5$$);
        $changeListener_oldListener_readOnly$$3$$ || $ko$$7$$.ignoreDependencies(function() {
          $expressionListeners$$[$propName$$7$$] = $ko$$7$$.computed(function() {
            $cleanupObservableListener$$();
            if (!$propsWithLocalValue$$[$propName$$7$$]) {
              var $value$$297$$ = $evaluator$$($bindingContext$$47$$);
              $ko$$7$$.isObservable($value$$297$$) ? $observableListeners$$[$propName$$7$$] = $_setAndWatchObservableValue$$($propName$$7$$, $value$$297$$) : $_setElementProperty$$($propName$$7$$, $value$$297$$);
            }
          });
        });
        $changeListeners$$[$propName$$7$$] = $_listenToPropertyChanges$$($propName$$7$$, $expr$$5$$, $evaluator$$, $metadata$$15$$.writeback && !$attrVal$$2_info$$4$$.$downstreamOnly$);
        return!0;
      }
      return!1;
    }
    function $_setAndWatchObservableValue$$($propName$$8$$, $value$$298$$) {
      $ko$$7$$.ignoreDependencies(function() {
        $_setElementProperty$$($propName$$8$$, $ko$$7$$.utils.unwrapObservable($value$$298$$));
      });
      return $value$$298$$.subscribe(function($newVal$$4$$) {
        $propsWithLocalValue$$[$propName$$8$$] || $_setElementProperty$$($propName$$8$$, $newVal$$4$$);
      });
    }
    function $_listenToPropertyChanges$$($propName$$9$$, $expr$$6$$, $evaluator$$1$$, $writable$$) {
      function $listener$$41$$($evt$$29$$) {
        var $written$$ = !1;
        $_settingProperty$$ || ($writable$$ && $ko$$7$$.ignoreDependencies(function() {
          var $value$$299$$ = $evt$$29$$.detail.value, $target$$96_writerExpr$$1$$ = $evaluator$$1$$($bindingContext$$47$$);
          $ko$$7$$.isWriteableObservable($target$$96_writerExpr$$1$$) ? ($written$$ = !0, $target$$96_writerExpr$$1$$($value$$299$$)) : ($target$$96_writerExpr$$1$$ = $oj$$64$$.$ExpressionUtils$.$getPropertyWriterExpression$($expr$$6$$), null != $target$$96_writerExpr$$1$$ && ($oj$$64$$.$ComponentBinding$.$__CreateEvaluator$($target$$96_writerExpr$$1$$)($bindingContext$$47$$)($value$$299$$), $written$$ = !0));
        }), $written$$ || ($propsWithLocalValue$$[$propName$$9$$] = !0));
      }
      $element$$147$$.addEventListener($propName$$9$$ + $_CHANGED_EVENT_SUFFIX$$, $listener$$41$$);
      return $listener$$41$$;
    }
    function $_propertyNameToAttribute$$($name$$128$$) {
      return $name$$128$$.replace(/([A-Z])/g, function($match$$26$$) {
        return "-" + $match$$26$$.toLowerCase();
      });
    }
    function $_setElementProperty$$($propName$$10$$, $value$$300$$) {
      $_settingProperty$$ = !0;
      try {
        $element$$147$$[$propName$$10$$] = $value$$300$$;
      } finally {
        $_settingProperty$$ = !1;
      }
    }
    this.$setup$ = function $this$$setup$$($metadata$$16_names$$3$$) {
      var $metadataProps$$ = $metadata$$16_names$$3$$.properties;
      if ($metadataProps$$) {
        $originalMethods$$.setAttribute = $element$$147$$.setAttribute;
        $originalMethods$$.removeAttribute = $element$$147$$.removeAttribute;
        $element$$147$$.setAttribute = function $$element$$147$$$setAttribute$($name$$129$$, $value$$301$$) {
          $changeAttribute$$($name$$129$$, $value$$301$$, $originalMethods$$.setAttribute);
        };
        $element$$147$$.removeAttribute = function $$element$$147$$$removeAttribute$($name$$130$$) {
          $changeAttribute$$($name$$130$$, null, $originalMethods$$.removeAttribute);
        };
        var $changeAttribute$$ = function $$changeAttribute$$$($name$$131$$, $value$$302$$, $operation$$7$$) {
          $name$$131$$ = $name$$131$$.toLowerCase();
          var $previousValue$$2$$ = $element$$147$$.getAttribute($name$$131$$);
          $operation$$7$$.apply($element$$147$$, arguments);
          var $newValue$$25$$ = $element$$147$$.getAttribute($name$$131$$), $propName$$11$$ = $_attributeToPropertyName$$($name$$131$$);
          $element$$147$$.hasOwnProperty($propName$$11$$) && $newValue$$25$$ !== $previousValue$$2$$ && $_setPropertyFromAttribute$$($metadataProps$$[$propName$$11$$], $propName$$11$$, $newValue$$25$$);
        };
        $metadata$$16_names$$3$$ = Object.keys($metadataProps$$);
        $_initializing$$ = !0;
        try {
          $metadata$$16_names$$3$$.forEach(function($name$$132$$) {
            var $attrName$$1_attrVal$$3$$ = $_propertyNameToAttribute$$($name$$132$$), $propertyMetadata$$ = $metadataProps$$[$name$$132$$];
            $element$$147$$.hasAttribute($attrName$$1_attrVal$$3$$) ? ($attrName$$1_attrVal$$3$$ = $element$$147$$.getAttribute($attrName$$1_attrVal$$3$$), $_setPropertyFromAttribute$$($propertyMetadata$$, $name$$132$$, $attrName$$1_attrVal$$3$$)) : $propertyMetadata$$.readOnly || ($element$$147$$[$name$$132$$] = $propertyMetadata$$.value);
          });
        } finally {
          $_initializing$$ = !1;
        }
      }
      return this;
    };
    this.$isInitializing$ = function $this$$isInitializing$$() {
      return $_initializing$$;
    };
    this.$teardown$ = function $this$$teardown$$($element$$148$$) {
      var $names$$4$$;
      [$observableListeners$$, $expressionListeners$$].forEach(function($i$$383_listeners$$) {
        $names$$4$$ = Object.keys($i$$383_listeners$$);
        for ($i$$383_listeners$$ = 0;$i$$383_listeners$$ < $names$$4$$.length;$i$$383_listeners$$++) {
          $expressionListeners$$[$names$$4$$[$i$$383_listeners$$]].dispose();
        }
      });
      $observableListeners$$ = {};
      $expressionListeners$$ = {};
      $names$$4$$ = Object.keys($originalMethods$$);
      var $i$$382$$;
      for ($i$$382$$ = 0;$i$$382$$ < $names$$4$$.length;$i$$382$$++) {
        var $method$$9_prop$$72$$ = $names$$4$$[$i$$382$$];
        $element$$148$$[$method$$9_prop$$72$$] = $originalMethods$$[$method$$9_prop$$72$$];
      }
      $originalMethods$$ = {};
      $names$$4$$ = Object.keys($changeListeners$$);
      for ($i$$382$$ = 0;$i$$382$$ < $names$$4$$.length;$i$$382$$++) {
        $method$$9_prop$$72$$ = $names$$4$$[$i$$382$$], $element$$148$$.removeEventListener($method$$9_prop$$72$$ + $_CHANGED_EVENT_SUFFIX$$, $changeListeners$$[$method$$9_prop$$72$$]);
      }
      $changeListeners$$ = {};
    };
    var $expressionListeners$$ = {}, $observableListeners$$ = {}, $changeListeners$$ = {}, $originalMethods$$ = {}, $propsWithLocalValue$$ = {}, $_initializing$$, $_settingProperty$$, $_CHANGED_EVENT_SUFFIX$$ = "-changed";
  }
  function $_getResourcePromise$$($descriptor$$3$$, $resourceType$$) {
    var $key$$171_promise$$8$$ = null, $val$$65_value$$303$$ = $descriptor$$3$$[$resourceType$$];
    if (null != $val$$65_value$$303$$) {
      $key$$171_promise$$8$$ = Object.keys($val$$65_value$$303$$)[0];
      $val$$65_value$$303$$ = $val$$65_value$$303$$[$key$$171_promise$$8$$];
      if (null == $key$$171_promise$$8$$) {
        throw "Invalid component descriptor key";
      }
      switch($key$$171_promise$$8$$) {
        case "inline":
          $key$$171_promise$$8$$ = Promise.resolve($val$$65_value$$303$$);
          break;
        case "promise":
          $key$$171_promise$$8$$ = $val$$65_value$$303$$;
          break;
        default:
          throw "Invalid descriptor key " + $key$$171_promise$$8$$ + " for the resopurce type: " + $resourceType$$;;
      }
    }
    return $key$$171_promise$$8$$;
  }
  function $_invokeCompositeViewModelMethod$$($model$$95$$, $handler$$54_key$$172_name$$134$$, $args$$22$$) {
    if (null != $model$$95$$ && ($handler$$54_key$$172_name$$134$$ = $oj$$64$$.$Composite$.$defaults$[$handler$$54_key$$172_name$$134$$], null != $handler$$54_key$$172_name$$134$$ && $model$$95$$ && ($handler$$54_key$$172_name$$134$$ = $model$$95$$[$handler$$54_key$$172_name$$134$$], "function" === typeof $handler$$54_key$$172_name$$134$$))) {
      return $ko$$7$$.ignoreDependencies($handler$$54_key$$172_name$$134$$, $model$$95$$, $args$$22$$);
    }
  }
  function $_setupProperties$$($element$$149$$, $props$$26$$, $metadata$$17$$, $propertyUpdater$$) {
    $_enumMetadataProperty$$($metadata$$17$$, "properties", function($name$$135$$, $propMetadata$$) {
      $_defineDynamicCompositeProperty$$($element$$149$$, $props$$26$$, $name$$135$$, $propMetadata$$, $propertyUpdater$$);
    });
  }
  function $_setupMethods$$($element$$150$$, $metadata$$18$$, $model$$96$$) {
    $_enumMetadataProperty$$($metadata$$18$$, "methods", function($name$$136$$) {
      var $internalName$$ = $metadata$$18$$.methods[$name$$136$$].internalName;
      $element$$150$$[$name$$136$$] = $internalName$$ ? $model$$96$$[$internalName$$].bind($model$$96$$) : $model$$96$$[$name$$136$$].bind($model$$96$$);
    });
  }
  function $_defineDynamicCompositeProperty$$($element$$151$$, $props$$27$$, $name$$137$$, $metadata$$19$$, $propertyUpdater$$1$$) {
    function $innerSet$$($evt$$inline_1022_val$$66$$) {
      var $old$$ = $propertyTracker$$.peek();
      $old$$ !== $evt$$inline_1022_val$$66$$ && ($propertyTracker$$($evt$$inline_1022_val$$66$$), $propertyUpdater$$1$$.$isInitializing$() || ($evt$$inline_1022_val$$66$$ = new CustomEvent($name$$137$$ + "-changed", {detail:{value:$evt$$inline_1022_val$$66$$, previousValue:$old$$}}), $element$$151$$.dispatchEvent($evt$$inline_1022_val$$66$$)));
    }
    var $propertyTracker$$ = $ko$$7$$.observable();
    $_defineDynamicObjectProperty$$($props$$27$$, $name$$137$$, function() {
      return $propertyTracker$$();
    }, $innerSet$$);
    $_defineDynamicObjectProperty$$($element$$151$$, $name$$137$$, function() {
      return $propertyTracker$$.peek();
    }, function($val$$67$$) {
      if ($metadata$$19$$.readOnly) {
        throw "Read-only property " + $name$$137$$ + " cannot be set";
      }
      $innerSet$$($val$$67$$);
    });
  }
  function $_defineDynamicObjectProperty$$($obj$$58$$, $name$$138$$, $getter$$2$$, $setter$$) {
    Object.defineProperty($obj$$58$$, $name$$138$$, {configurable:!0, enumerable:!0, get:$getter$$2$$, set:$setter$$});
  }
  function $_enumMetadataProperty$$($metadata$$20$$, $property$$26$$, $callback$$125$$) {
    if ($metadata$$20$$) {
      var $properties$$8$$ = $metadata$$20$$[$property$$26$$] || {};
      Object.keys($properties$$8$$).forEach(function($name$$140$$) {
        $callback$$125$$($name$$140$$, $properties$$8$$[$name$$140$$]);
      });
    }
  }
  function $_resetElement$$($element$$153$$, $metadata$$21$$) {
    ["methods", "properties"].forEach(function($type$$108$$) {
      $_enumMetadataProperty$$($metadata$$21$$, $type$$108$$, function($name$$141$$) {
        delete $element$$153$$[$name$$141$$];
      });
    });
  }
  function $_createSlotMap$$($childNodeList_element$$154$$) {
    var $slotMap$$ = {};
    $childNodeList_element$$154$$ = $childNodeList_element$$154$$.childNodes;
    for (var $i$$384$$ = 0;$i$$384$$ < $childNodeList_element$$154$$.length;$i$$384$$++) {
      var $child$$12$$ = $childNodeList_element$$154$$[$i$$384$$];
      if ((1 === $child$$12$$.nodeType || 3 === $child$$12$$.nodeType) && (3 !== $child$$12$$.nodeType || $child$$12$$.nodeValue.trim())) {
        var $savedSlot_slot$$ = $child$$12$$.__oj_slots;
        ($savedSlot_slot$$ = null != $savedSlot_slot$$ ? $savedSlot_slot$$ : $child$$12$$.getAttribute && $child$$12$$.getAttribute("slot")) || ($savedSlot_slot$$ = "");
        $slotMap$$[$savedSlot_slot$$] || ($slotMap$$[$savedSlot_slot$$] = []);
        $slotMap$$[$savedSlot_slot$$].push($child$$12$$);
      }
    }
    return $slotMap$$;
  }
  function $_storeNodes$$($element$$155$$, $view$$4$$) {
    var $nodeStorage$$, $childNodes$$ = $element$$155$$.childNodes;
    if ($childNodes$$) {
      $nodeStorage$$ = document.createElement("div");
      $nodeStorage$$.setAttribute("data-bind", "_ojNodeStorage_");
      $nodeStorage$$.style.display = "none";
      $view$$4$$.push($nodeStorage$$);
      for (var $assignableNodes$$ = [], $i$$385$$ = 0;$i$$385$$ < $childNodes$$.length;$i$$385$$++) {
        var $node$$114$$ = $childNodes$$[$i$$385$$];
        1 !== $node$$114$$.nodeType && 3 !== $node$$114$$.nodeType || $assignableNodes$$.push($node$$114$$);
      }
      $assignableNodes$$.forEach(function($node$$115$$) {
        $nodeStorage$$.appendChild($node$$115$$);
      });
    }
    return $nodeStorage$$;
  }
  $ko$$7$$.bindingHandlers._ojNodeStorage_ = {init:function $$ko$$7$$$bindingHandlers$_ojNodeStorage_$init$() {
    return{controlsDescendantBindings:!0};
  }};
  $ko$$7$$.bindingHandlers._ojSlot_ = {init:function $$ko$$7$$$bindingHandlers$_ojSlot_$init$($element$$157$$, $valueAccessor$$27_values$$14$$, $allBindingsAccessor$$22_unwrap$$1$$, $assignedNodes_slots_viewModel$$7$$, $bindingContext$$48_i$$386_slotName$$) {
    $ko$$7$$.utils.domNodeDisposal.addDisposeCallback($element$$157$$, function cleanup$$1($bindingContext$$49_nodeStorage$$1$$) {
      if ($bindingContext$$49_nodeStorage$$1$$ = $bindingContext$$49_nodeStorage$$1$$.__oj_nodestorage) {
        for (var $node$$117$$;$node$$117$$ = $ko$$7$$.virtualElements.firstChild($element$$157$$);) {
          null != $node$$117$$.__oj_slots && $bindingContext$$49_nodeStorage$$1$$.appendChild($node$$117$$);
        }
      }
    }.bind(null, $bindingContext$$48_i$$386_slotName$$));
    $assignedNodes_slots_viewModel$$7$$ = $bindingContext$$48_i$$386_slotName$$.__oj_slots;
    $valueAccessor$$27_values$$14$$ = $valueAccessor$$27_values$$14$$();
    $allBindingsAccessor$$22_unwrap$$1$$ = $ko$$7$$.utils.unwrapObservable;
    $bindingContext$$48_i$$386_slotName$$ = $allBindingsAccessor$$22_unwrap$$1$$($valueAccessor$$27_values$$14$$.name) || "";
    var $index$$267$$ = $allBindingsAccessor$$22_unwrap$$1$$($valueAccessor$$27_values$$14$$.index);
    if ($assignedNodes_slots_viewModel$$7$$ = null != $index$$267$$ ? [$assignedNodes_slots_viewModel$$7$$[$bindingContext$$48_i$$386_slotName$$][$index$$267$$]] : $assignedNodes_slots_viewModel$$7$$[$bindingContext$$48_i$$386_slotName$$]) {
      for ($bindingContext$$48_i$$386_slotName$$ = 0;$bindingContext$$48_i$$386_slotName$$ < $assignedNodes_slots_viewModel$$7$$.length;$bindingContext$$48_i$$386_slotName$$++) {
        $assignedNodes_slots_viewModel$$7$$[$bindingContext$$48_i$$386_slotName$$].__oj_slots = $allBindingsAccessor$$22_unwrap$$1$$($valueAccessor$$27_values$$14$$.slot) || "";
      }
      $ko$$7$$.virtualElements.setDomNodeChildren($element$$157$$, $assignedNodes_slots_viewModel$$7$$);
      return{controlsDescendantBindings:!0};
    }
  }};
  $ko$$7$$.virtualElements.allowedBindings._ojSlot_ = !0;
  (function() {
    $oj$$64$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$.$addPostprocessor$({nodeHasBindings:function($node$$118$$, $wrappedReturn$$) {
      return $wrappedReturn$$ || 1 === $node$$118$$.nodeType && $oj$$64$$.$Composite$.$__GetDescriptor$($node$$118$$.nodeName.toLowerCase());
    }, getBindingAccessors:function($name$$142_node$$119$$, $bindingContext$$50$$, $wrappedReturn$$1$$) {
      if (1 === $name$$142_node$$119$$.nodeType && ($name$$142_node$$119$$ = $name$$142_node$$119$$.nodeName.toLowerCase(), $oj$$64$$.$Composite$.$__GetDescriptor$($name$$142_node$$119$$))) {
        $wrappedReturn$$1$$ = $wrappedReturn$$1$$ || {};
        if ($wrappedReturn$$1$$.ojComposite) {
          throw "Cannot use ojComposite binding on a custom element whose name is already registered for a composite binding";
        }
        var $bindingValue$$2$$ = {name:$name$$142_node$$119$$};
        $wrappedReturn$$1$$.ojComposite = function $$wrappedReturn$$1$$$ojComposite$() {
          return $bindingValue$$2$$;
        };
      }
      return $wrappedReturn$$1$$;
    }, preprocessNode:function($node$$120$$, $wrappedReturn$$2$$) {
      var $attrs$$22_newNodes$$;
      if (1 === $node$$120$$.nodeType && "oj-slot" === $node$$120$$.nodeName.toLowerCase()) {
        $attrs$$22_newNodes$$ = ["name", "slot", "index"];
        for (var $binding$$8_closeComment$$ = "ko _ojSlot_:{", $parent$$44_valueExpressions$$ = [], $child$$13_i$$387_openComment$$ = 0;$child$$13_i$$387_openComment$$ < $attrs$$22_newNodes$$.length;$child$$13_i$$387_openComment$$++) {
          var $attr$$19$$ = $attrs$$22_newNodes$$[$child$$13_i$$387_openComment$$], $attrValue$$inline_1024_expr$$7$$;
          $attrValue$$inline_1024_expr$$7$$ = $node$$120$$.getAttribute($attr$$19$$);
          if (null != $attrValue$$inline_1024_expr$$7$$) {
            var $exp$$inline_1025$$ = $oj$$64$$.$ExpressionUtils$.$getExpressionInfo$($attrValue$$inline_1024_expr$$7$$).expr;
            null == $exp$$inline_1025$$ && ($exp$$inline_1025$$ = "'" + $attrValue$$inline_1024_expr$$7$$ + "'");
            $attrValue$$inline_1024_expr$$7$$ = $exp$$inline_1025$$;
          } else {
            $attrValue$$inline_1024_expr$$7$$ = null;
          }
          $attrValue$$inline_1024_expr$$7$$ && $parent$$44_valueExpressions$$.push($attr$$19$$ + ":" + $attrValue$$inline_1024_expr$$7$$);
        }
        $binding$$8_closeComment$$ += $parent$$44_valueExpressions$$.join(",");
        $child$$13_i$$387_openComment$$ = document.createComment($binding$$8_closeComment$$ + "}");
        $binding$$8_closeComment$$ = document.createComment("/ko");
        $attrs$$22_newNodes$$ = [$child$$13_i$$387_openComment$$];
        $parent$$44_valueExpressions$$ = $node$$120$$.parentNode;
        for ($parent$$44_valueExpressions$$.insertBefore($child$$13_i$$387_openComment$$, $node$$120$$);0 < $node$$120$$.childNodes.length;) {
          $child$$13_i$$387_openComment$$ = $node$$120$$.childNodes[0], $parent$$44_valueExpressions$$.insertBefore($child$$13_i$$387_openComment$$, $node$$120$$), $attrs$$22_newNodes$$.push($child$$13_i$$387_openComment$$);
        }
        $attrs$$22_newNodes$$.push($binding$$8_closeComment$$);
        $parent$$44_valueExpressions$$.replaceChild($binding$$8_closeComment$$, $node$$120$$);
      }
      return $attrs$$22_newNodes$$ ? $attrs$$22_newNodes$$ : $wrappedReturn$$2$$;
    }});
  })();
  $oj$$64$$.$Composite$ = {};
  $oj$$64$$.$Composite$.$defaults$ = {initializeMethod:"initialize", activatedMethod:"activated", attachedMethod:"attached", bindingsAppliedMethod:"bindingsApplied", disposeMethod:"dispose"};
  $goog$exportPath_$$("Composite.defaults", $oj$$64$$.$Composite$.$defaults$, $oj$$64$$);
  $oj$$64$$.$Composite$.register = function $$oj$$64$$$$Composite$$register$($name$$143$$, $descriptor$$5$$) {
    $oj$$64$$.$Composite$.$_registry$[$name$$143$$] = $descriptor$$5$$;
  };
  $goog$exportPath_$$("Composite.register", $oj$$64$$.$Composite$.register, $oj$$64$$);
  $oj$$64$$.$Composite$.$__GetDescriptor$ = function $$oj$$64$$$$Composite$$$__GetDescriptor$$($name$$144$$) {
    return $oj$$64$$.$Composite$.$_registry$[$name$$144$$];
  };
  $oj$$64$$.$Composite$.$_registry$ = {};
  $ko$$7$$.bindingHandlers.ojComposite = {init:function $$ko$$7$$$bindingHandlers$ojComposite$init$() {
    return{controlsDescendantBindings:!0};
  }, update:function $$ko$$7$$$bindingHandlers$ojComposite$update$($element$$159$$, $valueAccessor$$29$$, $allBindingsAccessor$$24$$, $viewModel$$9$$, $bindingContext$$52$$) {
    function $cleanup$$2$$($isNodeDispose$$) {
      $propertyUpdater$$2$$ && ($propertyUpdater$$2$$.$teardown$($element$$159$$), $propertyUpdater$$2$$ = null);
      $nodeDisposed$$ = $isNodeDispose$$;
      $_invokeCompositeViewModelMethod$$($childViewModel$$, "disposeMethod", [$element$$159$$]);
      $childViewModel$$ = null;
      $compMetadata$$ && $_resetElement$$($element$$159$$, $compMetadata$$);
      $nodeStorage$$2$$ && ($element$$159$$.removeChild($nodeStorage$$2$$), $nodeStorage$$2$$ = null);
      $compMetadata$$ = null;
      $props$$28$$ = {};
    }
    function $wrapToCheckLoadId$$($func$$11$$) {
      return function($id$$57$$) {
        if ($nodeDisposed$$ || $id$$57$$ != $pendingLoadId$$) {
          throw $_INTERRUPTED_ERROR$$;
        }
        return $func$$11$$.apply(this, Array.prototype.slice.call(arguments, 1));
      }.bind(null, $pendingLoadId$$);
    }
    var $_INTERRUPTED_ERROR$$ = Error(), $childViewModel$$, $propertyUpdater$$2$$, $pendingLoadId$$ = -1, $nodeDisposed$$ = !1, $compMetadata$$, $props$$28$$ = {}, $nodeStorage$$2$$, $unwrap$$2$$ = $ko$$7$$.utils.unwrapObservable;
    $ko$$7$$.ignoreDependencies(function() {
      $ko$$7$$.computed(function() {
        $pendingLoadId$$++;
        $element$$159$$.dispatchEvent(new CustomEvent("pending", {bubbles:!0}));
        $cleanup$$2$$(!1);
        var $name$$145_propertiesInitializedPromise_value$$305$$ = $unwrap$$2$$($valueAccessor$$29$$()) || {}, $name$$145_propertiesInitializedPromise_value$$305$$ = $unwrap$$2$$($name$$145_propertiesInitializedPromise_value$$305$$.name), $cssPromise_descriptor$$6$$ = $oj$$64$$.$Composite$.$__GetDescriptor$($name$$145_propertiesInitializedPromise_value$$305$$);
        if (!$cssPromise_descriptor$$6$$) {
          throw "Composite is missing a descriptor";
        }
        var $metadataPromise_modelInstancePromise_slotsPromise$$ = $_getResourcePromise$$($cssPromise_descriptor$$6$$, "metadata"), $name$$145_propertiesInitializedPromise_value$$305$$ = null;
        $metadataPromise_modelInstancePromise_slotsPromise$$ && ($name$$145_propertiesInitializedPromise_value$$305$$ = $metadataPromise_modelInstancePromise_slotsPromise$$.then($wrapToCheckLoadId$$(function($metadata$$22$$) {
          $metadata$$22$$ ? ($compMetadata$$ = $metadata$$22$$, $propertyUpdater$$2$$ = new $PropertyUpdater$$($element$$159$$, $bindingContext$$52$$), $_setupProperties$$($element$$159$$, $props$$28$$, $metadata$$22$$, $propertyUpdater$$2$$), $propertyUpdater$$2$$.$setup$($metadata$$22$$)) : $oj$$64$$.$Logger$.$warning$("ojComposite is being loaded without metadata. No element properties will be set up");
          return $props$$28$$;
        })));
        var $resolveSlotsPromise$$, $metadataPromise_modelInstancePromise_slotsPromise$$ = new Promise(function($resolve$$56$$) {
          $resolveSlotsPromise$$ = $resolve$$56$$;
        }), $unique$$1$$ = $_UNIQUE$$ + $_UNIQUE_INCR$$++, $vmContext$$ = {element:$element$$159$$, props:$name$$145_propertiesInitializedPromise_value$$305$$, slotNodeCounts:$metadataPromise_modelInstancePromise_slotsPromise$$, unique:$unique$$1$$}, $metadataPromise_modelInstancePromise_slotsPromise$$ = null, $activatedPromise_modelPromise$$1$$ = $_getResourcePromise$$($cssPromise_descriptor$$6$$, "viewModel");
        $activatedPromise_modelPromise$$1$$ && ($metadataPromise_modelInstancePromise_slotsPromise$$ = $activatedPromise_modelPromise$$1$$.then($wrapToCheckLoadId$$(function($model$$97$$) {
          return $model$$97$$ = "function" === typeof $model$$97$$ ? new $model$$97$$($vmContext$$) : $_invokeCompositeViewModelMethod$$($model$$97$$, "initializeMethod", [$vmContext$$]) || $model$$97$$;
        })));
        $activatedPromise_modelPromise$$1$$ = null;
        $metadataPromise_modelInstancePromise_slotsPromise$$ && ($activatedPromise_modelPromise$$1$$ = $metadataPromise_modelInstancePromise_slotsPromise$$.then($wrapToCheckLoadId$$(function($model$$98$$) {
          return $_invokeCompositeViewModelMethod$$($model$$98$$, "activatedMethod", [$vmContext$$]);
        })));
        var $viewPromise$$1$$ = $_getResourcePromise$$($cssPromise_descriptor$$6$$, "view");
        $viewPromise$$1$$ && ($viewPromise$$1$$ = $viewPromise$$1$$.then($wrapToCheckLoadId$$(function($content$$inline_1038_view$$5$$) {
          if ("string" === typeof $content$$inline_1038_view$$5$$) {
            $content$$inline_1038_view$$5$$ = $ko$$7$$.utils.parseHtmlFragment($content$$inline_1038_view$$5$$);
          } else {
            if (window.DocumentFragment ? $content$$inline_1038_view$$5$$ instanceof DocumentFragment : $content$$inline_1038_view$$5$$ && 11 === $content$$inline_1038_view$$5$$.nodeType) {
              $content$$inline_1038_view$$5$$ = $ko$$7$$.utils.arrayPushAll([], $content$$inline_1038_view$$5$$.childNodes);
            } else {
              if (Array.isArray($content$$inline_1038_view$$5$$)) {
                $content$$inline_1038_view$$5$$ = $ko$$7$$.utils.arrayPushAll([], $content$$inline_1038_view$$5$$);
              } else {
                throw "The View (" + $content$$inline_1038_view$$5$$ + ") has an unsupported type";
              }
            }
          }
          return $content$$inline_1038_view$$5$$;
        })));
        ($cssPromise_descriptor$$6$$ = $_getResourcePromise$$($cssPromise_descriptor$$6$$, "css")) && ($cssPromise_descriptor$$6$$ = $cssPromise_descriptor$$6$$.then($wrapToCheckLoadId$$(function($css$$1$$) {
          var $style$$9$$ = document.createElement("style");
          $style$$9$$.type = "text/css";
          $style$$9$$.styleSheet ? $style$$9$$.styleSheet.cssText = $css$$1$$ : $style$$9$$.appendChild(document.createTextNode($css$$1$$));
          document.head.appendChild($style$$9$$);
        })));
        $ko$$7$$.applyBindingsToDescendants($bindingContext$$52$$, $element$$159$$);
        Promise.all([$viewPromise$$1$$, $metadataPromise_modelInstancePromise_slotsPromise$$, $name$$145_propertiesInitializedPromise_value$$305$$, $cssPromise_descriptor$$6$$, $activatedPromise_modelPromise$$1$$]).then(function($id$$58$$, $values$$15$$) {
          if (!$nodeDisposed$$ && $id$$58$$ == $pendingLoadId$$) {
            var $childBindingContext$$1_view$$6$$ = $values$$15$$[0];
            if (!$childBindingContext$$1_view$$6$$) {
              throw "ojComposite is missing a View";
            }
            var $slotMap$$1$$ = $_createSlotMap$$($element$$159$$), $slotNodeCounts$$ = {}, $slot$$1$$;
            for ($slot$$1$$ in $slotMap$$1$$) {
              $slotNodeCounts$$[$slot$$1$$] = $slotMap$$1$$[$slot$$1$$].length;
            }
            $resolveSlotsPromise$$($slotNodeCounts$$);
            $nodeStorage$$2$$ = $_storeNodes$$($element$$159$$, $childBindingContext$$1_view$$6$$);
            $ko$$7$$.virtualElements.setDomNodeChildren($element$$159$$, $childBindingContext$$1_view$$6$$);
            $childViewModel$$ = $values$$15$$[1];
            $_invokeCompositeViewModelMethod$$($childViewModel$$, "attachedMethod", [$vmContext$$]);
            $childBindingContext$$1_view$$6$$ = $bindingContext$$52$$.createChildContext($childViewModel$$, void 0, function($ctx$$4$$) {
              $ctx$$4$$.__oj_slots = $slotMap$$1$$;
              $ctx$$4$$.__oj_nodestorage = $nodeStorage$$2$$;
              $ctx$$4$$.$slotNodeCounts = $slotNodeCounts$$;
              $ctx$$4$$.$props = $props$$28$$;
              $ctx$$4$$.$unique = $unique$$1$$;
            });
            $compMetadata$$ && $childViewModel$$ && $_setupMethods$$($element$$159$$, $compMetadata$$, $childViewModel$$);
            $ko$$7$$.applyBindingsToDescendants($childBindingContext$$1_view$$6$$, $element$$159$$);
            $_invokeCompositeViewModelMethod$$($childViewModel$$, "bindingsAppliedMethod", [$vmContext$$]);
            $element$$159$$.dispatchEvent(new CustomEvent("ready", {bubbles:!0}));
          }
        }.bind(null, $pendingLoadId$$), function($id$$59$$, $reason$$9$$) {
          $reason$$9$$ !== $_INTERRUPTED_ERROR$$ && null != $reason$$9$$ && $oj$$64$$.$Logger$.error($reason$$9$$);
        }.bind(null, $pendingLoadId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$159$$});
    });
    $ko$$7$$.utils.domNodeDisposal.addDisposeCallback($element$$159$$, $cleanup$$2$$.bind(null, !0, $bindingContext$$52$$));
  }};
  var $_UNIQUE_INCR$$ = 0, $_UNIQUE$$ = "_ojcomposite";
});
