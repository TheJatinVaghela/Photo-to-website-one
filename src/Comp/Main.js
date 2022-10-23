import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import Afterhero from './Afterhero'
import Photocase from './Photocase'
import Imgtextcards from './Imgtextcards'
import Lastafterhero from './Lastafterhero'

const Main = props => {
  return (
    <>
   
       <Hero/>
       <Afterhero/>
       <Photocase/>
       <Imgtextcards/>
       <Lastafterhero/>
       
      
    </>
  )
}

Main.propTypes = {

}

export default Main
