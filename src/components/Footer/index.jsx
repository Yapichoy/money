import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faChartPie, faClipboardList, faWallet, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return <div className="footer">
       <div className="footer__tabs">
         {/*<div className="footer__tab active">
              <NavLink to="/bills">
                <FontAwesomeIcon icon={faCreditCard} />
                <p>Счета</p>
              </NavLink>
          </div>*/}
         <div className="footer__tab">
              <NavLink to="/categories">
                <FontAwesomeIcon icon={faChartPie} />
                <p>Категории</p>
              </NavLink>
         </div>
         <div className="footer__tab">
              <NavLink to="/operations">
                <FontAwesomeIcon icon={faClipboardList} />
                <p>Операции</p>  
              </NavLink>
         </div>
         {/*<div className="footer__tab">
              <NavLink to="/budget">
                <FontAwesomeIcon icon={faWallet} />
                <p>Бюджет</p>  
              </NavLink>
         </div>*/}
         <div className="footer__tab">
              <NavLink to="/summary">
                <FontAwesomeIcon icon={faChartBar} />
                <p>Обзор</p>
              </NavLink>
         </div>
       </div>
    </div>
  
  }

export default Footer;