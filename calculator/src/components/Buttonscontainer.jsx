import styles from './Buttonscontainers.module.css';
import PropTypes from 'prop-types';
export default function Buttonscontainer({btnClick}) {
    const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonsContainer}>

            {
                btnNames.map((btn, idx) => {
                    return <button className={styles.button} key={idx} onClick={()=>btnClick(btn)} >{btn}</button>//getting button number by ananomous function/empty function
                }

                )
            }

        </div>
    )
}
Buttonscontainer.propTypes = {
    btnClick: PropTypes.func
  };
