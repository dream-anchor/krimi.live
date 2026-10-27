/* @ds-bundle: {"format":4,"namespace":"KrimiLiveDesignSystem_fc12d8","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"4d5040180dbc","components/actions/IconButton.jsx":"f4d1dbb1319b","components/core/Icon.jsx":"d9ef057b8e29","components/display/Badge.jsx":"00952b5326c6","components/display/Card.jsx":"4e40f900571d","components/display/Tag.jsx":"2a82424e7765","components/feedback/Dialog.jsx":"dad512784922","components/feedback/Toast.jsx":"939b6d231f1c","components/feedback/Tooltip.jsx":"fb9538182ae4","components/forms/Checkbox.jsx":"ca6794b45d81","components/forms/Input.jsx":"1e22fd54754c","components/forms/Radio.jsx":"4b71c0cd85e0","components/forms/Select.jsx":"6a050924eb15","components/forms/Switch.jsx":"36631544f87b","components/navigation/Tabs.jsx":"e1d065e8d209","ui_kits/website/Chrome.jsx":"44744ff3bbb8","ui_kits/website/DateRow.jsx":"6fecd50ea168","ui_kits/website/HomeScreen.jsx":"74e511ee0294","ui_kits/website/ProgrammScreen.jsx":"5afaa6c337ba","ui_kits/website/ShowScreen.jsx":"48d8036933f5","ui_kits/website/TicketDialog.jsx":"c8b3c0435476","ui_kits/website/data.js":"8d7165febf84"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KrimiLiveDesignSystem_fc12d8 = window.KrimiLiveDesignSystem_fc12d8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  label,
  style
}) {
  const url = `https://unpkg.com/lucide-static@0.454.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      backgroundColor: color,
      WebkitMask: `url(${url}) center / contain no-repeat`,
      mask: `url(${url}) center / contain no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 'var(--control-sm)',
    px: 16,
    fs: 14,
    icon: 16
  },
  md: {
    h: 'var(--control-md)',
    px: 22,
    fs: 15,
    icon: 18
  },
  lg: {
    h: 'var(--control-lg)',
    px: 30,
    fs: 17,
    icon: 20
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconStart,
  iconEnd,
  disabled,
  fullWidth,
  onClick,
  href,
  type = 'button',
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      bg: hover ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--on-accent)',
      bd: 'transparent'
    },
    highlight: {
      bg: hover ? 'var(--highlight-hover)' : 'var(--highlight)',
      fg: 'var(--on-highlight)',
      bd: 'transparent'
    },
    secondary: {
      bg: hover ? 'rgba(245,241,234,.08)' : 'transparent',
      fg: 'var(--text-1)',
      bd: 'var(--border-strong)'
    },
    ghost: {
      bg: hover ? 'rgba(245,241,234,.06)' : 'transparent',
      fg: 'var(--text-1)',
      bd: 'transparent'
    },
    inverse: {
      bg: hover ? 'var(--noir-100)' : 'var(--surface-inverse)',
      fg: 'var(--text-inverse)',
      bd: 'transparent'
    }
  }[variant] || {};
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${V.bd}`,
      background: disabled ? 'var(--surface-3)' : V.bg,
      color: disabled ? 'var(--text-disabled)' : V.fg,
      font: `var(--fw-semibold) ${s.fs}px/1 var(--font-sans)`,
      letterSpacing: '.01em',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: press && !disabled ? 'scale(.97)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, iconStart && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: s.icon
  }), children, iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dim = {
    sm: 36,
    md: 44,
    lg: 56
  }[size] || 44;
  const V = {
    ghost: {
      bg: hover ? 'rgba(245,241,234,.08)' : 'transparent',
      fg: 'var(--text-1)',
      bd: 'transparent'
    },
    secondary: {
      bg: hover ? 'rgba(245,241,234,.08)' : 'transparent',
      fg: 'var(--text-1)',
      bd: 'var(--border-strong)'
    },
    primary: {
      bg: hover ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--on-accent)',
      bd: 'transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${V.bd}`,
      background: V.bg,
      color: disabled ? 'var(--text-disabled)' : V.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)',
      padding: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(dim * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style
}) {
  const T = {
    neutral: ['var(--surface-4)', 'var(--text-1)', 'var(--noir-50)', 'var(--text-inverse)'],
    accent: ['var(--accent-soft)', 'var(--red-300)', 'var(--accent)', 'var(--on-accent)'],
    highlight: ['var(--highlight-soft)', 'var(--amber-400)', 'var(--highlight)', 'var(--on-highlight)'],
    success: ['var(--success-soft)', 'var(--success)', 'var(--green-500)', '#fff'],
    info: ['var(--info-soft)', 'var(--info)', 'var(--blue-500)', 'var(--text-inverse)']
  }[tone] || [];
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-xs)',
      background: solid ? T[2] : T[0],
      color: solid ? T[3] : T[1],
      font: 'var(--fw-medium) 11px/1 var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  variant = 'default',
  padding = 24,
  interactive,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const V = {
    default: {
      bg: 'var(--surface-1)',
      bd: 'var(--border-subtle)',
      sh: 'none'
    },
    raised: {
      bg: 'var(--surface-2)',
      bd: 'var(--border-subtle)',
      sh: 'var(--shadow-1)'
    },
    outline: {
      bg: 'transparent',
      bd: 'var(--border-default)',
      sh: 'none'
    },
    inverse: {
      bg: 'var(--surface-inverse)',
      bd: 'transparent',
      sh: 'none'
    }
  }[variant] || {};
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: V.bg,
      color: variant === 'inverse' ? 'var(--text-inverse)' : 'var(--text-1)',
      border: `1px solid ${lift ? 'var(--border-strong)' : V.bd}`,
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: lift ? 'var(--shadow-2)' : V.sh,
      transform: lift ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  onRemove,
  icon,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    role: onClick ? 'button' : undefined,
    "aria-pressed": onClick ? !!selected : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 34,
      padding: onRemove ? '0 8px 0 14px' : '0 14px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--surface-inverse)' : hover && onClick ? 'rgba(245,241,234,.08)' : 'transparent',
      color: selected ? 'var(--text-inverse)' : 'var(--text-1)',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-default)'}`,
      font: 'var(--fw-medium) 14px/1 var(--font-sans)',
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  overline,
  children,
  footer,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'var(--overlay)',
      backdropFilter: 'var(--blur-overlay)',
      WebkitBackdropFilter: 'var(--blur-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: '100%',
      overflow: 'auto',
      background: 'var(--surface-2)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-3)',
      color: 'var(--text-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 24px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 6
    }
  }, overline && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--accent-hover)',
      marginBottom: 10
    }
  }, overline), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) 34px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Schlie\xDFen",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px 28px',
      font: 'var(--text-body)',
      color: 'var(--text-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '18px 28px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: ['info', 'var(--text-2)'],
  success: ['circle-check', 'var(--success)'],
  warning: ['triangle-alert', 'var(--warning)'],
  danger: ['circle-alert', 'var(--danger)']
};
function Toast({
  tone = 'neutral',
  title,
  message,
  action,
  onClose,
  style
}) {
  const [icon, color] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 380,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--surface-3)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-2)',
      color: 'var(--text-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: color,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 15px/1.3 var(--font-sans)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-sans)',
      color: 'var(--text-2)',
      marginTop: title ? 2 : 0
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Schlie\xDFen",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--text-3)',
      cursor: 'pointer',
      padding: 2,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: `translateX(-50%) translateY(${show ? 0 : placement === 'bottom' ? -4 : 4}px)`,
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      padding: '7px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      font: '500 13px/1.3 var(--font-sans)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-1)',
      zIndex: 50,
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 15px/1.3 var(--font-sans)',
      color: 'var(--text-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: 0,
    onClick: toggle,
    onKeyDown: e => e.key === ' ' && (e.preventDefault(), toggle()),
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--accent)' : 'transparent',
      border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      color: 'var(--on-accent)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  iconStart,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const bd = error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--fw-semibold) 14px/1.2 var(--font-sans)',
      color: 'var(--text-1)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 14px',
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--surface-1)' : 'var(--surface-2)',
      border: `1px solid ${bd}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconStart && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: 18,
    color: "var(--text-3)"
  }), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 0,
      outline: 0,
      background: 'transparent',
      color: 'var(--text-1)',
      font: '400 16px/1 var(--font-sans)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: error ? 'var(--danger)' : 'var(--text-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column'
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 12
    }
  }, options.map(o => {
    const on = cur === o.value;
    const pick = () => {
      if (o.disabled) return;
      setInner(o.value);
      onChange && onChange(o.value);
    };
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      onClick: pick,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: o.disabled ? 'not-allowed' : 'pointer',
        opacity: o.disabled ? .45 : 1,
        font: '400 15px/1.3 var(--font-sans)',
        color: 'var(--text-1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      tabIndex: 0,
      onKeyDown: e => e.key === ' ' && (e.preventDefault(), pick()),
      style: {
        width: 22,
        height: 22,
        flex: 'none',
        borderRadius: '50%',
        border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--accent)'
      }
    })), o.label);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--fw-semibold) 14px/1.2 var(--font-sans)',
      color: 'var(--text-1)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: fid,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 48,
      padding: '0 40px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-2)',
      color: 'var(--text-1)',
      font: '400 16px/1 var(--font-sans)',
      cursor: 'pointer',
      outline: 0,
      border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-2)",
    style: {
      position: 'absolute',
      right: 14,
      top: 15,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 15px/1.3 var(--font-sans)',
      color: 'var(--text-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    tabIndex: 0,
    onClick: toggle,
    onKeyDown: e => e.key === ' ' && (e.preventDefault(), toggle()),
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--accent)' : 'var(--surface-4)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--noir-50)',
      boxShadow: '0 2px 6px rgba(0,0,0,.4)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--border-subtle)',
      overflowX: 'auto',
      ...style
    }
  }, items.map(it => {
    const on = it.id === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(it.id);
        onChange && onChange(it.id);
      },
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '14px 0',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        color: on ? 'var(--text-1)' : 'var(--text-3)',
        font: 'var(--fw-semibold) 15px/1 var(--font-sans)',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-mono)',
        color: on ? 'var(--accent-hover)' : 'var(--text-3)'
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--accent)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon
} = window.KrimiLiveDesignSystem_fc12d8;
function Wordmark({
  size = 30,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    style: {
      font: `900 ${size}px/1 var(--font-display)`,
      textTransform: 'uppercase',
      color: 'var(--text-1)',
      textDecoration: 'none',
      cursor: 'pointer',
      letterSpacing: '-.01em'
    }
  }, "Krimi", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "."), "live");
}
function Photo({
  label = 'Bühnenfoto',
  height = 300,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      background: 'var(--noir-900)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--spotlight)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg, rgba(245,241,234,.025) 0 2px, transparent 2px 14px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: 12,
      font: '400 10px/1 var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-3)'
    }
  }, label));
}
function Overline({
  children,
  color = 'var(--accent-hover)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color
    }
  }, children);
}
function Header({
  page,
  go
}) {
  const nav = [['programm', 'Spielplan'], ['show', 'Stücke'], ['about', 'Über uns'], ['gift', 'Gutscheine']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(11,10,9,.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => go('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flex: 1
    }
  }, nav.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id === 'about' || id === 'gift' ? page : id),
    style: {
      font: '600 15px/1 var(--font-sans)',
      color: page === id ? 'var(--text-1)' : 'var(--text-2)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Suche"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconStart: "ticket",
    onClick: () => go('programm')
  }, "Tickets")));
}
function Footer() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-3)"
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      color: 'var(--text-2)',
      textDecoration: 'none',
      fontSize: 15
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 40px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 40
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-2)',
      maxWidth: 300,
      marginTop: 14
    }
  }, "Krimis zum H\xF6ren und Sehen. Live auf der B\xFChne.")), col('Programm', ['Spielplan', 'Stücke', 'Gutscheine']), col('Service', ['FAQ', 'Barrierefreiheit', 'Kontakt']), col('Rechtliches', ['Impressum', 'Datenschutz', 'AGB'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 32px',
      font: '400 12px var(--font-mono)',
      color: 'var(--text-3)'
    }
  }, "\xA9 2026 Krimi.live \xB7 Beispielinhalte"));
}
Object.assign(window, {
  Wordmark,
  Photo,
  Overline,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DateRow.jsx
try { (() => {
const {
  Button,
  Badge
} = window.KrimiLiveDesignSystem_fc12d8;
const STATUS = {
  premiere: /*#__PURE__*/React.createElement(Badge, {
    tone: "highlight",
    variant: "solid"
  }, "Premiere"),
  last: /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Letzte Tickets"),
  sold: /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Ausverkauft"),
  extra: /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Zusatztermin"),
  ok: null
};
function DateRow({
  d,
  onTickets,
  onShow
}) {
  const show = window.KL_DATA.shows.find(s => s.id === d.show);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '110px minmax(0,1fr) 220px 150px',
      alignItems: 'center',
      gap: 24,
      padding: '20px 16px',
      borderBottom: '1px solid var(--border-subtle)',
      background: hover ? 'var(--surface-1)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.3 var(--font-mono)',
      color: 'var(--text-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '800 30px/1 var(--font-display)',
      color: 'var(--text-1)'
    }
  }, d.date), d.day, " \xB7 ", d.time), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onShow(show.id),
    style: {
      font: '700 26px/1.05 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--text-1)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, show.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 8
    }
  }, STATUS[d.status])), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-2)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-1)',
      fontWeight: 600
    }
  }, d.city), d.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end'
    }
  }, d.status === 'sold' ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    disabled: true
  }, "Ausverkauft") : /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: d.status === 'premiere' ? 'primary' : 'secondary',
    onClick: () => onTickets(d)
  }, "Tickets")));
}
Object.assign(window, {
  DateRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DateRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Input
} = window.KrimiLiveDesignSystem_fc12d8;
function HomeScreen({
  go,
  onTickets
}) {
  const {
    shows,
    dates
  } = window.KL_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 620,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    height: 620,
    label: "B\xFChnenfoto \xB7 Vollbild",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--vignette)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--amber-400)"
  }, "Fall Nr. 07 \xB7 Premiere 14.11. Augsburg"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      font: '900 var(--fs-display-xl)/var(--lh-display) var(--font-display)',
      textTransform: 'uppercase',
      maxWidth: 900
    }
  }, "Der Tote im", /*#__PURE__*/React.createElement("br", null), "Kirchturm"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--text-2)',
      maxWidth: 520,
      margin: '22px 0 30px'
    }
  }, "Ein Live-H\xF6rspiel mit drei Stimmen, einem Ger\xE4uschemacher und einem Fall, den du mitl\xF6st."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconEnd: "arrow-right",
    onClick: () => onTickets(dates[0])
  }, "Tickets sichern"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconStart: "play"
  }, "H\xF6rprobe")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "Spielplan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      font: '800 var(--fs-display-m)/var(--lh-display) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "N\xE4chste Termine")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconEnd: "arrow-right",
    onClick: () => go('programm')
  }, "Alle Termine")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, dates.slice(0, 4).map(d => /*#__PURE__*/React.createElement(DateRow, {
    key: d.id,
    d: d,
    onTickets: onTickets,
    onShow: () => go('show')
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Repertoire"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 28px',
      font: '800 var(--fs-display-m)/var(--lh-display) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "Die F\xE4lle"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 20
    }
  }, shows.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.id,
    padding: 0,
    interactive: true,
    onClick: () => go('show')
  }, /*#__PURE__*/React.createElement(Photo, {
    height: 220,
    label: "St\xFCckmotiv"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-3)"
  }, "Fall Nr. ", s.no, " \xB7 ", s.kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      margin: '10px 0 10px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-2)',
      fontSize: 15
    }
  }, s.text.split('.')[0], ".")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      padding: '112px 24px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 44px/1.2 var(--font-serif)'
    }
  }, "\u201EMan h\xF6rt den M\xF6rder atmen \u2013 und sieht, wie das Ger\xE4usch entsteht.\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-3)"
  }, "Pressestimme \xB7 Beispiel"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '112px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: 40,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'end',
      backgroundImage: 'var(--spotlight)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--amber-400)"
  }, "Newsletter"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 44px/.95 var(--font-display)',
      textTransform: 'uppercase',
      marginTop: 10
    }
  }, "Neue F\xE4lle zuerst erfahren")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "du@beispiel.de",
    iconStart: "mail",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "highlight",
    style: {
      height: 48
    }
  }, "Anmelden")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgrammScreen.jsx
