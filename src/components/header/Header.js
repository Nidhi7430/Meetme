import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import MoreIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>Home</MenuItem>
      <MenuItem>Home</MenuItem>
      <MenuItem>Home</MenuItem>
    </Menu>
  );
  return (
    <>
      <div
        className={classes.grow}
        style={{ position: "absolute", top: "0", width: "100%", zIndex: "1" }}
      >
        <AppBar
          position="fixed"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className={classes.root}>
                <Link href="#" color="inherit">
                  Home
                </Link>
                <Link href="#" color="inherit">
                  Home
                </Link>
                <Link href="#" color="inherit">
                  Home
                </Link>
              </Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </>
  );
};

export default Header;
