import PropTypes from 'prop-types'; 
import styles from './Buttonscontainers.module.css'
export default function Buttonscontainer({handleclick}) {
    const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonsContainer}>

            {
                btnNames.map((btn, idx) => {
                    return <button className={styles.button} key={idx} onClick={handleclick}>{btn}</button>
                }

                )
            }

        </div>
    )
}
Buttonscontainer.propTypes = {
    handleclick: PropTypes.func
  };
