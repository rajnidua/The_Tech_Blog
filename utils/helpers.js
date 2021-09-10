module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `⛳`;
    } else if (randomNum > 0.4) {
      return `/images/image1.jpg`;
      //return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      //return `<span for="img" aria-label="gear">⚙️</span>`;
      return `/images/image2.jpg`;
    }
  },
};
