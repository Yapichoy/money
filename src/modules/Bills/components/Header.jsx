import PropTypes from 'prop-types';

const Header = ({name, sum}) => {
    return <div className="bills__header">
      <div className="bills__label">
        {name}
      </div>
      <div className="bills__sum">{sum} $</div>
  </div>
  }

Header.propTypes = {
  name: PropTypes.string,
  sum: PropTypes.number
}
Header.defaultProps = {
  name: "Счета",
  sum: 0
}
export default Header;