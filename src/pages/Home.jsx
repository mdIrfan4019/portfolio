// // import Navbar from "../components/Navbar";
// // import Hero from "../components/Hero";
// // import Projects from "../components/Projects";
// // import Experience from "../components/Experience";
// // import Contact from "../components/Contact";
// // import About from "../components/About";
// // import Skills from "../components/Skills";


// // const Home = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <Hero />
// //       <Projects />
// //       <About/>
// //       <Experience />
// //       <Skills/>
// //       <Contact />
// //     </>
// //   );
// // };

// // export default Home;


// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Projects from "../components/Projects";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Skills from "../components/Skills";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";


// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Projects />
//       <About />
//       <Experience />
//       <Skills />
//       <Contact />
//       <Footer/>
//     </>
//   );
// };

// export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import ScrollProgress from "../components/ScrollProgress";



const Home = () => {
  return (
<PageTransition> 
  <ScrollProgress />
  <Navbar />
  <Hero />
  <Projects />
  <About />
  <Experience />
  <Skills />
  <Contact />
  <Footer />
</PageTransition>

  );
};

export default Home;

