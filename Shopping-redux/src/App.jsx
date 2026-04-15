import { useState } from 'react'
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap'

// EXERCICES :
// Permettre la suppression d'un produit de la liste
// Permettre le changement du statut bought (acheté / non acheté)
// Rajouter un action setFilter permettant de filtrer les produit
// mettre des boutons pour afficher uniquement les produits achetés ou non achetés ou tous !

// useSelector permet de lire le state redux
// useDispatch permet d'envoyer nos actions
import { useSelector, useDispatch } from 'react-redux'

// on importe nos actions du slice
import { addItem, deleteItem, toggleItemStatus, setFilter } from './features/shoppingSlice'


export default function App() {

    // state local pour le formulaire :
    const [productName, setProductName] = useState('');

    // On récupère les items du state global
    const items = useSelector((state) => state.shopping.items)
    const filter = useSelector((state) => state.shopping.filter)

    console.log(items)
    const dispatch = useDispatch();

    let filteredItems = items;

    if (filter === 'bought') {
        filteredItems = items.filter((item) =>
            item.bought === true
        )
    }

    if (filter === 'notBought') {
        filteredItems = items.filter((item) =>
            item.bought === false
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const product = productName.trim()

        if (!product) return

        dispatch(addItem({
            id: Date.now(),
            name: product,
            bought: false,
        }))

        setProductName('')
    }

    console.log(filter)

    return (

        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>Liste d'achat</h1>
                    <Form className="border p-3" onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId="product">
                            <Form.Label>Produit</Form.Label>
                            <Form.Control
                                type="text"
                                name="product"
                                value={productName}
                                placeholder="Ex: pain"
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </Form.Group>
                        <button className="btn btn-outline-primary" type="submit">Ajouter</button>
                    </Form>
                    <hr />
                    <div className=" d-flex justify-content-between my-3">
                        <button className="btn btn-outline-primary" onClick={() => dispatch(setFilter('all'))}>Tous</button>
                        <button className="btn btn-outline-success" onClick={() => dispatch(setFilter('bought'))}>Achetés</button>
                        <button className="btn btn-outline-warning" onClick={() => dispatch(setFilter('notBought'))}>Non achetés</button>
                    </div>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            Liste des produits
                        </ListGroup.Item>
                        {filteredItems.map((item) => (
                            <ListGroup.Item as="li" key={item.id} className="d-flex justify-content-between">
                                <span>
                                    {item.name} : &nbsp;
                                    {item.bought ? <span className="text-success">acheté</span> : <span className="text-danger">non acheté</span>}
                                </span>
                                <div>
                                    <button className="btn btn-outline-success" onClick={() => dispatch(toggleItemStatus(item.id))}>
                                        {item.bought ? 'Annuler' : 'Acheter'}
                                    </button>
                                    &nbsp; 
                                    <button className="btn btn-outline-danger" onClick={() => dispatch(deleteItem(item.id))}>
                                        Supprimer
                                    </button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>


    )





}
