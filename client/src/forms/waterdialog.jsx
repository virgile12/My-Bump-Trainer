import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';

export default class AddWater extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: 440,
      drunk_at: "",
      open: false,
    }
  }  

  handleChangeVolume = event => {
    console.log("look EVENT NAME", [event.target.name])
    console.log(event.target.value)
    this.setState({ volume: event.target.value})
  }

  handleChangeDate = event => {
    this.setState({ drunk_at: event.target.value })
  }

  handleSubmit = () => {
    let momentpresent = this.state.drunk_at ? this.state.drunk_at : new Date().toISOString()
    const data = {
      volume: this.state.volume,
      drunk_at: momentpresent
    }
    // const waterData = new FormData();
    axios({
     method: 'post',
     url: '/api/v1/water_entries', //backend api/v1/water_entries (run rake route to see backend route)
     data: data
    })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (error) {
      //handle error
      console.log(error);
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseandSubmit = () => {
    this.setState({ open: false })
    this.handleSubmit();
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add water
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add water</DialogTitle>
          <DialogContent>
            <DialogContentText>
                If you've just finished one of your regular bottles just hit "Add water". 
                Otherwise let us know how much you've had to drink and when.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="volume"
              label="Volume"
              type="text"
              fullWidth
              value={this.state.volume}
              onChange={this.handleChangeVolume}
            />
            <TextField
              autoFocus
              margin="dense"
              id="timedate"
              label="When"
              type="date"
              fullWidth
              value={this.state.drunk_at}
              onInputCapture={this.handleChangeDate}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCloseandSubmit} color="primary">
              Add water
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}