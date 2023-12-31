// READY TO PUBLISH NOTES:
// - Switch to HTTPS instead of HTTP (may need to get an SSL certificate)
// - Host on S3, netlify, cloud player (choose)
// - ADA compliance - does it matter for freelancing business or restaurant businesses. AND don't browsers have screen reading options anyways?


// REACT:
import { React } from "react"; // you had useRef after react but netlify said you werent using it

// ROUTER:
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ROUTES:
import Home from "./routes/0-Home/Home.jsx";
import Services from "./routes/1-Services/Services.jsx"
import Work from "./routes/2-Work/Work.jsx"
import SocialMedia from "./routes/3-SocialMedia/SocialMedia.jsx"
import Photography from "./routes/4-Photography/Photography.jsx"
import Video from "./routes/5-Video/Video.jsx"
import Reviews from "./routes/6-Reviews/Reviews.jsx"
import About from "./routes/7-About/About.jsx"
import Contact from "./routes/8-Contact/Contact.jsx"

// COMPONENTS: 
import NavBar2 from "./components/0.5-NavBar2/NavBar2.jsx";

// CSS:
import styles from "./App.module.css";

// APP:
export default function App() {
  // const home = useRef(null)
  // const scrollToHome = () => {
  //   home.current?.scrollIntoView({behavior: 'smooth'})
  // } -- netlify told you to get rid of es lint errors in order to deploy, buy you might need this. Keep that in mind
  
  return (
    
    <main className={styles.App}>

      <Router>
        <NavBar2 /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/socialmedia' element={<SocialMedia/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/video' element={<Video/>} />
          <Route path='/reviews' element={<Reviews/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>

    </main>
    
  )
}