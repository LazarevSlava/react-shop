import { useContext } from 'react';
import { ShopContext } from './context';
import { BasketItem } from './Basketitem';

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <div className="collection basket-list">
            <ul className="collection-item active">Корзина</ul>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <ul className="collection-item">Корзина пуста</ul>
            )}
            <ul className="collection-item active">
                Общая стоимость: {totalPrice} руб.
                <button className="secondary-content btn-small">
                    Оформить
                </button>
            </ul>
            <li>
                <button
                    onClick={handleBasketShow}
                    className="material-icons basket-close"
                >
                    close
                </button>
            </li>
        </div>
    );
}
export { BasketList };
