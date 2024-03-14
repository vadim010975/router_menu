import Menu from './components/Menu';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<HomePage />} />
          <Route path="drift" element={<DriftPage />} />
          <Route path="forza" element={<ForzaPage />} />
          <Route path="timeattack" element={<TimeAttackPage />} />
        </Route>
      </Routes>
    </div>
  );
}