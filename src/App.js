import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Initial from './pages/Initial.js';
import Profile from './pages/Profile.js';
import Coaches from './pages/Coaches.js';
import PlayerInfo from './pages/PlayerInfo.js';
import MatchDetail from './pages/MatchDetail.js';
import ScoreCardPage from './components/ScoreCardPage.js';
import Team from './pages/Team.js';
import MatchInfo from './pages/MatchInfo.js';
import ScorecardData from './pages/ScoreCardData.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coach" element={<Coaches />} />
        <Route path="/player" element={<PlayerInfo />} />
        <Route path="/match" element={<MatchDetail />} />
        <Route path="/scorecard/:matchId" element={<ScoreCardPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/match-info" element={<MatchInfo />} />
        <Route path="/scorecard" element={<ScorecardData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
