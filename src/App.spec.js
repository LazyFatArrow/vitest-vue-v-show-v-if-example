import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  it('should hide the headline by default', () => {
    const wrapper = shallowMount(App, {
      attachTo: document.body,
    })

    expect(wrapper.find('[data-test="headline"]').isVisible()).toBe(false)
  })

  it('should toggle the headline visibility when clicking on the "Toggle Headline" button', async () => {
    const wrapper = shallowMount(App, {
      attachTo: document.body,
    })

    await wrapper.get('[data-test="toggle-headline"]').trigger('click')

    expect(wrapper.find('[data-test="headline"]').isVisible()).toBe(true)

    await wrapper.get('[data-test="toggle-headline"]').trigger('click')

    expect(wrapper.find('[data-test="headline"]').isVisible()).toBe(false)
  })

  it('should render the Example component by default', () => {
    const wrapper = shallowMount(App)

    expect(wrapper.findComponent({ name: 'Example' }).exists()).toBe(true)
  })

  it('should toggle rendering the Example component when clicking on the "Toggle Component" button', async () => {
    const wrapper = shallowMount(App)

    await wrapper.get('[data-test="toggle-component"]').trigger('click')

    expect(wrapper.findComponent({ name: 'Example' }).exists()).toBe(false)

    await wrapper.get('[data-test="toggle-component"]').trigger('click')

    expect(wrapper.findComponent({ name: 'Example' }).exists()).toBe(true)
  })
})
