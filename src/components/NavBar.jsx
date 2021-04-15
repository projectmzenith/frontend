import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

export class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.appName}
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6" >
                        News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}