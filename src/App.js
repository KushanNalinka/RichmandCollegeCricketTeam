// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Initial from './pages/Initial.js';
// import MemberInitial from './pages/MemberInitial.js';
// import Profile from './pages/Profile.js';
// import Under13 from './pages/Under13.js';
// import Under15 from './pages/Under15.js';
// import Under17 from './pages/Under17.js';
// import Under19 from './pages/Under19.js';
// import Coaches from './pages/Coaches.js';
// import PlayerInfo from './pages/PlayerInfo.js';
// import MatchDetail from './pages/MatchDetail.js';
// import Login from './pages/Login.js';
// import Register from './pages/Register.js';
// import Team from './pages/Team.js';
// import MatchInfo from './pages/MatchInfo.js';
// import AdminMatchInfo from './pages/AdminMatchInfo.js';
// import ScorecardData from './pages/ScoreCardData.js';
// import PlayerProfile from './pages/playerProfile.js';
// import ScoreCardPage from './pages/ScoreCardPage.js';
// import CoachProfile from './pages/coachProfile.js';
// import AddPlayer from './components/AddPlayer.js';
// import AddCoachForm from './components/AddCoachForm.js';
// import AdminDashboard from './pages/AdminDashboard.js';
// import OfficialProfile from './pages/OfficialProfile.js';
// import AddOfficialForm from './components/AddOfficialForm.js';
// import ScoreCardPopup from './components/ScoreCardPopup.js';
// import InitialNewsPage from './pages/InitialNewsPage.js';
// import AdminNewsPage from './pages/AdminNewsPage.js';
// import AdminCoaches from './pages/AdminCoaches.js';
// import NewsPage from './pages/NewsPage.js'; 
// import CoachTable from './pages/CoachInfo.js';
// import CoachesProfile from './pages/Coaches.js';
// import AboutUs from './pages/AboutUs.js';
// import AdminAboutUs from './pages/AdminAboutUs.js';
// import InitialAboutUs from './pages/InitialAboutUs.js';
// import AdminProfile from './pages/AdminProfile.js';
// import NewsCreator from './pages/NewsCreatingPage.js';
// import OfficialsTable from './pages/OfficialInfo.js';
// import { AuthProvider } from './hooks/UseAuth.js';
// import PrivateRoute from './components/PrivateRoute.js';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Initial />} />
       
//         <Route path="/member" element={<MemberInitial />} />
        //  <Route path="/profile" element={<Profile />} />
        //  <Route path="/under13" element={<Under13 />} />
        //  <Route path="/under15" element={<Under15 />} />
        //  <Route path="/under17" element={<Under17 />} />
        //  <Route path="/under19" element={<Under19 />} />

        //  <Route path="/coach" element={<CoachesProfile/>} />
        //  <Route path="/coachInfo" element={<CoachTable/>} />
      
        //  <Route path="/admin-profile" element={<AdminProfile />} />
        //  <Route path="/coach" element={<Coaches />} />
        //  <Route path="/admin-coach" element={<AdminCoaches />} />
        //  <Route path='/official' element={<OfficialsTable/>} />
        //  <Route path='/player' element={<PlayerInfo/>} />
        //  <Route path='/match' element={<MatchDetail/>} />
        //  <Route path="/admin-scorecard" element={<ScoreCardPage/>} />
        //  <Route path="/team" element={<Team />} />
        //  <Route path='/addPlayerOld' element={<AddPlayer/>}/>
        //  <Route path='/addPlayer'element={<AddPlayer/>}/>
        //  <Route path='/addCoach' element={<AddCoachForm/>}/>
        //  <Route path='/addOfficial' element={<AddOfficialForm/>}/>
        //  <Route path="/playerProfile" element={<PlayerProfile/>}/>
        //  <Route path='/coachProfile' element={<CoachProfile/>}/>
        //  <Route path='/officialProfile' element={<OfficialProfile/>}/>
        //  <Route path="/match-info" element={<MatchInfo />} />
        //  <Route path="/scorecard-form" element={<ScoreCardPopup />} />
        //  <Route path="/scorecard" element={<ScorecardData />} />
        //  <Route path="/login" element={<Login />} />
        //  <Route path="/register" element={<Register />} />
        //  <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        //  <Route path="/news" element={<NewsPage />} />
        //  <Route path="/initial-news" element={<InitialNewsPage />} />
        //  <Route path="/news-create" element={<NewsCreator />} />
        //  <Route path="/about-us" element={<AboutUs />} />
        //  <Route path="/admin-about-us" element={<AdminAboutUs />} />
        //  <Route path="/initial-about-us" element={<InitialAboutUs />} />

        //  <Route path="/admin-news" element={<NewsCreator />} />
        //  <Route path="/admin-match-info" element={<AdminMatchInfo />} />
      
//         </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.js
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
import OldBoys from './pages/OldBoys.js';
import Academy from './pages/Academy.js';
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

import PrivateRoute from './components/PrivateRoute.js';

import { useAuth } from './hooks/UseAuth.js';

