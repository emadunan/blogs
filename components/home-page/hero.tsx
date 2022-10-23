import { FC } from "react";

interface HeroProps {

}

const Hero: FC<HeroProps> = () => {
    return (
        <section>
            <div>
                Image
            </div>
            <h1>Hi, I am Emad</h1>
            <p>I blog about web developments - especially frontend frameworks like react</p>
        </section>
    );
}

export default Hero;