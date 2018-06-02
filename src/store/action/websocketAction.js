import { browserStore } from '../../helper/collection'
import {SOCKET_URL_BASE} from '../../helper/constant'
/*
* SOCKET actions
*/

export const wsConnected = (ws) => ({
  type: "WEBSOCKET_CONNECTED",
  ws
})

export const wsConnecting = () => ({
  type: "WEBSOCKET_CONNECTING"
})

export const wsFailed = () => ({
  type: "WEBSOCKET_FAILED"
})

export const wsDisconnect = () => ({
  type: "WEBSOCKET_DISCONNECT"
})

export const setSocketMessages = (socketMessages) => ({
  type: "SET_SOCKET_MESSAGES",
  socketMessages: socketMessages
})

export const init = () => {
  let socketMessages = [];
  return async (dispatch, getState) => {
    try {
      dispatch(wsConnecting())
      let ws = await (new WebSocket(`${SOCKET_URL_BASE}/${browserStore.get('userName')}/${browserStore.get('userId')}`));
      ws.onopen = () => {
        dispatch(wsConnected(ws));
      }
      ws.onmessage = (message) => {
        socketMessages.push(JSON.parse(message.data));
        dispatch(setSocketMessages(socketMessages))
      }
      ws.onerror = (e) => {
        throw 'error connecting'
      }
      ws.onclose=()=>{
         dispatch(wsDisconnect())
      }
    } catch (e) {
      dispatch(wsFailed())
    }
  }
}


