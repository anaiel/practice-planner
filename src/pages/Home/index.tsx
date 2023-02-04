import { MainRoutesPaths } from 'routing/MainRoutes';
import { Link } from 'react-router-dom';

const Home = () => {
    return <Link to={MainRoutesPaths.NewPractice}>New Practice</Link>;
};

export default Home;
