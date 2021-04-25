import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { readExcelFile } from '..';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.2),
    
    },
    display: 'flex',
    justifyContent:'center',
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept=".xlsx, .xls, .csv"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button className={classes.root} onClick={readExcelFile()} variant="contained" component="span">
          Upload CSV
        </Button>
      </label>    
    </div>
  );
}