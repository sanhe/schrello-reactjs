import PropTypes from "prop-types";

export const textTruncate = (str, maxLength) => (str.length > 350 ? `${str.substring(0, maxLength - 3)}...` : str);

textTruncate.propTypes = {
    str: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
};
