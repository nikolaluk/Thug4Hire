const apiUrl = 'http://localhost:3030/gigs';

export const createGig = async(title, type, price, description) => {
    const response = await fetch(`${apiUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({title, type, price, description}),
    });

    const result = await response.json();

    return result;
}

export const getAllGigs = async() => {
    const response = await fetch(`${apiUrl}/`);

    const result = await response.json();

    return result;
}

export const getOneGig = async(gigId) => {
    const response = await fetch(`${apiUrl}/${gigId}`);

    const result = await response.json();

    return result;
}