enyo.kind({
	name: "ConTroll.loginDialog", 
	kind: "enyo.Popup", 
	centered: true, 
	floating: true, 
	modal: true, 
	components:[
		{kind: "enyo.FittableRows", fit: true, components:[
			{kind: "onyx.Toolbar", content: "Login Screen"},
			{kind: "onyx.Button", content: "Google", name:"Google", ontap: "tapExternal"}
		]}
	],
	tapExternal: function(inSender, inEvent) {
		alert(inEvent.originator.name);
		this.setShowing(false);
	}
});