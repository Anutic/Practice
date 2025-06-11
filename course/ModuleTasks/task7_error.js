function accessProperty(obj, property) {
  try {
    const value = obj[property];
    console.log(`Значение свойства ${property}:`, value);
    return value;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`Ошибка TypeError: невозможно прочитать свойство '${property}' неопределенного объекта`);
      return undefined;
    } else {
      console.error('Произошла неизвестная ошибка:', error);
      throw error;
    }
  }
}

const user = { name: "Алексей", age: 30 };
const userName = accessProperty(user, "name");

const myObject = undefined;
const result = accessProperty(myObject, 'someProperty');
console.log('Результат:', result);