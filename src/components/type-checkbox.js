export const getTypeCheckbox = (item) => {
  return (
    `<div class="event__type-item">
      ${item.map(({ischecked, name}) => {
      return `<input id="event-type-${name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${name}" ${ischecked ? `checked` : ``}>;
          <label class="event__type-label  event__type-label--${name}" for="event-type-${name}-1">${name}</label>`;
    })
    }
    </div>`);
};
