import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Initial from './pages/Initial.js';
import Profile from './pages/Profile.js';
import Coaches from './pages/Coaches.js';
import PlayerInfo from './pages/PlayerInfo.js';
import MatchDetail from './pages/MatchDetail.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Team from './pages/Team.js';

import MatchInfo from './pages/MatchInfo.js';
import ScorecardData from './pages/ScoreCardData.js';
import PlayerProfile from './pages/playerProfile.js';
import AddPlayer from './pages/playerProfile.js';
import ScoreCardPage from './pages/ScoreCardPage.js';
import PlayerProfileForm from './components/playerProfileForm.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/coach" element={<Coaches />} />
         <Route path='/player' element={<PlayerInfo/>} />
         <Route path='/match' element={<MatchDetail/>} />
         <Route path="/scorecard" element={<ScoreCardPage/>} />
         <Route path="/team" element={<Team />} />
          <Route path='/addPlayerOld' element={<AddPlayer/>}/>
          <Route path='/addPlayer'element={<PlayerProfileForm/>}/>
         <Route path="/playerProfile" element={<PlayerProfile/>}/>
         <Route path="/match-info" element={<MatchInfo />} />
        <Route path="/scorecard" element={<ScorecardData />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

