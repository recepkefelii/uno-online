import { useEffect } from "react"
import { io } from "socket.io-client"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

const onSocketConnect = (nickname) => {
    const navigate = useNavigate()
    useEffect(() => {
        const socket = io(`${import.meta.env.VITE_SERVER}${nickname}`)

        if (!localStorage.getItem("nickname")) {
            socket.on('disconnect', () => {
                navigate("/register")
            })
        }
    },[])
}

export default onSocketConnect;