import { mergeMap } from 'rxjs/operators';

fetchList$.pipe(
  mergeMap((item) => getDetails(item),
  )

// `switchMap`, `concatMap`... many others
