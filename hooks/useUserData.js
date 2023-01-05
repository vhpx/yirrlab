"use client";

import { showNotification } from "@mantine/notifications";
import { createContext, useContext } from "react";
import useSWR, { mutate } from "swr";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const { data, error } = useSWR("/api/user");
  const isLoading = !data && !error;

  const updateData = async (data) => {
    const response = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate("/api/user");
      showNotification({
        title: "Updated profile",
        message: "Your profile has been updated",
        color: "teal",
      });
    } else {
      showNotification({
        title: "Failed to update profile",
        message: "Please try again later",
        color: "red",
      });
    }
  };

  const values = {
    isLoading,
    data,
    updateData,
  };

  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);

  if (context === undefined)
    throw new Error(`useUserData() must be used within a UserDataProvider.`);

  return context;
};
