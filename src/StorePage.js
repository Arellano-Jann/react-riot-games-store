import { useSearchParams } from 'react-router-dom'
import Database from './Database'
import { useState } from 'react'

function StorePage(props){
	var [money, setMoney] = useState(50);
	var [searchParams,setSearchParams] = useSearchParams();

	var game = Database[searchParams.get("name")];

	function buy(){
		setMoney(money-game.price)
	}

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
        <img src={game.banner} style={{
			width:500
		}}/>
        <h1>{game.title}</h1>
        <p>${game.price}</p>
		<button onClick={buy}>Buy!</button>
		<i>Your Networth: ${money} (ur poor)</i>
	  </div>
    )
}

export default StorePage