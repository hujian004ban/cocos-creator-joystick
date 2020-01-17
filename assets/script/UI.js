import JoystickEnum from "./joystick/JoystickEnum";
import JoystickEvent from "./joystick/JoystickEnum";

cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {},

  useFixedType() {
    JoystickEvent.getInstance().emit(
      JoystickEnum.JoystickEventType.CHANGE_JOYSTICK_TYPE,
      JoystickEnum.JoystickType.FIXED
    );
  },

  useFollowType() {
    JoystickEvent.getInstance().emit(
      JoystickEnum.JoystickEventType.CHANGE_JOYSTICK_TYPE,
      JoystickEnum.JoystickType.FOLLOW
    );
  }
});
