import "@/styles/globals.css";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
