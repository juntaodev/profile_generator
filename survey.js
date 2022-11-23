const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  console.log(`name is ${answer1}`);
  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`like doing ${answer2}`);
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`while linsten to ${answer3}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        console.log(`${answer4} is your fav meal`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`${answer5} is your fav dish`);
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`${answer6} is your fav sport`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer7} is your superpower`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});