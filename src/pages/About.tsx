import { linearGradient } from 'motion/react-client'
import React from 'react'
import App from '../App'
import NavBar from '../NavBar'

export default function About() {
  return (
    <div style={aboutsectiion}>
       
       <NavBar />

    </div>
  )
}

const aboutsectiion : React.CSSProperties = {
    background: 'red'
}
