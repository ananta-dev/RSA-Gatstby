import React from 'react'
import Layout from '../components/layout'

export default ({pageContext}) => {
    return (
        <Layout>
            <h1>this pokemon is {pageContext.name}</h1>
        </Layout>
    )
}