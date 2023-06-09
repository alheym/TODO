import React, { FC, memo, useCallback, useState } from 'react';

import Button from '../Button';
import Input from '../Input';

interface Todo {
    title: string;
    id: number;
}

const Todos: FC<{}> = () => {
    const [text, setText] = useState<string>('');
    const [filterText, setFilterText] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);


    // отслеживаем изменение букв в инпуте нового списка
    const handleChangeAddElementInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }, []);

    // метод фильтрации
    const handleFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
    }, []);

    // кнопка добавления
    const handleAdd = useCallback(() => {
        setTodos([...todos, { title: text, id: todos.length + 1 }]);
    }, [text, todos]);

    // удаление элемента из списка
    const handleRemove = useCallback((id: number) => {
        setTodos(todos.filter((item: Todo) => item.id !== id));
    }, [todos]);


    return (
        <div>
            <Input
                customField="str"
                value={text}
                placeholder="Что нужно сделать?"
                onChange={handleChangeAddElementInput}
            />
            <Button onClick={handleAdd}>
                Добавить
            </Button>

            <div>
                <Input
                    customField="filter"
                    placeholder="Что ищем?"
                    onChange={handleFilter}
                />

                <ul>
                    {todos
                        .filter((item: Todo) => item.title.includes(filterText))
                        .map(({ title, id }) => (
                            <li key={id}>
                                <span>{title} ({id})</span>
                                <Button onClick={() => handleRemove(id)}>
                                    Удалить
                                </Button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default memo(Todos);
