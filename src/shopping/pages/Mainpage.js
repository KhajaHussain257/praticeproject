import React , {useState} from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import {Gents , Ladies} from '../data';
import Womancollection from '../components/Womancollection';
export const Mainpage = () => {
  const[gentsFachion , setGentsFachion]= useState(Gents)
  const[ladiesFashion , setLadiesFashion] = useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFachion={gentsFachion}/>
      <Womancollection ladiesFashion={ladiesFashion}/>
      <Footer/>

    </div>
  )
}
export default Mainpage;