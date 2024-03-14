import React from 'react'
import FirstSection from './Components/FirstSection';
import BreakLine from './Components/BreakLine';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';
import CardSection from './Components/Card/CardSection';
import FifthSection from './Components/FifthSection';
import QuestionsSection from './Components/QuestionsSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
      <FirstSection />
      <CardSection />
      <BreakLine />
      <SecondSection />
      <BreakLine />
      <ThirdSection />
      <BreakLine />
      <FourthSection />
      <BreakLine />
      <FifthSection />
      <BreakLine />
      <QuestionsSection />
      <BreakLine />
      <Footer />
    </div>
  );
}

export default App;
