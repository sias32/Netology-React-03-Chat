type listType = {
  id: string;
  from: {
    name: string;
  };
  type: string;
  time: string;
  text?: string;
}[];

interface MessageHistoryProps {
  list: listType;
}

export default MessageHistoryProps;
export type { listType };
