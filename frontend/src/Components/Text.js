import PropTypes from "prop-types";

export const textTruncate = (str, maxLength) =>
    str.length > maxLength ? `${str.substring(0, maxLength - 3)}...` : str;

textTruncate.propTypes = {
    str: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
};
