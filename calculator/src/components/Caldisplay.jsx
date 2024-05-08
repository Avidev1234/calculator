import styles from './Display.module.css';
import PropTypes from 'prop-types';
export default function Caldisplay({calculators}) {
  return (
    <input className={styles.display} type="text" value={calculators} readOnly  />
  )
}
Caldisplay.propTypes = {
  calculators: PropTypes.string
};