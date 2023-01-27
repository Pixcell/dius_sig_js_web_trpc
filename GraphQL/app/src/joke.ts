const API =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

export const getJoke = async () => {
  const response = await fetch(API)
  const data = await response.json()
  return data
}