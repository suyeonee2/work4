import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import '../routes/Profile.css'
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'


const Profile = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>

      <div className='book-container'>
      <div className='book-contents'>
        <a target="_blank" rel="noreferrer" href='http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9791196372170'>
        <img className='book1' src={book1} alt=''/></a>
        <h1> ⟪갖다 버리고 싶어도 내 인생⟫ <br>
        </br>2019, 턴어라운드</h1>
        </div>

        <div className='book2-contens'>
        <a target="_blank" rel="noreferrer" href='http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9791192097190'>
        <img className='book2' src={book2} alt=''/></a>
        <h1> ⟪스물넷, 나는 한 번 죽은 적이 있다⟫<br>
        </br>2022, 웨일북</h1>
        </div>
      </div>
      </div>
  )
}
export default Profile