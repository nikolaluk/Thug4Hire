const apiUrl = 'http://localhost:3030/users';
const apiKey = '0cc6c2dba97e9b80be707005defd03f5';

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

export const changeImage = async(userId, image) =>  {
    const imageUrl = await uploadImage(image);

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

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const result = await response.json();

      const imageUrl = result.data.url;

      return imageUrl;
  }