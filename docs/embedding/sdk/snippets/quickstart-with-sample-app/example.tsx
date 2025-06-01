import {
  InteractiveQuestion,
  MetabaseProvider,
} from "@metabase/embedding-sdk-react";

const authConfig = {};
const theme = {};

const questionId = 1;

const Example = () => (
  // [<snippet example>]
  <MetabaseProvider authConfig={authConfig} theme={theme}>
    <InteractiveQuestion questionId={questionId} />
  </MetabaseProvider>
  // [<endsnippet example>]
);
