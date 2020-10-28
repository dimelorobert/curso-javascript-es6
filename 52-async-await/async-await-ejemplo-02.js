console.log(
  `%c■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ \n■■ async/await ejecución en serie y paralelo ■■ \n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,
  'font-weight: bold; color:lightgreen'
)

/**
 * En Serie de manera simultanea
 */
const getPictures = async () => {
  const pictureCodes = [231, 300, 120, 564, 980, 377, 404, 215, 814, 777]
  let respuestas = []

  for (const pic of pictureCodes) {
    let respuesta = await fetch(`https://picsum.photos/1000/1000/?image=${pic}`)
    respuestas.push(respuesta)
    console.info(`La imagen ${pic} ha sido solicitada`)
  }

  return respuestas
}

getPictures().then(pictures => {
  pictures.map((picture, index) => {
    console.log(`URL Imagen ${index + 1}`, picture.url)
  })
})
