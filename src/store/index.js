export default {
  debug: true,

  state: {
    profile: {},
    canAccess: false
  },

  setProfile (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.profile = newValue
  },

  setAccess (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.canAccess = newValue
  }

} 