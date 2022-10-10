import React from "react";
import { Link } from "react-router-dom";
import * as Faicons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as AiIcons from "react-icons/ai"



export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<Faicons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title:'Messages',
        path:'/',
        icon:<Faicons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]