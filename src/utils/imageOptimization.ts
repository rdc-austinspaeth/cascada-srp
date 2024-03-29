export const imageOptimization = (url: string) => {
  const quality = '-w480_h360_x2.webp';
  const combinedUrl = url?.substr(0, url.lastIndexOf('.')) + quality;

  return combinedUrl;
}
