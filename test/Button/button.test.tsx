import React, { Component } from 'react';
import { Button } from '../../src';
import Enzyme, { ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('button component tests', () => {
    let wrapped:ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
    const callBack = sinon.spy();
    beforeEach(() => {
        wrapped = mount(<div id='div'><Button onClick={callBack}>hola</Button></div>);
    })

    it('shows a button', () => {
        expect(wrapped.find(Button).length).toEqual(1);
    });

    it('contains a button tag', () => {
        expect(wrapped.find("button").length).toEqual(1);
    });

    it('contains inner html', () => {
        expect(wrapped.text()).toEqual('hola');
    });

    it('on click test', () => {
        wrapped.find('button').simulate('click');
        sinon.assert.called(callBack);
    });

    afterEach(() =>{
        wrapped.unmount();
    })
})