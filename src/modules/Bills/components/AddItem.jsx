const AddItem = ({children}) => {
    return <div className="bills__addItem">
      <div className="bills__addItem__logo">
        +
      </div>
      <div className="bills__addItem__body">
        <p>{children}</p>
      </div>
    </div>
  }

export default AddItem;