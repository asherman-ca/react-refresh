import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    <CollectionsOverview />
  </div>
)

export default ShopPage