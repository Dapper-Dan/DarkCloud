export const getSongs = () => (
    $.ajax({
      url: `api/songs/`,
      method: 'GET'
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