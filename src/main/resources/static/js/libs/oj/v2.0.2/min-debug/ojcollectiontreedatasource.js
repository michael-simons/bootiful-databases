/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$60$$) {
  $oj$$60$$.$CollectionNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$($parentKey$$6$$, $collection$$35$$, $treeDataSource$$1$$, $start$$53$$, $count$$53$$) {
    this.$parentKey$ = $parentKey$$6$$;
    this.$collection$ = $collection$$35$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$1$$;
    this.start = $start$$53$$ < $collection$$35$$.length ? $start$$53$$ : $collection$$35$$.length - 1;
    this.count = -1 === $count$$53$$ ? $collection$$35$$.length : Math.min($collection$$35$$.length, $count$$53$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$60$$.$CollectionNodeSet$, $oj$$60$$);
  $oj$$60$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$60$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$35$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$35$$.success && $callbacks$$35$$.success();
    });
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$60$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$22$$) {
    return new Promise(function($resolve$$49$$) {
      function $nextNode$$($index$$254$$) {
        $index$$254$$ < $count$$54$$ ? $nodeSet$$22$$.$FetchChildNodeSet$($index$$254$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$22$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$254$$ + 1);
          }) : $nextNode$$($index$$254$$ + 1);
        }}) : $resolve$$49$$(void 0);
      }
      var $count$$54$$ = $nodeSet$$22$$.$getCount$();
      $nextNode$$(0);
    });
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$255$$, $callbacks$$36$$) {
    var $model$$81_parentKey$$7$$ = this.$collection$.at($index$$255$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$81_parentKey$$7$$).leaf) {
      this.$childNodeSet$[$index$$255$$] = null, $callbacks$$36$$.success(null);
    } else {
      var $collection$$36$$ = this.$treeDataSource$.$GetChildCollection$($model$$81_parentKey$$7$$), $model$$81_parentKey$$7$$ = this.$treeDataSource$.$parseMetadata$($model$$81_parentKey$$7$$).key, $self$$184$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$36$$, 0, -1, {success:function($nodeSet$$23$$) {
        $self$$184$$.$childNodeSet$[$index$$255$$] = $nodeSet$$23$$;
        $callbacks$$36$$.success($nodeSet$$23$$);
      }}, $model$$81_parentKey$$7$$);
    }
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$60$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$60$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$60$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$60$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$60$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$60$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$60$$.$CollectionNodeSet$.prototype.getData = function $$oj$$60$$$$CollectionNodeSet$$$getData$($index$$256$$) {
    this.$_checkRange$($index$$256$$);
    return this.$collection$.at($index$$256$$).attributes;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$60$$.$CollectionNodeSet$.prototype.getData});
  $oj$$60$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$60$$$$CollectionNodeSet$$$$_checkRange$$($index$$257$$) {
    if ($index$$257$$ < this.start || $index$$257$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$60$$$$CollectionNodeSet$$$getMetadata$($index$$258_model$$82_parse$$6$$) {
    this.$_checkRange$($index$$258_model$$82_parse$$6$$);
    var $metadata$$13$$ = {};
    $index$$258_model$$82_parse$$6$$ = this.$collection$.at($index$$258_model$$82_parse$$6$$);
    $index$$258_model$$82_parse$$6$$ = this.$treeDataSource$.$parseMetadata$($index$$258_model$$82_parse$$6$$);
    $metadata$$13$$.key = $index$$258_model$$82_parse$$6$$.key;
    $metadata$$13$$.leaf = $index$$258_model$$82_parse$$6$$.leaf;
    $metadata$$13$$.depth = $index$$258_model$$82_parse$$6$$.depth;
    return $metadata$$13$$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$60$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$259$$) {
    this.$_checkRange$($index$$259$$);
    return this.$childNodeSet$[$index$$259$$];
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$60$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
  $oj$$60$$.$CollectionTreeDataSource$ = function $$oj$$60$$$$CollectionTreeDataSource$$($options$$329$$) {
    $options$$329$$ = $options$$329$$ || {};
    this.$rootCollection$ = $options$$329$$.root;
    this.$childCollectionCallback$ = $options$$329$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$329$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$60$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$60$$.$CollectionTreeDataSource$, $oj$$60$$);
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$83$$) {
    return{key:$model$$83$$.idAttribute + "\x3d" + $model$$83$$.id};
  };
  $oj$$60$$.$Object$.$createSubclass$($oj$$60$$.$CollectionTreeDataSource$, $oj$$60$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$60$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$60$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$60$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$60$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$34$$) {
    var $childColl$$ = this.$cache$[$parent$$34$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$34$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$162$$, $callbacks$$37$$) {
    this.$fetchChildren$($key$$162$$, null, {success:function($nodeSet$$24$$) {
      $callbacks$$37$$.success($nodeSet$$24$$.$collection$);
    }, error:$callbacks$$37$$.error});
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$35$$, $range$$17$$, $callbacks$$38$$) {
    $range$$17$$ = $range$$17$$ || {};
    var $start$$54$$ = $range$$17$$.start ? $range$$17$$.start : 0, $count$$55$$ = $range$$17$$.count ? $range$$17$$.count : -1;
    if (null === $parent$$35$$) {
      this.$FetchCollection$(null, $start$$54$$, $count$$55$$, $callbacks$$38$$, null);
    } else {
      var $self$$185$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$35$$, 0).then(function($collection$$37_parentModel$$) {
        if ($collection$$37_parentModel$$) {
          $collection$$37_parentModel$$ = $self$$185$$.$GetChildCollection$($collection$$37_parentModel$$.$model$);
          try {
            $self$$185$$.$FetchCollection$($collection$$37_parentModel$$, $start$$54$$, $count$$55$$, $callbacks$$38$$, $parent$$35$$);
          } catch ($error$$43$$) {
            $callbacks$$38$$ && $callbacks$$38$$.error && $callbacks$$38$$.error({status:$error$$43$$.message});
          }
        } else {
          $callbacks$$38$$ && $callbacks$$38$$.error && $callbacks$$38$$.error($parent$$35$$);
        }
      });
    }
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$542_model$$84$$, $collection$$38_parents$$5$$, $options$$331$$) {
    var $index$$260$$ = 0;
    $options$$331$$ && $options$$331$$.at && ($index$$260$$ = $options$$331$$.at);
    $collection$$38_parents$$5$$ = this.$_getParentChain$($collection$$38_parents$$5$$);
    $event$$542_model$$84$$ = this.$_createEvent$(this, "insert", $index$$260$$, $collection$$38_parents$$5$$, this.$_putModelInNodeSet$(null != $collection$$38_parents$$5$$ && 0 < $collection$$38_parents$$5$$.length ? $collection$$38_parents$$5$$[$collection$$38_parents$$5$$.length - 1] : null, $event$$542_model$$84$$));
    this.handleEvent("change", $event$$542_model$$84$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$543_model$$85$$, $collection$$39$$, $options$$332$$) {
    var $index$$261$$ = 0;
    $options$$332$$ && $options$$332$$.index && ($index$$261$$ = $options$$332$$.index);
    this.$_removeCollectionFromCache$($event$$543_model$$85$$);
    $event$$543_model$$85$$ = this.$_createEvent$(this, "delete", $index$$261$$, this.$_getParentChain$($collection$$39$$), null);
    this.handleEvent("change", $event$$543_model$$85$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$544_model$$86$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$544_model$$86$$), $index$$262$$ = null, $parents$$6$$ = null;
    $collectionForModel$$ && ($index$$262$$ = $collectionForModel$$.index, $parents$$6$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$544_model$$86$$ = this.$_createEvent$(this, "update", $index$$262$$, $parents$$6$$, this.$_putModelInNodeSet$(null != $parents$$6$$ && 0 < $parents$$6$$.length ? $parents$$6$$[$parents$$6$$.length - 1] : null, $event$$544_model$$86$$));
    this.handleEvent("change", $event$$544_model$$86$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$40_event$$545$$) {
    $collection$$40_event$$545$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$40_event$$545$$), null);
    this.handleEvent("refresh", $collection$$40_event$$545$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_putModelInNodeSet$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_putModelInNodeSet$$($parent$$38$$, $model$$87$$) {
    var $collection$$41$$ = new $oj$$60$$.$Collection$;
    $collection$$41$$.add($model$$87$$);
    return this.$_getNodeSet$($collection$$41$$, $parent$$38$$, 0, 1);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$42$$) {
    var $parents$$7$$ = [], $parent$$39$$ = null;
    do {
      $parent$$39$$ = this.$_getParentOfCollection$($coll$$4_collection$$42$$), null !== $parent$$39$$ && ($parent$$39$$ !== $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$7$$.unshift($parent$$39$$), $coll$$4_collection$$42$$ = this.$_getCollectionOfKey$($parent$$39$$));
    } while (null != $parent$$39$$);
    return $parents$$7$$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$88$$) {
    var $key$$163$$ = $model$$88$$ instanceof $oj$$60$$.$Model$ ? this.$parseMetadata$($model$$88$$).key : $model$$88$$;
    return $model$$88$$ ? $key$$163$$ : $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$89$$) {
    return this.$cache$[this.$_getCacheKey$($model$$89$$)];
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$90$$, $collection$$43$$) {
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$90$$)] = $collection$$43$$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$164_model$$91$$) {
    $key$$164_model$$91$$ = this.$_getCacheKey$($key$$164_model$$91$$);
    for (var $prop$$67$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$67$$) && $prop$$67$$ === $key$$164_model$$91$$) {
        this.$cache$[$key$$164_model$$91$$].off(null, null, this);
        delete this.$cache$[$key$$164_model$$91$$];
        break;
      }
    }
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$165$$, $collection$$44$$) {
    for (var $count$$56$$ = $collection$$44$$.length, $i$$377$$ = 0;$i$$377$$ < $count$$56$$;$i$$377$$++) {
      var $currKey$$ = this.$_getCacheKey$($collection$$44$$.at($i$$377$$));
      if ($key$$165$$ === $currKey$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$92$$) {
    for (var $prop$$68$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$68$$)) {
        for (var $collection$$45$$ = this.$cache$[$prop$$68$$], $i$$378$$ = 0;$i$$378$$ < $collection$$45$$.length;$i$$378$$++) {
          if ($collection$$45$$.at($i$$378$$) === $model$$92$$) {
            return{index:$i$$378$$, $collection$:$collection$$45$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$166$$) {
    for (var $prop$$69$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$69$$)) {
        var $collection$$46$$ = this.$cache$[$prop$$69$$];
        if (this.$_keyInCollection$($key$$166$$, $collection$$46$$)) {
          return $collection$$46$$;
        }
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$47$$) {
    for (var $prop$$70$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$70$$) && this.$cache$[$prop$$70$$] === $collection$$47$$) {
        return $prop$$70$$;
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$1$$ = !0, $collection$$48$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$48$$ || ($cached$$1$$ = !1, $collection$$48$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$48$$ && (this.$_applySortToCollection$($collection$$48$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$48$$)));
    return{$collection$:$collection$$48$$, $cached$:$cached$$1$$};
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$11$$, $operation$$6$$, $index$$263$$, $parent$$40$$, $data$$164$$) {
    return{source:$source$$11$$, operation:$operation$$6$$, index:$index$$263$$, parent:$parent$$40$$, data:$data$$164$$};
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$49$$, $start$$55$$, $count$$57$$, $callbacks$$39$$, $parent$$41$$) {
    var $self$$186$$ = this;
    null === $collection$$49$$ && (($collection$$49$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$49$$ = {$collection$:$collection$$49$$, $cached$:!0} : ($collection$$49$$ = {$collection$:$self$$186$$.$rootCollection$, $cached$:!1}, $self$$186$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$49$$ && $self$$186$$.$_fetch$($collection$$49$$, function($coll$$5$$) {
      $callbacks$$39$$.success && $callbacks$$39$$.success($self$$186$$.$_getNodeSet$($coll$$5$$, $parent$$41$$, $start$$55$$, $count$$57$$));
    }, $callbacks$$39$$.error);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$50$$, $parent$$42$$, $start$$56$$, $count$$58$$) {
    return new $oj$$60$$.$CollectionNodeSet$($parent$$42$$, $collection$$50$$, this, $start$$56$$, $count$$58$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$51$$, $key$$167$$) {
    var $self$$187$$ = this;
    return new Promise(function($resolve$$50$$) {
      function $checkNext$$($index$$264$$, $collection$$52$$, $key$$168$$) {
        $index$$264$$ < $collection$$52$$.length ? $collection$$52$$.at($index$$264$$, {deferred:!0}).then(function($model$$93$$) {
          if ($model$$93$$) {
            var $parse$$7$$ = $self$$187$$.$parseMetadata$($model$$93$$);
            if ($key$$168$$ === $parse$$7$$.key) {
              $resolve$$50$$($model$$93$$);
              return;
            }
          }
          $index$$264$$++;
          $checkNext$$($index$$264$$, $collection$$52$$, $key$$168$$);
        }) : $resolve$$50$$(null);
      }
      $checkNext$$(0, $collection$$51$$, $key$$167$$);
    });
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$53$$, $key$$169$$, $depth$$25$$) {
    var $self$$188$$ = this;
    return new Promise(function($resolve$$51$$) {
      $self$$188$$.$_scanForKey$($collection$$53$$, $key$$169$$).then(function($model$$94$$) {
        function $getNextCollection$$($index$$265$$, $tds$$) {
          if ($index$$265$$ < $max$$9$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$53$$.at($index$$265$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$169$$, $depth$$25$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$51$$($childModel$$) : ($index$$265$$++, $getNextCollection$$($index$$265$$, $tds$$));
              });
            }, null) : ($index$$265$$++, $getNextCollection$$($index$$265$$, $tds$$));
          } else {
            $resolve$$51$$(null);
          }
        }
        if ($model$$94$$) {
          $resolve$$51$$({$model$:$model$$94$$, depth:$depth$$25$$});
        } else {
          var $max$$9$$ = $collection$$53$$.length;
          $getNextCollection$$(0, $self$$188$$);
        }
      });
    });
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$44$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length || !$collectionCacheObj$$.$collection$.$IsUrlBased$() ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$44$$}));
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$43$$, $callbacks$$40$$) {
    var $self$$189$$ = this;
    null === $parent$$43$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$25$$) {
      $nodeSet$$25$$.$FetchDescendants$({success:function() {
        $callbacks$$40$$.success && $callbacks$$40$$.success($nodeSet$$25$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$43$$, 0).then(function($collection$$54_parentModel$$2$$) {
      $collection$$54_parentModel$$2$$ && ($collection$$54_parentModel$$2$$ = $self$$189$$.$GetChildCollection$($collection$$54_parentModel$$2$$.$model$), $self$$189$$.$FetchCollection$($collection$$54_parentModel$$2$$, 0, -1, {success:function($nodeSet$$26$$) {
        $nodeSet$$26$$.$FetchDescendants$({success:function() {
          $callbacks$$40$$.success && $callbacks$$40$$.success($nodeSet$$26$$);
        }});
      }}, $parent$$43$$));
    });
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$60$$$$CollectionTreeDataSource$$$sort$($criteria$$4$$, $callbacks$$41$$) {
    var $key$$170$$ = $criteria$$4$$.key, $dir$$1$$ = $criteria$$4$$.direction, $needSort$$2$$ = !1;
    $key$$170$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$170$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$71$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$71$$) && this.$_applySortToCollection$(this.$cache$[$prop$$71$$]);
      }
    }
    $callbacks$$41$$ && $callbacks$$41$$.success && $callbacks$$41$$.success();
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$60$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$56$$) {
    $collection$$56$$.comparator = this.$sortkey$;
    $collection$$56$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$56$$.sort();
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$60$$$$CollectionTreeDataSource$$$move$() {
    $oj$$60$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$60$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$60$$$$CollectionTreeDataSource$$$getCapability$($feature$$11$$) {
    return "sort" === $feature$$11$$ ? "default" : "move" === $feature$$11$$ ? "none" : "batchFetch" === $feature$$11$$ || "fetchDescendants" === $feature$$11$$ ? "disable" : null;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$60$$.$CollectionTreeDataSource$.prototype.getCapability});
});
