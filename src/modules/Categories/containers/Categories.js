import Category from '../components/Category';
import NewCategory from '../components/NewCategory';
const Categories = () => {
  return (
    <div class="categories">
      <Category label="Семья" bgColor="#07c312" icon="faUsers" sum="1000"/>
      <Category label="Кафе" bgColor="#3023b9c0" icon="faUtensils" sum="400" />
      <Category label="Продукты" bgColor="#8a23b9c0" icon="faShoppingBasket"  sum="3000"/>
      <Category label="Досуг" bgColor="#ff0494c0" icon="faFilm" sum="0"/>
      <Category label="Транспорт" bgColor="#dc9a13c0" icon="faBusAlt" sum="100" />
      <Category label="Здоровье" bgColor="#0d9027" icon="faHeartbeat" sum="800"/>
      <Category label="Покупки" bgColor="#0d6e90" icon="faShoppingBag" sum="0"/>
      <Category label="Подарки" bgColor="#e22b38" icon="faGift" sum="0"/>
      <NewCategory/>
    </div>
  )
}

export default Categories;