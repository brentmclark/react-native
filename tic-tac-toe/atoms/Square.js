import React from 'react'
import styled from 'styled-components/native'
import { TouchableWithoutFeedback } from 'react-native';

const Wrapper = styled.View`
    border: 1px solid #ffffff;
    width: 33.333333%;
    height: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    flex: 1;
    flex-basis: 33%;
`

const Symbol = styled.Text`
    font-size: 48px;
    color: #FFFFFF;
`

function Square(props) {
    const { selected, selectedBy, handlePress } = props
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Wrapper>
                {
                    selected &&
                    <Symbol>
                        {selectedBy}
                    </Symbol>
                }
            </Wrapper>
        </TouchableWithoutFeedback>
    )
}

export default Square