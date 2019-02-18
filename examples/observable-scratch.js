import { Observable } from 'rxjs';
const hello$ = Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World'); // can be async
  if (errorCondition) {
    observer.error('error message');
  }
  // no new values from here
  observer.complete();

  return () => { // unsubscribe function
    // clear timers, etc
  }
});
