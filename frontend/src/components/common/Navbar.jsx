import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"

function Navbar() {
    
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)








    // const [subLinks, setSubLinks] = useState([])
    // const [loading, setLoading] = useState(false)
  
    // useEffect(() => {
    //   ;(async () => {
    //     setLoading(true)
    //     try {
    //       const res = await apiConnector("GET", categories.CATEGORIES_API)
    //       setSubLinks(res.data.data)
    //     } catch (error) {
    //       console.log("Could not fetch Categories.", error)
    //     }
    //     setLoading(false)
    //   })()
    // }, [])












    const location = useLocation();
    const matchRoute = (value) => {
             return matchPath({path:value} , location.pathname)
    }
  return (
    <div className='flex h-20 items-center justify-center border-b-[1px] border-b-richblack-600'>
        <div className="flex w-11/12 max-w-maxContent item-center justify-between">
            <Link to={"/"}>
               <h1 className='text-2xl text-richblue-100 font-inter font-bold'>PadhaiKro</h1>
            </Link>
            {/* navlinks */}
 
            <nav>
                <ul className='flex items-center justify-center gap-x-6 ring-richblack-25'>
                   {
                      NavbarLinks.map((link , index) => (
                        <li key={index}>
                           {
                                <Link to={`${link.path}`}>
                                    <p className={`${matchRoute(link.path) ? "text-yellow-25" : "text-richblack-25"}`}>{link.title}</p>
                                </Link>
                            }
                        </li>
                      ))
                   }
                </ul>
            </nav>








            {/* login signup dashboard */}



            



        <div className="flex items-center gap-4">
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {/* {token !== null && <ProfileDropdown />} */}
        </div>




            











        </div>
    </div>
  )
}

export default Navbar