const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

punchlineBtn.addEventListener("click", function (){
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
});

newJokeBtn.addEventListener("click", getJoke);

const getJoke = async () => {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const data = await jokePromise.json();

    setupDiv.innerHTML = data[0].setup;
    punchline = data[0].punchline;

    punchlineDiv.innerHTML = "";
    punchlineDiv.classList.remove('bubble');

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');

}

getJoke();