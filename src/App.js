import './App.css';
import SavedSongs from './components/SavedSongs';
import SongsList from './components/SongsList';
import Vision from './components/Vision';


function App() {
  return (
    <div className="App">
      <SongsList />
      <SavedSongs />
    </div>
  );
}

export default App;
