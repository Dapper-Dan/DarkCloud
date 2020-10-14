export const like = like => (
    $.ajax({
      url: 'api/likes',
      method: 'POST',
      data: {like}
    })
  )
  
export const unlike = like => (
    $.ajax({
      url: `api/likes/${like.likeId}`,
      method: 'DELETE',
      data: {like}
    })
)