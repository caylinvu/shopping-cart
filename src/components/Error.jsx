import PropTypes from 'prop-types';

function Error({ error }) {
  return (
    <div className="error">
      There is a problem fetching the shop data - {error}. Please try again.
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
