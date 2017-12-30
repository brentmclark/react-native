import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import styled from 'styled-components/native'
import Square from '../atoms/Square'

const Wrapper = styled.View`
    height: 300px;
    width: 300px;
    border: 1px solid #ffffff;
`

const Player = styled.Text`
    color: #ffffff;
`

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            xs:[],
            os:[],
            currentPlayer:1
        }
    }
  render() {
    return (
        <Wrapper>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </Wrapper>
    );
  }
}

export default Board