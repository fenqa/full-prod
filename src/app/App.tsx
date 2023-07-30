import { Link } from 'react-router-dom';

import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <AppRouter />
        </div>
    );
};

export default App;
