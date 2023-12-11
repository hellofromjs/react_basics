import { useId, useState } from "react"

let myId = 0

export default function AddArticle({onSave})
{
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        myId += 1
       
        onSave({...formData, id: myId})
    }

    return (
        <form className="form">
            <div className="form-group">
               <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Naujienos pavadinimas" className="form-control" />
            </div>
            <div className="form-group">
              <textarea name="description" onChange={handleChange} placeholder="Naujienos tekstas" className="form-control mt-3" value={formData.description}/>
            </div>
            <div className="form-group">
              <button type="submit" onClick={submitHandler} className="btn btn-primary mt-3">Saugoti</button>
            </div>
        </form>
    )
}