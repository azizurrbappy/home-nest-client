const addEllipsisAfterWords = (text, wordCount = 3) => {
  const words = text.split(' ');

  if (words.length <= wordCount) {
    return text;
  }

  const limitedWords = words.slice(0, wordCount);
  return limitedWords.join(' ') + '...';
};

const useTruncateText = () => {
  return addEllipsisAfterWords;
};

export default useTruncateText;

// Usage:
// const { addEllipsisAfterWords } = useTruncateText();
// const truncated = addEllipsisAfterWords("Hello world this is a test", 3);
