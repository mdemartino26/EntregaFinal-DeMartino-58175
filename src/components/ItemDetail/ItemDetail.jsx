import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, img, stock, category, descrip}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Descripcion: {descrip}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail