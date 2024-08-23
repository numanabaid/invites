import PropTypes from 'prop-types';

export const propTypes = {
    statusBarColor: PropTypes.string,
    backgroundImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    backgroundImage: PropTypes.object,
    children: PropTypes.node,
    edges: PropTypes.array,
    translucent: PropTypes.bool,
    paddingHorizontal: PropTypes.number,
    paddingVertical: PropTypes.number,
    paddingBottom: PropTypes.number,
    paddingTop: PropTypes.number,
    backgroundColor: PropTypes.string
};
