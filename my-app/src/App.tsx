import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import ListPage  from './pages/ListPage'
import { EntryPage } from './pages/EntryPage'
import './App.css';

export default function App() {

  return (
  <Routes>
    <Route path="/" element={<Header /> } >
      <Route index element={<EntryPage />} />
      <Route path="/entries" element={<ListPage /> } ></Route>
      <Route path="/entries/:entryId" element={ <EntryPage/> } />
      </Route>
  </Routes>
  );
}
