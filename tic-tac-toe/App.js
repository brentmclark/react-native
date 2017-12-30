import React, { Component } from 'react';
import Board from './organisms/Board'
import styled from 'styled-components/native'


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

class TicTacToeApp extends Component {
  render() {
    return (
        <Wrapper>
            <Frame>
                <Title>Tic Tac Toe</Title>
                <Board />
            </Frame>
        </Wrapper>
    );
  }
}

export default TicTacToeApp