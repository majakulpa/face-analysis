import React from "react";

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div>
      <div className="center">
        <div className="pa3 br3 shadow-2 mt4 form">
          <input
            className="f4 pa2 w-60"
            type="text"
            onChange={onInputChange}
            placeholder="Image URL"
          />
          <button
            className="w-40 grow f4 link ph3 pv2 dib white bg-navy"
            onClick={onBtnSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
