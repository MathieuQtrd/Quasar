import { useState, useContext } from 'react'

import { Container, Row, Form, InputGroup, Col, Button } from 'react-bootstrap'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import SearchContext from './context/SearchContext'


import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'

// La  balise <></> représente la balise <Fragment></Fragment> qui permet de représenter un élément parent qui ne sera pas répercuté dans la page web
// On importe les images
// import articles from "./data/data"
import articles from "./data/data.json"



function App() {

  const {search, setSearch} = useContext(SearchContext)
  // React va ; 
    // stocker la nouvelle valeur en interne
    // relancer le composant
    // recréer une nouvelle constante avec la nouvelle valeur

  const filterArticle = articles.filter(article => {
    const value = search.toLowerCase()

    const articleTitle = article.title.toLowerCase().includes(value)
    const articleTag = article.tags.some(tag =>
      tag.name.toLowerCase().includes(value)
    )

    return articleTitle || articleTag
  })

  const articleList = filterArticle.map(article => (
    <Article
      key={article.id}
      title={article.title}
      img={article.img}
      text={article.text}
      tags={article.tags}
      // onTagClick={handleClick}
    />
  ))

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData.get("search"))
    setSearch(formData.get("search"))
  }

  function handleClick(name) {
    // e.preventDefault()
    console.log(name)
    setSearch(name)
  }


  return (
    <>
      { /* Commentaire en JSX */}

      <Menu />
      <Header />

      <Container>
        <Row>
          <Col className='mb-3'>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Rechercher"
                  name="search"                  
                />
                <Button variant="outline-dark" id="button-addon2" type="submit">
                  Rechercher
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          {articleList}
        </Row>
      </Container>

      <Footer />

    </>
  )
}

export default App

