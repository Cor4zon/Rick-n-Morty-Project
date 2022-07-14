import React from 'react';

import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <ul className="characters__categories">
                <li className="character__type">All</li>
                <li className="character__type">Human</li>
                <li className="character__type">Animal</li>
                <li className="character__type">Alien</li>
            </ul>

            <form action="" method="get" className="formSearchCharacter">
                <input type="text" name="name" id="name" required placeholder="Search by name..." />
                <button type="submit" className="searchBtn">Search</button>
            </form>
        </div>
    );
};

export default Menu;
