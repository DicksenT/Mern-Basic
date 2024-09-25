import { useContext, useState } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

const Workoutform = ()=>{
    const {dispatch} = useContext(WorkoutContext)
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const workout = {title, reps, load}

        const response = await fetch('/workout',{
            method:'POST',
            body:JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok){
            setError(json.message)
            console.log(error);
            
        }
        else{
            dispatch({type: 'ADD_WORKOUT', payload: json})
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            console.log('Success!');
            
        }
    }
    return(
       <form className="" onSubmit={handleSubmit}>
            <label htmlFor="">Please enter workout name</label>
            <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}/>

            <label htmlFor="">Please enter workout reps</label>
            <input type="text" 
            value={reps}
            onChange={(e)=> setReps(e.target.value)}/>

            <label htmlFor="">Please enter workout load</label>
            <input type="text" 
            value={load}
            onChange={(e) => setLoad(e.target.value)}/>

            <button type="submit">Submit</button>
            {error && <div className="error">{error}</div>}
       </form> 
    )
}

export default Workoutform
