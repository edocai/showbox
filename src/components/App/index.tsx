import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'components/Home'

const App: FC = (): ReactElement => (
	<>
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
			</Routes>
		</Router>
	</>
)

export default App