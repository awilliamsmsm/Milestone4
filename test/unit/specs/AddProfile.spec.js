import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { mount } from '@vue/test-utils' 
import flushPromises from 'flush-promises'
import AddProfile from '../../../src/components/AddProfile'

Vue.use(VeeValidate)

describe('AddProfile.vue', () => {
  const cmp = mount(AddProfile, {
    sync: false
  });

  it('should render correct contents', () => {
    const firstNameInput = cmp.find('h1')
    expect(firstNameInput.is('h1')).toBe(true)
  })

  it('should not allow incorrect values to be input', async () => {
    cmp.setData({ profile: { firstName: '2', lastName: 'Doo' }});
    cmp.find('#firstNameQuestion').trigger('blur')
    await flushPromises()
    expect(cmp.contains('#firstNameError')).toBe(true)
  })

  it('should not enable button if there is no input', async () => {
    const submitButton = cmp.find('.btn')
    expect(submitButton.element.getAttribute('disabled')).toBe('disabled');
  })

  it('should enable button with correct inputs', () => {
    const submitButton = cmp.find('.btn')
    cmp.find('input#firstNameQuestion').element.value = "test";
    cmp.find('input#firstNameQuestion').trigger('input');
    cmp.find('input#lastNameQuestion').element.value = "name";
    cmp.find('input#lastNameQuestion').trigger('input');

    Vue.nextTick(()=>{
      expect(submitButton.element.getAttribute('disabled')).not.toBe('disabled');
    })
  })

  it('should not enable button with incorrect inputs', () => {
    const submitButton = cmp.find('.btn')
    cmp.find('input#firstNameQuestion').element.value = "2";
    cmp.find('input#firstNameQuestion').trigger('input');
    cmp.find('input#lastNameQuestion').element.value = "-";
    cmp.find('input#lastNameQuestion').trigger('input');

    Vue.nextTick(()=>{
      expect(submitButton.element.getAttribute('disabled')).toBe('disabled');
    })
  })
})