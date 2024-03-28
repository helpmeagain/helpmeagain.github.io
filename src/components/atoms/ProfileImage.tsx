import photo from '../../assets/images/photo.jpg'

function ProfileImage() {
    return (
        <img
            src={photo}
            className="m-auto max-[730px]:h-72 h-80 rounded-full border-2 shadow-2xl border-violet-400/10"
        />
    );
}

export default ProfileImage;