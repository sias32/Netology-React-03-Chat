import React from 'react';
import MessageHistory_other from '../types/MessageHistory_other.types';

type Props = Readonly<MessageHistory_other>;

const Message: React.FC<Props> = ({ message }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {message.from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

export default Message;
