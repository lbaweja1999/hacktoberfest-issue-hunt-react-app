import React from 'react'
import { Typography } from '@mui/material'

export default function Heading({ align, variant, children }) {
	return (
		<Typography align={align} variant={variant}>
			{children}
		</Typography>
	)
}
