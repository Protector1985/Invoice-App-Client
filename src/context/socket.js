import React from 'react'
import socketio from "socket.io-client"


export const socket = socketio.connect("https://execudevserv.xyz/")
export const SocketContext = React.createContext()
