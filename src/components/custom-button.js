import React from 'react'
import Button from '@mui/material/Button'

export default function CustomButton({ variant, children, onclick, size }) {
	return (
		<>
			<Button variant={variant} onClick={onclick} size={size}>
				{children}
			</Button>
		</>
	)
}
