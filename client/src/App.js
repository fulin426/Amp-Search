import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'
import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { 
  faClipboardList, 
  faChartPie,
  faPlusCircle, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons'
library.add(faClipboardList, faChartPie, faChartLine, faPlusCircle);

import Categories from "./components/Category";
import SearchBar from "./components/SearchBar";
import ShowResults from "./components/ShowResults";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}> 
        <div className="App">
          <SearchBar />
          <Categories />
          <ShowResults />
        </div>
      </Provider>     
    );
  }
}

export default App;

