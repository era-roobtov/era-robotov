import { useState } from "react";

const URL = "https://era-robotov.ru/api/mail";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [courses, setCourses] = useState('');

    async function handleSumbit(e) {
        e.preventDefault();

        const json = {
            name,
            email,
            telephoneNumber: tel,
            courses,
        };

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'origin': 'https://era-robotov.ru'
            },
            body: JSON.stringify(json)
        })
            .then((r) => console.log(r))
            .catch((e) => console.error(e))
    }

    return (
        <form onSubmit={handleSumbit}>
            <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="name" />
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="email" />
            <input type="text" onChange={(e) => { setTel(e.target.value) }} value={tel} placeholder="tel" />
            <input type="text" onChange={(e) => { setCourses(e.target.value) }} value={courses} placeholder="courses" />

            <button type="submit">kekekke</button>
        </form>
    )
}

export default Form;
