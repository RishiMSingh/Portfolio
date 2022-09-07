import './App.css';
import Navigation from './components/navigationBar/navigationBar'
import Particles from './components/particles';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import mixpanel from 'mixpanel-browser';
import Contact from './components/contact/Contact';
import Timeline from './components/verticalTimeline/Timeline'


function App() {

  mixpanel.init("fb5138f470b185338dcaae29f9db3d33",{
    debug:true
    
  });

  mixpanel.track("page_view");


  return (

    <div className="App">
      <Navigation/>
      <Header/>
      <Particles/>
      <AboutMe/>
      <Technologies></Technologies>
      <Timeline></Timeline>
      <Portfolio> </Portfolio>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
