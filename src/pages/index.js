import React, { useState, useEffect } from 'react'
import InputField from '../components/input-field'
import IssuesTable from '../components/issues-table'
import CustomButton from '../components/custom-button'
import Stack from '@mui/material/Stack'
import Heading from '../components/heading'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
const hacktoberfest = require('hacktoberfest-issue-hunt')

export default function Home() {
	const [label, setLabel] = useState('')
	const [language, setLanguage] = useState('')
	const [issues, setIssues] = useState([])
	const [load, setLoad] = useState(true)
	useEffect(() => {
		hacktoberfest({ token: process.env.REACT_APP_ACCESS_TOKEN })
			.then((issues) => {
				setIssues(issues)
				setLoad(false)
			})
			.catch((err) => {
				console.log(err)
				setLoad(false)
			})
	}, [])
	const getIssuesWithLabelAndLanguage = () => {
		hacktoberfest({
			token: process.env.REACT_APP_ACCESS_TOKEN,
			labels: label || '',
			limit: 10,
			language: language || '',
			ignoreClosed: false,
			complete: false,
		})
			.then((issues) => {
				setIssues(issues)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<>
			<div>
				<Heading variant='h2' align='center'>
					Hacktoberfest Issues Hunt
				</Heading>
			</div>
			<div style={{ marginTop: '1%', paddingTop: '1%' }}>
				<Stack
					spacing={2}
					direction='row'
					alignItems='center'
					justifyContent='center'>
					<InputField
						id='outlined-basic'
						label='Enter labels'
						variant='outlined'
						color='error'
						value={label}
						onchange={(e) => setLabel(e.target.value)}
					/>
					<InputField
						id='outlined-basic'
						label='Enter language'
						variant='outlined'
						value={language}
						color='error'
						onchange={(e) => setLanguage(e.target.value)}
					/>
				</Stack>
				<div style={{ marginTop: '1%', paddingTop: '1%', textAlign: 'center' }}>
					<CustomButton
						variant='contained'
						size='medium'
						color='error'
						onclick={() => getIssuesWithLabelAndLanguage()}>
						Search issues
					</CustomButton>
				</div>
			</div>
			{!load ? (
				<div style={{ marginTop: '1%', paddingTop: '1%' }}>
					{issues?.length > 0 ? (
						<div style={{ marginLeft: '5%', marginRight: '5%' }}>
							<IssuesTable issues={issues} />
						</div>
					) : (
						<div>
							<Heading variant='h2' align='center'>
								No issues found{' '}
							</Heading>
						</div>
					)}
				</div>
			) : (
				<Box
					justifyContent='center'
					alignItems='center'
					sx={{ display: 'flex', marginTop: '5%' }}>
					<CircularProgress color='error' />
				</Box>
			)}
		</>
	)
}
