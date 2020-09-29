import React from 'react'
import Header from '../Components/Header/Header'
import Section from '../Components/Section/Section'
import Footer from '../Components/Footer/Footer'
import Form from '../Components/Form/Form'


export default function App() {
  return (
    <div className="body-container">
      <header><Header /></header>
      <main><Section /></main>
      <form action="#"><Form /></form>
      <footer><Footer /></footer>
    </div>
  )
}

