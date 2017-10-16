import React from 'react'
import { getRouteProps, Link } from 'react-static'
import getPageBlockComponent from '../utils/getPageBlockComponent'
//

export default getRouteProps(({ feature }) => (
  <div>
    <p>{feature.titleTag}</p>
    <p>{feature.metaDescription}</p>
    {feature.pageBlocks.map((block, i) => {
    	const Component = getPageBlockComponent(block.__typename);
    	return <Component block={block} key={i} />
    })}
  </div>
))
