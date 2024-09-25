import { useContext, useEffect, useState } from "react"
import Workoutform from "../components/Workoutform"
import { WorkoutContext } from "../context/WorkoutContext"

function Home(){
    const [workouts, setWorkouts] = useState()

    const {state, dispatch} = useContext(WorkoutContext)
    
    //we fetch data using backend route, in this case we fetched all data
    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch('/workout')

            const json = await response.json()
            
            if(response.ok){
                dispatch({type: 'SET_WORKOUT', payload: json})
                console.log(state.workout);
                
            }
        }
        fetchData()
    },[])

    const deleteWorkout = async(id) =>{
        const response = await fetch(`./workout/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        if(response.ok){
            dispatch({type: 'DEL_WORKOUT', payload:id})
        }
    }
    return(
        <h1 className="title">
        
            <ul className="workouts">
                {state.workout && state.workout.map((workout) =>(
                    <li className="work">
                        <p>{workout.title}</p>
                        <button onClick={() => deleteWorkout(workout._id)}>delete</button>
                    </li>
                ))}
            </ul>
            <Workoutform/>
        </h1>
    )
}

export default Home