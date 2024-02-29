import {Routes, Route} from "react-router-dom"
import { Mainlayout } from "./layout/main-layout";
import {Home} from './pages/home';
import { About } from "./pages/about";
import {Stack} from './pages/stack';
import {Project} from './pages/projects';
import {Contact} from "./pages/contact";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="stack" element={<Stack />} />
        <Route path="projects" element={<Project />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
    </>
  )
};



export default App;


