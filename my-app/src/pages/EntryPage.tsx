import React, { FormEvent } from 'react';
import { UnsavedEntry } from './lib/data';

export function EntryPage() {
  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // export function EntryPage(){
  //   // return(
  //   <div data-view="entry-form" className="entry-form-wrapper hidden">
  //       <form id="entry-form">
  //         <div className="column-full">
  //           <h1 className="new-entry-header">New Entry</h1>
  //         </div>
  //         <div className="row">
  //           <div className="photo-wrapper column-half">
  //             <img
  //               id="entry-image"
  //               src="images/placeholder-image-square.jpg"
  //               alt="Placeholder image" />
  //           </div>
  //           <div className="column-half">
  //             <label >Title</label>
  //             <input id="title" type="text" name="title" required />
  //             <label >Photo URL</label>
  //             <input id="photo-url" type="url" name="photoUrl" required />
  //           </div>
  //           <div className="column-full">
  //             <label >Notes</label>
  //             <textarea name="notes" id="notes" required></textarea>
  //             <div className="form-actions">
  //               <button className="delete-button hide" type="button">
  //                 Delete Entry
  //               </button>
  //               <button type="submit">Save</button>
  //             </div>
  //           </div>
  //         </div>
  //       </form>
  //       </div>

  return (
    <>
      <form onSubmit={handleSave}>
        <img src="../images/placeholder-image-square.jpg" />
        <input name="photoUrl" type="text"></input>

        <label>
          Title:
          <input name="title" type="text"></input>
        </label>
        <label>
          Notes:
          <input name="notes" type="textarea"></input>
        </label>

        <button type="submit">Save</button>
      </form>
    </>
  );
}
