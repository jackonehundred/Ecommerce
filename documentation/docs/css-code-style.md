Правила для стилевых файлов

1. Отделяем отступами каждый стилевой компонент

```typescript

export const SelectContainer = styled.div<IStylesProps>`  
 position: 
 relative; 
 width: 100%; 
 height: 100%; 
 cursor: pointer; 
 z-index: 2;  
 
 ${({dimension = 'large'}: IStylesProps) => getStylesForInput(dimension)};  
`;

export const Field = styled.p<IStylesProps>`  
 margin: 0 8px 0 0; 
 display: block; 
 user-select: none; 
 font-size: 16px;
`;

```

2. Отделяем отступами анонимные функции

```typescript

export const SelectWrapper = styled.div<IStylesProps>`  
 position: relative; 
 max-width: 150px;  
 
 ${({dimension = 'large'}: IStylesProps) => css`  
   width: ${dimension === 'small' ? '130px' : 'auto'};  
   height: ${dimension === 'small' ? '40px' : '100%'};  
   margin-bottom: ${dimension === 'small' ? '40px' : '0'};  
 `};
`;
```

3. Отделяем отступами логические куски

```typescript

export const SelectWrapper = styled.div<IStylesProps>`  
  position: relative; 
  max-width: 150px;  
  
  &:last-child {
    margin: 0;
  }
`;
```

4. Если анонимная функция получает одинаковые данные более одного раза ее необходимо вынести в именованную и расположить
   ее под импортами

```typescript

const getTextPrimaryColor = ({theme}: IBaseStyles): string => theme.text.primary.default;

export const Wrapper = styled.li`  
 display: flex; 
 border-color: ${getTextPrimaryColor};  
 background: ${getTextPrimaryColor};  
`;
```

5. Привязка к конкретным html-тегам — не есть хорошо

```typescript

const getTextPrimaryColor = ({theme}: IBaseStyles): string => theme.text.primary.default;

export const Wrapper = styled.li`  
 display: flex; 
 border-color: ${getTextPrimaryColor};  
 background: ${getTextPrimaryColor};  

 div {
   margin: 0;
 }
`;
```
