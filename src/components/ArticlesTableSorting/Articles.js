import React, { useState } from "react";
import styles from "./Articles.module.css";
import Article from "./Article";
import { ARTICLES } from "./helpers";

const Articles = () => {
  const copyArticlesUpVoted = [...ARTICLES];
  const copyMostRecent = [...ARTICLES];

  const upVotedSort = copyArticlesUpVoted.sort((a, b) => b.upvotes - a.upvotes);
  const mostRecentSort = copyMostRecent.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const [sortedArticles, setSortedArticles] = useState(upVotedSort);

  const mostUpvoteHandler = () => {
    setSortedArticles(upVotedSort);
  };

  const mostRecentHandler = () => {
    setSortedArticles(mostRecentSort);
  };
  return (
    <div className={styles.main}>
      <div className={styles.sortBar}>
        <label className={styles.label}>Sort By</label>
        <button data-testid="most-upvoted-link" onClick={mostUpvoteHandler}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" onClick={mostRecentHandler}>
          Most Recent
        </button>
      </div>
      <Article articles={sortedArticles} />
    </div>
  );
};

export default Articles;
