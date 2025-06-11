async function fetchWithTimeout(url, timeout = 5000) {

  const controller = new AbortController();
  const { signal } = controller;


  const timeoutId = setTimeout(() => {
    controller.abort(); 
    console.warn(`Запрос к ${url} отменен: превышен таймаут ${timeout}мс`);
  }, timeout);

  try {

    const response = await Promise.race([
      fetch(url, { signal }), 
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Таймаут')), timeout)
      )
    ]);

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ошибка: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Запрос был отменен:', error.message);
    } else {
      console.error('Ошибка при выполнении запроса:', error.message);
    }
    throw error;
  }
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 3000)
  .then(data => console.log('Данные:', data))
  .catch(err => console.error('Ошибка:', err.name, err.message));