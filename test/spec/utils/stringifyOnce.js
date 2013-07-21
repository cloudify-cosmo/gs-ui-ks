'use strict';

describe('utils', function(){
    describe('stringifyOnce', function(){
        it ( 'should print a JSON', function(){
            console.log(JSON.stringifyOnce({"guy":"mograbi"}));
        });
        it('should print the following circle JSON', function(){
            console.log("printing circular ");
            var someObject = { "A":"B"};
            var root = { "name":"guy","someObject1":someObject, "someObject2":someObject, "child":{}};
            root.child.me = root;
            var stringValue = JSON.stringifyOnce(root);
            console.log(stringValue);
            expect(stringValue.indexOf("guy") > 0).toBeTruthy();
            var parsedValue = JSON.parse(stringValue);
            expect(parsedValue.child.me).toBe("(pointer to root)");
            expect(parsedValue.someObject2.indexOf("(see object with") == 0).toBeTruthy();
        })
    })
});