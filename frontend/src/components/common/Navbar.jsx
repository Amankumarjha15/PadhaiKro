import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const matchRoute = (value) => {
             return matchPath({path:value} , location.pathname)
    }
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-600'>
        <div className="flex w-11/12 max-w-maxContent item-center justify-between">
            <Link to={"/"}>
               <h1 className='text-2xl text-richblue-100 font-inter font-bold'>PadhaiKro</h1>
            </Link>
            {/* navlinks */}

            <nav>
                <ul className='flex gap-x-6 ring-richblack-25'>
                   {
                      NavbarLinks.map((link , index) => (
                        <li key={index}>
                            {
                                link.title === "Catalog" ? (
                                 <div></div>
                                )
                                 : 
                                (
                                <Link to={`${link.path}`}>
                                    <p className={`${matchRoute(link.path) ? "text-yellow-25" : "text-richblack-25"}`}>{link.title}</p>
                                </Link>)
                            }
                        </li>
                      ))
                   }
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar