import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import BlogPostDetail from "./components/Sliders/Blog/BlogPostDetail.jsx";
import Connection from "./pages/Connection/Connection.jsx";
import News from "./pages/News/News.jsx";
import Events from "./pages/Events/Events.jsx";
import Raider from "./pages/Raider/Raider.jsx";
import Introduction from "./pages/Raider/Pages/Introduction.jsx";
import Page1 from "./pages/Raider/Pages/Page1.jsx";
import Page2 from "./pages/Raider/Pages/Page2.jsx";
import Page3 from "./pages/Raider/Pages/Page3.jsx";
import { Page4 } from "./pages/Raider/Pages/Page4.jsx";
import Page5 from "./pages/Raider/Pages/Page5.jsx";
import Page6 from "./pages/Raider/Pages/Page6.jsx";
import Page7 from "./pages/Raider/Pages/Page7.jsx";
import Page8 from "./pages/Raider/Pages/Page8.jsx";
import Page9 from "./pages/Raider/Pages/Page9.jsx";
import Page10 from "./pages/Raider/Pages/Page10.jsx";
import Page11 from "./pages/Raider/Pages/Page11.jsx";
import Page12 from "./pages/Raider/Pages/Page12.jsx";
import Page13 from "./pages/Raider/Pages/Page13.jsx";
import Page14 from "./pages/Raider/Pages/Page14.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/about", element: <AboutUs /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/news", element: <News /> },
  { path: "/events", element: <Events /> },
  { path: "/connection", element: <Connection /> },
  { path: "/blog/:postId", element: <BlogPostDetail /> },
  { path: "/raider", element: <Raider /> },
  { path: "/introduction", element: <Introduction /> },
  { path: "/kazakh-students-union", element: <Page1 /> },
  { path: "/consular-registration", element: <Page2 /> },
  { path: "/student-residence-permit", element: <Page3 /> },
  { path: "/student-istanbulkart", element: <Page4 /> },
  { path: "/how-to-open-bank-account", element: <Page5 /> },
  { path: "/housing-in-turkey", element: <Page6 /> },
  { path: "/pharmacies", element: <Page7 /> },
  { path: "/top-10-useful-apps", element: <Page8 /> },
  { path: "/shops-and-markets", element: <Page9 /> },
  { path: "/transportation-methods", element: <Page10 /> },
  { path: "/fast-ways-to-travel", element: <Page11 /> },
  { path: "/istanbul-museum-card", element: <Page12 /> },
  { path: "/additional-information", element: <Page13 /> },
  { path: "/conclusion", element: <Page14 /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
