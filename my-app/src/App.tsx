import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import ListPage from './pages/ListPage'
import { EntryPage } from './pages/EntryPage'

export default function App() {


  return (
  <Routes>
    <Route path="/" element={<Header />} >
      <Route index element={<ListPage />} />
      <Route path="/entries/:entryId" element={ <EntryPage/> } />
      </Route>
  </Routes>
  )
}
