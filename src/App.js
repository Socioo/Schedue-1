// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
import Authenticated from './pages/Authenticated';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      <Authenticated />
      {/* <Login /> */}
    </div>
  );
}

export default App;
