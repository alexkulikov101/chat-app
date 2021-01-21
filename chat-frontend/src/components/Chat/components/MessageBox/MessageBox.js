import React from 'react'
import { useSelector } from 'react-redux'
import Message from '../Message/Message'
import './MessageBox.scss'

const MessageBox = ({ chat }) => {
  const user = useSelector((state) => state.authReducer.user)
  return (
    <div id='msg-box'>
      {chat.Messages.map((message, index) => (
        <Message
          key={message.id}
          user={user}
          chat={chat}
          message={message}
          index={index}
        />
      ))}
    </div>
  )
}

export default MessageBox
