import Inertia from 'inertia'

export default {
  name: 'Inertia',
  props: {
    component: String,
    props: Object,
    resolveComponent: Function,
  },
  provide() {
    return {
      page: this.page
    }
  },
  data() {
    return {
      page: Inertia.page
    }
  },
  created() {
    Inertia.init(this.component, this.props, this.resolveComponent)
  },
  render(h) {
    if (this.page.instance) {
      return h(this.page.instance, {
        key: location.pathname,
        props: this.page.props
      })
    }
  }
}
