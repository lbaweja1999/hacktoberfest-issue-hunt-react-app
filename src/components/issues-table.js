import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}))

export default function IssuesTable({ issues }) {
	return (
		<>
			<TableContainer component={Paper}>
				<Table stickyHeader aria-label='sticky table' sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<StyledTableCell>S.no</StyledTableCell>
							<StyledTableCell>Title</StyledTableCell>
							<StyledTableCell>Labels</StyledTableCell>
							<StyledTableCell>Created At</StyledTableCell>
							<StyledTableCell>State</StyledTableCell>
							<StyledTableCell>Comments</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{issues.map((issue, index) => (
							<StyledTableRow
								key={index + 1}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<StyledTableCell component='th' scope='row'>
									{index + 1}
								</StyledTableCell>
								<StyledTableCell>
									<a href={issue.link} target='_blank' rel='noreferrer'>
										{issue.title}
									</a>
								</StyledTableCell>
								<StyledTableCell>{issue.labels}</StyledTableCell>
								<StyledTableCell>{issue.createdAt}</StyledTableCell>
								<StyledTableCell>{issue.state}</StyledTableCell>

								<StyledTableCell>{issue.comments}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
