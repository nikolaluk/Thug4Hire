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