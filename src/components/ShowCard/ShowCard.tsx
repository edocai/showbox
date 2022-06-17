import React, { ReactElement } from 'react'
import { shows } from 'types'
import { Description, Genre, StyledLink, Name, Details, Img } from './styles'

interface Props {
    content: shows
}

const ShowCard = ({ content }: Props): ReactElement => {
    const { show } = content
    const { summary, name, genres, image, id } = show
    
      const removeTags = (summary: string) => {
    if (summary === null || summary === "") {
      return false;
    } else {
      summary = summary.toString();
    }
    return summary.replace(/(<([^>]+)>)/gi, "");
  };

    const link = `/show/${id}`

    return (
        <StyledLink to={link}>
            <Img alt={`${name} logo`} src={image.original}/>
            <Details>
                <Name>{name}</Name>
                <Description>{summary && removeTags(summary)}</Description>
                <Genre>{genres[0]} {genres[1]}</Genre>
                
            </Details>
        </StyledLink>
    )
}

export default ShowCard
