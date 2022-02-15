import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/Header';
import DetailsView from './component/posts/DetailsView';
import NotFound from './component/NotFound';
import Contact from './component/contact/Contact';
import About from './component/about/About';
import Login from './component/login/Login'
import Createview from './component/posts/Createview';
import UpdateView from './component/posts/UpdateView';



function App() {
  return (
      <div className="App">
        <Header />
          <Routes>
              <Route path='/ghumakkad-blog/' element={<Home />} />
              <Route path='/ghumakkad-blog/about' element={<About />} />
              <Route path='/ghumakkad-blog/contact' element={<Contact />} />
              <Route path='/ghumakkad-blog/login' element={<Login />} />
              <Route path= '/ghumakkad-blog/details/:id' element={<DetailsView />} />
              <Route path= '/ghumakkad-blog/create' element={<Createview />} />
              <Route path= '/ghumakkad-blog/update/:id' element={<UpdateView />} />
              <Route path='/ghumakkad-blog/404' element = {<NotFound />} />
              <Route path='*' element= {<Navigate replace to='/ghumakkad-blog/404' />} />
          </Routes>
      </div>
  );
}

export default App;
