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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$23$$) {
  (function() {
    $oj$$25$$.$__registerWidget$("oj.ojTrain", $$$$23$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      this.$_setupTrain$();
    }, $_setupTrain$:function() {
      var $i$$307_options$$276$$ = this.options, $stepTag_steps$$ = $i$$307_options$$276$$.steps;
      this.$_stepNum$ = $stepTag_steps$$.length;
      this.$_wrapper$ = $$$$23$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      var $styleClass$$7$$ = this.element.attr("class");
      (this.$_stretch$ = null != $styleClass$$7$$ && 0 <= $styleClass$$7$$.indexOf("oj-train-stretch")) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$23$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$307_options$$276$$.selected);
      -1 === this.$_selectedIndex$ && $stepTag_steps$$[0] && $stepTag_steps$$[0].id && (this.$_selectedIndex$ = 0, $i$$307_options$$276$$.selected = $stepTag_steps$$[0].id);
      for ($i$$307_options$$276$$ = 0;$i$$307_options$$276$$ < this.$_stepNum$;$i$$307_options$$276$$++) {
        $stepTag_steps$$ = $$$$23$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$307_options$$276$$][1]}), $stepTag_steps$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$307_options$$276$$), this.$_drawStepFill$($i$$307_options$$276$$), this.$_drawButton$($i$$307_options$$276$$), this.$_drawMessageType$($i$$307_options$$276$$), this.$_stretch$ && $stepTag_steps$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$277$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$308$$ = 0;$i$$308$$ < this.$_stepNum$;$i$$308$$++) {
        var $step$$ = $options$$277$$.steps[$i$$308$$];
        this.$_stepArray$[$i$$308$$] = Array(5);
        this.$_stepArray$[$i$$308$$][0] = $step$$.label ? $step$$.label : null;
        this.$_stepArray$[$i$$308$$][1] = $step$$.id ? $step$$.id : null;
        this.$_stepArray$[$i$$308$$][2] = $step$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$308$$][3] = $step$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$308$$][4] = $step$$.messageType ? $step$$.messageType : null;
      }
    }, $_drawButton$:function($index$$180$$) {
      var $button$$1$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$23$$("\x3cspan/\x3e"), $self$$143$$ = this, $desc$$1$$ = "";
      if (this.$_stepArray$[$index$$180$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$180$$][3], $disabled$$8$$ = this.$_stepArray$[$index$$180$$][2];
        this.$_selectedIndex$ === $index$$180$$ ? ($button$$1$$.addClass("oj-selected"), $desc$$1$$ = " current ") : $stepBackground_visited$$ && !$disabled$$8$$ ? ($button$$1$$.addClass("oj-visited"), $desc$$1$$ = " visited ") : $stepBackground_visited$$ || $disabled$$8$$ ? $button$$1$$.addClass("oj-disabled") : ($button$$1$$.addClass("oj-default"), $desc$$1$$ = " not visited ");
        this.$_stepArray$[$index$$180$$][2] || this.$_selectedIndex$ === $index$$180$$ || (this._hoverable($button$$1$$), $button$$1$$.on("click" + this.eventNamespace, function($event$$371$$) {
          $self$$143$$.$_fireOptionChange$("selected", $self$$143$$.options.selected, this.parentNode.parentNode.id, $event$$371$$);
          $self$$143$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$180$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$1$$);
        $scrnRead$$.text($desc$$1$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$180$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$181$$) {
      var $icon$$6$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$23$$("\x3cspan/\x3e"), $desc$$2$$ = "", $self$$144$$ = this;
      if (this.$_stepArray$[$index$$181$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$181$$][4];
        "confirmation" === $messageType$$ ? ($icon$$6$$.addClass("oj-confirmation"), $desc$$2$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$6$$.addClass("oj-info"), $desc$$2$$ = " Info ") : "error" === $messageType$$ ? ($icon$$6$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$6$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "warning" === $messageType$$ && ($icon$$6$$.addClass("oj-warning"), $desc$$2$$ = " Warning ");
        var $button$$2$$ = this.$_stepList$.children().eq($index$$181$$).find(".oj-train-button");
        1 <= $button$$2$$.children().length && $button$$2$$.children().remove();
        this.$_stepArray$[$index$$181$$][2] || this.$_selectedIndex$ === $index$$181$$ || (this._hoverable($icon$$6$$), $icon$$6$$.on("click" + this.eventNamespace, function($event$$372$$) {
          $self$$144$$.$_fireOptionChange$("selected", $self$$144$$.options.selected, this.parentNode.parentNode.parentNode.id, $event$$372$$);
          $self$$144$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$2$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$181$$).find("a").append($scrnRead$$1$$), $button$$2$$.append($icon$$6$$));
      }
    }, $_fireOptionChange$:function($eventData$$8_key$$132$$, $previousValue$$1_stepIndex$$, $value$$261$$, $originalEvent$$1$$) {
      $eventData$$8_key$$132$$ = {option:$eventData$$8_key$$132$$, fromStep:this.getStep($previousValue$$1_stepIndex$$), toStep:this.getStep($value$$261$$), optionMetadata:{writeback:$originalEvent$$1$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", $originalEvent$$1$$, $eventData$$8_key$$132$$) && !1 !== this._trigger("beforeSelect", $originalEvent$$1$$, $eventData$$8_key$$132$$) && ($previousValue$$1_stepIndex$$ = this.$_getStepIndex$($previousValue$$1_stepIndex$$), -1 !== $previousValue$$1_stepIndex$$ && (this.options.steps[$previousValue$$1_stepIndex$$].visited = !0), this._trigger("deselect", $originalEvent$$1$$, $eventData$$8_key$$132$$), this.option("selected", $value$$261$$, {_context:{originalEvent:$originalEvent$$1$$, 
      $internalSet$:!0}}), this._trigger("select", $originalEvent$$1$$, $eventData$$8_key$$132$$));
    }, $_drawStepFill$:function($index$$182_stepLi$$) {
      var $stepFill$$ = $$$$23$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$182_stepLi$$] && ($index$$182_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$182_stepLi$$ = this.$_stepList$.children().eq($index$$182_stepLi$$).children(), $stepFill$$.insertBefore($index$$182_stepLi$$));
    }, $_drawLabel$:function($index$$183$$) {
      var $self$$145$$ = this;
      if (this.$_stepArray$[$index$$183$$]) {
        var $labelWrapper$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$13_stepLi$$1$$ = $$$$23$$("\x3ca\x3e");
        $label$$13_stepLi$$1$$.text(this.$_stepArray$[$index$$183$$][0]);
        var $disabled$$9$$ = this.$_stepArray$[$index$$183$$][2];
        $labelWrapper$$.append($label$$13_stepLi$$1$$);
        $label$$13_stepLi$$1$$.addClass("oj-train-label");
        $index$$183$$ === this.$_selectedIndex$ ? $label$$13_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$183$$][3] && !$disabled$$9$$ ? $label$$13_stepLi$$1$$.addClass("oj-visited") : $disabled$$9$$ && $label$$13_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$9$$ || ($label$$13_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$13_stepLi$$1$$), $label$$13_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$373$$) {
          if ($event$$373$$.keyCode === $$$$23$$.ui.keyCode.ENTER || "click" === $event$$373$$.type) {
            $event$$373$$.preventDefault(), $self$$145$$.$_fireOptionChange$("selected", $self$$145$$.options.selected, this.parentNode.parentNode.id, $event$$373$$), $self$$145$$.refresh(), $event$$373$$.keyCode === $$$$23$$.ui.keyCode.ENTER && $self$$145$$.$_setFocus$(this.parentNode.parentNode.id);
          }
        }));
        $label$$13_stepLi$$1$$ = this.$_stepList$.children().eq($index$$183$$).children();
        1 <= $label$$13_stepLi$$1$$.length && $label$$13_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$183$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$36$$) {
      for (var $i$$309$$ = 0;$i$$309$$ < this.$_stepNum$;$i$$309$$++) {
        if (this.$_stepArray$[$i$$309$$] && this.$_stepArray$[$i$$309$$][1] === $id$$36$$) {
          return $i$$309$$;
        }
      }
      return-1;
    }, getStep:function($id$$37$$) {
      for (var $i$$310$$ = 0;$i$$310$$ < this.$_stepNum$;$i$$310$$++) {
        if (this.$_stepArray$[$i$$310$$] && this.$_stepArray$[$i$$310$$][1] === $id$$37$$) {
          return jQuery.extend({}, this.options.steps[$i$$310$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$311$$ = this.$_getStepIndex$(this.options.selected);$i$$311$$ < this.$_stepNum$;$i$$311$$++) {
        if ($i$$311$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$311$$ + 1] && !this.$_stepArray$[$i$$311$$ + 1][2]) {
          return this.$_stepArray$[$i$$311$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$312$$ = this.$_getStepIndex$(this.options.selected);0 <= $i$$312$$;$i$$312$$--) {
        if (this.$_stepArray$[$i$$312$$ - 1] && !this.$_stepArray$[$i$$312$$ - 1][2]) {
          return this.$_stepArray$[$i$$312$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
        this.refresh();
      }
    }, _setOptions:function($options$$278$$) {
      this._super($options$$278$$);
      this.refresh();
    }, _setOption:function($key$$133$$, $value$$262$$, $flags$$35$$) {
      "selected" === $key$$133$$ && this.options.selected && this.$_stepArray$ && this.$_stepArray$[this.$_selectedIndex$] && this.$_fireOptionChange$("selected", this.$_stepArray$[this.$_selectedIndex$][1], $value$$262$$, null);
      this._super($key$$133$$, $value$$262$$, $flags$$35$$);
    }, refresh:function() {
      this._super();
      this._destroy();
      this.$_setupTrain$();
    }, _destroy:function() {
      this.$_stepList$.children().each(function() {
        $$$$23$$(this).remove();
      });
      this.element.removeClass("oj-train");
      this.element.find(".oj-train-wrapper").remove();
      this.element.find(".oj-train-connector-wrapper").remove();
      this.element.find(".oj-train-step-list").remove();
      this.element.find(".oj-train-step-list").remove();
      this._super();
    }, $_setFocus$:function($id$$38_index$$184$$) {
      $id$$38_index$$184$$ = this.$_getStepIndex$($id$$38_index$$184$$);
      for (var $i$$313$$ = 0;$i$$313$$ < this.$_stepNum$;$i$$313$$++) {
        if (this.$_stepArray$[($id$$38_index$$184$$ + $i$$313$$ + 1) % this.$_stepNum$] && !this.$_stepArray$[($id$$38_index$$184$$ + $i$$313$$ + 1) % this.$_stepNum$][2]) {
          this.$_stepList$.children().eq(($id$$38_index$$184$$ + $i$$313$$ + 1) % this.$_stepNum$).find(".oj-train-label").focus();
          break;
        }
      }
    }, getNodeBySubId:function($locator$$31$$) {
      if (null === $locator$$31$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$185$$ = $locator$$31$$.index;
      if ("number" !== typeof $index$$185$$ || 0 > $index$$185$$ || $index$$185$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$31$$.subId) {
        case "oj-train-step":
          return this.$_stepList$.children().eq($index$$185$$)[0];
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$185$$).find(".oj-train-button")[0];
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$185$$).find(".oj-train-button-connector")[0];
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$185$$).find(".oj-train-icon")[0];
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$185$$).find(".oj-train-label")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$85$$) {
      for (var $stepNum$$ = this.$_stepArray$ ? this.$_stepArray$.length : 0, $stepIndex$$3$$ = 0;$stepIndex$$3$$ < $stepNum$$;$stepIndex$$3$$++) {
        var $stepLocator$$ = {subId:"oj-train-step", index:$stepIndex$$3$$};
        if ($node$$85$$ === this.getNodeBySubId($stepLocator$$)) {
          return $stepLocator$$;
        }
      }
      return null;
    }});
  })();
});
