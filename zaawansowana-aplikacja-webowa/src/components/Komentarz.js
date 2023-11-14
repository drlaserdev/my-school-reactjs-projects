import React, {useState} from 'react';

function Komentarz(props){
    let [isClicked, setLike] = useState(props.isClicked);
    let [counter, setCount] = useState(props.counter);
    let id = props.id;
    let title = props.title;
    let handleLike = () => {
      if (!isClicked){
        setCount(counter + 1);
        setLike(true);

      } else {
        setCount(counter - 1);
        setLike(false);
      }
   
    }

    return (
        <div id={id} className="comment">
            <h2>{title}</h2>
            <p>{counter}</p>
            <button onClick={handleLike}>{isClicked ? "DISLIKE" : "LIKE"}</button>
        </div>
    );
}

export default Komentarz;