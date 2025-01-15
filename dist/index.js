import React$1, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function MainTemplate(props) {
  var schema = props.schema,
    content = props.content,
    onSubmit = props.onSubmit;
  return /*#__PURE__*/React$1.createElement("div", {
    className: "d-flex flex-column w-100"
  }, /*#__PURE__*/React$1.createElement("header", {
    className: "text-center mb-4"
  }, /*#__PURE__*/React$1.createElement("h3", null, schema.title), /*#__PURE__*/React$1.createElement("p", {
    style: {
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 'normal'
    }
  }, schema.description)), /*#__PURE__*/React$1.createElement("form", {
    onSubmit: onSubmit,
    className: "bg-light d-flex flex-column align-items-center justify-content-center p-5 border border-dark border-opacity-25 rounded-4 shadow needs-validation",
    style: {
      overflow: 'auto'
    }
  }, content, /*#__PURE__*/React$1.createElement("button", {
    type: "submit",
    className: "primaryButton"
  }, "Submit")), /*#__PURE__*/React$1.createElement("footer", {
    className: "mt-4 text-center"
  }, schema.footerContent));
}

function PasswordInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("input", {
    type: "password",
    name: fieldName,
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    placeholder: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function EmailInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("input", {
    type: "text",
    name: fieldName,
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    placeholder: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function TextInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("input", {
    type: "text",
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    name: fieldName,
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    placeholder: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function AltDateInput(props) {
  var _formData$fieldName, _formData$fieldName2, _formData$fieldName3;
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var _ref = uiField["ui:options"] || {},
    yearsRange = _ref.yearsRange,
    dateFormat = _ref.format;
  var startYear = yearsRange ? yearsRange[0] : 1900;
  var endYear = yearsRange ? yearsRange[1] : 2100;
  var isColumnLayout = uiField["ui:layout"] === "column";
  var handleChangeDatePart = function handleChangeDatePart(part, value) {
    var updatedDate = _objectSpread2({}, formData[fieldName]);
    updatedDate[part] = value;
    handleChange(fieldName, updatedDate);
  };
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var getDaysInMonth = function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  };
  var dayOptions = [];
  var monthOptions = months.map(function (month, index) {
    return /*#__PURE__*/React$1.createElement("option", {
      key: index,
      value: index + 1
    }, month);
  });
  var yearOptions = [];
  for (var i = startYear; i <= endYear; i++) {
    yearOptions.push(/*#__PURE__*/React$1.createElement("option", {
      key: i,
      value: i
    }, i));
  }
  var selectedYear = ((_formData$fieldName = formData[fieldName]) === null || _formData$fieldName === void 0 ? void 0 : _formData$fieldName.year) || new Date().getFullYear();
  var selectedMonth = ((_formData$fieldName2 = formData[fieldName]) === null || _formData$fieldName2 === void 0 ? void 0 : _formData$fieldName2.month) || new Date().getMonth() + 1;
  var selectedDay = ((_formData$fieldName3 = formData[fieldName]) === null || _formData$fieldName3 === void 0 ? void 0 : _formData$fieldName3.day) || new Date().getDate();
  var daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  for (var _i = 1; _i <= daysInMonth; _i++) {
    dayOptions.push(/*#__PURE__*/React$1.createElement("option", {
      key: _i,
      value: _i
    }, _i));
  }
  var isYMD = dateFormat === "YMD";
  var isMDY = dateFormat === "MDY";
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("div", {
    className: "".concat(isColumnLayout ? "d-flex flex-column" : "d-flex flex-row")
  }, isYMD && /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("select", {
    name: "".concat(fieldName, "_year"),
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: selectedYear,
    onChange: function onChange(e) {
      return handleChangeDatePart("year", e.target.value);
    }
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Year"), yearOptions), /*#__PURE__*/React$1.createElement("select", {
    name: "".concat(fieldName, "_month"),
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: selectedMonth,
    onChange: function onChange(e) {
      return handleChangeDatePart("month", e.target.value);
    }
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Month"), monthOptions), /*#__PURE__*/React$1.createElement("select", {
    name: "".concat(fieldName, "_day"),
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: selectedDay,
    onChange: function onChange(e) {
      return handleChangeDatePart("day", e.target.value);
    }
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Day"), dayOptions)), isMDY && /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("select", {
    name: "".concat(fieldName, "_month"),
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: selectedMonth,
    onChange: function onChange(e) {
      return handleChangeDatePart("month", e.target.value);
    }
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Month"), monthOptions), /*#__PURE__*/React$1.createElement("select", {
    name: "".concat(fieldName, "_day"),
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: selectedDay,
    onChange: function onChange(e) {
      return handleChangeDatePart("day", e.target.value);
    }
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Day"), dayOptions), /*#__PURE__*/React$1.createElement("select", {
    name: "".concat(fieldName, "_year"),
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: selectedYear,
    onChange: function onChange(e) {
      return handleChangeDatePart("year", e.target.value);
    }
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Year"), yearOptions))), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "text-danger"
    }, error);
  }));
}

function FileInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    preview = _useState2[0],
    setPreview = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    fileDetails = _useState4[0],
    setFileDetails = _useState4[1];
  var convertToBase64 = function convertToBase64(file) {
    // Convert file to Base64
    var reader = new FileReader();
    reader.onloadend = function () {
      var base64File = reader.result; // This will be a Base64 encoded string
      handleChange(fieldName, base64File); // Pass the Base64 string to the handler
    };
    reader.readAsDataURL(file);
  };
  var handleFileChange = function handleFileChange(fieldName, e) {
    var file = e.target.files[0];
    setPreview();
    setFileDetails();
    if (file) {
      var _uiField$uiOptions;
      if (file.type.startsWith("image/")) {
        var objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        setFileDetails(null);
      } else {
        setPreview(null);
        setFileDetails({
          name: file.name,
          type: file.type,
          size: file.size
        });
      }
      var outputFormat = uiField === null || uiField === void 0 || (_uiField$uiOptions = uiField["ui:options"]) === null || _uiField$uiOptions === void 0 ? void 0 : _uiField$uiOptions["output"];
      if (outputFormat === "base64") {
        convertToBase64(file);
      } else {
        handleChange(fieldName, file);
      }
    }
  };
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass)
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "file",
    onChange: function onChange(e) {
      return handleFileChange(fieldName, e);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "")
  }), (formData[fieldName] && typeof formData[fieldName] === "string" && formData[fieldName].startsWith("data:") || preview) && /*#__PURE__*/React$1.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React$1.createElement("img", {
    src: preview || formData[fieldName],
    alt: "Preview",
    style: {
      maxWidth: "100%",
      maxHeight: "200px",
      objectFit: "cover"
    }
  })), fileDetails && /*#__PURE__*/React$1.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React$1.createElement("p", null, /*#__PURE__*/React$1.createElement("strong", null, "File Name:"), " ", fileDetails.name), /*#__PURE__*/React$1.createElement("p", null, /*#__PURE__*/React$1.createElement("strong", null, "File Type:"), " ", fileDetails.type), /*#__PURE__*/React$1.createElement("p", null, /*#__PURE__*/React$1.createElement("strong", null, "File Size:"), " ", Math.round(fileDetails.size / 1024), " KB")), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

