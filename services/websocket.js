import { apiConfig } from '../config/config'

class WebSocketConnection {
    constructor(AuthToken, eventHandler) {
        this.open = false
        this.connected = false
        this.token = AuthToken
        this.eventHandler = eventHandler
    }



    connect() {
        this.socket = new WebSocket(`${apiConfig.wssUrl}?Authorizer=${this.token}`)
        console.log("connecting")
        this.socket.onopen = () => {
            console.log("connected successfully")
            this.connected = true
        }
        this.onerror = err => {
            console.log("an error occured")
            console.log(err)
        }
    
        this.onclose = err => {
            this.connected = false
            console.log("connection was closed")
        }

        this.onmessage = message => {
            this.eventHandler(message)
        }

        this.emit = this.emit.bind(this)
    }

    closeConnection() {
        this.socket.close()
        this.connected = false
    }
  
    emit(message) {
      if( this.connected ) {
          console.log("sending")
        this.socket.send(JSON.stringify(message))
        this.open = this.open
      }else {
          this.connect()
      }
    }
  }



export default class Singleton {
    constructor(AuthToken) {
        if(!Singleton.instance || AuthToken !== Singleton.instance.token) {
            Singleton.instance = new WebSocketConnection(AuthToken)
        }
    }

    getConnection() {
        return Singleton.instance
    }
}