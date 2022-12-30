import {useState} from "react";
import { GlobalStyles } from "./GlobalStyles";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics.js";
import { Notification } from "./Notification/Notification";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log(good);
  console.log(neutral);
  console.log(bad);

  const options = ['good', 'neutral', 'bad'];

  const feedbackSetState = (evt) => {
    console.log(evt.currentTarget)
    const targetId = evt.currentTarget.id;
    console.dir(evt.currentTarget)
    switch (targetId) {
      case 'good':
        setGood(prevState => { return prevState + 1 })
        break;
    
      case 'neutral':
        setNeutral(prevState => { return prevState + 1 })
        break;
      
      case 'bad':
        setBad(prevState => { return prevState + 1 })
        break;
      default:
        throw new Error(console.log('Error'));
       
    }
  }

   const countTotalFeedback = () => {
        return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round(good * 100 / total);
  };
  
    return (
      <>
        < GlobalStyles />
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={feedbackSetState}
          />
        </Section>
       
        <Section title={'Statistics'} >
          {countTotalFeedback() !== 0
            ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />)
            :(<Notification message="There is no feedback"></Notification>)}
        </Section>
      </>
    )
  };



