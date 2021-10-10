import React, { useState, useEffect } from 'react'
import InputField from '../components/input-field'
import IssuesTable from '../components/issues-table'
import CustomButton from '../components/custom-button'
import Stack from '@mui/material/Stack'
import Heading from '../components/heading'
const hacktoberfest = require('hacktoberfest-issue-hunt')

export default function Home() {
	const [label, setLabel] = useState('')
	const [language, setLanguage] = useState('')
	const [issues, setIssues] = useState([])

	useEffect(() => {
		hacktoberfest({ token: process.env.REACT_APP_ACCESS_TOKEN })
			.then((issues) => {
				setIssues(issues)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	const getIssuesWithLabelAndLanguage = () => {
		hacktoberfest({
			token: process.env.REACT_APP_ACCESS_TOKEN,
			labels: label || '',
			limit: 10,
			language: language || '',
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
					Hacktoberfest Issue Hunt
				</Heading>
			</div>
			<div style={{ marginTop: '3%', paddingTop: '3%' }}>
				<Stack
					spacing={2}
					direction='row'
					alignItems='center'
					justifyContent='center'>
					<InputField
						id='outlined-basic'
						label='Enter labels first timers only, help wanted, good first issues, etc..'
						variant='outlined'
						value={label}
						onchange={(e) => setLabel(e.target.value)}
					/>
					<InputField
						id='outlined-basic'
						label='Enter language JS,Java,Go etc..'
						variant='outlined'
						value={language}
						onchange={(e) => setLanguage(e.target.value)}
					/>

					<CustomButton
						variant='outlined'
						size='medium'
						onclick={() => getIssuesWithLabelAndLanguage()}>
						Search issues
					</CustomButton>
				</Stack>
			</div>
			<div style={{ marginTop: '3%', paddingTop: '3%' }}>
				{issues?.length > 0 ? (
					<IssuesTable issues={issues} />
				) : (
					<div>
						<Heading variant='h2' align='center'>
							No issues found{' '}
						</Heading>
					</div>
				)}
			</div>
		</>
	)
}
