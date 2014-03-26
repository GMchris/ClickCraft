'use strict'

var itemManager = {
	allItemNames : [
	"tools","refinement","time","hand","",
	"forest","mine","elements","",
	"wood","fruit","stone","ore","earth","water","fire","herbs","aether","air","",
	"paper","road","alcohol","iron","gold","copper","paper","ink","cottage","well","carriage","sand","",
	],
	//Creates all elements
	drawItems: function(){
		var division = 0;
		for(var i=0;i<this.allItemNames.length;i++){
			if(this.allItemNames[i]==""){
				division++;
				continue;
			}
		//Add HTML element
		$("<div/>",{
			id:this.allItemNames[i]
		})
		.addClass("items")
		.appendTo("#division"+division);
		}
	},
	//Gives the appropriet background image and makes it clickable
	unlock: function(name){
		$("#"+name)
		.css("background-image","url(../images/items/"+name+".png")
		.on("click",function(){Game.select(this.id)});
	}
}