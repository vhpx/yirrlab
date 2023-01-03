"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { UserDataProvider } from "../../hooks/useUserData";
import { SWRConfig } from "swr";

const Providers = ({ supabaseClient, initialSession, children }) => {
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={initialSession}
    >
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <UserDataProvider>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <ModalsProvider>
              <NotificationsProvider position="bottom-left">
                {children}
              </NotificationsProvider>
            </ModalsProvider>
          </MantineProvider>
        </UserDataProvider>
      </SWRConfig>
    </SessionContextProvider>
  );
};

export default Providers;
