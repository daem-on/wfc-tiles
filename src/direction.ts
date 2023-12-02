export enum Direction {
	Up, Right, Down, Left
}

export const opposite = (d: Direction) => (d + 2) % 4;
export const directions = [0, 1, 2, 3] as Direction[];