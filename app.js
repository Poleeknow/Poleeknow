const getDogImg = document.getElementById('getDogImg');
const urlForAPI = 'https://dog.ceo/api/breeds/image/random';
const dog = document.getElementById('dog');
const two = document.getElementById('two');

function fetchDogis() {
    return fetch(urlForAPI).then(r => r.json());
}

function consoleDogImg(someDog){
    dog.src = someDog.message;
    dog.style.border = '3px solid hotpink';
    dog.style.borderRadius = '50%';
    two.style.display = 'block';
}
getDogImg.addEventListener('click', async function (e) {
    const someDog = await fetchDogis();
    consoleDogImg(someDog);
});