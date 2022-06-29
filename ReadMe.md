# Uptimes - Powerfull Uptime Package for Websites And More....

## Setup;
```js
npm install uptimes@latest
```
Notice: This Package Is BETA!


## Start;
```js
const Client = require("../index")
const Uptime = new Client()
Uptime.settings({
    reqTimeout: 12000 //Request Timeout Example: 1 Seconds = 1000, 10 seconds = 10000
})
```

## Start UPTIME a Website;
```js
Uptime.uptime("https://api.nicat-dcw.xyz")
```

## Uptime Yourself!! (NEW!)
```js
Uptime.uptimeMe()
```

**🧤 | List of Commands**

Name | Description | Type  | Timeout | Default Timeout
------------ | ------------ | ------------- | ------------- | ------------- |
uptime     | Uptimes a Link | URL | Settings With | 15000 (15 seconds)
uptimeMe      | Uptimes Yourself | creates Server | 150000 | 25000

** 📜 List of Settings**

Name | Description | Type  |
------------ | ------------ | ------------- |
reqTimeout | Request Timeout | NUMBER

Developed By Nicat.Dcw ❤️

**Documentation**: https://api.nicat-dcw.xyz (Cooming Soon....)

