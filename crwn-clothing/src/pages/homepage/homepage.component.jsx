import React from 'react';
import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/memu-item.component'

const HomePage = () =>(
    <div className='homepage'>
        <div className='directory-menu'>
                    <MenuItem title='HATS'/>
            <MenuItem title='JACKT'/>
        </div>
    </div>
);

export default HomePage;