import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componet/Home/Home';
import Room from './Componet/Room/Room'
import Galleries from './Componet/Galleries/Galleries';
import Page from './Componet/Page/Page';
import Blog from './Componet/Blog/Blog';
import Booking from './Componet/Booking/Booking';

function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/galleries' element={<Galleries/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/booking' element={<Booking/>}/>

      </Routes>
   </>
  );
}

export default App;
