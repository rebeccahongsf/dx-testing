import 'decanter/dist/decanter.css';

function App() {
  return (
    <div className="App">
      <header role="banner">
        <h1>Decanter With Tailwind Test Page.</h1>
        <p>
          This is a test page filled with common HTML elements to be used to
          provide visual feedback whilst building CSS systems and frameworks.
        </p>
      </header>
      <main role="main">
        <article class="su-card su-border su-border-stone-light su-border-solid su-shadow su-my-24">
          <figure class="su-media su-media--image su-card__media">
            <a
              rel="nofollow noopener"
              tabindex="-1"
              href="https://stanford.edu"
            >
              <div class="su-media__wrapper su-aspect-ratio su-scale-0 su-overflow-hidden">
                <img
                  class="su-transition su-duration-500 su-ease-in-out su-transform hover:su-scale-150"
                  src="https://placeimg.com/2000/1333/any"
                  autoplay=""
                  loop=""
                  muted=""
                  alt="Example image"
                />
              </div>
            </a>
          </figure>
          <section class="su-card__contents su-p-10">
            <span class="su-mb-3">This is a super headline</span>
            <h2 class="su-mb-3">
              <a href="https://stanford.edu" rel="nofollow noopener">
                Headline goes here
              </a>
            </h2>
            <p class="su-mb-6">
              Sample text goes here and this card should be able to handle a few
              lines. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <a
              rel="nofollow noopener"
              href="https://stanford.edu"
              class="su-link su-card__link su-link--action su-mb-6"
            >
              CTA Link Label
            </a>
            <div class="su-card__button su-mt-6">
              <a
                rel="nofollow noopener"
                href="https://stanford.edu"
                class="su-link su-button"
              >
                Button Label
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
