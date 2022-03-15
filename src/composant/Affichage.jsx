import { useState } from "react" 
import { useEffect } from "react" 


export const Affichage = () => {

    function supprimer (){
        
    }

    const [post , setProfils] = useState([]) ;
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(reponse => reponse.json())
        .then(data => setProfils(data))
    } , [])
    return <>
        {post.map( (post , index) => {
            return <article class="list-group-item" key={index}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br/>
                <button onClick={supprimer} className="btn btn-outline-dark">Supprimer</button>
                <br/>
            </article>
        } )}
    </>
}