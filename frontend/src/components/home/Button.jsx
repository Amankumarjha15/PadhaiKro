import React from 'react'
import { Link } from 'react-router-dom'

function Button({link , active , text}) {
  return (
    <Link to={link}>
        <div className={`hover:scale-95 duration-200 text-center text-sm px-6 py-3 rounded-md font-bold ${active ? "bg-yellow-50 text-black": "bg-richblack-800"}`}>
            {text}
        </div>
    </Link>
  )
}

export default Button