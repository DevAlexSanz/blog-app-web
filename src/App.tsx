import ThemeProvider from "@providers/ThemeProvider";
import AppRouter from "@routes/AppRouter";
import ReduxProvider from "./providers/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
