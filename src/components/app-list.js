import React, { useState } from 'react'
import styled from 'styled-components'
import { AppListItem } from './app-list-item'

const Wrapper = styled.div`
`

const Topper = styled.div`
    padding: 1rem;
    text-align: right;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const AppList = ({ apps }) => {
    const [query, setQuery] = useState('')

    const handleChangeQuery = event => setQuery(event.target.value)

    return (
        <Wrapper>
            <Topper>
                <input vaolue={ query } onChange={ handleChangeQuery } />
            </Topper>
            <Grid>
                { apps.filter(app => app.name.toLowerCase().includes(query.toLowerCase())).map(app => <AppListItem app={ app } />) }
            </Grid>
        </Wrapper>
    )
}
