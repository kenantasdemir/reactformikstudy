import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-dark d-flex justify-content-around ">
            <Link className='text-decoration-none text-light' to="/custom">Custom Komponentleri İncele</Link>
            <Link className='text-decoration-none text-light' to="/register">Validasyonu YUP ile sağlanan forma git</Link>
    </div>
  )
}

export default Navbar