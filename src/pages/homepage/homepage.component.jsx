import React from 'react'

import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <MenuItem
        title='HATS'
      />
      <MenuItem
        title='SHOES'
      />
      <MenuItem
        title='JACKETS'
      />
      <MenuItem
        title='SHIRTS'
      />
    </div>
  </div>
);

export default HomePage;