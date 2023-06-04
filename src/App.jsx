import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './components/gallery/Gallery';
import Destination from './components/destination/Destination';
import SinglePage from './components/singlePage/SinglePage';
import Blog from './components/blog/Blog';
import BlogSingle from './components/blog/blogSinglePage/BlogSingle';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Login from './components/login/Login'
import Register from './components/login/Register';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/gallery' element={<Gallery/>} />
        <Route exact path='/destination' element={<Destination/>} />
        <Route exact path='/singlePage/:id' element={<SinglePage/>} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blogSingle/:id' element={<BlogSingle />} />
        <Route exact path='/testimonial' element={<Testimonial />} />
        <Route exact path='/contactUs' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
