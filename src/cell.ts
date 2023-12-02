export interface Cell {
	readonly x: number;
	readonly y: number;

	index: number;
	inQueue: boolean;
	options: number[];
}

export function isCollapsed(cell: Cell) {
	return cell.index !== undefined;
}

export function createCell(x: number, y: number): Cell {
	return {
		x,
		y,
		index: undefined!,
		inQueue: false,
		options: undefined!,
	};
}