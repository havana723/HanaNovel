import React from 'react';

const TextRenderer: React.FC<{ text: string }> = (props) => {
  const split = props.text.split('\n');
  return (
    <>
      {split.map((s, i) => (
        <React.Fragment key={i.toString()}>
          {i !== 0 ? (
            <>
              <br />
              <br />
            </>
          ) : null}
          <span>{s}</span>
        </React.Fragment>
      ))}
    </>
  );
};

export default TextRenderer;
