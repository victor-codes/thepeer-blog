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

const shapesList = [
  {
    color: "purple",
    shape: "round",
  },
  {
    color: "red",
    shape: "round",
  },
  {
    color: "green",
    shape: "round",
  },
  {
    color: "blue",
    shape: "round",
  },
  {
    color: "yellow",
    shape: "round",
  },
  {
    color: "grey",
    shape: "round",
  },
  {
    color: "purple",
    shape: "square",
  },
  {
    color: "red",
    shape: "square",
  },
  {
    color: "green",
    shape: "square",
  },
  {
    color: "blue",
    shape: "square",
  },
  {
    color: "yellow",
    shape: "square",
  },
  {
    color: "grey",
    shape: "square",
  },
  {
    color: "purple",
    shape: "triangle",
  },
  {
    color: "red",
    shape: "triangle",
  },
  {
    color: "green",
    shape: "triangle",
  },
  {
    color: "blue",
    shape: "triangle",
  },
  {
    color: "yellow",
    shape: "triangle",
  },
  {
    color: "grey",
    shape: "triangle",
  },
  {
    color: "purple",
    shape: "oval",
  },
  {
    color: "red",
    shape: "oval",
  },
  {
    color: "green",
    shape: "oval",
  },
  {
    color: "blue",
    shape: "oval",
  },
  {
    color: "yellow",
    shape: "oval",
  },
  {
    color: "grey",
    shape: "oval",
  },
  {
    color: "purple",
    shape: "rectangle",
  },
  {
    color: "red",
    shape: "rectangle",
  },
  {
    color: "green",
    shape: "rectangle",
  },
  {
    color: "blue",
    shape: "rectangle",
  },
  {
    color: "yellow",
    shape: "rectangle",
  },
  {
    color: "grey",
    shape: "rectangle",
  },
];

export { readingTime, formatDescription, formatDate, shapesList };
