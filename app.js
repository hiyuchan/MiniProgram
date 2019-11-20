var now = new Date();
App({
  a:1,
  timestamp: String(now.getFullYear()) + String(now.getMonth() + 1) + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds(),
})
