import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);

    return (
        <div>
            <MenuCard menuData={menuData} />
        </div>
    );
};

export default Resturant;