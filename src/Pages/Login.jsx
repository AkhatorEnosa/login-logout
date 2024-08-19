import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../Slice/UserSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    // react states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();


        dispatch(login({
            email,
            password
        })).then(action => {
            localStorage.setItem("user", JSON.stringify({
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email
                }))
            navigate('/')
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Email</label>
            <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"  required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
            <button type="submit">Login</button>
    </form>
  )
}

export default Login