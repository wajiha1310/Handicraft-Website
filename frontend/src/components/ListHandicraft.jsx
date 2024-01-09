import React, { useState } from 'react'
import handicraftData from './handicraftData';
import { Link } from 'react-router-dom';
import "./ListHandicraft.css"
const ListHandicraft  = () => {
    const [handicraftArray, setHandicraftArray] = useState(handicraftData);

    // const addlike =(index)=>{
    //     const temp =postArray;
    //     temp[index].like++;
    //     setPostArray([...temp]);
    // }

    // const addcomment =(index)=>{
    //       const temp =postArray;
    //       temp[index].comment++;
    //       setPostArray([...temp]);    
    // }

    // const addshare =(index)=>{
    //     const temp =postArray;
    //     temp[index].share++;
    //     setPostArray([...temp]);    
    // }
  return (
    <div className="container">
        <div className="row"> 
        
            {
                handicraftData.map((handicraft,index)=>{return <div className='col-md-4'><div className='card mb-4'>
                     <div className='card-header'>
                         <h4 className='m-2' >{handicraft.name}</h4>
                        {/* <h5 className='m-2'>{restro.address}</h5> */}
                               
                     </div>
                    

                     <div className='card-body'>
                        <p className='m-0'>{handicraft.item}</p>
                     </div>
                      <img className='w-100 my-img' src={handicraft.image} alt='' />
                    
                      <div className='p-3'>                                
                      <h5 className='m-2'><i class="fa-solid fa-location-dot"></i>{handicraft.address}</h5>
                     </div>


                     <div className='card-footer'>
                        <div className='row'>
                            <div className='col-6'>
                                  <Link to={'/bookhandicraft/'+index} className='btn w-100 ' ><i class="fa-solid fa-circle-check"></i> Open </Link>
                             </div>
                                    
                         </div>
                     </div>
             </div>   
             </div> })             
            }
        
        </div>
    </div>
  )
}

export default ListHandicraft;





