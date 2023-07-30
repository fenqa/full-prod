import { Suspense } from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import { classNames } from 'helpers/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
