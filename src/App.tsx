import React from 'react';
import { Router } from '@reach/router';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Recipes } from './pages';
import ThemeProvider from './components/ThemeProvider';
import { Header, Body, Footer } from './layout';
import { ErrorBoundary } from './components';
import { translate } from './constants';

Sentry.init({
  dsn: 'https://d25c67ec29f8408fbb68ed337c09b33b@o518365.ingest.sentry.io/5885049',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App: React.FC = () => (
  <Sentry.ErrorBoundary fallback={translate('errorboundry.error.text')}>
    <ErrorBoundary>
      <ThemeProvider>
        <Header />
        <Body>
          <Router>
            <Recipes path="/" />
          </Router>
        </Body>
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  </Sentry.ErrorBoundary>
);

export default App;
