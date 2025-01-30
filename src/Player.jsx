import PropTypes from 'prop-types';
import './Player.css';

const Player = ({ health }) => {
  return (
    <div className="player-container">
      <h2>Player</h2>
      <p>Health: {health}</p>
    </div>
  );
};

Player.propTypes = {
  health: PropTypes.number.isRequired, // Ensure health is a required number
};

export default Player;
