import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyles from 'styles/global/global'

const App: FC = (): ReactElement => (
	<>
	  <GlobalStyles />
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
			</Routes>
		</Router>
	</>
)

export default App