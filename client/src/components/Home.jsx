/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CookieBanner from "./CookieBanner";

const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
            Unveiling the Magic of Books:
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Embark on a captivating odyssey through the boundless realms of
            literature where each page unfolds a new adventure. Our collection
            of books is a treasure trove, meticulously curated to transport you
            to worlds both familiar and fantastical. Immerse yourself in the
            beauty of language, the depth of characters, and the power of
            storytelling. From timeless classics to contemporary gems, our
            library invites you to explore the diverse landscapes of human
            imagination. Whether you seek wisdom, escapism, or sheer
            entertainment, our carefully selected volumes promise to be your
            companions in the pursuit of knowledge and joy. Welcome to a
            sanctuary of words – a haven for avid readers and those yet to
            discover the wonders that lie within the pages of a book.
          </p>

          <CookieBanner />
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://media.istockphoto.com/id/900301626/photo/brown-wooden-shelfs-fully-packed-with-books-in-a-library.jpg?s=1024x1024&w=is&k=20&c=BOqCBQKwFdfhXP1w75Rc0vQToKHLh07EGMXGgXQDj1Y="
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
