import React from 'react'
import { pageBlockNavigation as data } from './data.json'

export default _ => {
	console.log(data)
	return (
		<div className="Header">
			{data.name}
		</div>
	)
}

export const query = `
{
  pageBlockNavigation(id: "6z8ZQR2IMgQIUOGA40Osma") {
    name
    items {
      ... on ItemNavigationItem {
        title
        uri
        external
        nofollow
      }
      ... on ItemNavigationGroup {
        title
        uri
        items {
          ... on ItemNavigationItem {
            title
            uri
            external
            nofollow
          }
          ... on ItemNavigationGroup {
            title
            uri
            items {
              ... on ItemNavigationItem {
                title
                uri
                external
                nofollow
              }
            }
          }
        }
      }
    }
  }
}
`