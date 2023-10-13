import md5 from "md5";

export const hashKey =  () => {
  const timeStamp = Math.floor(Math.random() * 9999);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  const hashed = md5(`${timeStamp}${privateKey}${publicKey}`);

  return `&ts=${timeStamp}&apikey=${publicKey}&hash=${hashed}`;
};
