import React, { ReactElement } from 'react'
import ShowList from 'components/ShowList'
import withErrorBoundary from 'hoc/withErrorBoundary'

const Home = (): ReactElement => (
	<main>
		<ShowList />
	</main>
)

export default withErrorBoundary(Home)