import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({collections}) => (
  <div className='shop-page'>
    {
      collections.map(({id, title, items}) => (
        <CollectionPreview 
          key={id}
          title={title}
          items={items}
        />
      ))
    }
  </div>
)

const bindStoreToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(bindStoreToProps)(ShopPage);