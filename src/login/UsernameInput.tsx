import { TextField } from '@mui/material';

const Username = () => {
	return <TextField
		required
		fullWidth
		margin='normal'
		name='username'
		label='Username'
		variant='outlined'
	/>
}

export default Username;