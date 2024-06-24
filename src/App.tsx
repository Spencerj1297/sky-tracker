
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogBook from './components/LogBook';
import Logs from './components/Logs';
import Home from './components/pages/Home';
import Layout from './components/Layout';
import Pilots from './components/pages/Pilots';

function App() {

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/log-book" element={<LogBook />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/pilots" element={<Pilots />} />
      <Route path="/aircrew" element={<Logs />} />
      <Route path="/maintenance" element={<Logs />} />

    </Route>
  </Routes>
  );
}

export default App;
