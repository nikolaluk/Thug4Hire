const apiUrl = 'http://localhost:3030/reviews';

export const submitGigRating = async(gigId, rating, text) => {
    const response = await fetch(`${apiUrl}/${gigId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({rating, text}),
    })

    const result = await response.json();

    return result;
}

export const getOneReview = async(reviewId) => {
    const response = await fetch(`${apiUrl}/${reviewId}`);

    const result = await response.json();

    return result;
}