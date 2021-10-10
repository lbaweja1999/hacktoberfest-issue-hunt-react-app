import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function IssuesTable({ issues }) {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>S.no</TableCell>
							<TableCell align='right'>Title</TableCell>
							<TableCell align='right'>GitHub Link</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{issues.map((issue, index) => (
							<TableRow
								key={index + 1}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{index + 1}
								</TableCell>
								<TableCell align='right'>{issue.title}</TableCell>
								<TableCell align='right'>
									<a href={issue.link} target='_blank' rel='noreferrer'>
										{issue.link}
									</a>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
