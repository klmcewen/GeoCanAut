(function(){define(["jquery","jqueryui","knockout","gcaut-i18n","gcaut-addServiceV","gcaut-showMessageV"],function(f,j,o,p,c,b){var g;document.getElementById("file1").addEventListener("change",a,false);document.getElementById("inProjectName").addEventListener("change",k,false);function k(){var q=f("#inProjectName").val();var r=q.substring(q.indexOf(".")+1);if(r!=="json"){b.initialize("Must be a JSON file");b.open()}}function a(r){var t=r.target.files;for(var s=0,u;u=t[s];s++){if(!u.type.match("application/json")){continue}var q=new FileReader();q.onload=n(u);q.readAsText(u)}}function n(q){return function(s){f("#inProjectName").val(q.name);var r=JSON.parse(s.target.result);b.initialize("Show I read JSON file. Value of mousecoord="+r.icanmap.controls.mousecoord);b.open()}}f("#divSelectService").dialog({autoOpen:false,closeText:p.getDict("%close"),modal:true,title:p.getDict("%selectservice2"),width:400,show:{effect:"fade",duration:700},hide:{effect:"fade",duration:500},buttons:[{text:"Ok",title:"Ok",click:function(){f(this).dialog("close")}},{text:p.getDict("%cancel"),title:p.getDict("%cancel"),click:function(){f(this).dialog("close")}}]});var e=function(q){this.type=q};var i=function(r,q){this.name=r;this.url=q};var d=function(r,q,s){this.name=r;this.url=q;this.type=s};function m(q){switch(q){case 0:f("#secDefineServices").fadeIn("slow");f("#gvcPrevious").removeClass("gcvbutton gcvbutton135 gcvbuttonImage gcvgrey gcvHeight40 gvcShow");f("#gvcPrevious").addClass("gvcHidden");f("#gvcNext").removeClass("gvcHidden");f("#gvcNext").addClass("gcvbutton gcvbutton135 gcvbuttonImage gcvgrey gcvHeight40 gvcShow");break;case 1:f("#secArrangeServices").fadeIn("slow");f("#gvcPrevious").removeClass("gvcHidden");f("#gvcPrevious").addClass("gcvbutton gcvbutton135 gcvbuttonImage gcvgrey gcvHeight40 gvcShow");f("#gvcNext").removeClass("gvcHidden");f("#gvcNext").addClass("gcvbutton gcvbutton135 gcvbuttonImage gcvgrey gcvHeight40 gvcShow");break}}function h(q){switch(q){case 0:f("#secDefineServices").hide();break;case 1:f("#secArrangeServices").hide();break}}function l(q){alert("i am getting services for server "+q);var r=["service1","service2","service3"];return r}g=function(r){var q=function(){var y=this;y.addsecserv=p.getDict("%addsecserv");y.arrangeservices=p.getDict("%arrangeservices");y.arrangeservicestext=p.getDict("%arrangeservicestext");y.availservices=p.getDict("%availservices");y.availlayers=p.getDict("%availlayers");y.definemap=p.getDict("%definemap")+" #x";y.layer=p.getDict("%layer");y.name=p.getDict("%name");y.nameconfig=p.getDict("%nameconfig");y.nextstep=p.getDict("%nextstep");y.open=p.getDict("%open");y.openconfig=p.getDict("%openconfig");y.orspecify=p.getDict("%orspecify");y.picklist=p.getDict("%picklist");y.pickprilist=p.getDict("%pickprilist");y.pickseclist=p.getDict("%pickseclist");y.previousstep=p.getDict("%previousstep");y.priservice=p.getDict("%pri-serv");y.proceed=p.getDict("%proceed");y.save=p.getDict("%save");y.saveconfig=p.getDict("%saveconfig");y.secservice=p.getDict("%sec-serv");y.selectlayer=p.getDict("%selectlayer");y.selectserver=p.getDict("%selectserver");y.selectservice=p.getDict("%selectservice");y.selecttype=p.getDict("%selecttype");y.server=p.getDict("%server");y.servicetype=p.getDict("%servicetype");y.serviceurl=p.getDict("%serviceurl");y.title=p.getDict("%title");y.verify=p.getDict("%verify");var s=0;var A=0;var w=new e("Dynamic");var v=new e("Tiled");var u=new e("WMS");var t=new e("WMTS");y.serviceTypes=o.observableArray([w,v,u,t]);var z=new i("Internal ArcGIS Server Base Maps","http://s-bsc-gisint1.nrn.nrcan.gc.ca/ArcGIS/rest/services/BaseMaps?f=pjson");var x=new i("External ArcGIS Server Base Maps","http://s-bsc-gisext1.nrcan.gc.ca/ArcGIS/rest/services/BaseMaps?f=pjson");y.servers=o.observableArray([z,x]);y.selectedServer=o.observable();y.services=o.observableArray([]);y.selectedService=o.observable();y.layers=o.observableArray([]);y.selectedLayer=o.observable();y.services=[];y.layers=o.computed(function(){var B=[];if(!y.selectedService()){return B}B=["layer1","layer2","layer3"];return B});y.openConfigFile=function(){f("#inProjectName").val("");f("#file1").click()};y.saveConfigFile=function(){var B=f("#inProjectName").val();if(f("#inProjectName").val()===""){b.initialize(p.getDict("%supplyfilename"));b.open()}else{b.initialize("Saving the configuration file...");b.open()}};y.getService=function(){f("#divSelectService").dialog("open")};y.addSecService=function(){A=A+1;c.initialize(A)};y.showPreviousSection=function(){h(s);s=s-1;m(s)};y.showNextSection=function(){h(s);s=s+1;m(s)};y.init=function(){return{controlsDescendantBindings:true}};y.init()};o.applyBindings(new q(r))};return{initialize:g}})}).call(this);