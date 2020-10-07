import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection('collections')
    // whenever the collectionsRef updates or whenever this gets run for the 1st time...(this is an active listener?)
    collectionsRef.onSnapshot(async snapshot => {
      console.log(convertCollectionsSnapshotToMap(snapshot), 'snapshot')
    })
  }

  render() {
    const { match } = this.props;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

export default ShopPage