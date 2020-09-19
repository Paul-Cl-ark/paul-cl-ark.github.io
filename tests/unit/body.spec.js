import { shallowMount } from '@vue/test-utils'
import Body from '@/components/Body.vue'

describe('Body.vue', () => {
  it('renders correct text', () => {
    const text = "Hey, I'm Paul "
    const wrapper = shallowMount(Body)
    expect(wrapper.text()).toMatch(text)
  })
})
