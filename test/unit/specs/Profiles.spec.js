import Vue from 'vue'
import Profiles from '../../../src/components/Profiles'

describe('Profiles.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Profiles)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toBe('All profiles')
  })
})
