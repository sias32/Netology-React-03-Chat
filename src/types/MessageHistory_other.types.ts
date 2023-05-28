type messageType = {
  id: string;
  from: {
    name: string;
  };
  type: string;
  time: string;
  text?: string;
};

interface MessageHistory_other {
  message: messageType;
}

export default MessageHistory_other;
export type { messageType };
