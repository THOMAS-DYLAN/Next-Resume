import React from 'react'

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="name">Dylan Thomas <br/><p className="position">Web Developer</p></h1>
      <ul className="list">
        <li className="item"><a href="/index">Home</a></li>
        <li className="item"><a href="/about">About</a></li>
        <li className="item"><a href="/skills">Experience</a></li>
        <li className="item"><a href="/gallery">Gallery</a></li>
      </ul>
    </div>
  )
}

export default Nav;