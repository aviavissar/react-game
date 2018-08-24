import './Game.css';
import React, { Component } from "react";
import Board from "../Board/Board"

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                   <Board />
                </div>
                <div className="game-info">
                    <div>{/* Status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>            
        );
    }
}

export default Game;