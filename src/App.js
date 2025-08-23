import React, { useState, useEffect } from 'react';

// import Navbar from './Bthomepage/Navbar'
// import Slider from './Bthomepage/Slider'
// import Cards from './Bthomepage/Cards'
// import About from './Bthomepage/About'
// import Footer from './Bthomepage/Footer'
// import Home from './Component/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Localbox from './Component/Localbox';

// import { WithLoading } from './Component/Userlist';
// import UserList from './Component/Withloading';
// import Timer from './Component/Timer';
// import Fetch from './Component/Fetch';
// import Toddoo from './Component/Toddoo'
// import Counter from './Component/Counter';
// import Counter1 from './Component/Counter';
// import Input from './Component/Input';
// import User from './Component/User';
// import Todo1 from './Component/Todo1';
// import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
// import Comment from './Component/Comment';
// import Tabale from './Component/Tabale';
// // const UserWihComp = WithLoading(UserList);
// // import Todo from './Component/Todo'
// // import Timer from './Component/Timer'
import Api from './Component/Api'
// import Product from './Component/Product';
// import Tabale from './Component/Tabale';
// import Card from './Component/Card';
// import Navbar from './Component/Navbar';
// import Productdetail from './Component/Productdetail';
// import Prac from './Component/Prac';
// import Home from './Component/Home';
import Category from './Component/Category';
import HomeP from './Component/HomeP';
// import HomeDetail from './Component/HomeDetail';




import Localbox from './Component/Localbox';
import HomeDetail from './Component/HomeDetail';

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
      {/* <Todo1/>
      <UserWihComp isLoading={loading} user={user} />
       <Navbar/>
       <Slider/>
       <h2 style={{ textAlign: 'center' }}>Image Card Gallery</h2>
       <Cards/>
       <About/>
       <Footer/>
       <Home/>``
       <Productdetail/>
       <Api/>
       <Localbox/>
       <Tabale/>
      <Nav /> */}



      {/* {/* <Navbar /> */}
      {/* <Routes>
         <Route path="/Product" element={<Product />}>
          <Route path="ele" element={<ele />} />
        </Route>
        <Route path="/Productdetail/:id" element={<Productdetail />} />
      </Routes> */}

      {/* <Routes>
        <Route path="/Api" element={<Api />}/>
        <Route path="/Card" element={<Card />}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="/Productdetail/:id" element={<Productdetail />} />
      </Routes> */}
{/* 
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/:Category/:id" element={<HomeDetail />} />
        <Route path="/:Category" element={<Category />} />
      </Routes> */}


      {/* <HomeP/> */}

      <Api/>





      {/* <Product /> */}



    </div>
  );
}



