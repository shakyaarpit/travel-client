import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNav = () => {
  return (
    <>
     {/* Blog Page  */}
      <div className="bg-black w-full p-4 flex gap-3">
      <button
        className="btn border-amber-500 hover:bg-amber-500"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        Blog
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-black shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li>
          <NavLink to={"/createBlog"}>Add New Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/blogInAdmin"}>Modify All Blog</NavLink>
        </li>
        
      </ul>
      {/* Plan Page  */}
      <button
        className="btn border-amber-500 hover:bg-amber-500"
        popoverTarget="popover-2"
        style={{ anchorName: "--anchor-2" } /* as React.CSSProperties */}
      >planDetail</button>

      <ul
        className="dropdown menu w-52 rounded-box bg-black shadow-sm"
        popover="auto"
        id="popover-2"
        style={{ positionAnchor: "--anchor-2" } /* as React.CSSProperties */}
      >
        <li>
          <NavLink to={"/addNewPlace"}>Add New Place</NavLink>
        </li>
        <li>
          <NavLink to={"/planInAdmin"}>Modify All Places</NavLink>
         
        </li>
      </ul>
     <div className="indicator">
  {/* <span className="indicator-item badge badge-secondary"></span> */}
  <NavLink to={"/bookOrder"}>

  <button className="btn border-amber-500 hover:bg-amber-500">Booking</button>
  </NavLink>
</div>
      </div>
      </>
  )
}

export default AdminNav