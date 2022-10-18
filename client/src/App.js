//import logo from './logo.svg';
import './App.css';
import Todo from './todo';  //when we set the default 
//import TodoItem from './todoitem';
import {BrowserRouter,Routes,Route} from "react-router-dom";  //to import the react 

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/message" element={<Todo/>}></Route>
          {/* <Route path="/todo/:id" element={<TodoItem/>}></Route> */}
        </Routes>
      </BrowserRouter>  
      {/* application inside the browserrouter */}
    </div>
  );
}
export default App;