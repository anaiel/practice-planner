import { Navigate, Route, Routes } from 'react-router-dom';
import PracticeBuilder from 'pages/PracticeBuilder';
import Home from 'pages/Home';

export enum MainRoutesPaths {
    PracticeBuilder = 'new-practice',
}

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route index element={<Home />} />
                <Route
                    path={MainRoutesPaths.PracticeBuilder}
                    element={<PracticeBuilder />}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
