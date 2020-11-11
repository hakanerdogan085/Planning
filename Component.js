 sap.ui.define(['sap/ui/core/UIComponent'],
 	function (UIComponent) {
 		"use strict";

 		var Component = UIComponent.extend("ZPLANING.Component", {

 			metadata: {

 				rootView: "ZPLANING.BasicGanttChart",
 				dependencies: {
 					libs: [
 						"sap.gantt",
 						"sap.ui.table",
 						"sap.m",
 						"sap.ui.layout"
 					]
 				},
 				config: {
 					sample: {
 						files: [
 							"view1.view.xml",
 							"view1.controller.js",
 							"data.json",
 							"Dialog.fragment.xml"
 						]
 					}
 				}
 			}
 		});

 		return Component;
 	});