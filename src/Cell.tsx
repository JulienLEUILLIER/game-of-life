export enum CellState {
    ALIVE,
    DEAD
}

const Cell = ({ state }: { state: CellState }) => {
    return (
        <div style={{
            background: state === CellState.ALIVE ? '#fff': '#333',
            width: '15px',
            height: '15px',
            border: '1px solid #555'
        }}>
        </div>
    )
}

export default Cell