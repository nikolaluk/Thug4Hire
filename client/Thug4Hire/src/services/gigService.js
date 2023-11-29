const apiUrl = 'http://localhost:3030/gigs';

export const createGig = async(title) => {
    const response = await fetch(`${apiUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({title}),
    });

    const result = await response.json();

    return result;
}

export const getAllGigs = async() => {
    const response = await fetch(`${apiUrl}/`);

    const result = await response.json();

    return result;
}