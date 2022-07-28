import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Dogs from "./Dogs"
import Cats from "./Cats"
import Sheeps from "./Sheeps"
import Goats from "./Goats"
import Users from "./Users"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact   element={<Dogs/>} />
        <Route path='/cats'  element={<Cats/>} />
        <Route path='/sheeps'  element={<Sheeps/>}/>
        <Route path='/goats' element={<Goats/>} />
        <Route path='/users'  element={<Users/>}/>

      </Routes>
      <Footer />

    </Router>
  );
}
export default App;