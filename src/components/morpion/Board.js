'use client';


import Square from './Square'
import Restart from './Restart';
import { useState } from 'react';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isFirst, setIsFirst] = useState(true);

    const winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function resetGame(){
        const nextSquares= Array(9).fill(null);
      
        setSquares(nextSquares);
        setIsFirst(true);
  
    }
    


    function handleClick(index) {
        
        const nextSquares = squares.slice();
        if (squares[index] || hasWinner(nextSquares)) return;
        nextSquares[index] = isFirst ? "X" : "0";
        setSquares(nextSquares);
        if(hasWinner(nextSquares)){
           
        }
        setIsFirst(!isFirst);
        

    }
    

    function hasWinner(squares) {
        for (let index = 0; index < winCondition.length; index++) {
            let [a,b,c] = winCondition[index];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
     
                return true;
            }



        }
        return false;
    }



    return (<>
        <div className="board-row">
            <Square value={squares[0]} squareClick={() => handleClick(0)} />
            <Square value={squares[1]} squareClick={() => handleClick(1)} />
            <Square value={squares[2]} squareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} squareClick={() => handleClick(3)} />
            <Square value={squares[4]} squareClick={() => handleClick(4)} />
            <Square value={squares[5]} squareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} squareClick={() => handleClick(6)} />
            <Square value={squares[7]} squareClick={() => handleClick(7)} />
            <Square value={squares[8]} squareClick={() => handleClick(8)} />
        </div>

        <div>
            <Restart reset={resetGame}/>
        </div>
    </>
    )
}