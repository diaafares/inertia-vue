import Inertia from 'inertia'

export default {
  name: 'Inertia',
  props: ['component', 'props', 'resolveComponent'],
  provide() {
    return { page: this.page }
  },
  data() {
    return { page: Inertia.page }
  },
  created() {
    Inertia.init(this.component, this.props, this.resolveComponent)
  },
  render(h) {
    return Inertia.render(h)
  }
}
