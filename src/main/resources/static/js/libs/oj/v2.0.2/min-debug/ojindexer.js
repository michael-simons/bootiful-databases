/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$34$$, $$$$31$$, $Hammer$$4$$) {
  (function() {
    $oj$$34$$.$__registerWidget$("oj.ojIndexer", $$$$31$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", version:"1.2", widgetEventPrefix:"oj", options:{data:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      var $container$$28$$;
      this._super();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$_createInstructionText$();
      $container$$28$$ = this.$_getIndexerContainer$()[0];
      this.$_registerResizeListener$($container$$28$$);
      this.$_registerTouchHandler$($container$$28$$);
    }, _destroy:function() {
      var $container$$29$$, $model$$66$$;
      this._super();
      this.$_unsetAriaProperties$();
      this.element.removeClass("oj-component-initnode");
      $container$$29$$ = this.$_getIndexerContainer$()[0];
      this.$_unregisterResizeListener$($container$$29$$);
      this.$_unregisterTouchHandler$($container$$29$$);
      $model$$66$$ = this.$_getIndexerModel$();
      null != $model$$66$$ && this.$m_indexerModelListener$ && $model$$66$$.off($oj$$34$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$);
      $oj$$34$$.$DomUtils$.unwrap(this.element, $$$$31$$($container$$29$$));
    }, _setOption:function($key$$142$$, $value$$265$$) {
      this._superApply(arguments);
      "data" == $key$$142$$ && this.refresh();
    }, widget:function() {
      return this.$_getIndexerContainer$();
    }, refresh:function() {
      this._super();
      this.element.empty();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$m_current$ = null;
    }, getNodeBySubId:function($locator$$37_prefix$$18$$) {
      var $prefixes$$, $i$$334$$, $j$$43$$, $node$$89$$, $includes$$;
      if (null == $locator$$37_prefix$$18$$) {
        return this.element ? this.element[0] : null;
      }
      if ("oj-indexer-prefix" === $locator$$37_prefix$$18$$.subId) {
        for ($locator$$37_prefix$$18$$ = $locator$$37_prefix$$18$$.prefix, $prefixes$$ = this.element.children("li"), $i$$334$$ = 0;$i$$334$$ < $prefixes$$.length;$i$$334$$++) {
          $node$$89$$ = $prefixes$$.get($i$$334$$);
          if ($$$$31$$($node$$89$$).attr("data-range") == $locator$$37_prefix$$18$$) {
            return $node$$89$$;
          }
          $includes$$ = $$$$31$$($node$$89$$).attr("data-includes");
          if (null != $includes$$) {
            for ($includes$$ = $includes$$.split("|"), $j$$43$$ = 0;$j$$43$$ < $includes$$.length;$j$$43$$++) {
              if ($includes$$[$j$$43$$] == $locator$$37_prefix$$18$$) {
                return $node$$89$$;
              }
            }
          }
        }
      }
      return null;
    }, getSubIdByNode:function($node$$90_prefix$$19$$) {
      return null != $node$$90_prefix$$19$$ && ($node$$90_prefix$$19$$ = $$$$31$$($node$$90_prefix$$19$$).attr("data-range"), null != $node$$90_prefix$$19$$) ? {subId:"oj-indexer-prefix", prefix:$node$$90_prefix$$19$$} : null;
    }, $_setAriaProperties$:function() {
      this.element.attr("role", "slider").attr("aria-orientation", "vertical").attr("aria-describedby", this.element.prop("id") + ":desc").attr("aria-valuemin", 0).attr("aria-valuemax", Math.max(0, this.element.children().length - 1));
    }, $_unsetAriaProperties$:function() {
      this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext");
    }, $_createInstructionText$:function() {
      var $key$$143$$, $text$$17$$;
      $key$$143$$ = $oj$$34$$.$DomUtils$.$isTouchSupported$() ? "ariaTouchInstructionText" : "ariaKeyboardInstructionText";
      $text$$17$$ = $$$$31$$(document.createElement("div"));
      $text$$17$$.prop("id", this.element.prop("id") + ":desc");
      $text$$17$$.addClass("oj-helper-hidden-accessible").text(this.$getTranslatedString$($key$$143$$));
      this.$_getIndexerContainer$().append($text$$17$$);
    }, $_getIndexerContainer$:function() {
      null == this.$m_container$ && (this.$m_container$ = this.$_createIndexerContainer$());
      return this.$m_container$;
    }, $_createIndexerContainer$:function() {
      var $container$$30$$ = $$$$31$$(document.createElement("div"));
      $container$$30$$.addClass("oj-indexer oj-component");
      this.element.parent()[0].replaceChild($container$$30$$[0], this.element[0]);
      $container$$30$$.prepend(this.element);
      return $container$$30$$;
    }, $_createIndexerContent$:function() {
      var $model$$67_prefixOthers$$, $root$$13$$, $last$$4_others_prefixes$$1$$, $availablePrefixes$$, $height$$27_max$$7_skip$$2$$, $first$$7_i$$335_itemHeight$$, $item$$113_prefix$$20$$;
      $model$$67_prefixOthers$$ = this.$_getIndexerModel$();
      if (null != $model$$67_prefixOthers$$) {
        $root$$13$$ = this.element;
        $last$$4_others_prefixes$$1$$ = $model$$67_prefixOthers$$.getIndexablePrefixes();
        $availablePrefixes$$ = $model$$67_prefixOthers$$.getPrefixes();
        $model$$67_prefixOthers$$ = this.$getTranslatedString$("indexerOthers");
        $height$$27_max$$7_skip$$2$$ = this.widget().outerHeight();
        $first$$7_i$$335_itemHeight$$ = this.$_createItem$($last$$4_others_prefixes$$1$$[0], $availablePrefixes$$);
        $root$$13$$.append($first$$7_i$$335_itemHeight$$);
        $first$$7_i$$335_itemHeight$$ = $first$$7_i$$335_itemHeight$$.outerHeight();
        $height$$27_max$$7_skip$$2$$ = Math.floor($height$$27_max$$7_skip$$2$$ / $first$$7_i$$335_itemHeight$$);
        this.$_getIndexerContainer$().removeClass("oj-indexer-abbr");
        $height$$27_max$$7_skip$$2$$ = Math.floor(($last$$4_others_prefixes$$1$$.length + 1) / $height$$27_max$$7_skip$$2$$) + 1;
        1 < $height$$27_max$$7_skip$$2$$ && this.$_getIndexerContainer$().addClass("oj-indexer-abbr");
        for ($first$$7_i$$335_itemHeight$$ = 1 + $height$$27_max$$7_skip$$2$$;$first$$7_i$$335_itemHeight$$ < $last$$4_others_prefixes$$1$$.length;$first$$7_i$$335_itemHeight$$ = $first$$7_i$$335_itemHeight$$ + $height$$27_max$$7_skip$$2$$ + 1) {
          1 < $height$$27_max$$7_skip$$2$$ ? ($item$$113_prefix$$20$$ = this.$_createSeparator$($last$$4_others_prefixes$$1$$, $first$$7_i$$335_itemHeight$$ - $height$$27_max$$7_skip$$2$$, $first$$7_i$$335_itemHeight$$ - 1), $root$$13$$.append($item$$113_prefix$$20$$)) : $first$$7_i$$335_itemHeight$$--, $item$$113_prefix$$20$$ = $last$$4_others_prefixes$$1$$[$first$$7_i$$335_itemHeight$$], $item$$113_prefix$$20$$ = this.$_createItem$($item$$113_prefix$$20$$, $availablePrefixes$$), $root$$13$$.append($item$$113_prefix$$20$$)
          ;
        }
        $last$$4_others_prefixes$$1$$ = this.$_createItem$($last$$4_others_prefixes$$1$$[$last$$4_others_prefixes$$1$$.length - 1], $availablePrefixes$$);
        $root$$13$$.append($last$$4_others_prefixes$$1$$);
        $last$$4_others_prefixes$$1$$ = this.$_createItem$($model$$67_prefixOthers$$);
        $last$$4_others_prefixes$$1$$.attr("data-others", "true");
        $root$$13$$.append($last$$4_others_prefixes$$1$$);
      }
    }, $_createItem$:function($prefix$$21$$, $availablePrefixes$$1$$) {
      var $item$$114$$ = $$$$31$$(document.createElement("li"));
      $item$$114$$.attr("data-range", $prefix$$21$$).text($prefix$$21$$);
      null != $availablePrefixes$$1$$ && -1 == $availablePrefixes$$1$$.indexOf($prefix$$21$$) && $item$$114$$.addClass("oj-disabled");
      return $item$$114$$;
    }, $_createSeparator$:function($indexString$$, $from$$3_i$$336$$, $to$$3$$) {
      var $item$$115$$, $includes$$1$$ = "";
      $item$$115$$ = $$$$31$$(document.createElement("li"));
      for ($item$$115$$.addClass("oj-indexer-ellipsis").attr("data-range", $indexString$$[$from$$3_i$$336$$ + Math.round(($to$$3$$ - $from$$3_i$$336$$) / 2)]);$from$$3_i$$336$$ < $to$$3$$;$from$$3_i$$336$$++) {
        $includes$$1$$ = $includes$$1$$ + $indexString$$[$from$$3_i$$336$$] + "|";
      }
      $includes$$1$$ += $indexString$$[$to$$3$$];
      $item$$115$$.attr("data-includes", $includes$$1$$);
      return $item$$115$$;
    }, $_setup$:function() {
      var $self$$152$$ = this, $model$$68$$;
      this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex", 0);
      this._on(this.element, {click:function($event$$406$$) {
        $self$$152$$.$_handleClick$($event$$406$$);
      }, keydown:function($event$$407$$) {
        $self$$152$$.$_handleKeyDown$($event$$407$$);
      }, focus:function($event$$408$$) {
        $self$$152$$.$_handleFocus$($event$$408$$);
      }, blur:function($event$$409$$) {
        $self$$152$$.$_handleBlur$($event$$409$$);
      }});
      $model$$68$$ = this.$_getIndexerModel$();
      null != $model$$68$$ && (this.$m_indexerModelListener$ = function $this$$m_indexerModelListener$$() {
        $self$$152$$.refresh();
      }, $model$$68$$.on($oj$$34$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$));
    }, $_handleClick$:function($event$$410_target$$90$$) {
      0 === $event$$410_target$$90$$.button && ($event$$410_target$$90$$ = $$$$31$$($event$$410_target$$90$$.target), this.$_setCurrent$($event$$410_target$$90$$));
    }, $_handleFocus$:function() {
      this.$_getIndexerContainer$().addClass("oj-focus-ancestor");
      null == this.$m_current$ && this.$_setFocus$(this.element.children("li").first());
    }, $_handleBlur$:function() {
      this.$_getIndexerContainer$().removeClass("oj-focus-ancestor");
    }, $_handleKeyDown$:function($event$$413$$) {
      var $next$$7$$, $processed$$7$$ = !1;
      switch($event$$413$$.keyCode) {
        case 38:
          $next$$7$$ = this.$m_current$.prev();
          break;
        case 40:
          $next$$7$$ = this.$m_current$.next();
          break;
        case 13:
          this.$_setCurrent$(this.$m_current$), $processed$$7$$ = !0;
      }
      null != $next$$7$$ && 0 < $next$$7$$.length && ($processed$$7$$ = !0, this.$_setFocus$($next$$7$$));
      $processed$$7$$ && $event$$413$$.preventDefault();
    }, $_setFocus$:function($item$$116$$) {
      null != this.$m_current$ && this.$m_current$.removeClass("oj-focus");
      $item$$116$$.addClass("oj-focus");
      this.$_updateAriaProperties$($item$$116$$);
      this.$m_current$ = $item$$116$$;
    }, $_getIndexerModel$:function() {
      var $model$$69$$ = this.option("data");
      if (null != $model$$69$$ && (void 0 == $model$$69$$.setPrefix || void 0 == $model$$69$$.getIndexablePrefixes || void 0 == $model$$69$$.getPrefixes)) {
        throw "Invalid IndexerModel";
      }
      return $model$$69$$;
    }, $_setCurrent$:function($item$$117$$) {
      var $prefix$$22$$ = $item$$117$$.attr("data-range");
      $item$$117$$.attr("data-others") && ($prefix$$22$$ = $oj$$34$$.$IndexerModel$.PREFIX_OTHERS);
      this.$_setCurrentPrefix$($prefix$$22$$);
    }, $_setCurrentPrefix$:function($prefix$$23$$) {
      var $self$$153$$ = this, $item$$118$$;
      this.$_getIndexerModel$().setPrefix($prefix$$23$$).then(function($val$$51$$) {
        null != $val$$51$$ && ($item$$118$$ = $self$$153$$.$_findItem$($val$$51$$), null != $item$$118$$ && $self$$153$$.$_setFocus$($item$$118$$));
      });
    }, $_updateAriaProperties$:function($item$$119$$) {
      var $includes$$2_val$$52$$, $valueText$$ = "";
      $includes$$2_val$$52$$ = $item$$119$$.attr("data-includes");
      null != $includes$$2_val$$52$$ ? ($includes$$2_val$$52$$ = $includes$$2_val$$52$$.split("|"), 0 < $includes$$2_val$$52$$.length && ($valueText$$ = this.$getTranslatedString$("ariaInBetweenText", {first:$includes$$2_val$$52$$[0], second:$includes$$2_val$$52$$[$includes$$2_val$$52$$.length - 1]}))) : ($includes$$2_val$$52$$ = $item$$119$$.attr("data-range"), $valueText$$ = $includes$$2_val$$52$$ === $oj$$34$$.$IndexerModel$.PREFIX_OTHERS ? this.$getTranslatedString$("ariaOthersLabel") : $includes$$2_val$$52$$);
      $item$$119$$.hasClass("oj-disabled") && ($valueText$$ = $valueText$$ + ". " + this.$getTranslatedString$("ariaDisabledLabel"));
      this.element.attr("aria-valuetext", $valueText$$);
      this.element.attr("aria-valuenow", $item$$119$$.index());
    }, $_findItem$:function($prefix$$24$$) {
      var $children$$10$$, $i$$337$$, $item$$120$$, $value$$266$$, $includes$$3$$;
      $children$$10$$ = this.element.children();
      for ($i$$337$$ = 0;$i$$337$$ < $children$$10$$.length;$i$$337$$++) {
        if ($item$$120$$ = $children$$10$$.get($i$$337$$), $value$$266$$ = $$$$31$$($item$$120$$).attr("data-range"), $includes$$3$$ = $$$$31$$($item$$120$$).attr("data-includes"), null != $value$$266$$ && $value$$266$$ == $prefix$$24$$ || null != $includes$$3$$ && -1 < $includes$$3$$.indexOf($prefix$$24$$)) {
          return $$$$31$$($item$$120$$);
        }
      }
      return null;
    }, $_unregisterResizeListener$:function($element$$131$$) {
      $element$$131$$ && this.$_resizeHandler$ && $oj$$34$$.$DomUtils$.$removeResizeListener$($element$$131$$, this.$_resizeHandler$);
    }, $_registerResizeListener$:function($element$$132$$) {
      $element$$132$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$34$$.$DomUtils$.$addResizeListener$($element$$132$$, this.$_resizeHandler$));
    }, $_unregisterTouchHandler$:function($element$$133$$) {
      $$$$31$$($element$$133$$).off("panstart panmove panend");
    }, $_registerTouchHandler$:function($element$$134$$) {
      var $self$$154$$ = this, $options$$306$$, $target$$91$$, $x$$54$$, $y$$38$$, $currentTarget$$, $currentPrefix$$, $currentY$$, $previousY$$, $delta$$5$$, $range$$16$$, $index$$192$$, $prefix$$25$$;
      $options$$306$$ = {recognizers:[[$Hammer$$4$$.Pan, {direction:$Hammer$$4$$.DIRECTION_VERTICAL}]]};
      $$$$31$$($element$$134$$).$ojHammer$($options$$306$$).on("panstart", function($event$$414$$) {
        $target$$91$$ = $event$$414$$.gesture.target;
        $x$$54$$ = $self$$154$$.element[0].getBoundingClientRect().left + 5;
        $y$$38$$ = $target$$91$$.getBoundingClientRect().top;
        $self$$154$$.$_setCurrent$($$$$31$$($target$$91$$));
        $currentTarget$$ = $target$$91$$;
        $currentPrefix$$ = $target$$91$$.getAttribute("data-range");
        $currentY$$ = $y$$38$$;
      }).on("panmove", function($event$$415$$) {
        $previousY$$ = $currentY$$;
        $currentY$$ = $y$$38$$ + $event$$415$$.gesture.deltaY;
        $target$$91$$ = document.elementFromPoint($x$$54$$, $currentY$$);
        null != $target$$91$$ && ($delta$$5$$ = $currentY$$ - $previousY$$, $currentTarget$$ == $target$$91$$ ? ($range$$16$$ = $target$$91$$.getAttribute("data-includes"), null != $range$$16$$ && ($range$$16$$ = $range$$16$$.split("|"), $index$$192$$ = $range$$16$$.indexOf($currentPrefix$$), $prefix$$25$$ = null, 0 < $delta$$5$$ && $index$$192$$ < $range$$16$$.length - 1 ? $prefix$$25$$ = $range$$16$$[$index$$192$$ + 1] : 0 > $delta$$5$$ && 0 < $index$$192$$ && ($prefix$$25$$ = $range$$16$$[$index$$192$$ - 
        1]), null != $prefix$$25$$ && ($currentPrefix$$ = $prefix$$25$$, $self$$154$$.$_setCurrentPrefix$($prefix$$25$$)))) : $target$$91$$.hasAttribute("data-range") && ($range$$16$$ = $target$$91$$.getAttribute("data-includes"), $prefix$$25$$ = null, null != $range$$16$$ && (0 < $delta$$5$$ && $target$$91$$ == $currentTarget$$.nextElementSibling ? $prefix$$25$$ = $range$$16$$[0] : 0 > $delta$$5$$ && $target$$91$$ == $currentTarget$$.previousElementSibling && ($prefix$$25$$ = $range$$16$$[$range$$16$$.length - 
        1])), null == $prefix$$25$$ && ($prefix$$25$$ = $target$$91$$.getAttribute("data-range")), $currentTarget$$ = $target$$91$$, $currentPrefix$$ = $prefix$$25$$, $self$$154$$.$_setCurrentPrefix$($currentPrefix$$)));
      }).on("panend", function() {
        $prefix$$25$$ = $currentY$$ = $currentPrefix$$ = $currentTarget$$ = null;
      });
    }, $_handleResize$:function($width$$27$$, $height$$28$$) {
      0 < $width$$27$$ && 0 < $height$$28$$ && this.refresh();
    }});
  })();
  $oj$$34$$.$ListViewIndexerModel$ = function $$oj$$34$$$$ListViewIndexerModel$$($listview$$) {
    this.$listview$ = $listview$$;
    this.Init();
  };
  $goog$exportPath_$$("ListViewIndexerModel", $oj$$34$$.$ListViewIndexerModel$, $oj$$34$$);
  $oj$$34$$.$Object$.$createSubclass$($oj$$34$$.$ListViewIndexerModel$, $oj$$34$$.$EventSource$, "oj.ListViewIndexerModel");
  $oj$$34$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes = function $$oj$$34$$$$ListViewIndexerModel$$$getIndexablePrefixes$() {
    return this.$listview$.$ojContext$.$getTranslatedString$("indexerCharacters").split("|");
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$34$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes});
  $oj$$34$$.$ListViewIndexerModel$.prototype.getPrefixes = function $$oj$$34$$$$ListViewIndexerModel$$$getPrefixes$() {
    null == this.$availablePrefixes$ && (this.$availablePrefixes$ = this.$_getAvailablePrefixes$());
    return this.$availablePrefixes$;
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$34$$.$ListViewIndexerModel$.prototype.getPrefixes});
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_getAvailablePrefixes$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_getAvailablePrefixes$$() {
    var $results$$9$$ = [], $groupItems$$5$$ = this.$listview$.$_getGroupItemsCache$();
    if (null != $groupItems$$5$$) {
      for (var $prefixes$$3$$ = this.getIndexablePrefixes(), $i$$338$$ = 0;$i$$338$$ < $prefixes$$3$$.length;$i$$338$$++) {
        var $prefix$$26$$ = $prefixes$$3$$[$i$$338$$];
        $groupItems$$5$$.each(function() {
          if (0 == $$$$31$$(this).text().indexOf($prefix$$26$$)) {
            return $results$$9$$.push($prefix$$26$$), !1;
          }
        });
      }
    }
    return $results$$9$$;
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.setPrefix = function $$oj$$34$$$$ListViewIndexerModel$$$setPrefix$($prefix$$27$$) {
    return $prefix$$27$$ == $oj$$34$$.$IndexerModel$.PREFIX_OTHERS ? this.$_setOtherPrefix$() : this.$_setPrefix$($prefix$$27$$);
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.setPrefix", {setPrefix:$oj$$34$$.$ListViewIndexerModel$.prototype.setPrefix});
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_setOtherPrefix$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_setOtherPrefix$$() {
    var $prefixes$$4$$, $self$$155$$ = this, $match$$22$$, $groupItems$$6$$, $content$$34$$, $i$$339$$, $prefix$$28$$;
    $prefixes$$4$$ = this.getIndexablePrefixes();
    return new Promise(function($resolve$$38$$) {
      $match$$22$$ = null;
      $groupItems$$6$$ = $self$$155$$.$listview$.$_getGroupItemsCache$();
      null != $groupItems$$6$$ && $groupItems$$6$$.each(function() {
        $content$$34$$ = $$$$31$$(this).text();
        for ($i$$339$$ = 0;$i$$339$$ < $prefixes$$4$$.length;$i$$339$$++) {
          if ($prefix$$28$$ = $prefixes$$4$$[$i$$339$$], 0 == $content$$34$$.indexOf($prefix$$28$$)) {
            return!0;
          }
        }
        $match$$22$$ = this;
        return!1;
      });
      $match$$22$$ ? ($self$$155$$.$listview$.$_scrollToGroupHeader$($match$$22$$), $resolve$$38$$($oj$$34$$.$IndexerModel$.PREFIX_OTHERS)) : $resolve$$38$$(null);
    });
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_setPrefix$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_setPrefix$$($prefix$$29$$) {
    var $prefixes$$5$$, $index$$195$$, $self$$156$$ = this, $match$$23$$ = null, $groupHeader$$2$$;
    $prefixes$$5$$ = this.getIndexablePrefixes();
    $index$$195$$ = $prefixes$$5$$.indexOf($prefix$$29$$);
    return new Promise(function($resolve$$39$$) {
      if (-1 == $index$$195$$) {
        $resolve$$39$$(null);
      } else {
        for (;$index$$195$$ < $prefixes$$5$$.length;) {
          $prefix$$29$$ = $prefixes$$5$$[$index$$195$$];
          $groupHeader$$2$$ = $self$$156$$.$_findGroupHeader$($prefix$$29$$);
          if (null != $groupHeader$$2$$) {
            $self$$156$$.$listview$.$_scrollToGroupHeader$($groupHeader$$2$$);
            $match$$23$$ = $prefix$$29$$;
            break;
          }
          $index$$195$$++;
        }
        $resolve$$39$$($match$$23$$);
      }
    });
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_findGroupHeader$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_findGroupHeader$$($prefix$$30$$) {
    var $match$$24$$, $groupItems$$7$$, $content$$35$$;
    $groupItems$$7$$ = this.$listview$.$_getGroupItemsCache$();
    null != $groupItems$$7$$ && $groupItems$$7$$.each(function() {
      $content$$35$$ = $$$$31$$(this).text();
      if (0 == $content$$35$$.indexOf($prefix$$30$$)) {
        return $match$$24$$ = this, !1;
      }
    });
    return $match$$24$$;
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.$fireChangeEvent$ = function $$oj$$34$$$$ListViewIndexerModel$$$$fireChangeEvent$$() {
    this.$availablePrefixes$ = null;
    this.handleEvent($oj$$34$$.$IndexerModel$.$EventType$.CHANGE, {});
  };
  $oj$$34$$.$IndexerModel$ = function $$oj$$34$$$$IndexerModel$$() {
  };
  $goog$exportPath_$$("IndexerModel", $oj$$34$$.$IndexerModel$, $oj$$34$$);
  $oj$$34$$.$IndexerModel$.PREFIX_OTHERS = "__others__";
  $goog$exportPath_$$("IndexerModel.PREFIX_OTHERS", $oj$$34$$.$IndexerModel$.PREFIX_OTHERS, $oj$$34$$);
  $oj$$34$$.$IndexerModel$.$EventType$ = {CHANGE:"change"};
  $goog$exportPath_$$("IndexerModel.EventType", $oj$$34$$.$IndexerModel$.$EventType$, $oj$$34$$);
  $oj$$34$$.$IndexerModel$.prototype.setPrefix = function $$oj$$34$$$$IndexerModel$$$setPrefix$() {
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.setPrefix", {setPrefix:$oj$$34$$.$IndexerModel$.prototype.setPrefix});
  $oj$$34$$.$IndexerModel$.prototype.getIndexablePrefixes = function $$oj$$34$$$$IndexerModel$$$getIndexablePrefixes$() {
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$34$$.$IndexerModel$.prototype.getIndexablePrefixes});
  $oj$$34$$.$IndexerModel$.prototype.getPrefixes = function $$oj$$34$$$$IndexerModel$$$getPrefixes$() {
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$34$$.$IndexerModel$.prototype.getPrefixes});
});
