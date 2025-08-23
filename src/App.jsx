import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import SimpleAnkaBackground from "./components/SimpleAnkaBackground";

const App = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Simple 2D Anka Space Background */}
      <SimpleAnkaBackground />
      
      {/* Main Content */}
      <div className='relative z-10'>
        <div className='relative'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
