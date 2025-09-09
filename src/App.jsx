import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import LayoutSearch from './components/LayoutSearch'
import Search from './pages/Search'
import HadithDetails from './pages/HadithDetails'
import BookmarkDetails from './pages/BookmarkDetails'
import Bookmarks from './pages/Bookmarks'
import Library from './pages/Library'
import ChatBot from './pages/ChatBot'
import LibraryItem from './pages/LibraryItem'
import Hadith from './pages/Hadith'
import LayoutHadith from './components/HadithSearch'
import { SWRConfig } from 'swr'
import { fetcher } from './components/lib/api'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { QueryParamProvider } from 'use-query-params';
import ChatBotConv from './pages/ChatBotConv'
import Login from './pages/Login'
import Register from './pages/Register'
import VerifyCode from './pages/VerifyCode'

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>

        <SWRConfig value={{ fetcher }}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/bookmarks/:id" element={<BookmarkDetails />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/library/:id" element={<Library />} />
              <Route path="/library" element={<Library />} />
              <Route path="/search" element={<Search />} />
              <Route path="/hadith/:id" element={<HadithDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify_code" element={<VerifyCode />} />

              {/* <Route path='/chatbot' element={<ChatBot />} /> */}
              <Route path='/chatbot' element={<ChatBotConv />} />
              {/* <Route path="/library/:id" element={<LibraryItem />} /> */}

              {/* Add more routes here */}
            </Route>
            <Route element={<LayoutHadith />}>
              <Route path="/hadith" element={<Hadith />} />
            </Route>
            <Route element={<LayoutSearch />}>
              {/* Add more routes here */}
            </Route>
          </Routes>
        </SWRConfig>
      </QueryParamProvider>

    </BrowserRouter>
  )
}

export default App
