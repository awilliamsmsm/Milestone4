import Vue from 'vue'
import AddProfile from '../../../src/components/AddProfile'

describe('AddProfile.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AddProfile)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toBe('Create Profile')
  })
})