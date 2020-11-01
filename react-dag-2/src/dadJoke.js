import React, { useEffect, useState } from 'react';

const DadJoke = () => {

    const url = "https://icanhazdadjoke.com/"
    const [joke, setJoke] = useState('No Joke')

    function getJoke() {
        fetch(url, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                setJoke(data.joke)
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getJoke()
        }, 100000)
        return () => {
            clearInterval(interval)
            alert('Gone')
        }
    }, [])

    return (
        <div>
            <h2>Dad Joke</h2>
            <p>{joke}</p>
        </div>
    )
}

export default DadJoke
