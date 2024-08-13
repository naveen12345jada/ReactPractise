import React from 'react'

import {Button,Stack,ButtonGroup,Avatar,Typography,CircularProgress,LinearProgress, Box,Rating} from '@mui/material';
// import {SendIcon }from '@mui/icons-material/Send';
// import {DeleteIcon} from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon  from '@mui/icons-material/Star'
import IconButton from '@mui/material/IconButton';
import Progressbar from './Progressbar';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


import TextField from '@mui/material/TextField';

const MaterialUi = () => {
  return (
    <>
    <Stack spacing={5} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained" disabled>Contained</Button>
    <Button variant="outlined" >Outlined</Button>
    <Button variant="contained" color='error' >Outlined</Button>
   
    <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
    <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
    <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>

      <ButtonGroup  variant="outlined" aria-label="Basic button group">
      <Button color='warning'>One</Button>
      <Button color='secondary'>Two</Button>
      <Button color='primary'>Three</Button>
    </ButtonGroup>
    <ButtonGroup  variant="contained" aria-label="Basic button group">
      <Button color='warning'>One</Button>
      <Button color='secondary'>Two</Button>
      <Button color='primary'>Three</Button>
    </ButtonGroup>

    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className='bg-success' />
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className='bg-danger'/>
    <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 24, height: 24 }}
/>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>



  </Stack>

<Typography  variant='h1'>
        h1. Heading
</Typography>
<Typography variant="h2" gutterBottom className='text-bg-danger'>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <CircularProgress color="inherit" />
      <LinearBuffer></LinearBuffer>
      <CircularProgress color="secondary" />
    
      <LinearProgress color="inherit" />
      <CircularProgress color="success" />
      <LinearProgress color="success" />
  
     <Progressbar></Progressbar>
       
       <LinearProgress className='bg-warning'></LinearProgress>
  

  <BasicRating></BasicRating>

  <HoverRating></HoverRating>
  <RadioGroupRating></RadioGroupRating>

 < FloatingActionButtons></FloatingActionButtons>
<BasicTextFields></BasicTextFields>

<SimpleBadge></SimpleBadge>


      </>

      
  )
}





export default MaterialUi



 function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}


 function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} className='bg-danger'/>
    </Box>
  );
}





 function BasicRating() {
  const [value, setValue] = React.useState(3);

  return (
    <Box
      sx={{
        '& > legend': { mt: 5 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
<div>
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      </div>
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}




const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}





const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export  function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}




 function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}




 function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}