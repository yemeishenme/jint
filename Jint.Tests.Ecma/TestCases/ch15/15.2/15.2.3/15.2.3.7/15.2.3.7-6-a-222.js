/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-222.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index property, the [[Set]] field of 'desc' and the [[Set]] attribute value of 'P' are two objects which refer to the same object  (15.4.5.1 step 4.c)
 */


function testcase() {
        var arr = [];

        function set_func(value) {
            arr.setVerifyHelpProp = value;
        }

        Object.defineProperty(arr, "0", {
            set: set_func
        });

        try {
            Object.defineProperties(arr, {
                "0": {
                    set: set_func
                }
            });
            return accessorPropertyAttributesAreCorrect(arr, "0", undefined, set_func, "setVerifyHelpProp", false, false);
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
