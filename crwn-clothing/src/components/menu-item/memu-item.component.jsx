import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title}) => (
    <div className='menu-item'>
        <div className='content'>
            <div className='title'>{ title }</div>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>
);

export default MenuItem;