import AdminNewsDetailPage from './pages/AdminNewsDetailPage';



function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Initial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/initial-about-us" element={<InitialAboutUs />} />

          {/* Protected Routes */}
          <Route
            path="/member"
            element={
              <PrivateRoute>
                <MemberInitial />
              </PrivateRoute>
            }
          />

          {/* Profile Routes */}
          <Route
            path="/playerProfile"
            element={
              <PrivateRoute allowedRoles={['player']}>
                <PlayerProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/coachProfile"
            element={
              <PrivateRoute allowedRoles={['coach']}>
                <CoachProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/officialProfile"
            element={
              <PrivateRoute allowedRoles={['official']}>
                <OfficialProfile />
              </PrivateRoute>
            }
          />

          {/* Other Protected Routes */}
          <Route path="/profile" element={<Profile />} />
         <Route path="/under13" element={<Under13 />} />
         <Route path="/under15" element={<Under15 />} />
         <Route path="/under17" element={<Under17 />} />
         <Route path="/under19" element={<Under19 />} />
         <Route path="/oldboys" element={<OldBoys />} />
         <Route path="/academy" element={<Academy />} />
         <Route path="/academy13" element={<Academy13 />} />
         <Route path="/academy15" element={<Academy15 />} />
         <Route path="/academy17" element={<Academy17 />} />
         <Route path="/academy19" element={<Academy19 />} />
         <Route path="/over40" element={<Over40 />} />
         <Route path="/over50" element={<Over50 />} />


         <Route path="/coach" element={<CoachesProfile/>} />
         <Route path="/coachInfo" element={<CoachTable/>} />
      
         <Route path="/coach" element={<Coaches />} />
         <Route path="/allplayers" element={<AllPlayers />} />
         <Route path='/official' element={<OfficialsTable/>} />
         <Route path='/player' element={<PlayerInfo/>} />
         <Route path='/match' element={<MatchDetail/>} />
         <Route path="/admin-scorecard" element={<ScoreCardPage/>} />
         <Route path="/team" element={<Team />} />
         <Route path='/addPlayerOld' element={<AddPlayer/>}/>
         <Route path='/addPlayer'element={<AddPlayer/>}/>
         <Route path='/addCoach' element={<AddCoachForm/>}/>
         <Route path='/addOfficial' element={<AddOfficialForm/>}/>
         <Route path="/match-info" element={<MatchInfo />} />
         <Route path="/scorecard-form" element={<ScoreCardPopup />} />
         <Route path="/scorecard" element={<ScorecardData />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/news" element={<NewsPage />} />

         <Route path="/news/:id" element={<NewsDetailPage />} />
         <Route path="/initial-news/:id" element={<InitialNewsDetail />} />

         <Route path="/initial-news" element={<InitialNewsPage />} />
         <Route path="/news-create" element={<NewsCreator />} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/initial-about-us" element={<InitialAboutUs />} />

         <Route path="/admin-news" element={<NewsCreator />} />

          
          {/* <Route
            path="/under13"
            element={
              <PrivateRoute allowedRoles={['player', 'coach', 'official']}>
                <Under13 />
              </PrivateRoute>
            }
          />
          <Route
            path="/under15"
            element={
              <PrivateRoute allowedRoles={['player', 'coach', 'official']}>
                <Under15 />
              </PrivateRoute>
            }
          />
          <Route
            path="/under17"
            element={
              <PrivateRoute allowedRoles={['player', 'coach', 'official']}>
                <Under17 />
              </PrivateRoute>
            }
          />
          <Route
            path="/under19"
            element={
              <PrivateRoute allowedRoles={['player', 'coach', 'official']}>
                <Under19 />
              </PrivateRoute>
            }
          />
          <Route
            path="/coach"
            element={
              <PrivateRoute allowedRoles={['admin','player', 'coach', 'official']}>
                <CoachesProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/coachInfo"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <CoachTable />
              </PrivateRoute>
            }
          />
          <Route
            path="/official"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <OfficialsTable />
              </PrivateRoute>
            }
          />
          <Route
            path="/player"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <PlayerInfo />
              </PrivateRoute>
            }
          />
          <Route
            path="/match"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <MatchDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-scorecard"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <ScoreCardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/team"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Team />
              </PrivateRoute>
            }
          />
          <Route
            path="/scorecard-form"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <ScoreCardPopup />
              </PrivateRoute>
            }
          />
          <Route
            path="/scorecard"
            element={
              <PrivateRoute allowedRoles={['player', 'coach', 'official']}>
                <ScorecardData />
              </PrivateRoute>
            }
          />
          <Route
            path="/news"
            element={
              <PrivateRoute allowedRoles={['official', 'player', 'coach']}>
                <NewsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/initial-news"
            element={
              <PrivateRoute allowedRoles={['player', 'coach', 'official']}>
                <InitialNewsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/news-create"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <NewsCreator />
              </PrivateRoute>
            }
          /> */}

 
         <Route path="/admin-newsdetail" element={<NewsCreator />} />




        </Routes>
      </BrowserRouter>
    
  );
}

export default App;




// "proxy": "https://richmond-cricket.up.railway.app/api/"
// "proxy": "http://localhost:8080/api/"

// // "proxy": "https://richmond-cricket.up.railway.app/api/"
// // "proxy": "http://localhost:8080/api/"


// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Initial from './pages/Initial.js';
// import MemberInitial from './pages/MemberInitial.js';
// import Profile from './pages/Profile.js';
// import Under13 from './pages/Under13.js';
// import Under15 from './pages/Under15.js';
// import Under17 from './pages/Under17.js';
// import Under19 from './pages/Under19.js';
// import Coaches from './pages/Coaches.js';
// import PlayerInfo from './pages/PlayerInfo.js';
// import MatchDetail from './pages/MatchDetail.js';
// import Login from './pages/Login.js';
// import Register from './pages/Register.js';
// import Team from './pages/Team.js';
// import MatchInfo from './pages/MatchInfo.js';
// import AdminMatchInfo from './pages/AdminMatchInfo.js';
// import ScorecardData from './pages/ScoreCardData.js';
// import PlayerProfile from './pages/playerProfile.js';
// import ScoreCardPage from './pages/ScoreCardPage.js';
// import CoachProfile from './pages/coachProfile.js';
// import AddPlayer from './components/AddPlayer.js';
// import AddCoachForm from './components/AddCoachForm.js';
// import AdminDashboard from './pages/AdminDashboard.js';
// import OfficialProfile from './pages/OfficialProfile.js';
// import AddOfficialForm from './components/AddOfficialForm.js';
// import ScoreCardPopup from './components/ScoreCardPopup.js';
// import InitialNewsPage from './pages/InitialNewsPage.js';
// import AdminNewsPage from './pages/AdminNewsPage.js';
// import AdminCoaches from './pages/AdminCoaches.js';
// import NewsPage from './pages/NewsPage.js';
// import CoachTable from './pages/CoachInfo.js';
// import CoachesProfile from './pages/Coaches.js';
// import AboutUs from './pages/AboutUs.js';
// import AdminAboutUs from './pages/AdminAboutUs.js';
// import InitialAboutUs from './pages/InitialAboutUs.js';
// import AdminProfile from './pages/AdminProfile.js';
// import NewsCreator from './pages/NewsCreatingPage.js';
// import OfficialsTable from './pages/OfficialInfo.js';
// import { AuthProvider, useAuth } from './hooks/UseAuth.js';
// import PrivateRoute from './components/PrivateRoute.js';
// function App() {
//   return (
   
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Initial />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/initial-about-us" element={<InitialAboutUs />} />
//           {/* Protected Routes */}
//           <Route
//             path="/member"
//             element={
//               <PrivateRoute>
//                 <MemberInitial />
//               </PrivateRoute>
//             }
//           />
//           {/* Profile Routes */}
//           <Route
//             path="/playerProfile"
//             element={
//               <PrivateRoute allowedRoles={['player']}>
//                 <PlayerProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/coachProfile"
//             element={
//               <PrivateRoute allowedRoles={['coach']}>
//                 <CoachProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/officialProfile"
//             element={
//               <PrivateRoute allowedRoles={['official']}>
//                 <OfficialProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/adminProfile"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AdminProfile />
//               </PrivateRoute>
//             }
//           />
//           {/* Other Protected Routes */}
//           <Route
//             path="/under13"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <Under13 />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/under15"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <Under15 />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/under17"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <Under17 />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/under19"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <Under19 />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/coach"
//             element={
//               <PrivateRoute allowedRoles={['coach']}>
//                 <CoachesProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/coachInfo"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <CoachTable />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin-coach"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AdminCoaches />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/official"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <OfficialsTable />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/player"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <PlayerInfo />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/match"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <MatchDetail />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin-scorecard"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <ScoreCardPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/team"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <Team />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/addPlayer"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <AddPlayer />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/addCoach"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AddCoachForm />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/addOfficial"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AddOfficialForm />
//               </PrivateRoute>
//             }
//           />
         
//           <Route
//             path="/scorecard-form"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <ScoreCardPopup />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/scorecard"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'coach']}>
//                 <ScorecardData />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/adminDashboard"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AdminDashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/news"
//             element={
//               <PrivateRoute allowedRoles={['admin', 'player', 'coach']}>
//                 <NewsPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/initial-news"
//             element={
//               <PrivateRoute allowedRoles={['player', 'coach']}>
//                 <InitialNewsPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/news-create"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <NewsCreator />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin-about-us"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AdminAboutUs />
//               </PrivateRoute>
//             }
//           /><Route
//           path="/match-info"
//           element={
//             <PrivateRoute allowedRoles={['player','coach']}>
//               <MatchInfo />
//             </PrivateRoute>
//           }
//         />

//           <Route
//             path="/admin-match-info"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <AdminMatchInfo />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
   
//   );
// }
// export default App;

