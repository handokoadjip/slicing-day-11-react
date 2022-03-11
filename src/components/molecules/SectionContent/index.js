import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  People1,
  People2,
  People3,
} from "assets/source/image";
import { Article } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img1,
      title: "A Guide To Rocky Mountain Vacations",
      subtitle: "LOREM",
      isMostPicked: true,
      isVideo: false,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img2,
      title: "Travelling To USA",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: true,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img3,
      title: "Party Jokes STarting But Unnecessary",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: false,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img4,
      title: "Maui By Air The Best Way Around The Island",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: false,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img5,
      title:
        "Man cannot discover new oceans unless he has the courage to lose sight of the sore",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: false,
      isQuote: true,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
      ],
    },
    {
      image: Img6,
      title: "Travelling To Barcelona",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: true,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img7,
      title: "A Guide To Rocky Mountain Vacations",
      subtitle: "LOREM",
      isMostPicked: true,
      isVideo: false,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img8,
      title: "Party Jokes STarting But Unnecessary",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: false,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img9,
      title: "Maui By Air The Best Way Around The Island",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: false,
      isQuote: false,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
        {
          image: People3,
          name: "dolor",
        },
      ],
    },
    {
      image: Img5,
      title:
        "Man cannot discover new oceans unless he has the courage to lose sight of the sore",
      subtitle: "LOREM",
      isMostPicked: false,
      isVideo: false,
      isQuote: true,
      href: "#",
      peoples: [
        {
          image: People1,
          name: "lorem",
        },
        {
          image: People2,
          name: "ipsum",
        },
      ],
    },
  ];

  let count = 0;

  return (
    <section className="py-0 py-lg-3 px-3">
      <div className="container-fluid">
        <div className="row">
          {lists ? (
            lists.map((list, index) => {
              count++;
              if (index === 0) count = 0;
              if (index === 6) count = 0;
              if (index === 7) count = 2;
              return (
                <Article
                  isLong={count === 0 ? true : false}
                  isWide={
                    count === 2 || count === 3 || count === 4 ? true : false
                  }
                  isMostPicked={list.isMostPicked}
                  href={list.href}
                  isVideo={list.isVideo}
                  isQuote={list.isQuote}
                  isVideo={list.isVideo}
                  image={list.image}
                  title={list.title}
                  subtitle={list.subtitle}
                  peoples={list.peoples}
                  key={`article-${index}`}
                />
              );
            })
          ) : (
            <h2 className="text-center">No List in this section</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default index;
