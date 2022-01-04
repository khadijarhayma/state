
import './App.css';
import React, { useState, useEffect } from "react";


const App = ()=> {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow(!show);
  };
  const [person, setperson] = useState({
    fullName: "khadija",
    bio: "bio",
    imgSrc: "https://cdn.pixabay.com/photo/2015/03/14/00/00/landscape-672456_960_720.jpg",
    profession: "web devoloper",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div className="App">
    <button onClick={handleClick}>show me</button>
      {show ? (
        <div>
          <h1> Fullname: {person.fullName}</h1>
          <h1>Bio:{person.bio}</h1>
          <h1>Profession:{person.profession}</h1>
          <img src={person.imgSrc} alt={person.fullName} />
        </div>
      ) : null}
      <h1>The component has been rendered for {count} seconds</h1>
     
    </div>
  );
}

export default App;
