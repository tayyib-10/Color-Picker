const changeBg = (e) => {
  const code = document.getElementsByName("rgb")[0]["value"]
  if (code === '') {
    document.body.style.background = '#00FF9B'
  }
  document.body.style.background = `#${code}`
}