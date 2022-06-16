import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import ShowRender from 'components/ShowList/ShowRender'
import { shows } from 'types'

const ShowContainer = (): ReactElement => {
    const [shows2, setShows2] = useState<shows[]>([])

    const fetchShows = async () => {
        const { data}  =await axios.get('https://api.tvmaze.com/search/shows?q=girls')
        console.log(data);
        
        setShows2(data)
        
    }

    useEffect(() => {
        fetchShows()
    }, [])

    return (
        <ShowRender shows={shows2}/>
    ) 
}

export default ShowContainer
