import React, { Fragment } from 'react'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Layout