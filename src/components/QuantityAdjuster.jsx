import PropTypes from 'prop-types';
import '../styles/QuantityAdjuster.css';

function QuantityAdjuster({ quantity, handleDecrease, handleInput, handleIncrease }) {
  return (
    <div className="quantity">
      <button className="increment-btn" onClick={handleDecrease}>
        <img src="/minus.svg" alt="" />
      </button>
      <input type="text" value={quantity} pattern="^[0-9]*$" onChange={handleInput} />
      <button className="increment-btn" onClick={handleIncrease}>
        <img src="/plus.svg" alt="" />
      </button>
    </div>
  );
}

QuantityAdjuster.propTypes = {
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleDecrease: PropTypes.func,
  handleInput: PropTypes.func,
  handleIncrease: PropTypes.func,
};

export default QuantityAdjuster;
