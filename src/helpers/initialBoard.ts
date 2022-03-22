import { v4 } from "uuid";
import { CellState } from "../Cell";

export const BOARD_SIZE = 50;
const CHANCE_TO_BE_ALIVE = 25;

export const generateInitialBoard = (DeadOrAliveCell: () => CellState) => {
  return [...Array(BOARD_SIZE).keys()].map(_ =>
    [...Array(BOARD_SIZE).keys()].map(_ => ({ key: v4(), value: DeadOrAliveCell()}))
  );
};

export const generateDeadOrAliveCell = () => {
    return Math.floor(Math.random() * 100) > CHANCE_TO_BE_ALIVE ? CellState.DEAD : CellState.ALIVE;
}
