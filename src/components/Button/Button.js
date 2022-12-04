import PropTypes from 'prop-types';
import './Button.css';

function Button({text = "Кнопка", children, onClick, disabled=false}) {
    return(
        <button className="CommonButton" disabled={disabled} onClick={onClick}>{ children }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;