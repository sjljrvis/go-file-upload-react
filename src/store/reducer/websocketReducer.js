const initialState = {
  status: 'disconnected',
  ws: null,
  socketMessages: []
}

const websocket = (state = initialState, action) => {
  switch (action.type) {
    case "WEBSOCKET_CONNECTING":
      return Object.assign({}, state, {
        status: 'connecting'
      })
    case "WEBSOCKET_CONNECTED":
      return Object.assign({}, state, {
        status: 'connected',
        ws: action.ws
      })
    case "WEBSOCKET_FAILED":
      return Object.assign({}, state, {
        status: 'failed'
      })
    case "WEBSOCKET_DISCONNECT":
      return Object.assign({}, state, {
        status: 'disconnected',
        ws: null
      })
    case "SET_SOCKET_MESSAGES":
      return Object.assign({}, state, {
        socketMessages: action.socketMessages
      })
      
    default:
      return state
  }
}

export default websocket