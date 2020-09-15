import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...sectionProps}) => (
        <MenuItem key={id} {...sectionProps} />
      ))
    }
  </div>
)

const bindStoreToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(bindStoreToProps)(Directory)