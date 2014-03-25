'use strict'

var itemManager = {
	allItemNames : [
	"tools","refinement","time","hand","",
	"forest","mine","elements","",
	"wood","fruit","stone","ore","earth","water","fire","aether","air","herbs","",
	"paper","road","alcohol","iron","gold","copper","ink","cottage","well","carriage","sand","",
	"village","crown","wire","chemicals","drill","scripture","metalparts","glass","idol","",
	"kingdom","cement","medicine","oil","electricity","",
	"empire","street","engine","technology","paint","building","",
	"city","vehicles","math","lab","art","holyhouse","library","machinery","",
	"megapolis","computer","country","spaceship","history","",
	"science","culture","exploration","society","",
	"fluxcapacitor","polymerhull","",
	"inactivetimemachine",
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
		if($("#"+name).attr("unlocked")=="unlocked"){
			return;
		}
		$("#"+name)
		.css(
			"background-image","url(images/items/"+name+".png)"
		)
		.attr("unlocked","unlocked")
		.on("click",function(){Game.select(this.id)});
	},
	//Unlock a specific item depending on the passed string
	combine: function(name){
		switch(name){
			//Tier One
			case "forest tools":
			case "tools forest":
				this.unlock("wood");
				break;

			case "mine tools":
			case "tools mine":
				this.unlock("stone");
				this.unlock("ore");
				break;

			case "forest hand":
			case "hand forest":
				this.unlock("fruit");
				this.unlock("herbs");
				break;
				
				case "elements hand":
				case "hand elements":
				this.unlock("fire");
				this.unlock("earth");
				this.unlock("air");
				this.unlock("aether");
				this.unlock("water");
				break;
				
				//Tier Two
				
				case "wood refinement":
				case "refinement wood":
				this.unlock("paper");
				break;
				
				case "earth stone":
				case "stone earth":
				this.unlock("road");
				break;
				
				case "fruit time":
				case "time fruit":
				this.unlock("alcohol");
				break;
				
				case "ore fire":
				case "fire ore":
				this.unlock("iron");
				this.unlock("gold");
				this.unlock("copper");
				break;
				
				case "fruit refinement":
				case "refinement fruit":
				this.unlock("ink");
				break;
				
				case "stone wood":
				case "wood stone":
				this.unlock("cottage");
				break;
				
				case "stone water":
				case "water stone":
				this.unlock("well");
				break;
				
				case "tools wood":
				case "wood tools":
				this.unlock("carriage");
				break;
				
				case "stone air":
				case "air stone":
				this.unlock("sand");
				break;
				
				//Tier Three
				
				case "cottage well":
				case "well cottage":
				this.unlock("village");
				break;
				
				case "tools gold":
				case "gold tools":
				this.unlock("crown");
				break;
				
				case "tools copper":
				case "copper tools":
				this.unlock("wire");
				break;
				
				case "alcohol fire":
				case "fire alcohol":
				this.unlock("chemicals");
				break;
				
				case "iron wood":
				case "wood iron":
				this.unlock("drill");
				break;
				
				case "ink paper":
				case "paper ink":
				this.unlock("scripture");
				break;
				
				case "tools iron":
				case "iron tools":
				this.unlock("metalparts");
				break;
				
				case "sand fire":
				case "fire sand":
				this.unlock("glass");
				break;
				
				case "gold iron":
				case "iron gold":
				this.unlock("idol");
				break;
				
				//Tier four
				
				case "crown village":
				case "village crown":
				this.unlock("kingdom");
				break;
				
				case "chemicals stone":
				case "stone chemicals":
				this.unlock("cement");
				break;
				
				case "herbs chemicals":
				case "chemicals herbs":
				this.unlock("medicine");
				break;
				
				case "drill mine":
				case "mine drill":
				this.unlock("oil");
				break;
				
				case "elements metalparts":
				case "metalparts elements":
				this.unlock("electricity");
				break;
				
				//Tier five
				
				case "kingdom alcohol":
				case "alcohol kingdom":
				this.unlock("empire");
				break;
				
				case "road cement":
				case "cement road":
				this.unlock("street");
				break;
				
				case "metalparts oil":
				case "oil metalparts":
				this.unlock("engine");
				break;
				
				case "wire electricity":
				case "electricity wire":
				this.unlock("technology");
				break;
				
				case "chemicals oil":
				case "oil chemicals":
				this.unlock("paint");
				break;
				
				case "glass cement":
				case "cement glass":
				this.unlock("building");
				break;
				
				//Tier Six
				
				case "street empire":
				case "empire street":
				this.unlock("city");
				break;
				
				case "engine carriage":
				case "carriage engine":
				this.unlock("vehicles");
				break;
				
				case "empire paper":
				case "paper empire":
				this.unlock("math");
				break;
				
				case "building medicine":
				case "medicine building":
				this.unlock("lab");
				break;
				
				case "paint paper":
				case "paper paint":
				this.unlock("art");
				break;
				
				case "idol building":
				case "building idol":
				this.unlock("holyhouse");
				break;
				
				case "scripture building":
				case "building scripture":
				this.unlock("library");
				break;
				
				case "technology metalparts":
				case "metalparts technology":
				this.unlock("machinery");
				break;
				
				//Tier Seven
				
				case "city machinery":
				case "machinery city":
				this.unlock("megapolis");
				break;
				
				case "math technology":
				case "technology math":
				this.unlock("computer");
				break;
				
				case "vehicles street":
				case "street vehicles":
				this.unlock("country");
				break;
				
				case "vehicles technology":
				case "technology vehicles":
				this.unlock("spaceship");
				break;
				
				case "holyhouse library":
				case "library holyhouse":
				this.unlock("history");
				break;
				
				//Tier Eight
				
				case "computer lab":
				case "lab computer":
				this.unlock("science");
				break;
				
				case "history art":
				case "art history":
				this.unlock("culture");
				break;
				
				case "spaceship aether":
				case "aether spaceship":
				this.unlock("exploration");
				break;
				
				case "megapolis country":
				case "country megapolis":
				this.unlock("society");
				break;
				
				//Tier Nine
				
				case "society science":
				case "science society":
				this.unlock("fluxcapacitor");
				break;
				
				case "exploration culture":
				case "culture exploration":
				this.unlock("polymerhull");
				break;
				
				//Tier Ten
				
				case "fluxcapacitor polymerhull":
				case "polymerhull fluxcapacitor":
				this.unlock("inactivetimemachine");
				break;
				
				//End
				
				case "inactivetimemachine time":
				case "time inactivetimemachine":
				Game.endGame();
				break;




			default:
				console.log("Invalid combine")
				break;
		}
	}
}