import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense } from 'react';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PrivateRoutes from "./middleware/PrivateRoutes"
import {UserContext} from "./middleware/Context"

function App() {
      
  let fetchUsers = fetch("http://localhost:8000/api")
      .then(res=>res.json())
      .then(data=>{
        data.forEach(ele=>{
          if(ele._id === localStorage.getItem("id")){
            return data
          }
        })
      });

  const registerUser = async (user) => {
    const res = await fetch("http://localhost:8000/register", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"      
      },
      body: JSON.stringify(user)
    });
  
    const data = await res.json();
    localStorage.setItem("id", data.user._id);
    window.location.reload();

}


const loginUser = async (user) => {
  
  const res = await fetch("http://localhost:8000/login", {
  credentials: "same-origin",
  method: "POST",
  headers: {
    "Content-type": "application/json"      
  },
  body: JSON.stringify(user )
})

const data = await res.json();
localStorage.setItem("id", data.user._id);
window.location.reload();

}




const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const Account = React.lazy(() => import("./pages/Account"));
const AddAudio = React.lazy(()=> import("./components/PostAudio"));


  return (
    <UserContext.Provider value={fetchUsers}>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register onAdd = {registerUser}/>} />
            <Route path="/login" element={<Login onAdd = {loginUser} />} />
        <Route element={<PrivateRoutes />}>
            <Route path="/addAudio" element={<AddAudio/>}/>
            <Route element = {<Account />} path = "/account"/>
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
    </Suspense>
    </UserContext.Provider>
  );

}

export default App;