
//-----------------------------------------------------------------------------
// Copyright (c) 2010 Patrick Mueller
// Licensed under the MIT license: 
// http://www.opensource.org/licenses/mit-license.php
//-----------------------------------------------------------------------------

var Point3 = require("./Point3")

//----------------------------------------------------------------------------
defClass(module, Point3, function Point4(properties) {
    $super(this, null, properties)
})

//----------------------------------------------------------------------------
var $super = defSuper()

//----------------------------------------------------------------------------
defMethod(function add(aPoint) {
    var result = $super(this, "add", aPoint)
    
    if (aPoint.a) {
        result.a += aPoint.a
    }
    
    return result
})

//----------------------------------------------------------------------------
defMethod(function toString() {
    return $super(this, "toString")
})

