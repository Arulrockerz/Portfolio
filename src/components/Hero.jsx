import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto z-10 hero-section`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500 to-transparent opacity-70' />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]`}
          >
            <span>Hi, I'm </span>
            <span className='font-bold whitespace-nowrap text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]'>
              Arulsiddharthan S
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]`}
          >
            I developed AI-Full stack application, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30'>
        <div 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            } else {
              window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }
          }}
          className='cursor-pointer hover:scale-110 transition-transform duration-300'
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] flex justify-center items-start p-2 hover:border-purple-400 transition-colors duration-300'>
            <div
              className='w-3 h-3 rounded-full bg-purple-500 mb-1 shadow-[0_0_8px_rgba(168,85,247,0.9)]'
            />
          </div>
        </div>
      </div>

      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 z-0'>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
