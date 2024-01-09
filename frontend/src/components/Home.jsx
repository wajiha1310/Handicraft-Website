
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer.jsx';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Home = () => {

  return (
    
    <>
    <div>
      <div>
         {/* using inline css in react */}
         <h1 style={{fontSize:70 , textAlign:'center', textDecoration:'underline'}}>Welcome To Home Page</h1>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGsDVKFlMBs1cIGAAFeHHJBTXWyZAJ7IEOQ&usqp=CAU' className='d-block w-80'alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://i.pinimg.com/736x/f9/92/a3/f992a3b72fef1b182fa00137a6920894.jpg' className='d-block w-20'alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide> 
        <img src='https://i.pinimg.com/236x/77/6b/9b/776b9bc2e38f6d4cfcb3fbf66f5d0358.jpg' className=''alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRgNeyYKhROtldtywLmoy6TqA8U56Ln_TlTwEb84HJJpNn90U4Oz6teARhpGbn5mv95g&usqp=CAU' className=''alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://www.creativekalakari.in/wp-content/uploads/2018/04/Handmade-Things.jpg' className=''alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrhdl0K6xarUZaOUw6dyTh005FQWmv8aNxSvFt6FzngnZN_rKn1jpE6FfJ2Kdq9wNfyQ&usqp=CAU' className=''alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://cdn.vibecity.in/providers/63cba171c2b90f0012743a9a/IMG-20230121-WA0014_b6afeded-8188-4fb1-b09d-2329f6379727-3X.png' className=''alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbLOJFdY4bZn5JFAjNe6iStTSrkSNWwIPhMmDK3GBPcntqcc8pUt3ruByeDZT7Kn8I1E&usqp=CAU' className=''alt='...' height='200px'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://5.imimg.com/data5/SELLER/Default/2022/1/QL/LI/AF/93270330/new-product-500x500.jpeg' className=''alt='...' height='200px'/>
        </SwiperSlide>
      </Swiper>
      <Footer/>
      </div>
    </>
  
  );
}
export default Home;





