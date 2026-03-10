
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

const Article = ({img, title, keywords = [], tags, text}) => {
    // console.log(props)
    return (
        <div className="col-md-6 mb-3">
            <img src={img.src} alt={img.alt} className='img-fluid' />
            <h2 className="my-3">{title}</h2>

            { tags?.map(tag => (
                <a href={`/tags/${tag.name}`} className="btn btn-outline-dark me-2 mb-2" key={tag.id}>{tag.name}</a>
            )) }

            <hr />
            <p>
                {text}
            </p>
        </div>
    )
}
export default Article