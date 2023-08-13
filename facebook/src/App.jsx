import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './Component/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
