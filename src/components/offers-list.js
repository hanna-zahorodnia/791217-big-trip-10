export const getOffersList = (offers) => (
  offers.map((element) => (
    `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${element.name}-1" type="checkbox" name="event-offer-${element.name}" ${element.checked ? `checked` : ``}>
        <label class="event__offer-label" for="event-offer-${element.name}-1">
          <span class="event__offer-title">${element.type}</span>
          +
          €&nbsp;<span class="event__offer-price">${element.price}</span>
        </label>
      </div>`
  ))
  .join(`\n`)
);
