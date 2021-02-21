import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider} from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
