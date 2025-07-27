import Square from "./Square"
import CalculaterWinner from "./CalculaterWinner";
import { useState } from "react"

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXiSNext] = useState(true);
    
    function onRestart() {
      setSquares(Array(9).fill(null));
    }
    const winner = CalculaterWinner(squares);
    let status;
    if(winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next player :" + (xIsNext ? "X" : "0");
    }

    function handlClick(i){
        let description;
        if (squares[i] || winner) {
            description = 'Go to game start';
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = 'X';
            description = 'Go to move #' + 'X';
        }
        else { 
            nextSquares[i] = '0';
            description = 'Go to move #' + '0';
        }
        setSquares(nextSquares);
        setXiSNext(!xIsNext);
           }


    return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => {handlClick(0)}} />
        <Square value={squares[1]} onSquareClick={() => {handlClick(1)}} />
        <Square value={squares[2]} onSquareClick={() => {handlClick(2)}} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => {handlClick(3)}} />
        <Square value={squares[4]} onSquareClick={() => {handlClick(4)}} />
        <Square value={squares[5]} onSquareClick={() => {handlClick(5)}} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => {handlClick(6)}} />
        <Square value={squares[7]} onSquareClick={() => {handlClick(7)}} />
        <Square value={squares[8]} onSquareClick={() => {handlClick(8)}} />
      </div>
      <button className="restart" onClick={onRestart}>RESTART</button>
   </>
    )
};