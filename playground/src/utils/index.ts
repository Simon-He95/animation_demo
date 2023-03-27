export const preload = (images: string[]) => {
  const image = new Image()
  images.forEach((src) => {
    image.src = src
  })
}
