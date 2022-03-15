import {useState} from "react"

export const Form = () => {
    const [form,setForm] = useState({titre : "", body : ""})
    let [status,setStatus] = useState({status : false})
    function handleChange(e){//evenement
        const {name,value} = e.target;
        setForm({...form,[name]: value})
    } 

    function handleSubmit(e){

        e.preventDefault(); 
        console.log(form)
        if(form.titre.length >0 && form.body.length >0){
            setForm({titre:"",body:""}) // vide le formulaire
        }
        else{
            alert("Veuillez completez le formulaire")
        }
    }

    function afficher(){
        setStatus(status = true)
    }
    function masquer(){
        setStatus(status = false)
    }

    if(status === true){
        return  <div className="col-3">
            <br/>
            <button onClick={masquer} className="btn btn-outline-dark">Masquer le formulaire</button>
            <br/>
            <br/>
            {/*Par defaut il recharge la page*/}
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="titre" placeholder="Titre de l'article" value={form.titre} onChange={handleChange}/>
                <br/>
                <textarea name="body" className="form-control my-4" placeholder="Body de l'article" value={form.body} onChange={handleChange}/>
                <br/>
                <input type="submit" className="btn btn-outline-dark"/>
                <br/>
            </form>
        </div>
    }
    else{
        return <div className="col-3">
            <button onClick={afficher} className="btn btn-outline-dark">Afficher le formulaire</button>
            <br/>
            
        </div>
    }
    
}