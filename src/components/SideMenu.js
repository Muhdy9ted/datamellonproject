import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        height: '100vh',
        // position: '-webkit-sticky',
        position: 'sticky',
    },
    userIcon: {
        margin: '3.5rem 0.2rem 1.3rem 0.8rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    userName: {
        marginLeft: '1rem'
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },   
}));

const SideMenu = (props) => {

    // console.log(props)
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
      props.history.push({pathname: '/'});
    };

    return(
        <div className={classes.sideMenu}>
            <div className={classes.userIcon}>
                <Avatar className={`${classes.orange} ${classes.large}`}>AM</Avatar>
                <Typography variant="h6" gutterBottom className={classes.userName}> Abdullahi Muhammed </Typography>
            </div>
            <List component="nav" aria-label="sideNav">
                <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon> <HomeIcon /> </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon> <PersonIcon /> </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </List>
        </div>
    );
}

export default withRouter(SideMenu);