import React from 'react'
import TextField from '@mui/material/TextField'

export default function InputField({
	id,
	label,
	variant,
	onchange,
	value,
	color,
}) {
	return (
		<>
			<TextField
				id={id}
				label={label}
				variant={variant}
				onChange={onchange}
				value={value}
				color={color}
			/>
		</>
	)
}
