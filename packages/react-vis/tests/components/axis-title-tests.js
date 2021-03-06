import React from 'react';
import {mount} from 'enzyme';
import AxisTitle from 'plot/axis/axis-title';
import {ORIENTATION} from 'utils/axis-utils';

const {LEFT, RIGHT, TOP, BOTTOM} = ORIENTATION;

const baseProps = {
  width: 400,
  height: 400,
  title: 'Title'
};

test('AxisTitle: horizontal bottom axis title', () => {
  const props = Object.assign({}, baseProps, {
    orientation: BOTTOM
  });
  const $ = mount(<AxisTitle {...props} />);
  const innerGroupHtml = $.find('g > g').html();
  expect(innerGroupHtml.includes('text-anchor: end')).toBeTruthy();
  expect($.find('text').text()).toBe(baseProps.title);
});

test('AxisTitle: horizontal top axis title', () => {
  const props = Object.assign({}, baseProps, {
    orientation: TOP,
    position: 'start'
  });
  const $ = mount(<AxisTitle {...props} />);
  const innerGroupHtml = $.find('g > g').html();
  expect(innerGroupHtml.includes('text-anchor: start')).toBeTruthy();
  expect($.find('text').text()).toBe(baseProps.title);
});

test('AxisTitle: vertical left title', () => {
  const props = Object.assign({}, baseProps, {
    orientation: LEFT
  });
  const $ = mount(<AxisTitle {...props} />);
  const innerGroupHtml = $.find('g > g').html();
  expect(innerGroupHtml.includes('text-anchor: end')).toBeTruthy();
  expect($.find('text').text()).toBe(baseProps.title);
});

test('AxisTitle: vertical right title', () => {
  const props = Object.assign({}, baseProps, {
    orientation: RIGHT,
    position: 'start'
  });
  const $ = mount(<AxisTitle {...props} />);
  const innerGroupHtml = $.find('g > g').html();
  expect(innerGroupHtml.includes('text-anchor: start')).toBeTruthy();
  expect($.find('text').text()).toBe(baseProps.title);
});
