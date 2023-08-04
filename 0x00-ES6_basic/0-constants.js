export function taskFirst() {
  const task = 'I prefer const when I can.'; // Using const to instantiate the variable
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Using let to instantiate the variable
  combination += getLast();

  return combination;
}
