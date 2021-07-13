import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import '../../../assets/css/global.scss'

import Layout from '../../layouts/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import ProjectList from '../../components/ProjectList/ProjectList';

const Main = () => {


  return (
    <Layout>
      <div className="main">

        <Banner />

      </div>
    </Layout>
  )
}


export default Main
