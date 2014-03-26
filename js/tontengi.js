//Tier two

case "earth stone":
case "stone earth":
	itemManager.unlock("road");
	break;

case "fruit time":
case "time fruit":
	itemManager.unlock("alcohol");
	break;

case "ore fire":
case "fire ore":
	itemManager.unlock("iron");
	itemManager.unlock("gold");
	itemManager.unlock("copper");
	break;

case "fruit refinement":
case "refinement fruit":
	itemManager.unlock("ink");
	break;

case "stone wood":
case "wood stone":
	itemManager.unlock("cottage");
	break;

case "stone water":
case "water stone":
	itemManager.unlock("well");
	break;

case "tools wood":
case "wood tools":
	itemManager.unlock("carriage");
	break;

case "stone air":
case "air stone":
	itemManager.unlock("sand");
	break;

//Tier Three

case "cottage well":
case "well cottage":
	itemManager.unlock("village");
	break;

case "tools gold":
case "gold tools":
	itemManager.unlock("crown");
	break;

case "tools copper":
case "copper tools":
	itemManager.unlock("wire");
	break;

case "alcohol refinement":
case "refinement alcohol":
	itemManager.unlock("chemicals");
	break;

case "iron wood":
case "wood iron":
	itemManager.unlock("drill");
	break;

case "ink paper":
case "paper ink":
	itemManager.unlock("scripture");
	break;

case "tools iron":
case "iron tools":
	itemManager.unlock("metal parts");
	break;

case "sand fire":
case "fire sand":
	itemManager.unlock("glass");
	break;

case "gold iron":
case "iron gold":
	itemManager.unlock("idol");
	break;

//Tier four

case "crown village":
case "village crown":
	itemManager.unlock("kingdom");
	break;

case "chemicals rock":
case "rock chemicals":
	itemManager.unlock("cement");
	break;

case "herbs chemicals":
case "chemicals herbs":
	itemManager.unlock("medicine");
	break;

case "drill mine":
case "mine drill":
	itemManager.unlock("oil");
	break;

case "elements metal parts":
case "metal parts elements":
	itemManager.unlock("electricity");
	break;

//Tier five

case "kingdom alcohol":
case "alcohol kingdom":
	itemManager.unlock("empire");
	break;

case "road cement":
case "cement road":
	itemManager.unlock("street");
	break;

case "metal parts oil":
case "oil metal parts":
	itemManager.unlock("engine");
	break;

case "wire electricity":
case "electricity wire":
	itemManager.unlock("technology");
	break;

case "chemicals oil":
case "oil chemicals":
	itemManager.unlock("paint");
	break;

case "glass cement":
case "cement glass":
	itemManager.unlock("building");
	break;

//Tier Six

case "street empire":
case "empire street":
	itemManager.unlock("city");
	break;

case "engine carriage":
case "carriage engine":
	itemManager.unlock("vehicles");
	break;

case "empire paper":
case "paper empire":
	itemManager.unlock("math");
	break;

case "building medicine":
case "medicine building":
	itemManager.unlock("lab");
	break;

case "paint paper":
case "paper paint":
	itemManager.unlock("art");
	break;

case "idol building":
case "building idol":
	itemManager.unlock("holy house");
	break;

case "scripture building":
case "building scripture":
	itemManager.unlock("library");
	break;

case "technology metal parts":
case "metal parts technology":
	itemManager.unlock("machinery");
	break;

//Tier Seven

case "city machinery":
case "machinery city":
	itemManager.unlock("megapolis");
	break;

case "math technology":
case "technology math":
	itemManager.unlock("computer");
	break;

case "vehicles street":
case "street vehicles":
	itemManager.unlock("country");
	break;

case "vehicles technology":
case "technology vehicles":
	itemManager.unlock("spaceship");
	break;

case "holy house library":
case "library holy house":
	itemManager.unlock("history");
	break;

//Tier Eight

case "computer lab":
case "lab computer":
	itemManager.unlock("science");
	break;

case "history art":
case "art history":
	itemManager.unlock("culture");
	break;

case "spaceship aether":
case "aether spaceship":
	itemManager.unlock("exploration");
	break;

case "megapolis country":
case "country megapolis":
	itemManager.unlock("society");
	break;

//Tier Nine

case "society science":
case "science society":
	itemManager.unlock("flux capacitor");
	break;

case "exploration culture":
case "culture exploration":
	itemManager.unlock("polymer hull");
	break;

//Tier Ten

case "flux capacitor polymer hull":
case "polymer hull flux capacitor":
	itemManager.unlock("inactive time machine");
	break;

//End

case "inactive time machine time":
case "time inactive time machine":
	Game.endGame();
	break;

