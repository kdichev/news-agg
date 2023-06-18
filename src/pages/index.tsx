import { GetServerDataProps, GetServerDataReturn } from "gatsby";
import React from "react";
import Parser from "rss-parser";

const IndexPage = ({ serverData }) => {
  console.log(serverData.feed.length);
  return (
    <div>
      <h1>Нови Новини ({serverData.feed.length})</h1>
      <ul>
        {serverData.feed.map((i) => (
          <a href={i.link} target="_blank">
            <li>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `${i.publisher}: ${i.title}`,
                }}
              ></h2>
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

const sitesData = {
  CAPITAL: { url: "https://www.capital.bg/rss/" },
  DNEVNIK: { url: "https://www.dnevnik.bg/rss/" },
  PLOVDIV24: { url: "https://www.plovdiv24.bg/rss.php" },
  VESTI: { url: "https://www.vesti.bg/rss" },
  BNT: { url: "https://bntnews.bg/bg/rss/news.xml" },
  GONG: { url: "https://gong.bg/rss" },
};

const sites = {
  CAPITAL: "https://www.capital.bg/rss/",
  DNEVNIK: "https://www.dnevnik.bg/rss/",
  PLOVDIV24: "https://www.plovdiv24.bg/rss.php",
  VESTI: "https://www.vesti.bg/rss",
  BNT: "https://bntnews.bg/bg/rss/news.xml",
  GONG: "https://gong.bg/rss",
  "24Chasa": "https://www.24chasa.bg/rss",
  BGONAIR: "https://www.bgonair.bg/rss/latest",
  DNESBG: "https://www.dnes.bg/rss.php",
  INVESTORBG: "https://www.investor.bg/rss/latest",
  BLOOMBERG: "https://www.bloombergtv.bg/rss/latest",
  STANDART: "https://www.standartnews.com/rss?p=1",
  SEDEMOSMI: "https://sedemosmi.tv/feed/",
  MARICA: "https://www.marica.bg/rss",
  DIR: "https://dir.bg/feeds/rss",
  PETEL: "https://petel.bg/index.php?item=rss",
  BIVOL: "https://bivol.bg/feed",
  FROGNEWS: "https://rss.frognews.bg/",
  SEGABG: "https://www.segabg.com/rss",
  // TRUD: "https://trud.bg/rss",
};

export async function getServerData(
  _: GetServerDataProps
): GetServerDataReturn<ServerDataProps> {
  const parser = new Parser();
  const feeds = await Object.entries(sites).reduce(
    async (acc, [key, value]) => {
      return {
        ...(await acc),
        [key]: await parser.parseURL(value).catch(console.log),
      };
    },
    Promise.resolve({})
  );

  const capitalFeed = feeds["CAPITAL"].items.map((i) => ({
    link: i.link,
    publisher: feeds["CAPITAL"].image.title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));

  const dnevnikFeed = feeds["DNEVNIK"].items.map((i) => ({
    link: i.link,
    publisher: feeds["DNEVNIK"].image.title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const plovdiv24Feed = feeds["PLOVDIV24"].items.map((i) => ({
    link: i.link,
    publisher: feeds["PLOVDIV24"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const vestibgFeed = feeds["VESTI"].items.map((i) => ({
    link: i.link,
    publisher: feeds["VESTI"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const bntFeed = feeds["BNT"].items.map((i) => ({
    link: i.link,
    publisher: feeds["BNT"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const gongFeed = feeds["GONG"].items.map((i) => ({
    link: i.link,
    publisher: feeds["GONG"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const Chasa24 = feeds["24Chasa"].items.map((i) => ({
    link: i.link,
    publisher: feeds["24Chasa"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const bgonair = feeds["BGONAIR"].items.map((i) => ({
    link: i.link,
    publisher: feeds["BGONAIR"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const dnesBg = feeds["DNESBG"].items.map((i) => ({
    link: i.link,
    publisher: feeds["DNESBG"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const investorBG = feeds["INVESTORBG"].items.map((i) => ({
    link: i.link,
    publisher: feeds["INVESTORBG"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const bloomberg = feeds["BLOOMBERG"].items.map((i) => ({
    link: i.link,
    publisher: feeds["BLOOMBERG"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  // const trud = feeds["TRUD"].items.map((i) => ({
  //   link: i.link,
  //   publisher: feeds["TRUD"].title,
  //   pubDate: i.pubDate,
  //   contentSnippet: i.contentSnippet,
  //   title: i.title,
  // }));
  const standart = feeds["STANDART"].items.map((i) => ({
    link: i.link,
    publisher: feeds["STANDART"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const sedemosmi = feeds["SEDEMOSMI"].items.map((i) => ({
    link: i.link,
    publisher: feeds["SEDEMOSMI"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const marica = feeds["MARICA"].items.map((i) => ({
    link: i.link,
    publisher: feeds["MARICA"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const DIR = feeds["DIR"].items.map((i) => ({
    link: i.link,
    publisher: feeds["DIR"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const PETEL = feeds["PETEL"].items.map((i) => ({
    link: i.link,
    publisher: feeds["PETEL"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const BIVOL = feeds["BIVOL"].items.map((i) => ({
    link: i.link,
    publisher: feeds["BIVOL"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const FROGNEWS = feeds["FROGNEWS"].items.map((i) => ({
    link: i.link,
    publisher: feeds["FROGNEWS"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  const SEGABG = feeds["SEGABG"].items.map((i) => ({
    link: i.link,
    publisher: feeds["SEGABG"].title,
    pubDate: i.pubDate,
    contentSnippet: i.contentSnippet,
    title: i.title,
  }));
  return {
    status: 200,
    headers: {},
    props: {
      hello: "world",
      feed: [
        ...capitalFeed,
        ...dnevnikFeed,
        ...plovdiv24Feed,
        ...vestibgFeed,
        ...bntFeed,
        ...gongFeed,
        ...Chasa24,
        ...bgonair,
        ...dnesBg,
        ...investorBG,
        ...bloomberg,
        ...standart,
        ...sedemosmi,
        ...marica,
        ...DIR,
        ...PETEL,
        ...BIVOL,
        ...FROGNEWS,
        ...SEGABG,
        // ...trud,
      ].sort(function (a, b) {
        return new Date(b.pubDate) - new Date(a.pubDate);
      }),
    },
  };
}

export default IndexPage;
