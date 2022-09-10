import { NextPage } from 'next';
import { SxProps, Theme, Typography } from '@mui/material';

interface Props {
	sx?: SxProps<Theme> | undefined,
}

const Disclaimer: NextPage<Props> = ({ sx }) => {
	return (
		<Typography
			variant="caption"
			color="text.secondary"
			align="center"
			sx={{
				...sx,
				letterSpacing: 1.5,
				fontSize: 10
			}}
		>
			This application is for the exclusive use of ISEN students.
		</Typography>
	)
}

export default Disclaimer;