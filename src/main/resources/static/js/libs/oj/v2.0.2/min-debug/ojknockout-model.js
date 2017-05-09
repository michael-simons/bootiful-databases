/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$75$$, $ko$$10$$) {
  $oj$$75$$.$KnockoutUtils$ = function $$oj$$75$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$75$$.$KnockoutUtils$, $oj$$75$$);
  $oj$$75$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$75$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$75$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$75$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$75$$.$KnockoutUtils$.map = function $$oj$$75$$$$KnockoutUtils$$map$($m$$26$$, $callback$$134$$, $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$314$$) {
        $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] || $m$$26$$.set($argProp$$, $value$$314$$);
      };
    }
    var $koObject$$, $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$, $converted_index$$286_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$26$$ instanceof $oj$$75$$.$Collection$) {
      $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ = Array($m$$26$$.$_getLength$());
      $koObject$$ = $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$ ? $ko$$10$$.observableArray($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$) : $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$;
      $oj$$75$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$26$$);
      if ($array$$18_data$$179_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ = 0;$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ < $m$$26$$.$_modelIndices$.length;$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$286_updateObservableArrayReset$$ = $m$$26$$.$_modelIndices$[$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$286_updateObservableArrayReset$$] = $oj$$75$$.$KnockoutUtils$.map($m$$26$$.$_atInternal$($converted_index$$286_updateObservableArrayReset$$, null, !0, !1), $callback$$134$$);
        }
      } else {
        for ($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ = 0;$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ < $m$$26$$.$_modelIndices$.length;$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$286_updateObservableArrayReset$$ = $m$$26$$.$_modelIndices$[$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$286_updateObservableArrayReset$$] = $oj$$75$$.$KnockoutUtils$.map($m$$26$$.$_atInternal$($converted_index$$286_updateObservableArrayReset$$, null, !0, !1), $callback$$134$$);
        }
      }
      $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ = function $$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$466$$;
        try {
          if (!$koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$466$$ = 0;$i$$466$$ < $changes$$7$$.length;$i$$466$$++) {
              var $index$$287$$ = $changes$$7$$[$i$$466$$].index, $model$$101$$ = $oj$$75$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$466$$].value), $status$$32$$ = $changes$$7$$[$i$$466$$].status;
              "added" === $status$$32$$ ? $index$$287$$ >= $m$$26$$.length - 1 ? $m$$26$$.add($model$$101$$) : $m$$26$$.add($model$$101$$, {at:$index$$287$$}) : "deleted" === $status$$32$$ && $m$$26$$.$_removeInternal$($model$$101$$, $index$$287$$);
            }
            $m$$26$$.comparator && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$126$$, $b$$76$$) {
              return $oj$$75$$.$KnockoutUtils$.$_callSort$($a$$126$$, $b$$76$$, $m$$26$$.comparator, $m$$26$$, this);
            }), $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$137$$) {
          throw $e$$137$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$75$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$ = function $$array$$18_data$$179_updateObservable_updateObservableArrayRemove$$$($model$$102$$, $collection$$59$$, $options$$387$$) {
        var $index$$288$$;
        try {
          !$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$59$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$288$$ = $options$$387$$.index, $koObject$$.splice($index$$288$$, 1));
        } catch ($e$$138$$) {
          throw $e$$138$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ = function $$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$$($model$$103$$, $collection$$60$$, $options$$388$$) {
        var $index$$289$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$60$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$289$$ = $collection$$60$$.$_localIndexOf$($model$$103$$), void 0 !== $index$$289$$ && -1 < $index$$289$$)) {
            if ($newObservable$$ = $oj$$75$$.$KnockoutUtils$.map($model$$103$$, $callback$$134$$), $options$$388$$.fillIn) {
              for (var $i$$467$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$467$$ < $index$$289$$;$i$$467$$++) {
                $koObject$$.splice($i$$467$$, 0, $oj$$75$$.$KnockoutUtils$.map($collection$$60$$.$_atInternal$($i$$467$$, null, !0, !1), $callback$$134$$));
              }
              $koObject$$.splice($index$$289$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$289$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$139$$) {
          throw $e$$139$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$286_updateObservableArrayReset$$ = function $$converted_index$$286_updateObservableArrayReset$$$($collection$$61$$) {
        try {
          !$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$10$$.isObservable($koObject$$) ? ($koObject$$[$oj$$75$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$75$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$140$$) {
          throw $e$$140$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$62$$) {
        try {
          !$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$62$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$127$$, $b$$77$$) {
            return $oj$$75$$.$KnockoutUtils$.$_callSort$($a$$127$$, $b$$77$$, $m$$26$$.comparator, $collection$$62$$, this);
          }));
        } catch ($e$$141$$) {
          throw $e$$141$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.ADD, $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.REMOVE, $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.RESET, $converted_index$$286_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$26$$) {
        return;
      }
      $koObject$$ = {};
      $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$ = $m$$26$$.attributes;
      $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$ in $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$) {
        $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$286_updateObservableArrayReset$$ = $ko$$10$$.observable($m$$26$$.get($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$] = $converted_index$$286_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$465_prealloc_prop$$75_updateCollection_updateObservableArrayAdd$$, $converted_index$$286_updateObservableArrayReset$$.subscribe && $converted_index$$286_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$ = function $$array$$18_data$$179_updateObservable_updateObservableArrayRemove$$$($model$$104$$) {
        var $attrs$$23$$, $prop$$76$$;
        try {
          for ($prop$$76$$ in $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$23$$ = $model$$104$$.$changedAttributes$(), $attrs$$23$$) {
            if ($attrs$$23$$.hasOwnProperty($prop$$76$$)) {
              $koObject$$[$prop$$76$$]($model$$104$$.get($prop$$76$$));
            }
          }
        } catch ($e$$142$$) {
          throw $e$$142$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.CHANGE, $array$$18_data$$179_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$75$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$26$$);
      $callback$$134$$ && $callback$$134$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$75$$.$KnockoutUtils$.map, $oj$$75$$);
  $oj$$75$$.$KnockoutUtils$.$_getModel$ = function $$oj$$75$$$$KnockoutUtils$$$_getModel$$($val$$84$$) {
    return $val$$84$$ instanceof $oj$$75$$.$Model$ ? $val$$84$$ : $val$$84$$.hasOwnProperty($oj$$75$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$84$$[$oj$$75$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$84$$;
  };
  $oj$$75$$.$KnockoutUtils$.$_callSort$ = function $$oj$$75$$$$KnockoutUtils$$$_callSort$$($a$$128$$, $b$$78$$, $comparator$$16$$, $collection$$63$$, $caller$$8$$) {
    return $oj$$75$$.$Collection$.$SortFunc$($oj$$75$$.$KnockoutUtils$.$_getModel$($a$$128$$), $oj$$75$$.$KnockoutUtils$.$_getModel$($b$$78$$), $comparator$$16$$, $collection$$63$$, $caller$$8$$);
  };
  $oj$$75$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$75$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$315$$) {
    Object.defineProperty($object$$6$$, $oj$$75$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$315$$, enumerable:!1});
  };
});
