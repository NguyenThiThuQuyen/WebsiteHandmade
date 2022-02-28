import React from 'react'
import CenterMode  from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Slide from '../../components/Slide/Slide'


function Home() {
  return (
    <div className='bg-color'>
        <Header />
        <Slide />
        <CenterMode />
    </div>
  )
}

export default Home