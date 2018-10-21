import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'
import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { 
  faClipboardList, 
  faChartPie,
  faPlusCircle,
  faMinusCircle, 
  faChartLine,
  faSmileBeam 
} from '@fortawesome/free-solid-svg-icons'
library.add(faClipboardList, faChartPie, faChartLine, faPlusCircle, faMinusCircle, faSmileBeam);

import Categories from "./components/Category";
import SearchBar from "./components/SearchBar";
import ShowResults from "./components/ShowResults";
import Footer from "./components/Footer";
import DescriptionBullets from "./components/DescriptionBullets";
import Header from "./components/Header";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}> 
        <div className="App">
          <Header />
          <SearchBar />
          <Categories />
          <ShowResults />
          <DescriptionBullets />
          <Footer />
        </div>
      </Provider>     
    );
  }
}

export default App;

