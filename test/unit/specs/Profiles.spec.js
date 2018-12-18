import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Profiles from '../../../src/components/Profiles'

describe('Profiles.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Profiles)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toBe('All profiles')
  })

  describe('filters', () => {
    let cmp;

    beforeEach(() => {
      cmp = mount(Profiles, {
        sync: false
      });
      cmp.setData({ 
        profiles: [
          { profileID: '1', firstName: 'Test', lastName: 'User' },
          { profileID: '2', firstName: 'James', lastName: 'Doo' },
          { profileID: '3', firstName: 'Alistair', lastName: 'Daa' }
        ]
      })
    })

    it('filters by first name', async () => {
      cmp.setData({filterFirstName: 'James'})
      await cmp.vm.$nextTick()
      expect(cmp.findAll('.profile-row').length).toBe(1)
      expect(cmp.find('.profile-row > td:nth-child(2n)').text()).toBe('James');
    })

    it('filters by last name', async () => {
      cmp.setData({filterLastName: 'Daa'})
      await cmp.vm.$nextTick()
      expect(cmp.findAll('.profile-row').length).toBe(1)
      expect(cmp.find('.profile-row > td:nth-child(3n)').text()).toBe('Daa');
    })

    it('filters by id', async () => {
      cmp.setData({filterID: '1'})
      await cmp.vm.$nextTick()
      expect(cmp.findAll('.profile-row').length).toBe(1)
      expect(cmp.find('.profile-row > td:nth-child(1n)').text()).toBe('1');
    })
  })
})
