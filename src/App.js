import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Initial from './pages/Initial.js';
import MemberInitial from './pages/MemberInitial.js';
import Profile from './pages/Profile.js';
import Under13 from './pages/Under13.js';
import Under15 from './pages/Under15.js';
import Under17 from './pages/Under17.js';
import Under19 from './pages/Under19.js';
import Coaches from './pages/Coaches.js';
import PlayerInfo from './pages/PlayerInfo.js';
import MatchDetail from './pages/MatchDetail.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Team from './pages/Team.js';
import MatchInfo from './pages/MatchInfo.js';
import ScorecardData from './pages/ScoreCardData.js';
import PlayerProfile from './pages/playerProfile.js';
import ScoreCardPage from './pages/ScoreCardPage.js';
import CoachProfile from './pages/coachProfile.js';
import AddPlayer from './components/AddPlayer.js';
import AddCoachForm from './components/AddCoachForm.js';
import OfficialProfile from './pages/OfficialProfile.js';
import AddOfficialForm from './components/AddOfficialForm.js';
import ScoreCardPopup from './components/ScoreCardPopup.js';
import InitialNewsPage from './pages/InitialNewsPage.js';
import NewsPage from './pages/NewsPage.js';
import NewsDetailPage from './pages/NewsDetailPage';
import InitialNewsDetail from './pages/InitialNewsDetail';
import CoachTable from './pages/CoachInfo.js';
import CoachesProfile from './pages/Coaches.js';
import AboutUs from './pages/AboutUs.js';
import InitialAboutUs from './pages/InitialAboutUs.js';
import NewsCreator from './pages/NewsCreatingPage.js';
import OfficialsTable from './pages/OfficialInfo.js';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import PrivateRoute from './components/PrivateRoute.js';
import { useAuth } from './hooks/UseAuth.js';
import AdminNewsDetailPage from './pages/AdminNewsDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/initial-about-us" element={<InitialAboutUs />} />

        {/* Protected Routes */}
        <Route path="/member" element={<PrivateRoute><MemberInitial /></PrivateRoute>} />

        {/* Profile Routes */}
        <Route path="/playerProfile" element={<PrivateRoute allowedRoles={['player']}><PlayerProfile /></PrivateRoute>} />
        <Route path="/coachProfile" element={<PrivateRoute allowedRoles={['coach']}><CoachProfile /></PrivateRoute>} />
        <Route path="/officialProfile" element={<PrivateRoute allowedRoles={['official']}><OfficialProfile /></PrivateRoute>} />

        {/* Other Protected Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/under13" element={<Under13 />} />
        <Route path="/under15" element={<Under15 />} />
        <Route path="/under17" element={<Under17 />} />
        <Route path="/under19" element={<Under19 />} />
        <Route path="/coach" element={<CoachesProfile />} />
        <Route path="/coachInfo" element={<CoachTable />} />
        <Route path="/official" element={<OfficialsTable />} />
        <Route path="/player" element={<PlayerInfo />} />
        <Route path="/match" element={<MatchDetail />} />
        <Route path="/admin-scorecard" element={<ScoreCardPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/addPlayerOld" element={<AddPlayer />} />
        <Route path="/addPlayer" element={<AddPlayer />} />
        <Route path="/addCoach" element={<AddCoachForm />} />
        <Route path="/addOfficial" element={<AddOfficialForm />} />
        <Route path="/match-info" element={<MatchInfo />} />
        <Route path="/scorecard-form" element={<ScoreCardPopup />} />
        <Route path="/scorecard" element={<ScorecardData />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/initial-news/:id" element={<InitialNewsDetail />} />
        <Route path="/initial-news" element={<InitialNewsPage />} />
        <Route path="/news-create" element={<NewsCreator />} />
        <Route path="/admin-news" element={<NewsCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
