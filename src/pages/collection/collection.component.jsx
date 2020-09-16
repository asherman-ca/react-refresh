import React from 'react'
import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ match }) => {
console.log(match, 'matchCat')
return (
  <div className="category">
    <h2>CATEGORY PAGE</h2>
  </div>
)
}

export default CollectionPage