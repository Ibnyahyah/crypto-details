const { useState } = require("react")

export function Donation(){
    const [donationType, setDonationType] = useState('')
    return(
        <div>
            <select onChange={(e)=>{
                setDonationType(e.target.value)
            }} >
                <option value="">Select (null)</option>
                <option value="BNB">Bnb(Binance coin)</option>
                <option value="ETH">Eth(Ethereum coin)</option>
                <option value="BTC">Btc(Bitcoin)</option>
                <option value="TRX">Trx(Tron)</option>
            </select>

            <form>
                {donationType === "BNB"?
                    <div className="mt-2">
                        <h1>Binance Coin (BNB)</h1>
                        <p>Address:</p>
                    </div>
                : donationType === "ETH"?  
                    <div className="mt-2">
                        <h1>Ethereum Coin (ETH)</h1>
                        <p>Address:</p>
                    </div>
                :donationType === "BTC"? 
                    <div className="mt-2">
                        <h1>Bitcoin (BTC)</h1>
                        <p>Address:</p>
                    </div>
                :donationType === "TRX"?
                    <div className="mt-2">
                        <h1>Tron (TRX)</h1>
                        <p>Address:</p>
                    </div>
                :
                    <div className="mt-2">
                        <h1>Coin</h1>
                        <p>Address:</p>
                    </div>
                }
            </form>
        </div>
    )
}