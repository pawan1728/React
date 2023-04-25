import {useState} from 'react'
const Profile = () =>{
    const [count] = useState(0)
    return(
        <div>
            <h2>This is my Profile</h2>
            <h3>Count id:{count++}</h3>
        </div>
    )
}
export default Profile