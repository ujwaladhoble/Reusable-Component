import React, { useMemo, useState, useCallback, memo } from 'react';
import Button from './common/Button';


// To optimise the performance i used pagination, useMemo, useCallBack and React.memo
const ListItem = memo(({ item }) => (
  <div className="list-group-item">{item}</div>
));

const ItemList = () => {
  // I am creating data here, so I use useMemo for optimization if we have static or preloaded data, we don't need useMemo here.
  // This prevents the array from being recreated on every render and improving performance 
  const items = useMemo(() => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`), []);
  const pageSize = 100;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // useMemo is used here to memoize paginated items based on currentPage
  // This ensures only the required slice of data is recalculated when currentPage or items change
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [currentPage, items]);


 // useCallback is used here to memoize the handlePageChange function
  // This prevents unnecessary re-renders and ensures performance optimization during pagination
  const handlePageChange = useCallback((direction) => {
    setLoading(true);
    setCurrentPage((prev) => prev + direction);
    setLoading(false);
  }, []);

  return (
    <div>
      <h4>Items (Page {currentPage})</h4>
      {loading ? (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="list-group mb-3">
          {paginatedItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      )}
      <div className="d-flex justify-content-between">
        <Button
          variant="outline-primary"
          disabled={currentPage === 1 || loading}
          onClick={() => handlePageChange(-1)}
        >
          Previous
        </Button>
        <Button
          variant="outline-primary"
          disabled={currentPage === Math.ceil(items.length / pageSize) || loading}
          onClick={() => handlePageChange(1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ItemList;