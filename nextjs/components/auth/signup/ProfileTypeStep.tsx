import {useContext} from "react";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import clientImage from "../../../assets/imgs/client.png";
import freelancerImage from "../../../assets/imgs/freelancer.png";
import {UserRole} from "../../../types/resolvers";
import {multiStepContext} from "../registration/stepContext";

type CardProps = {
    label: string;
    imageSrc: StaticImageData;
    selected: boolean;
    onClick: () => void;
};

const Card = ({label, imageSrc, selected, onClick}: CardProps) => {
    return (
        <div
            className={`flex items-center justify-center flex-col p-4 rounded-lg cursor-pointer border ${
                selected ? "border-green-500" : "border-newColor"
            }`}
            onClick={onClick}
        >
            <div
                className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center my-2 ${
                    selected ? "bg-primary border-primary" : ""
                }`}
            >
                {selected && <div className="w-3 h-3 rounded-full bg-white"/>}
            </div>
            <Image src={imageSrc} alt={label} className="w-8 h-8 mt-2 my-6"/>
            <span className="font-medium text-xl text-second">{label}</span>
        </div>
    );
};


const ProfileTypeStep = () => {

        const {setStep, userData, setUserData} = useContext(multiStepContext);


        return (
            <div
                className="flex flex-col items-center  rounded-lg border border-newColor w-screen h-screen"
            >
                <div
                    className="flex flex-col items-center mt-14 p-14 rounded-lg border border-newColor"
                >
                    <h2 className="text-3xl font-semibold text-second my-6 py-4 mb-4">
                        Join as a client or freelancer
                    </h2>
                    <div className="flex space-x-4">
                        <Card
                            label="I’m a freelancer, looking for work"
                            imageSrc={freelancerImage}
                            selected={userData.userRole === UserRole.Freelancer}
                            onClick={() => setUserData({...userData, userRole: UserRole.Freelancer})}
                        />
                        <Card
                            label="I’m a client, hiring for a project"
                            imageSrc={clientImage}
                            selected={userData.userRole === UserRole.Client}
                            onClick={() => setUserData({...userData, userRole: UserRole.Client})}
                        />
                    </div>
                    <div className="my-12">
                        <button
                            className="py-2 px-20 rounded-full font-medium text-base text-white bg-primary"
                            onClick={() => setStep(1)}
                        >
                            Next
                        </button>
                        <p className="font-normal my-2 mx-7 text-second">
                            Already have an account ? <Link href="/signin" className="text-primary">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
;

export default ProfileTypeStep;
