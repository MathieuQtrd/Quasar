import CategoriesList from "./CategoriesList"
import InputGroup from "./InputGroup"
import Button from "./Button"

// const categories = [
//     { id: 1, name: "Burger" },
//     { id: 2, name: "Pizza" },
//     { id: 3, name: "Kebab" },
//     { id: 4, name: "Poulet Frît" },
//     { id: 5, name: "Accompagnements" }
// ]

// const tags = [
//     { id: 1, name: "Boeuf", href: "boeuf" },
//     { id: 2, name: "Agneau", href: "agneau" },
//     { id: 3, name: "Tomate", href: "tomate" },
//     { id: 4, name: "Oignons", href: "oignons" },
//     { id: 5, name: "Emmental", href: "emmental" }
// ]

const Sidebar = ({categories, tags}) => {
    return (
        <div className="col-sm-3">
            <CategoriesList
                categories={categories}
            />
            <div className="my-3 border p-3">
                <InputGroup
                    groupText="€"
                    type="text"
                    name="prix"
                    classList="form-control"
                    placeholder="Filtrer par prix"
                />
            </div>
            <div className="my-3 border p-3">
                <InputGroup
                    groupText="abc"
                    type="text"
                    name="tag"
                    classList="form-control"
                    placeholder="Filtrer par mot clés"
                />
            </div>
            <div className="my-3 border p-3">
                {tags?.map(tag => (
                    <Button 
                        key={tag.id}
                        name={tag.name}
                        href={tag.href}
                        classList="btn btn-outline-dark me-1 mb-1 btn-sm"
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
