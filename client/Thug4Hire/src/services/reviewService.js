const apiUrl = 'http://localhost:3030/reviews';

export const submitGigRating = async(gigId, rating) => {
    const response = await fetch(`${apiUrl}/${gigId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({rating}),
    })

    const result = await response.json();

    return result;
}