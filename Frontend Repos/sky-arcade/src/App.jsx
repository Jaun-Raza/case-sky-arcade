import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Styling Assets
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.jsx";

// Partials
import Header from './components/partials/Header.jsx';
import Footer from './components/partials/Footer.jsx';

// Pages
import Landing from './pages/landing.jsx';
import Rules from './pages/Rules.jsx';
import Play from './pages/Play.jsx';
import AnnouncmentDetails from './pages/AnnouncmentDetails.jsx';

const App = () => {

  // Theme
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",           
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/play' element={<Play />} />
          <Route path='/annoucement/:id' element={<AnnouncmentDetails />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App