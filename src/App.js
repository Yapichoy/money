
import './App.scss';
import {Route} from "react-router-dom";
import { BillsPage, MainPage, CategoriesPage } from './pages';
import {Header, Footer} from "./components";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <div className="container">
          <Route exact path={['/']} component={MainPage}/>
          <Route exact path={['/bills']} component={BillsPage}/>
          <Route exact path={['/categories']} component={CategoriesPage}/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
