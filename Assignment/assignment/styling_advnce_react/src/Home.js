import React from 'react'
import './Style.css'
import img1 from './img/imgb1.jpge.jpg'
import img2 from './img/imgb2.jpge.jpg'
import img3 from './img/img3.jpge.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import img9 from './img/img9.jpg'
import img10 from './img/img10.jpg'
import img11 from './img/img11.jpg'
import img12 from './img/img12.jpg'
import img13 from './img/img13.jpg'
import img14 from './img/img14.jpg'
import img15 from './img/img15.jpg'
import img16 from './img/img/b2.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
  
  
  <div class="section1">
    <div class="main">
    <div class="img">
    <img src={img1}/>
   </div>
    <div class="text">
      <p> United States, CA 902 </p>
      <h1> California, 75 West Rock, Maple Building </h1>
      <div class="icon">
      <a ><i class="fa-solid fa-house-chimney" ></i></a>
      <a class="a1"><i class="fa-solid fa-house-chimney"></i></a>
      <a class="a2"><i class="fa-solid fa-house-chimney"></i></a>
      <a class="a3"><i class="fa-solid fa-house-chimney"></i></a>
    </div>
      <div class="text1">
      <p>1600 sq.ft </p>
      <p>2 Bedrooms </p>
      <p>7 Rooms </p>
     <p>3 Bathrooms</p>
    </div>
     <div class="btn">
     <button class="check">check property</button>
    </div>
  </div>
  </div>
  </div>

  {/* .section2  */}

  <div class="section2">
    <div class="left">
      <div class="img1">
        <img src={img2} />
      </div>
    </div>
    <div class="right">
      <div class="text">
        <h2>Search Property From Any where </h2>
        <p>Mollitia placeat modi explicabo voluptatum corporis unde Dicta, provident! Rem adipisci Mollitia placeat modi
          explicabo voluptatum corporis unde? Dicta, provident! Rem adipisci consectetur adipisicing elit. Deleniti
          possimus culpa nemo asperiores aperiam mollitia, maiores fugiat tempor Vero est. </p>
        <button>Read More</button>
      </div>
    </div>
  </div>

{/* .section3  */}
  <div class="section3">
    <div class="left">
      <div class="img">
        <img src={img3}/>
      </div>
      <div class="text">
        <a><i class="fa-solid fa-house-chimney" style={{color:"whitesmoke"}}></i></a>
        <p>General Contracting</p>
      </div>
    </div>
    <div class="right">
      <div class="img1">
        <img src={img4}/>
      </div>
      <div class="text1">
        <a><i class="fa-solid fa-users" style={{ color :'#ffa372'}}></i></a>
        <p class="p1">Best Team</p>
        <p>Assumenda temporibus quidem ipsam. Voluptate fuga corporis iusto similique voluptates sint quibusdam. </p>
      </div>
    </div>
  </div>

  {/* <!-- .section4 --> */}
  <div class="section4">
    <div class="left">
      <div class="text">
        <p class="p2">Full Project management</p>
        <p>Assu menda tempo ribus quidem ipsam. Voluptate fuga corporis iusto simi lique volup tates sint quib usdam
          assu menda temp oribus quidem ipsam. Voluptate fuga corporis iusto similique. </p>
        <button>Read More</button>
      </div>
    </div>
    <div class="right">
      <div class="img">
        <img src={img5} alt="s2"/>
      </div>
    </div>
  </div>

   {/* .section5  */}
  <div class="section5">
    <div class="left">
      <div class="img">
        <img src={img6}/>
      </div>
    </div>
    <div class="right">
      <div class="text">
        <div class="text1">
          <h3>Efficient Building</h3>
          <p>Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque soluta
            impedit</p>
        </div>
        <div class="text2">
          <h3>Financial Result</h3>
          <p>Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque soluta
            impedit</p>
        </div>
        <div class="text3">
          <h3>General Constracting</h3>
          <p>Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque soluta
            impedit</p>
        </div>
        <div class="text4">
          <h3>Interior Desgin</h3>
          <p>Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque soluta
            impedit</p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- section6 --> */}
  <div class="section6">
    <div class="text">
      <h1>MOST POPULAR PLACES </h1>
      <p>Properties In Most Popular Places </p>
    </div>
    <div class="img">
      <div class="gallry">
        <div class="s1">
          <img src={img7} />
          <div class="text1">
            <p>Australia</p>
          </div>
        </div>

        <div class="s1">
          <img src={img8} />
        
        <div class="text1">
          <p>Haiti</p>
        </div>
      </div>

        <div class="s1">
          <img src={img9}/>
          <div class="text1">
            <p>Guinea</p>
          </div>
        </div>

        <div class="s1">
          <img src={img10}/>
          <div class="text1">
            <p>Qatar</p>
          </div>
        </div>

        <div class="s1">
          <img src={img11}/>
          <div class="text1">
            <p>Romania</p>
          </div>
        </div>

        <div class="s1">
          <img src={img12}/>
          <div class="text1">
            <p>Jamaica</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- .section7 --> */}
  <div class="section7">
    <div class="options">
      <div class="image">

        <div class="text">
          <div class="left">
            <p>Consectetur adipis icing Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt adipis icing
              Lorem ipsum.</p>
              <div class="text1">
                <img src={img13}/>
                <div class="jack">
                  <h4>Jack Willson </h4>
                  <p>Rented Apartment </p>
                </div>
              </div>    
          </div>
          
          <div class="right">
            <p>Consectetur adipis icing Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt adipis icing
              Lorem ipsum. </p>
              <div class="text2">
             <img src={img14}/>
             <div class="jack2">
            <h4>Lily Maxson </h4>
            <p>Bought House </p> 
          </div>
          </div>
        </div>
          <div class="bot">
            <p>Consectetur adipis icing Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt adipis icing
              Lorem ipsum.</p>
              <div class="text3">
           <img src={img15}/>
           <div class="jack3">
            <h4>Bought House </h4>
            <p>Sold Apartment </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- .section8 --> */}
   <div class="section8">
    <div class="options">
    
      <div class="right">
        <h2>Dweller</h2>
        <p>Adipisicing elit. Lauda ntium, archi tecto iure Lorem incidunt iosam qui quo moll itia veniam recus andae archi tecto earum suscipit exce pturi dicta nemo quam.  </p>
      </div>
      <div class="left">
        <ul>HELPFUL LINKS </ul>
        <li>Home</li>
        <li>About</li>
        <li>Conact</li>
      </div>
      <div class="end">
        <ul>CONTACT US</ul>
        <li>E-mail:mail@company.com </li>
        <li>Phone:+(12)-00 222 00008 </li>
        <li>California, 75 West Rock, Maple Building. </li>
      </div>
    </div>
      </div>
 
   {/* <!-- .section9 --> */}
   <div class="section9">
    <div class="text">
      <p>© 2020 Dweller All rights reserved | Design by <span>W3layouts</span></p>
    </div>
   </div>

    </>
  )
}

export default Home
