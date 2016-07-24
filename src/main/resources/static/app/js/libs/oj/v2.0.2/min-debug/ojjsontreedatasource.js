/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$76$$) {
  $oj$$76$$.$_JsonTreeNodeDataSource$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$76$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$187$$) {
    return function($a$$129$$, $b$$79$$) {
      return $a$$129$$.attr && $b$$79$$.attr && $a$$129$$.attr[$key$$187$$] && $b$$79$$.attr[$key$$187$$] ? $a$$129$$.attr[$key$$187$$] < $b$$79$$.attr[$key$$187$$] ? -1 : $a$$129$$.attr[$key$$187$$] === $b$$79$$.attr[$key$$187$$] ? 0 : 1 : $a$$129$$[$key$$187$$] < $b$$79$$[$key$$187$$] ? -1 : $a$$129$$[$key$$187$$] === $b$$79$$[$key$$187$$] ? 0 : 1;
    };
  };
  $oj$$76$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$188$$) {
    return function($a$$130$$, $b$$80$$) {
      return $a$$130$$.attr && $b$$80$$.attr && $a$$130$$.attr[$key$$188$$] && $b$$80$$.attr[$key$$188$$] ? $a$$130$$.attr[$key$$188$$] < $b$$80$$.attr[$key$$188$$] ? 1 : $a$$130$$.attr[$key$$188$$] === $b$$80$$.attr[$key$$188$$] ? 0 : -1 : $a$$130$$[$key$$188$$] < $b$$80$$[$key$$188$$] ? 1 : $a$$130$$[$key$$188$$] === $b$$80$$[$key$$188$$] ? 0 : -1;
    };
  };
  $oj$$76$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$10$$) {
    var $i$$468_key$$189$$ = $criteria$$10$$.key;
    "ascending" === $criteria$$10$$.direction ? this.children.sort(this.$_ascending$($i$$468_key$$189$$)) : "descending" === $criteria$$10$$.direction && this.children.sort(this.$_descending$($i$$468_key$$189$$));
    for (var $i$$468_key$$189$$ = 0, $l$$17$$ = this.children.length;$i$$468_key$$189$$ < $l$$17$$;$i$$468_key$$189$$++) {
      this.children[$i$$468_key$$189$$].$_sortRecursive$($criteria$$10$$);
    }
  };
  $oj$$76$$.$JsonTreeDataSource$ = function $$oj$$76$$$$JsonTreeDataSource$$($data$$180$$) {
    var $tree$$1$$;
    $tree$$1$$ = new $oj$$76$$.$_JsonTreeNodeDataSource$;
    $data$$180$$.id || ($tree$$1$$.id = "root");
    this.data = this.$_createTreeDataSource$({count:0}, $tree$$1$$, $data$$180$$);
    $oj$$76$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$1$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$76$$.$JsonTreeDataSource$, $oj$$76$$);
  $oj$$76$$.$Object$.$createSubclass$($oj$$76$$.$JsonTreeDataSource$, $oj$$76$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$76$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$76$$$$JsonTreeDataSource$$$Init$() {
    $oj$$76$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$76$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$56$$, $target$$99$$, $source$$12$$, $depth$$26$$) {
    var $children$$29$$, $node$$177$$, $child$$24$$, $prop$$77$$, $propr$$, $prp$$, $j$$47$$;
    $depth$$26$$ || ($depth$$26$$ = 0);
    for ($prop$$77$$ in $source$$12$$) {
      if ("children" == $prop$$77$$ || 0 == $depth$$26$$ && $source$$12$$ instanceof Array) {
        for ($children$$29$$ = 0 == $depth$$26$$ && $source$$12$$ instanceof Array ? $source$$12$$ : $source$$12$$[$prop$$77$$], $depth$$26$$++, $j$$47$$ = 0;$j$$47$$ < $children$$29$$.length;$j$$47$$++) {
          $child$$24$$ = $children$$29$$[$j$$47$$];
          $node$$177$$ = new $oj$$76$$.$_JsonTreeNodeDataSource$;
          $child$$24$$.id || ($c$$56$$.count++, $child$$24$$.attr ? $child$$24$$.attr.id || ($child$$24$$.attr.id = "rid_" + $c$$56$$.count) : $node$$177$$.id = "rid_" + $c$$56$$.count);
          for ($propr$$ in $child$$24$$) {
            for ($prp$$ in $node$$177$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$177$$[$prp$$] = $child$$24$$[$propr$$]), "depth" == $prp$$ && ($node$$177$$[$prp$$] = $depth$$26$$);
            }
          }
          $target$$99$$.children.push($node$$177$$);
          for ($prp$$ in $child$$24$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$56$$, $target$$99$$.children[$j$$47$$], $child$$24$$, $depth$$26$$);
          }
        }
      }
    }
    return $target$$99$$;
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$76$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$52_parentKey$$10$$) {
    $parent$$52_parentKey$$10$$ || ($parent$$52_parentKey$$10$$ = this.data.id);
    $parent$$52_parentKey$$10$$ = this.$_searchTreeById$(this.data, $parent$$52_parentKey$$10$$);
    return $parent$$52_parentKey$$10$$.children ? $parent$$52_parentKey$$10$$.children.length : 0;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$76$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$76$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$33_parentKey$$11$$, $i$$469_range$$21$$, $callbacks$$56$$) {
    var $childStart$$, $childEnd$$, $results$$10$$, $parent$$53$$, $node$$178$$;
    $results$$10$$ = [];
    $nodeSet$$33_parentKey$$11$$ || ($nodeSet$$33_parentKey$$11$$ = this.data.id);
    $parent$$53$$ = this.$_searchTreeById$(this.data, $nodeSet$$33_parentKey$$11$$);
    $i$$469_range$$21$$ || ($i$$469_range$$21$$ = [], $i$$469_range$$21$$.start = 0, $i$$469_range$$21$$.count = $parent$$53$$.children.length);
    $i$$469_range$$21$$.count || ($i$$469_range$$21$$.count = $parent$$53$$.children.length);
    $i$$469_range$$21$$.start || ($i$$469_range$$21$$.start = 0);
    $childStart$$ = $i$$469_range$$21$$.start;
    $childEnd$$ = Math.min($parent$$53$$.children.length, $childStart$$ + $i$$469_range$$21$$.count);
    for ($i$$469_range$$21$$ = $childStart$$;$i$$469_range$$21$$ < $childEnd$$;$i$$469_range$$21$$ += 1) {
      $node$$178$$ = new $oj$$76$$.$_JsonTreeNodeDataSource$, $parent$$53$$.children[$i$$469_range$$21$$].attr && ($node$$178$$.attr = $parent$$53$$.children[$i$$469_range$$21$$].attr), $parent$$53$$.children[$i$$469_range$$21$$].id && ($node$$178$$.id = $parent$$53$$.children[$i$$469_range$$21$$].id), $parent$$53$$.children[$i$$469_range$$21$$].depth && ($node$$178$$.depth = $parent$$53$$.children[$i$$469_range$$21$$].depth), $parent$$53$$.children[$i$$469_range$$21$$].title && ($node$$178$$.title = 
      $parent$$53$$.children[$i$$469_range$$21$$].title), $parent$$53$$.children[$i$$469_range$$21$$].parent && ($node$$178$$.parent = $parent$$53$$.children[$i$$469_range$$21$$].parent), $node$$178$$.$leaf$ = 0 < $parent$$53$$.children[$i$$469_range$$21$$].children.length ? !1 : !0, $results$$10$$.push($node$$178$$);
    }
    $nodeSet$$33_parentKey$$11$$ = new $oj$$76$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$10$$, $nodeSet$$33_parentKey$$11$$);
    null != $callbacks$$56$$ && null != $callbacks$$56$$.success && $callbacks$$56$$.success.call(null, $nodeSet$$33_parentKey$$11$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$76$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$76$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$12$$, $callbacks$$57$$) {
    var $childEnd$$1_range$$22$$, $childStart$$1_i$$470$$, $nodeSet$$34_results$$11$$, $parent$$54$$;
    $nodeSet$$34_results$$11$$ = [];
    $parentKey$$12$$ || ($parentKey$$12$$ = this.data.id);
    $parent$$54$$ = this.$_searchTreeById$(this.data, $parentKey$$12$$);
    $childEnd$$1_range$$22$$ = [];
    $childEnd$$1_range$$22$$.start = 0;
    $childEnd$$1_range$$22$$.count = $parent$$54$$.children.length;
    $childStart$$1_i$$470$$ = $childEnd$$1_range$$22$$.start;
    for ($childEnd$$1_range$$22$$ = Math.min($parent$$54$$.children.length, $childStart$$1_i$$470$$ + $childEnd$$1_range$$22$$.count);$childStart$$1_i$$470$$ < $childEnd$$1_range$$22$$;$childStart$$1_i$$470$$ += 1) {
      $parent$$54$$.children[$childStart$$1_i$$470$$].$leaf$ = 0 < $parent$$54$$.children[$childStart$$1_i$$470$$].children.length ? !1 : !0, $nodeSet$$34_results$$11$$.push($parent$$54$$.children[$childStart$$1_i$$470$$]);
    }
    $nodeSet$$34_results$$11$$ = new $oj$$76$$.$JsonNodeSet$(0, $nodeSet$$34_results$$11$$.length, $nodeSet$$34_results$$11$$, $parentKey$$12$$);
    null != $callbacks$$57$$ && null != $callbacks$$57$$.success && $callbacks$$57$$.success.call(null, $nodeSet$$34_results$$11$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$76$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$moveOK$ = function $$oj$$76$$$$JsonTreeDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$76$$.$JsonTreeDataSource$.prototype.$moveOK$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.move = function $$oj$$76$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$1$$, $index$$290_position$$44$$, $callbacks$$58$$) {
    var $parent$$55_refNodeKey$$;
    $parent$$55_refNodeKey$$ = $refNode$$8_referenceNode$$1$$;
    if (!$parent$$55_refNodeKey$$ || $parent$$55_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$290_position$$44$$) {
        $oj$$76$$.$Logger$.log("Error: root can not be the reference node if position equals to " + $index$$290_position$$44$$);
        return;
      }
      $parent$$55_refNodeKey$$ || ($parent$$55_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$55_refNodeKey$$) ? $oj$$76$$.$Logger$.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$1$$ = this.$_searchTreeById$(null, $parent$$55_refNodeKey$$), $parent$$55_refNodeKey$$ = this.$_getParentById$($parent$$55_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$290_position$$44$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    ($refNode$$8_referenceNode$$1$$.depth + 1)), $refNode$$8_referenceNode$$1$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$290_position$$44$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$290_position$$44$$ = $parent$$55_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$290_position$$44$$ && (0 != $index$$290_position$$44$$ ? $parent$$55_refNodeKey$$.children.splice($index$$290_position$$44$$ - 
    1, 0, $moveNode_nodeToMove$$) : $parent$$55_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : "after" == $index$$290_position$$44$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$290_position$$44$$ = $parent$$55_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$290_position$$44$$ && $parent$$55_refNodeKey$$.children.splice($index$$290_position$$44$$, 0, $moveNode_nodeToMove$$)) : "first" == 
    $index$$290_position$$44$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$55_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$290_position$$44$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$55_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$58$$ && null != $callbacks$$58$$.success && 
    $callbacks$$58$$.success.call(null, this.data));
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$76$$.$JsonTreeDataSource$.prototype.move});
  $oj$$76$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$76$$$$JsonTreeDataSource$$$sort$($criteria$$11$$, $callbacks$$59$$) {
    var $parent$$56$$;
    $parent$$56$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$56$$.$_sortRecursive$($criteria$$11$$);
    null != $callbacks$$59$$ && null != $callbacks$$59$$.success && $callbacks$$59$$.success.call(null, $parent$$56$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$76$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$76$$$$JsonTreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$76$$.$JsonTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$4$$) {
    var $i$$471$$, $parent$$57$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$4$$ || ($currNode$$4$$ = this.data);
    if ($currNode$$4$$.children && 0 < $currNode$$4$$.children.length) {
      for ($i$$471$$ = 0;$i$$471$$ < $currNode$$4$$.children.length;$i$$471$$++) {
        if ($currNode$$4$$.children[$i$$471$$].id && $currNode$$4$$.children[$i$$471$$].id == $refNodeKey$$1$$ || $currNode$$4$$.children[$i$$471$$].attr && $currNode$$4$$.children[$i$$471$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$4$$;
        }
      }
      for ($i$$471$$ = 0;$i$$471$$ < $currNode$$4$$.children.length && !($parent$$57$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$4$$.children[$i$$471$$]));$i$$471$$++) {
      }
    }
    return $parent$$57$$;
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$2$$, $parentKey$$14$$) {
    var $i$$472$$, $result$$79$$ = null;
    $currChild$$2$$ || ($currChild$$2$$ = this.data);
    if ($currChild$$2$$.id && $currChild$$2$$.id == $parentKey$$14$$ || $currChild$$2$$.attr && $currChild$$2$$.attr.id == $parentKey$$14$$) {
      return $currChild$$2$$;
    }
    if (null != $currChild$$2$$.children) {
      for ($i$$472$$ = 0;$i$$472$$ < $currChild$$2$$.children.length && !$result$$79$$;$i$$472$$++) {
        $result$$79$$ = $currChild$$2$$.children[$i$$472$$].id && $currChild$$2$$.children[$i$$472$$].id == $parentKey$$14$$ || $currChild$$2$$.children[$i$$472$$].attr && $currChild$$2$$.children[$i$$472$$].attr.id == $parentKey$$14$$ ? $currChild$$2$$.children[$i$$472$$] : this.$_searchTreeById$($currChild$$2$$.children[$i$$472$$], $parentKey$$14$$);
      }
    }
    return $result$$79$$;
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$3$$, $offset$$31$$) {
    var $i$$473$$;
    $currChild$$3$$.depth -= $offset$$31$$;
    if ($currChild$$3$$.children && 0 != $currChild$$3$$.children.length) {
      for ($i$$473$$ = 0;$i$$473$$ < $currChild$$3$$.children.length;$i$$473$$++) {
        this.$_updateDepth$($currChild$$3$$.children[$i$$473$$], $offset$$31$$);
      }
    }
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$4_index$$291$$) {
    var $key$$190_parent$$58$$;
    $currChild$$4_index$$291$$.id ? $key$$190_parent$$58$$ = $currChild$$4_index$$291$$.id : $currChild$$4_index$$291$$.attr && ($key$$190_parent$$58$$ = $currChild$$4_index$$291$$.attr.id);
    ($key$$190_parent$$58$$ = this.$_getParentById$($key$$190_parent$$58$$)) || ($key$$190_parent$$58$$ = this.data);
    $currChild$$4_index$$291$$ = $key$$190_parent$$58$$.children.indexOf($currChild$$4_index$$291$$);
    -1 < $currChild$$4_index$$291$$ && $key$$190_parent$$58$$.children.splice($currChild$$4_index$$291$$, 1);
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$76$$$$JsonTreeDataSource$$$getCapability$($feature$$18$$) {
    return "fetchDescendants" === $feature$$18$$ ? "enable" : "sort" === $feature$$18$$ ? "default" : "batchFetch" === $feature$$18$$ ? "disable" : "move" === $feature$$18$$ ? "full" : null;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$76$$.$JsonTreeDataSource$.prototype.getCapability});
  $oj$$76$$.$JsonNodeSet$ = function $$oj$$76$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$181$$, $currKey$$1$$) {
    $oj$$76$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$76$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$181$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$76$$.$JsonNodeSet$, $oj$$76$$);
  $oj$$76$$.$JsonNodeSet$.prototype.getParent = function $$oj$$76$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$76$$.$JsonNodeSet$.prototype.getParent});
  $oj$$76$$.$JsonNodeSet$.prototype.$getStart$ = function $$oj$$76$$$$JsonNodeSet$$$$getStart$$() {
    return this.$m_startNode$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$76$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$76$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$76$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$76$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$76$$.$JsonNodeSet$.prototype.getData = function $$oj$$76$$$$JsonNodeSet$$$getData$($index$$292$$) {
    $oj$$76$$.$Assert$.assert($index$$292$$ <= this.$m_endNode$ && $index$$292$$ >= this.$m_startNode$);
    $index$$292$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$292$$] ? this.$m_nodes$[$index$$292$$].attr : null;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$76$$.$JsonNodeSet$.prototype.getData});
  $oj$$76$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$76$$$$JsonNodeSet$$$getMetadata$($index$$293$$) {
    var $metadata$$25$$ = [];
    $oj$$76$$.$Assert$.assert($index$$293$$ <= this.$m_endNode$ && $index$$293$$ >= this.$m_startNode$);
    $index$$293$$ -= this.$m_startNode$;
    $metadata$$25$$.key = this.$m_nodes$[$index$$293$$].id ? this.$m_nodes$[$index$$293$$].id : this.$m_nodes$[$index$$293$$].attr.id;
    $metadata$$25$$.leaf = this.$m_nodes$[$index$$293$$].$leaf$;
    $metadata$$25$$.depth = this.$m_nodes$[$index$$293$$].depth;
    null == $metadata$$25$$.leaf && ($metadata$$25$$.leaf = this.$m_nodes$[$index$$293$$].children && 0 < this.$m_nodes$[$index$$293$$].children.length ? !1 : !0);
    return $metadata$$25$$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$76$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$76$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$76$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$5$$, $offset$$32$$) {
    var $i$$474$$;
    $offset$$32$$++;
    $currChild$$5$$.depth = $offset$$32$$;
    if ($currChild$$5$$.children && 0 != $currChild$$5$$.children.length) {
      for ($i$$474$$ = 0;$i$$474$$ < $currChild$$5$$.children.length;$i$$474$$++) {
        this.$_updateDepth$($currChild$$5$$.children[$i$$474$$], $offset$$32$$);
      }
    }
  };
  $oj$$76$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$76$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$294_key$$191$$) {
    var $results$$12$$, $depth$$28$$, $i$$475$$;
    $oj$$76$$.$Assert$.assert($index$$294_key$$191$$ <= this.$m_endNode$ && $index$$294_key$$191$$ >= this.$m_startNode$);
    $index$$294_key$$191$$ -= this.$m_startNode$;
    $depth$$28$$ = this.$m_nodes$[$index$$294_key$$191$$].depth;
    $results$$12$$ = this.$m_nodes$[$index$$294_key$$191$$].children;
    if (0 == $results$$12$$.length) {
      return null;
    }
    $index$$294_key$$191$$ = this.$m_nodes$[$index$$294_key$$191$$].id ? this.$m_nodes$[$index$$294_key$$191$$].id : this.$m_nodes$[$index$$294_key$$191$$].attr.id;
    for ($i$$475$$ = 0;$i$$475$$ < $results$$12$$.length;$i$$475$$++) {
      this.$_updateDepth$($results$$12$$[$i$$475$$], $depth$$28$$);
    }
    return new $oj$$76$$.$JsonNodeSet$(0, $results$$12$$.length, $results$$12$$, $index$$294_key$$191$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$76$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
});
