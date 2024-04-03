import PropTypes from 'prop-types';

function Button({operador, fn}) {
  return (
    <button
            type='button'
            className="h-10 w-10 flex items-center justify-center 
            font-bold text-white text-2xl bg-lime-500 rounded-full 
            hover:outline-none hover:ring-2 hover:ring-offset-2 
            hover:ring-lime-500 "
            onClick={fn}
          >{operador}</button>
  )
}
Button.propTypes = {
    operador: PropTypes.string.isRequired, // Validar que operador sea una cadena y sea requerido
    fn: PropTypes.func.isRequired, // Validar que fn sea una función y sea requerido
  };

export default Button

