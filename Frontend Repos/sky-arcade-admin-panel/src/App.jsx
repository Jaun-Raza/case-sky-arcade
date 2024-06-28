import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Auth from './authPages/Auth';
import Cookies from 'js-cookie';
import Header from './pages/Header';
import Sidebar from './components/Sidebar';
import Announcement from './pages/Announcement';

const App = () => {
  
  const tokAuth = Cookies.get('a-XYTUYAS-d-68743LAJSDa%$^$^@#-m,asd-in')

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
      <Router>
        <GlobalStyle />
        <Header />
        <div className="main" style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Sidebar />
          <Routes>
            <Route path='/' element={tokAuth ? <Announcement /> : <Auth />} />
            <Route path='/auth' element={tokAuth ? <Announcement /> : <Auth />} />
            <Route path="/announcement" element={tokAuth ? <Announcement /> : <Auth />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
