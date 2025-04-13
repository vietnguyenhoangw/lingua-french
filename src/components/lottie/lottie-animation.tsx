import Lottie from "react-lottie-player";
import { ILottieAnimationProps } from "./lottie-animation.type";

const LottieAnimation = (props: ILottieAnimationProps) => {
    let defaultSize = {width: 200, height: 200};
    if (props?.size) {
        defaultSize = {width: props?.size, height: props?.size};
    }
    if (props?.width && props.height) {
        defaultSize = {width: props?.width, height: props?.height};
    }

    return <Lottie loop path={props.lottieJson} play style={defaultSize} />;
};

export default LottieAnimation;
