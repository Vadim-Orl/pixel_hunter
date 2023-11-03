const nodeGameOptions = (option, typeQuestion) => {
  return `<div class="game__option">
          <img src="${option.src}" alt="${option.alt}" >
           ${nodeGameAnswer(option.inputName)}
          </div>`
}

const nodeGameAnswer = (inputName) => {
  if (inputName) {
    return `<label class="game__answer game__answer--photo">
              <input name="${inputName}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="${inputName}" type="radio" value="paint">
              <span>Рисунок</span>
            </label>`
  }
  // return ''
}

const typeQuestion = {
  singleQuestion: (options) => {
    return `<form class="game__content game__content--wide"">
                ${options.map((el) => nodeGameOptions(el, 'singleQuestion')).join('')}
                </form>`
  },

  doubleQuestion: (options) => {
    return `<form class="game__content">
                ${options.map((el) => nodeGameOptions(el, 'singleQuestion')).join('')}
                </form>`
  },

  tripleQuestion: (options) => {
    return `<form class="game__content game__content--triple">
                ${options.map((el) => nodeGameOptions(el, 'tripleQuestion')).join('')}
                </form>`
  },
}

export default typeQuestion;

//# sourceMappingURL=typeQuestion.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy90eXBlUXVlc3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZUdhbWVPcHRpb25zID0gKG9wdGlvbiwgdHlwZVF1ZXN0aW9uKSA9PiB7XG4gIHJldHVybiBgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtvcHRpb24uc3JjfVwiIGFsdD1cIiR7b3B0aW9uLmFsdH1cIiA+XG4gICAgICAgICAgICR7bm9kZUdhbWVBbnN3ZXIob3B0aW9uLmlucHV0TmFtZSl9XG4gICAgICAgICAgPC9kaXY+YFxufVxuXG5jb25zdCBub2RlR2FtZUFuc3dlciA9IChpbnB1dE5hbWUpID0+IHtcbiAgaWYgKGlucHV0TmFtZSkge1xuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCIke2lucHV0TmFtZX1cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiJHtpbnB1dE5hbWV9XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+YFxuICB9XG4gIC8vIHJldHVybiAnJ1xufVxuXG5jb25zdCB0eXBlUXVlc3Rpb24gPSB7XG4gIHNpbmdsZVF1ZXN0aW9uOiAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50IGdhbWVfX2NvbnRlbnQtLXdpZGVcIlwiPlxuICAgICAgICAgICAgICAgICR7b3B0aW9ucy5tYXAoKGVsKSA9PiBub2RlR2FtZU9wdGlvbnMoZWwsICdzaW5nbGVRdWVzdGlvbicpKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+YFxuICB9LFxuXG4gIGRvdWJsZVF1ZXN0aW9uOiAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLm1hcCgoZWwpID0+IG5vZGVHYW1lT3B0aW9ucyhlbCwgJ3NpbmdsZVF1ZXN0aW9uJykpLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgIDwvZm9ybT5gXG4gIH0sXG5cbiAgdHJpcGxlUXVlc3Rpb246IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIGA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgZ2FtZV9fY29udGVudC0tdHJpcGxlXCI+XG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLm1hcCgoZWwpID0+IG5vZGVHYW1lT3B0aW9ucyhlbCwgJ3RyaXBsZVF1ZXN0aW9uJykpLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgIDwvZm9ybT5gXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVRdWVzdGlvbjtcbiJdLCJmaWxlIjoidHlwZVF1ZXN0aW9uLmpzIn0=
