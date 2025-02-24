"use client";
import React from "react";
import { ContainerScroll } from "./ContainerScroll";

import { ParticleEffect } from "./ParticleEffect";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden p-0 m-0">
      
      <ContainerScroll
        titleComponent={
          <>
          
           
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              
              <span className="text-4xl md:text-[6rem] font-bold leading-none">
                About US
              </span>
            </h1>
            
            
          </>
        }
      >
      
      <div>
        
      </div>

      
       
      </ContainerScroll>
      
    </div>
  );
}
