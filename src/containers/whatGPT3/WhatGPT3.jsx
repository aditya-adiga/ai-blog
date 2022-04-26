import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="AI Approaches and Concepts" text="Turing's paper : Computing Machinery and Intelligence (1950), and its subsequent Turing Test, established the fundamental goal and vision of artificial intelligence. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Turing's Question" text="Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question: Can machines think?" />
      <Feature title="What AI does?" text="At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative. It is the endeavor to replicate or simulate human intelligence in machines." />
      <Feature title="Is it conclusive?" text="The expansive goal of artificial intelligence has given rise to many questions and debates. So much so, that no singular definition of the field is universally accepted." />
    </div>
  </div>
);

export default WhatGPT3;
