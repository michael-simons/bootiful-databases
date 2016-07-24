/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs"], function($oj$$40$$, $$$$37$$, $Hammer$$6$$) {
  $Hammer$$6$$ ? ($$$$37$$.fn.$ojHammer$ = function $$$$$37$$$fn$$ojHammer$$($options$$312$$) {
    return "instance" == $options$$312$$ ? this.data("ojHammer") : this.each(function() {
      var $$el$$1$$ = $$$$37$$(this);
      $$el$$1$$.data("ojHammer") || $$el$$1$$.data("ojHammer", new $Hammer$$6$$.Manager($$el$$1$$[0], $options$$312$$));
    });
  }, $goog$exportPath_$$("$.fn.ojHammer", $$$$37$$.fn.$ojHammer$, void 0), $Hammer$$6$$.Manager.prototype.emit = function($originalEmit$$) {
    return function($type$$94$$, $data$$152$$) {
      $originalEmit$$.call(this, $type$$94$$, $data$$152$$);
      $$$$37$$(this.element).trigger({type:$type$$94$$, gesture:$data$$152$$});
    };
  }($Hammer$$6$$.Manager.prototype.emit)) : $oj$$40$$.$Logger$.warn("Hammer jQuery extension loaded without Hammer.");
});
