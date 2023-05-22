! function() {
    var n = Handlebars.template;
    (Handlebars.templates = Handlebars.templates || {})["orm-custom-formdescriptor.tr"] = n({
        1: function(n, l, e, o, t, a, r) {
            var i, c = null != l ? l : n.nullContext || {},
                s = n.hooks.helperMissing,
                u = n.escapeExpression,
                p = n.lookupProperty || function(n, l) {
                    if (Object.prototype.hasOwnProperty.call(n, l)) return n[l]
                };
            return "                        <option " + (null != (i = (p(e, "compare") || l && p(l, "compare") || s).call(c, t && p(t, "key"), null != (i = null != r[1] ? p(r[1], "itm") : r[1]) ? p(i, "widget") : i, {
                name: "compare",
                hash: {
                    operator: "=="
                },
                fn: n.program(2, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 7,
                        column: 32
                    },
                    end: {
                        line: 7,
                        column: 97
                    }
                }
            })) ? i : "") + ' value="' + u("function" == typeof(p = null != (p = p(e, "key") || t && p(t, "key")) ? p : s) ? p.call(c, {
                name: "key",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 7,
                        column: 105
                    },
                    end: {
                        line: 7,
                        column: 113
                    }
                }
            }) : p) + '">' + u(n.lambda(l, l)) + "</option>\n"
        },
        2: function(n, l, e, o, t) {
            return "selected"
        },
        4: function(n, l, e, o, t) {
            return "checked"
        },
        6: function(n, l, e, o, t) {
            return 'style="display: none;"'
        },
        8: function(n, l, e, o, t) {
            var a = null != l ? l : n.nullContext || {},
                r = n.hooks.helperMissing,
                i = "function",
                c = n.escapeExpression,
                s = n.lookupProperty || function(n, l) {
                    if (Object.prototype.hasOwnProperty.call(n, l)) return n[l]
                };
            return '                            <div class="js-custom-option custom-option">\n                                <input type="text" class="option-key js-option-key form-control" value="' + c(typeof(n = null != (n = s(e, "key") || (null != l ? s(l, "key") : l)) ? n : r) == i ? n.call(a, {
                name: "key",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 48,
                        column: 104
                    },
                    end: {
                        line: 48,
                        column: 111
                    }
                }
            }) : n) + '">\n                                <input type="text" class="option-val js-option-val form-control" value="' + c(typeof(n = null != (n = s(e, "val") || (null != l ? s(l, "val") : l)) ? n : r) == i ? n.call(a, {
                name: "val",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 49,
                        column: 104
                    },
                    end: {
                        line: 49,
                        column: 111
                    }
                }
            }) : n) + '">\n                                <div class="remove option-remove js-option-remove" title="Remove" data-optidx="' + c(typeof(n = null != (n = s(e, "index") || t && s(t, "index")) ? n : r) == i ? n.call(a, {
                name: "index",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 50,
                        column: 111
                    },
                    end: {
                        line: 50,
                        column: 121
                    }
                }
            }) : n) + '"></div>\n                            </div>\n'
        },
        compiler: [8, ">= 4.3.0"],
        main: function(n, l, e, o, t, a, r) {
            var i, c, s = null != l ? l : n.nullContext || {},
                u = n.hooks.helperMissing,
                p = "function",
                m = n.escapeExpression,
                d = n.lambda,
                h = n.lookupProperty || function(n, l) {
                    if (Object.prototype.hasOwnProperty.call(n, l)) return n[l]
                };
            return '\n    <tbody class="js-row js-row-' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 2,
                        column: 32
                    },
                    end: {
                        line: 2,
                        column: 39
                    }
                }
            }) : c) + '" data-idx="' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 2,
                        column: 51
                    },
                    end: {
                        line: 2,
                        column: 58
                    }
                }
            }) : c) + '">\n        <tr>\n            <td>\n                <select class="wgt form-control" data-idx="' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 5,
                        column: 59
                    },
                    end: {
                        line: 5,
                        column: 68
                    }
                }
            }) : c) + '">\n' + (null != (i = h(e, "each").call(s, null != l ? h(l, "widgets") : l, {
                name: "each",
                hash: {},
                fn: n.program(1, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 6,
                        column: 20
                    },
                    end: {
                        line: 8,
                        column: 29
                    }
                }
            })) ? i : "") + '                </select>\n            </td>\n            <td><input class="lbl form-control" type="text" value="' + m(d(null != (i = null != l ? h(l, "itm") : l) ? h(i, "label") : i, l)) + '"/></td>\n            <td><input class="id form-control" type="text" value="' + m(d(null != (i = null != l ? h(l, "itm") : l) ? h(i, "id") : i, l)) + '"/></td>\n            <td>\n                <input type="checkbox" class="js-req req form-control" ' + (null != (i = (h(e, "compare") || l && h(l, "compare") || u).call(s, null != (i = null != l ? h(l, "itm") : l) ? h(i, "required") : i, 1, {
                name: "compare",
                hash: {
                    operator: "=="
                },
                fn: n.program(4, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 14,
                        column: 71
                    },
                    end: {
                        line: 14,
                        column: 131
                    }
                }
            })) ? i : "") + '/>\n            </td>\n            <td>\n                <a href="#" class="js-formbuilderfield-delete"><img alt="Delete Record" title="Delete Record" src="/cms/images/binIcon.gif" border="0"></a>\n            </td>\n        </tr>\n        <tr id="err' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 20,
                        column: 19
                    },
                    end: {
                        line: 20,
                        column: 28
                    }
                }
            }) : c) + '" ' + (null != (i = (h(e, "compare") || l && h(l, "compare") || u).call(s, 1, null != (i = null != l ? h(l, "itm") : l) ? h(i, "required") : i, {
                name: "compare",
                hash: {
                    operator: "!="
                },
                fn: n.program(6, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 20,
                        column: 30
                    },
                    end: {
                        line: 20,
                        column: 105
                    }
                }
            })) ? i : "") + '>\n            <td></td>\n            <td colspan="3"><input type="text" value="' + m(d(null != (i = null != l ? h(l, "itm") : l) ? h(i, "errorMessage") : i, l)) + '" class="js-error-message error-message form-control" placeholder="Error message for mandatory field"></input></td>\n            <td></td>\n        </tr>\n        <tr style="display: none;"></tr>\n        <tr id="sql' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 26,
                        column: 19
                    },
                    end: {
                        line: 26,
                        column: 28
                    }
                }
            }) : c) + '" ' + (null != (i = (h(e, "isNotChoiceType") || l && h(l, "isNotChoiceType") || u).call(s, null != (i = null != l ? h(l, "itm") : l) ? h(i, "widget") : i, {
                name: "isNotChoiceType",
                hash: {},
                fn: n.program(6, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 26,
                        column: 30
                    },
                    end: {
                        line: 26,
                        column: 103
                    }
                }
            })) ? i : "") + '>\n            <td></td>\n            <td colspan="4">\n                <div class="option-type">\n                    <label>\n                        Database options\n                        <input type="radio" value="1" name="optType' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 32,
                        column: 67
                    },
                    end: {
                        line: 32,
                        column: 74
                    }
                }
            }) : c) + '" class="js-optiontype optiontype" ' + (null != (i = (h(e, "compare") || l && h(l, "compare") || u).call(s, 1, null != (i = null != l ? h(l, "itm") : l) ? h(i, "optionType") : i, {
                name: "compare",
                hash: {
                    operator: "=="
                },
                fn: n.program(4, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 32,
                        column: 109
                    },
                    end: {
                        line: 32,
                        column: 171
                    }
                }
            })) ? i : "") + '>\n                    </label>\n                    <label>\n                        Custom options\n                        <input type="radio" value="2" name="optType' + m(typeof(c = null != (c = h(e, "idx") || (null != l ? h(l, "idx") : l)) ? c : u) == p ? c.call(s, {
                name: "idx",
                hash: {},
                data: t,
                loc: {
                    start: {
                        line: 36,
                        column: 67
                    },
                    end: {
                        line: 36,
                        column: 74
                    }
                }
            }) : c) + '" class="js-optiontype optiontype" ' + (null != (i = (h(e, "compare") || l && h(l, "compare") || u).call(s, 2, null != (i = null != l ? h(l, "itm") : l) ? h(i, "optionType") : i, {
                name: "compare",
                hash: {
                    operator: "=="
                },
                fn: n.program(4, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 36,
                        column: 109
                    },
                    end: {
                        line: 36,
                        column: 171
                    }
                }
            })) ? i : "") + '>\n                    </label>\n                </div>\n                <div class="js-sql" ' + (null != (i = (h(e, "compare") || l && h(l, "compare") || u).call(s, 1, null != (i = null != l ? h(l, "itm") : l) ? h(i, "optionType") : i, {
                name: "compare",
                hash: {
                    operator: "!="
                },
                fn: n.program(6, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 39,
                        column: 36
                    },
                    end: {
                        line: 39,
                        column: 113
                    }
                }
            })) ? i : "") + '>\n                    <textarea class="sql form-control" placeholder="SQL statement">' + m(d(null != (i = null != l ? h(l, "itm") : l) ? h(i, "sql") : i, l)) + '</textarea>\n                </div>\n                <div class="js-custom" ' + (null != (i = (h(e, "compare") || l && h(l, "compare") || u).call(s, 2, null != (i = null != l ? h(l, "itm") : l) ? h(i, "optionType") : i, {
                name: "compare",
                hash: {
                    operator: "!="
                },
                fn: n.program(6, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 42,
                        column: 39
                    },
                    end: {
                        line: 42,
                        column: 116
                    }
                }
            })) ? i : "") + '>\n                    <button type="button" class="js-option-add option-add">Add an option</button>\n\n                    <div class="js-custom-options custom-options">\n' + (null != (i = h(e, "each").call(s, null != (i = null != l ? h(l, "itm") : l) ? h(i, "options") : i, {
                name: "each",
                hash: {},
                fn: n.program(8, t, 0, a, r),
                inverse: n.noop,
                data: t,
                loc: {
                    start: {
                        line: 46,
                        column: 24
                    },
                    end: {
                        line: 52,
                        column: 33
                    }
                }
            })) ? i : "") + "                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n"
        },
        useData: !0,
        useDepths: !0
    })
}();
