import car1 from '../../foto/car1.jpg';
import car2 from '../../foto/car2.jpg';
import car3 from '../../foto/car3.jpg';
import car4 from '../../foto/car4.jpg';
import car5 from '../../foto/car5.jpg';
import car6 from '../../foto/car6.jpg';
import car7 from '../../foto/car7.jpg';
import car8 from '../../foto/car8.jpg';
import car9 from '../../foto/car9.jpg';
import car10 from '../../foto/car10.jpg';

import { useState } from 'react';


function RandomImg(){
    const [current,setCurrent]=useState(false)
    let randomImages=[
       car1,
       car2,
       car3,
       car4,
       car5,
       car6,
       car7,
       car8,
       car9,
       car10
    ];
    function getRandomImg(){
        let randomId =Math.floor(Math.random()*10);
        setCurrent(randomImages[randomId])
    }
      
    

    return(
        <>
       <div className="container">
         <h1>Random Images</h1>
         <img id='car' src={current} alt="" />
         <button className='carRandom' onClick={getRandomImg}> Random Car</button>
       </div>
        </>
    );
}
export default RandomImg