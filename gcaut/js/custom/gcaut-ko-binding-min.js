(function(){define(["jquery-private","knockout","jqueryui"],function(c,a,b){a.bindingHandlers.tooltip={init:function(g,h){var f=a.utils.unwrapObservable(h()),e={},d=$(g);a.utils.extend(e,a.bindingHandlers.tooltip.options);a.utils.extend(e,f);d.attr("title",e.content);d.tooltip(e);a.utils.domNodeDisposal.addDisposeCallback(g,function(){d.tooltip("destroy")})},options:{show:{effect:"slideDown",delay:2000},hide:{effect:"slideUp",delay:100},position:{my:"right+30 top+5"},tooltipClass:"gcviz-tooltip",trigger:"hover, focus"}};a.bindingHandlers.callbacks={init:function(e,g,h,d){function f(i){if(i){d.enterFullscreen(vm.widthSection,vm.heightSection)}else{d.exitFullscreen()}}},update:function(e,g,i,d){var f=g().func,h=g().keyType}}})}).call(this);