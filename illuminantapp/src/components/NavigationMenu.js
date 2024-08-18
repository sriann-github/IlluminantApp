import React from 'react';
import './NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/lectures">Lectures</a></li>
                <li><a href="/translation">Translation</a></li>
                <li><a href="/audio">Audio Narration</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
