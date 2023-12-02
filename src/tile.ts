import { Direction, directions, opposite } from "./direction";

/** An object for storing the tile data */
export class Tile<TileType, EdgeType> {
	/** The tiles that are allowed to be placed around this tile */
	public directions: Record<Direction, number[]> = {
		[Direction.Up]: [],
		[Direction.Right]: [],
		[Direction.Down]: [],
		[Direction.Left]: [],
	}

	constructor(
		/** The edges definitions of the tile */
		private edges: EdgeType[],
		/** The index of the tile from the order they were defined */
		public index: number, 
		/** The type of the tile, used for exceptions */
		private type: TileType, 
		private exceptions: Partial<Record<Direction, TileType[]>> = {}, 
		public weight = 10,
		/** The layer of the tile, used for multiple layers */
		public layer = 0
	) {}

	/** Analyzes the tile and determines which tiles can be placed next to it */
	analyze(tiles: Tile<TileType, EdgeType>[], compare: (a: EdgeType, b: EdgeType) => boolean) {
		for (const tile of tiles) {
			for (let direction of directions) {
				if (
					compare(
						this.edges[direction],
						tile.edges[opposite(direction)]
					) && !this.exceptions[direction]?.includes(tile.type)
				) {
					this.directions[direction].push(tile.index);
				}
			}
		}
	}
}
