require('dotenv').load();

import axios from 'axios'
import React, { Component } from 'react'

const graphql = `http://localhost:${process.env.PORT || 4000}/graphql`

export default {
  getSiteProps: () => ({
    title: 'react-static & cf-graphql'
  }),

  getRoutes: async () => {
    let paths = []

    const { data: features } = await axios.post(graphql, {
      query: `
        {
          featurePagesNews {
            path
            titleTag
            metaDescription
            pageBlocks {
              __typename
            }
          }
        }
      `
    })

    features.data.featurePagesNews.forEach(feature => {
      paths.push({
        path: `features${feature.path}`,
        component: 'src/containers/Feature',
        getProps: _ => ({
          feature
        }),
      })
    })

    return paths
  },

  Html: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children } = this.props
      return (
        <Html lang="en-US">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/app.css" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
