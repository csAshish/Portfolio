import './App.css';
import Aboutme from './Component/Aboutme';
import Resume from './Component/Resume';
import Top from './Component/Top';
import Services from './Component/Services';
import Testimonial from './Component/Testimonial';
function App() {
  const arr = [{"fa-palette":"Graphic Design"},"UI/UX Design","Business Analysis","Web Design","App Design & Develop","SEO Marketing"]

  return (
    <>
    
        <div className='main-head'>
          <div className='container top-section'>
            <Top />
          </div>
          <div className='container about-me' id='About1'>
            <Aboutme/>
          </div>
          <div className='container services' id='what'>
            <Services/>
          </div>
          <div className='container resume' id='resume1'>
            <Resume/>
          </div>
          <div className='container testimonial' id="test">
            <Testimonial/>
          </div>
          </div>   
    </>
  );
}

export default App;
