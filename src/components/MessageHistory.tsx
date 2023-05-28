import React from 'react';
import Response from './Response';
import Message from './Message';
import Typing from './Typing';
import MessageHistoryProps from '../types/MessageHistory.types';

type Props = Readonly<MessageHistoryProps>;

const MessageHistory: React.FC<Props> = ({ list }) => {
  if (!list) {
    return null;
  }

  return (
    <ul>
      {list.map(
        (message) =>
          (message.type === 'response' && <Response key={message.id} message={message} />) ||
          (message.type === 'message' && <Message key={message.id} message={message} />) ||
          (message.type === 'typing' && <Typing key={message.id} message={message} />),
      )}
    </ul>
  );
};

export default MessageHistory;
