import { useState, useEffect } from "react";
import BreedSearch from "../BreedSearch/BreedSearch"
import CatImage from "../CatImage/CatImage"

export default function CatBreedSearch()
{
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search)
        {
            try {
                fetch('https://api.thecatapi.com/v1/images/search?breed_ids='+search)
                .then(response => response.json())
                .then(data => {
                    setCats(data)
                })
            } catch(error)
            {
                console.log(error)
            }
        }
       
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="my-3">
            <BreedSearch onSearch={handleSearch}/>
            
            <div className="mt-3">
                {cats.map(cat => <CatImage key={cat.id} url={cat.url} />)}
            </div>
        </div>
    )
}