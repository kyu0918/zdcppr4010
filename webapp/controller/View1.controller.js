sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/odata/v2/ODataModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Fragment, ODataModel) {
    "use strict";

    return Controller.extend("sync.zdcppr4010.controller.View1", {
      onInit: function () {
        var sUrl = "/sap/opu/odata/sap/ZDCPPGW_PLAN_SRV/";
        var oModel = new ODataModel(sUrl, { useBatch: false });

        var oView = this.getView();
        oView.setModel(oModel);

        this.oRouter = this.getOwnerComponent().getRouter();
      },

      onRowPress: function (oEvent) {
        // var sPath = oEvent.getParameter("Porderid").getPath();
        // this._sPath = sPath;

        // var oSelectedRow = otable
        //   .getBinding("rows")
        //   .getModel()
        //   .getProperty(sPath);
        // var sCreateKey = oModel.createKey("/planHSet", {
        //   Porderid: oSelectedRow.Porderid,
        // });
        var oListItem = oEvent.getParameter('listItem');
        oListItem.getParent().setSelectedItem(oListItem, false);
      
        var oBindingContext = oListItem.getBindingContext(),
            sPath = oBindingContext.getPath(),
            oRow = oListItem.getModel().getProperty(sPath);

        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Detail", {
          Porderid: oRow.Porderid
        });

        // var aFilter=[];
        // aFilter.push(
        //     new Filter('Porderid',"EQ", oSelectedRow.Porderid)
        // )

      },

      onBeforeRebindTable: function(oEvent) {
        var mBindingParams = oEvent.getParameter("bindingParams");

        if( mBindingParams.parameters.custom["search"] ) {

          mBindingParams.filters.push(
            new sap.ui.model.Filter(
              mBindingParams.parameters.custom["search-focus"],
              "EQ",
              mBindingParams.parameters.custom["search"]
            )
          );
        }

      },

      onBeforeExport: function (oEvt) {
        var mExcelSettings = oEvt.getParameter("exportSettings");

        // Disable Worker as Mockserver is used in Demokit sample
        mExcelSettings.worker = false;
      },

      onPaste: function (oEvent) {
        var oResult = oEvent.getParameter("result");
        MessageToast.show("Paste result:" + JSON.stringify(oResult), {
          width: "75vw",
        });
      },
    });
  }
);
