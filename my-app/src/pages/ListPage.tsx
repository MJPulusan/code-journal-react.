import { useEffect, useState } from 'react';
import { Entry, readEntries } from '../lib/data';

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
          <ul className="entry-list">There are some entries</ul>
        )}
      </>
    );
  }