try { (() => {
const {
  Tabs,
  Tag,
  Input
} = window.KrimiLiveDesignSystem_fc12d8;
function ProgrammScreen({
  go,
  onTickets
}) {
  const [month, setMonth] = React.useState('all');
  const [city, setCity] = React.useState(null);
  const [q, setQ] = React.useState('');
  const {
    dates,
    shows
  } = window.KL_DATA;
  const cities = [...new Set(dates.map(d => d.city))];
  const list = dates.filter(d => (month === 'all' || d.month === month) && (!city || d.city === city) && (!q || (shows.find(s => s.id === d.show).title + d.city).toLowerCase().includes(q.toLowerCase())));
  const count = m => dates.filter(d => d.month === m).length;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Spielplan 2026/27"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 36px',
      font: '900 var(--fs-display-l)/var(--lh-display) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "Alle Termine"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-end',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    style: {
      flex: 1
    },
    value: month,
    onChange: setMonth,
    items: [{
      id: 'all',
      label: 'Alle',
      count: dates.length
    }, {
      id: 'nov',
      label: 'November',
      count: count('nov')
    }, {
      id: 'dez',
      label: 'Dezember',
      count: count('dez')
    }, {
      id: 'jan',
      label: 'Januar',
      count: count('jan')
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "St\xFCck oder Stadt",
    iconStart: "search",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 280
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: !city,
    onClick: () => setCity(null)
  }, "Alle St\xE4dte"), cities.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: city === c,
    onClick: () => setCity(city === c ? null : c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, list.map(d => /*#__PURE__*/React.createElement(DateRow, {
    key: d.id,
    d: d,
    onTickets: onTickets,
    onShow: () => go('show')
  })), !list.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 0',
      textAlign: 'center',
      color: 'var(--text-2)'
    }
  }, "Keine Spur. F\xFCr diese Auswahl gibt es keine Termine.")));
}
Object.assign(window, {
  ProgrammScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgrammScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShowScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Icon
} = window.KrimiLiveDesignSystem_fc12d8;
function ShowScreen({
  go,
  onTickets
}) {
  const s = window.KL_DATA.shows[0];
  const dates = window.KL_DATA.dates.filter(d => d.show === s.id);
  const fact = (icon, k, v) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--text-3)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-3)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontWeight: 600
    }
  }, v)));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 480
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    height: 480,
    label: "St\xFCckmotiv \xB7 Vollbild",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--vignette)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 56px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "highlight",
    variant: "solid"
  }, "Premiere"), /*#__PURE__*/React.createElement(Badge, null, s.age)), /*#__PURE__*/React.createElement(Overline, {
    color: "var(--amber-400)"
  }, "Fall Nr. ", s.no, " \xB7 ", s.kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      font: '900 var(--fs-display-xl)/var(--lh-display) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, s.title))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 0',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 22px/1.5 var(--font-sans)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, s.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40,
      paddingTop: 28,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, fact('clock', 'Dauer', s.duration), fact('users', 'Besetzung', '3 Stimmen, 1 Geräuschemacher'), fact('accessibility', 'Zugang', 'Barrierefrei')), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '64px 0 8px',
      font: '800 44px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "Termine"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, dates.map(d => /*#__PURE__*/React.createElement(DateRow, {
    key: d.id,
    d: d,
    onTickets: onTickets,
    onShow: () => {}
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: 28,
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-3)"
  }, "Tickets ab"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 64px/1 var(--font-display)',
      margin: '8px 0 4px'
    }
  }, "29 \u20AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-2)',
      fontSize: 14,
      marginBottom: 22
    }
  }, "inkl. Vorverkaufsgeb\xFChr"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconEnd: "arrow-right",
    onClick: () => onTickets(dates[0])
  }, "Tickets sichern"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "ghost",
    iconStart: "gift"
  }, "Als Gutschein verschenken"))))));
}
Object.assign(window, {
  ShowScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShowScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TicketDialog.jsx
try { (() => {
const {
  Dialog,
  Button,
  Radio,
  IconButton,
  Checkbox
} = window.KrimiLiveDesignSystem_fc12d8;
function TicketDialog({
  date,
  onClose,
  onDone
}) {
  const [cat, setCat] = React.useState('a');
  const [qty, setQty] = React.useState(2);
  if (!date) return null;
  const show = window.KL_DATA.shows.find(s => s.id === date.show);
  const price = {
    a: 39,
    b: 34,
    c: 29
  }[cat];
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    onClose: onClose,
    overline: `${date.day} ${date.date} · ${date.time} · ${date.city}`,
    title: show.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Abbrechen"), /*#__PURE__*/React.createElement(Button, {
      iconEnd: "arrow-right",
      onClick: onDone
    }, "Weiter zur Kasse"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      marginBottom: 12
    }
  }, "Kategorie"), /*#__PURE__*/React.createElement(Radio, {
    value: cat,
    onChange: setCat,
    options: [{
      value: 'a',
      label: 'Kategorie A · 39,00 €'
    }, {
      value: 'b',
      label: 'Kategorie B · 34,00 €'
    }, {
      value: 'c',
      label: 'Kategorie C · 29,00 €'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-1)',
      fontWeight: 600
    }
  }, "Anzahl"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "minus",
    label: "Weniger",
    variant: "secondary",
    size: "sm",
    onClick: () => setQty(Math.max(1, qty - 1))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 26px/1 var(--font-display)',
      color: 'var(--text-1)',
      minWidth: 20,
      textAlign: 'center'
    }
  }, qty), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "Mehr",
    variant: "secondary",
    size: "sm",
    onClick: () => setQty(Math.min(8, qty + 1))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "Gesamt"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 40px/1 var(--font-display)',
      color: 'var(--text-1)'
    }
  }, (price * qty).toFixed(2).replace('.', ','), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Erinnerung per E-Mail am Vorabend",
    defaultChecked: true
  })));
}
Object.assign(window, {
  TicketDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TicketDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.KL_DATA = {
  shows: [{
    id: 'kirchturm',
    no: '07',
    title: 'Der Tote im Kirchturm',
    kicker: 'Live-Hörspiel',
    duration: '100 Min. inkl. Pause',
    age: 'ab 12',
    text: 'Ein Pfarrer, ein verschwundener Glöckner und eine Gemeinde voller Geheimnisse. Drei Sprecher, ein Geräuschemacher und ein Pianist lösen den Fall live auf der Bühne – du hörst jeden Schritt und siehst, wie er entsteht.'
  }, {
    id: 'nebel',
    no: '08',
    title: 'Mord im Nebel',
    kicker: 'Neues Stück',
    duration: '95 Min. inkl. Pause',
    age: 'ab 12',
    text: 'Ein Leuchtturm, eine Sturmnacht, sechs Verdächtige. Wer hat das Licht gelöscht?'
  }, {
    id: 'spiegel',
    no: '05',
    title: 'Das Haus der Spiegel',
    kicker: 'Wiederaufnahme',
    duration: '110 Min. inkl. Pause',
    age: 'ab 14',
    text: 'Eine Erbschaft, ein Testament, ein Spiegelkabinett. Nichts ist, wie es scheint.'
  }],
  dates: [{
    id: 1,
    show: 'kirchturm',
    day: 'SA',
    date: '14.11.',
    month: 'nov',
    time: '20:00',
    city: 'Augsburg',
    venue: 'Stadttheater',
    status: 'premiere'
  }, {
    id: 2,
    show: 'kirchturm',
    day: 'SO',
    date: '15.11.',
    month: 'nov',
    time: '18:00',
    city: 'München',
    venue: 'Prinzregententheater',
    status: 'last'
  }, {
    id: 3,
    show: 'nebel',
    day: 'FR',
    date: '20.11.',
    month: 'nov',
    time: '20:00',
    city: 'Köln',
    venue: 'Volksbühne',
    status: 'ok'
  }, {
    id: 4,
    show: 'spiegel',
    day: 'DO',
    date: '03.12.',
    month: 'dez',
    time: '19:30',
    city: 'Augsburg',
    venue: 'Parktheater',
    status: 'sold'
  }, {
    id: 5,
    show: 'kirchturm',
    day: 'SA',
    date: '12.12.',
    month: 'dez',
    time: '20:00',
    city: 'Hamburg',
    venue: 'Kampnagel',
    status: 'ok'
  }, {
    id: 6,
    show: 'nebel',
    day: 'FR',
    date: '15.01.',
    month: 'jan',
    time: '20:00',
    city: 'München',
    venue: 'Prinzregententheater',
    status: 'extra'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
