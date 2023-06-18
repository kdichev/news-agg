import { GetServerDataProps, GetServerDataReturn } from "gatsby";
import React from "react";
import Parser from "rss-parser";

const IndexPage = ({ serverData }) => {
  return (
    <div>
      <ul>
        {serverData.feed.map((i) => (
          <a href={i.link}>
            <li>
              <h1>
                {i.publisher}: {i.title}
              </h1>
              <p>{i.pubDate}</p>
              {/* <p>{i.contentSnippet}</p> */}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

type ServerDataProps = {
  hello: string;
};

export async function getServerData(
  _: GetServerDataProps
): GetServerDataReturn<ServerDataProps> {
  const parser = new Parser();
  const feed = await parser
    .parseURL("https://www.capital.bg/rss/")
    .catch(console.log);
  const feedDnevnik = await parser
    .parseURL("https://www.dnevnik.bg/rss/")
    .catch(console.log);
  const capitalFeed = feed.items.map((i) => ({
    link: i.link,
    publisher: feed.image.title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));

  const dnevnikFeed = feedDnevnik.items.map((i) => ({
    link: i.link,
    publisher: feedDnevnik.image.title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  return {
    status: 200,
    headers: {},
    props: {
      hello: "world",
      feed: [...capitalFeed, ...dnevnikFeed].sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.pubDate) - new Date(a.pubDate);
      }),
      dnevnikFeed,
    },
  };
}

export default IndexPage;
