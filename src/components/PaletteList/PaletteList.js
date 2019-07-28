import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue, red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import MiniPalette from "../MiniPalette/MiniPalette";
import styles from "../../styles/PaletteList-styles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      id: ""
    };
    this.goToPalette = this.goToPalette.bind(this);
    this.showConfirmDialog = this.showConfirmDialog.bind(this);
    this.hideConfirmDialog = this.hideConfirmDialog.bind(this);
    this.paletteDeleteConfirmed = this.paletteDeleteConfirmed.bind(this);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  showConfirmDialog(id) {
    this.setState({
      showDialog: true,
      id
    });
  }

  hideConfirmDialog() {
    this.setState({
      showDialog: false,
      id: ""
    });
  }

  paletteDeleteConfirmed() {
    this.props.handleDelete(this.state.id);
    this.hideConfirmDialog();
  }

  render() {
    const { showDialog, id } = this.state;
    const { palettes, classes } = this.props;
    const allPalettes = palettes.map(palette => (
      <CSSTransition key={palette.id} classNames="fade" timeout={500}>
        <MiniPalette
          {...palette}
          handleClick={this.goToPalette}
          handleDelete={this.showConfirmDialog}
        />
      </CSSTransition>
    ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link className={classes.newLink} to="/palette/new">
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {allPalettes}
          </TransitionGroup>
        </div>
        <Dialog
          open={showDialog}
          onClose={this.hideConfirmDialog}
          aria-labelledby="delete-confirm-title"
        >
          <DialogTitle id="delete-confirm-title" variant="h5">
            <Typography variant="body2">
              {`
            ${id}
            `}
            </Typography>
            <Typography component="p" variant="h5" color="textSecondary">
              {`
            Delete this Palette? 
            `}
            </Typography>
          </DialogTitle>

          <List>
            <ListItem onClick={this.hideConfirmDialog} button>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
            <ListItem onClick={this.paletteDeleteConfirmed} button>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
