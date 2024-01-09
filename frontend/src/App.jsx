import React from 'react'
import'./App.css';

import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Login from './components/Login';

import MangaeHandicraft from './components/MangaeHandicraft';
import AddHandicraft from './components/AddHandicraft';
import { SnackbarProvider } from 'notistack';
import ListHandicraft from './components/listhandicraft';
import BookHandicraft from './components/BookHandicraft';
import Signup from './components/Signup';






const App = () => {
  return (
    
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      
         <Navbar/>
         {/* <Link to='/'>Home Page</Link>
            
         <Link to='/login'>Login Page</Link>
         <Link  to='/signup'>Signup Page</Link> */}
           <Routes>
            
           
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/managehandicraft' element={<MangaeHandicraft/>}/>
            <Route path='/addhandicraft' element={<AddHandicraft/>}/>
            <Route path='/listhandicraft' element={<ListHandicraft/>}/>
            <Route path='/bookhandicraft/:index' element={<BookHandicraft/>}/>
            <Route path='/addhandicraft' element={<AddHandicraft/>}/>
            <Route path='*' element={<NotFound/>}/>

           </Routes>
      </BrowserRouter>
      </SnackbarProvider>
      
    </div>
    
  )
}

export default App;