import {useState  } from "react";

function App() {
  const[name, setName] = useState("Burcu");
  const[age, setAge] = useState(24);  
  const[friends, setFriends] = useState(["Ali","Ayşe"]);
  const[address, setAddress] = useState({title:"İstanbul", zip:34500});

  return(
    <div className="App">
      <h1> Merhaba {name} </h1>
      <h2> {age} </h2>

      <button onClick={() => setName("Sebile")}>Change Name</button>
      <button onClick={() => setAge(27)}>Change Age</button>

      <hr/>
      <br/><br/>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend} </div>
      ))}

      <br/>

      <button onClick={() => setFriends([...friends, "Veli"] )}>
        Add new friends
      </button>

      <hr/>
      <br/><br/>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br/>

      <button onClick={() => setAddress({title:"Aydın", zip:parseInt("09700")})}>
        Change the Address
      </button>

    </div>
  );
}

export default App;