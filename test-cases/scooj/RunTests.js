
//-----------------------------------------------------------------------------
// Copyright (c) 2010 Patrick Mueller
// Licensed under the MIT license: 
// http://www.opensource.org/licenses/mit-license.php
//-----------------------------------------------------------------------------

require("scooj").installGlobals()

var TestSuite = require("../unit-test/TestSuite").getClass()
var Point2    = require("./Point2").getClass()
var Point3    = require("./Point3").getClass()
var Point4    = require("./Point4").getClass()

//----------------------------------------------------------------------------
defClass(module, TestSuite, function RunTests(){
    $super(this, null)
})

//----------------------------------------------------------------------------
var $super = defSuper(module)

//----------------------------------------------------------------------------
defMethod(module, function setUp() {
    this.p2a = new Point2({x:   2, y:   7})
    this.p2b = new Point2({x:  77, y:  22})
    this.p3a = new Point3({x:   3, y:   8, z: 101})
    this.p3b = new Point3({x:  88, y:  33, z: 313})
    this.p4a = new Point4({x:   4, y:   9, z: 202, a: 41})
    this.p4b = new Point4({x:  99, y:  44, z: 626, a: 42})
})

//----------------------------------------------------------------------------
defMethod(module, function test_2_2() {
    var p2a_p2b = this.p2a.add(this.p2b)
    this.assertEqual( 79, p2a_p2b.x)
    this.assertEqual( 29, p2a_p2b.y)
})

//----------------------------------------------------------------------------
defMethod(module, function test_2_3() {
    var p2a_p3a = this.p2a.add(this.p3a)
    this.assertEqual(  5, p2a_p3a.x)
    this.assertEqual( 15, p2a_p3a.y)
    this.assertFalse(p2a_p3a.z)
})
    
//----------------------------------------------------------------------------
defMethod(module, function test_3_2() {
    var p3a_p2a = this.p3a.add(this.p2a)
    this.assertEqual(  5, p3a_p2a.x)
    this.assertEqual( 15, p3a_p2a.y)
    this.assertEqual(101, p3a_p2a.z)
})

//----------------------------------------------------------------------------
defMethod(module, function test_3_3() {
    var p3a_p3b = this.p3a.add(this.p3b)
    this.assertEqual( 91, p3a_p3b.x)
    this.assertEqual( 41, p3a_p3b.y)
    this.assertEqual(414, p3a_p3b.z)
})

//----------------------------------------------------------------------------
defMethod(module, function test_4_4() {
    var p4a_p4b = this.p4a.add(this.p4b)
    this.assertEqual(103, p4a_p4b.x)
    this.assertEqual( 53, p4a_p4b.y)
    this.assertEqual(828, p4a_p4b.z)
    this.assertEqual( 83, p4a_p4b.a)
})

//----------------------------------------------------------------------------
if (false) {

defMethod(module, function test_fail() {
    this.fail("this test is expected to fail")
})
    
defMethod(module, function test_error() {
    throw new Error("this test is expected to generate an error")
})
    
}

