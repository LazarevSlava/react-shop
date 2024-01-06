function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <ul className="collection-item">
            {name} x <button onClick={() => decQuantity(id)}>-</button>
            {quantity} <button onClick={() => incQuantity(id)}>+</button>={' '}
            {price * quantity} руб.
            <span
                onClick={() => removeFromBasket(id)}
                className="secondary-content basket-delete"
            >
                <i className="material-icons">close</i>
            </span>
        </ul>
    );
}
export { BasketItem };
