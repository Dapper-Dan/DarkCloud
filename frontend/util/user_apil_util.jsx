export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  })
);

export const fetchUsers = () => (
  $.ajax({
    url: `/api/users/`,
    method: 'GET'
  })
);
  
// export const fetchUserInfo = display_name => (
//   $.ajax({
//     url: `api/users/${display_name}/fetchUserInfo`,
//     method: 'GET',
//     data: {user: {display_name: display_name}}
//   })
// );

export const fetchUserInfo = display_name => (
  $.ajax({
    url: `/api/users/${display_name}/fetchUserInfo`,
    method: 'GET',
    data: {user: {display_name: display_name}}
  })
);
  
// export const editCurrentUser = data => (
//   $.ajax({
//     url: `api/users/${data.user.id}`,
//     method: 'PATCH',
//     data: data.form,
//     contentType: false,
//     processData: false
//   })
// )

export const editCurrentUser = data => (
  $.ajax({
    url: `/api/users/${data.user.id}`,
    method: 'PATCH',
    data: data.form,
    contentType: false,
    processData: false
  })
)