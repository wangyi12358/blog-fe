'use client'
import Typewriter from 'typewriter-effect';
import React from 'react';

function Bio() {
  return (
    <Typewriter
      onInit={(typewriter)=> {
        typewriter
          .typeString('我是 Mika，一名全栈工程师，主要技术栈 React、Typescript、Nodejs、Golang，我热爱Coding、创新、生活、以及探索和学习未知的领域。')
          .start();
      }}
    />
  )
}

export default Bio
