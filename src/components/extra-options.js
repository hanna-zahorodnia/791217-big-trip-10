export const createExtraOptions = (extraOption) => {
  return extraOption
    .map((item) => (
      `<li class="event__offer">
        <span class="event__offer-title">${item.name}</span>
        +
        &euro;<span class="event__offer-price">${item.price}</span>
      </li>`
    ))
    .join(``);
};
