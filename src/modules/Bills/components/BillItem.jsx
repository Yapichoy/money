import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const BillItem = ({name, sum, background, icon}) => {
    return <div className="bills__item">
      <div className="bills__item__logo" style={{backgroundColor:background}}>
        <FontAwesomeIcon icon={Icons[icon]} />
      </div>
      <div className="bills__item__body">
        <label>{name}</label>
        <p>{sum} $</p>
      </div>
    </div>
  }

BillItem.propTypes = {
  name: PropTypes.string,
  sum: PropTypes.number,
  background: PropTypes.string,
  icon: PropTypes.string
}
BillItem.defaultProps = {
  name: "Карта",
  sum: 0,
  background: "#000",
  icon: ""
}
export default BillItem;