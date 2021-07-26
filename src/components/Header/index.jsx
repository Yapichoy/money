import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPencilAlt, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {

    return <div className="header">
      <div className="header__row">
        <div className="header__menu">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="header__bills">
          {/*<div className="header__bills__label">
            Все счета  <FontAwesomeIcon icon={faSortDown} size="sm" />
          </div>
          <div className="header__bills__balance">
            0 $
          </div>*/}
        </div>
        <div className="header__redact">
          <FontAwesomeIcon icon={faPencilAlt} size="lg" />
        </div>
      </div>
    </div>
  
  }

export default Header;