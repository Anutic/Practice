async function fetchUrls(urls) {
  try {
    const fetchPromises = urls.map(url => 
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${url} (статус ${response.status})`);
        }
        return response.text();
      })
    );

    const results = await Promise.all(fetchPromises);
    console.log('Все загрузки завершены успешно!');
    return results; 
  } catch (error) {
    console.error('Ошибка при загрузке:', error.message);
    throw error; 
  }
}

const urls = [
  'https://api.github.com/users/octocat',         
  'https://dog.ceo/api/breeds/image/random',     
  'https://official-joke-api.appspot.com/random_joke' 
];

fetchUrls(urls)
  .then(contents => console.log('Загруженные данные:', contents))
  .catch(err => console.error('Ошибка в одном из URL:', err));