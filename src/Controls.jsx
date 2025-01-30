import PropTypes from 'prop-types';
import './Controls.css';

const Controls = ({ gameStatus, onAttack, onRestart }) => {
  return (
    <div className="controls-container">
      {/* Hide Fire button when game is over */}
      {gameStatus === 'Ongoing' && <button onClick={onAttack}>Fire!</button>}
      {/* Show Restart button when game is over */}
      {gameStatus !== 'Ongoing' && (
        <button onClick={onRestart}>Restart?</button>
      )}
    </div>
  );
};

Controls.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  onAttack: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Controls;
