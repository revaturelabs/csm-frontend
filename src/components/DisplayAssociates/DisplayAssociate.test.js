import React from 'react';
import DisplayAssociate from './DisplayAssociate';
import renderer from 'react-test-renderer';

test('component renders', () => {
    const testAssociate = {
        'ID':1,
        'Name':'TestName',
        'batch':'test-batch'
    }
    const component = renderer.create(
        <DisplayAssociate associate={testAssociate}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})