import PropTypes from 'prop-types';

const Notification = (props) => (
    <p>{ props.message }</p>
)

Notification.propTypes = {
    props: PropTypes.string,
}

export default Notification;
