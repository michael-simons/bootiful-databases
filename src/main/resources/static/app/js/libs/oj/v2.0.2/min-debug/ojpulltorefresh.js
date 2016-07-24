/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$31$$, $$$$28$$) {
  $oj$$31$$.$PullToRefreshUtils$ = {};
  $goog$exportPath_$$("PullToRefreshUtils", $oj$$31$$.$PullToRefreshUtils$, $oj$$31$$);
  $oj$$31$$.$PullToRefreshUtils$.$setupPullToRefresh$ = function $$oj$$31$$$$PullToRefreshUtils$$$setupPullToRefresh$$($element$$128$$, $refreshFunc$$, $options$$300$$) {
    var $outer$$, $content$$23$$, $panel$$, $threshold$$1$$, $start$$45$$, $height$$25$$, $icon$$7$$, $iconOffset$$, $lastIconClass$$, $title$$9$$, $ratio$$, $iconClass$$;
    $outer$$ = $$$$28$$(document.createElement("div"));
    $oj$$31$$.$PullToRefreshUtils$.$_renderAccessibleLink$($outer$$, $refreshFunc$$, $options$$300$$);
    $content$$23$$ = $$$$28$$(document.createElement("div")).addClass("oj-pulltorefresh-panel");
    $outer$$.append($content$$23$$);
    $panel$$ = $$$$28$$($element$$128$$);
    $panel$$.prepend($outer$$);
    $panel$$.on("touchstart.pulltorefresh", function($event$$387$$) {
      null == $$$$28$$.data($content$$23$$[0], "data-pullstart") && 0 === $panel$$[0].scrollTop && ($oj$$31$$.$PullToRefreshUtils$.$_handlePull$($event$$387$$, $content$$23$$, $options$$300$$), $icon$$7$$ = $content$$23$$.find(".oj-pulltorefresh-icon"), 0 < $icon$$7$$.length && ($iconOffset$$ = $icon$$7$$.parent().outerHeight(!0)), $options$$300$$ && !isNaN($options$$300$$.threshold) && ($threshold$$1$$ = parseInt($options$$300$$.threshold, 10)), $threshold$$1$$ = isNaN($threshold$$1$$) ? $content$$23$$.outerHeight(!0) : 
      Math.max(0, Math.min($threshold$$1$$, $content$$23$$.outerHeight(!0))), $content$$23$$.css("height", 0), $content$$23$$.removeClass("oj-pulltorefresh-transition"), $$$$28$$.data($content$$23$$[0], "data-pullstart", $event$$387$$.originalEvent.touches[0].clientY));
    }).on("touchmove.pulltorefresh", function($event$$388$$) {
      $start$$45$$ = $$$$28$$.data($content$$23$$[0], "data-pullstart");
      null != $start$$45$$ && ($height$$25$$ = $event$$388$$.originalEvent.touches[0].clientY - parseInt($start$$45$$, 10), 0 > $height$$25$$ || ($event$$388$$.preventDefault(), null != $$$$28$$.data($content$$23$$[0], "data-loading") ? $content$$23$$.css("height", Math.max($height$$25$$, $threshold$$1$$)) : ($content$$23$$.css("height", $height$$25$$), $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$388$$, "pull", $content$$23$$, $height$$25$$), null != $icon$$7$$ && 0 < $icon$$7$$.length && 
      ($lastIconClass$$ = $$$$28$$.data($content$$23$$[0], "data-lasticonclass"), null != $lastIconClass$$ && $icon$$7$$.removeClass($lastIconClass$$), $ratio$$ = 10 * Math.round($height$$25$$ / $threshold$$1$$ * 10), 100 <= $ratio$$ ? ($iconClass$$ = "oj-pulltorefresh-icon-full", $title$$9$$ = $oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIconFull")) : ($iconClass$$ = "oj-pulltorefresh-icon-" + $ratio$$ + "-percent", $title$$9$$ = $oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIcon" + 
      $ratio$$ + "percent")), $icon$$7$$.addClass($iconClass$$), $icon$$7$$.attr("title", $title$$9$$), $$$$28$$.data($content$$23$$[0], "data-lasticonclass", $iconClass$$), $oj$$31$$.$PullToRefreshUtils$.$_showHideDefaultText$($content$$23$$, $height$$25$$ > $iconOffset$$)))));
    }).on("touchcancel.pulltorefresh", function() {
      $oj$$31$$.$PullToRefreshUtils$.$_cleanup$($content$$23$$);
    }).on("touchend.pulltorefresh", function($event$$390$$) {
      $start$$45$$ = $$$$28$$.data($content$$23$$[0], "data-pullstart");
      null != $start$$45$$ && null == $$$$28$$.data($content$$23$$[0], "data-loading") && ($content$$23$$.outerHeight() < $threshold$$1$$ ? ($content$$23$$.addClass("oj-pulltorefresh-transition").css("height", 0), $oj$$31$$.$PullToRefreshUtils$.$_cleanup$($content$$23$$)) : $oj$$31$$.$PullToRefreshUtils$.$_handleRelease$($event$$390$$, $content$$23$$, $refreshFunc$$));
    });
  };
  $goog$exportPath_$$("PullToRefreshUtils.setupPullToRefresh", $oj$$31$$.$PullToRefreshUtils$.$setupPullToRefresh$, $oj$$31$$);
  $oj$$31$$.$PullToRefreshUtils$.$_handlePull$ = function $$oj$$31$$$$PullToRefreshUtils$$$_handlePull$$($event$$391$$, $content$$24$$, $options$$301$$) {
    var $primaryText$$, $secondaryText$$;
    $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$391$$, "pull", $content$$24$$, 0);
    0 == $content$$24$$.children().length && ($options$$301$$ && ($primaryText$$ = $options$$301$$.primaryText, $secondaryText$$ = $options$$301$$.secondaryText), $oj$$31$$.$PullToRefreshUtils$.$_createDefaultContent$($content$$24$$, $primaryText$$, $secondaryText$$));
    $content$$24$$.prev().text($oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshingLink"));
    $content$$24$$.css("height", "auto");
    $$$$28$$.data($content$$24$$[0], "data-panelheight", $content$$24$$.outerHeight());
  };
  $oj$$31$$.$PullToRefreshUtils$.$_handleRelease$ = function $$oj$$31$$$$PullToRefreshUtils$$$_handleRelease$$($event$$392$$, $content$$25$$, $refreshFunc$$1$$) {
    var $height$$26$$, $icon$$9$$, $lastIconClass$$1$$, $listener$$37$$;
    $height$$26$$ = $$$$28$$.data($content$$25$$[0], "data-panelheight");
    $content$$25$$.addClass("oj-pulltorefresh-transition").css("height", $height$$26$$);
    $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$392$$, "release", $content$$25$$, $height$$26$$);
    $$$$28$$.data($content$$25$$[0], "data-loading", !0);
    $icon$$9$$ = $content$$25$$.find(".oj-pulltorefresh-icon");
    0 < $icon$$9$$.length && ($lastIconClass$$1$$ = $$$$28$$.data($content$$25$$[0], "data-lasticonclass"), null != $lastIconClass$$1$$ && $icon$$9$$.removeClass($lastIconClass$$1$$), $icon$$9$$.addClass("oj-pulltorefresh-icon-full"));
    $refreshFunc$$1$$().then(function() {
      $listener$$37$$ = function $$listener$$37$$$() {
        $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$392$$, "complete", $content$$25$$, $height$$26$$);
        $oj$$31$$.$PullToRefreshUtils$.$_cleanup$($content$$25$$);
        $content$$25$$.off("transitionend", $listener$$37$$);
        $content$$25$$.prev().text("");
      };
      $content$$25$$.prev().text($oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshCompleteLink"));
      $content$$25$$.prev().prev().css("position", "");
      $content$$25$$.on("transitionend", $listener$$37$$);
      $content$$25$$.css("height", 0);
    });
  };
  $oj$$31$$.$PullToRefreshUtils$.$tearDownPullToRefresh$ = function $$oj$$31$$$$PullToRefreshUtils$$$tearDownPullToRefresh$$($element$$129$$) {
    $$$$28$$($element$$129$$).children().first().remove();
    $$$$28$$($element$$129$$).off(".pulltorefresh");
  };
  $goog$exportPath_$$("PullToRefreshUtils.tearDownPullToRefresh", $oj$$31$$.$PullToRefreshUtils$.$tearDownPullToRefresh$, $oj$$31$$);
  $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$ = function $$oj$$31$$$$PullToRefreshUtils$$$_fireEvent$$($originalEvent$$3$$, $event$$393_key$$140$$, $content$$26$$, $distance$$) {
    $event$$393_key$$140$$ = $$$$28$$.Event("oj" + $event$$393_key$$140$$);
    $event$$393_key$$140$$.originalEvent = $originalEvent$$3$$;
    $content$$26$$.trigger($event$$393_key$$140$$, {content:$content$$26$$, distance:$distance$$});
  };
  $oj$$31$$.$PullToRefreshUtils$.$_createDefaultContent$ = function $$oj$$31$$$$PullToRefreshUtils$$$_createDefaultContent$$($content$$27$$, $primary_primaryText$$1$$, $secondary$$1_secondaryText$$1$$) {
    var $icon$$10$$, $iconContainer$$;
    $content$$27$$.addClass("oj-pulltorefresh-content").attr("aria-hidden", "true");
    $icon$$10$$ = $$$$28$$(document.createElement("div"));
    $icon$$10$$.addClass("oj-pulltorefresh-icon oj-pulltorefresh-icon-initial");
    $iconContainer$$ = $$$$28$$(document.createElement("div"));
    $iconContainer$$.addClass("oj-pulltorefresh-icon-container");
    $iconContainer$$.append($icon$$10$$);
    $$$$28$$.data($content$$27$$[0], "data-lasticonclass", "oj-pulltorefresh-icon-initial");
    $content$$27$$.append($iconContainer$$);
    null != $primary_primaryText$$1$$ && ($primary_primaryText$$1$$ = $$$$28$$(document.createElement("div")).addClass("oj-pulltorefresh-primary-text").text($primary_primaryText$$1$$), $content$$27$$.append($primary_primaryText$$1$$), null != $secondary$$1_secondaryText$$1$$ && ($secondary$$1_secondaryText$$1$$ = $$$$28$$(document.createElement("div")).addClass("oj-pulltorefresh-secondary-text").text($secondary$$1_secondaryText$$1$$), $content$$27$$.append($secondary$$1_secondaryText$$1$$)));
  };
  $oj$$31$$.$PullToRefreshUtils$.$_showHideDefaultText$ = function $$oj$$31$$$$PullToRefreshUtils$$$_showHideDefaultText$$($content$$28$$, $show$$) {
    var $primaryText$$2$$, $secondaryText$$2$$;
    $primaryText$$2$$ = $content$$28$$.find(".oj-pulltorefresh-primary-text");
    $secondaryText$$2$$ = $content$$28$$.find(".oj-pulltorefresh-secondary-text");
    $show$$ ? ($primaryText$$2$$ && $primaryText$$2$$.show(), $secondaryText$$2$$ && $secondaryText$$2$$.show()) : ($primaryText$$2$$ && $primaryText$$2$$.hide(), $secondaryText$$2$$ && $secondaryText$$2$$.hide());
  };
  $oj$$31$$.$PullToRefreshUtils$.$_renderAccessibleLink$ = function $$oj$$31$$$$PullToRefreshUtils$$$_renderAccessibleLink$$($panel$$1$$, $refreshFunc$$2$$, $options$$302$$) {
    var $link$$4$$, $content$$29$$, $status$$26$$;
    $link$$4$$ = $$$$28$$(document.createElement("a"));
    $link$$4$$.text($oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshLink"));
    $link$$4$$.addClass("oj-helper-hidden-accessible").attr("href", "#").focus(function() {
      $link$$4$$.css("position", "static");
    }).blur(function($event$$394$$) {
      null != $event$$394$$.relatedTarget && $link$$4$$.css("position", "");
    }).click(function($event$$395$$) {
      $content$$29$$ = $panel$$1$$.children().last();
      $oj$$31$$.$PullToRefreshUtils$.$_handlePull$($event$$395$$, $content$$29$$, $options$$302$$);
      $oj$$31$$.$PullToRefreshUtils$.$_handleRelease$($event$$395$$, $content$$29$$, $refreshFunc$$2$$);
      $refreshFunc$$2$$();
    });
    $status$$26$$ = $$$$28$$(document.createElement("div"));
    $status$$26$$.addClass("oj-helper-hidden-accessible").attr("aria-live", "polite");
    $panel$$1$$.append($link$$4$$);
    $panel$$1$$.append($status$$26$$);
  };
  $oj$$31$$.$PullToRefreshUtils$.$_cleanup$ = function $$oj$$31$$$$PullToRefreshUtils$$$_cleanup$$($content$$30$$) {
    $$$$28$$.removeData($content$$30$$[0], "data-pullstart");
    $$$$28$$.removeData($content$$30$$[0], "data-loading");
    0 < $content$$30$$.find(".oj-pulltorefresh-icon").length && $content$$30$$.empty();
  };
});
