//-----------------------------------------------------------------------------
// Copyright (c) 2010 Patrick Mueller
// Licensed under the MIT license: 
// http://www.opensource.org/licenses/mit-license.php
//-----------------------------------------------------------------------------

var Point2 = require("./Point2").$

//----------------------------------------------------------------------------
defClass(module, Point2, function Point3(properties) {
    $super(this, null, properties)
})

//----------------------------------------------------------------------------
var $super = defSuper()

//----------------------------------------------------------------------------
defMethod(function add(aPoint) {
    var result = $super(this, "add", aPoint)
    
    if (aPoint.z) {
        result.z += aPoint.z
    }
    
    return result
})
