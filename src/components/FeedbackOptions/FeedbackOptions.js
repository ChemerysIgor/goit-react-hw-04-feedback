import PropTypes, { arrayOf } from 'prop-types';
// import { useState } from 'react';
import { ButtonDiv } from './FeeddbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ButtonDiv>
        {options.map(option => {
          return (
            <button
              type="button"
              key={option}
              id={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </ButtonDiv>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
};
