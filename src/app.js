import React from 'react'
import apps from './data/apps.js'
import { DefaultLayout } from './layout/default-layout'
import { AppList, AppListItem } from './components/app-list'

const App = () => {
    return (
        <DefaultLayout>
            <h1>App Store</h1>
            <hr />
            <br />
            <AppList apps={ apps } />
        </DefaultLayout>
    )
}

export default App
