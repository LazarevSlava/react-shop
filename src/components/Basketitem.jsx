import { useContext } from 'react';
import { ShopContext } from './context';

function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);

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
