async function fetchSequentialRequests() {
  let userData; 

  try {
    const firstResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!firstResponse.ok) throw new Error(`Ошибка первого запроса: ${firstResponse.status}`);
    userData = await firstResponse.json(); 

    const secondUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
    const secondResponse = await fetch(secondUrl);
    if (!secondResponse.ok) throw new Error(`Ошибка второго запроса: ${secondResponse.status}`);
    const postsData = await secondResponse.json();

    console.log('Данные пользователя:', userData);
    console.log('Его посты:', postsData);
    return { user: userData, posts: postsData };

  } catch (error) {
    console.error('Произошла ошибка:', error.message);
    if (userData) console.error('Данные пользователя (частичные):', userData);
    throw error;
  }
}

fetchSequentialRequests()
  .then(data => console.log('Успешно:', data))
  .catch(err => console.error('Ошибка выполнения:', err));