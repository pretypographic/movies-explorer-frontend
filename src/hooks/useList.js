import { useState } from "react";

function useList() {
    const [arrey, setArrey] = useState([]);
    const [listLength, setListLength] = useState(12);
    const [listRow, setListRow] = useState(3);
    const [uploaderOn, setUploaderOn] = useState(false);

    function uploadList(sourceArray) {
      if (Array.isArray(sourceArray)) {
        if (sourceArray.length <= listLength) {
          setUploaderOn(false);
          setArrey(sourceArray);
        } else {
          setUploaderOn(true);
          setArrey(sourceArray.slice(0, listLength));
        }
      } else {
        setUploaderOn(false);
        setArrey([]);
      }
    }

    function handleUploader() {
      const newLength = listLength + listRow;
      setListLength(newLength);
    }

    function adjustListWidth(width) {
      switch (true) {
        case width >= 1280:
          setListLength(12);
          setListRow(3);
          break;
        case width < 1280 && width > 768:
          setListLength(8);
          setListRow(2);
          break;
        case width <= 768:
          setListLength(5);
          setListRow(2);
          break;
        default:
          console.error("invalid width value");
          break;
      }
    }

    function reset() {
      setArrey([]);
      setUploaderOn(false);
    }

    return { arrey, listLength, uploaderOn, uploadList, handleUploader, adjustListWidth, reset };
};

export default useList;