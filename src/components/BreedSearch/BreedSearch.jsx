import { useEffect, useState } from "react"
import BreedOption from "../BreedOption/BreedOption";

export default function BreedSearch({onSearch})
{
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        try {
            fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBreeds(data)
            })
        } catch(error)
        {
            console.log(error)
        }
    }, [])

    return (
        <>
        <label htmlFor="cats-choice" className="d-block">Type in a cat breed:</label>
        <input list="cats-list" id="cats-choice" name="cats-choice" onChange={onSearch} />

        <datalist id="cats-list">
           {breeds.map(breed => <BreedOption key={breed.id} id={breed.id} name={breed.name}/>)} 
        </datalist>
        </>
    )
}