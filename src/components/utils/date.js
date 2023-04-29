export const convertTSToLocal = (timestamp) => {
  return (new Date(timestamp)).toLocaleString();
}