import React from 'react';
import { makeStyles, AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import { NotificationsNone, ChatBubbleOutline, PowerSettingsNew, Search } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        // transform: 'translateZ(0)'
    },

    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },

        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}));


const Header = () => {

    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.root} elevation={1}>
            <Toolbar>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item>
                        <InputBase placeholder='Search topics' className={classes.searchInput} startAdornment={<Search fontSize='small' />} />
                    </Grid>
                    
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNone fontSize='small' />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={3} color='primary'>
                                <ChatBubbleOutline fontSize='small' />
                            </Badge>
                        </IconButton>

                        <IconButton>
                           <PowerSettingsNew fontSize='large' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;