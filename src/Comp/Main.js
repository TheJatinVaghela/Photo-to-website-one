import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import Afterhero from './Afterhero'
import Photocase from './Photocase'

const Main = props => {
  return (
    <>
   
       <Hero/>
       <Afterhero/>
       <Photocase/>
       
      
    </>
  )
}

Main.propTypes = {

}

export default Main
