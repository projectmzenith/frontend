import React from "react";
import Button from '@material-ui/core/Button';

export class NavButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Button onClick={this.props.function} style={{background: this.props.color}}>
                {/* {this.props.name} */}
            </Button>
        )
    }
}

