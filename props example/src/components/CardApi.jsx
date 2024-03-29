
import React, { useState } from 'react'
import { useEffect } from 'react'

const CardApi = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {

        const Getcard = async () => {
            const response = await fetch('https://dummyjson.com/carts')
            let data = await response.json();
            console.log(data);
            setCards(data.carts || data.cards)
        }
        Getcard();

    }, [])

    return (
        <>
            <div className=" d-flex" style={{ width: "100%" ,flexWrap:'wrap'}}>
                {cards.map((card) => (
                    <div className='main-head m-5 ' key={card.id}>
                        <div className="body">

                            <h5 className=" ">User id : {card.userId}</h5>
                            <p className="card-text ">{'Card discountedTotal is .. ' + card.discountedTotal}</p>
                            <p className="btn btn-outline-info">{'total price is - ' + card.total}</p>
                            <h2>Products: </h2>
                            <ul className="">

                                {card.products.map((prod, i) => (
                                    <div key={i}>
                                        <img src={prod.thumbnail} className="card-img-top" alt="Card image or thumbnail here" style={{ width: "10rem" }} />
                                        <p key={i} style={{ width: "10rem" }} > Title is :  {prod.title} , Price is :  <strong> {prod.price} </strong></p>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default CardApi
