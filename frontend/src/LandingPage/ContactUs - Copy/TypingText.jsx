/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : for typewriterEffect */

import React from 'react';
import Typewriter from "typewriter-effect";

function TypingText(props) {
    return (
        <div className="">
            <Typewriter  
                options={{
                    // strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        // .typeString(props.text1+" "+props.text2)
                        .typeString(props.text)
                        .pauseFor(500)
                        //.deleteAll()
                        // .typeString(props.text2)                        
                        .start()
                        
                } } />
        </div>
    );
}

export default TypingText;
