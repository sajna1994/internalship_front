import './App.css';
import Home from './components/screens/Home';
import {
BrowserRouter as Router,
Routes,
// Switch,
Route
} from "react-router-dom";
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Main from './components/Main';
import Movie from './components/screens/Movie';
import Booking from './components/screens/Booking';
import Admin from './components/screens/Admin';
import Sticker from './components/screens/Sticker';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
return (
  <Router>
  <div>
    <Routes>
    <Route path="/" exact element={<Main child={<Home/>}/>} />
    <Route path="/login" exact element={<Main child={<Login/>}/>} />
    <Route path="/sign" exact element={<Main child={<Signup/>}/>} />
    <Route path="/booking" exact element={<Main child={<Booking/>}/>} />
    <Route path="/admin" exact element={<Main child={<Admin/>}/>} />
    <Route path="/sticker" exact element={<Sticker/>} />

    <Route path="/movie" exact element={<Main child={<Movie/>}/>} />
</Routes>
  </div>
  </Router>
);
}

export default App;
