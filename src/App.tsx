import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './components/Menu';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';

const router = createBrowserRouter([
  {
    // path: "",
    errorElement: <h1>404</h1>,
    Component: Menu,
    children: [
      {
        path: '/',
        Component: HomePage
      },
      {
        path: 'drift',
        Component: DriftPage
      },
      {
        path: 'timeattack',
        Component: TimeAttackPage
      },
      {
        path: 'forza',
        Component: ForzaPage
      },
    ]
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </> 
  );
}