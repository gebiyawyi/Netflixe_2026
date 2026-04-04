import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/banner/Banner';
import Rowlist from '../../components/Rows/rowlist/Rowlist';
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist/>
      <Footer />
      
    </>
  );
}

export default Home;

