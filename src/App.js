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
          <div className='container about-me'>
            <Aboutme/>
          </div>
          <div className='container services'>
            <Services/>
          </div>
          <div className='container resume'>
            <Resume/>
          </div>
          <div className='container testimonial'>
            <Testimonial/>
          </div>
          </div>   
    </>
  );
}

export default App;
