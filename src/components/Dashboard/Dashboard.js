import React from 'react'
import Layout from './Layout'
// import BestSelling from '../Books/BestSelling'
import Stat from './Admin/Stat/Stat'
import auth from '../../hooks/auth'
export default function Dashboard() {
  const Authentication = auth();

  if (!Authentication.user) {
    window.location.href = "/signin";
  }
  return (
    <Layout>
        <Stat/>
    </Layout>
  )
}
