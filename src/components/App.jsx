// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// //import { Switch, Route, Redirect } from 'react-router-dom'; 
// import Home from './Home';
// const Movies = lazy(() => import('./Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/movies" component={Movies} />
//           <Route exact path="/movies/:movieId" component={MovieDetails} />
//           <Route path="/movies/:movieId/cast" component={Cast} />
//           <Route path="/movies/:movieId/reviews" component={Reviews} />
//           <Redirect to="/" />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;




