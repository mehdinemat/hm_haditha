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
import { SWRConfig } from 'swr'
import { fetcher } from './components/lib/api'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { QueryParamProvider } from 'use-query-params';

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>

        <SWRConfig value={{ fetcher }}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/library/:id" element={<Library />} />
              <Route path="/library" element={<Library />} />
              {/* <Route path="/library/:id" element={<LibraryItem />} /> */}

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
        </SWRConfig>
      </QueryParamProvider>

    </BrowserRouter>
  )
}

export default App
