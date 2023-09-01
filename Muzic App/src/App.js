import "./app.css";
import Header from "./component/header/Header";
import Hero from "./component/hero/hero";
import Experience from "./component/experience/experience";
import Search from "./component/search/search";
import Download from "./component/download/download";
import Footer from "./component/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}
