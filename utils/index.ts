import { decode } from "html-entities";
import { format } from "date-fns";

const formatDescription = (text: string) => {
  return decode(text);
};

const readingTime = (content: string) => {
  // average reading speed
  const WordsPerMinute = 250;
  // remove html tags and count words
  const words = content.replace(/<(?:.|\n)*?>/gm, "").split(" ").length;
  // calculate minutes
  const minutes = Math.ceil(words / WordsPerMinute);
  return minutes > 1 ? `${minutes} Min Read` : "1 Min Read";
};

const formatDate = (value: string) => {
  if (!value) {
    return "No date";
  }

  return format(new Date(value), "MMM do, yyyy ");
};

export { readingTime, formatDescription, formatDate };
