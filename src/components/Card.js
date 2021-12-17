import React from 'react'

function Card(props) {
    return (
        <div className='Card' key={props.id}>
            {console.log(props)}

            <div className='NFT_container'>
                <img id='NFT'src={props.nftObj.nft}></img>
            </div>

            <div className='content'>
                <h3>{props.nftObj.title}</h3>
                <p>{props.nftObj.description}</p>

                <div className='description'>

                    <div className='stat'>
                        <img src='./images/icon-ethereum.svg'></img>
                        <p>{props.nftObj.price}</p>
                    </div>

                <div className='stat'>
                    <img src='images/icon-clock.svg'></img>
                    <p>3 days left</p>
                </div>
                </div>
            </div>

            <div className='footer'>
                <img src={props.nftObj.avatar}></img>
                <p>{props.nftObj.creator}</p>

            </div>
        </div>
    )
}

export default Card
