import TestComponent from '@/test.vue'
import { mount } from '@vue/test-utils'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent)
  console.log(wrapper)
})