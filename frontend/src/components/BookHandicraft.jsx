import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import data from './handicraftData';

const BookHandicraft = () => {

    const {index} = useParams();

    const [handicraftData, setHandicraftData] = useState(data[index]);

  return (
    <div>
        <div className='container'>
            <h3>{handicraftData.name}</h3>
            
            <div className='row g-4'>

            {
                handicraftData.products.map((product) => {
                    return <div className='col-md-3'>
                        <div className='card'>
                            <img src={product.image} className='card-img-top' alt="" />
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default BookHandicraft;