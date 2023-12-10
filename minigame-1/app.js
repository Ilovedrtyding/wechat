// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // 获取用户信息
          wx.getUserInfo({
            success: userRes => {
              this.globalData.userInfo = userRes.userInfo
              // 可以将用户信息发送到后台保存，也可以在这里进行其他操作
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
