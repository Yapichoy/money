
import Categories from '../../modules/Categories';
import './Categories.scss';
import { PieChart} from '../../components';

const CategoriesPage = () => {

  return <section>
    <Categories/>
    <div className="chartSection">
      <PieChart data={[
                { x: 1, y: 1000, color: '#07c312' }, { x: 2, y: 400, color: '#3023b9c0' }, { x: 3, y: 3000, color: '#8a23b9c0' }, { x: 4, y: 100, color: '#dc9a13c0' }, { x: 5, y: 800, color: '#0d9027' }, 
              ]} width={300} height={300} sum={5300} fontSize={16}/>
    </div>
  </section>

}

export default CategoriesPage; 