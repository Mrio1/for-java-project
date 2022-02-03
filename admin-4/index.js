const testThemes = document.getElementById('testThemes');
console.log(testThemes)

testThemes.addEventListener('click', ({ target }) => {
    const testItem = target.closest('.test-item');
    console.log(testItem)
    if (testItem) {
        testItem.querySelector('.test-item__text').setAttribute( 'contenteditable',"true");
        testItem.classList.add('edit');
    }
    
})

const activateAddTestButton = document.getElementById('activateAddTestButton');
const addTestForm = document.getElementById('addTestForm');

activateAddTestButton.addEventListener('click', () => {
    addTestForm.classList.toggle('active');
})