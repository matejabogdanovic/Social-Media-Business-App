import { createContext, useContext, useState } from "react";

import { CommentType } from "./Comment";

const CommentContext = createContext<
  [
    CommentType | undefined,
    React.Dispatch<React.SetStateAction<CommentType | undefined>>
  ]
>([undefined, () => {}]);

export const useComment = () => useContext(CommentContext);

const CommentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [comment, setComment] = useState<CommentType>();

  return (
    <CommentContext.Provider value={[comment, setComment]}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
