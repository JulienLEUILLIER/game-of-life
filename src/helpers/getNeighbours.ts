import { BoardType } from "../Board";
import { BOARD_SIZE } from "./initialBoard";

export type Coordinates = {
  x: number;
  y: number;
};

export const getNeighbours = (board: BoardType, { x, y }: Coordinates) => {
  return [
    getCellCoordinates(board, { x: x - 1, y: y - 1 }),
    getCellCoordinates(board, { x: x - 1, y: y }),
    getCellCoordinates(board, { x: x - 1, y: y + 1 }),

    getCellCoordinates(board, { x: x, y: y - 1 }),
    getCellCoordinates(board, { x: x, y: y + 1 }),

    getCellCoordinates(board, { x: x + 1, y: y - 1 }),
    getCellCoordinates(board, { x: x + 1, y: y }),
    getCellCoordinates(board, { x: x + 1, y: y + 1 }),
  ].filter(cell => cell !== null);
};

const getCellCoordinates = (board: BoardType, { x, y }: Coordinates) => {
  if (determineCellInexistence(x) || determineCellInexistence(y)) return null;
  return board[x][y];
};

const determineCellInexistence = (coordinate: number) => {
  return coordinate >= BOARD_SIZE || coordinate < 0;
};
