const apiUrl = 'http://localhost:3030/users';

export const login = async(username, password) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    })

    const result = await response.json();

    return result;
}

export const register = async(username, password, repeatPassword) => {
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, repeatPassword}),
    })

    const result = await response.json();

    return result;
}

export const getOneUser = async(userId) => {
    const response = await fetch(`${apiUrl}/${userId}`);

    const result = await response.json();

    return result;
}

export const changeImage = async(userId, imageUrl) =>  {
    const response = await fetch(`${apiUrl}/changePicture/${userId}`,
        {
            method: 'PUT',
            headers: {
                'X-Authorization': localStorage.getItem('accessToken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({imageUrl})
        })

    const result = await response.json();

    return result;
}

export const changeEmail = async(userId, email) =>  {
    const response = await fetch(`${apiUrl}/changeEmail/${userId}`,
        {
            method: 'PUT',
            headers: {
                'X-Authorization': localStorage.getItem('accessToken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email})
        })

    const result = await response.json();

    return result;
}