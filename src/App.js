import React, { useState, useEffect } from 'react';
// import Navbar from './Bthomepage/Navbar'
// import Slider from './Bthomepage/Slider'
// import Cards from './Bthomepage/Cards'
// import About from './Bthomepage/About'
// import Footer from './Bthomepage/Footer'
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { WithLoading } from './Component/Userlist';
// import UserList from './Component/Withloading';
// import Timer from './Component/Timer';
import Fetch from './Component/Fetch';
import Toddoo from './Component/Toddoo'
import Counter from './Component/Counter';
// import Counter1 from './Component/Counter';
// import Input from'./Component/Input';
import User from './Component/User';
import Todo1 from './Component/Todo1';
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
// import Comment from './Component/Comment';
// import Tabale from './Component/Tabale';
// const UserWihComp = WithLoading(UserList);
import Todo from './Component/Todo'
import Timer from './Component/Timer'
import Product from './Component/Product';
import Tabale from './Component/Tabale';
import Prac from './Component/Prac';

export default function App() {
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUser([
  //       { id: 1, name: "sun" },
  //       { id: 2, name: "Anu" },
  //       { id: 3, name: "ss" }
  //     ]);
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div>
      {/* <Todo1/> */}
      {/* <UserWihComp isLoading={loading} user={user} /> */}
       {/* <Navbar/>
       <Slider/>
       <h2 style={{ textAlign: 'center' }}>Image Card Gallery</h2>
       <Cards/>
       <About/>
       <Footer/> */}
       <Home/>``
      {/* <Nav />

      <Routes>
        <Route path='/Todo' element={<Todo />}></Route>
        <Route path='/User' element={<User />}></Route>
        <Route path='/Timer' element={<Timer />}></Route>
        <Route path='/product' element={<Product />}>
              <Route path='Table' element={<Tabale/>}></Route>
              <Route path='Toddo' element={<Toddoo/>}></Route>
        
        </Route>
        <Route path='/prac' element={<Prac />}>
              <Route path='Counter' element={<Counter/>}></Route>
              <Route path='Fetch' element={<Fetch/>}></Route>
        
        </Route>

      </Routes> */}
    </div>
  );
}
