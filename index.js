const request = require("axios")
const db = require("inflames.db")
module.exports = class uptimess{
 setUptime(){
  const fetc = db.get(`uptimes`)
  setInterval(function(){
  request.get("https://nicat-dcw.xyz")
  .then(function (response) {
    // handle success
    console.log(response && response.size);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  },15000)
}
settings(url, config = {}){
    if(!url) throw new TypeError("Please Validate A Config.")
    if(config === "reqTimeout"){
        if(!config.content) throw new TypeError("Please valid A Number with milseconds format! Example: 1 seconds = 1000 , 10 seconds = 10000")
        db.set(`uptimeTimeout`, config.content)
    }
}

     uptime(url){
         const Timeout = db.fetch(`uptimeTimeout`)
      if(!url.startsWith === "https://" && !url.startsWith === "http://") throw new TypeError("Link starts must be https:// or http://")
      db.push(`uptimes`, {url: url})
      const fetc = db.get(`uptimes`)
      let axios = request.create({
  baseURL: url,
  timeout: Timeout,
  withCredentials: true
});
  setInterval(function(){
  axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response && response.size);
  })
  .catch(function (error) {
    // handle error
    throw new TypeError(error)
  })
  .then(function () {
    // always executed
  });
  },Timeout || 15000)
      return `Link Added! Uptime Starts will 15 seconds.`
    }
     uptimeMe(){
      db.set(`uptime.me`, true)
     setInterval(function(){
  require('http').createServer((req, res) => res.end('OK')).listen(3000)
},15000 || 25000)
      return `Successfully!`
    }
  
}
