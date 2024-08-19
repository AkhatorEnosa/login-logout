import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../Slice/UserSlice"
import { useNavigate } from "react-router-dom"

const Register = () => {
    // react states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();


        dispatch(register({
            name,
            email,
            password
        })).then(action => {
            localStorage.setItem("id", action.payload.id)
            navigate('/')
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
            <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="on"/>
        <br />
        <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="on"/>
        <br />
        <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
            <button type="submit">Register</button>
    </form>
  )
}

export default Register