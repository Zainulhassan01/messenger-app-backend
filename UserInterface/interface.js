const openai = require("../ChatGPT/configration")
// const readline = require("readline")

// const userInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
// userInterface.prompt();

const userPropmt = async (input) => {
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      })
      .then((res) => {
        return (res.data.choices[0].message.content);
        // userInterface.prompt();
      })
      .catch((e) => {
        console.log(e);
      });
  };

module.exports = userPropmt;