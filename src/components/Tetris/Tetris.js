import Plateau from "./Plateau";
import Shape from "./Shape";

const TetrisShapes = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

const getRandomShapeType = () => {
  const randomIndex = Math.floor(Math.random() * TetrisShapes.length);
  return TetrisShapes[randomIndex];
};
function Row() {
  let rows = [];
  for (let i = 0; i < 20; i++) {
    rows.push(<div key={i} className="board-rowTetris">{SquareRow()}</div>);
  }

  return rows;
}

function SquareRow() {
  let square = [];
  for (let i = 0; i < 10; i++) {
    square.push(<Plateau key={i}  />);
  }
  return square;
}

export default function Tetris() {
    const randomShapeType = getRandomShapeType();
  return <>
  <h1>Tetris</h1>

  <div className="ContainerRow">{Row()}
  
        
      
  </div>
  <Shape type={randomShapeType}  />
 
  </>;
}
