
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '@/providers';
import { AppRouter } from '@/router';

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AppProviders>
);

export default App;
