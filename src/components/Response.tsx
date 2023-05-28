import React from 'react';
import MessageHistory_other from '../types/MessageHistory_other.types';

type Props = Readonly<MessageHistory_other>;

const Response: React.FC<Props> = ({ message }) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{message.from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  );
};

export default Response;
