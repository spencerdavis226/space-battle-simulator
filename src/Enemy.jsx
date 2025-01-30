import PropTypes from 'prop-types';
import './Enemy.css';

const Enemy = ({ health }) => {
  return (
    <div className="enemy-container">
      <h2>Enemy</h2>
      <p>Health: {health}</p>
    </div>
  );
};

Enemy.propTypes = {
  health: PropTypes.number.isRequired, // Ensure health is a required number
};

export default Enemy;
