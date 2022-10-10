import React from "react";
import { Link } from "react-router-dom";
import * as Faicons from "react-icons/fa"
import { useState } from 'react'
import {SidebarData} from './SidebarData'
import './Navbar.css'


function Navbar(props){
    //   const [sidebar,setSidebar] = useState(false) 
    // const [sidebar,setSidebar] = useState(true)
    //   const showSidebar=()=>setSidebar(props.sidebarstatus)
    //   console.log(props.sidebarstatus);
    return(
        <>
          <nav className={props.sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className="nav-menu-items">

                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>  
          </nav> 
        </>
    )
}

export default Navbar