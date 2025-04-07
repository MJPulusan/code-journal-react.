import { useEffect, useState } from 'react';
import { Entry, readEntries } from '../lib/data';
import { FormEvent } from 'react';
import { readEntry } from '../lib/data';
import { Link } from 'react-router-dom';

export default function ListPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    async function loadItems() {
      try {
        const value = await readEntries();
        setEntries(value);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <>
      {entries.length === 0 ? (
        <p className="no-entries-text">No entries have been recorded</p>
      ) : (
        <ul className="entry-list">
          {entries.map((entry) => (
            <li key={entry.entryId}>
              {entry.title} <img src={entry.photoUrl} />
              <p>{entry.notes}</p>
              <Link to={`/entries/${entry.entryId}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
