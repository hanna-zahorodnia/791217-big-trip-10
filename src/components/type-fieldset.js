import {getTypeCheckbox} from "./type-checkbox.js";

const eventOptions = [
  {type: `Transfer`, options: [
    {text: `Taxi`, name: `taxi`, ischecked: false},
    {text: `Bus`, name: `bus`, ischecked: false},
    {text: `Train`, name: `train`, ischecked: false},
    {text: `Ship`, name: `ship`, ischecked: false},
    {text: `Transport`, name: `transport`, ischecked: false},
    {text: `Drive`, name: `drive`, ischecked: false},
    {text: `Flight`, name: `flight`, ischecked: true}
  ]},
  {type: `Activity`, options: [
    {text: `Check-in`, name: `check-in`, ischecked: false},
    {text: `Sightseeing`, name: `sightseeing`, ischecked: false},
    {text: `Restaurant`, name: `restaurant`, ischecked: false}
  ]}
];

export const getTypeFieldset = () => (
  eventOptions.map((element) => (
    `<fieldset class="event__type-group">
      <legend class="visually-hidden">${element.type}</legend>
      ${getTypeCheckbox(element.options)}
    </fieldset>`
  ))
  .join(`\n`)
);
