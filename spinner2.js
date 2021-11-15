//Refactoring code
const spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  \n']
let delay = 0;

for (let i = 0; i<spinner.length; i++) {
  delay += 200
  setTimeout(() => { 
    process.stdout.write(spinner[i]);
  }, delay);
}
