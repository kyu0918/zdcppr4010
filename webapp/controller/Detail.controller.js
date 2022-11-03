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

		_onObjectMatched: function (oEvent) {
			var oArguments = oEvent.getParameter("arguments"),
				sPorderid = oArguments.Porderid;
			
			var oComponent = this.getOwnerComponent(),
				oModel = oComponent.getModel();

			var oTable = this.byId('detailSmartTable').getTable();

			var aFilter = [];
	
			if(sPorderid) {
				aFilter.push(
					new Filter("Porderid", "EQ", sPorderid)
				)
			}

			if(!oTable.getBinding('items')){
				oModel.attachEventOnce().attachEventOnce('requestCompleted', function() {
					oTable.getBinding('items').filter( aFilter );
				}.bind(this));
			}else{
				oTable.getBinding('items').filter( aFilter );
			}



						
		},

		onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
		},

		onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
		},

        
	});
});