import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Races } from "./sections/Races/Races";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { Gallery } from "./sections/Gallery";
import { News } from "./sections/News";
import { Partners } from "./sections/Partners";
import { Contacts } from "./sections/Contacts";
import { Footer } from "./sections/Footer";
import { scrollTo } from "./utils/ScrollTo";

function App() {
  return (
    <>
      <Header scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />

        <News />

        <Races />

        <AboutUs />

        <Gallery />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
