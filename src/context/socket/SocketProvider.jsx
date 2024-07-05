import { createContext, useMemo, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../constants";
import { setSocketConnection } from "../../Redux/reducers/SocketSlice/SocketSlice";
import { useDispatch } from "react-redux";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};

export const SocketProvider = (props) => {
  const dispatch = useDispatch();

  const socket = useMemo(() => {
    const newSocket = io(SOCKET_URL, { transports: ["websocket"] });
    console.log('newSocket', newSocket,SOCKET_URL)
    newSocket.on("connect", () => {
      console.log("Socket connected");
    });

    newSocket.on("disconnect", () => {
      // console.log("Socket disconnected");
    });

    return newSocket;
  }, []);

  useEffect(() => {
    const handleConnect = () => {
      if (socket.id) {
        dispatch(setSocketConnection(socket.id));
      }
    };

    if (socket) {
      socket.on("connect", handleConnect);
    }

    return () => {
      if (socket) {
        socket.off("connect", handleConnect);
      }
    };
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
