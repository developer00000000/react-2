import { NavLink,Outlet } from "react-router-dom";
import btn from '../../foto/download.png';
import React,{ useState } from "react";
function Layout(){
   let [isOpen,setIsOpen]=useState(false);
    return(
        <>
          <header>
          <div className="container">
             <nav>
                <h2>LOGO</h2>
                <div className="right__nav">
                    <ul className="for__desctop">
                        <li>
                            <NavLink className='list' to='/'>Modalka</NavLink>
                        </li>
                        <li>
                            <NavLink className='list' to='randomImg'>RandomImg</NavLink>
                        </li>             
                    </ul>
                    <button  onClick={()=>setIsOpen(!isOpen)} className="add__btn" ><img src={btn} alt="" /></button>
                  
                     <div className={`for__phone ${isOpen ? "show" : "hide"}`} id="for__phone" >
                        <li>
                            <NavLink className='list' to='/'>Modalka</NavLink>
                        </li>
                        <li>
                            <NavLink className='list' to='randomImg'>RandomImg</NavLink>
                        </li>             
                    </div>
                </div>
             </nav>
          </div>
          </header>
          <Outlet/>
        </>
    )
}
export default Layout

