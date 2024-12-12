import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Initial from './pages/Initial.js';
import MemberInitial from './pages/MemberInitial.js';
import Profile from './pages/Profile.js';
import Under13 from './pages/Under13.js';
import Under15 from './pages/Under15.js';
import Under17 from './pages/Under17.js';
import Under19 from './pages/Under19.js';
import OldBoys from './pages/OldBoys.js';
import Academy from './pages/Academy.js';
import Academy9 from './pages/Academy9.js';
import Academy13 from './pages/Academy13.js';
import Academy15 from './pages/Academy15.js';
import Academy17 from './pages/Academy17.js';
import Academy19 from './pages/Academy19.js';
import Over40 from './pages/Over40.js';
import Over50 from './pages/Over50.js';
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
import AllPlayers from './pages/AllPlayers.js'; 

import NewsDetailPage from './pages/NewsDetailPage';
import InitialNewsDetail from './pages/InitialNewsDetail';
import CoachTable from './pages/CoachInfo.js';
import CoachesProfile from './pages/Coaches.js';
import AboutUs from './pages/AboutUs.js';
import InitialAboutUs from './pages/InitialAboutUs.js';
import NewsCreator from './pages/NewsCreatingPage.js';
import OfficialsTable from './pages/OfficialInfo.js';
import Admin from './pages/AdminPage.js';

import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

import { useAuth } from './hooks/UseAuth.js';

import AdminNewsDetailPage from './pages/AdminNewsDetailPage';

function App() {


const storedRoles = localStorage.getItem("roles") ; // Retrieve and parse roles
console.log("Retrieved roles from localStorage:", storedRoles);


if (storedRoles.includes("ROLE_PLAYER")) {
  console.log("You are authorized to send emails.");
} else {
  // Proceed with sending an email
  console.log("You are not authorized to send emails.");
}

  return (

    
    <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Initial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
      path="/about-us"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <AboutUs />
        </PrivateRoute>
      }
    />
      <Route path="/initial-about-us" element={<InitialAboutUs />} />
       {/* Protected Routes */}
       <Route
      path="/member"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <MemberInitial />
        </PrivateRoute>
      }
    />
    <Route
      path="/playerProfile"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER"]}>
          <PlayerProfile />
        </PrivateRoute>
      }
    />
      <Route
      path="/coachProfile"
      element={
        <PrivateRoute allowedRoles={["ROLE_COACH"]}>
          <CoachProfile />
        </PrivateRoute>
      }
    />
      <Route
      path="/officialProfile"
      element={
        <PrivateRoute allowedRoles={["ROLE_OFFICIAL"]}>
          <OfficialProfile />
        </PrivateRoute>
      }
    />
      {/* Other Protected Routes */}
      <Route
      path="/profile"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Profile />
        </PrivateRoute>
      }
    />
    <Route
      path="/under13"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Under13 />
        </PrivateRoute>
      }
    />
     <Route
      path="/under15"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Under15 />
        </PrivateRoute>
      }
    />
    <Route
      path="/under17"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Under17 />
        </PrivateRoute>
      }
    />
     <Route
      path="/under19"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Under19 />
        </PrivateRoute>
      }
    />
    <Route
      path="/oldboys"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <OldBoys />
        </PrivateRoute>
      }
    />
     <Route
      path="/academy"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Academy />
        </PrivateRoute>
      }
    />
     <Route
      path="/academy9"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Academy9 />
        </PrivateRoute>
      }
    />
    <Route
      path="/academy13"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Academy13 />
        </PrivateRoute>
      }
    />
    <Route
      path="/academy15"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Academy15 />
        </PrivateRoute>
      }
    />
     <Route
      path="/academy17"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Academy17 />
        </PrivateRoute>
      }
    />
    <Route
      path="/academy11"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Academy19 />
        </PrivateRoute>
      }
    />
     <Route
      path="/over40"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Over40 />
        </PrivateRoute>
      }
    />
    <Route
      path="/over50"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Over50 />
        </PrivateRoute>
      }
    />
     <Route
      path="/coachInfo"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <CoachTable />
        </PrivateRoute>
      }
    />
     <Route
      path="/coach"
      element={
        <PrivateRoute allowedRoles={["ROLE_COACH","ROLE_ADMIN"]}>
          <Coaches />
        </PrivateRoute>
      }
    />
     <Route
      path="/allplayers"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <AllPlayers />
        </PrivateRoute>
      }
    />
    <Route
      path="/official"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <OfficialsTable />
        </PrivateRoute>
      }
    />
     <Route
      path="/player"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <PlayerInfo />
        </PrivateRoute>
      }
    />
     <Route
      path="/match"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <MatchDetail />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin-scorecard"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <ScoreCardPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/team"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <Team />
        </PrivateRoute>
      }
    />
     <Route
      path="/addPlayerOld"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <AddPlayer />
        </PrivateRoute>
      }
    />
    <Route
      path="/addPlayer"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <AddPlayer />
        </PrivateRoute>
      }
    />
    <Route
      path="/addCoach"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <AddCoachForm />
        </PrivateRoute>
      }
    />
    <Route
      path="/addOfficial"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <AddOfficialForm />
        </PrivateRoute>
      }
    />
     <Route
      path="/match-info"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <MatchInfo />
        </PrivateRoute>
      }
    />
    <Route
      path="/scorecard-form"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <ScoreCardPopup />
        </PrivateRoute>
      }
    />
    <Route
      path="/scorecard"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <ScorecardData />
        </PrivateRoute>
      }
    />
    {/* <Route
      path="/login"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Login />
        </PrivateRoute>
      }
    /> */}
    {/* <Route
      path="/register"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <Register />
        </PrivateRoute>
      }
    /> */}
    <Route
      path="/news"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <NewsPage />
        </PrivateRoute>
      }
    />
     <Route
      path="/news/:id"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <NewsDetailPage />
        </PrivateRoute>
      }
    />
    <Route path="/initial-news/:id" element={<InitialNewsDetail />} />
    <Route path="/initial-news" element={<InitialNewsPage />} />
   <Route
      path="/news-create"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <NewsCreator />
        </PrivateRoute>
      }
    />
    {/* <Route
      path="/about-us"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <AboutUs />
        </PrivateRoute>
      }
    />
  <Route
      path="/initial-about-us"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <InitialAboutUs />
        </PrivateRoute>
      }
    /> */}
    <Route
      path="/admin-news"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <NewsCreator />
        </PrivateRoute>
      }
    />
     <Route
      path="/admin-control"
      element={
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]}>
          <Admin />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin-newsdetail"
      element={
        <PrivateRoute allowedRoles={["ROLE_PLAYER","ROLE_COACH","ROLE_ADMIN","ROLE_OFFICIAL"]}>
          <NewsCreator />
        </PrivateRoute>
      }
    />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
