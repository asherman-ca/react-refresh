import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ match, collection }) => {
console.log(match, 'matchCat')
console.log(collection)
return (
  <div className="category">
    <h2>CATEGORY PAGE</h2>
  </div>
)
}

const bindStoreToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(bindStoreToProps)(CollectionPage)