import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
