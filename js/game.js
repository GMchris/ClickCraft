"use strict"

var Game = {
	init : function(){
		itemManager.drawItems();
		for(var i=0;i<8;i++){
			if(itemManager.allItemNames[i]==""){
				continue;
			}
			itemManager.unlock(itemManager.allItemNames[i]);
		}
		
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

		itemManager.combine(this.merge(name));
		this.current=undefined;
	},
	//Returns a string from both the current and clicked item
	merge : function(name){
		return this.current +" "+ name;
	}
}

window.addEventListener("load",Game.init,false)