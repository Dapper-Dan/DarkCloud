export const getSongs = (display_name) => (
    $.ajax({
      url: `/api/songs/`,
      method: 'GET',
      data: { song: {display_name: display_name}}
    })
);
    

export const createSong = (song) => (
    $.ajax({
        url: "/api/songs",
        method: 'POST',
        data: song,
        contentType: false,
        processData: false
    })
)


export const getSong = (songId) => (
    $.ajax({
        url: `/api/songs/${songId}`,
        method: 'GET',
    })
)

export const bunch_o_songs = () => (
    $.ajax({
        url: `/api/songs/bunch`,
        method: 'GET'
    })
)