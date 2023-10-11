import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [todos, setTodos] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchTodos =  async () => {
        setIsLoading(true)
        await axios
        .get('http://localhost:3000/todos')
        .then(response => {
            setIsLoading(false)
            setTodos(response.data)
        })
        .catch(error => {
            setIsLoading(false)
            setError(error.response.statusText)
        })
    
    }

    useEffect(() => {
        fetchTodos()
    },[])
    
    return ( 
        <div>
            { isLoading && <p>Loading ...</p>}
            { todos ? JSON.stringify(todos) : JSON.stringify(error)}
        </div>
     );
}
 
export default Home;