import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLoader from './Components/PageLoader';

const BookLists = lazy(() => import('./Pages/BookLists'));
const BookDetails = lazy(() => import('./Pages/BookDetails'));

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={BookLists} />
          <Route exact path="/details/:id" component={BookDetails} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App;

