
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogBook from './components/LogBook';
import Logs from './components/Logs';

function App() {

  return (
    <Routes>
    {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<Home />} /> */}
      <Route path="log-book" element={<LogBook />} />
      <Route path="logs" element={<Logs />} />

    {/* </Route> */}
  </Routes>
  );
}

export default App;
