import React, { Component } from 'react';
import styled from 'styled-components/native'
import Square from '../atoms/Square'

const Wrapper = styled.View`
    height: 300px;
    width: 300px;
    border: 1px solid #ffffff;
    display: flex;
    flex-flow: row wrap;
`

const Player = styled.Text`
    color: #ffffff;
`

class Board extends Component {
    render() {
        const { squares, handlePress } = this.props

        return (
            <Wrapper>
                <Square selected={squares[0].selected} selectedBy={squares[0].by} handlePress={() => handlePress(0)} />
                <Square selected={squares[1].selected} selectedBy={squares[1].by} handlePress={() => handlePress(1)} />
                <Square selected={squares[2].selected} selectedBy={squares[2].by} handlePress={() => handlePress(2)} />
                <Square selected={squares[3].selected} selectedBy={squares[3].by} handlePress={() => handlePress(3)} />
                <Square selected={squares[4].selected} selectedBy={squares[4].by} handlePress={() => handlePress(4)} />
                <Square selected={squares[5].selected} selectedBy={squares[5].by} handlePress={() => handlePress(5)} />
                <Square selected={squares[6].selected} selectedBy={squares[6].by} handlePress={() => handlePress(6)} />
                <Square selected={squares[7].selected} selectedBy={squares[7].by} handlePress={() => handlePress(7)} />
                <Square selected={squares[8].selected} selectedBy={squares[8].by} handlePress={() => handlePress(8)} />
            </Wrapper>
        );
    }
}

export default Board