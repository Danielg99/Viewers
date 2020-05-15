import React from 'react';
import { DndProvider } from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

const isTouchDevice = typeof window !== `undefined` && !!('ontouchstart' in window || navigator.maxTouchPoints);

/**
 * Relevant:
 * https://github.com/react-dnd/react-dnd/issues/186#issuecomment-335429067
 * https://github.com/react-dnd/react-dnd/issues/186#issuecomment-282789420
 *
 * Docs:
 * http://react-dnd.github.io/react-dnd/docs/api/drag-drop-context
 */
export default function DragAndDropContext({children}) {
  const backend = isTouchDevice ? TouchBackend : HTML5Backend;
  const opts = isTouchDevice ? { enableMouseEvents: true } : {};

  return (
    <DndProvider backend={backend} opts={opts}>
      {children}
    </DndProvider>
  );
}