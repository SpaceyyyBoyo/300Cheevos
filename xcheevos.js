if(xcheevos === undefined) var xcheevos = {};
xcheevos.name = 'Cheevo300';
xcheevos.version = '1.021';
xcheevos.GameVersion = '2.048';

xcheevos.launch = function() {
	xcheevos.init = function() {
		if (Game.prefs.popups) Game.Popup('Cheevo300 v' + xcheevos.version + ' loaded!');
		else Game.Notify('Cheevo300','Cheevo300 v' + xcheevos.version + ' loaded!', [9, 0], 1,1);
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

		xcheevos.TieredAchievements = {};
		new Game.Achievement('placeholder1',loc("Purchase every <b>Plain</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,0,icon]);
		new Game.Achievement('Four doughtons',loc("Purchase every <b>Berrylium</b> upgrade, and unshackle the tier.")+'<q>More edible than Beryllium</q>',[0,1,icon]);
		new Game.Achievement('Baking bad',loc("Purchase every <b>Blueberrylium</b> upgrade, and unshackle the tier.")+'<q>Clear your social calendar. We have to bake.</q>',[0,2,icon]);
		new Game.Achievement('According to all known laws of aviation...',loc("Purchase every <b>Chalcedhoney</b> upgrade, and unshackle the tier.")+'<q>Yalike jazz?</q>',[0,3,icon]);
		new Game.Achievement('Butter?',loc("Purchase every <b>Buttergold</b> upgrade, and unshackle the tier.")+'<q>I can\'t believe it isn\'t Margarine!</q>',[0,4,icon]);
		new Game.Achievement('placeholder4',loc("Purchase every <b>Sugarmuck</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,5,icon]);
		new Game.Achievement('placeholder5',loc("Purchase every <b>Jetmint</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,6,icon]);
		new Game.Achievement('placeholder6',loc("Purchase every <b>Cherrysilver</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,7,icon]);
		new Game.Achievement('placeholder7',loc("Purchase every <b>Hazelrald</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,8,icon]);
		new Game.Achievement('placeholder8',loc("Purchase every <b>Mooncandy</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,9,icon]);
		new Game.Achievement('Astrofudge lounge',loc("Purchase every <b>Astrofudge</b> upgrade, and unshackle the tier.")+'<q>Somebody</q>',[0,10,icon]);
		new Game.Achievement('placeholder10',loc("Purchase every <b>Alabascream</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,11,icon]);
		new Game.Achievement('Taste the rainbow',loc("Purchase every <b>Iridyum</b> upgrade, and unshackle the tier.")+'<q>Without the titanium dioxide!</q>',[0,12,icon]);
		new Game.Achievement('placeholder12',loc("Purchase every <b>Glucosmium</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[0,13,icon]);
		for(var i in Game.AchievementsById) { 
			if(i >= num) {
				var me = Game.AchievementsById[i];
				me.ddesc = me.desc;
				me.order = order;
				xcheevos.TieredAchievements[i-num]=me;
			}
			last = i;
		}

		xcheevos.Level15Achievements = {};
		new Game.Achievement('placeholder13',loc("Reach level <b>15</b> cursors.")+'<q>placeholder</q>',[1,0,icon]);
		new Game.Achievement('placeholder14',loc("Reach level <b>15</b> grandmas.")+'<q>placeholder</q>',[1,1,icon]);
		new Game.Achievement('placeholder15',loc("Reach level <b>15</b> farms.")+'<q>placeholder</q>',[1,2,icon]);
		new Game.Achievement('placeholder16',loc("Reach level <b>15</b> mines.")+'<q>placeholder</q>',[1,3,icon]);
		new Game.Achievement('placeholder17',loc("Reach level <b>15</b> factories.")+'<q>placeholder</q>',[1,4,icon]);
		new Game.Achievement('placeholder18',loc("Reach level <b>15</b> banks.")+'<q>placeholder</q>',[1,5,icon]);
		new Game.Achievement('placeholder19',loc("Reach level <b>15</b> temples.")+'<q>placeholder</q>',[1,6,icon]);
		new Game.Achievement('placeholder20',loc("Reach level <b>15</b> wizard towers.")+'<q>placeholder</q>',[1,7,icon]);
		new Game.Achievement('placeholder21',loc("Reach level <b>15</b> shipments.")+'<q>placeholder</q>',[1,8,icon]);
		new Game.Achievement('placeholder22',loc("Reach level <b>15</b> alchemy labs.")+'<q>placeholder</q>',[1,9,icon]);
		new Game.Achievement('placeholder23',loc("Reach level <b>15</b> portals.")+'<q>placeholder</q>',[1,10,icon]);
		new Game.Achievement('placeholder24',loc("Reach level <b>15</b> time machines.")+'<q>placeholder</q>',[1,11,icon]);
		new Game.Achievement('placeholder25',loc("Reach level <b>15</b> antimatter condensers.")+'<q>placeholder</q>',[1,12,icon]);
		new Game.Achievement('placeholder26',loc("Reach level <b>15</b> prisms.")+'<q>placeholder</q>',[1,13,icon]);
		new Game.Achievement('placeholder27',loc("Reach level <b>15</b> chancemakers.")+'<q>placeholder</q>',[2,0,icon]);
		new Game.Achievement('placeholder28',loc("Reach level <b>15</b> fractal engines.")+'<q>placeholder</q>',[2,1,icon]);
		new Game.Achievement('placeholder29',loc("Reach level <b>15</b> javascript consoles.")+'<q>placeholder</q>',[2,2,icon]);
		new Game.Achievement('placeholder30',loc("Reach level <b>15</b> idleverses.")+'<q>placeholder</q>',[2,3,icon]);
		new Game.Achievement('placeholder31',loc("Reach level <b>15</b> cortex bakers.")+'<q>placeholder</q>',[2,4,icon]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				if(i > last) {
					me.ddesc = me.desc;
					me.order = order+100;
					xcheevos.Level15Achievements[i-last]=me;
				}
			}
		}
		
		new Game.Achievement('TestCheevo',loc("Test")+'<q>placeholder</q>',[19,8]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				me.ddesc = me.desc;
				xcheevos.Achievements[i-num]=me;
				//me.pool = 'modded';
			//3691: shadow'
			}
		}
		
		for(let i = 1; i <= 14; i++) { xcheevos.AddTieredCheevo(i); }

		xcheevos.InjectInFunction('Game.bakeryNameRefresh', 7, "if (name=='spacey') Game.Win('TestCheevo');");
	}
	xcheevos.AddTieredCheevo = function(t) {
		Game.registerHook('check',function(){
			var count = 0;
			for(var i in Game.UpgradesById) {
				if(Game.UpgradesById[i].tier==t && Game.UpgradesById[i].bought==1) { count++; }
			}
			if(count >= Game.Tiers[t].upgrades.length && Game.Upgrades[Game.Tiers[t].unshackleUpgrade].bought==1) { Game.Win(xcheevos.TieredAchievements[t-1].name); } //Check for if all upgrades are bought of that flavor along with checking for if it has been unshackled
			for(var i in Game.ObjectsById) {
				if(Game.ObjectsById[i].level >= 15) { Game.Win(xcheevos.Level15Achievements[i]); }
			}
		});
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

		var temp = eval(functionName + ".toString()").split("\n");
		temp.splice(target, 0, replacement);

		eval(functionName + "=" + temp.join("\n"));

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
	Game.registerMod(xcheevos.name, xcheevos);
}
xcheevos.launch();
