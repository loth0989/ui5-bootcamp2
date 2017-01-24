sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("webapp.controller.App", {
		onLoginPress: function() {
			// sap.m.MessageToast.show("Hello world");
			var oTextField = this.getView().byId("username");
			var oTextpwd   = this.getView().byId("password");

			// show a native javascript alert
			// sap.m.MessageToast.show("Hello world " + oTextField.getValue());

			// validations

			// if (oTextField.getValue() === " " && oTextpwd.getValue() === " ") {
			// 	sap.m.MessageToast.show("user name & Password Not Null");
			// } else if (oTextField.getValue() === " ") {
			// 	sap.m.MessageToast.show("user name not null");
			// } else if (oTextpwd.getValue() === " ") {
			// 	sap.m.MessageToast.show("password not null");
			// }
		
			// if (oTextField.getValue() === "Brian" && oTextpwd.getValue() === "mags"){
			// 	MessageToast.show("successful login");
			// }
		}
		});
});