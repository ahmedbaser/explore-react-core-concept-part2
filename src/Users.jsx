import { useState } from "react"

export default function Users() {
    const [user, setUsers] = useState([])
    useState(()=>{ 
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(res => res.json())
    .then(data => setUsers(data))
    },[])
    return (
         <div>
         <h3>User: {user.length}</h3>
       </div>
    )
}

/* 
1. declare a state to hold the data
2. useEffect with call back and dependency array
3. use fetch to load data
*/