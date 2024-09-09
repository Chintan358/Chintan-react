import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
         <header1>
    <div class="hemali">
      <div class="left">
        <p class="sel">Get in Touch</p>
        <p class="sele ">Email us at</p>
        <p class="sele2">Call us today </p>

        <div class="head1">
          <i class="cal">California, 75 West Rock</i>
          <i class="for">mail@esate.com</i>
          <i class="num">+(12)-00 222 00008</i>
        </div>
      </div>
      <div class="right">
        <a><i class="fa-solid fa-magnifying-glass"></i>find property</a>

      </div>
    </div>
  </header1>
 
  <header>
    <div class="parth" id="myHeader">
      <div class="left">
        <h1>Dweller</h1>
      </div>
      <div class="right">
        <ul>
          <li><Link to={'/'} class="abo">Home</Link></li>
          <li><Link to={'/about'} class="abo">About</Link></li>
          <li><Link to={'/contact'} class="con">Conact</Link></li>
        </ul>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header
