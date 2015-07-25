/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "ConTroll.MainView",
	kind: "FittableRows",
	fit: true,
	classes: "frame", 
	components:[
		{kind: "onyx.Toolbar", classes: "frame", content: "Hello World"},
		{kind: "enyo.FittableColumns", classes: "frame", fit: true, components:[
			{kind: "enyo.Panels", classes: "frame", fit: true, components: [
				{kind: "enyo.Scroller", classes: "frame", fit: true, components: [
					{name: "test", classes: "nice-padding frame", allowHtml: true}
				]},
			]},
			{kind: "enyo.FittableRows", classes: "frame", components:[
				{kind: "enyo.Drawer", classes: "frame", components:[
					{kind: "onyx.Button", classes: "frame", name: "login", content: "כניסה", ontap: "loginTap"}
				]}
			]}
		]},
		{kind: "ConTroll.loginDialog", name: "loginScreen"}
	],
	loginTap: function(inSender, inEvent) {
		this.$.loginScreen.show();
	}
});
