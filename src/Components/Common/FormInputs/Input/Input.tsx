import { Form } from "react-bootstrap";
import { allowOnlyString } from "../../../../Services/common.service";
import "./Input.scss";

/** CUSTOM COMMON INPUT FIELD WITH DYNAMIC PROPS */
const InputCustom = (props) => {
  const disabledCharacters = ["e", "E", "+", "-"];
  const onKeyDown = (e) => {
    if (props.disableDecimal) {
      disabledCharacters.push(".");
    }

    /** RESTRICT USER TO ENTER MORE THEN MAX LENGTH IN INPUT TYPE NUBER */
    return props.type === "number"
      ? (disabledCharacters.includes(e.key) ||
        (e.key !== "Backspace" &&
          props.maxlength &&
          e.target.value.length === props.maxlength)) &&
      e.preventDefault()
      : props.onlyChar
        ? !allowOnlyString(e.key) && e.preventDefault()
        : null;
  };

  return (
    <>
      <Form.Group className={`Input ${props.className || ""}`} controlId={props.name}>
        {props.label ? (
          <Form.Label className={props.labelClassName}>
            {props.label}
          </Form.Label>
        ) : (
          ""
        )}
        <div className="InputInner">
          {props.leftIcon && <span className="leftIcon">{props.leftIcon}</span>}
          <Form.Control
            onFocus={props.onFocus}
            disabled={props.disabled}
            type={props.type || "text"}
            id={props.name}
            name={props.name}
            value={props.value}
            onKeyDown={onKeyDown}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
            onChange={props.onChange}
            maxLength={props.maxLength ? props.maxLength : ""}
            required={props.required}
            min={props.min}
            max={props.max}
            isInvalid={props.isInvalid}
            onPaste={(e) =>
              props.onlyChar ? e.preventDefault() : props.onChange
            }
            onWheel={props.onWheel}
            step={props.step}
            autoComplete={props.onlyChar ? props.autoComplete : "off"}
            pattern="\S(.*\S)?"
            title={props.title ? props.title : "Blank space are not allowed"}
            onInvalid={props.onInvalid}
            onInput={props.onInput}
            className={`${props.inputClassName || ""} ${props.leftIcon ? "leftIconInput" : ""
              }`}
            readOnly={props.readOnly}
          />
        </div>
        {props.error && <p className="error_msg">{props.error}</p>}
      </Form.Group>
    </>
  );
};
export default InputCustom;
