import { act, createContext, useReducer } from "react";


//first we created context to be used througout the file
export const WorkoutContext = createContext()

const workoutReducer = (state, action)=>{
    switch(action.type){
        case 'SET_WORKOUT':
            return{
                workout: action.payload
            }
        case 'ADD_WORKOUT':
            return{
                workout: [...state.workout, action.payload]
            }
        case 'DEL_WORKOUT':
            return{
                workout: state.workout.filter(workout => workout._id != action.payload)
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(workoutReducer, {
        workout: null
    })


    //wrap the childern in context provider
    //in this case the childern is App component, check main.js
    return (
        //dont forget to set value to provider, in this case set state and dispatch from useReducer
        <WorkoutContext.Provider value={{state, dispatch}}> 
            {children}
        </WorkoutContext.Provider>

    )
}