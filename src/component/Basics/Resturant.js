import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const handleClick = (category) => {
        const updatedList = Menu.filter((menu) => {
            return menu.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => handleClick("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => handleClick("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => handleClick("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => handleClick("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
                </div>
            </nav>
            <MenuCard menuData={menuData} key={menuData.id} />
        </div>
    );
};

export default Resturant;