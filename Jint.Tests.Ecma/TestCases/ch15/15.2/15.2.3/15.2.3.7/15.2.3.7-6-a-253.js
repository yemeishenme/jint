/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-253.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index named property that already exists on 'O' is data property and 'desc' is data descriptor, test updating multiple attribute values of 'P'  (15.4.5.1 step 4.c)
 */


function testcase() {

        var arr = [12];

        try {
            Object.defineProperties(arr, {
                "0": {
                    value: 36,
                    writable: false,
                    configurable: false
                }
            });
            return dataPropertyAttributesAreCorrect(arr, "0", 36, false, true, false);
        } catch (ex) {
            return false;
        }
    }
runTestCase(testcase);
