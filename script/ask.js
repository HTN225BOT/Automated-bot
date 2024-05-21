const fonts = {
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩",
  i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", 
  p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", 
  w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻" 
};

const axios = require('axios');

module.exports.config = {
  name: "ai",
  version: 1.0,
  credits: "aesther",//Api OtinXsandip
  description: "AI",
  hasPrefix: false,
  usages: "{pn} [prompt]",
  aliases: ["ai2", "bot"],
  cooldown: 0,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const prompt = args.join(" ");
    if (!prompt) {
      await api.sendMessage("𝗛𝗜 𝗜'𝗩𝗘 𝗕𝗘𝗘𝗡 𝗗𝗘𝗩𝗘𝗟𝗟𝗢𝗣𝗘𝗗 𝗕𝗬 𝗠𝗜𝗖𝗛𝗔𝗘𝗟/𝗛𝗔𝗜𝗧𝗔𝗡𝗜 𝗛𝗢𝗪 𝗖𝗔𝗡 𝗜 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨 𝗧𝗢𝗗𝗔𝗬 😇?", event.threadID);
      return;
    }
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
    const answer = response.data.answer;

    let formattedAnswer = "";
    for (let char of answer) {
      if (fonts[char.toLowerCase()]) {
        formattedAnswer += fonts[char.toLowerCase()];
      } else {
        formattedAnswer += char;
      }
    }

    await api.sendMessage(`🌍 𝗡𝗢𝗩𝗔 𝗕𝗢𝗧 ⛲ \n━━━━━━━━━━━\n${formattedAnswer} ☕`, event.threadID);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
