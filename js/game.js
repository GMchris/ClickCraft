"use strict"

var Game = {
	init : function(){
		itemManager.drawItems();
		itemManager.unlock("tools");
		itemManager.unlock("hand");
	},
	current: undefined,
	select :function(name){
		//Make the item current if no other is selected
		if(this.current==undefined){
			this.current=name;
			return;
		}
		//If same item is clicked, unselect it
		if(this.current==name){
			this.current=undefined;
			return;
		}

		this.combine(this.merge(name));
		this.current=undefined;
	},
	//Returns a string from both the current and clicked item
	merge : function(name){
		return this.current +" "+ name;
	},
	//Unlock a specific item depending on the passed string
	combine: function(name){
		switch(name){

			case "hand tools":
			case "tools hand":
				console.log(name);
				break;

			default:
				console.log("Invalid combine")
				break;
		}
	}
}

window.addEventListener("load",Game.init,false)