var ButtonWidget = function ButtonWidget(props) {
  var field = props.uiField;
  var value = field['ui:options']['value'];
  var onClick = field['ui:options']['onClick'];
  var btnClass = field['classNames'];
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: btnClass,
    onClick: onClick
  }, value || 'Click Me!'));
};

function ButtonInput(props) {
  var uiField = props.uiField;
  return /*#__PURE__*/React$1.createElement(ButtonWidget, {
    uiField: uiField
  });
}

function CalendarInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    props.uiField;
    var fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "date",
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "")
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function CheckboxInput(props) {
  var _field$items;
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title,
    field = props.field,
    uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var isColumnLayout = uiField["ui:layout"] === "column";
  var renderCheckboxes = function renderCheckboxes(enumValues) {
    return enumValues.map(function (value, index) {
      var _formData$fieldName;
      return /*#__PURE__*/React$1.createElement("div", {
        key: index,
        className: "form-check",
        style: {
          flexBasis: "20%"
        }
      }, /*#__PURE__*/React$1.createElement("input", {
        type: "checkbox",
        className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
        name: fieldName,
        value: value,
        checked: (_formData$fieldName = formData[fieldName]) === null || _formData$fieldName === void 0 ? void 0 : _formData$fieldName.includes(value),
        onChange: function onChange(e) {
          var updatedValues = e.target.checked ? [].concat(_toConsumableArray(formData[fieldName] || []), [value]) : (formData[fieldName] || []).filter(function (val) {
            return val !== value;
          });
          handleChange(fieldName, updatedValues);
        }
      }), /*#__PURE__*/React$1.createElement("label", {
        className: "form-check-label"
      }, value));
    });
  };
  var renderOneOfOptions = function renderOneOfOptions(oneOfOptions) {
    return oneOfOptions.map(function (option, index) {
      var _formData$fieldName2;
      var value = _typeof(option) === "object" ? option["const"] : option;
      var label = _typeof(option) === "object" ? option.title : option;
      return /*#__PURE__*/React$1.createElement("div", {
        key: index,
        className: "form-check",
        style: {
          flexBasis: "20%"
        }
      }, /*#__PURE__*/React$1.createElement("input", {
        type: "checkbox",
        className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
        name: fieldName,
        value: value,
        checked: (_formData$fieldName2 = formData[fieldName]) === null || _formData$fieldName2 === void 0 ? void 0 : _formData$fieldName2.includes(value),
        onChange: function onChange(e) {
          var updatedValues = e.target.checked ? [].concat(_toConsumableArray(formData[fieldName] || []), [value]) : (formData[fieldName] || []).filter(function (val) {
            return val !== value;
          });
          handleChange(fieldName, updatedValues);
        }
      }), /*#__PURE__*/React$1.createElement("label", {
        className: "form-check-label"
      }, label));
    });
  };
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass)
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("div", {
    className: "form-check ".concat(isColumnLayout ? "d-flex flex-column" : "d-flex flex-row"),
    style: {
      overflow: "hidden"
    }
  }, ((_field$items = field.items) === null || _field$items === void 0 ? void 0 : _field$items["enum"]) && renderCheckboxes(field.items["enum"]), field.oneOf && renderOneOfOptions(field.oneOf)), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function DateInput(props) {
  var _uiSchema$fieldName;
  props.schema;
    var uiSchema = props.uiSchema,
    formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var formatOfDate = ((_uiSchema$fieldName = uiSchema[fieldName]) === null || _uiSchema$fieldName === void 0 || (_uiSchema$fieldName = _uiSchema$fieldName["ui:options"]) === null || _uiSchema$fieldName === void 0 ? void 0 : _uiSchema$fieldName.format) || "MM/dd/yyyy";
  var handleDateChange = function handleDateChange(fieldName, date, formatString) {
    var formattedDate;

    // Use the current date if the selected date is invalid
    if (!date || isNaN(date.getTime())) {
      date = new Date(); // Fallback to current date
    }

    // Format the date as per the provided formatString
    if (formatString) {
      try {
        formattedDate = format(date, formatString);
      } catch (error) {
        formattedDate = date.toISOString(); // Fallback to ISO format if formatting fails
      }
    } else {
      formattedDate = new Date(date).toISOString(); // Default to ISO format
    }
    handleChange(fieldName, formattedDate);
  };
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement(DatePicker, {
    selected: formData[fieldName],
    onChange: function onChange(date) {
      return handleDateChange(fieldName, date, formatOfDate);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "", " form-control"),
    dateFormat: formatOfDate,
    placeholderText: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function DateRangeInput(props) {
  var _formData$dateRange, _formData$dateRange2, _formData$dateRange3, _uiSchema$fieldName$u, _formData$dateRange4, _formData$dateRange5, _formData$dateRange6, _formData$dateRange7, _uiSchema$fieldName$u2;
  props.schema;
    var uiSchema = props.uiSchema,
    formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var isColumnLayout = uiField["ui:layout"] === "column";
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("div", {
    className: "".concat(isColumnLayout ? "d-flex flex-column" : "d-flex flex-row")
  }, /*#__PURE__*/React$1.createElement(DatePicker, {
    selected: ((_formData$dateRange = formData.dateRange) === null || _formData$dateRange === void 0 ? void 0 : _formData$dateRange.startDate) || new Date(),
    onChange: function onChange(date) {
      return handleChange("dateRange", _objectSpread2(_objectSpread2({}, formData.dateRange), {}, {
        startDate: date
      }));
    },
    selectsStart: true,
    startDate: (_formData$dateRange2 = formData.dateRange) === null || _formData$dateRange2 === void 0 ? void 0 : _formData$dateRange2.startDate,
    minDate: new Date(),
    endDate: (_formData$dateRange3 = formData.dateRange) === null || _formData$dateRange3 === void 0 ? void 0 : _formData$dateRange3.endDate,
    placeholderText: "Start Date",
    dateFormat: (_uiSchema$fieldName$u = uiSchema[fieldName]["ui:options"]) === null || _uiSchema$fieldName$u === void 0 ? void 0 : _uiSchema$fieldName$u.format,
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    placeholder: uiField["ui:placeholder"]
  }), /*#__PURE__*/React$1.createElement(DatePicker, {
    selected: ((_formData$dateRange4 = formData.dateRange) === null || _formData$dateRange4 === void 0 ? void 0 : _formData$dateRange4.endDate) || new Date(),
    onChange: function onChange(date) {
      return handleChange("dateRange", _objectSpread2(_objectSpread2({}, formData.dateRange), {}, {
        endDate: date
      }));
    },
    selectsEnd: true,
    startDate: (_formData$dateRange5 = formData.dateRange) === null || _formData$dateRange5 === void 0 ? void 0 : _formData$dateRange5.startDate,
    endDate: (_formData$dateRange6 = formData.dateRange) === null || _formData$dateRange6 === void 0 ? void 0 : _formData$dateRange6.endDate,
    minDate: (_formData$dateRange7 = formData.dateRange) === null || _formData$dateRange7 === void 0 ? void 0 : _formData$dateRange7.startDate,
    placeholderText: "End Date",
    dateFormat: (_uiSchema$fieldName$u2 = uiSchema[fieldName]["ui:options"]) === null || _uiSchema$fieldName$u2 === void 0 ? void 0 : _uiSchema$fieldName$u2.format,
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    placeholder: uiField["ui:placeholder"]
  })), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function DateTimeInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    props.uiField;
    var fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "datetime-local",
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "")
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function DayInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    props.uiField;
    var fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "date",
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "")
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function MonthInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    props.uiField;
    var fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "month",
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "")
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function ProgressInput(props) {
  props.schemaModel;
    props.formData;
    var errors = props.errors,
    title = props.title,
    field = props.field;
    props.uiField;
    props.fieldClass;
    var layoutClass = props.layoutClass;
    props.handleChange;
    var fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("div", {
    className: "progress",
    style: {
      height: "30px"
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: "".concat(field === null || field === void 0 ? void 0 : field["default"], "%"),
      backgroundColor: "#007bff"
    },
    "aria-valuenow": (field === null || field === void 0 ? void 0 : field["default"]) || 0,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, (field === null || field === void 0 ? void 0 : field["default"]) || 0, "%")), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "text-danger mb-0"
    }, error);
  }));
}

function RadioInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title,
    field = props.field,
    uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var isColumnLayout = uiField["ui:layout"] === "column";
  var renderEnumOptions = function renderEnumOptions(enumValues) {
    return enumValues.map(function (value, index) {
      return /*#__PURE__*/React$1.createElement("div", {
        key: index,
        className: "form-check"
      }, /*#__PURE__*/React$1.createElement("input", {
        type: "radio",
        className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
        name: fieldName,
        value: value,
        checked: formData[fieldName] === value,
        onChange: function onChange() {
          return handleChange(fieldName, value);
        }
      }), /*#__PURE__*/React$1.createElement("label", {
        className: "form-check-label"
      }, value));
    });
  };
  var renderOneOfOptions = function renderOneOfOptions(oneOfOptions) {
    return oneOfOptions.map(function (option, index) {
      var value = _typeof(option) === "object" ? option["const"] : option;
      var label = _typeof(option) === "object" ? option.title : option;
      return /*#__PURE__*/React$1.createElement("div", {
        key: index,
        className: "form-check"
      }, /*#__PURE__*/React$1.createElement("input", {
        type: "radio",
        className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
        name: fieldName,
        value: value,
        checked: formData[fieldName] === value,
        onChange: function onChange() {
          return handleChange(fieldName, value);
        }
      }), /*#__PURE__*/React$1.createElement("label", {
        className: "form-check-label"
      }, label));
    });
  };
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass)
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("div", {
    className: "form-check ".concat(isColumnLayout ? "d-flex flex-column" : "d-flex flex-row")
  }, field["enum"] && renderEnumOptions(field["enum"]), field.oneOf && renderOneOfOptions(field.oneOf)), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function RangeInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title,
    field = props.field,
    uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var min = field.minimum || 0;
  var max = field.maximum || 100;
  field.oneOf;
  console.log("Inside range : ");
  var defaultValue = field["default"] !== undefined && field["default"] !== null ? field["default"] : min;
  var rangeValue = formData[fieldName] || defaultValue;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass)
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("input", {
    type: "range",
    name: fieldName,
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: rangeValue,
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    min: min,
    max: max,
    step: "1",
    placeholder: uiField["ui:placeholder"]
  }), /*#__PURE__*/React$1.createElement("div", {
    className: "range-value"
  }, /*#__PURE__*/React$1.createElement("span", null, rangeValue)), errors[fieldName] && /*#__PURE__*/React$1.createElement("div", {
    className: "invalid-feedback"
  }, errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "m-0"
    }, error);
  })));
}

function SelectInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title,
    field = props.field,
    uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  var oneOf = field.oneOf,
    enumValues = field["enum"];
  var renderEnumOptions = function renderEnumOptions(enumValues) {
    return enumValues.map(function (value, index) {
      return /*#__PURE__*/React$1.createElement("option", {
        key: index,
        value: value
      }, value);
    });
  };
  var renderOneOfOptions = function renderOneOfOptions(oneOfOptions) {
    return oneOfOptions.map(function (option, index) {
      var value = _typeof(option) === "object" ? option["const"] : option;
      var label = _typeof(option) === "object" ? option.title || value : value;
      return /*#__PURE__*/React$1.createElement("option", {
        key: index,
        value: value
      }, label);
    });
  };
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass)
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("select", {
    name: fieldName,
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    placeholder: uiField["ui:placeholder"]
  }, /*#__PURE__*/React$1.createElement("option", {
    value: ""
  }, "Select an option"), enumValues && renderEnumOptions(enumValues), oneOf && renderOneOfOptions(oneOf)), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function TimeInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "time",
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    placeholder: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function UpDownInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("input", {
    type: "number",
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    name: fieldName,
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    placeholder: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function YearInput(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    props.uiField;
    var fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title), /*#__PURE__*/React$1.createElement("input", {
    type: "number",
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    min: "1900",
    max: "2100",
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : "")
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function TextArea(props) {
  props.schemaModel;
    var formData = props.formData,
    errors = props.errors,
    title = props.title;
    props.field;
    var uiField = props.uiField,
    fieldClass = props.fieldClass,
    layoutClass = props.layoutClass,
    handleChange = props.handleChange,
    fieldName = props.fieldName;
  return /*#__PURE__*/React$1.createElement("div", {
    key: fieldName,
    className: "".concat(layoutClass, " ")
  }, /*#__PURE__*/React$1.createElement("label", {
    className: "form-label"
  }, title || fieldName), /*#__PURE__*/React$1.createElement("textarea", {
    type: "textarea",
    className: "".concat(fieldClass, " ").concat(errors[fieldName] ? "is-invalid" : ""),
    name: fieldName,
    value: formData[fieldName] || "",
    onChange: function onChange(e) {
      return handleChange(fieldName, e.target.value);
    },
    placeholder: uiField["ui:placeholder"]
  }), errors[fieldName] && errors[fieldName].map(function (error, index) {
    return /*#__PURE__*/React$1.createElement("p", {
      key: index,
      className: "invalid-feedback m-0"
    }, error);
  }));
}

function ContentTemplate(_ref) {
  var formData = _ref.formData,
    schema = _ref.schema,
    uiSchema = _ref.uiSchema,
    fields = _ref.fields,
    errors = _ref.errors,
    handleChange = _ref.onChange;
    _ref.onSuccess;
    _ref.onError;
    _ref.onSubmit;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    _useState4[1];
  var getDeepValue = function getDeepValue(obj, path) {
    return path.split('.').reduce(function (acc, part) {
      return acc && acc[part];
    }, obj);
  };
  var normalizeFieldName = function normalizeFieldName(fieldName) {
    var parts = fieldName.split('.');
    return parts[parts.length - 1]; // Return the last part of the path
  };
  var getFieldSchemaByName = function getFieldSchemaByName(schema, fieldName) {
    // Recursive function to find the field by its name
    var _findField = function findField(currentSchema, currentFieldName) {
      // If the current schema is an object with properties, check each property
      if (currentSchema.type === 'object' && currentSchema.properties) {
        // Iterate through all properties to find the one that matches currentFieldName
        for (var _i = 0, _Object$entries = Object.entries(currentSchema.properties); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          // If the key matches the field name, return the field
          if (key === currentFieldName) {
            return value;
          }

          // If the field is an object, recurse into it
          if (value.type === 'object') {
            var result = _findField(value, currentFieldName);
            if (result) return result; // Return the field if found in nested object
          }
        }
      }
      // If the field is not found, return null
      return null;
    };
    return _findField(schema, fieldName);
  };
  var _renderField = function renderField(field, fieldName) {
    var _uiField$uiOptions;
    var parentSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : schema;
    var fieldPath = arguments.length > 3 ? arguments[3] : undefined;
    var title = field.title;
      field["enum"];
      field.oneOf;
      var format = field.format;
    fieldPath = fieldPath ? "".concat(fieldPath, ".").concat(fieldName) : fieldName;
    // console.log("fieldName : ", fieldName);
    var uiField = getDeepValue(uiSchema, fieldPath) || {};
    var uiFieldClassNames = uiField['classNames'] || (uiField === null || uiField === void 0 || (_uiField$uiOptions = uiField['ui:options']) === null || _uiField$uiOptions === void 0 ? void 0 : _uiField$uiOptions.classNames);
    var fieldClass = "form-control ".concat(uiFieldClassNames);
    var widget = uiField['ui:widget'] || format || 'string';
    // console.log("Widget : ", widget);
    var layoutClass = "".concat(uiField['ui:layout']);
    uiField['ui:layout'] === 'column';
    uiField !== null && uiField !== void 0 && uiField['ui:col'] ? "col-".concat(uiField['ui:col']) : 'w-100';
    var normalizedFieldName = normalizeFieldName(fieldName);
    if (field.type === 'object' && field.properties) {
      return (
        /*#__PURE__*/
        // <div className={`row ${uiField?.classNames}`}>
        React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("h5", {
          className: "mt-3"
        }, title || fieldName), /*#__PURE__*/React$1.createElement("p", {
          style: {
            size: '5px'
          }
        }, field === null || field === void 0 ? void 0 : field.description), Object.keys(field.properties).map(function (nestedFieldName) {
          var nestedField = field.properties[nestedFieldName];
          var updatedParentSchema = parentSchema.properties[nestedFieldName];
          return _renderField(nestedField, "".concat(nestedFieldName), updatedParentSchema, fieldPath);
        }))
        /* </div> */
      );
    }

    // const handleDefaultFieldChange = (e) => {
    //   // if (f_name) {
    //   //   console.log("inside f_name");
    //   //   if (e.target?.files) {
    //   //     handleChange(f_name, e.target.files[0]);
    //   //   }
    //   //   else {
    //   //     handleChange(f_name, e.target.value);
    //   //   }
    //   // }
    //   const inputType = e.target?.files ? 'file' : 'other';
    //   console.log("input type : ", inputType);
    //   if (inputType === 'file') {
    //     const outputFormat = uiField['ui:options']['output'];
    //     const file = e.target.files[0];
    //     if (outputFormat === 'base64') {
    //       convertToBase64(file);
    //     } else {
    //       handleChange(fieldName, file);
    //     }
    //   } else {
    //     console.log("Inside default handle");
    //     handleChange(e.target.name, e.target.value);
    //   }

    // };

    //Implementation of handleDefaultFieldChange where only target value is accepted as parameter
    var handleDefaultFieldChange = function handleDefaultFieldChange(value) {
      handleChange(normalizedFieldName, value);
    };
    var inputFields = {
      string: TextInput,
      text: TextInput,
      'alt-date': AltDateInput,
      password: PasswordInput,
      email: EmailInput,
      file: FileInput,
      button: ButtonInput,
      calendar: CalendarInput,
      checkboxes: CheckboxInput,
      date: DateInput,
      daterange: DateRangeInput,
      datetime: DateTimeInput,
      day: DayInput,
      month: MonthInput,
      progress: ProgressInput,
      radio: RadioInput,
      range: RangeInput,
      select: SelectInput,
      time: TimeInput,
      updown: UpDownInput,
      year: YearInput,
      numberEnum: RadioInput,
      textarea: TextArea
    };
    var Component = inputFields[widget];
    if (Component) {
      return /*#__PURE__*/React$1.createElement(Component, {
        schema: schema,
        uiSchema: uiSchema,
        formData: formData,
        field: field,
        uiField: uiField,
        errors: errors,
        handleChange: handleChange,
        fieldName: normalizedFieldName,
        layoutClass: layoutClass,
        title: title,
        fieldClass: fieldClass
      });
    } else {
      if (fields) {
        var CustomField = fields[widget];
        if (CustomField) {
          // return <CustomField schema={schema.properties[fieldName]} uiSchema={uiSchema[fieldName]} fieldName={fieldName} onChange={(e) => handleChange(fieldName, e)} errors={errors[fieldName]}/>;
          return /*#__PURE__*/React$1.createElement("div", {
            className: "".concat(layoutClass)
          }, /*#__PURE__*/React$1.createElement("label", {
            className: "form-label"
          }, field === null || field === void 0 ? void 0 : field.title), /*#__PURE__*/React$1.createElement(CustomField, {
            schema: field,
            uiSchema: uiField,
            fieldName: normalizedFieldName,
            value: formData[normalizedFieldName],
            onChange: handleDefaultFieldChange,
            errors: errors[normalizedFieldName],
            placeholder: uiField === null || uiField === void 0 ? void 0 : uiField['ui:placeholder']
          }), errors[normalizedFieldName] && errors[normalizedFieldName].map(function (error, index) {
            return /*#__PURE__*/React$1.createElement("p", {
              key: index,
              className: "text-danger mt-0",
              style: {
                fontSize: '0.875rem',
                marginTop: 0
              }
            }, error);
          }));
        }
      }
      // return <p className="text-danger" style={{fontSize: '0.875em'}}>No such component available</p>;
    }
  };
  var renderSections = function renderSections() {
    var layout = uiSchema.layout || [];
    if (!layout || layout.length === 0) {
      // Fallback to normal rendering when layout is not provided
      return Object.keys(schema.properties || {}).map(function (fieldName, index) {
        var field = getFieldSchemaByName(schema, fieldName);
        return field ? _renderField(field, fieldName) : null;
      });
    }
    return layout.map(function (section, index) {
      var title = section.title,
        classNames = section.classNames,
        fields = section.fields;
      return /*#__PURE__*/React$1.createElement("div", {
        key: index,
        className: "section-container w-100"
      }, title && /*#__PURE__*/React$1.createElement("h5", {
        className: "section-title"
      }, title), /*#__PURE__*/React$1.createElement("div", {
        className: "fields-container ".concat(classNames)
      }, fields.map(function (fieldPathOrSection, fieldIndex) {
        if (typeof fieldPathOrSection === 'string') {
          var fieldName = fieldPathOrSection.split('.').pop();
          var field = getFieldSchemaByName(schema, fieldName);
          if (field) {
            return _renderField(field, fieldPathOrSection);
          }
        } else if (_typeof(fieldPathOrSection) === 'object' && fieldPathOrSection.type === 'section') {
          return /*#__PURE__*/React$1.createElement("div", {
            key: fieldIndex,
            className: "".concat(fieldPathOrSection.classNames)
          }, fieldPathOrSection.title && /*#__PURE__*/React$1.createElement("h6", null, fieldPathOrSection.title), fieldPathOrSection.fields.map(function (nestedField) {
            var nestedFieldName = nestedField.split('.').pop();
            var nestedFieldSchema = getFieldSchemaByName(schema, nestedFieldName);
            return nestedFieldSchema ? _renderField(nestedFieldSchema, nestedField) : null;
          }));
        }
        console.warn("Unknown field type: ".concat(fieldPathOrSection));
      })));
    });
  };
  return renderSections();
}

function MyForm(props) {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var schema = props.schema,
    uiSchema = props.uiSchema,
    onSubmit = props.onSubmit,
    onChange = props.onChange,
    onSuccess = props.onSuccess,
    onError = props.onError,
    prefilledFormData = props.formData;
    props.errorSchema;
  var templates = props === null || props === void 0 ? void 0 : props.templates;
  var templateName = uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema['template'];
  // console.log('Form data : ', formData)
  var MyTemplate;
  if (templateName) {
    MyTemplate = templates[templateName];
  }
  var fields = props === null || props === void 0 ? void 0 : props.widgets;
  var normalizeFieldName = function normalizeFieldName(fieldName) {
    var parts = fieldName.split('.');
    return parts[parts.length - 1]; // Return the last part of the path
  };
  var normalizeData = function normalizeData(schema, data) {
    var normalizedData = {};
    var _processProperties = function processProperties(properties, data) {
      // console.log("Data : ", data);
      // console.log("inside process properties");
      Object.keys(properties).forEach(function (fieldName) {
        var fieldSchema = properties[fieldName];
        var fieldValue = data === null || data === void 0 ? void 0 : data[fieldName];
        if (fieldSchema.type === 'string' && fieldSchema.format === 'date') {
          var _fieldUiSchema$uiOpt;
          var fieldUiSchema = getFieldUiSchema(fieldName, uiSchema);
          var displayFormat = ((_fieldUiSchema$uiOpt = fieldUiSchema['ui:options']) === null || _fieldUiSchema$uiOpt === void 0 ? void 0 : _fieldUiSchema$uiOpt.format) || 'yyyy/MM/dd';
          try {
            normalizedData[fieldName] = format(parseISO(fieldValue), displayFormat);
          } catch (_unused) {
            if (data[fieldName]) {
              normalizedData[fieldName] = fieldValue; // Fallback to raw value
            }
          }
        } else if (fieldSchema.type === 'object' && fieldSchema.properties) {
          _processProperties(fieldSchema.properties, data);
        } else {
          if (data[fieldName] !== undefined && data[fieldName] !== null) {
            normalizedData[fieldName] = fieldValue;
          }
        }
      });
      return normalizedData;
    };
    return _processProperties(schema.properties, data || {});
  };
  useEffect(function () {
    var _flattenData = function flattenData(data) {
      var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var result = {};
      Object.entries(data || {}).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        // Keep only the final part of the key (leaf node)
        var newKey = parentKey ? key : key; // Keep just the field name as key

        if (Array.isArray(value)) {
          // If the value is an array, preserve the array structure
          result[newKey] = value;
        } else if (_typeof(value) === 'object' && value !== null) {
          // If the value is an object, recursively flatten its properties
          result = _objectSpread2(_objectSpread2({}, result), _flattenData(value, newKey));
        } else {
          // If the value is a primitive (string, number, etc.), assign the value directly
          result[newKey] = value;
        }
      });
      return result;
    };
    var initializeFormData = function initializeFormData() {
      // Extract default data from schema
      var _extractDefaults = function extractDefaults(schema) {
        var defaults = {};
        var processSchema = function processSchema(properties) {
          Object.entries(properties || {}).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];
            if (value.type === 'object' && value.properties) {
              defaults[key] = _extractDefaults(value); // Recursively process nested objects
            } else if (value.type === 'array' && value["default"]) {
              defaults[key] = value["default"]; // Handle default arrays
            } else if (value["default"] !== undefined) {
              defaults[key] = value["default"]; // Handle primitive defaults
            }
          });
        };
        processSchema(schema === null || schema === void 0 ? void 0 : schema.properties);
        return defaults;
      };

      // Get default data from schema
      var defaultData = _extractDefaults(schema);

      // console.log('Default data : ', defaultData)

      // Flatten the default data
      var flattenedDefaultData = _flattenData(defaultData);

      // console.log("Default flattened data : ", flattenedDefaultData);

      // Flatten the prefilled data
      // console.log("Prefilled form data : ", prefilledFormData);
      var flattenedPrefilledData = _flattenData(prefilledFormData);
      // console.log("flattenedPrefilledData : ", flattenedPrefilledData);

      // Merge flattened data: prefilled data takes priority over default data
      var mergedData = _objectSpread2(_objectSpread2({}, flattenedDefaultData), flattenedPrefilledData);

      // Normalize the merged data (if needed)
      var normalizedData = normalizeData(schema, mergedData);

      // console.log("Normalized : ", normalizedData);

      // Set form data
      setFormData(normalizedData);
    };
    initializeFormData();
  }, [prefilledFormData, schema]);
  var _getRequiredFields = function getRequiredFields(schema) {
    var requiredFields = [];
    if (schema.required) {
      requiredFields = requiredFields.concat(schema.required);
    }
    Object.keys(schema.properties).forEach(function (fieldName) {
      var field = schema.properties[fieldName];
      if (field.type === 'object' && field.properties) {
        // console.log("Searching required field : ", field);
        var nestedRequiredFields = _getRequiredFields(field);
        nestedRequiredFields.forEach(function (nestedField) {
          // console.log("nested : ", nestedField);
          // console.log("fieldName : ", fieldName);
          requiredFields.push("".concat(nestedField));
        });
      }
    });
    return requiredFields;
  };
  function getFieldUiSchema(fieldName, uiSchema) {
    // Base case: if uiSchema is an object and the field exists at the root level
    if (_typeof(uiSchema) === 'object' && uiSchema !== null) {
      if (uiSchema.hasOwnProperty(fieldName)) {
        return uiSchema[fieldName];
      }

      // Recursive case: iterate through nested objects
      for (var key in uiSchema) {
        if (uiSchema[key] && _typeof(uiSchema[key]) === 'object') {
          var result = getFieldUiSchema(fieldName, uiSchema[key]);
          if (result) {
            return result;
          }
        }
      }
    }

    // Return null if the field is not found
    return null;
  }
  var validateForm = function validateForm() {
    // console.log("form data : ", formData);
    var formErrors = {};

    // Helper function to validate single field
    var validateField = function validateField(fieldName, fieldSchema, value) {
      var _uiSchema$fieldName;
      var parentPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var fullPath = parentPath ? "".concat(parentPath, ".").concat(fieldName) : fieldName;
      var fieldTitle = fieldSchema.title || fieldName;
      var errors = [];

      // Required field validation
      if (fieldSchema.required || (_getRequiredFields(schema) || []).includes(fieldName)) {
        if (value === undefined || value === '' || value === null) {
          errors.push("".concat(fieldTitle, " is required"));
        }
      }

      // String validations
      if (value && fieldSchema.type === 'string') {
        if (fieldSchema.format === 'email') {
          var emailPattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
          if (!emailPattern.test(value)) {
            errors.push("".concat(fieldTitle, " must be a valid email address"));
          }
        }
        // Pattern validation
        if (fieldSchema.pattern) {
          var regex = new RegExp(fieldSchema.pattern);
          if (!regex.test(value)) {
            var fieldUiSchema = getFieldUiSchema(fieldName, uiSchema);
            if (fieldUiSchema !== null && fieldUiSchema !== void 0 && fieldUiSchema.pattern_message && Array.isArray(fieldUiSchema.pattern_message)) {
              // Add specific pattern_message errors
              errors.push.apply(errors, _toConsumableArray(fieldUiSchema.pattern_message));
            } else {
              // Default error message for invalid format
              errors.push("".concat(fieldTitle, " is not in the correct format"));
            }
          }
        }

        // Length validations
        if (fieldSchema.minLength && value.length < fieldSchema.minLength) {
          errors.push("".concat(fieldTitle, " should have at least ").concat(fieldSchema.minLength, " characters"));
        }
        if (fieldSchema.maxLength && value.length > fieldSchema.maxLength) {
          errors.push("".concat(fieldTitle, " should have no more than ").concat(fieldSchema.maxLength, " characters"));
        }

        // Date validation
        if (fieldSchema.format === 'date' && value) {
          var date = new Date(value);
          if (isNaN(date.getTime())) {
            errors.push("".concat(fieldTitle, " must be a valid date"));
          }
          if (fieldSchema.minimum && new Date(value) < new Date(fieldSchema.minimum)) {
            errors.push("".concat(fieldTitle, " must be after ").concat(fieldSchema.minimum));
          }
          if (fieldSchema.maximum && new Date(value) > new Date(fieldSchema.maximum)) {
            errors.push("".concat(fieldTitle, " must be before ").concat(fieldSchema.maximum));
          }
        }
      }

      // Number validations
      if (value && fieldSchema.type === 'number') {
        if (fieldSchema.minimum !== undefined && value < fieldSchema.minimum) {
          errors.push("".concat(fieldTitle, " must be greater than or equal to ").concat(fieldSchema.minimum));
        }
        if (fieldSchema.maximum !== undefined && value > fieldSchema.maximum) {
          errors.push("".concat(fieldTitle, " must be less than or equal to ").concat(fieldSchema.maximum));
        }
      }

      // File validations
      var uiOptions = ((_uiSchema$fieldName = uiSchema[fieldName]) === null || _uiSchema$fieldName === void 0 ? void 0 : _uiSchema$fieldName['ui:options']) || {};
      if (uiOptions.accept && value) {
        var fileType;
        if (typeof value === 'string' && value.startsWith('data:')) {
          var mimeTypeMatch = value.match(/data:(.*?);/);
          fileType = mimeTypeMatch === null || mimeTypeMatch === void 0 ? void 0 : mimeTypeMatch[1];
        } else if (value instanceof Blob) {
          fileType = value.type;
        } else if (typeof value === 'string') {
          var _mimeTypeMatch = value.match(/^[^;]+/);
          fileType = _mimeTypeMatch === null || _mimeTypeMatch === void 0 ? void 0 : _mimeTypeMatch[0];
        }

        // console.log('File type : ', fileType)
        if (fileType && !uiOptions.accept.includes(fileType)) {
          errors.push("The selected file type (".concat(fileType, ") is not supported.") // `${fieldTitle} must be one of the accepted file types: ${uiOptions.accept.join(', ')}`,
          );
        }
      }
      if (errors.length > 0) {
        var normalizedFieldName = normalizeFieldName(fullPath);
        formErrors[normalizedFieldName] = errors;
      }
    };

    // Recursive function to handle nested objects
    var _validateObject = function validateObject(objectSchema) {
      var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      Object.entries(objectSchema.properties || {}).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          fieldName = _ref6[0],
          fieldSchema = _ref6[1];
        var fullPath = parentPath ? "".concat(parentPath, ".").concat(fieldName) : fieldName; // Construct the full path
        var normalizedFieldName = normalizeFieldName(fullPath);
        var value = formData === null || formData === void 0 ? void 0 : formData[normalizedFieldName]; // Use the full path to access the value

        if (fieldSchema.type === 'object') {
          // Recursively validate nested objects
          _validateObject(fieldSchema, fullPath);
        } else {
          // Validate individual fields
          validateField(fieldName, fieldSchema, value, parentPath);
        }
      });
    };

    // Start validation from root schema
    _validateObject(schema);

    // Set errors in state
    setErrors(formErrors);
    // console.log('Form errors : ', formErrors)
    return Object.keys(formErrors).length === 0;
  };
  var defaultSubmit = function defaultSubmit(e) {
    e.preventDefault();
    console.log('Default submit called');
  };
  var defaultOnSuccess = function defaultOnSuccess(e) {
    console.log('Submission successfull!');
  };
  var defaultOnError = function defaultOnError(e) {
    console.log('Error occurred!');
  };
  var transformFormData = function transformFormData(schema, flatData) {
    var _buildNestedData = function buildNestedData(schemaProperties, flatData) {
      var parentKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var nestedData = {};
      Object.entries(schemaProperties || {}).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          key = _ref8[0],
          value = _ref8[1];
        var fullPath = parentKey ? "".concat(parentKey, ".").concat(key) : key;
        if (value.type === 'object' && value.properties) {
          // Recursively build nested objects
          nestedData[key] = _buildNestedData(value.properties, flatData, fullPath);
        } else {
          // Map flatData to the nested structure
          var normalizedKey = fullPath.split('.').pop();
          if (flatData.hasOwnProperty(normalizedKey)) {
            nestedData[key] = flatData[normalizedKey];
          }
        }
      });
      return nestedData;
    };
    return _buildNestedData(schema.properties, flatData);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    // console.log('Form data : ', formData)
    if (onSubmit) {
      if (validateForm()) {
        if (onSuccess) {
          onSuccess();
        } else {
          defaultOnSuccess();
        }
        var transformedData = transformFormData(schema, formData);
        // console.log('Transformed data : ', transformedData)

        // Wrap transformedData as formData inside data
        var data = {
          formData: transformedData
        };
        onSubmit(data, e);
        return;
      } else {
        if (onError) {
          onError();
        } else {
          defaultOnError();
        }
        return;
      }
    }
    defaultSubmit(e);
  };
  var handleChange = function handleChange(fieldName, value) {
    // const options = uiSchema[fieldName]['ui:options'];
    // console.log('Change in field : ', fieldName)

    setFormData(function (prevData) {
      return _objectSpread2(_objectSpread2({}, prevData), {}, _defineProperty({}, fieldName, value));
    });
    setErrors(function (prevErrors) {
      return _objectSpread2(_objectSpread2({}, prevErrors), {}, _defineProperty({}, fieldName, ''));
    });
    if (onChange) {
      onChange(fieldName);
    }
  };
  var submitBtnOptions = uiSchema['ui:submitButtonOptions'];
  // console.log('submitButtonSchema')
  var content = /*#__PURE__*/React$1.createElement(ContentTemplate, {
    formData: formData,
    schema: schema,
    uiSchema: uiSchema,
    errors: errors,
    fields: fields,
    onSubmit: handleSubmit,
    onError: onError,
    onChange: handleChange,
    onSuccess: onSuccess
  });
  if (!MyTemplate) {
    return /*#__PURE__*/React$1.createElement(MainTemplate, {
      schema: schema,
      uiSchema: uiSchema,
      content: content,
      onSubmit: handleSubmit,
      submitBtnOptions: submitBtnOptions
    });
  }
  return (
    /*#__PURE__*/
    // <MyTemplate schema={schema} uiSchema={uiSchema} fields={fields} onChange={handleChange} onSubmit={handleSubmit} onError={onError} onSuccess={onSuccess} formData={formData} errors={errors} />
    React$1.createElement(MyTemplate, {
      schema: schema,
      uiSchema: uiSchema,
      content: content,
      onSubmit: handleSubmit,
      submitBtnOptions: submitBtnOptions
    })
  );
}

export { MyForm };
