import { BasketItem } from './Basketitem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <div className="collection basket-list">
            <ul className="collection-item active">Корзина</ul>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <ul className="collection-item">Корзина пуста</ul>
            )}
            <ul className="collection-item active">
                Общая стоимость: {totalPrice} руб.
                <button className="secondary-content btn-small">
                    Оформить
                </button>
            </ul>
            <span onClick={handleBasketShow} className="basket-close">
                <i className="material-icons">close</i>
            </span>
        </div>
    );
}
export { BasketList };
