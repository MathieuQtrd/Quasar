import { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'

import SearchContext from '../context/SearchContext'
// const Article = (props) => {
//     console.log(props)
//     return (
//         <div className="col-12">
//             <img src={props.img.src} alt={props.img.alt} className='img-fluid' />
//             <h2 className="my-3">{props.title}</h2>

//             { props.keywords.map((name, index) => (
//                 <a href={"/keywords/" + name} className="btn btn-outline-dark me-2 mb-2" key={index}>{name}</a>
//             )) }

//             <hr />

//             { props.tags.map(tag => (
//                 <a href={`/tags/${tag.name}`} className="btn btn-outline-dark me-2 mb-2" key={tag.id}>{tag.name}</a>
//             )) }

//             <hr />
//             <p>
//                 {props.text}
//             </p>
//         </div>
//     )
// }

// export default Article

// il est de passer des valeur par défaut à nos props keywords = []
// const Article = ({img, title, keywords = [], tags, text}) => {
//     // console.log(props)
//     return (
//         <div className="col-12">
//             <img src={img.src} alt={img.alt} className='img-fluid' />
//             <h2 className="my-3">{title}</h2>

//             { keywords.map((name, index) => (
//                 <a href={"/keywords/" + name} className="btn btn-outline-dark me-2 mb-2" key={index}>{name}</a>
//             )) }

//             <hr />

//             { tags.map(tag => (
//                 <a href={`/tags/${tag.name}`} className="btn btn-outline-dark me-2 mb-2" key={tag.id}>{tag.name}</a>
//             )) }

//             <hr />
//             <p>
//                 {text}
//             </p>
//         </div>
//     )
// }

// on vérifie si ça existe : 
// { keywords && keywords.map((name, index)  ...
// ou 
//  { tags?.map(tag => ( ...
// const Article = ({img, title, keywords = [], tags, text}) => {
//     // console.log(props)
//     return (
//         <div className="col-12">
//             <img src={img.src} alt={img.alt} className='img-fluid' />
//             <h2 className="my-3">{title}</h2>

//             { keywords && keywords.map((name, index) => (
//                 <a href={"/keywords/" + name} className="btn btn-outline-dark me-2 mb-2" key={index}>{name}</a>
//             )) }

//             <hr />

//             { tags?.map(tag => (
//                 <a href={`/tags/${tag.name}`} className="btn btn-outline-dark me-2 mb-2" key={tag.id}>{tag.name}</a>
//             )) }

//             <hr />
//             <p>
//                 {text}
//             </p>
//         </div>
//     )
// }

const Article = ({ img, title, keywords = [], tags, text }) => {
    // console.log(props)
    const {setSearch} = useContext(SearchContext)
    return (
        <Col md={4} className="mb-3">
            <Card>
                <Card.Img variant="top" src={img.src} alt={img.alt} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>

                {tags?.map(tag => (
                    <Button 
                        as="span" 
                        className="me-2 mb-2" 
                        variant="outline-dark"
                        key={tag.id}
                        onClick={() => setSearch(tag.name)}
                    >
                        {tag.name}
                    </Button>
                ))}

                <hr />
                <Card.Text>
                    {text}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Article