import './App.css';
import Komentarz from './components/Komentarz'

function App() {
  let komentarze = [
    {id : 1, title: "First Title", counter: 0, isClicked: false},
    {id : 2, title: "Second Title", counter: 3, isClicked: true},
    {id : 3, title: "Third Title", counter: 0, isClicked: false},
    {id : 4, title: "Fourth Title", counter: 5, isClicked: false},
    {id : 5, title: "Fifth Title", counter: 3, isClicked: true},
    {id : 6, title: "Sixth Title", counter: 9, isClicked: false},
  ]
  return (
    <div className="App">
      {komentarze.map((value, index) => {return(<Komentarz key={index} id={value.id} title={value.title} counter={value.counter} isClicked={value.isClicked}/>)})}
    </div>
  );
}

export default App;
