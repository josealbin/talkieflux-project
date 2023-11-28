import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import Footer from './components/Footer/Footer';
import { originals, actions, horror, romance, documentaries, comedy} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Trending' url={originals} />
      <RowPost title='Action' url={actions} isSmall />
      <RowPost title='Comedy' url={comedy} isSmall/>
      <RowPost title='Horror' url={horror} isSmall/>
      <RowPost title='Romance' url={romance} isSmall/>
      <RowPost title='Documentaries' url={documentaries} isSmall/>
      <Footer/>
    </div>
  );
}
export default App;
