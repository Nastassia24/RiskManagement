sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('riskmanagement.ext.controller.RisksList', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf riskmanagement.ext.controller.RisksList
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();

				this.base.byId("riskmanagement::RisksList--fe::CustomAction::triggerCcApi").attachPress((oEvent) => {

					oModel.callFunction()
				});
				
				debugger
			},

			triggerCloudConnecterAPI () {
				var oModel = this.base.getExtensionAPI().getModel();
				console.log("qqqqqqqqqq")
                debugger
            }
		}
	});
});
