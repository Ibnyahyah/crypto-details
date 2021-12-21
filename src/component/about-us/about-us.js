export function AboutUs(){
    return(
        <div>
            <h3 className="font-xxl mt-1 text-center">About us</h3>
            <p>Last updated:30/12/2021</p>
            <div className="mt-2" style={{textAlign:'justify'}}>
                <dl>
                    <dt className="font-5">Who we are :</dt>
                    <dd>We are a group individual who plan to make the up comming days easier for everyone. Our motive get start around late Q4 2020 when we discover that of people are 
                        still suffering for not knowing more about their invesment (cryptocurrency, non-fungible-token and so on). Which lead to lost of capital and trust among individual.
                    </dd>
                </dl>
                <dl className="mt-1">
                    <dt className="font-5">Why crypto-details-hub :</dt>
                    <dd>We think by bring up a company ("Blog company") that deal with cryptocurrency and any other thing associated with it, its will enlighten more individual by bringing them to light
                         part of their investment.
                    </dd>
                </dl>
                <dl className="mt-1">
                    <dt className="font-5">What we offer :</dt>
                    <dd>We offer you alot we can. Our Offerings are : <b>cryptocurrency_blog</b> (were you can know more about coins or token such as their chain-network, supply, contract address, main project), 
                    <b>user interaction side </b>(feedback were you can ask question about what we post or any other thing). We are also planning on adding more features to our company as soon as possible.
                    </dd>
                </dl>
            </div>
        </div>
    )
}