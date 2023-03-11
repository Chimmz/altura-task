export const genPublicImageUrl = (filename: string, folder?: string) => {
  return process.env.PUBLIC_URL.concat(folder || '/img/').concat(filename);
};
