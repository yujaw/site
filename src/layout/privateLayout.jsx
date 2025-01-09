import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const PrivateLayout = () => {
    return (
        <Fragment>
            <Navigation />
            <Outlet />
        </Fragment>
    )
}

export default PrivateLayout