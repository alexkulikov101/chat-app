import API from './api'

const ChatService = {
  fetchChats: () => {
    return API.get('/chats')
      .then(({ data }) => {
        return data
      })
      .catch((error) => {
        console.log('ChatService, fetchChats()', error)
      })
  },
}

export default ChatService
