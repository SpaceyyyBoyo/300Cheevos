if(xcheevos === undefined) var xcheevos = {};
xcheevos.name = 'Cheevo300';
xcheevos.version = '1.031 BETA';
xcheevos.GameVersion = '2.048';

xcheevos.launch = function() {
	xcheevos.init = function() {
		if (Game.prefs.popups) Game.Popup('Cheevo300 v' + xcheevos.version + ' loaded!');
		else Game.Notify('Cheevo300','Cheevo300 v' + xcheevos.version + ' loaded!', 'https://github.com/SpaceyyyBoyo/300Cheevos/blob/main/300cheevoIcon.png?raw=true', 1,1);
		xcheevos.Note = Game.NotesById[Game.noteId - 1];
		xcheevos.Note.life = 3000;
		xcheevos.AddCheevos();
	}
	xcheevos.AddCheevos = function() {
		xcheevos.data = {};
		xcheevos.Achievements = {};
		var num = Game.AchievementsN;
		var icon = "https://github.com/SpaceyyyBoyo/300Cheevos/blob/main/300icons.png?raw=true";
		var last;
		var order = 600000;
		
		new Game.Achievement('One down...',loc("Load <b>300Cheevo</b> for the first time!")+'<q>299 to go!<q>','https://github.com/SpaceyyyBoyo/300Cheevos/blob/main/300cheevoIcon.png?raw=true');

		xcheevos.TieredAchievements = {};
		new Game.Achievement('Plainly Stated',loc("Purchase every <b>Plain</b> upgrade, and unshackle the tier.")+'<q>This is very unflavorful flavor text. Quite plain indeed.</q>',[0,0,icon]);
		new Game.Achievement('Four doughtons',loc("Purchase every <b>Berrylium</b> upgrade, and unshackle the tier.")+'<q>More edible than Beryllium</q>',[0,1,icon]);
		new Game.Achievement('Baking bad',loc("Purchase every <b>Blueberrylium</b> upgrade, and unshackle the tier.")+'<q>Clear your social calendar. We have to bake.</q>',[0,2,icon]);
		new Game.Achievement('According to all known laws of aviation...',loc("Purchase every <b>Chalcedhoney</b> upgrade, and unshackle the tier.")+'<q>...bees should not be able to fly.</q>',[0,3,icon]);
		new Game.Achievement('Butter?',loc("Purchase every <b>Buttergold</b> upgrade, and unshackle the tier.")+'<q>I can\'t believe it isn\'t Margarine!</q>',[0,4,icon]);
		new Game.Achievement('placeholder4',loc("Purchase every <b>Sugarmuck</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,5,icon]);
		new Game.Achievement('Stay fresh!',loc("Purchase every <b>Jetmint</b> upgrade, and unshackle the tier.")+'<q>Your breath will smell so generically good.</q>',[0,6,icon]);
		new Game.Achievement('placeholder6',loc("Purchase every <b>Cherrysilver</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,7,icon]);
		new Game.Achievement('Trade offer',loc("Purchase every <b>Hazelrald</b> upgrade, and unshackle the tier.")+'<q>I receive: your indentured servitude and allegiance. You receive: cookies.</q>',[0,8,icon]);
		new Game.Achievement('Say cheese!',loc("Purchase every <b>Mooncandy</b> upgrade, and unshackle the tier.")+'<q>That\'s one small step for cookies. One giant leap for elderkind.</q>',[0,9,icon]);
		new Game.Achievement('Astrofudge lounge',loc("Purchase every <b>Astrofudge</b> upgrade, and unshackle the tier.")+'<q>I\'d say there\'s potential.</q>',[0,10,icon]);
		new Game.Achievement('We scream for Alabascream!',loc("Purchase every <b>Alabascream</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,11,icon]);
		new Game.Achievement('Taste the rainbow',loc("Purchase every <b>Iridyum</b> upgrade, and unshackle the tier.")+'<q>Without the titanium dioxide!</q>',[0,12,icon]);
		new Game.Achievement('Hyperglycemia',loc("Purchase every <b>Glucosmium</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,13,icon]);
		//new Game.Achievement('Unshackleable',loc("Unshackle every building and tier.")+'<q>Ain\'t nothing gonna break my stride.</q>',[0,0,icon]);
		for(var i in Game.AchievementsById) { 
			if(i >= num) {
				var me = Game.AchievementsById[i];
				me.ddesc = me.desc;
				me.order = order;
				xcheevos.TieredAchievements[i-num]=me;
			}
			last = i;
		}

		xcheevos.Level12Achievements = {};
		new Game.Achievement('placeholder13',loc("Reach level <b>12</b> cursors.")+'<q>Put your click away Waltuh.</q>',[1,0,icon]);
		new Game.Achievement('placeholder14',loc("Reach level <b>12</b> grandmas.")+'<q>placeholder</q>',[1,8,icon]);
		new Game.Achievement('placeholder15',loc("Reach level <b>12</b> farms.")+'<q>placeholder</q>',[2,2,icon]);
		new Game.Achievement('Just a little bit mine',loc("Reach level <b>12</b> mines.")+'<q>...well, better than the alternative.</q>',[1,1,icon]);
		new Game.Achievement('placeholder17',loc("Reach level <b>12</b> factories.")+'<q>placeholder</q>',[1,9,icon]);
		new Game.Achievement('placeholder18',loc("Reach level <b>12</b> banks.")+'<q>placeholder</q>',[1,5,icon]);
		new Game.Achievement('placeholder19',loc("Reach level <b>12</b> temples.")+'<q>placeholder</q>',[1,13,icon]);
		new Game.Achievement('placeholder20',loc("Reach level <b>12</b> wizard towers.")+'<q>placeholder</q>',[2,7,icon]);
		new Game.Achievement('placeholder21',loc("Reach level <b>12</b> shipments.")+'<q>placeholder</q>',[2,3,icon]);
		new Game.Achievement('placeholder22',loc("Reach level <b>12</b> alchemy labs.")+'<q>placeholder</q>',[1,2,icon]);
		new Game.Achievement('placeholder23',loc("Reach level <b>12</b> portals.")+'<q>placeholder</q>',[1,10,icon]);
		new Game.Achievement('placeholder24',loc("Reach level <b>12</b> time machines.")+'<q>placeholder</q>',[2,4,icon]);
		new Game.Achievement('placeholder25',loc("Reach level <b>12</b> antimatter condensers.")+'<q>placeholder</q>',[1,12,icon]);
		new Game.Achievement('placeholder26',loc("Reach level <b>12</b> prisms.")+'<q>placeholder</q>',[2,6,icon]);
		new Game.Achievement('placeholder27',loc("Reach level <b>12</b> chancemakers.")+'<q>placeholder</q>',[2,0,icon]);
		new Game.Achievement('placeholder28',loc("Reach level <b>12</b> fractal engines.")+'<q>placeholder</q>',[2,8,icon]);
		new Game.Achievement('placeholder29',loc("Reach level <b>12</b> javascript consoles.")+'<q>placeholder</q>',[1,7,icon]);
		new Game.Achievement('placeholder30',loc("Reach level <b>12</b> idleverses.")+'<q>placeholder</q>',[2,1,icon]);
		new Game.Achievement('placeholder31',loc("Reach level <b>12</b> cortex bakers.")+'<q>placeholder</q>',[2,9,icon]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				if(i > last) {
					me.ddesc = me.desc;
					me.order = order+100;
					xcheevos.Level12Achievements[i-last]=me;
				}
			}
			last = i;
		}

		xcheevos.Level14Achievements = {};
		new Game.Achievement('placeholder32',loc("Reach level <b>14</b> cursors.")+'<q>placeholder</q>',[3,0,icon]);
		new Game.Achievement('placeholder33',loc("Reach level <b>14</b> grandmas.")+'<q>placeholder</q>',[3,8,icon]);
		new Game.Achievement('placeholder34',loc("Reach level <b>14</b> farms.")+'<q>placeholder</q>',[4,2,icon]);
		new Game.Achievement('placeholder35',loc("Reach level <b>14</b> mines.")+'<q>placeholder</q>',[3,1,icon]);
		new Game.Achievement('placeholder36',loc("Reach level <b>14</b> factories.")+'<q>placeholder</q>',[3,9,icon]);
		new Game.Achievement('placeholder37',loc("Reach level <b>14</b> banks.")+'<q>placeholder</q>',[3,5,icon]);
		new Game.Achievement('placeholder38',loc("Reach level <b>14</b> temples.")+'<q>placeholder</q>',[3,13,icon]);
		new Game.Achievement('placeholder39',loc("Reach level <b>14</b> wizard towers.")+'<q>placeholder</q>',[4,7,icon]);
		new Game.Achievement('placeholder40',loc("Reach level <b>14</b> shipments.")+'<q>placeholder</q>',[4,3,icon]);
		new Game.Achievement('placeholder41',loc("Reach level <b>14</b> alchemy labs.")+'<q>placeholder</q>',[3,2,icon]);
		new Game.Achievement('placeholder42',loc("Reach level <b>14</b> portals.")+'<q>placeholder</q>',[3,10,icon]);
		new Game.Achievement('placeholder43',loc("Reach level <b>14</b> time machines.")+'<q>placeholder</q>',[4,4,icon]);
		new Game.Achievement('placeholder44',loc("Reach level <b>14</b> antimatter condensers.")+'<q>placeholder</q>',[3,12,icon]);
		new Game.Achievement('placeholder45',loc("Reach level <b>14</b> prisms.")+'<q>placeholder</q>',[4,6,icon]);
		new Game.Achievement('placeholder46',loc("Reach level <b>14</b> chancemakers.")+'<q>placeholder</q>',[4,0,icon]);
		new Game.Achievement('placeholder47',loc("Reach level <b>14</b> fractal engines.")+'<q>placeholder</q>',[4,8,icon]);
		new Game.Achievement('placeholder48',loc("Reach level <b>14</b> javascript consoles.")+'<q>placeholder</q>',[3,7,icon]);
		new Game.Achievement('placeholder49',loc("Reach level <b>14</b> idleverses.")+'<q>placeholder</q>',[4,1,icon]);
		new Game.Achievement('placeholder50',loc("Reach level <b>14</b> cortex bakers.")+'<q>placeholder</q>',[4,9,icon]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				if(i > last) {
					me.ddesc = me.desc;
					me.order = order+100;
					xcheevos.Level14Achievements[i-last]=me;
				}
			}
			last = i;
		}
		
		xcheevos.WrinklerAchievements = {};
		new Game.Achievement('Goopwiper',loc("Burst <b>500</b> wrinklers.")+'<q></q>',[6,0,icon]);
		new Game.Achievement('Humidsqueezer',loc("Burst <b>1000</b> wrinklers.")+'<q></q>',[6,1,icon]);
		new Game.Achievement('Gunkripper',loc("Burst <b>2000</b> wrinklers.")+'<q></q>',[6,2,icon]);
		new Game.Achievement('Fleshsquelcher',loc("Burst <b>5000</b> wrinklers.")+'<q></q>',[6,3,icon]);
		new Game.Achievement('Wrinkledominus',loc("Burst <b>10,000</b> wrinklers.")+'<q>Is this not genocide?</q>',[6,4,icon]);
		new Game.Achievement('Who\'s a good boy?',loc("Click a wrinkler <b>15 times</b> without bursting it.")+'<q>The grandmas remind you that the Wrinkler will never threaten to bite you and, in fact, cannot speak.</q>',[6,6,icon]);
		new Game.Achievement('In the wrink of an eye',loc("Pop a wrinkler before it reaches the big cookie.")+'<q>It didn\'t even do anything!</q>',[6,8,icon]);
		new Game.Achievement('Spirobranchus giganteus',loc("Pop a wrinkler with a Santa hat.")+'<q>Also known as the Christmas worm!</q>',[6,7,icon]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				if(i > last) {
					me.ddesc = me.desc;
					me.order = order+100;
					xcheevos.WrinklerAchievements[i-last]=me;
				}
			}
			last = i;
		}		
		
		new Game.Achievement('This is a test',loc("Name your bakery <b>Spacey</b>.")+'<q>This was the first achievement added to the mod! Originally, it had the name "TestCheevo" and was used for testing purposes!</q>',[19,8]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				me.ddesc = me.desc;
				me.order = order+100;
				xcheevos.Achievements[i-num]=me;
				//me.pool = 'modded';
			//3691: shadow'
			}
		}
		
		for(let i = 1; i <= 14; i++) { xcheevos.AddTieredCheevo(i); }
		xcheevos.AddNormalCheevoWinCondition();
		xcheevos.inRect = function(x,y,rect) { 
			var dx = x+Math.sin(-rect.r)*(-(rect.h/2-rect.o)),dy=y+Math.cos(-rect.r)*(-(rect.h/2-rect.o));
			var h1 = Math.sqrt(dx*dx + dy*dy);
			var currA = Math.atan2(dy,dx);
			var newA = currA - rect.r;
			var x2 = Math.cos(newA) * h1;
			var y2 = Math.sin(newA) * h1;
			if (x2 > -0.5 * rect.w && x2 < 0.5 * rect.w && y2 > -0.5 * rect.h && y2 < 0.5 * rect.h) return true;
			return false;
		}
		xcheevos.ReplaceInFunction('Game.UpdateWrinklers', 'if (Game.T%5==0 && Game.CanClick) {if (Game.LeftBackground && Game.mouseX<Game.LeftBackground.canvas.width && inRect(Game.mouseX-me.x,Game.mouseY-me.y,rect)) me.selected=1; else me.selected=0;}', 1, `
			if (Game.T%5==0 && Game.CanClick) {if (Game.LeftBackground && Game.mouseX<Game.LeftBackground.canvas.width && xcheevos.inRect(Game.mouseX-me.x,Game.mouseY-me.y,rect)) me.selected=1; else me.selected=0;}`);

		xcheevos.InjectInFunction('Game.UpdateWrinklers', 'Game.wrinklersPopped++;', "if (me.phase<2){ Game.Win('In the wrink of an eye');}");
		xcheevos.InjectInFunction('Game.UpdateWrinklers', 'me.hp=3;', "if (Game.season=='christmas'){ Game.Win('Spirobranchus giganteus');}");
		xcheevos.InjectInFunction('Game.bakeryNameRefresh', "if (name=='orteil') Game.Win('God complex');", "if (name=='spacey') Game.Win('This is a test');");
	}
	xcheevos.AddTieredCheevo = function(t) {
		Game.registerHook('check',function(){
			var count = 0;
			for(var i in Game.UpgradesById) {
				if(Game.UpgradesById[i].tier==t && Game.UpgradesById[i].bought==1) { count++; }
			}
			if(count >= Game.Tiers[t].upgrades.length && Game.Upgrades[Game.Tiers[t].unshackleUpgrade].bought==1) { Game.Win(xcheevos.TieredAchievements[t-1].name); } //Check for if all upgrades are bought of that flavor along with checking for if it has been unshackled
			for(var i in Game.ObjectsById) {
				if(Game.ObjectsById[i].level >= 12) { Game.Win(xcheevos.Level12Achievements[i]); }
				console.log(xcheevos.Level12Achievements[i]);
			}
			for(var i in Game.ObjectsById) {
				if(Game.ObjectsById[i].level >= 14) { Game.Win(xcheevos.Level14Achievements[i]); }
			}
			if (Game.wrinklersPopped>=500) Game.Win('Goopwiper');
			if (Game.wrinklersPopped>=1000) Game.Win('Humidsqueezer');
			if (Game.wrinklersPopped>=2000) Game.Win('Gunkripper');
			if (Game.wrinklersPopped>=5000) Game.Win('Fleshsquelcher');
			if (Game.wrinklersPopped>=10000) Game.Win('Wrinkledominus');
		});
	}
	xcheevos.AddNormalCheevoWinCondition = function() {
		for(var i in xcheevos.Achievements) {
			if(xcheevos.Achievements[i].name == 'One down...' && !xcheevos.Achievements[i].won) { Game.Win('One down...'); }
		}
		
	}
	xcheevos.save = function() {
		for(var i in xcheevos.Achievements) {
			xcheevos.data[i]=(xcheevos.Achievements[i].won);
		}
		return JSON.stringify(xcheevos.data);
	}
	xcheevos.load = function(str) {
		xcheevos.data = JSON.parse(str);
		for(var i in xcheevos.Achievements) {
			xcheevos.Achievements[i].won=xcheevos.data[i];
		}
	}

	xcheevos.InjectInFunction = function(functionName, target, replacement, preEvalScript) {
		// Custom injection used for adding code into functions //
		
		if(preEvalScript) eval(preEvalScript);
		target = target.toString();
		var temp = eval(functionName + ".toString()");
		temp = temp.replace(target, target + "\n" + replacement );
		eval(functionName + "=" + temp);
	}
	xcheevos.SpliceAround = function(functionName, row1, row2, code1, code2, preEvalScript) {
		// Custom injection used for adding if's, else's, for's, and more //

		if(preEvalScript) eval(preEvalScript);
		var r1 = Math.floor(row1);
		var r2 = Math.floor(row2);
		if(r1 == 0 || r2 == 0) throw new Error("rows 1 and 2 can\'t equal 0");
		
		var temp = eval(functionName + ".toString()").split("\n");

		temp.splice(r1, 0, code1);
		temp.splice(r2 + code1.split("\n").length, 0, code2);

		eval(functionName + "=" + temp.join("\n"));

	}
	xcheevos.ReplaceInFunction = function(functionName, targetName, type, replacement, preEvalScript) {
		// Custom injection used for adding code into functions //

		if(preEvalScript) eval(preEvalScript);
		targetName = targetName.toString();
		var temp = eval(functionName + ".toString()");
		temp = temp.replace(targetName, replacement);
		eval(functionName + "=" + temp);

	}
	xcheevos.NewFunction = function(functionName, newCode) {
		// Custom injection used for completely rewriting functions //
		
		eval(functionName + "=" + newCode);
			
	}

	// Fun Stuff:
	xcheevos.SpawnWrinklers = function(x) { //Credit to Lookas
		let wrinklersWanted = x;
		Game.getWrinklersMax=()=>{return wrinklersWanted}
		for(var i=Game.wrinklers.length;i<Game.getWrinklersMax();i++)
		{Game.wrinklers.push({id:parseInt(i),close:0,sucked:0,phase:1,x:100,y:0,r:0,hurt:0,hp:Game.wrinklerHP,selected:0,type:0});}
		Game.Win('Cheated cookies taste awful');
	}

	Game.registerMod(xcheevos.name, xcheevos);
}
xcheevos.launch();
