let getDataBtn = document.getElementById("btnData");
let htmlElement = document.getElementById("container");

function Joke (type, setup, punchline)
{
    this.type = type,
    this.question = setup,
    this.answer = punchline,

    this.getJoke = function()
    {
        return `${this.question}\n${this.answer}`;
    }
};

function getJokeData()
{
    const url = "http://official-joke-api.appspot.com/jokes/programming/ten";

    fetch(url)
    .then(response => 
        {
            if(!response.ok)
            {
                throw new Error `There is an error with the networ or server`;
            }
            return response.json();
        })
    .then(responseData => 
        {
            console.log(responseData);
            const transformedData = transformData(responseData);
            // console.log(transformedData);
            displayData(transformedData, htmlElement );
        })
    .catch(error =>
        {
            console.log(error);
        })
}


function transformData(array)
{
    let resultArray = [];
    for(let i = 0; i < array.length; i++)
    {
        let joke = new Joke(array[i].type, array[i].setup, array[i].punchline);
        resultArray.push(joke);
        console.log(resultArray);
    }
    console.log(resultArray);
    return resultArray;
}

function displayData(array, htmlElement)
{
    htmlElement.textContent = "";
    for(let i = 0; i < array.length; i++)
    {
        let jokeElement = document.createElement("div");
        jokeElement.classList.add("joke-container");
    
        let questionElement = document.createElement("p");
        questionElement.classList.add("question");
        questionElement.textContent = `${array[i].question}`;

        let answerElement = document.createElement("p");
        answerElement.classList.add("answer");
        answerElement.textContent = `${array[i].answer}`;

        jokeElement.appendChild(questionElement);
        jokeElement.appendChild(answerElement);

        htmlElement.appendChild(jokeElement);
    }
    
}
getDataBtn.addEventListener("click", getJokeData);