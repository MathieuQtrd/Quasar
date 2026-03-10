

const CategoriesList = ({categories = []}) => {
  return (
    <ul className="list-group">
      <li className="list-group-item bg-dark text-white ">Catégories</li>
      { categories?.map(categorie => (
        <li className="list-group-item cursor" key={categorie.id}>{categorie.name}</li>
      )) }
    </ul>
  )
}

export default CategoriesList
