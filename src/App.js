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
import Main1 from './components/Main1';
import Detail from './components/screens/Detail';
import View from './components/screens/View';
import AdminDashBoard from './components/screens/AdminDashBoard';
import Userprofile from './components/screens/Userprofile';
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
    <Route path="/booking/:movieId/:userId" exact element={<Main1 child={<Booking/>}/>} />
    {/* <Route path="/admin" exact element={<Main1 child={<Admin/>}/>} /> */}
    <Route path="/admin" exact element= {<Main1 child={<Admin method="post" data = {{ moviename: '',date:[], time:[],rating:'', image: '',category: '',language: '',description: '',cast_details: '',ticket_rates:'',}} /> } />} />

    <Route path="/sticker" exact element={<Sticker/>} />
    <Route path="/detail/:bookingId" exact element={<Main1 child={<Detail />} />} /> 
    <Route path="/detail/:movieId" exact element={<Main1 child={<Detail />} />} /> 

    <Route path="/view" exact element={<Main1 child={<View/>}/>} />
    <Route path="/admindash" exact element={<Main1 child={<AdminDashBoard/>}/>} />
    <Route path="/user" exact element={<Main1 child={<Userprofile/>}/>} />

    <Route path="/movie" exact element={<Main1 child={<Movie/>}/>} />
</Routes>
  </div>
  </Router>
);
}

export default App;
