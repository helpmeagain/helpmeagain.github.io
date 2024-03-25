import waifu from '../../assets/images/waifu.jpg'

function ProfileImage() {
    return (
        <img
            src={waifu}
            className="mx-auto m-0 h-72 rounded-full border-2 shadow-2xl border-violet-400/30"
        />
    );
}

export default ProfileImage;