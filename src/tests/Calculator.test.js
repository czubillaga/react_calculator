import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add');
    const equalsButton = container.find('#operator-equals');
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtractButton = container.find('#operator-subtract');
    const equalsButton = container.find('#operator-equals');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const equalsButton = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalsButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    button2.simulate('click');
    button1.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('21');
  });

  it('should be able to chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const addButton = container.find('#operator_add');
    const subtractButton = container.find('#operator-subtract');
    const equalsButton = container.find('#operator-equals');
    button2.simulate('click');
    addButton.simulate('click');
    button7.simulate('click');
    subtractButton.simulate('click');
    button1.simulate('click');
    equalsButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('8');
  });

  // it('should be able to clear the running total without affecting the calculation', () => {
  //   const button2 = container.find('#number2');
  //   const button1 = container.find('#number1');
  //   const button7 = container.find('#number7');
  //   const addButton = container.find('#operator_add');
  //   const subtractButton = container.find('#operator-subtract');
  //   const equalsButton = container.find('#operator-equals');
  //   const clearButton = container.find('#clear');
  //   button2.simulate('click');
  //   addButton.simulate('click');
  //   button7.simulate('click');
  //   clearButton.simulate('click');
  //   subtractButton.simulate('click');
  //   button1.simulate('click');
  //   equalsButton.simulate('click');
  //   const runningTotal = container.find('#running-total');
  //   expect(runningTotal.text()).toEqual('8');
  // });

})

