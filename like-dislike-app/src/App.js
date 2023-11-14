import React, {useState} from "react";
import {BiUserCircle} from "react-icons/bi";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
 
function App() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
 
  const handleLike = () => {
    if (!like){
      setCount(count + 1);
      setLike(true);
    } else {
      setCount(count - 1);
      setLike(false);
    }
 
  }
 
  const imageUrl = "https://media.tenor.com/Wg9fW_XEft0AAAAC/pout-christian-bale.gif";
  return (
    <div className="main-container">
      <h1>LIKE DISLIKE APP</h1>
      <h4>Count: {count}</h4>
      <div className="card" style={{width: "18rem"}}>
        <div>
          <BiUserCircle/> SigmaPatrickB_23821
        </div>
        <img 
        src={imageUrl}
        alt="post-img"
        height={"300px"}
        width="100%"
        onDoubleClick={handleLike}
        />
        <div className="card-footer">
          {
            like ? (
              <AiFillHeart onClick={handleLike} color="red" size="30px"/>
            ) : (
              <AiOutlineHeart onClick={handleLike} size="30px"/>
            )
          }
 
        </div>
      </div>
    </div>
  )
}
 
export default App;