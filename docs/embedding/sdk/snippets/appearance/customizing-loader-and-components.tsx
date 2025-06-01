// [<snippet imports>]
import {
  MetabaseProvider,
  StaticDashboard,
} from "@metabase/embedding-sdk-react";
// [<endsnippet imports>]

const authConfig = {};

const Example = () => {
  return (
    // [<snippet example>]
    <MetabaseProvider
      // [<ignore>]
      authConfig={authConfig}
      // [<endignore>]
      loaderComponent={() => <div>Analytics is loading...</div>}
      errorComponent={({ message }) => <div>There was an error: {message}</div>}
    >
      <StaticDashboard dashboardId={1} />
    </MetabaseProvider>
    // [<endsnippet example>]
  );
};
