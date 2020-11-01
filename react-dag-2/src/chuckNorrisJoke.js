import React, { useEffect, useState } from 'react';


export default function CNJoke() {
    const [joke, setJoke] = useState({ value: "" })
    const [chuckSelector, setChuckSelector] = useState(false)

    useEffect(() => {
        function fetchChuckNorris() {
            fetch('https://api.chucknorris.io/jokes/random')
                .then(res => res.json())
                .then(joke => { setJoke(joke) })
        }
        fetchChuckNorris()
    }, [chuckSelector])

    return (
        <div>
            <button onClick={() => setChuckSelector(!chuckSelector)}>Get Chuck Joke</button>
            <p>Joke: {joke.value}</p>
        </div>
    )

}