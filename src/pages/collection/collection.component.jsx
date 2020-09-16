import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ match, collection }) => {
console.log(match, 'matchCat')
console.log(collection)
const { title, items } = collection
return (
  <div className="collection-page">
    <div className="title">{title}</div>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
)
}

const bindStoreToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(bindStoreToProps)(CollectionPage)