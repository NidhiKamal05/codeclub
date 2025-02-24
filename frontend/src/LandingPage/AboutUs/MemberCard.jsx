import {RiGithubFill, RiLinkedinBoxFill} from '@remixicon/react'
import { useEffect, useState } from 'react';

function MemberCard({item}) {
    const [active,  setActive] = useState(Information[0]);
    return ( 
        <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
                <img src={item.image} className="rounded-3xl h-full w-ful" height="300" width="300" alt={item.name}></img>
            </div>
            <div>
                <h2 className={` font-bold text-3xl`}>{item.name}</h2>
                <p className="text-base text-neutral-400">{item.designation}</p>
                <p>{item.description}</p>
                <div className={`font-bold flex gap-5 mt-5 `}>
                    <RiGithubFill className='size-8' />
                    <RiLinkedinBoxFill className="size-8" />
                </div>  
                <div className='flex gap-10 pt-10'>
                    <button onClick={handlePrev}>left</button>
                    <button onClick={handleNext}>right</button>
                </div>
            </div>
            
        </div>
     );
}

export default MemberCard;