import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import ShowRender from 'components/ShowList/ShowRender'
import { shows } from 'types'
import { Div, Input, Button } from './styles'

const ShowContainer = (): ReactElement => {
    const [shows2, setShows2] = useState<shows[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");

    const fetchShows = async () => {
        const { data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

        setShows2(data)
    }
    
    const onSearchHandler = (e: any) => {
        e.preventDefault();
        fetchShows()
    }

    useEffect(() => {
        fetchShows()
    }, [])

    return (
        <>
            <Div>
                <form>
                    <Input
                    type="text"
                    placeholder="Search for TV Series"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button className="btn btn-block" onClick={onSearchHandler}>
                    SEARCH
                    </Button>
                </form>
            </Div>
        <ShowRender shows={shows2} />
        </>
    ) 
}

export default ShowContainer
