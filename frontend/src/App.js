import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Main from './components/main';
import User from './components/user';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
// import Navbar from './components/main/Navbar';
import LiveForm from './components/main/LiveForm';
import EditForm from './components/user/EditForm';
import ManageForm from './components/user/ManageForm';
import UserProfile from './components/user/UserProfile';
import Login_new from './components/main/Login_new';
import { Toaster } from 'react-hot-toast';
// import Navbar2 from './components/user/Navbar2';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster position='top-right' />
        <Routes>
        <Route path='/' element={<Navigate to='/main/home' /> } />
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />}/>
            <Route path="sign" element={<Signup />}/>
            <Route path="login" element={<Login />}/>
            <Route path="loginn" element={<Login_new />}/>
            <Route path="Live" element={<LiveForm />}/>
          </Route>
          <Route path="user" element={<User />}>
            <Route path="EditForm" element={<EditForm />}/>
            <Route path="ManageForm" element={<ManageForm />}/>
            <Route path="UserProfile" element={<UserProfile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
