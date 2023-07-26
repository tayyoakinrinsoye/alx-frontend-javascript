export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    let task = true; // Use let instead of var (This is a different variable than the one declared outside the block)
    let task2 = false; // Use let instead of var (This is a different variable than the one declared outside the block)
  }

  return [task, task2];
}