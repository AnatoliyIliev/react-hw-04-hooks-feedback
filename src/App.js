import { useState, useEffect } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

function App() {
   
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [count, setCount] = useState(0);

  const options = { good, neutral, bad }; 

  const leaveFeedback = (state) => {
    switch (state) {
    case 'good':
      return setGood(state => state + 1);

    case 'neutral':
      return setNeutral(state => state + 1);
    
    case 'bad':
      return setBad(state => state + 1);

    default:
      throw new Error(`Unsuported ${state}`);
    }
  }   

    useEffect(() => {
      setCount (() => (good + neutral + bad));
      setPercentage (() => Math.ceil((good / count) * 100));
  }, [good, neutral, bad, count]);

  return (
      <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(options)}
              onLeaveFeedback={leaveFeedback}
              // onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {count > 0 ? 
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={count}
              positivePercentage={percentage} />) : 
              (<Notification message="No feedback given"/>)}
        </Section>
      </div>
  ) 
}


export default App;