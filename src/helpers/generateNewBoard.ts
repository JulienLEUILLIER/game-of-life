import { BoardType } from "../Board";
import { generateNewCell } from "./generateNewCell";

export const generateNewBoard = (board: BoardType) => {
  return board.map((row, x) => 
    row.map(({ key, value }, y) => ({
      key,
      value: generateNewCell(board, value, { x, y }),
    }))
  )
};