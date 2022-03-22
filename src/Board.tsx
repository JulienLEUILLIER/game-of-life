import Cell, { CellState } from "./Cell"

export type BoardType = Array<Array<{ key: string, value: CellState }>>

const Board = ({ board }: { board: BoardType }) => {
  return (
    <>
      {board.map((row, index) => 
        <div key={index} style={{ display: 'flex' }}>
          {row.map(cell => <Cell state={cell.value} key={cell.key} />)}
        </div>
      )}
    </>
  )
}

export default Board