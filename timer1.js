const args = process.argv.slice(2);
let timeElapsed = 0

for (let arg of args) {
  const interval = Number(arg);

  if (isNaN(interval)) {
    continue;
  }
  if (interval < 0) {
    continue;
  }

  let seconds = interval * 1000

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('beep')
  }, seconds)
}