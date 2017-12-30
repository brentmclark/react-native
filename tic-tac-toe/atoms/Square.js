import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
    border: 1px solid #ffffff;
    width: 33.333333%;
    height: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
`

const Symbol = styled.Text`
    font-size: 48px;
`

function Square(props) {
    return (
        <Wrapper>
            <Symbol>
                X
            </Symbol>
        </Wrapper>
    )
}

export default Square