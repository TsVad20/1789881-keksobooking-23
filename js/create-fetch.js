/*Создайте новый модуль и опишите в нём функции взаимодействия c удалённым сервером с помощью fetch для получения и отправки данных. Актуальный адрес сервера вы найдёте в техзадании.
Подключите модуль в проект. */

export const getData = (cb) => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(json => cb(json));
};
