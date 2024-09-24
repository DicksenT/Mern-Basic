import { useEffect, useState } from "react"
import Workoutform from "../components/Workoutform"

function Home(){
    const [workouts, setWorkouts] = useState()
    
    //we fetch data using backend route, in this case we fetched all data
    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch('/workout')

            const json = await response.json()
           
            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchData()
    },[])

    useEffect(() =>{
        console.log(workouts);
        
    },[workouts])
    return(
        <h1 className="title">
            <ul className="workouts">
                {workouts && workouts.map((workout) =>(
                    <li>{workout.title}</li>
                ))}
            </ul>
            <Workoutform/>
        </h1>
    )
}

export default Home