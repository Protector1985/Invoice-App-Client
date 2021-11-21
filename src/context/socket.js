import React from 'react'
import socketio from "socket.io-client"


export const socket = socketio.connect("http://143.198.51.5:5000")
export const SocketContext = React.createContext()
