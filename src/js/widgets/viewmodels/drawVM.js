/*
 *
 * GeoCanAut / GéoCanAut
 * gcvaut.github.io/gcvaut/License-eng.txt / gcvaut.github.io/gcvaut/Licence-fra.txt
 *
 * Draw view model widget
 */
(function() {
    'use strict';
    define(['jquery-private',
			'knockout',
			'gcaut-i18n',
			'gcaut-func'
	], function($aut, ko, i18n, gcautFunc) {
		var initialize,
			clean,
			vm;

		initialize = function(elem, map) {

			// data model
			var drawViewModel = function(elem, map) {
				var _self = this,
					line = map.drawline,
					text = map.drawtext,
					measure = map.measure,
					file = map.importexport,
					measureType = gcautFunc.getListCB(i18n.getDict('%draw-measuretypelist')),
					measureUnit = gcautFunc.getListCB(i18n.getDict('%draw-measureunitlist'));

				// label
				_self.lblEnable = i18n.getDict('%draw-enable');
				_self.lblExpand = i18n.getDict('%expand');
				_self.lblLine = i18n.getDict('%draw-line');
				_self.lblText = i18n.getDict('%draw-text');
				_self.lblMeasure = i18n.getDict('%draw-measure');
				_self.lblMeasureType = i18n.getDict('%draw-measuretype');
				_self.lblMeasureUnit = i18n.getDict('%draw-measureunit');
				_self.lblFile = i18n.getDict('%draw-file');
				_self.lblSelectItem = i18n.getDict('%selectItem');

				// enable and expand
				_self.isEnable = ko.observable(map.enable);
				_self.isExpand = ko.observable(map.expand);

				// line
				_self.isLine = ko.observable(line.enable);
				
				// text
				_self.isText = ko.observable(text.enable);
				
				// measure
				_self.isMeasure = ko.observable(measure.enable);
				_self.measureType = measureType;
				_self.selectMeasureType = ko.observable(_self.measureType[measure.type - 1]);
				_self.measureUnit = measureUnit;
				_self.selectMeasureUnit = ko.observable(_self.measureUnit[measure.unit - 1]);
				
				// import/export file
				_self.isFile = ko.observable(file.enable);
				
				// clean the view model
				clean(ko, elem);

				_self.init = function() {
					return { controlsDescendantBindings: true };
				};

				_self.bind = function() {
					clean(ko, elem);
					ko.applyBindings(_self, elem);
				};

				_self.write = function() {
					var value,
						measureType = -1,
						measureUnit = -1;
					
					// check if value are undefined
					if (_self.selectMeasureType() !== undefined) {
						measureType = _self.selectMeasureType().id;
					}
					
					if (_self.selectMeasureUnit() !== undefined) {
						measureUnit = _self.selectMeasureUnit().id;
					}
					
					value = '"toolbardraw": {' +
								'"enable": ' + _self.isEnable() +
								',"expand": ' + _self.isExpand() +
								',"drawline": {' +
									'"enable": ' + _self.isLine() +
								'},' +
								'"drawtext": {' +
									'"enable": ' + _self.isText() +
								'},' +
								'"measure": {' +
									'"enable": ' + _self.isMeasure() +
									',"type": ' + measureType +
									',"unit": ' + measureUnit +
								'},' +
								'"importexport": {' +
									'"enable": ' + _self.isFile() +
								'}' +
							'}';
		
					return value;
				};

				_self.init();
			};

			vm = new drawViewModel(elem, map);
			ko.applyBindings(vm, elem); // This makes Knockout get to work
			return vm;
		};

		clean = function(ko, elem) {
			ko.cleanNode(elem);
		};

		return {
			initialize: initialize,
			clean: clean
		};
	});
}).call(this);
