/* leaflet.zoomhome 0.1.0 CC-BY-SA-3.0
   http://www.github.com/torfuspolymorphus/leaflet.zoomhome
   Torf <mail@torf.cc> (http://www.torf.cc)
   toms (https://gis.stackexchange.com/users/9847/toms) */
!function(){"use strict";L.Control.ZoomHome=L.Control.Zoom.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out",zoomHomeIcon:"home",zoomHomeTitle:"Home",homeCoordinates:null,homeZoom:null},onAdd:function(a){var b="leaflet-control-zoomhome",c=L.DomUtil.create("div",b+" leaflet-bar"),d=this.options;null===d.homeCoordinates&&(d.homeCoordinates=a.getCenter()),null===d.homeZoom&&(d.homeZoom=a.getZoom()),this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,b+"-in",c,this._zoomIn.bind(this));var e='<i class="fa fa-'+d.zoomHomeIcon+'" style="line-height:1.65;"></i>';return this._zoomHomeButton=this._createButton(e,d.zoomHomeTitle,b+"-home",c,this._zoomHome.bind(this)),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,b+"-out",c,this._zoomOut.bind(this)),this._updateDisabled(),a.on("zoomend zoomlevelschange",this._updateDisabled,this),c},_zoomHome:function(){this._map.setView(this.options.homeCoordinates,this.options.homeZoom)}}),L.Control.zoomHome=function(a){return new L.Control.ZoomHome(a)}}();