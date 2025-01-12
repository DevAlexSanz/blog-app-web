import ReduxProvider from "@providers/ReduxProvider";
import ThemeProvider from "@providers/ThemeProvider";
import AppRouter from "@routes/AppRouter";

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
