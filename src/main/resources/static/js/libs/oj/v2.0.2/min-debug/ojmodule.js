/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$23$$, $ko$$4$$) {
  $oj$$23$$.$ModuleBinding$ = {};
  $oj$$23$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated", transitionCompletedHandler:"handleTransitionCompleted"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$23$$.$ModuleBinding$.$defaults$, $oj$$23$$);
  (function() {
    function $_animate$$($actx$$, $animation$$, $element$$120$$, $oldDomNodes$$, $insertAndActivateFunc$$, $removeOldDomNodes$$, $transitionComplete$$) {
      var $canAnimateFunc_settings$$4$$ = $animation$$.canAnimate;
      if (null == $canAnimateFunc_settings$$4$$ || $canAnimateFunc_settings$$4$$.call($animation$$, $actx$$)) {
        var $newViewParent$$, $oldViewParent$$;
        if ($canAnimateFunc_settings$$4$$ = $animation$$.prepareAnimation.call($animation$$, $actx$$)) {
          $newViewParent$$ = $canAnimateFunc_settings$$4$$.newViewParent, $oldViewParent$$ = $canAnimateFunc_settings$$4$$.oldViewParent;
        }
        var $targetElement$$ = $newViewParent$$ || $element$$120$$;
        $oldViewParent$$ && $oldViewParent$$ !== $element$$120$$ ? $_moveDomNodes$$($oldDomNodes$$, $oldViewParent$$) : $targetElement$$ === $element$$120$$ && $removeOldDomNodes$$(null);
        $targetElement$$ !== $element$$120$$ && $ko$$4$$.virtualElements.setDomNodeChildren($targetElement$$, []);
        $insertAndActivateFunc$$($targetElement$$);
        var $newDomNodes$$ = Array.prototype.slice.call($targetElement$$.childNodes), $viewInserted$$ = !1, $insertNewView$$ = function $$insertNewView$$$() {
          $viewInserted$$ || ($viewInserted$$ = !0, $element$$120$$ !== $targetElement$$ && $_insertNodes$$($element$$120$$, $newDomNodes$$));
        }, $removeOldView$$ = $removeOldDomNodes$$.bind(null, $oldViewParent$$);
        $actx$$.newViewParent = $newViewParent$$;
        $actx$$.oldViewParent = $oldViewParent$$;
        $actx$$.oldViewNodes = $oldDomNodes$$;
        $actx$$.removeOldView = $removeOldView$$;
        $actx$$.insertNewView = $insertNewView$$;
        var $postAnimation$$ = function $$postAnimation$$$() {
          $removeOldView$$();
          $insertNewView$$();
          $transitionComplete$$();
        };
        return $animation$$.animate.call($animation$$, $actx$$).then($postAnimation$$, function() {
          $postAnimation$$();
          $oj$$23$$.$Logger$.error("ojModule animation promise was rejected");
        });
      }
    }
    function $_detachOldView$$($element$$121$$, $oldViewParent$$1$$, $cacheHolder$$) {
      $oldViewParent$$1$$ = $oldViewParent$$1$$ || $element$$121$$;
      var $empty$$2$$ = [];
      $cacheHolder$$ && $element$$121$$ === $oldViewParent$$1$$ && ($cacheHolder$$.parentNode.removeChild($cacheHolder$$), $empty$$2$$.push($cacheHolder$$));
      $ko$$4$$.virtualElements.setDomNodeChildren($oldViewParent$$1$$, $empty$$2$$);
    }
    function $_moveDomNodes$$($nodes$$, $target$$87$$) {
      $nodes$$.forEach(function($n$$22$$) {
        $target$$87$$.appendChild($n$$22$$);
      });
    }
    function $_invokeLifecycleListener$$($listener$$36$$, $method$$7$$, $params$$24$$) {
      if ($listener$$36$$ && $listener$$36$$[$method$$7$$]) {
        var $data$$138$$ = {element:$params$$24$$[0], valueAccessor:$params$$24$$[1]};
        2 < $params$$24$$.length && ($data$$138$$.viewModel = $params$$24$$[2], 3 < $params$$24$$.length && ($data$$138$$["boolean" === typeof $params$$24$$[3] ? "fromCache" : "cachedNodes"] = $params$$24$$[3]));
        return $ko$$4$$.ignoreDependencies($listener$$36$$[$method$$7$$], $listener$$36$$, [$data$$138$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$61$$, $handler$$50_key$$129_name$$120$$, $params$$25$$) {
      if (null != $model$$61$$ && ($handler$$50_key$$129_name$$120$$ = $oj$$23$$.$ModuleBinding$.$defaults$[$handler$$50_key$$129_name$$120$$], null != $handler$$50_key$$129_name$$120$$ && $model$$61$$ && ($handler$$50_key$$129_name$$120$$ = $model$$61$$[$handler$$50_key$$129_name$$120$$], "function" === typeof $handler$$50_key$$129_name$$120$$))) {
        var $data$$139$$ = void 0;
        $params$$25$$ && ($data$$139$$ = {element:$params$$25$$[0], valueAccessor:$params$$25$$[1]}, 2 < $params$$25$$.length && ($data$$139$$["boolean" === typeof $params$$25$$[2] ? "fromCache" : "cachedNodes"] = $params$$25$$[2]));
        return $ko$$4$$.ignoreDependencies($handler$$50_key$$129_name$$120$$, $model$$61$$, [$data$$139$$]);
      }
    }
    function $_getContainedNodes$$($container$$25_node$$80$$, $cacheHolder$$1$$, $endCommentNode$$) {
      var $childList$$ = [];
      for ($container$$25_node$$80$$ = $ko$$4$$.virtualElements.firstChild($container$$25_node$$80$$);null != $container$$25_node$$80$$ && $container$$25_node$$80$$ != $endCommentNode$$;$container$$25_node$$80$$ = $container$$25_node$$80$$.nextSibling) {
        $container$$25_node$$80$$ != $cacheHolder$$1$$ && $childList$$.push($container$$25_node$$80$$);
      }
      return $childList$$;
    }
    function $_getKoNodes$$($container$$26$$, $cacheHolder$$2$$) {
      var $nodes$$1$$ = [], $firstChild$$2$$ = $ko$$4$$.virtualElements.firstChild($container$$26$$);
      $_koNodesForEach$$($firstChild$$2$$, $cacheHolder$$2$$, function($node$$81$$) {
        $nodes$$1$$.push($node$$81$$);
      });
      return $nodes$$1$$;
    }
    function $_koNodesForEach$$($first$$6_node$$82$$, $cacheHolder$$3$$, $callback$$103$$) {
      for (;null != $first$$6_node$$82$$;) {
        var $next$$6$$ = $ko$$4$$.virtualElements.nextSibling($first$$6_node$$82$$), $type$$88$$ = $first$$6_node$$82$$.nodeType;
        $first$$6_node$$82$$ === $cacheHolder$$3$$ || 1 !== $type$$88$$ && 8 !== $type$$88$$ || $callback$$103$$($first$$6_node$$82$$);
        $first$$6_node$$82$$ = $next$$6$$;
      }
    }
    function $_insertNodes$$($container$$27$$, $nodes$$2$$) {
      for (var $i$$303$$ = $nodes$$2$$.length - 1;0 <= $i$$303$$;$i$$303$$--) {
        $ko$$4$$.virtualElements.prepend($container$$27$$, $nodes$$2$$[$i$$303$$]);
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$) {
      if (null != $oj$$23$$.Components) {
        for (var $i$$304$$ = 0;$i$$304$$ < $nodeArray$$.length;$i$$304$$++) {
          $visible$$ ? $oj$$23$$.Components.$subtreeShown$($nodeArray$$[$i$$304$$]) : $oj$$23$$.Components.$subtreeHidden$($nodeArray$$[$i$$304$$]);
        }
      }
    }
    function $_getDomNodes$$($content$$22$$) {
      if ("string" === typeof $content$$22$$) {
        $content$$22$$ = $ko$$4$$.utils.parseHtmlFragment($content$$22$$);
      } else {
        if (window.DocumentFragment ? $content$$22$$ instanceof DocumentFragment : $content$$22$$ && 11 === $content$$22$$.nodeType) {
          $content$$22$$ = $ko$$4$$.utils.arrayPushAll([], $content$$22$$.childNodes);
        } else {
          if (Array.isArray($content$$22$$)) {
            $content$$22$$ = $ko$$4$$.utils.arrayPushAll([], $content$$22$$);
          } else {
            throw "The View (" + $content$$22$$ + ") has an unsupported type";
          }
        }
      }
      return $content$$22$$;
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$34$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$34$$($loaded$$);
        }, function() {
          throw Error("ojModule failed to load " + $module$$1$$);
        });
      });
    }
    function $_createNoFailPromise$$($promise$$3$$) {
      return $promise$$3$$ ? new Promise(function($resolve$$35$$) {
        $promise$$3$$.then($resolve$$35$$, $resolve$$35$$);
      }) : $promise$$3$$;
    }
    $ko$$4$$.bindingHandlers.ojModule = {init:function $$ko$$4$$$bindingHandlers$ojModule$init$($element$$122$$, $valueAccessor$$26$$, $allBindingsAccessor$$21$$, $viewModel$$4$$, $bindingContext$$46$$) {
      function $checkPeningId$$($id$$30$$) {
        if ($id$$30$$ != $pendingViewId$$) {
          throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      }
      function $invokeModelDispose$$($model$$62$$) {
        $_invokeViewModelMethod$$($model$$62$$, "disposeMethod", [$element$$122$$, $valueAccessor$$26$$]);
      }
      var $currentViewModel$$, $currentAnimationPromise$$, $cache$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$4$$, $endCommentNode$$1$$;
      $ko$$4$$.utils.domNodeDisposal.addDisposeCallback($element$$122$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$35$$ = Object.keys($cache$$), $i$$305$$ = 0;$i$$305$$ < $keys$$35$$.length;$i$$305$$++) {
          $invokeModelDispose$$($cache$$[$keys$$35$$[$i$$305$$]].$model$);
        }
      });
      8 === $element$$122$$.nodeType && ($ko$$4$$.virtualElements.setDomNodeChildren($element$$122$$, []), $endCommentNode$$1$$ = $element$$122$$.nextSibling);
      $ko$$4$$.computed(function() {
        $pendingViewId$$++;
        var $isInitial$$1$$ = 0 === $pendingViewId$$, $attachPromise_unwrap$$ = $ko$$4$$.utils.unwrapObservable, $value$$258$$ = $attachPromise_unwrap$$($valueAccessor$$26$$()), $moduleName$$, $viewName$$, $params$$26$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$, $animation$$1$$;
        "string" === typeof $value$$258$$ ? $moduleName$$ = $value$$258$$ : ($moduleName$$ = $attachPromise_unwrap$$($value$$258$$.name), $viewName$$ = $attachPromise_unwrap$$($value$$258$$.viewName), $params$$26$$ = $attachPromise_unwrap$$($value$$258$$.params), $modelFactory$$ = $attachPromise_unwrap$$($value$$258$$.viewModelFactory), $viewFunction$$ = $attachPromise_unwrap$$($value$$258$$.createViewFunction), $cacheKey$$ = $attachPromise_unwrap$$($value$$258$$.cacheKey), $lifecycleListener$$ = 
        $attachPromise_unwrap$$($value$$258$$.lifecycleListener), $animation$$1$$ = $attachPromise_unwrap$$($value$$258$$.animation));
        var $attachPromise_unwrap$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$122$$, $valueAccessor$$26$$]), $viewPromise$$, $modelPromise$$, $cached$$ = null == $cacheKey$$ ? null : $cache$$[$cacheKey$$];
        if (null != $cached$$) {
          delete $cache$$[$cacheKey$$], $viewPromise$$ = Promise.resolve($cached$$.view), $modelPromise$$ = Promise.resolve($cached$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$ = $ko$$4$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$26$$, $valueAccessor$$26$$])), null == $modelPromise$$ && null != $moduleName$$ && ($modelPromise$$ = $_getRequirePromise$$($oj$$23$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$ && ($modelPromise$$ = $modelPromise$$.then(function($id$$31$$, $viewModel$$5$$) {
            $checkPeningId$$($id$$31$$);
            return $viewModel$$5$$ = "function" === typeof $viewModel$$5$$ ? new $viewModel$$5$$($params$$26$$) : $_invokeViewModelMethod$$($viewModel$$5$$, "initializeMethod", [$element$$122$$, $valueAccessor$$26$$]) || $viewModel$$5$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$ = $modelPromise$$.then(function($id$$32$$, $model$$64$$) {
            $checkPeningId$$($id$$32$$);
            if (null == $model$$64$$) {
              throw "createViewFunction option cannot be used when the ViewModel is null";
            }
            var $viewMethod$$ = $model$$64$$[$viewFunction$$];
            if (null == $viewMethod$$) {
              throw "function specified by the createViewFunction option was not found on the ViewModel";
            }
            return $viewMethod$$.call($model$$64$$);
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$ = $_getRequirePromise$$($oj$$23$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$23$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$ && ($modelAttachPromise$$ = $modelPromise$$.then(function($id$$33$$, $viewModel$$6$$) {
          $checkPeningId$$($id$$33$$);
          return $_invokeViewModelMethod$$($viewModel$$6$$, "activatedHandler", [$element$$122$$, $valueAccessor$$26$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$, $modelPromise$$, $attachPromise_unwrap$$, $modelAttachPromise$$, $currentAnimationPromise$$]).then(function($id$$34$$, $values$$12$$) {
          if ($id$$34$$ == $pendingViewId$$) {
            var $removeOldDomNodes$$1_view$$3$$ = $values$$12$$[0];
            if (null == $removeOldDomNodes$$1_view$$3$$) {
              throw "The module's View was resolved to null";
            }
            var $nodes$$3$$ = $_getDomNodes$$($removeOldDomNodes$$1_view$$3$$), $model$$65$$ = $values$$12$$[1], $saveInCache$$ = !1, $cachedNodeArray$$, $oldDomNodes$$1$$ = $_getContainedNodes$$($element$$122$$, $cacheHolder$$4$$, $endCommentNode$$1$$), $oldKoNodes$$ = $_getKoNodes$$($element$$122$$, $cacheHolder$$4$$);
            null != $currentCacheKey$$ && ($saveInCache$$ = !0, $cachedNodeArray$$ = $oldDomNodes$$1$$, $cacheHolder$$4$$ || ($cacheHolder$$4$$ = document.createElement("div"), $cacheHolder$$4$$.className = "oj-helper-module-cache", $ko$$4$$.virtualElements.prepend($element$$122$$, $cacheHolder$$4$$)));
            var $oldNodesRemoved$$ = !1, $removeOldDomNodes$$1_view$$3$$ = function $$removeOldDomNodes$$1_view$$3$$$($oldViewParent$$2$$) {
              $oldNodesRemoved$$ || ($oldNodesRemoved$$ = !0, $saveInCache$$ ? $_moveDomNodes$$($oldDomNodes$$1$$, $cacheHolder$$4$$) : $oldKoNodes$$.forEach(function($n$$23$$) {
                $ko$$4$$.cleanNode($n$$23$$);
              }), $_detachOldView$$($element$$122$$, $oldViewParent$$2$$ || $element$$122$$, $cacheHolder$$4$$), $isInitial$$1$$ || ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$122$$, $valueAccessor$$26$$, $currentViewModel$$, $cachedNodeArray$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$122$$, $valueAccessor$$26$$, $cachedNodeArray$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$122$$, $valueAccessor$$26$$, 
              $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, "deactivatedHandler", [$element$$122$$, $valueAccessor$$26$$])), $saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray$$, !1), $cache$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray$$}) : $invokeModelDispose$$($currentViewModel$$), $currentViewModel$$ = $model$$65$$, $currentCacheKey$$ = $cacheKey$$);
            }, $insertAndActivateNewNodes$$ = function $$insertAndActivateNewNodes$$$($targetElement$$1$$) {
              $targetElement$$1$$ = $targetElement$$1$$ || $element$$122$$;
              $_insertNodes$$($targetElement$$1$$, $nodes$$3$$);
              var $fromCache$$ = null != $cached$$;
              $fromCache$$ && $_propagateSubtreeVisibilityToComponents$$($nodes$$3$$, !0);
              $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$targetElement$$1$$, $valueAccessor$$26$$, $model$$65$$, $fromCache$$]);
              $_invokeViewModelMethod$$($model$$65$$, "attachedHandler", [$targetElement$$1$$, $valueAccessor$$26$$, $fromCache$$]);
              if (!$fromCache$$) {
                var $childBindingContext$$ = $bindingContext$$46$$.createChildContext($model$$65$$, void 0, function($ctx$$3$$) {
                  $ctx$$3$$.$module = $model$$65$$;
                  $ctx$$3$$.$params = $params$$26$$;
                });
                $_koNodesForEach$$($nodes$$3$$[0], $cacheHolder$$4$$, function($node$$84$$) {
                  $ko$$4$$.applyBindings($childBindingContext$$, $node$$84$$);
                });
                $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$targetElement$$1$$, $valueAccessor$$26$$, $model$$65$$]);
                $_invokeViewModelMethod$$($model$$65$$, "bindingsAppliedHandler", [$targetElement$$1$$, $valueAccessor$$26$$]);
              }
            }, $transitionComplete$$1$$ = function $$transitionComplete$$1$$$() {
              $_invokeLifecycleListener$$($lifecycleListener$$, "transitionCompleted", [$element$$122$$, $valueAccessor$$26$$, $model$$65$$]);
              $_invokeViewModelMethod$$($model$$65$$, "transitionCompletedHandler", [$element$$122$$, $valueAccessor$$26$$]);
            };
            if (null != $animation$$1$$) {
              var $promise$$4$$ = $_animate$$({node:$element$$122$$, valueAccessor:$valueAccessor$$26$$, isInitial:$isInitial$$1$$, oldViewModel:$currentViewModel$$, newViewModel:$model$$65$$}, $animation$$1$$, $element$$122$$, $oldDomNodes$$1$$, $insertAndActivateNewNodes$$, $removeOldDomNodes$$1_view$$3$$, $transitionComplete$$1$$);
              $currentAnimationPromise$$ = $_createNoFailPromise$$($promise$$4$$);
            } else {
              $currentAnimationPromise$$ = void 0;
            }
            $currentAnimationPromise$$ || ($removeOldDomNodes$$1_view$$3$$(null), $insertAndActivateNewNodes$$(null), $transitionComplete$$1$$());
          }
        }.bind(null, $pendingViewId$$), function($id$$35$$, $reason$$7$$) {
          $id$$35$$ == $pendingViewId$$ && null != $reason$$7$$ && $oj$$23$$.$Logger$.error($reason$$7$$);
        }.bind(null, $pendingViewId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$122$$});
      return{controlsDescendantBindings:!0};
    }};
    $ko$$4$$.virtualElements.allowedBindings.ojModule = !0;
  })();
});
