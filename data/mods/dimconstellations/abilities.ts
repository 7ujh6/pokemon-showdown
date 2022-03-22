export const Abilities: {[abilityid: string]: AbilityData} = {
	shrapnel: {
		onHit(target, source, move) {
			if (move.flags['bullet']) {
				const targetSide = source.side.foe;
				targetSide.sideConditions.spikes = true;
			}
		}
	}
}

// spikes: {
// 	num: 191,
// 	accuracy: true,
// 	basePower: 0,
// 	category: "Status",
// 	name: "Spikes",
// 	pp: 20,
// 	priority: 0,
// 	flags: {reflectable: 1, nonsky: 1},
// 	sideCondition: 'spikes',
// 	condition: {
// 		// this is a side condition
// 		onStart(side) {
// 			this.add('-sidestart', side, 'Spikes');
// 			this.effectData.layers = 1;
// 		},
// 		onRestart(side) {
// 			if (this.effectData.layers >= 3) return false;
// 			this.add('-sidestart', side, 'Spikes');
// 			this.effectData.layers++;
// 		},
// 		onSwitchIn(pokemon) {
// 			if (!pokemon.isGrounded()) return;
// 			if (pokemon.hasItem('heavydutyboots')) return;
// 			const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
// 			this.damage(damageAmounts[this.effectData.layers] * pokemon.maxhp / 24);
// 		},
// 	},
// 	secondary: null,
// 	target: "foeSide",
// 	type: "Ground",
// 	zMove: {boost: {def: 1}},
// 	contestType: "Clever",
// },

// gmaxsteelsurge: {
// 	num: 1000,
// 	accuracy: true,
// 	basePower: 10,
// 	category: "Physical",
// 	isNonstandard: "Gigantamax",
// 	name: "G-Max Steelsurge",
// 	pp: 5,
// 	priority: 0,
// 	flags: {},
// 	isMax: "Copperajah",
// 	self: {
// 		onHit(source) {
// 			for (const side of source.side.foeSidesWithConditions()) {
// 				side.addSideCondition('gmaxsteelsurge');
// 			}
// 		},
// 	},
// 	condition: {
// 		onStart(side) {
// 			this.add('-sidestart', side, 'move: G-Max Steelsurge');
// 		},
// 		onSwitchIn(pokemon) {
// 			if (pokemon.hasItem('heavydutyboots')) return;
// 			// Ice Face and Disguise correctly get typed damage from Stealth Rock
// 			// because Stealth Rock bypasses Substitute.
// 			// They don't get typed damage from Steelsurge because Steelsurge doesn't,
// 			// so we're going to test the damage of a Steel-type Stealth Rock instead.
// 			const steelHazard = this.dex.getActiveMove('Stealth Rock');
// 			steelHazard.type = 'Steel';
// 			const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
// 			this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
// 		},
// 	},
// 	secondary: null,
// 	target: "adjacentFoe",
// 	type: "Steel",
// 	contestType: "Cool",
// },