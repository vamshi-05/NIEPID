import React, { useEffect } from "react";
import { useNavigate , NavLink} from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
 
  return (
    <>
      <div >
        {/* TODO: design something cool , Navbar , navbar should contain logout admin link and class link heading and other shit */}
        
        <NavLink to="/login"> Admin          </NavLink>
        <NavLink to="/login"> student   </NavLink>
        <NavLink to="/login"> teacher   </NavLink>
        <NavLink to="/login"> principle   </NavLink>
      </div>
    </>
  );
}
