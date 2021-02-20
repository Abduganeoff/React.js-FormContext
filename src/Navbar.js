import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { 
        AppBar, 
        Toolbar, 
        IconButton, 
        Typography, 
        InputBase,
        Switch
    } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { classes } = this.props;
        const { isDarkMode, toggle } = this.context;
        return (
            <div className={classes.root}>
                <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <span>FR</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>
                            App Tittle
                        </Typography>
                        <Switch onChange={toggle}/>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase 
                                placeholder='Search...'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);
