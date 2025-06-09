import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import LayoutSearch from './components/LayoutSearch'
import Search from './pages/Search'
import Bookmarks from './pages/Bookmarks'
import Library from './pages/Library'
import LibraryItem from './pages/LibraryItem'
import Hadith from './pages/Hadith'
import LayoutHadith from './components/HadithSearch'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:id" element={<LibraryItem />} />

          {/* Add more routes here */}
        </Route>
        <Route element={<LayoutHadith />}>
          <Route path="/hadith" element={<Hadith />} />
        </Route>
        <Route element={<LayoutSearch />}>
          <Route path="/search" element={<Search />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
