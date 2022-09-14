if(xcheevos === undefined) var xcheevos = {};
xcheevos.name = 'Cheevo300';
xcheevos.version = '1.010';
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
		xcheevos.TieredAchievements = {};
		var num = Game.AchievementsN;
		new Game.Achievement('placeholder1',loc("Purchase every <b>Plain</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,0]);
		new Game.Achievement('placeholder2',loc("Purchase every <b>Berrylium</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,1]);
		new Game.Achievement('Baking bad',loc("Purchase every <b>Blueberrylium</b> upgrade, and unshackle the tier.")+'<q>Clear your social calendar. We have to bake.</q>',[10,2]);
		new Game.Achievement('placeholder3',loc("Purchase every <b>Chalcedhoney</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,13]);
		new Game.Achievement('Not margarine',loc("Purchase every <b>Buttergold</b> upgrade, and unshackle the tier.")+'<q>I can\'t believe it isn\'t Margarine!</q>',[10,14]);
		new Game.Achievement('placeholder4',loc("Purchase every <b>Sugarmuck</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,15]);
		new Game.Achievement('placeholder5',loc("Purchase every <b>Jetmint</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,16]);
		new Game.Achievement('placeholder6',loc("Purchase every <b>Cherrysilver</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,17]);
		new Game.Achievement('placeholder7',loc("Purchase every <b>Hazelrald</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,18]);
		new Game.Achievement('placeholder8',loc("Purchase every <b>Mooncandy</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,19]);
		new Game.Achievement('Astrofudge lounge',loc("Purchase every <b>Astrofudge</b> upgrade, and unshackle the tier.")+'<q>Somebody</q>',[10,28]);
		new Game.Achievement('placeholder10',loc("Purchase every <b>Alabascream</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,30]);
		new Game.Achievement('placeholder11',loc("Purchase every <b>Iridyum</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,31]);
		new Game.Achievement('placeholder12',loc("Purchase every <b>Glucosmium</b> upgrade, and unshackle the tier.")+'<q>placeholder</q>',[10,34]);
		new Game.Achievement('TestCheevo',loc("Test")+'<q>placeholder</q>',[19,8]);
		for(var i in Game.AchievementsById) {
			if(i >= num) {
				var me = Game.AchievementsById[i];
				me.ddesc = me.desc;
				me.order = 600000
				xcheevos.Achievements[i-num]=me;
				if(i - num < 14) { xcheevos.TieredAchievements[i-num]=me; }
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