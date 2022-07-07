import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from "../components/HeroImg"
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>

      <div className='intro'>
        <p>안녕, 힘차고 강한 아침!<br></br> 
          이제부터 내 소개를 시작한다.<br></br>다들 주목!</p>
      </div>
    </div>
  )
}

export default Home