import { useState } from 'react'

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'

import products from './data/products.json'

import './App.css'


const allCategories = products.map(product => product.category)

const categories = allCategories.filter((category, index, array) => {
  return array.findIndex(c => c.id === category.id) === index;
})

const allTags = products.flatMap(product => product.tags)
// const allTags = [ ... new Set(products.map(product => product.tags))]
const tags = allTags.filter((tag, index, array) => {
  return array.findIndex(t => t.id === tag.id) === index;
})
// const tags = allTags.filter((tag, index, array) => {
//   return array.findIndex(t => t.id === tag.id) === index;
// })

console.log(categories)
console.log(tags)


function App() {

  return (
    <>
      <Header />
      <Nav />
      <main className="container mt-5">
        <div className="row">
          <Sidebar
            categories={categories}
            tags={tags}
          />
          <ProductList 
            products={products}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
