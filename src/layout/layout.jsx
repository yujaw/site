import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <Fragment>
        <Outlet />
        <Footer />
    </Fragment>
  )
}

export default Layout