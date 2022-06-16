import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { shows } from 'types'

interface Props {
    content: shows
}

const ShowCard = ({ content }: Props): ReactElement => {
    const { show } = content

    const link = `/show/${show.id}`

    return (
        <Link to={link}>
            <img alt={`${show.name} logo`} src={show.image.medium}/>
            <h2>{show.name}</h2>
            <p>{show.genre}</p>
            <p>{show.summary}</p>
        </Link>
    )
}

export default ShowCard
