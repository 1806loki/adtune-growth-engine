import { AppProviders } from "@/app/providers.tsx";
import { AppRouter } from "@/app/router.tsx";

const App = () => (
  <AppProviders>
    <AppRouter />
  </AppProviders>
);

export default App;
