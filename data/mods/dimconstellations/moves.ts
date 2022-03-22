export const Moves: {[k: string]: ModdedMoveData} = {
	toxicterrain: {
		num: 580,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toxic Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'toxicterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			
			onStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Toxic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Toxic Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 3,
			onResidual() {
				this.eachEvent('Terrain');
			},
			onTerrainPriority: 1,
			onTerrain(pokemon) {
			
				if (pokemon.getItem().isBerry) {
					pokemon.takeItem();
					this.add('-enditem', pokemon, pokemon.getItem().name, 'by toxic terrain');
				}
	
				if (pokemon.isGrounded() && !pokemon.hasType('Poison') && !pokemon.hasType('Steel')) {
					pokemon.trySetStatus('psn', pokemon);
				}
			},
			onEnd() {
				if (!this.effectData.duration) this.eachEvent('Terrain');
				this.add('-fieldend', 'move: Toxic Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	}
}