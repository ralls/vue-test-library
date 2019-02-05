import * as components from './components/index'

const testlib = {
  installed: false,
  install (Vue, options = {}) {
    if (this.installed) {
      return
    }
    this.installed = true

    Object.values(components).forEach(component => {
      Vue.use(component)
    })
  }
}

export default testlib
