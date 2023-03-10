import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useContext, useState, useEffect, useRef} from "react"
import Post from "../components/Post"
import {MyContext} from "../middleware/Context"

const Dashboard = () => {
  
  const userContext = useContext(MyContext)
  const currentUser = useRef({})
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[])

  userContext.then(data=>{
    currentUser.current = data
  })


  useEffect(()=>{

    const getAccount = async() =>{
      setUser(currentUser.current)
    }

    getAccount()

  },[])

  useEffect(()=>{

    const getPost = async() =>{
       const postsFromServer = await getAudios()
       setAudioTracks(postsFromServer)
    }

    getPost()
  },[])

  const getAudios = async() => {
    let res = await fetch("http://localhost:8000/audio")
    let data = await res.json();
    return data
  }


  const rows = []

  audioTracks.forEach(ele=>{
    rows.push(<Post text = {ele.name} key = {ele._id}/>)
  })
  

  
  return (
    <div>
      {userContext ? <UserHeader/> : <Header/>}
      <div id = 'main'>
        <section className="major column flex">
        Dashboard

        {rows}


        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard