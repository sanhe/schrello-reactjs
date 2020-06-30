import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

class AddColumnButton extends React.Component {
    render() {
        return (
            <>
                <Button onClick={this.props.onClick}>+</Button>
            </>
        )
    }
}

AddColumnButton.propTypes = {
    onClick: PropTypes.func
}

export default AddColumnButton;