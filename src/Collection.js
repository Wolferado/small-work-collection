import './Collection.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { ImageCarousel } from './projects/Image_Carousel/Image_Carousel';

function App() {
  return (
    <>
      <h1>Collection of Side-projects</h1>

      <section>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigation />} />
            <Route path='image_carousel' element={<ImageCarousel />}/>
          </Routes>
        </BrowserRouter>

        <div id="information">
          <h2>About</h2>
          <text>This collection contains some small side-projects (such as Image Carousel), that were made with an aim to get better and keep GitHub activity high. <br />
          You can freely navigate and check out any project you prefer.</text>
        </div>
      </section>
    </>
  );
}

export default App;