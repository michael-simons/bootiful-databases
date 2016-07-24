/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojoffcanvas"], function($oj$$46$$, $$$$42$$) {
  $oj$$46$$.$SwipeToRevealUtils$ = {};
  $goog$exportPath_$$("SwipeToRevealUtils", $oj$$46$$.$SwipeToRevealUtils$, $oj$$46$$);
  $oj$$46$$.$SwipeToRevealUtils$.$setupSwipeActions$ = function $$oj$$46$$$$SwipeToRevealUtils$$$setupSwipeActions$$($elem$$74$$, $options$$317$$) {
    var $drawer$$22$$, $direction$$10$$, $offcanvas$$26$$, $outerWrapper$$4$$, $threshold$$2$$, $minimum$$2$$, $drawerShown$$, $evt$$28$$, $checkpoint$$, $defaultAction$$, $distance$$2$$;
    $drawer$$22$$ = $$$$42$$($elem$$74$$);
    $drawer$$22$$.hasClass("oj-swipetoreveal") || ($drawer$$22$$.addClass("oj-swipetoreveal"), $direction$$10$$ = $drawer$$22$$.hasClass("oj-offcanvas-start") ? "end" : "start", $offcanvas$$26$$ = {}, $offcanvas$$26$$.selector = $drawer$$22$$, $oj$$46$$.$OffcanvasUtils$.$setupPanToReveal$($offcanvas$$26$$), $outerWrapper$$4$$ = $oj$$46$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$22$$), null != $options$$317$$ && ($threshold$$2$$ = $options$$317$$.threshold), null != $threshold$$2$$ ? ($threshold$$2$$ = 
    parseInt($threshold$$2$$, 10), /%$/.test($options$$317$$.threshold) && ($threshold$$2$$ = $threshold$$2$$ / 100 * $outerWrapper$$4$$.outerWidth())) : $threshold$$2$$ = .55 * $outerWrapper$$4$$.outerWidth(), $minimum$$2$$ = Math.min(.3 * $outerWrapper$$4$$.outerWidth(), $drawer$$22$$.outerWidth()), $drawerShown$$ = !1, $outerWrapper$$4$$.on("click.swipetoreveal", function($event$$491$$) {
      $drawerShown$$ && ($event$$491$$.stopImmediatePropagation(), $drawerShown$$ = !1);
    }), $drawer$$22$$.on("ojpanstart", function($event$$492$$, $ui$$35$$) {
      $ui$$35$$.direction != $direction$$10$$ ? $event$$492$$.preventDefault() : ($drawer$$22$$.children().addClass("oj-swipetoreveal-action"), $defaultAction$$ = $drawer$$22$$.children(".oj-swipetoreveal-default").get(0), $checkpoint$$ = (new Date).getTime());
    }).on("ojpanmove", function($event$$493$$, $ui$$36$$) {
      $drawerShown$$ = !0;
      null != $defaultAction$$ && ($ui$$36$$.distance > $threshold$$2$$ ? $drawer$$22$$.children().each(function() {
        this != $defaultAction$$ && $$$$42$$(this).addClass("oj-swipetoreveal-hide-when-full");
      }) : $drawer$$22$$.children().removeClass("oj-swipetoreveal-hide-when-full"));
    }).on("ojpanend", function($event$$494$$, $ui$$37$$) {
      $distance$$2$$ = $ui$$37$$.distance;
      null != $defaultAction$$ && $distance$$2$$ > $threshold$$2$$ && ($evt$$28$$ = $$$$42$$.Event("ojdefaultaction"), $drawer$$22$$.trigger($evt$$28$$, $offcanvas$$26$$), $event$$494$$.preventDefault());
      $distance$$2$$ < $minimum$$2$$ && (200 < (new Date).getTime() - $checkpoint$$ || 10 > $distance$$2$$) && $event$$494$$.preventDefault();
    }));
  };
  $goog$exportPath_$$("SwipeToRevealUtils.setupSwipeActions", $oj$$46$$.$SwipeToRevealUtils$.$setupSwipeActions$, $oj$$46$$);
  $oj$$46$$.$SwipeToRevealUtils$.$tearDownSwipeActions$ = function $$oj$$46$$$$SwipeToRevealUtils$$$tearDownSwipeActions$$($elem$$75_offcanvas$$27$$) {
    var $drawer$$23_outerWrapper$$5$$;
    $drawer$$23_outerWrapper$$5$$ = $$$$42$$($elem$$75_offcanvas$$27$$);
    $elem$$75_offcanvas$$27$$ = {};
    $elem$$75_offcanvas$$27$$.selector = $drawer$$23_outerWrapper$$5$$;
    $drawer$$23_outerWrapper$$5$$ = $oj$$46$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$23_outerWrapper$$5$$);
    null != $drawer$$23_outerWrapper$$5$$ && $drawer$$23_outerWrapper$$5$$.off("click.swipetoreveal");
    $oj$$46$$.$OffcanvasUtils$.$tearDownPanToReveal$($elem$$75_offcanvas$$27$$);
  };
  $goog$exportPath_$$("SwipeToRevealUtils.tearDownSwipeActions", $oj$$46$$.$SwipeToRevealUtils$.$tearDownSwipeActions$, $oj$$46$$);
});
