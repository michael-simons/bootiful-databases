/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$68$$, $$$$62$$) {
  (function() {
    $oj$$68$$.$__registerWidget$("oj.ojToolbar", $$$$62$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{chroming:"half"}, $_InitOptions$:function($originalDefaults$$19$$, $constructorOptions$$21$$) {
      this._super($originalDefaults$$19$$, $constructorOptions$$21$$);
      "disabled" in $constructorOptions$$21$$ && $oj$$68$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.");
    }, _ComponentCreate:function() {
      this._super();
      this.element.attr($oj$$68$$.Components.$_OJ_CONTAINER_ATTR$, this.widgetName).addClass("oj-toolbar oj-component").attr("role", "toolbar");
      this.$_setup$(!0);
    }, $_NotifyContextMenuGesture$:function($currentButton$$1_menu$$24$$, $event$$602$$, $eventType$$52$$) {
      $currentButton$$1_menu$$24$$ = this.element.find(":oj-button[tabindex\x3d0]");
      this.$_OpenContextMenu$($event$$602$$, $eventType$$52$$, {launcher:$currentButton$$1_menu$$24$$, position:{of:"keyboard" === $eventType$$52$$ ? $currentButton$$1_menu$$24$$.ojButton("widget") : $event$$602$$}});
    }, _setOption:function($key$$183$$, $value$$307$$) {
      this._superApply(arguments);
      "disabled" === $key$$183$$ ? $oj$$68$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call.") : "chroming" === $key$$183$$ && (this.$$buttonsets$.ojButtonset("refresh"), this.$$topLevelButtons$.ojButton("refresh"));
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$3$$) {
      var $self$$209$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(":oj-button").unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$603$$) {
        $self$$209$$.$_handleKeyDown$($event$$603$$, $$$$62$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$62$$(this).ojButton("option", "disabled") || $self$$209$$.$_setTabStop$($$$$62$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$209$$.$_setTabStop$($$$$62$$(this));
      });
      this.$$buttonsets$ = this.element.find(":oj-buttonset").ojButtonset("refresh");
      this.$$topLevelButtons$ = this.$$buttons$.not(this.$$buttonsets$.find(":oj-button")).ojButton("refresh");
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$62$$(this).ojButton("option", "disabled");
      });
      this.$_initTabindexes$($isCreate$$3$$);
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$4$$) {
      var $$last$$1$$ = $$$$62$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$4$$ = $$newTabStop$$1_isCreate$$4$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$4$$);
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$277$$, $elem$$126$$) {
        if ("radio" != $elem$$126$$.type || $elem$$126$$.checked || "" == $elem$$126$$.name) {
          return $elem$$126$$;
        }
        var $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ = $elem$$126$$.name;
        $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ ? ($$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ = $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$.replace(/'/g, "\\'"), $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ = $$enabledButtons$$2$$.filter(":radio[name\x3d'" + $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ + "']:oj-button")) : $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ = $$enabledButtons$$2$$.filter($elem$$126$$).filter(":oj-button");
        $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$ = $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$.filter(":checked");
        return $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$.length ? $$checkedRadio$$1_$radios$$inline_1050_name$$inline_1049$$[0] : $elem$$126$$;
      });
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$3$$ = $$button$$4$$[0], $last$$7$$ = this.$_lastTabStop$;
      $button$$3$$ !== $last$$7$$ && ($$$$62$$($last$$7$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$3$$);
    }, $_handleKeyDown$:function($event$$606$$, $$button$$5$$) {
      switch($event$$606$$.which) {
        case $$$$62$$.ui.keyCode.LEFT:
        ;
        case $$$$62$$.ui.keyCode.RIGHT:
          $event$$606$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$21$$ = $$enabledButtons$$3$$.length;
          if (2 > $length$$21$$) {
            break;
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$606$$.which == $$$$62$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$21$$) % $length$$21$$).focus();
          break;
        case $$$$62$$.ui.keyCode.UP:
        ;
        case $$$$62$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$606$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr($oj$$68$$.Components.$_OJ_CONTAINER_ATTR$).removeAttr("role");
      this.$$buttons$.attr("tabindex", "0");
      this.$$buttonsets$.ojButtonset("refresh");
      this.$$topLevelButtons$.ojButton("refresh");
    }});
  })();
  $oj$$68$$.Components.$setDefaultOptions$({ojToolbar:{chroming:$oj$$68$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$68$$.$ThemeUtils$.$getOptionDefaultMap$("toolbar").chroming;
  })}});
});
