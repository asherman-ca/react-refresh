import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview.styles.scss'
import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      Object.values(collections).map(({id, ...otherCollectionsProps}) => (
        <CollectionPreview
          key={id}
          {...otherCollectionsProps}
        />
      ))
    }
  </div>
)

const bindStoreToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(bindStoreToProps)(CollectionsOverview);