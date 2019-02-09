import { from, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

from([1, 2, 3]);
from(new Promise());
fromEvent(document, 'click');
ajax({ url: '...');

// ...(many others)
