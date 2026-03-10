import ProductCard from "./ProductCard"

// const products  = [
//     {
//         id: 1,
//         name: "Pizza Margarita",
//         img: {
//             src: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
//             alt: "Image pizza margarita"
//         },
//         price: 11,
//         tags: [
//             { id: 1, name: "Tomate", href: "tomate" },
//             { id: 2, name: "Emmental", href: "emmental" },
//             { id: 3, name: "Champignons", href: "champignons" }
//         ],
//         category: "Pizza"
//     }
// ]
const ProductList = ({products}) => {
  return (
    <div className="col-sm-9">
      <div className="row">
      { products?.map(product => (
        <ProductCard 
            key={product.id}
            classList="col-sm-4 mb-3"
            product={product}
        />
      )) }
      </div>
    </div>
  )
}

export default ProductList
