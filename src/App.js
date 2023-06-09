import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
