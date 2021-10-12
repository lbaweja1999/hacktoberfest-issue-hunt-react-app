import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/index'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
	typography: {
		fontFamily: 'Poppins,sans-serif',
	},
})
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}

export default App
