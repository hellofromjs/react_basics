import Article from "../article/Article"
import { useState } from "react"
import AddArticle from "../AddArticle/AddArticle"

import CatBreedSearch from "../CatBreedSearch/CatBreedSearch"

const Main = () => {

    const [clicked, setClicked] = useState(false);
    const [posts, setPosts] = useState([]);

    const handleShowForm = () => {
        setClicked(true)
    }

    const handleFormData = data => {
        setPosts((prevData) => {
            return [...prevData, data ]
        })

        setClicked(false)
    }

   

  

    return (
        <main>

            <CatBreedSearch/>


            <button className="btn btn-primary" onClick={handleShowForm}>Prideti Naujiena</button>

            <h1>Naujienos</h1>

            {clicked && 
            <div>
                <h2>Prideti naujiena</h2> 
                <AddArticle onSave={handleFormData}/>
            </div>}

            <div className="d-flex flex-row flex-wrap gap-3">
                {posts.map(post => <Article 
                    title={post.title} 
                    description={post.description}
                    key={post.id}/>
                )}
            </div>
        </main>
    )
}

export default Main