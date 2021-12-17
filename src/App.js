import './App.css'
import Card from './components/Card'

let data = [
  {
    nft: './images/shegoku.jpeg',
    title: "Doctor Hazed #7912",
    description: "She knows how to cook up the right stuff! Look in her eyes and see.",
    price: '13ETH',
    creator: 'Naeem Carter',
    avatar: './images/NHT.png'
  },
  {
    nft: './images/nftcharnice.jpeg',
    title: "Bronzed Orange #0237",
    description: "A priceless novelty.",
    price: '40',
    creator: 'Charnice Tatum',
    avatar: './images/ct1.jpeg'
  },
  {
    nft: './images/snakeyjane.jpeg',
    title: "Slithering Sammy #0120",
    description: "A doctor who is not afraid to bite back.",
    price: '34ETH',
    creator: "XODS",
    avatar: './images/xods.jpeg'
  }
]

console.log(data)

function App() {
  return (
    <div className="App">
      {data.map((nft) => {
        return(<Card nftObj={nft}/>)
    })}

    </div>
  );
}

export default App;
