### Паттерны написания кода

Базово за основу код стайла взят набор [правил Airbnb](https://leonidlebedev.github.io/javascript-airbnb/)

По выработанным в процессе разработки нормам командой выведен список синтаксических конструкций языка, который
необходимо использовать при написании кода.

1. Использование элиасов вместо относительных путей (alias.json).

```javascript
// плохо
import {getColor} from '../../../../palette/helpers';

// хорошо
import {getColor} from '@palette/helpers';
```

2. Вынос более двух условий в переменную

```javascript
// плохо
const callSomething = ({conditionOne, conditionTwo, conditionThree, callSomeAnother}) => {
  if (conditionOn && conditionTwo && conditionThree) {
    callSomeAnother();
  }
  ;
};

// хорошо
const callSomething = ({conditionOne, conditionTwo, conditionThree, callSomeAnother}) => {
  const isAvailable = conditionOn && conditionTwo && conditionThree;

  isAvailable && callSomeAnother();
};

```

3. Отделение отступами логических блоков в коде (касается как функций, так и React компонентов)

```javascript
// плохо
const callSomething = () => {
  const foo = 1;
  const bar = 'test'
  const test = ['1', '2', '4', '5', '7'];
  test.map(Number);
  return test;
};

// хорошо
const callSomething = () => {
  const foo = 1;
  const bar = 'test'
  const test = ['1', '2', '4', '5', '7'];

  test.map(Number);

  return test;
};

```

4. Выносим анонимные колбеки

```javascript
// плохо
const test = [1, 2, 3, 4, 5, 'u', 't'];

const callSomething = () => {
  test.filter((item) => typeof item === 'number')
};

useEffect(() => {
  // some logic
}, [a, b, c]);

const Component = () => {
  return (
    <div>
      {test.map((item) => (<span>{item}</span>))}
    </div>
  )
}

// хорошо
const test = [1, 2, 3, 4, 5, 'u', 't'];

const callSomething = () => {
  const getNumbers = (item) => typeof item === 'number';

  test.filter(getNumbers);
};

const callSmth = () => {
  // some logic
}

useEffect(callSmth, [a, b, c]);

const Component = () => {
  const renderSmth = (item) => (<span>{item}</span>);

  return (
    <div>
      {test.map(renderSmth)}
    </div>
  )
}
```

5. Деструктаризация

```javascript
// плохо

// Деструктаризация в импортах
import * as React from 'react';

const call = (event: React.MouseEvent) => {
  // do something
}

// =====================================================

// Деструктаризация объектов
const obj = {
  foo: 1,
  bar: 2
}

const call = () => `${obj.foo} ${obj.bar}`;

// =====================================================

// Декструктаризация массивов при чем если нужен не первый элемент массива используем пропуск через запятую

const arr = [1, 3, 5, 7]

const call = () => `${obj[2]} ${obj[3]}`;

// =====================================================

// Деструктаризация сразу в аргументах функции
const call = (props) => {
  const {foo, bar} = props;

  return `${foo} ${bar}`;
};

// хорошо

// Деструктаризация в импортах
import React, {MouseEvent} from 'react';

const call = (event: MouseEvent) => {
  // do something
}

// =====================================================

// Деструктаризация объектов
const obj = {
  foo: 1,
  bar: 2
}

const call = () => {
  const {foo, bar} = obj;

  return `${foo} ${bar}`;
};

// =====================================================

// Декструктаризация массивов при чем если нужен не первый элемент массива используем пропуск через запятую

const arr = [1, 3, 5, 7]

const call = () => {
  const [, , foo, bar] = obj;

  return `${foo} ${bar}`;
};

// =====================================================

// Деструктаризация сразу в аргументах функции
const call = ({foo, bar}) => `${foo} ${bar}`;

```

6. Опциональный чейнинг

```javascript
// плохо 

const call = ({onClick}) => {
  if (onClick) {
    onClick();
  }
}

// хорошо

const call = ({onClick}) => {
  onClick?.();
}

```

7. Упрощение блока if

```javascript
// плохо
const call = ({onClick}) => {
  const anyCondition = true;

  if (anyCondition) {
    onClick();
  }
}

// =====================================================

const call = ({onClick}) => {
  const anyCondition = true;

  if (anyCondition) {
    // long code
  }
}

// хорошо

const call = ({onClick}) => {
  const anyCondition = true;

  anyCondition && onClick();
}

// =====================================================

const call = ({onClick}) => {
  const anyCondition = true;

  if (!anyCondition) {
    return;
  }

  // long code
}

```

8. Объединение более трех аргументов функции в объект. Когда функция принимает в себя более двух аргументов, лучше
   заменить это на 1 аргумент в виде объекта, где свойства объекта будут выступать в качестве аргументов функции. Это
   позволит не задумываться о порядке передаваемых аргументов, а также избежать необходимости их передавать, если они,
   например, опциональны.

```javascript
// плохо 

const call = (a, b, c, d) => {
  // some code
}


// хорошо

const call = ({a, b, c, d}) => {
  // some code
}

```
