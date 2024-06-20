"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import UserTeam from "@/types/random-user/TypeUserTeam";

interface UserContextProps {
  users: UserTeam[];
  fetchUsers: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserTeam[]>([]);

  async function fetchUsers() {
    if (users.length === 0) {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        throw new Error("Unable to catch User Teams");
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  });

  return (
    <UserContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextProps {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
