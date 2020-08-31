import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Header = styled.header`
    background-color: #eee;
    padding: 1rem;
`

const Main = styled.main`
    flex: 1;
    padding: 1rem;
`

const Footer = styled.footer`
    background-color: #eee;
    padding: 1rem;
`

export const DefaultLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header>
                header
            </Header>
            <Main>
                { children }
            </Main>
            <Footer>
                &copy; { new Date().getFullYear() }
            </Footer>
        </Wrapper>
    )
}
