const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: Tan
  \n❎ Tuổi: 1 tuoi
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao cân nặng: 1m68 +))
  \n💘 Mối quan hệ: ***
  \n😎 Quê quán: Quang Binh
  \n🤔 Nơi ở: Dong Nai
  \n👫 Gu: Giọng nói :<
  \n🌸 Tính cách: khi yêu xong rất là tềnh cảm :3
  \n👉 Profile: Deo cho`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100005303558824}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };