import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
    border: 1px solid #dde;
    text-align: center;
`

const Graphic = styled.div(({ image }) => `
    height: 300px;
    background-image: url(${ image });
    background-size: cover;
    background-repeat: no-repeat;
`)

const Content = styled.div`
    padding: 1rem;
    border-top: 1px solid #dde;
    border-bottom: 1px solid #dde;
`

const AppName = styled.h3`
    margin: 0;
`

const Actions = styled.footer`
    padding: 1rem;
`

export const AppListItem = ({ app }) => {
    const { name, logo, description, launchUrl } = app
    const launch = () => {
        alert(`Launching app - ${ launchUrl }`)
    }

    return (
        <Wrapper>
            <Graphic image={ logo } />
            <Content>
                <AppName>{ name }</AppName>
                <p>{ description }</p>
            </Content>
            <Actions>
                <button onClick={ launch }>Launch</button>
            </Actions>
        </Wrapper>
    )
}
