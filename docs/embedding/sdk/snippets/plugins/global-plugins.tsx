import type { PropsWithChildren } from "react";
import {
  MetabaseProvider,
} from "@metabase/embedding-sdk-react";

const authConfig = {};
const theme = {};

const Example = ({ children }: PropsWithChildren) => (
  // [<snippet example>]
  <MetabaseProvider
    authConfig={authConfig}
    theme={theme}
    pluginsConfig={{
      mapQuestionClickActions: () => [], // Add your custom actions here
    }}
  >
    {children}
  </MetabaseProvider>
  // [<endsnippet example>]
);
