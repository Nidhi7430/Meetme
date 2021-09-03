import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  // IconButton,
  Typography,
  Menu,
  MenuItem,
  // Link,
  Container,
} from "@material-ui/core";
// import MoreIcon from "@material-ui/icons/MoreVert";
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
          <Container>
            <Toolbar style={{ padding: 0 }}>
              <Typography className={classes.title} variant="h6" noWrap>
                Meetme
              </Typography>
              <div className={classes.grow} />
              {/* <div className={classes.sectionDesktop}>
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
              </div> */}
            </Toolbar>
          </Container>
        </AppBar>
        {/* {renderMobileMenu} */}
      </div>
    </>
  );
};

export default Header;
