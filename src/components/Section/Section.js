import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
    <>
    <h1>{title}</h1>
        {children}
    </>
)


Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}


export default Section;






