
var city = "aMstADam"

undefined
city
'aMstADam'
city.toUpperCase
ƒ toUpperCase() { [native code] }
city.toUpperCase()
'AMSTADAM'
city.toLowerCase()
'amstadam'
city.length
8

var city = "aMstADam"
undefined
city[0]
'a'
city[1]
'M'
city.charAt(0)
'a'
city.charAt(1)
'M'
city.charAt(-1)
''
city.at(-1)
'm'

var a = "aboje"
var b = "Aboje"
undefined
a == b
false
a.toUpperCase()
'ABOJE'
b.toUpperCase()
'ABOJE'
a.toLowerCase() == b.toLowerCase()
true
a.toLowerCase() === b.toLowerCase()
true



var city = "AmstERDam"
undefined
city.slice(1)
'mstERDam'
city.slice(-18732)
'AmstERDam'
city.slice(-1)
'm'
city.slice(-2)
'am'
city.slice(0,1)
'A'
city.slice(2,5)
'stE'
city.slice(0,-1)
'AmstERDa'
city.slice(2,-2)
'stERD'


var city = "amSterDaM"
undefined
city
'amSterDaM'
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mSterDaM'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()

'Amsterdam'
var city = "paRIs"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var uname = "   abOJe.   "





var uname = "   abOJe.   "
undefined
uname
'   abOJe.   '
uname.length
12
uname.trim()
'abOJe.'
uname.toUpperCase()
'   ABOJE.   '
uname.toLowerCase()
'   aboje.   '
uname.trim()+uname.charAt(0).toUpperCase()+uname.slice(1).toLowerCase()
'abOJe.   aboje.   '
uname.trim().length()

uname.trim().length
6
uname.trim().charAt(0).toUpperCase()
'A'
var a = "I am learning Javascript"
undefined
a.replace("Javascript", "js")
'I am learning js'
var a = "I am learning what i Love which is Javascript so I am comfortable"
undefined
a.replace(/I/g, "aboje")
'aboje am learning what i Love which is Javascript so aboje am comfortable'
a
'I am learning what i Love which is Javascript so I am comfortable'
a.replaceAll("am", "aboje")
'I aboje learning what i Love which is Javascript so I aboje comfortable'


var a = "   aboje   "
undefined
a
'   aboje   '
a.replace(" ", "")
'  aboje   '
a.replaceAll(" ", "")
'aboje'