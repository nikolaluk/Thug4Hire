const apiUrl = 'http://localhost:3030/users';

export const login = async(userData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    const result = await response.json();

    return result;
}

export const register = async(userData) => {
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    const result = await response.json();

    return result;
}