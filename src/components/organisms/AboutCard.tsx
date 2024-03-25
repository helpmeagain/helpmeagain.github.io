import ProfileImage from "../atoms/ProfileImage";
import ProfileDescription from "../molecules/ProfileDescription";

function AboutCard() {
    return (
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <ProfileImage />
            <ProfileDescription />
        </div>
    );
}

export default AboutCard;