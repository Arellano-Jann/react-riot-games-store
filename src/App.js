import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Database from './Database';

//This is NOT a component, it's just a function
function add(x,y){
  return x+y
}

function Card(props){
  return (
    <div style={{
      display:"block",
      height: "15vh",
      width: "30vw",
      margin: "1vw",
      background: `url(${props.banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      flexShrink: "0"
    }}>
      <h1 style={{
        color:"white"
      }}>{props.title}</h1>
      <p style={{
        color:"white"
      }}>${props.price}</p>
      <button><Link to={"/products?name="+props.title}>Buy</Link></button>
    </div>
  )
}

function Gameslist(){
  var Games = Object.values(Database);
  console.log(Games);
  return (
    <div style={{
      display:"flex",
      width:"100vw",
      justifyContent: "space-around",
      flexWrap: "wrap"
    }}>
      {Games.map(x => <Card title={x.title} banner={x.banner} price={x.price} />)}
    </div>
  );
}

//functions are components IF the return statement has HTML in it
function App() {
  return (
    <div class="wrapper">
      <Gameslist />
    </div>
  );
}

export default App;
