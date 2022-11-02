sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter"
], function (Controller, History, Filter) {
	"use strict";

	return Controller.extend("sync.zdcppr4010.controller.Detail", {

		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
		},

		onAfterRendering: function() {
			// var oTable = this.byId('detailSmartTable');

			// var aFilter = [];
			// debugger;
			// if(this._porderid) {
			// 	aFilter.push(
			// 		new Filter("Porderid", "EQ", this._porderid)
			// 	)
			// }

			// oTable.getBinding('items')
			// 	  .filter( aFilter );
		},

		_onObjectMatched: function (oEvent) {
			var oArguments = oEvent.getParameter("arguments"),
				sPorderid = oArguments.Porderid;

			this._porderid = sPorderid;

			var aFilter = [];

			// if(sPorderid) {
			// 	aFilter.push(
			// 		new Filter("Porderid", "EQ", sPorderid)
			// 	)
			// }
			// var oTable = this.byId('detailSmartTable');

			// debugger;
			// if(oTable.getBinding('items')) {
			// 	this.byId('detailTable')
			// 		.getBinding('items')
			// 		.filter( aFilter );
			// }
			
		},

		onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
		},

        
	});
});