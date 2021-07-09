/*Создайте новый модуль и опишите в нём функции взаимодействия c удалённым сервером с помощью fetch для получения и отправки данных. Актуальный адрес сервера вы найдёте в техзадании.
Подключите модуль в проект. */

const createFetch = (cb) => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json)=> cb(json))
    .catch((err) => {
      console.error(err);
    });
};

const postFetch = () =>{
  return fetch('https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'POST',
      credentials: 'same-origin',
    },
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export {createFetch};
