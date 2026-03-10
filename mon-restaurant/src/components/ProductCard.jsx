import Button from "./Button"
const Card = ({product, classList}) => {
    return (
        <div className={classList}>
            <div className="card">
                <img src={product.img.src} alt={product.img.alt} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title pb-3 border-bottom d-flex justify-content-between">
                        <span>{product.name}</span>
                        <span>{product.price} €</span>
                    </h5>
                    {product.tags.length > 0 && (
                        <p className="card-text py-2 border-bottom">
                            {product.tags?.map(tag => (
                                <Button
                                    key={tag.id}
                                    name={tag.name}
                                    href={tag.href}
                                    classList="btn btn-outline-dark me-1 mb-1 btn-sm"
                                />
                            ))}
                        </p>                        
                    )}
                    <Button
                        id={product.id}
                        name="Ajouter au panier"
                        href={""}
                        classList="btn btn-outline-primary w-100"
                    />
                </div>
            </div>
        </div>
    )
}

export default Card
