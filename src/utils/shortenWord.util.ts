export const shortenWord = (text: string) => {
  if (text.length <= 120) {
    return text;
  }

  return `${text.slice(0, 100)}...`;
};
