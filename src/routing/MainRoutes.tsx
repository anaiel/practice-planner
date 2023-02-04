import { Navigate, Route, Routes } from 'react-router-dom';
import NewPractice from 'pages/NewPractice';
import Home from 'pages/Home';

export enum MainRoutesPaths {
    NewPractice = 'new-practice',
}

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route index element={<Home />} />
                <Route
                    path={MainRoutesPaths.NewPractice}
                    element={<NewPractice />}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
