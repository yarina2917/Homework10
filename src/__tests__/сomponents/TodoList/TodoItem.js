import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../../components/TodoList/TodoItem/TodoItem';

describe('TodoItem component', () => {

    let props;
    let component;

    beforeEach(() => {
        props = {
            deleteTodo: jest.fn(),
            checkTodo: jest.fn(),
            editTodo: jest.fn(),
            saveTodo: jest.fn(),
            todo: {
                _id: '1',
                title: 'title',
                description: 'description',
                selected: false,
                status: 'need'
            }
        };
        component = shallow(<TodoItem {...props}/>);
    });

    it('TodoItem renders without crashing', () => {
        expect(component.exists()).toBe(true);
    });

    it('Should call the checkTodo function when clicked', () => {
        expect(props.checkTodo.mock.calls.length).toBe(0);
        component.find('.todoCheck').simulate('click');
        expect(props.checkTodo.mock.calls.length).toBe(1);
    });

    it('Should add the checked class, when status was changed', () => {
        expect(component.find('.checked')).toHaveLength(0);
        component.setProps({todo: {...props.todo, status: 'done'}});
        expect(component.find('.checked')).toHaveLength(1);
    });

    it('Should call the editTodo function when clicked', () => {
        expect(props.editTodo.mock.calls.length).toBe(0);
        component.find('.todoEdit').simulate('click');
        expect(props.editTodo.mock.calls.length).toBe(1);
    });

    it('Should render the todoEdit button and item, when selected is false', () => {
        expect(component.find('.todoEdit')).toHaveLength(1);
        expect(component.find('.todoSave')).toHaveLength(0);

        expect(component.find('.item')).toHaveLength(1);
        expect(component.find('.editInputs')).toHaveLength(0);
    });

    it('Should call the saveTodo function when clicked', () => {
        component.setProps({todo: {...props.todo, selected: true}});
        expect(props.saveTodo.mock.calls.length).toBe(0);
        component.find('.todoSave').simulate('click');
        expect(props.saveTodo.mock.calls.length).toBe(1);
    });

    it('Should render the todoSave button end editInputs, when selected is true', () => {
        component.setProps({todo: {...props.todo, selected: true}});

        expect(component.find('.todoEdit')).toHaveLength(0);
        expect(component.find('.todoSave')).toHaveLength(1);

        expect(component.find('.item')).toHaveLength(0);
        expect(component.find('.editInputs')).toHaveLength(1);
    });

    it('Should call the deleteTodo function when clicked', () => {
        expect(props.deleteTodo.mock.calls.length).toBe(0);
        component.find('.todoDelete').simulate('click');
        expect(props.deleteTodo.mock.calls.length).toBe(1);
    });

});