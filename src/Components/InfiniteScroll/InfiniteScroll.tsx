import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getTransactionsDetails } from "../../Services/apis/transactionApi/transactionsAPIS";
import { useSelector } from "react-redux";
import axios from "axios";

const InfiniteScrollComponent = () => {
  const [transactionHistory, setTransactionHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if more items are available
  const walletAddress = useSelector(
    (state: any) => state.user.userWalletAddress
  );
  const getTransactionHistory = async () => {
    setLoading(true);
    try {
      // const response = await getTransactionsDetails({
      //   walletAddress,
      //   page,
      //   limit,
      // });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      console.log("Response data:", response.data);

      const newData: any = response.data;
      setTransactionHistory((prevPosts: any) => [...prevPosts, ...newData]);
      setPage((prevPage) => prevPage + 1);
      if (response.data.length < limit) {
        setHasMore(false); // No more items available
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactionHistory();
  }, [limit]);

  const handleScroll = () => {
    console.log("Scrolling...");
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    console.log("Is at bottom:", isAtBottom);
    console.log("Loading:", loading);
    console.log("Has more:", hasMore);
    if (isAtBottom && !loading && hasMore) {
      console.log("Fetching more data...");
      setLimit((prevLimit) => prevLimit + 1); // Increase limit dynamically
    }
  };

  useEffect(() => {
    console.log("scccccc");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <InfiniteScroll
        dataLength={transactionHistory?.length}
        next={getTransactionHistory} // Pass getTransactionHistory as the next function
        hasMore={hasMore && !loading} // Load more only if more items are available and not currently loading
        loader={<p>Loading...</p>} // Display a loading indicator
        scrollThreshold={0.9} // Load more items when 90% of the content is scrolled
      >
        {transactionHistory?.length > 0 &&
          transactionHistory?.map((transaction: any) => (
            <tr key={transaction.OrderId}>
              <td>{transaction.addressFrom}</td>
              {/* <td>{transaction.token}</td>
              <td>{transaction.OrderId}</td>
              <td>{transaction.txnStatus}</td> */}
            </tr>
          ))}
      </InfiniteScroll>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
