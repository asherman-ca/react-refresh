import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview.styles.scss'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({id, ...otherCollectionsProps}) => (
        <CollectionPreview
          key={id}
          {...otherCollectionsProps}
        />
      ))
    }
  </div>
)

const bindStoreToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(bindStoreToProps)(CollectionsOverview);