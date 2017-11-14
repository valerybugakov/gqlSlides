function getViewer(request) {
  return request.auth.user
}


function getUserName(user) {
  return user.getName()
}
