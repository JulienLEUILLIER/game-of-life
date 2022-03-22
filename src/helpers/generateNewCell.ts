import { BoardType } from "../Board";
import { CellState } from "../Cell";
import { Coordinates, getNeighbours } from "./getNeighbours";

export const generateNewCell = (
  board: BoardType,
  value: CellState,
  { x, y }: Coordinates
) => {
  const aliveCounter = getNeighbours(board, { x, y }).reduce(
    (count, cell) => (cell?.value === CellState.ALIVE ? count + 1 : count),
    0
  );

  if (value === CellState.DEAD && aliveCounter === 3) return CellState.ALIVE;
  if (value === CellState.ALIVE && aliveCounter < 2) return CellState.DEAD;
  if (value === CellState.ALIVE && aliveCounter > 3) return CellState.DEAD;
  if (value === CellState.ALIVE && (aliveCounter === 2 || aliveCounter === 3)) return CellState.ALIVE;

  return CellState.DEAD;
};
