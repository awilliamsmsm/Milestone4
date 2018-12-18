import { mount } from '@vue/test-utils' 
import flushPromises from 'flush-promises'
import * as timeService from '../../../src/services/timeService'
import HelloWorld from '../../../src/components/HelloWorld'

describe('HelloWorld.vue', () => {
  timeService.getTime = jest.fn().mockResolvedValue({ data: '00:00:00 AM' })
  timeService.getCanadaTime = jest.fn().mockResolvedValue({ data: 'The time in Canada is 05:00:00 AM' })

  it('should render correct contents', () => {
    const cmp = mount(HelloWorld, { sync: false });
    expect(cmp.vm.$el.querySelector('h1').textContent).toBe('Welcome')
  })

  it('should call the time service display the time', async () => {
    const cmp = mount(HelloWorld, { sync: false });
    await flushPromises() 
    expect(cmp.find('h2').text()).toBe('00:00:00 AM')
  }) 

  it('should call the time service display the Canadian time', async () => {
    const cmp = mount(HelloWorld, { sync: false });
    await flushPromises() 
    expect(cmp.find('h3').text()).toBe('The time in Canada is 05:00:00 AM')
  }) 
})
