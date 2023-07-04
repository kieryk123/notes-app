import { test, expect } from '@playwright/test'

test('Page opens', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/The Notes App/)
})

test('Adds new note', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('single-note')).toHaveCount(1)
  await page.getByTestId('add-note-btn').click()
  await expect(page.getByTestId('single-note')).toHaveCount(2)
})

test('Deletes note', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('single-note')).toHaveCount(1)
  await page.getByTestId('single-note').getByTestId('delete-note-btn').click()
  await expect(page.getByTestId('single-note')).toHaveCount(0)
})

test('Edits note', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('single-note').getByTestId('note-content')).toHaveText(
    'note content'
  )
  await page.getByTestId('single-note').getByTestId('edit-note-btn').click()
  await page.getByTestId('single-note').getByRole('textbox').fill('updated content')
  await page.getByTestId('single-note').getByTestId('edit-note-btn').click()
  await expect(page.getByTestId('note-content')).toHaveText('updated content')
})

test('Persists state', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('single-note')).toHaveCount(1)
  await page.getByTestId('add-note-btn').click()
  await expect(page.getByTestId('single-note')).toHaveCount(2)
  await page.reload()
  await expect(page.getByTestId('single-note')).toHaveCount(2)
})
