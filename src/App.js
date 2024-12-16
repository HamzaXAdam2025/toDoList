import MainUI from "./myComponents/MainUI";
import LeftSidebar from "./myComponents/LeftSidebar";
import '../node_modules/react-datepicker/dist/react-datepicker.css'
import ItemList from "./myComponents/ItemList";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page404 from './myComponents/Page404'
function App() {
  return (
    <div className="App">
      <Router>
        <div className="background"></div>
        <LeftSidebar />
        <Routes>
          <Route exact path='/' element={<MainUI />}></Route>
          <Route exact path='/ItemList' element={<ItemList />}></Route>
          <Route exact path='*' element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
