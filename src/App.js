import React, { Component } from "react";
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
class App extends Component {
  static defaultProps = {
    //
  };

  static propTypes = {
    //
  };
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = (option) => {
    this.setState((prevState) => ({        
        [option]: prevState[option] + 1,
      })
    )
  }  
    
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return(    
     good + neutral + bad)
    };   

  countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      let percentage = Math.ceil(( good / this.countTotalFeedback()) * 100);  
      return percentage;
  };  
      
  render() {
    const { good, neutral, bad } = this.state;
        return (
            <div>
              <Section title="Please leave feedback">
                  <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.leaveFeedback} />
              </Section>            
              <Section title="Statistics">              
                {this.countTotalFeedback() > 0 ? 
                  (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} />) : 
                    (<Notification message="No feedback given"/>)}
              </Section>
            </div>
        ) 
  };
}

export default App;