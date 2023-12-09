import { useState } from "react";

import {
  BREAKPOINT_LARGE,
  BREAKPOINT_MEDIUM,
  ELEMENT_PER_PAGE_LARGE,
  ELEMENT_PER_PAGE_MEDIUM,
  ELEMENT_PER_PAGE_SMALL,
  ELEMENT_PER_PAGE_ON_LOAD_LARGE,
  ELEMENT_PER_PAGE_ON_LOAD_MEDIUM,
} from "../utils/constants";

function useList() {
    const [arrey, setArrey] = useState([]);
    const [listLength, setListLength] = useState(ELEMENT_PER_PAGE_LARGE);
    const [listRow, setListRow] = useState(ELEMENT_PER_PAGE_ON_LOAD_LARGE);
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

    function uploadCompleteList(sourceArray) {
      setArrey(sourceArray);
    }

    function handleUploader() {
      const newLength = listLength + listRow;
      setListLength(newLength);
    }

    function adjustListWidth(width) {
      switch (true) {
        case width >= BREAKPOINT_LARGE:
          setListLength(ELEMENT_PER_PAGE_LARGE);
          setListRow(ELEMENT_PER_PAGE_ON_LOAD_LARGE);
          break;
        case width < BREAKPOINT_LARGE && width > BREAKPOINT_MEDIUM:
          setListLength(ELEMENT_PER_PAGE_MEDIUM);
          setListRow(ELEMENT_PER_PAGE_ON_LOAD_MEDIUM);
          break;
        case width <= BREAKPOINT_MEDIUM:
          setListLength(ELEMENT_PER_PAGE_SMALL);
          setListRow(ELEMENT_PER_PAGE_ON_LOAD_MEDIUM);
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

    return { arrey, listLength, uploaderOn, uploadList, uploadCompleteList, handleUploader, adjustListWidth, reset };
};

export default useList;