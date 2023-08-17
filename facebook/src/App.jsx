import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Edit_Profile from './Component/Profile/Edit_Profile';
import Story from './Component/Story/Story';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/edit_profile' element={<Edit_Profile/>}/>
        <Route exact path='/story' element={<Story/>}/>
      </Routes>
    </div>
  );
}

export default App;
