import PropTypes from 'prop-types'

const Button = ({color, text, onAdd}) => {
    return (
        <div>
            <button onClick={onAdd} style={{backgroundColor: color}}
            className='btn'>
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
