import './Category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Category = ({icon, bgColor, label, sum}) => {
    return <div className="category">
      <div className="category__label">
        {label}
      </div>
      <div className="category__icon" style={{backgroundColor: bgColor}}>
        <FontAwesomeIcon icon={Icons[icon]} />
      </div>
      <div className="category__sum" style={{color: sum > 0 ? bgColor : '#9e9e9e'}}>
        {sum} $
      </div>
    </div>
  }

  Category.propTypes = {
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  label: PropTypes.string,
  sum: PropTypes.number
}
export default Category;