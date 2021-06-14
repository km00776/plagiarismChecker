import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import readXlsxFile from 'read-excel-file';

const useStyles = makeStyles (theme => ({
  root: {
    '& > *': {
      margin: theme.spacing (0.2),
    },
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons () {
  const classes = useStyles ();


  
  function getData() {
    if (typeof window !== "undefined") {
      const input = document.getElementById('c');
      input.addEventListener ('change', () => {
        readXlsxFile(input.files[0]).then (rows => {
          console.log(rows);
        });
      });
    }
  }

  return (
    <div className={classes.root}>
      <input
        accept=".xlsx, .xls, .csv"
        className={classes.input}
        id="c"
        multiple
        type="file"
      />
      <label htmlFor="c">
        <Button
          className={classes.root}
          onClick={getData}
          variant="contained"
          component="span"
        >
          Upload CSV
        </Button>
      </label>
    </div>
  );
}
