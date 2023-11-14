import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

function App() {

    return (
        <div className="App">
            <SearchBar placeholder="Podaj tytuł.." data={BookData}/>
        </div>
    );
}

export default App;
