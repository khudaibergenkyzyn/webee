import React from 'react';
import { Provider } from "react-redux";
import configureStore from './store'
import { Routes, Route, useLocation} from "react-router-dom";
import Filter from './components/Filter';
import Main from './components/Main';
import ManageTypes from './components/manage-types/ManageTypes';
const store = configureStore()
function App() {
  let location = useLocation();
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:id" element={<Filter key={location.pathname} queryname = "group_id"/>} />
          <Route path="/manage-types" element={<ManageTypes/>}/>
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
