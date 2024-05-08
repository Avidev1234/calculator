import styles from './Display.module.css'
import PropTypes from 'prop-types';
export default function Caldisplay({handleChange}) {
  return (
    <input className={styles.display} type="text" value={handleChange} readOnly />
  )
}
Caldisplay.propTypes = {
  handleChange: PropTypes.string
};