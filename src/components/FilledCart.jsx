import CartItem from './CartItem';
import PropTypes from 'prop-types';

function FilledCart({ selectedItems, setSelectedItems }) {
  return (
    <div className="cart-items">
      {selectedItems.map((obj) => {
        return (
          <CartItem
            key={obj.id}
            objId={obj.id}
            imgUrl={obj.image}
            title={obj.title}
            price={obj.price}
            quantity={obj.quantity}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        );
      })}
    </div>
  );
}

FilledCart.propTypes = {
  selectedItems: PropTypes.array,
  setSelectedItems: PropTypes.func,
};

export default FilledCart;
