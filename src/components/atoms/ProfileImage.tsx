import waifu from '../../assets/images/waifu.jpg'

function ProfileImage() {
    return (
        <img
            src={waifu}
            className="m-auto max-[730px]:h-72 h-80 rounded-2xl border-2 shadow-2xl border-violet-400/30"
        />
    );
}

export default ProfileImage;