import './App.css';
//export default allows you to rename the components at the time of import, so they are not enclosed within braces
//export const strictly sticks with the component name, u should only use the exact name within braces
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //routing library for React
import { Home } from "./tabs/Home";
import { Movies } from "./tabs/Movies";
import { Stream } from "./tabs/Stream";
import { Events } from "./tabs/Events";
import { Plays } from "./tabs/Plays";
import { Sports } from "./tabs/Sports";
import { Activities } from "./tabs/Activities";
import { Buzz } from "./tabs/Buzz";
import 'react-multi-carousel/lib/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> {/*displayed in all pages*/}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/stream" element={<Stream/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/plays" element={<Plays/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/buzz" element={<Buzz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;