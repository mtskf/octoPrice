import ReactDOM from "react-dom/client";
import { ThemeProvider } from '@material-ui/core/';
import theme from 'lib/theme';
import "./index.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

serviceWorker.unregister();
