import {atom, selector} from 'recoil';

export const todosAtom = atom({
    key: "todosAtom",
    default: [{
        title: '',
        description: ''
    }]
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ''
})

export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({get})=>{
        const todos = get(todosAtom);
        const filter =  get(filterAtom);
        return todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
    }
})