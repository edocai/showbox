import React, { ReactElement } from 'react'
import { shows } from 'types'
import { Description, Genre, StyledLink, Name, Details, Img, Status } from './styles'

interface Props {
    content: shows
}

const ShowCard = ({ content }: Props): ReactElement => {
    const { show } = content
    const { summary, name, genres, image, id, status } = show
    
      const removeTags = (summary: string) => {
    if (summary === null || summary === "") {
      return false;
    } else {
      summary = summary.toString();
    }
    return summary.replace(/(<([^>]+)>)/gi, "");
  };

    return (
        <StyledLink href={`https://www.tvmaze.com/shows/${id}`} target="_blank" style={{textDecoration: 'none'}}>
            <Img alt={`${name} logo`} src={image && image.original}/>
            <Details>
                <Name>{name}</Name>
                <Description>{summary && removeTags(summary)}</Description>
                <Genre>{genres[0]} {genres[1]}</Genre>
                <Status>{status}</Status>
                
            </Details>
        </StyledLink>
    )
}

export default ShowCard
