import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Facial Recognition',
    text: 'It is not something people had thought of in the earlier days but technology has somehow made it possible. Artificial intelligence has even made it possible to recognise faces. Using biometric mapping to figure out the faces of individuals is a huge achievement in itself. It compares whatever is being shown to a database where it finds the match and declares a successful match.',
  },
  {
    title: 'Deep Learning',
    text: 'This is a subpart of machine learning which is a part of artificial intelligence. It enables the machines to think exactly like humans and therefore provides an opportunity to increase the technological presence. A lot of work is being done in this area because it is by far the most revolutionary idea in this field.',
  },
  {
    title: ' Elimination of Mundane Tasks',
    text: 'At some time in our lives, we’ve all completed a chore just because we had to, rather than because we wanted to. That work was uninteresting or dull to us. However, with a machine, you will never get bored in the same way. No matter how many times a job is given to an artificially intelligent system, it will do it and continue to do so. Furthermore, such technologies only make users’ lives simpler by making monotonous, large-scale operations easier.',
  },
  {
    title: 'Quantum Computing',
    text: 'With the aid of quantum neural networks, AI is assisting in the solution of challenging quantum physics issues with the precision of supercomputers. This might pave the way for game-changing breakthroughs in the near future. It’s an interdisciplinary field that focuses on developing quantum algorithms for better AI tasks, including sub-fields like machine learning. The entire notion of quantum-enhanced AI algorithms is still in the research phase.',
  },
  {
    title: ' Futuristic',
    text: 'This new technology is based on adaptive learning i.e. it observes and adapts to the surrounding environment and learns accordingly, therefore making it a very advanced approach. As stated earlier, self-driving cars are an example of artificial intelligence. Unlike the cars of today, they’ll be better connected to technology and would be a step forward in the future.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
     
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
