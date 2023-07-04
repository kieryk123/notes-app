import { describe, it, expect } from 'vitest'
import Note from '../Note.vue'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('<Note />', () => {
  it('renders properly', () => {
    const wrapper = mount(Note, {
      props: { dateCreated: 1688312997894, content: 'note content' },
      global: {
        components: {
          Button: Button
        }
      }
    })
    expect(wrapper.text()).toContain('edit')
  })

  it('toggles edit mode', async () => {
    const wrapper = mount(Note, {
      props: { dateCreated: 1688312997894, content: 'note content' },
      global: {
        components: {
          Button: Button
        }
      }
    })
    const button = wrapper.get('[data-testid=edit-btn]')
    expect(button.text()).toContain('edit')
    await button.trigger('click')
    expect(button.text()).toContain('submit')
  })
})
