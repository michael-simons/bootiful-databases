/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$43$$, $ko$$5$$) {
  $oj$$43$$.$ModuleAnimations$ = {};
  $oj$$43$$.$ModuleAnimations$.$_DESCRIPTORS$ = {coverStart:{$oldViewClass$:"oj-animation-coverstart", $newViewClass$:"oj-animation-coverstart", $newViewOnTop$:!0}, coverUp:{$newViewClass$:"oj-animation-coverup", $newViewOnTop$:!0}, fade:{$oldViewClass$:"oj-animation-fade", $newViewClass$:"oj-animation-fade", $newViewOnTop$:!1}, revealDown:{$oldViewClass$:"oj-animation-revealdown", $newViewOnTop$:!1}, revealEnd:{$oldViewClass$:"oj-animation-revealend", $newViewClass$:"oj-animation-revealend", $newViewOnTop$:!1}, 
  zoomIn:{$newViewClass$:"oj-animation-zoomin", $newViewOnTop$:!0}, zoomOut:{$oldViewClass$:"oj-animation-zoomout", $newViewOnTop$:!1}};
  $oj$$43$$.$ModuleAnimations$.$_animateElement$ = function $$oj$$43$$$$ModuleAnimations$$$_animateElement$$($element$$140$$, $baseClass$$1$$, $action$$) {
    var $jelem$$10$$ = $($element$$140$$);
    return new Promise(function($resolve$$46$$) {
      function $endListener$$() {
        $resolve$$46$$(!0);
      }
      var $duration$$10_fromClass$$ = "oj-" + $action$$, $toClass$$ = $duration$$10_fromClass$$ + "-active";
      $jelem$$10$$.addClass($baseClass$$1$$);
      $jelem$$10$$.addClass($duration$$10_fromClass$$);
      window.requestAnimationFrame(function() {
        $jelem$$10$$.addClass($toClass$$);
      });
      if (($duration$$10_fromClass$$ = $jelem$$10$$.css("animationDuration") || $jelem$$10$$.css("webkitAnimationDuration")) && "0s" != $duration$$10_fromClass$$) {
        $jelem$$10$$.on("animationend webkitAnimationEnd", $endListener$$);
      } else {
        if (($duration$$10_fromClass$$ = $jelem$$10$$.css("transitionDuration") || $jelem$$10$$.css("webkitTransitionDuration")) && "0s" != $duration$$10_fromClass$$) {
          $jelem$$10$$.on("transitionend webkitTransitionEnd", $endListener$$);
        } else {
          $resolve$$46$$(!0);
        }
      }
    });
  };
  $oj$$43$$.$ModuleAnimations$.$_animateView$ = function $$oj$$43$$$$ModuleAnimations$$$_animateView$$($oldElement$$, $newElement$$, $animateName_descriptor$$1$$) {
    var $promises$$1$$ = [];
    $animateName_descriptor$$1$$ = $oj$$43$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName_descriptor$$1$$];
    $oldElement$$ && $animateName_descriptor$$1$$ && $animateName_descriptor$$1$$.$oldViewClass$ && $promises$$1$$.push($oj$$43$$.$ModuleAnimations$.$_animateElement$($oldElement$$, $animateName_descriptor$$1$$.$oldViewClass$, "leave"));
    $newElement$$ && $animateName_descriptor$$1$$ && $animateName_descriptor$$1$$.$newViewClass$ && $promises$$1$$.push($oj$$43$$.$ModuleAnimations$.$_animateElement$($newElement$$, $animateName_descriptor$$1$$.$newViewClass$, "enter"));
    return Promise.all($promises$$1$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_addContainedElements$ = function $$oj$$43$$$$ModuleAnimations$$$_addContainedElements$$($node$$96$$, $roots$$) {
    for (var $child$$9$$ = $ko$$5$$.virtualElements.firstChild($node$$96$$);$child$$9$$;) {
      1 == $child$$9$$.nodeType ? $roots$$.push($child$$9$$) : 8 == $child$$9$$.nodeType && this.$_addContainedElements$($child$$9$$, $roots$$), $child$$9$$ = $ko$$5$$.virtualElements.nextSibling($child$$9$$);
    }
  };
  $oj$$43$$.$ModuleAnimations$.$_cacheVirtualViewRoot$ = function $$oj$$43$$$$ModuleAnimations$$$_cacheVirtualViewRoot$$($context$$133$$, $root$$14$$) {
    $context$$133$$._ojOldRoot = $root$$14$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_getVirtualViewRoot$ = function $$oj$$43$$$$ModuleAnimations$$$_getVirtualViewRoot$$($context$$134$$) {
    return $context$$134$$._ojOldRoot;
  };
  $oj$$43$$.$ModuleAnimations$.$_defaultCanAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_defaultCanAnimate$$($context$$135$$) {
    if ($context$$135$$.isInitial) {
      return!1;
    }
    if (1 == $context$$135$$.node.nodeType) {
      return!0;
    }
    if (8 == $context$$135$$.node.nodeType) {
      var $children$$11$$ = [];
      $oj$$43$$.$ModuleAnimations$.$_addContainedElements$($context$$135$$.node, $children$$11$$);
      if ($children$$11$$ && 1 == $children$$11$$.length) {
        return $oj$$43$$.$ModuleAnimations$.$_cacheVirtualViewRoot$($context$$135$$, $children$$11$$[0]), !0;
      }
    }
    return!1;
  };
  $oj$$43$$.$ModuleAnimations$.$_getOldView$ = function $$oj$$43$$$$ModuleAnimations$$$_getOldView$$($context$$136$$) {
    var $oldView$$;
    1 == $context$$136$$.node.nodeType ? $oldView$$ = $context$$136$$.node : 8 == $context$$136$$.node.nodeType && ($oldView$$ = $oj$$43$$.$ModuleAnimations$.$_getVirtualViewRoot$($context$$136$$));
    return $oldView$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_createViewParent$ = function $$oj$$43$$$$ModuleAnimations$$$_createViewParent$$($host_oldView$$1$$) {
    var $viewport$$ = $(document.createElement("div")), $cssStyle$$ = {position:"absolute", height:$host_oldView$$1$$.offsetHeight + "px", width:$host_oldView$$1$$.offsetWidth + "px", left:$host_oldView$$1$$.offsetLeft + "px", top:$host_oldView$$1$$.offsetTop + "px"};
    $viewport$$.appendTo($host_oldView$$1$$.offsetParent);
    $viewport$$.css($cssStyle$$);
    $viewport$$.addClass("oj-animation-host-viewport");
    $host_oldView$$1$$ = document.createElement("div");
    $host_oldView$$1$$.className = "oj-animation-host";
    $viewport$$.append($host_oldView$$1$$);
    return $host_oldView$$1$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_defaultPrepareAnimation$ = function $$oj$$43$$$$ModuleAnimations$$$_defaultPrepareAnimation$$($context$$137$$, $animateName$$1$$) {
    var $viewParents$$ = {}, $descriptor$$2$$ = $oj$$43$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName$$1$$], $oldView$$2$$ = $oj$$43$$.$ModuleAnimations$.$_getOldView$($context$$137$$);
    $descriptor$$2$$ && ($descriptor$$2$$.$newViewClass$ && !$descriptor$$2$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$43$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$2$$.$oldViewClass$ && ($viewParents$$.oldViewParent = $oj$$43$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$2$$.$newViewClass$ && $descriptor$$2$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$43$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)));
    return $viewParents$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_defaultAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_defaultAnimate$$($context$$138$$, $animateName$$2$$) {
    return $oj$$43$$.$ModuleAnimations$.$_animateView$($context$$138$$.oldViewParent, $context$$138$$.newViewParent, $animateName$$2$$).then(function() {
      $oj$$43$$.$ModuleAnimations$.$_postAnimationProcess$($context$$138$$);
    });
  };
  $oj$$43$$.$ModuleAnimations$.$_removeViewParent$ = function $$oj$$43$$$$ModuleAnimations$$$_removeViewParent$$($context$$139$$, $hostProp$$) {
    var $host$$1_viewport$$1$$ = $context$$139$$[$hostProp$$];
    $host$$1_viewport$$1$$ && ($host$$1_viewport$$1$$ = $host$$1_viewport$$1$$.parentNode) && $host$$1_viewport$$1$$.parentNode && $host$$1_viewport$$1$$.parentNode.removeChild($host$$1_viewport$$1$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_postAnimationProcess$ = function $$oj$$43$$$$ModuleAnimations$$$_postAnimationProcess$$($context$$140$$) {
    $context$$140$$.removeOldView();
    $context$$140$$.insertNewView();
    $oj$$43$$.$ModuleAnimations$.$_removeViewParent$($context$$140$$, "newViewParent");
    $oj$$43$$.$ModuleAnimations$.$_removeViewParent$($context$$140$$, "oldViewParent");
  };
  $oj$$43$$.$ModuleAnimations$.$_getImplementation$ = function $$oj$$43$$$$ModuleAnimations$$$_getImplementation$$($animateName$$3$$) {
    return{canAnimate:$oj$$43$$.$ModuleAnimations$.$_defaultCanAnimate$, prepareAnimation:function($context$$141$$) {
      return $oj$$43$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$141$$, $animateName$$3$$);
    }, animate:function($context$$142$$) {
      return $oj$$43$$.$ModuleAnimations$.$_defaultAnimate$($context$$142$$, $animateName$$3$$);
    }};
  };
  $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$ = function $$oj$$43$$$$ModuleAnimations$$$_getNavigateMethod$$($navigationType$$) {
    null == $oj$$43$$.$ModuleAnimations$.$_navigateMethods$ && ($oj$$43$$.$ModuleAnimations$.$_navigateMethods$ = $oj$$43$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-animation-navigate-methods"));
    return $oj$$43$$.$ModuleAnimations$.$_navigateMethods$ ? $oj$$43$$.$ModuleAnimations$.$_navigateMethods$[$navigationType$$] : null;
  };
  $oj$$43$$.$ModuleAnimations$.$_navigateCanAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_navigateCanAnimate$$($context$$144$$, $navigationType$$1$$) {
    return $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$1$$) && $oj$$43$$.$ModuleAnimations$.$_defaultCanAnimate$($context$$144$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_navigatePrepareAnimation$ = function $$oj$$43$$$$ModuleAnimations$$$_navigatePrepareAnimation$$($context$$145$$, $navigationType$$2$$) {
    var $animateName$$4$$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$2$$);
    return $oj$$43$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$145$$, $animateName$$4$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_navigateAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_navigateAnimate$$($context$$146$$, $navigationType$$3$$) {
    var $animateName$$5$$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$3$$);
    return $oj$$43$$.$ModuleAnimations$.$_defaultAnimate$($context$$146$$, $animateName$$5$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_getNavigateImplementation$ = function $$oj$$43$$$$ModuleAnimations$$$_getNavigateImplementation$$($navigationType$$4$$) {
    return{canAnimate:function($context$$147$$) {
      return $oj$$43$$.$ModuleAnimations$.$_navigateCanAnimate$($context$$147$$, $navigationType$$4$$);
    }, prepareAnimation:function($context$$148$$) {
      return $oj$$43$$.$ModuleAnimations$.$_navigatePrepareAnimation$($context$$148$$, $navigationType$$4$$);
    }, animate:function($context$$149$$) {
      return $oj$$43$$.$ModuleAnimations$.$_navigateAnimate$($context$$149$$, $navigationType$$4$$);
    }};
  };
  $oj$$43$$.$ModuleAnimations$.$coverStart$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("coverStart");
  $goog$exportPath_$$("ModuleAnimations.coverStart", $oj$$43$$.$ModuleAnimations$.$coverStart$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$revealEnd$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("revealEnd");
  $goog$exportPath_$$("ModuleAnimations.revealEnd", $oj$$43$$.$ModuleAnimations$.$revealEnd$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$coverUp$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("coverUp");
  $goog$exportPath_$$("ModuleAnimations.coverUp", $oj$$43$$.$ModuleAnimations$.$coverUp$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$revealDown$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("revealDown");
  $goog$exportPath_$$("ModuleAnimations.revealDown", $oj$$43$$.$ModuleAnimations$.$revealDown$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$zoomIn$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("zoomIn");
  $goog$exportPath_$$("ModuleAnimations.zoomIn", $oj$$43$$.$ModuleAnimations$.$zoomIn$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$zoomOut$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("zoomOut");
  $goog$exportPath_$$("ModuleAnimations.zoomOut", $oj$$43$$.$ModuleAnimations$.$zoomOut$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$fade$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("fade");
  $goog$exportPath_$$("ModuleAnimations.fade", $oj$$43$$.$ModuleAnimations$.$fade$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$drillIn$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateImplementation$("drillIn");
  $goog$exportPath_$$("ModuleAnimations.drillIn", $oj$$43$$.$ModuleAnimations$.$drillIn$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$drillOut$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateImplementation$("drillOut");
  $goog$exportPath_$$("ModuleAnimations.drillOut", $oj$$43$$.$ModuleAnimations$.$drillOut$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$switcher$ = function $$oj$$43$$$$ModuleAnimations$$$switcher$$($callback$$116$$) {
    return new function() {
      function $_getDelegateInvoker$$($name$$125$$) {
        return function($context$$150$$) {
          return $_delegate$$[$name$$125$$].call($_delegate$$, $context$$150$$);
        };
      }
      var $_delegate$$, $_self$$ = this;
      this.canAnimate = function $this$canAnimate$($context$$151$$) {
        var $methods$$4_type$$96$$ = $callback$$116$$($context$$151$$);
        $_delegate$$ = null == $methods$$4_type$$96$$ ? null : $oj$$43$$.ModuleAnimations[$methods$$4_type$$96$$];
        if (!$_delegate$$) {
          return!1;
        }
        for (var $methods$$4_type$$96$$ = ["prepareAnimation", "animate"], $i$$350$$ = 0;$i$$350$$ < $methods$$4_type$$96$$.length;$i$$350$$++) {
          var $method$$8$$ = $methods$$4_type$$96$$[$i$$350$$];
          $_self$$[$method$$8$$] = $_getDelegateInvoker$$($method$$8$$);
        }
        return $_getDelegateInvoker$$("canAnimate")($context$$151$$);
      };
    };
  };
  $goog$exportPath_$$("ModuleAnimations.switcher", $oj$$43$$.$ModuleAnimations$.$switcher$, $oj$$43$$);
});
