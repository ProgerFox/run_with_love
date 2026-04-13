import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { UpcomingRaces } from "./components/Races/UpcomingRaces";
import { Features } from "./components/Features";
import { Charity } from "./components/Charity";
import { Influence } from "./components/Influence";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { News } from "./components/News";
import { Partners } from "./components/Partners";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingRaces />
      <Features />
      <Charity />
      <Influence />
      <Gallery />
      <FAQ />
      <News />
      <Partners />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
