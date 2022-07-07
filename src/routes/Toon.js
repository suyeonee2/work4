import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import '../routes/Toon.css'
import ep1_1 from '../assets/ep1/ep1_1.JPG'
// import ep2_6 from '../assets/ep2/ep2_6.JPG'
// import ep3_2 from '../assets/ep3/ep3_2.JPG'


const Portfolio = () => {


  return (
    <div>
      <Navbar/>
      <HeroImg/>
     

      <div className='toon_head'>
      <p>
      <h1>⟪스물넷, 나는 한 번 죽은 적이 있다⟫</h1>
      <h3>달고, 짜고, 떫고, 시고, 매운 삶에 대해 그립니다.</h3>
      </p>
      </div>


      <div className="feed-main">
        <article className='post1'>
            <div className='article-body'>
            <div className='ep1-control'>
                <a target="_blank" rel="noreferrer" href='https://posty.pe/qzk4nt #일상 #일상툰 #웹툰 #그림일기 #책 #postype'>
                <h3>인간은 왜 실수를 반복할까 - 1화</h3>
                <h4>"이제부터 네 골수를 뽑을 거야"</h4></a>
              <a target="_blank" rel="noreferrer" href='https://posty.pe/qzk4nt #일상 #일상툰 #웹툰 #그림일기 #책 #postype'>
              <img className='ep1' src={ep1_1} alt=""/></a>

              </div>
          </div>
        </article>
      </div>


      {/* <div className='sumlist'>
        <a target="_blank" rel="noreferrer" href='' />
        <img className='ep1' src={ep1_1} alt=""/>
        <h1>인간은 왜 실수를 반복할까 - 1화</h1>
        <h3>"이제부터 네 골수를 뽑을 거야."</h3>


         <a target="_blank" rel="noreferrer" href="" />
        <img className='ep2' src={ep2_6} alt=""/>
        <h1>인간은 왜 실수를 반복할까 - 2화</h1>
        <h3>같은 실수를 저지르지 않으려면.</h3>


         <a target="_blank" rel="noreferrer" href="" />
        <img className='ep3' src={ep3_2} alt=""/>
        <h1>인간은 왜 실수를 반복할까 - 3화</h1>
        <h3>"너를 권태 속에 쑤셔넣은 범인은, 네 자신이야."</h3>
        
        </div> */}
      </div>
  )
}

export default Portfolio