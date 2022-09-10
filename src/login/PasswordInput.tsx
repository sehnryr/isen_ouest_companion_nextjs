import { NextPage } from 'next';
import {
	TextField,
	InputAdornment,
	IconButton,
} from '@mui/material';
import {
	Visibility,
	VisibilityOff
} from '@mui/icons-material';

interface Props {
	showPassword: boolean
	setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
}

const PasswordInput: NextPage<Props> = ({
	showPassword,
	setShowPassword
}) => {
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<TextField
			required
			fullWidth
			margin='normal'
			name='password'
			label='Password'
			variant='outlined'
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: <InputAdornment position='end'>
					<IconButton
						aria-label='toggle password visibility'
						onClick={handleClickShowPassword}
						edge='end'
					>
						{showPassword ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				</InputAdornment>
			}}
		/>
	)
}

export default PasswordInput;