import Layout from './components/layout/Layout';
// import Hero from './sections/Hero';
import About from './sections/About';
import Works from './sections/Works';
// import Experience from './sections/Experience';

function App() {
  return (
    <Layout>
      {/* <Hero /> */}
      <About />
      <Works />
      {/* <Experience /> */}
    </Layout>
  );
}

export default App;