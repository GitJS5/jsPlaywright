const { test, expect } = require('@playwright/test');

test('Testează lista inițială de cărți', async ({ page }) => {
  // Deschide site-ul local
  await page.goto('file://' + __dirname + '/../test-site.html');
  
  // Verifică titlul primei cărți
  const firstBook = await page.textContent('.book h3');
  console.log('Cartea găsită:', firstBook);
  expect(firstBook).toBe('The Little Prince');
});

test('Adaugă o carte nouă', async ({ page }) => {
  await page.goto('file://' + __dirname + '/../test-site.html');
  
  // Completează formularul
  await page.fill('#bookTitle', 'Harry Potter');
  await page.fill('#author', 'J.K. Rowling');
  await page.click('button[type="submit"]');
  
  // Verifică numărul de cărți
  const allBooks = await page.$$('.book');
  console.log('Număr total cărți:', allBooks.length);
  expect(allBooks.length).toBe(2);
});