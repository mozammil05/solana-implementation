import { MouseEvent, ReactNode } from "react";
import './Button.scss'
import { useNavigate } from "react-router-dom";

type propType = {
  onClick?: (e: MouseEvent<HTMLElement>) => any,
  type?: 'button' | 'submit' | 'reset',
  className?: string,
  fluid?: boolean,
  transparent?: boolean,
  disabled?: boolean,
  title?: string | ReactNode,
  btnIcon?: string,
  onlyIcon?: ReactNode | string,
  centered?: boolean,
  navigate?: string,
  onlyIconClass?: string,
}

/**COMMON BUTTON WITH DYNAMIC PROPS */
const ButtonCustom = (props: propType) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={props.navigate ? () => navigate(props?.navigate || "") : props?.onClick}
      type={props?.type || 'button'}
      className={`ButtonCustom ${props?.centered ? 'centered' : ""} ${props?.className || ""} ${props.fluid ? "w-100" : ""} ${props.transparent ? "transparent" : ""}`}
      disabled={props?.disabled}
    >
      {props.title}
      {props.btnIcon && <img src={props.btnIcon} alt="icon" className="" />}
      {props.onlyIcon && <span className={`${props.onlyIconClass} ${'onlyIconClass'}`}>{props.onlyIcon}</span>}
    </button>
  );
};

export default ButtonCustom;
