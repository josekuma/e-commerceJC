
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, BrowserRouter, Route } from "react-router-dom"
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { useEffect } from 'react';
import {auth} from "./firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { actionTypes } from './reducer';
import { useStateValue } from './components/StateProvider';

function App() {
const [{user}, dispatch]=useStateValue();
  useEffect(()=>{
      onAuthStateChanged(auth, (authUser)=>{
        if(authUser){
          dispatch({
            type: actionTypes.SET_USER,
            user: authUser,
          })
        
        }
      })
  },[])
  return (


    <BrowserRouter>

      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Products />}/>
          <Route path="checkout-page" element={<CheckoutPage />}/>
         <Route path="signin" element={<SignIn/>}/>
         <Route path="signup" element={<SignUp/>}/>
        </Routes>

      </div>
    </BrowserRouter>





  );
}

export default App;
