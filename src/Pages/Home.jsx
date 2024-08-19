import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getCurrUser, logout } from "../Slice/UserSlice"

const Home = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getCurrUser)
    if(getCurrUser()) {
      setName(getCurrUser().name)
    } else {
      setName('')
    }
  }, [dispatch])

  return (

    name !== '' ? <>
       <h1>Welcome{name}</h1>
       <button onClick={() => dispatch(logout()) && setName('')}>Logout</button>
     </> : <>
       <h1>Welcome Guest</h1>
       <Link to="/register"><button>Register</button></Link>
       <Link to="/login"><button>Login</button></Link></>
  )
}

export default Home