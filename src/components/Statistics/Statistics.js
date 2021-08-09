import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul>       
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive percentage: {positivePercentage}%</li>
    </ul>    
)

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;