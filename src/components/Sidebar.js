import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
            <List disablePadding dense>
            <ListItem button>
                Turbo Chargers
            </ListItem >
            <ListItem button>
                Engine Block
            </ListItem>
            <ListItem button>
                Rims
            </ListItem>
        </List>
        </div>
        )
    }
}

