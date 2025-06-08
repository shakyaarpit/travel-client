import React from 'react'

const Footer = () => {
  return (
    <>
    <hr />
    <div className=''>
        <footer className="footer sticky bottom-0 footer-horizontal footer-center bg-base-200 text-base-content rounded p-6">
 
 
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-[18px] font-bold text-amber-500'>Travel@Arpit</span>  </p>
  </aside>
</footer>
    </div>
    </>
  )
}

export default Footer