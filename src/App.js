import logo from './logo.svg';
import {Box} from '@material-ui/core'
import './App.css';
import SearchBar from './components/SearchBar/searchbar';
function App() {
 
  return (
    <div className="App">
      <Box className='ui container'>
      <SearchBar/>
      </Box>
    </div>
  );
}

export default App;
