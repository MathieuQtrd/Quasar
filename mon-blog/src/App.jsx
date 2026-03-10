import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'

// La  balise <></> représente la balise <Fragment></Fragment> qui permet de représenter un élément parent qui ne sera pas répercuté dans la page web
// On importe les images
// import articles from "./data/data"
import articles from "./data/data.json"



const articleList = articles.map(article => (
  <Article 
    key={article.id}
    title={article.title}
    img={article.img}
    text={article.text}
    tags={article.tags}
  />
))


function App() {

  return (
    <>
      { /* Commentaire en JSX */}

      <Nav />
      <Header />
      
      <main className='container'>
        <div className="row">
          {articleList}          
        </div>
      </main>

      <Footer />

    </>
  )
}

export default App

