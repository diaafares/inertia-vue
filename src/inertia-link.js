import Inertia, { shouldIntercept } from 'inertia'

export default {
  props: {
    href: String,
    replace: Boolean,
    preserveScroll: Boolean,
  },
  methods: {
    visit(event) {
      if (shouldIntercept(event)) {
        event.preventDefault()
        Inertia.visit(this.href, { replace: this.replace, preserveScroll: this.preserveScroll })
      }
    },
  },
  render: function(h) {
    return h('a', {
      attrs: {
        href: this.href,
      },
      on: {
        click: this.visit,
      },
    }, this.$slots.default)
  },
}
