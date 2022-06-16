import React, { ReactElement } from 'react'
import ShowCard from 'components/ShowCard/ShowCard'
import { shows } from 'types'

interface Props {
    err?: string,
    shows: shows[]
}

const ShowList = ({err, shows }: Props): ReactElement => {
    if (err) {
        return <p>Unable to fetch shows</p>
    }
    if (!shows?.length) {
        return <p>No shows available</p>
  }
  return (
    <ul>
        {shows.map(sho => (
            <li key={sho.show.id}>
                <ShowCard content={sho}/>
            </li>
        ))}
    </ul>
  )
}

export default ShowList
