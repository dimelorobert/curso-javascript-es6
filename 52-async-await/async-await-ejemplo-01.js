console.log(
  `%c■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ \n■■■■ Simplificando promesas con async/await ■■■■ \n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,
  'font-weight: bold; color:lightgreen'
)

/**
 * Obtener datos de usuario por medio de un post - PROMESAS
 */

const obtenerPost = postId => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => obtenerUsuario(post.userId))
    .catch(error =>
      console.log(`ERROR: ${error.message} - No se pudieron obtener los posts`)
    )
}

const obtenerUsuario = userId => {
  return fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(usuario =>
      console.log(`Usuario: ${usuario.name}\nEmail: ${usuario.email}`)
    )
    .catch(error =>
      console.log(
        `ERROR: ${error.message} - No se pudo obtener los datos del usuario`
      )
    )
}

const obtenerDatosUsuario = postId => {
  obtenerPost(postId)
}

obtenerDatosUsuario(3)

/**
 * Obtener datos de usuario por medio de un post - ASYNC - AWAIT
 */

const obtenerPostAsync = postId =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

const obtenerUsuarioAsync = userId =>
  fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)

const obtenerDatosUsuarioAsync = async postId => {
  try {
    let respuestaPost = await obtenerPostAsync(postId)
    let post = await respuestaPost.json()
    let respuestaUsuario = await obtenerUsuarioAsync(post.userId)
    let usuario = await respuestaUsuario.json()
    console.log(`Usuario: ${usuario.name}\nEmail: ${usuario.email}`)
  } catch (error) {
    console.log(
      `ERROR: ${error.message} - No se pudo obtener los datos del usuario`
    )
  }
}

obtenerDatosUsuarioAsync(3)

/**
 * Obtener datos de usuario por medio de un post - ASYNC - AWAIT - AXIOS
 */

const obtenerPostAxios = postId =>
  axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)

const obtenerUsuarioAxios = userId =>
  axios(`http://jsonplaceholder.typicode.com/users/${userId}`)

const obtenerDatosUsuarioAxios = async postId => {
  try {
    let post = await obtenerPostAxios(postId)
    let usuario = await obtenerUsuarioAxios(post.data.userId)
    console.log(`Usuario: ${usuario.data.name}\nEmail: ${usuario.data.email}`)
  } catch (error) {
    console.log(
      `ERROR: ${error.message} - No se pudo obtener los datos del usuario`
    )
  }
}

obtenerDatosUsuarioAxios(3)
