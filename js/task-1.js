const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(categories => {
    const title = categories.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const liItem = categories.querySelectorAll('li');
    console.log(`Elements: ${liItem.length}`);
})