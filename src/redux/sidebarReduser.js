
let initialState = {
    nav: [
        { id: 0 }
    ],
    friends: [
        { id: 0, img: 'https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg', fName: 'Andrew' },
        { id: 1, img: 'https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg', fName: 'John' },
        { id: 2, img: 'https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg', fName: 'Viktor' }
    ]
};

const sidebarReduser = (state = initialState, action) => {
    let stateCopy = { ...state};
    stateCopy.friends = { ...state.friends};

    return stateCopy;
}


export default sidebarReduser;