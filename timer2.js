const stdin = process.stdin;


stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) =>{


  for (let i = 0; i < 9; i++) {
    if (key == i) {
      console.log("setting timer for " + key + " seconds.");
      setTimeout(()=>{
        console.log("timer done!");
      }, Number(key) * 1000);
    }
  }



  if (key === 'b') {
    stdin.write('beep');
  }

  if (key === '\u0003') {
    stdin.write("thanks for using me, Ciao!\n");
    //process.stdout.write("thanks for using me, Ciao!\n");
    process.exit();
  }
  //stdin.write("nothing else");
});


