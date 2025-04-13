import {Button} from "antd";
import {IButtonIconProps} from "./button-icon.type";

export default function ButtonIcon({title, icon, onClick}: IButtonIconProps) {
    return (
        <>
            <Button
                className="mt-5"
                type="primary"
                icon={icon}
                onClick={onClick}>
                {title}
            </Button>
        </>
    );
}
