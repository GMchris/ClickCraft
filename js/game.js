"use strict"

var Game = {

	unlocked : 0,
	iterateUnlocked: function(){
		this.unlocked++;
		$("#unlockedItems").text(this.unlocked+"/ 69")
	},

	init : function(){
		itemManager.drawItems();
		for(var i=0;i<8;i++){
			if(itemManager.allItemNames[i]==""){
				continue;
			}
			itemManager.unlock(itemManager.allItemNames[i]);
		}
		Visual.applyTooltips();
		Game.makeEvents();
		
	},
	current: undefined,
	select :function(name){
		//Make the item current if no other is selected
		if(this.current==undefined){
			this.current=name;
			Visual.setCurrentItem(this.current);
			return;
		}
		//If same item is clicked, unselect it
		if(this.current==name){
			this.current=undefined;
			Visual.setCurrentItem(this.current);
			return;
		}

		itemManager.combine(this.merge(name));
		this.current=undefined;
		Visual.setCurrentItem(this.current);
	},
	//Returns a string from both the current and clicked item
	merge : function(name){
		return this.current +" "+ name;
	},
	//Makes a certain tier visible
	selectTier : function(tier){
		if($(".visible").length==2){
			$(".visible")
			.removeClass("visible");
		}

		$("#division"+tier)
		.addClass("visible");
	},
	makeEvents:function(){
		$("#helpButton").on("click",function(){
			$("#helper").css("display","block");
		});

		$("#helper").on("click",function(){
			$(this).css("display","none");
		})
	}

}

var Visual = {

	setCurrentItem : function(name){
		var currentName;
		if(name==undefined){
			currentName = "items";
			$("#currentItemName").text("");
		}
		else{
			currentName = name;
			$("#currentItemName").text(name);
		}
		$("#currentItem").css("background-image","url(images/items/"+currentName+".png)");

	},

	applyTooltips : function(){
		$('.items').qtip({
			content:{
				attr: "id"
			},
			style:{
				classes: "qtip-tipsy"
			},
			position:{
				my: "bottom center",
				at: "top center"
			}
		})
	},

	unlockPrompt : function(name){
		var tempContainer = $("<div/>");
		tempContainer
		.addClass("unlockedPrompt");

		$("<div/>")
		.addClass("unlockedItem")
		.css("background-image","url(images/items/"+name+".png)")
		.appendTo(tempContainer);

		$("<div/>")
		.text(name)
		.addClass("unlockedName")
		.appendTo(tempContainer);

		tempContainer
		.fadeOut(2000,function(){
			$(this).remove();
		}).appendTo("#messages");

		$(".unlockedPrompt").fadeOut(2500,function(){
			$(this).remove();
		})
	}
}

window.addEventListener("load",Game.init,false)