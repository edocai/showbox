import React, { ReactElement } from 'react'
import ShowCard from 'components/ShowCard/ShowCard'
import { shows } from 'types'
import { List, ListItem } from './styles'
import { P } from './styles'

interface Props {
    err?: string,
    shows: shows[]
}

const ShowList = ({err, shows }: Props): ReactElement => {
    if (err) {
        return <p>Unable to fetch shows</p>
    }
    if (!shows?.length) {
        return <P>Type in your desired show</P>
  }
  return (
    <>
    <List>
        {shows.map(sho => (
            <ListItem key={sho.show.id}>
                <ShowCard content={sho}/>
            </ListItem>
        ))}
    </List>
    </>
  )
}

export default ShowList
