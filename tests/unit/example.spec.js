import { mount } from '@vue/test-utils'
import Body from '@/components/Body.vue'

describe('Body.vue', () => {
  it('renders correct text', () => {
    const text = "Hey, I'm Paul "
    const wrapper = mount(Body)
    expect(wrapper.text()).toMatch(text)
  })
})
