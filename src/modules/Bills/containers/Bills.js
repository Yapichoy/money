import {Header, BillItem, AddItem } from "../components";

const Bills = (props) => (
  <>
    <div className="bills">
      <div className="bills__section">
        <Header name="Счета" sum={0} />
        <BillItem name="Карта" sum={0} background="#a700bd" icon="faCreditCard"/>
        <BillItem name="Наличные" sum={0} background="#009274" icon="faWallet"/>
        <BillItem icon="faWallet"/>
        <AddItem >Добавить счёт</AddItem>
        
      </div>
      <div className="bills__section">
        <Header name="Сбережения" sum={0} />
        <AddItem >Добавить цель </AddItem>
      </div>
    </div>
  </>
)

export default  Bills;