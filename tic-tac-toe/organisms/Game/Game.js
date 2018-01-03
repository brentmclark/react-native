import React, { Component } from 'react';
import Board from '../../molecules/Board'
import styled from 'styled-components/native'
import { Alert, Text, Button } from 'react-native'
import { getWinner } from './utils'


const Wrapper = styled.View`
    height: 100%;
    width: 100%;
    background-color: #000000;
    padding: 24px 8px 0px;
`

const Frame = styled.View`
    border: 1px solid #ffffff;
    padding: 24px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`

const Title = styled.Text`
    color: #ffffff;
    font-size: 28px;
    text-align: center;
`

const HUDText = styled.Text`
    text-align: center;
    color: #ffffff;
`

const initialState = {
    squares:[
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
        { selected: false, by: null },
    ],
    currentPlayer:1,
    turnCount: 1,
    winner: null,
}

class Game extends Component {
    constructor(props) {
        super(props) 

        this.state = Object.assign({}, initialState)

        this.handlePress = this.handlePress.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }

    handlePress(index) {
        const { squares, currentPlayer, turnCount, winner } = this.state

        if (winner !== null || turnCount > 9) {
            return
        }
        // Update square selection
        const newSquares = squares.slice(0)
        newSquares[index].selected = true
        newSquares[index].by = currentPlayer === 1 ? 'X' : 'O'

        //change player
        const newCurrentPlayer = turnCount % 2 === 1 ? 2 : 1
        const newTurnCount = turnCount + 1
        const updatedState = {
            squares: newSquares,
            currentPlayer: newCurrentPlayer,
            turnCount: newTurnCount
        }

        const winningUser = getWinner(squares)

        if (winningUser !== undefined) {
            console.log(winningUser)
            updatedState.winner = winningUser
        }

        this.setState(updatedState)
    }

    resetGame() {
        const newSquares = initialState.squares.slice(0)
        const newState = Object.assign({}, initialState)
        newState.squares = newSquares
        // LLO: Resetting squares is not working, everything else is.
        this.setState(newState)
    }
  render() {
    const {currentPlayer, turnCount} = this.state
    const turnCountDisplay = turnCount > 9 ? 9 : turnCount
    return (
        <Wrapper>
            <Frame>
                <Title>Tic Tac Toe</Title>
                <Board
                    squares={this.state.squares}
                    handlePress={this.handlePress}
                />
                <HUDText>Current Player: {currentPlayer}</HUDText>
                <HUDText>Turn: {turnCountDisplay}</HUDText>
                <Button
                    onPress={this.resetGame}
                    title="New Game"
                />
            </Frame>
        </Wrapper>
    );
  }
}

export default Game