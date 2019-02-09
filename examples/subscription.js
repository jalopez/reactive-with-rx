
const unsubscribe = hello$.subscribe((value) => {
  console.log(value); // prints Hello ... and then ...  world
}/*, onComplete, onError*/)
