import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
