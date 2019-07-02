const period = process.argv.slice(2).map(ele => Number(ele));

for (let i = 0; i < period.length; i++) {
  if (period[i] >= 0) {
    setTimeout(()=>{
      //console.log("sound");
      process.stdout.write('\x07');

    }, period[i] * 1000);
  }
    
}
