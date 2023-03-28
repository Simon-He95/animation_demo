export const preload = (images: (string | undefined)[]) => {
  const image = new Image()
  images.filter(Boolean).forEach((src) => {
    image.src = src!
  })
}
