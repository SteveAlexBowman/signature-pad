import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./App.css";
import "./sigCanvas.css";

function App() {
const [imageURL, setImageURL] = useState(null); //create a state to store the image url

  const sigCanvas = useRef({}); //create a ref using react useRef hook

  /* a function that uses the canvas ref to clear the canvas
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

 /* a function that uses the canvas ref to trim the canvas
 from white spaces via a method given by react-signature-canvas
 then outputs it on our browser console */

 const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="Sig">
      <h1>I9 Applicant Signature Pad</h1>
      <Popup 
            modal 
            trigger={<button>Open Signature Pad</button>}
            closeOnDocumentClick={false}
            >
              {close => (
              <>
                <SignaturePad 
                  ref={sigCanvas}
                  canvasProps={{
                    className: "signatureCanvas"
          }}
        />
        {/* the buttons below use the functions we created above */}
        <button onClick={save}>Save</button>
        <button onClick={clear}>Clear</button>
        <button onClick={close}>Close</button>

      </>
    )}
      </Popup>
      <br />
      <br />
      {/* if we have have a non-null image url we should
      show an image and pass our image url state o it */}
      {imageURL ? (
        <img
        src={imageURL}
        alt="my signature"
        style={{
          display: "block",
          margin: "0 auto",
          border: "1px solid black",
          width: "150px"
        }}
        />
      ) : null}
    </div>
  );
}

export default App;

