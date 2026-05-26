const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password) => {
  return password && password.length >= 6
}

const validateUsername = (username) => {
  return username && username.length >= 3 && username.length <= 30
}

module.exports = {
  validateEmail,
  validatePassword,
  validateUsername
}
