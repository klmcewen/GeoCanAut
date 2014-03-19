/*
 *
 * GeoCanAut / GéoCanAut
 * gcvaut.github.io/gcvaut/License-eng.txt / gcvaut.github.io/gcvaut/Licence-fra.txt
 *
 * Legend view model widget
 */
/* global locationPath: false */
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
			var navViewModel = function(elem, map) {
				var _self = this,
					geoloc = map.geolocation,
					scalebar = map.scalebar,
					scale = map.scaledisplay,
					overview = map.overview,
					scalebarType = gcautFunc.getListCB(i18n.getDict('%nav-scalebarlist')),
					scaleType = gcautFunc.getListCB(i18n.getDict('%nav-scalelist')),
					pathZoom = locationPath + 'gcaut/images/navFullExtent.png',
					pathGeoloc = locationPath + 'gcaut/images/navGeoloc.png';

				// images path
				_self.imgZoom = pathZoom;
				_self.imgGeoloc = pathGeoloc;

				// label
				_self.lblEnable = i18n.getDict('%nav-enable');
				_self.lblExpand = i18n.getDict('%expand');
				_self.lblZoom = i18n.getDict('%nav-zoom');
				_self.lblGeoloc = i18n.getDict('%nav-geoloc');
				_self.lblScalebar = i18n.getDict('%nav-scalebar');
				_self.lblScalebarUnit = i18n.getDict('%nav-scalebarunit');
				_self.lblScale = i18n.getDict('%nav-scale');
				_self.lblScaleFormat = i18n.getDict('%nav-scaleformat');
				_self.lblOver = i18n.getDict('%nav-over');
				_self.lblUrlOver = i18n.getDict('%nav-urlover');

				// enable and expand
				_self.isEnable = ko.observable(map.enable);
				_self.isExpand = ko.observable(map.expand);

				// zoom to full extent
				_self.isZoom = ko.observable(map.zoom);

				// zoom to geolocation
				_self.isGeoloc = ko.observable(geoloc.enable);

				// scalebar
				_self.isScalebar = ko.observable(scalebar.enable);
				_self.scalebarType = scalebarType;
				_self.selectScalebar = ko.observable(_self.scalebarType[scalebar.unit - 1]);

				// scale
				_self.isScale = ko.observable(scale.enable);
				_self.scaleType = scaleType;
				_self.selectScale = ko.observable(_self.scaleType[scale.format - 1]);

				// overview
				_self.isOver = ko.observable(overview.enable);
				_self.urlOver = ko.observable(map.overview.url);

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
						// get value from map viewmodel
						url = gcautFunc.getElemValueVM('map', 'urlGeomServer');

					value = '"toolbarnav": {' +
								'"enable": ' + _self.isEnable() +
								',"expand": ' + _self.isExpand() +
								',"zoom": ' + _self.isZoom() +
								',"urlgeomserv": "' + url + '",' +
								'"geolocation": {' +
									'"enable": ' + _self.isGeoloc() +
									',"type": -1' +
								'},' +
								'"scalebar": {' +
									'"enable": ' + _self.isScalebar() +
									',"unit": ' + _self.selectScalebar().id +
								'},' +
								'"scaledisplay": {' +
									'"enable": ' + _self.isScale() +
									',"format": ' + _self.selectScale().id +
								'},' +
								'"overview": {' +
									'"enable": ' + _self.isOver() +
									',"url": "' + _self.urlOver() + '"' +
								'}' +
							'}';

					return value;
				};

				_self.init();
			};

			vm = new navViewModel(elem, map);
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
