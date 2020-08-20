export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);
  
export const fetchUserInfo = display_name => (
  $.ajax({
    url: `api/users/${display_name}/fetchUserInfo`,
    method: 'GET',
    data: {user: {display_name: display_name}}
  })
);
  
