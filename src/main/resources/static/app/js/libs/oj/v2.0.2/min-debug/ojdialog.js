/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore", "jqueryui-amd/draggable", "jqueryui-amd/mouse"], function($oj$$38$$, $$$$35$$) {
  (function() {
    $oj$$38$$.$__registerWidget$("oj.ojResizable", $$$$35$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, resize:null, start:null, stop:null}, $_num$:function($value$$268$$) {
      return parseInt($value$$268$$, 10) || 0;
    }, $_isNumber$:function($value$$269$$) {
      return!isNaN(parseInt($value$$269$$, 10));
    }, $_hasScroll$:function($el$$10$$, $a$$111$$) {
      if ("hidden" === $$$$35$$($el$$10$$).css("overflow")) {
        return!1;
      }
      var $scroll$$1$$ = $a$$111$$ && "left" === $a$$111$$ ? "scrollLeft" : "scrollTop", $has$$ = !1;
      if (0 < $el$$10$$[$scroll$$1$$]) {
        return!0;
      }
      $el$$10$$[$scroll$$1$$] = 1;
      $has$$ = 0 < $el$$10$$[$scroll$$1$$];
      $el$$10$$[$scroll$$1$$] = 0;
      return $has$$;
    }, _ComponentCreate:function() {
      this._super();
      var $n$$24_o$$, $i$$340_mouseConstructor$$, $handle$$19$$, $axis$$27$$, $hname$$, $that$$1$$ = this;
      $n$$24_o$$ = this.options;
      $i$$340_mouseConstructor$$ = this.element.mouse.bind(this.element);
      $i$$340_mouseConstructor$$();
      this.$mouse$ = $i$$340_mouseConstructor$$("instance");
      this.$mouse$._mouseCapture = function $this$$mouse$$_mouseCapture$($event$$427$$) {
        return $that$$1$$.$_mouseCapture$($event$$427$$);
      };
      this.$mouse$._mouseStart = function $this$$mouse$$_mouseStart$($event$$428$$) {
        return $that$$1$$.$_mouseStart$($event$$428$$);
      };
      this.$mouse$._mouseDrag = function $this$$mouse$$_mouseDrag$($event$$429$$) {
        return $that$$1$$.$_mouseDrag$($event$$429$$);
      };
      this.$mouse$._mouseStop = function $this$$mouse$$_mouseStop$($event$$430$$) {
        return $that$$1$$.$_mouseStop$($event$$430$$);
      };
      this.element.addClass("oj-resizable");
      $$$$35$$.extend(this, {$originalElement$:this.element, $_proportionallyResizeElements$:[], $_helper$:null});
      this.handles = $n$$24_o$$.handles || ($$$$35$$(".oj-resizable-handle", this.element).length ? {$n$:".oj-resizable-n", $e$:".oj-resizable-e", $s$:".oj-resizable-s", $w$:".oj-resizable-w", $se$:".oj-resizable-se", $sw$:".oj-resizable-sw", $ne$:".oj-resizable-ne", $nw$:".oj-resizable-nw"} : "e,s,se");
      if (this.handles.constructor === String) {
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), $n$$24_o$$ = this.handles.split(","), this.handles = {}, $i$$340_mouseConstructor$$ = 0;$i$$340_mouseConstructor$$ < $n$$24_o$$.length;$i$$340_mouseConstructor$$++) {
          $handle$$19$$ = $$$$35$$.trim($n$$24_o$$[$i$$340_mouseConstructor$$]), $hname$$ = "oj-resizable-" + $handle$$19$$, $axis$$27$$ = $$$$35$$("\x3cdiv class\x3d'oj-resizable-handle " + $hname$$ + "'\x3e\x3c/div\x3e"), this.handles[$handle$$19$$] = ".oj-resizable-" + $handle$$19$$, this.element.append($axis$$27$$);
        }
      }
      this.$_renderAxis$ = function $this$$_renderAxis$$() {
        for (var $i$$341$$ in this.handles) {
          this.handles[$i$$341$$].constructor === String && (this.handles[$i$$341$$] = this.element.children(this.handles[$i$$341$$]).first().show());
        }
      };
      this.$_renderAxis$();
      this.$_handles$ = $$$$35$$(".oj-resizable-handle", this.element);
      this.$_handles$.mouseover(function() {
        $that$$1$$.$resizing$ || (this.className && ($axis$$27$$ = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), $that$$1$$.axis = $axis$$27$$ && $axis$$27$$[1] ? $axis$$27$$[1] : "se");
      });
      this.$mouse$._mouseInit();
    }, _destroy:function() {
      this.$mouse$ && this.$mouse$._mouseDestroy();
      try {
        this.$mouse$.destroy(), this.$mouse$ = null;
      } catch ($e$$94$$) {
      }
      $$$$35$$(this.$originalElement$).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();
      return this;
    }, $_mouseCapture$:function($event$$431$$) {
      var $i$$342$$, $handle$$20$$, $capture$$ = !1;
      for ($i$$342$$ in this.handles) {
        if ($handle$$20$$ = $$$$35$$(this.handles[$i$$342$$])[0], $handle$$20$$ === $event$$431$$.target || $$$$35$$.contains($handle$$20$$, $event$$431$$.target)) {
          $capture$$ = !0;
        }
      }
      return!this.options.disabled && $capture$$;
    }, $_mouseStart$:function($event$$432$$) {
      var $curleft_iniPos$$, $curtop$$, $cursor_o$$1$$;
      $cursor_o$$1$$ = this.options;
      $curleft_iniPos$$ = this.element.position();
      var $el$$11$$ = this.element;
      this.$resizing$ = !0;
      /absolute/.test($el$$11$$.css("position")) ? $el$$11$$.css({position:"absolute", top:$el$$11$$.css("top"), left:$el$$11$$.css("left")}) : $el$$11$$.is(".oj-draggable") && $el$$11$$.css({position:"absolute", top:$curleft_iniPos$$.top, left:$curleft_iniPos$$.left});
      this.$_renderProxy$();
      $curleft_iniPos$$ = this.$_num$(this.helper.css("left"));
      $curtop$$ = this.$_num$(this.helper.css("top"));
      $cursor_o$$1$$.containment && ($curleft_iniPos$$ += $$$$35$$($cursor_o$$1$$.containment).scrollLeft() || 0, $curtop$$ += $$$$35$$($cursor_o$$1$$.containment).scrollTop() || 0);
      this.offset = this.helper.offset();
      this.position = {left:$curleft_iniPos$$, top:$curtop$$};
      this.size = {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalSize$ = {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalPosition$ = {left:$curleft_iniPos$$, top:$curtop$$};
      this.$sizeDiff$ = {width:$el$$11$$.outerWidth() - $el$$11$$.width(), height:$el$$11$$.outerHeight() - $el$$11$$.height()};
      this.$originalMousePosition$ = {left:$event$$432$$.pageX, top:$event$$432$$.pageY};
      this.$aspectRatio$ = this.$originalSize$.width / this.$originalSize$.height || 1;
      $cursor_o$$1$$ = $$$$35$$(".oj-resizable-" + this.axis).css("cursor");
      $$$$35$$("body").css("cursor", "auto" === $cursor_o$$1$$ ? this.axis + "-resize" : $cursor_o$$1$$);
      $el$$11$$.addClass("oj-resizable-resizing");
      this.$_propagate$("start", $event$$432$$);
      this.$_alsoresize_start$($event$$432$$);
      this.$_containment_start$($event$$432$$);
      return!0;
    }, $_mouseDrag$:function($event$$433$$) {
      var $data$$146_dx$$4$$, $el$$12$$ = this.helper, $props$$17$$ = {}, $dy$$4_smp$$ = this.$originalMousePosition$;
      $data$$146_dx$$4$$ = $event$$433$$.pageX - $dy$$4_smp$$.left || 0;
      var $dy$$4_smp$$ = $event$$433$$.pageY - $dy$$4_smp$$.top || 0, $trigger$$4$$ = this.$_change$[this.axis];
      this.$prevPosition$ = {top:this.position.top, left:this.position.left};
      this.$prevSize$ = {width:this.size.width, height:this.size.height};
      if (!$trigger$$4$$) {
        return!1;
      }
      $data$$146_dx$$4$$ = $trigger$$4$$.apply(this, [$event$$433$$, $data$$146_dx$$4$$, $dy$$4_smp$$]);
      this.$_updateVirtualBoundaries$($event$$433$$.shiftKey);
      $event$$433$$.shiftKey && ($data$$146_dx$$4$$ = this.$_updateRatio$($data$$146_dx$$4$$, $event$$433$$));
      $data$$146_dx$$4$$ = this.$_respectSize$($data$$146_dx$$4$$, $event$$433$$);
      this.$_updateCache$($data$$146_dx$$4$$);
      this.$_propagate$("resize", $event$$433$$);
      this.$_alsoresize_resize$($event$$433$$, this.ui());
      this.$_containment_resize$($event$$433$$, this.ui());
      this.position.top !== this.$prevPosition$.top && ($props$$17$$.top = this.position.top + "px");
      this.position.left !== this.$prevPosition$.left && ($props$$17$$.left = this.position.left + "px");
      this.size.width !== this.$prevSize$.width && ($props$$17$$.width = this.size.width + "px");
      this.size.height !== this.$prevSize$.height && ($props$$17$$.height = this.size.height + "px");
      $el$$12$$.css($props$$17$$);
      !this.$_helper$ && this.$_proportionallyResizeElements$.length && this.$_proportionallyResize$();
      $$$$35$$.isEmptyObject($props$$17$$) || this._trigger("resize", $event$$433$$, this.ui());
      return!1;
    }, $_mouseStop$:function($event$$434$$) {
      this.$resizing$ = !1;
      $$$$35$$("body").css("cursor", "auto");
      this.element.removeClass("oj-resizable-resizing");
      this.$_propagate$("stop", $event$$434$$);
      this.$_alsoresize_stop$($event$$434$$);
      this.$_containment_stop$($event$$434$$);
      return!1;
    }, $_updateVirtualBoundaries$:function($forceAspectRatio_pMinWidth$$) {
      var $pMaxWidth$$, $pMinHeight$$, $pMaxHeight$$, $b$$68_o$$3$$;
      $b$$68_o$$3$$ = this.options;
      $b$$68_o$$3$$ = {minWidth:this.$_isNumber$($b$$68_o$$3$$.minWidth) ? $b$$68_o$$3$$.minWidth : 0, maxWidth:this.$_isNumber$($b$$68_o$$3$$.maxWidth) ? $b$$68_o$$3$$.maxWidth : Infinity, minHeight:this.$_isNumber$($b$$68_o$$3$$.minHeight) ? $b$$68_o$$3$$.minHeight : 0, maxHeight:this.$_isNumber$($b$$68_o$$3$$.maxHeight) ? $b$$68_o$$3$$.maxHeight : Infinity};
      $forceAspectRatio_pMinWidth$$ && ($forceAspectRatio_pMinWidth$$ = $b$$68_o$$3$$.minHeight * this.$aspectRatio$, $pMinHeight$$ = $b$$68_o$$3$$.minWidth / this.$aspectRatio$, $pMaxWidth$$ = $b$$68_o$$3$$.maxHeight * this.$aspectRatio$, $pMaxHeight$$ = $b$$68_o$$3$$.maxWidth / this.$aspectRatio$, $forceAspectRatio_pMinWidth$$ > $b$$68_o$$3$$.minWidth && ($b$$68_o$$3$$.minWidth = $forceAspectRatio_pMinWidth$$), $pMinHeight$$ > $b$$68_o$$3$$.minHeight && ($b$$68_o$$3$$.minHeight = $pMinHeight$$), 
      $pMaxWidth$$ < $b$$68_o$$3$$.maxWidth && ($b$$68_o$$3$$.maxWidth = $pMaxWidth$$), $pMaxHeight$$ < $b$$68_o$$3$$.maxHeight && ($b$$68_o$$3$$.maxHeight = $pMaxHeight$$));
      this.$_vBoundaries$ = $b$$68_o$$3$$;
    }, $_updateCache$:function($data$$147$$) {
      this.offset = this.helper.offset();
      this.$_isNumber$($data$$147$$.left) && (this.position.left = $data$$147$$.left);
      this.$_isNumber$($data$$147$$.top) && (this.position.top = $data$$147$$.top);
      this.$_isNumber$($data$$147$$.height) && (this.size.height = $data$$147$$.height);
      this.$_isNumber$($data$$147$$.width) && (this.size.width = $data$$147$$.width);
    }, $_updateRatio$:function($data$$148$$) {
      var $cpos$$ = this.position, $csize$$ = this.size, $a$$113$$ = this.axis;
      this.$_isNumber$($data$$148$$.height) ? $data$$148$$.width = $data$$148$$.height * this.$aspectRatio$ : this.$_isNumber$($data$$148$$.width) && ($data$$148$$.height = $data$$148$$.width / this.$aspectRatio$);
      "sw" === $a$$113$$ && ($data$$148$$.left = $cpos$$.left + ($csize$$.width - $data$$148$$.width), $data$$148$$.top = null);
      "nw" === $a$$113$$ && ($data$$148$$.top = $cpos$$.top + ($csize$$.height - $data$$148$$.height), $data$$148$$.left = $cpos$$.left + ($csize$$.width - $data$$148$$.width));
      return $data$$148$$;
    }, $_respectSize$:function($data$$149$$) {
      var $o$$4$$ = this.$_vBoundaries$, $a$$114_ch$$2$$ = this.axis, $ismaxw$$ = this.$_isNumber$($data$$149$$.width) && $o$$4$$.maxWidth && $o$$4$$.maxWidth < $data$$149$$.width, $ismaxh$$ = this.$_isNumber$($data$$149$$.height) && $o$$4$$.maxHeight && $o$$4$$.maxHeight < $data$$149$$.height, $isminw$$ = this.$_isNumber$($data$$149$$.width) && $o$$4$$.minWidth && $o$$4$$.minWidth > $data$$149$$.width, $isminh$$ = this.$_isNumber$($data$$149$$.height) && $o$$4$$.minHeight && $o$$4$$.minHeight > 
      $data$$149$$.height, $dw$$ = this.$originalPosition$.left + this.$originalSize$.width, $dh$$ = this.position.top + this.size.height, $cw$$ = /sw|nw|w/.test($a$$114_ch$$2$$), $a$$114_ch$$2$$ = /nw|ne|n/.test($a$$114_ch$$2$$);
      $isminw$$ && ($data$$149$$.width = $o$$4$$.minWidth);
      $isminh$$ && ($data$$149$$.height = $o$$4$$.minHeight);
      $ismaxw$$ && ($data$$149$$.width = $o$$4$$.maxWidth);
      $ismaxh$$ && ($data$$149$$.height = $o$$4$$.maxHeight);
      $isminw$$ && $cw$$ && ($data$$149$$.left = $dw$$ - $o$$4$$.minWidth);
      $ismaxw$$ && $cw$$ && ($data$$149$$.left = $dw$$ - $o$$4$$.maxWidth);
      $isminh$$ && $a$$114_ch$$2$$ && ($data$$149$$.top = $dh$$ - $o$$4$$.minHeight);
      $ismaxh$$ && $a$$114_ch$$2$$ && ($data$$149$$.top = $dh$$ - $o$$4$$.maxHeight);
      $data$$149$$.width || $data$$149$$.height || $data$$149$$.left || !$data$$149$$.top ? $data$$149$$.width || $data$$149$$.height || $data$$149$$.top || !$data$$149$$.left || ($data$$149$$.left = null) : $data$$149$$.top = null;
      return $data$$149$$;
    }, $_proportionallyResize$:function() {
      if (this.$_proportionallyResizeElements$.length) {
        var $i$$343$$, $j$$44$$, $borders$$, $paddings$$, $prel$$, $element$$135$$ = this.helper || this.element;
        for ($i$$343$$ = 0;$i$$343$$ < this.$_proportionallyResizeElements$.length;$i$$343$$++) {
          $prel$$ = this.$_proportionallyResizeElements$[$i$$343$$];
          if (!this.$borderDif$) {
            for (this.$borderDif$ = [], $borders$$ = [$prel$$.css("borderTopWidth"), $prel$$.css("borderRightWidth"), $prel$$.css("borderBottomWidth"), $prel$$.css("borderLeftWidth")], $paddings$$ = [$prel$$.css("paddingTop"), $prel$$.css("paddingRight"), $prel$$.css("paddingBottom"), $prel$$.css("paddingLeft")], $j$$44$$ = 0;$j$$44$$ < $borders$$.length;$j$$44$$++) {
              this.$borderDif$[$j$$44$$] = (parseInt($borders$$[$j$$44$$], 10) || 0) + (parseInt($paddings$$[$j$$44$$], 10) || 0);
            }
          }
          $prel$$.css({height:$element$$135$$.height() - this.$borderDif$[0] - this.$borderDif$[2] || 0, width:$element$$135$$.width() - this.$borderDif$[1] - this.$borderDif$[3] || 0});
        }
      }
    }, $_renderProxy$:function() {
      this.element.offset();
      this.helper = this.element;
    }, $_change$:{e:function($event$$435$$, $dx$$5$$) {
      return{width:this.$originalSize$.width + $dx$$5$$};
    }, w:function($event$$436$$, $dx$$6$$) {
      return{left:this.$originalPosition$.left + $dx$$6$$, width:this.$originalSize$.width - $dx$$6$$};
    }, n:function($event$$437$$, $dx$$7$$, $dy$$5$$) {
      return{top:this.$originalPosition$.top + $dy$$5$$, height:this.$originalSize$.height - $dy$$5$$};
    }, s:function($event$$438$$, $dx$$8$$, $dy$$6$$) {
      return{height:this.$originalSize$.height + $dy$$6$$};
    }, se:function($event$$439$$, $dx$$9$$, $dy$$7$$) {
      return $$$$35$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.e.apply(this, [$event$$439$$, $dx$$9$$, $dy$$7$$]));
    }, sw:function($event$$440$$, $dx$$10$$, $dy$$8$$) {
      return $$$$35$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.w.apply(this, [$event$$440$$, $dx$$10$$, $dy$$8$$]));
    }, ne:function($event$$441$$, $dx$$11$$, $dy$$9$$) {
      return $$$$35$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.e.apply(this, [$event$$441$$, $dx$$11$$, $dy$$9$$]));
    }, nw:function($event$$442$$, $dx$$12$$, $dy$$10$$) {
      return $$$$35$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.w.apply(this, [$event$$442$$, $dx$$12$$, $dy$$10$$]));
    }}, $_propagate$:function($n$$25$$, $event$$443$$) {
      "resize" !== $n$$25$$ && this._trigger($n$$25$$, $event$$443$$, this.ui());
    }, $_alsoresize_start$:function() {
      function $_store$$($exp$$3$$) {
        $$$$35$$($exp$$3$$).each(function() {
          var $el$$14$$ = $$$$35$$(this);
          $el$$14$$.data("oj-resizable-alsoresize", {width:parseInt($el$$14$$.width(), 10), height:parseInt($el$$14$$.height(), 10), left:parseInt($el$$14$$.css("left"), 10), top:parseInt($el$$14$$.css("top"), 10)});
        });
      }
      var $o$$6$$ = this.options;
      "object" !== typeof $o$$6$$.alsoResize || $o$$6$$.alsoResize.parentNode ? $_store$$($o$$6$$.alsoResize) : $o$$6$$.alsoResize.length ? ($o$$6$$.alsoResize = $o$$6$$.alsoResize[0], $_store$$($o$$6$$.alsoResize)) : $$$$35$$.each($o$$6$$.alsoResize, function($exp$$4$$) {
        $_store$$($exp$$4$$);
      });
    }, $_alsoresize_resize$:function($event$$444$$, $ui$$22$$) {
      function $_alsoResize$$($exp$$5$$, $c$$46$$) {
        $$$$35$$($exp$$5$$).each(function() {
          var $el$$15$$ = $$$$35$$(this), $start$$47$$ = $$$$35$$(this).data("oj-resizable-alsoresize"), $style$$8$$ = {};
          $$$$35$$.each($c$$46$$ && $c$$46$$.length ? $c$$46$$ : $el$$15$$.parents($ui$$22$$.$originalElement$[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], function($i$$344$$, $prop$$66$$) {
            var $sum$$ = ($start$$47$$[$prop$$66$$] || 0) + ($delta$$7$$[$prop$$66$$] || 0);
            $sum$$ && 0 <= $sum$$ && ($style$$8$$[$prop$$66$$] = $sum$$ || null);
          });
          $el$$15$$.css($style$$8$$);
        });
      }
      var $o$$7$$ = this.options, $os$$1$$ = this.$originalSize$, $op$$ = this.$originalPosition$, $delta$$7$$ = {height:this.size.height - $os$$1$$.height || 0, width:this.size.width - $os$$1$$.width || 0, top:this.position.top - $op$$.top || 0, left:this.position.left - $op$$.left || 0};
      "object" !== typeof $o$$7$$.alsoResize || $o$$7$$.alsoResize.nodeType ? $_alsoResize$$($o$$7$$.alsoResize, null) : $$$$35$$.each($o$$7$$.alsoResize, function($exp$$6$$, $c$$47$$) {
        $_alsoResize$$($exp$$6$$, $c$$47$$);
      });
    }, $_alsoresize_stop$:function() {
      $$$$35$$(this).removeData("oj-resizable-alsoresize");
    }, $_containment_start$:function() {
      var $element$$136$$, $p$$6$$, $co_oc$$, $ch$$3_height$$30$$, $cw$$1_width$$29$$, $that$$5$$ = this, $ce_el$$16$$ = $that$$5$$.element;
      $co_oc$$ = $that$$5$$.options.containment;
      if ($ce_el$$16$$ = $co_oc$$ instanceof $$$$35$$ ? $co_oc$$.get(0) : /parent/.test($co_oc$$) ? $ce_el$$16$$.parent().get(0) : $co_oc$$) {
        $that$$5$$.$containerElement$ = $$$$35$$($ce_el$$16$$), /document/.test($co_oc$$) || $co_oc$$ === document ? ($that$$5$$.$containerOffset$ = {left:0, top:0}, $that$$5$$.$containerPosition$ = {left:0, top:0}, $that$$5$$.$parentData$ = {element:$$$$35$$(document), left:0, top:0, width:$$$$35$$(document).width(), height:$$$$35$$(document).height() || document.body.parentNode.scrollHeight}) : ($element$$136$$ = $$$$35$$($ce_el$$16$$), $p$$6$$ = [], $$$$35$$(["Top", "Right", "Left", "Bottom"]).each(function($i$$345$$, 
        $name$$124$$) {
          $p$$6$$[$i$$345$$] = $that$$5$$.$_num$($element$$136$$.css("padding" + $name$$124$$));
        }), $that$$5$$.$containerOffset$ = $element$$136$$.offset(), $that$$5$$.$containerPosition$ = $element$$136$$.position(), $that$$5$$.$containerSize$ = {height:$element$$136$$.innerHeight() - $p$$6$$[3], width:$element$$136$$.innerWidth() - $p$$6$$[1]}, $co_oc$$ = $that$$5$$.$containerOffset$, $ch$$3_height$$30$$ = $that$$5$$.$containerSize$.height, $cw$$1_width$$29$$ = $that$$5$$.$containerSize$.width, $cw$$1_width$$29$$ = $that$$5$$.$_hasScroll$($ce_el$$16$$, "left") ? $ce_el$$16$$.scrollWidth : 
        $cw$$1_width$$29$$, $ch$$3_height$$30$$ = $that$$5$$.$_hasScroll$($ce_el$$16$$) ? $ce_el$$16$$.scrollHeight : $ch$$3_height$$30$$, $that$$5$$.$parentData$ = {element:$ce_el$$16$$, left:$co_oc$$.left, top:$co_oc$$.top, width:$cw$$1_width$$29$$, height:$ch$$3_height$$30$$});
      }
    }, $_containment_resize$:function($event$$445$$, $ui$$23$$) {
      var $o$$9_woset$$, $co$$1_hoset$$, $cop_isParent$$, $cp_isOffsetRelative$$;
      $o$$9_woset$$ = this.options;
      $co$$1_hoset$$ = this.$containerOffset$;
      $cp_isOffsetRelative$$ = this.position;
      var $pRatio$$ = $event$$445$$.shiftKey;
      $cop_isParent$$ = {top:0, left:0};
      var $ce$$1$$ = this.$containerElement$, $continueResize$$ = !0;
      $ce$$1$$[0] !== document && /static/.test($ce$$1$$.css("position")) && ($cop_isParent$$ = $co$$1_hoset$$);
      $cp_isOffsetRelative$$.left < (this.$_helper$ ? $co$$1_hoset$$.left : 0) && (this.size.width += this.$_helper$ ? this.position.left - $co$$1_hoset$$.left : this.position.left - $cop_isParent$$.left, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1), this.position.left = $o$$9_woset$$.helper ? $co$$1_hoset$$.left : 0);
      $cp_isOffsetRelative$$.top < (this.$_helper$ ? $co$$1_hoset$$.top : 0) && (this.size.height += this.$_helper$ ? this.position.top - $co$$1_hoset$$.top : this.position.top, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1), this.position.top = this.$_helper$ ? $co$$1_hoset$$.top : 0);
      this.offset.left = this.$parentData$.left + this.position.left;
      this.offset.top = this.$parentData$.top + this.position.top;
      $o$$9_woset$$ = Math.abs((this.$_helper$ ? this.offset.left - $cop_isParent$$.left : this.offset.left - $co$$1_hoset$$.left) + this.$sizeDiff$.width);
      $co$$1_hoset$$ = Math.abs((this.$_helper$ ? this.offset.top - $cop_isParent$$.top : this.offset.top - $co$$1_hoset$$.top) + this.$sizeDiff$.height);
      $cop_isParent$$ = this.$containerElement$.get(0) === this.element.parent().get(0);
      $cp_isOffsetRelative$$ = /relative|absolute/.test(this.$containerElement$.css("position"));
      $cop_isParent$$ && $cp_isOffsetRelative$$ && ($o$$9_woset$$ -= Math.abs(this.$parentData$.left));
      $o$$9_woset$$ + this.size.width >= this.$parentData$.width && (this.size.width = this.$parentData$.width - $o$$9_woset$$, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1));
      $co$$1_hoset$$ + this.size.height >= this.$parentData$.height && (this.size.height = this.$parentData$.height - $co$$1_hoset$$, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1));
      $continueResize$$ || (this.position.left = $ui$$23$$.$prevPosition$.left, this.position.top = $ui$$23$$.$prevPosition$.top, this.size.width = $ui$$23$$.$prevSize$.width, this.size.height = $ui$$23$$.$prevSize$.height);
    }, $_containment_stop$:function() {
      var $o$$10$$ = this.options, $co$$2$$ = this.$containerOffset$, $cop$$1$$ = this.$containerPosition$, $ce$$2$$ = this.$containerElement$, $h$$6_helper$$ = $$$$35$$(this.helper), $ho$$ = $h$$6_helper$$.offset(), $w$$6$$ = $h$$6_helper$$.outerWidth() - this.$sizeDiff$.width, $h$$6_helper$$ = $h$$6_helper$$.outerHeight() - this.$sizeDiff$.height;
      this.$_helper$ && !$o$$10$$.animate && /relative/.test($ce$$2$$.css("position")) && $$$$35$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$6$$, height:$h$$6_helper$$});
      this.$_helper$ && !$o$$10$$.animate && /static/.test($ce$$2$$.css("position")) && $$$$35$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$6$$, height:$h$$6_helper$$});
    }, ui:function() {
      return{$originalElement$:this.$originalElement$, element:this.element, helper:this.helper, position:this.position, size:this.size, $originalSize$:this.$originalSize$, $originalPosition$:this.$originalPosition$, $prevSize$:this.$prevSize$, $prevPosition$:this.$prevPosition$};
    }});
  })();
  (function() {
    $oj$$38$$.$__registerWidget$("oj.ojDialog", $$$$35$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancelBehavior:"icon", dragAffordance:"title-bar", initialVisibility:"hide", modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$9$$) {
      var $topOffset$$ = $$$$35$$(this).css($pos$$9$$).offset().top;
      0 > $topOffset$$ && $$$$35$$(this).css("top", $pos$$9$$.top - $topOffset$$);
    }}, resizeBehavior:"resizable", role:"dialog", title:null, beforeClose:null, beforeOpen:null, close:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _ComponentCreate:function() {
      this._super();
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialogHeader$ = !1;
      if (this.element.find(".oj-dialog").length) {
        var $that$$8$$ = this;
        this.element.find(".oj-dialog-header").each(function($index$$200$$, $li$$2$$) {
          var $dialogHeader$$ = $$$$35$$($li$$2$$);
          if (!$dialogHeader$$.closest(".oj-dialog-body").length) {
            return $that$$8$$.$_userDefinedHeader$ = $dialogHeader$$, $that$$8$$.$userDefinedDialogHeader$ = !0, !1;
          }
        });
      } else {
        this.$_userDefinedHeader$ = this.element.find(".oj-dialog-header"), this.$_userDefinedHeader$.length && (this.$userDefinedDialogHeader$ = !0);
      }
      this.$userDefinedDialogHeader$ ? (this.$_createPlaceHolderHeader$(this.$_userDefinedHeader$), this.$_userDefinedHeader$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && (this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$))) : this.$_createTitlebar$();
      this.$uiDialogFooter$ = this.element.children(".oj-dialog-footer");
      this.$_createPlaceHolderFooter$(this.$uiDialogFooter$);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.addClass("oj-helper-clearfix"), this.$uiDialogFooter$.appendTo(this.$uiDialog$));
      "title-bar" === this.options.dragAffordance && $$$$35$$.fn.draggable && this.$_makeDraggable$();
      this.$_isOpen$ = !1;
    }, $_AfterCreateEvent$:function() {
      "show" === this.options.initialVisibility && this.open();
    }, _destroy:function() {
      this.$_delayId$ && window.clearTimeout(this.$_delayId$);
      this.isOpen() && this.$_closeImplicitly$();
      this.$_resizableComponent$ && (this.$_resizableComponent$("instance") && this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.removeClass("oj-helper-clearfix"), $$$$35$$("#" + this.$_placeHolderFooterId$).replaceWith(this.$uiDialogFooter$));
      this.$_destroyCloseButton$();
      if (this.$userDefinedDialogHeader$) {
        var $header$$11$$ = this.$uiDialog$.find(".oj-dialog-header");
        $header$$11$$ && $$$$35$$("#" + this.$_placeHolderHeaderId$).replaceWith($header$$11$$);
      }
      this.$uiDialogTitle$ && (this.$uiDialogTitle$.remove(), this.$uiDialogTitle$ = null);
      this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.$originalCss$);
      this.$uiDialog$ && this.$uiDialog$.stop(!0, !0);
      this.element.unwrap();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      this.$uiDialogTitlebar$ && (this.$uiDialogTitlebar$.remove(), this.$uiDialogTitlebar$ = null);
      delete this.$_popupServiceEvents$;
      delete this.$_isOpen$;
      this._super();
    }, widget:function() {
      return this.$uiDialog$;
    }, disable:$$$$35$$.noop, enable:$$$$35$$.noop, close:function($event$$446$$) {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose", $event$$446$$) || this.$_ignoreBeforeCloseResultant$)) {
        this.$_isOpen$ = !1;
        this.$_focusedElement$ = null;
        this.opener.filter(":focusable").focus().length || $$$$35$$(this.document[0].activeElement).blur();
        var $psOptions$$2$$ = {};
        $psOptions$$2$$[$oj$$38$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
        $oj$$38$$.$PopupService$.$getInstance$().close($psOptions$$2$$);
        this._trigger("close", $event$$446$$);
      }
    }, isOpen:function() {
      return this.$_isOpen$;
    }, open:function($event$$447_isRtl$$3_position$$22$$) {
      if (!1 !== this._trigger("beforeOpen", $event$$447_isRtl$$3_position$$22$$)) {
        if (!this.isOpen()) {
          this.$_isOpen$ = !0;
          this.opener = $$$$35$$(this.document[0].activeElement);
          "resizable" === this.options.resizeBehavior && this.$_makeResizable$();
          $event$$447_isRtl$$3_position$$22$$ = "rtl" === this.$_GetReadingDirection$();
          $event$$447_isRtl$$3_position$$22$$ = $oj$$38$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $event$$447_isRtl$$3_position$$22$$);
          var $psOptions$$3$$ = {};
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.opener;
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$POSITION$] = $event$$447_isRtl$$3_position$$22$$;
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$MODALITY$] = this.options.modality;
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-dialog-layer";
          $psOptions$$3$$[$oj$$38$$.$PopupService$.$OPTION$.$LAYER_LEVEL$] = $oj$$38$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$;
          $oj$$38$$.$PopupService$.$getInstance$().open($psOptions$$3$$);
          this._trigger("open");
        }
        this.$_focusTabbable$();
      }
    }, refresh:function() {
      this._super();
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.$_focusedElement$;
      $hasFocus$$ && 0 < $hasFocus$$.length && $oj$$38$$.$DomUtils$.$isAncestorOrSelf$(this.$uiDialog$[0], $hasFocus$$[0]) || ($hasFocus$$ || ($hasFocus$$ = this.element.find("[autofocus]")), $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable")), $hasFocus$$.length || this.$uiDialogFooter$.length && ($hasFocus$$ = this.$uiDialogFooter$.find(":tabbable")), $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable")), $hasFocus$$.length || 
      ($hasFocus$$ = this.$uiDialog$), $hasFocus$$.eq(0).focus(), this._trigger("focus"));
    }, _keepFocus:function($activeElement$$inline_897_event$$448$$) {
      $activeElement$$inline_897_event$$448$$.preventDefault();
      $activeElement$$inline_897_event$$448$$ = this.document[0].activeElement;
      this.$uiDialog$[0] === $activeElement$$inline_897_event$$448$$ || $$$$35$$.contains(this.$uiDialog$[0], $activeElement$$inline_897_event$$448$$) || this.$_focusTabbable$();
    }, $_isNumber$:function($value$$270$$) {
      return!isNaN(parseInt($value$$270$$, 10));
    }, $_createWrapper$:function() {
      this.$_isResizing$ = !1;
      this.element.uniqueId();
      this.$_elementId$ = this.element.attr("id");
      this.$_wrapperId$ = "ojDialogWrapper-" + this.$_elementId$;
      this.$uiDialog$ = $$$$35$$("\x3cdiv\x3e");
      this.$uiDialog$.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1, role:this.options.role, id:this.$_wrapperId$});
      this.$uiDialog$.insertBefore(this.element);
      this._on(this.$uiDialog$, {keyup:function() {
      }, keydown:function($event$$450$$) {
        if ("none" != this.options.cancelBehavior && !$event$$450$$.isDefaultPrevented() && $event$$450$$.keyCode && $event$$450$$.keyCode === $$$$35$$.ui.keyCode.ESCAPE) {
          $event$$450$$.preventDefault(), $event$$450$$.stopImmediatePropagation(), this.close($event$$450$$);
        } else {
          if ($event$$450$$.keyCode === $$$$35$$.ui.keyCode.TAB && "modeless" !== this.options.modality) {
            var $tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$8_index$$201$$ = $tabbables$$.filter(":first"), $last$$5$$ = $tabbables$$.filter(":last");
            $event$$450$$.shiftKey ? $event$$450$$.shiftKey && ($event$$450$$.target === $first$$8_index$$201$$[0] || $event$$450$$.target === this.$uiDialog$[0] ? ($last$$5$$.focus(), $event$$450$$.preventDefault()) : ($first$$8_index$$201$$ = $tabbables$$.index(document.activeElement), 1 == $first$$8_index$$201$$ && $tabbables$$[0] && ($tabbables$$[0].focus(), $event$$450$$.preventDefault()))) : $event$$450$$.target === $last$$5$$[0] || $event$$450$$.target === this.$uiDialog$[0] ? ($first$$8_index$$201$$.focus(), 
            $event$$450$$.preventDefault()) : ($first$$8_index$$201$$ = $tabbables$$.index(document.activeElement), 0 == $first$$8_index$$201$$ && $tabbables$$[1] && ($tabbables$$[1].focus(), $event$$450$$.preventDefault()));
          }
        }
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")});
    }, $_destroyCloseButton$:function() {
      this.$uiDialogTitlebarCloseWrapper$ && (this.$uiDialogTitlebarCloseWrapper$.remove(), this.$uiDialogTitlebarClose$ = this.$uiDialogTitlebarCloseWrapper$ = null);
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarCloseWrapper$ = $$$$35$$("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex", "1").attr("aria-label", "close").attr("role", "button").appendTo($domDestination$$);
      this.$uiDialogTitlebarClose$ = $$$$35$$("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt", "close icon").prependTo(this.$uiDialogTitlebarCloseWrapper$);
      this._on(this.$uiDialogTitlebarCloseWrapper$, {click:function($event$$451$$) {
        $event$$451$$.preventDefault();
        $event$$451$$.stopImmediatePropagation();
        this.close($event$$451$$);
      }, mousedown:function($event$$452$$) {
        $$$$35$$($event$$452$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$453$$) {
        $$$$35$$($event$$453$$.currentTarget).removeClass("oj-active");
      }, mouseenter:function($event$$454$$) {
        $$$$35$$($event$$454$$.currentTarget).addClass("oj-hover");
      }, mouseleave:function($currTarget$$3_event$$455$$) {
        $currTarget$$3_event$$455$$ = $currTarget$$3_event$$455$$.currentTarget;
        $$$$35$$($currTarget$$3_event$$455$$).removeClass("oj-hover");
        $$$$35$$($currTarget$$3_event$$455$$).removeClass("oj-active");
      }, keyup:function($event$$456$$) {
        if ($event$$456$$.keyCode && $event$$456$$.keyCode === $$$$35$$.ui.keyCode.SPACE || $event$$456$$.keyCode === $$$$35$$.ui.keyCode.ENTER) {
          $event$$456$$.preventDefault(), $event$$456$$.stopImmediatePropagation(), this.close($event$$456$$);
        }
      }});
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$35$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$457$$) {
        $$$$35$$($event$$457$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus();
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$35$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")});
    }, $_title$:function($title$$10$$) {
      this.options.title || $title$$10$$.html("\x26#160;");
      $title$$10$$.text(this.options.title);
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$24$$) {
        return{position:$ui$$24$$.position, offset:$ui$$24$$.offset};
      }
      var $that$$9$$ = this, $options$$308$$ = this.options;
      this.$uiDialog$.draggable({$addClasses$:!1, cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", containment:"document", start:function($event$$458$$, $ui$$25$$) {
        $$$$35$$(this).addClass("oj-dialog-dragging");
        $that$$9$$.$_blockFrames$();
        $that$$9$$._trigger("dragStart", $event$$458$$, $filteredUi$$($ui$$25$$));
      }, drag:function($event$$459$$, $ui$$26$$) {
        $that$$9$$._trigger("drag", $event$$459$$, $filteredUi$$($ui$$26$$));
      }, stop:function($event$$460$$, $ui$$27$$) {
        $options$$308$$.position = [$ui$$27$$.position.left - $that$$9$$.document.scrollLeft(), $ui$$27$$.position.top - $that$$9$$.document.scrollTop()];
        $$$$35$$(this).removeClass("oj-dialog-dragging");
        $that$$9$$.$_unblockFrames$();
        $that$$9$$._trigger("dragStop", $event$$460$$, $filteredUi$$($ui$$27$$));
      }});
      this.$uiDialog$.addClass("oj-draggable");
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$28$$) {
        return{originalPosition:$ui$$28$$.$originalPosition$, originalSize:$ui$$28$$.$originalSize$, position:$ui$$28$$.position, size:$ui$$28$$.size};
      }
      var $that$$10$$ = this;
      this.$uiDialog$.css("position");
      this.$_resizableComponent$ = this.$uiDialog$.ojResizable.bind(this.$uiDialog$);
      this.$_resizableComponent$({cancel:".oj-dialog-content", containment:"document", handles:"n,e,s,w,se,sw,ne,nw", start:function($event$$461$$, $ui$$29$$) {
        $that$$10$$.$_isResizing$ = !0;
        $$$$35$$(this).addClass("oj-dialog-resizing");
        $that$$10$$.$_blockFrames$();
        $that$$10$$._trigger("resizeStart", $event$$461$$, $filteredUi$$1$$($ui$$29$$));
      }, resize:function($event$$462$$, $ui$$30$$) {
        $that$$10$$._trigger("resize", $event$$462$$, $filteredUi$$1$$($ui$$30$$));
      }, stop:function($event$$463$$, $ui$$31$$) {
        $that$$10$$.$_isResizing$ = !1;
        $$$$35$$(this).removeClass("oj-dialog-resizing");
        $that$$10$$.$_unblockFrames$();
        $that$$10$$._trigger("resizeStop", $event$$463$$, $filteredUi$$1$$($ui$$31$$));
      }});
    }, $_position$:function() {
      var $isRtl$$4_position$$24$$ = "rtl" === this.$_GetReadingDirection$(), $isRtl$$4_position$$24$$ = $oj$$38$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $isRtl$$4_position$$24$$);
      this.$uiDialog$.position($isRtl$$4_position$$24$$);
      this.$_positionDescendents$();
    }, $_positionDescendents$:function() {
      $oj$$38$$.$PopupService$.$getInstance$().$triggerOnDescendents$(this.$uiDialog$, $oj$$38$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($isDraggable$$1_key$$146$$, $value$$271$$, $flags$$37$$) {
      var $isResizable_psOptions$$4_uiDialog$$;
      $isResizable_psOptions$$4_uiDialog$$ = this.$uiDialog$;
      if ("disabled" !== $isDraggable$$1_key$$146$$) {
        switch(this._super($isDraggable$$1_key$$146$$, $value$$271$$, $flags$$37$$), $isDraggable$$1_key$$146$$) {
          case "dragAffordance":
            ($isDraggable$$1_key$$146$$ = $isResizable_psOptions$$4_uiDialog$$.hasClass("oj-draggable")) && "none" === $value$$271$$ && ($isResizable_psOptions$$4_uiDialog$$.draggable("destroy"), this.$uiDialog$.removeClass("oj-draggable"));
            $isDraggable$$1_key$$146$$ || "title-bar" !== $value$$271$$ || this.$_makeDraggable$();
            break;
          case "position":
            this.$_position$();
            break;
          case "resizeBehavior":
            $isResizable_psOptions$$4_uiDialog$$ = !1;
            this.$_resizableComponent$ && ($isResizable_psOptions$$4_uiDialog$$ = !0);
            $isResizable_psOptions$$4_uiDialog$$ && "resizable" != $value$$271$$ && (this.$_resizableComponent$("instance") && this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
            $isResizable_psOptions$$4_uiDialog$$ || "resizable" !== $value$$271$$ || this.$_makeResizable$();
            break;
          case "title":
            this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title"));
            break;
          case "role":
            $isResizable_psOptions$$4_uiDialog$$.attr("role", $value$$271$$);
            break;
          case "modality":
            this.isOpen() && ($isResizable_psOptions$$4_uiDialog$$ = {}, $isResizable_psOptions$$4_uiDialog$$[$oj$$38$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$, $isResizable_psOptions$$4_uiDialog$$[$oj$$38$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$271$$, $oj$$38$$.$PopupService$.$getInstance$().$changeOptions$($isResizable_psOptions$$4_uiDialog$$));
            break;
          case "cancelBehavior":
            "none" === $value$$271$$ || "escape" === $value$$271$$ ? this.$_destroyCloseButton$() : "icon" === $value$$271$$ && (this.$userDefinedDialogHeader$ ? (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)) : (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$uiDialogTitlebar$), 
            this.$standardTitle$ = this.$uiDialogTitlebar$.find(".oj-dialog-title"), this.$standardTitle$.length && this.$standardTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)));
        }
      }
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$35$$(this), $offset$$27$$ = $iframe$$.offset();
        return $$$$35$$("\x3cdiv\x3e").css({width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$27$$)[0];
      });
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$);
    }, $_createPlaceHolderFooter$:function($domElement$$1$$) {
      this.$_placeHolderFooterId$ = "ojDialogPlaceHolderFooter-" + this.$_elementId$;
      this.$_placeHolderFooter$ = $$$$35$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderFooterId$});
      this.$_placeHolderFooter$.insertBefore($domElement$$1$$);
    }, $_createPlaceHolderHeader$:function($domElement$$2$$) {
      this.$_placeHolderHeaderId$ = "ojDialogPlaceHolderHeader-" + this.$_elementId$;
      this.$_placeHolderHeader$ = $$$$35$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderHeaderId$});
      this.$_placeHolderHeader$.insertBefore($domElement$$2$$);
    }, getNodeBySubId:function($dotSubId_locator$$43_subId$$46$$) {
      if (null == $dotSubId_locator$$43_subId$$46$$) {
        return this.element ? this.element[0] : null;
      }
      $dotSubId_locator$$43_subId$$46$$ = $dotSubId_locator$$43_subId$$46$$.subId;
      switch($dotSubId_locator$$43_subId$$46$$) {
        case "oj-dialog-header":
        ;
        case "oj-dialog-body":
        ;
        case "oj-dialog-footer":
        ;
        case "oj-dialog-content":
        ;
        case "oj-dialog-header-close-wrapper":
        ;
        case "oj-resizable-n":
        ;
        case "oj-resizable-e":
        ;
        case "oj-resizable-s":
        ;
        case "oj-resizable-w":
        ;
        case "oj-resizable-se":
        ;
        case "oj-resizable-sw":
        ;
        case "oj-resizable-ne":
        ;
        case "oj-resizable-nw":
          $dotSubId_locator$$43_subId$$46$$ = "." + $dotSubId_locator$$43_subId$$46$$;
          if (!this.widget().find($dotSubId_locator$$43_subId$$46$$)) {
            break;
          }
          return this.widget().find($dotSubId_locator$$43_subId$$46$$)[0];
        case "oj-dialog-close-icon":
        ;
        case "oj-dialog-close":
          if (!this.widget().find(".oj-dialog-close-icon")) {
            break;
          }
          return this.widget().find(".oj-dialog-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$94_nodeCached$$3$$) {
      if (null != $node$$94_nodeCached$$3$$) {
        $node$$94_nodeCached$$3$$ = $$$$35$$($node$$94_nodeCached$$3$$);
        if ($node$$94_nodeCached$$3$$.hasClass("oj-dialog-header")) {
          return{subId:"oj-dialog-header"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-dialog-footer")) {
          return{subId:"oj-dialog-footer"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-dialog-content")) {
          return{subId:"oj-dialog-content"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-dialog-header-close-wrapper")) {
          return{subId:"oj-dialog-header-close-wrapper"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-dialog-close-icon")) {
          return{subId:"oj-dialog-close"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-n")) {
          return{subId:"oj-resizable-n"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-e")) {
          return{subId:"oj-resizable-e"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-s")) {
          return{subId:"oj-resizable-s"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-w")) {
          return{subId:"oj-resizable-w"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-se")) {
          return{subId:"oj-resizable-se"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-sw")) {
          return{subId:"oj-resizable-sw"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-ne")) {
          return{subId:"oj-resizable-ne"};
        }
        if ($node$$94_nodeCached$$3$$.hasClass("oj-resizable-nw")) {
          return{subId:"oj-resizable-nw"};
        }
      }
      return null;
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$12$$ = this.$_popupServiceEvents$ = {};
        $events$$12$$[$oj$$38$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$35$$.proxy(this.$_closeImplicitly$, this);
        $events$$12$$[$oj$$38$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$35$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$12$$[$oj$$38$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$35$$.proxy(this.$_positionDescendents$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
  })();
});
