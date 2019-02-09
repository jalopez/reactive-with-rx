import { range } from 'rxjs';
import { map, scan, filter, delay, take } from 'rxjs/operators';

data$ = range(1, 1000000); // could be whatever

data$.pipe(
  delay(100),
  take(200),
  map((value) => value * 2),
  filter((value) => value % 10 === 0),
  scan((acc, value) => acc + value, 0)
);
