// string method is used to manipulate the string. There are many string methods available in javascript. Some of them are:
// 1. charAt()
// 2. charCodeAt()
// 3. concat()
// 4. endsWith()
// 5. fromCharCode()
// 6. includes()
// 7. indexOf()
// 8. lastIndexOf()
// 9. match()
// 10. repeat()
// 11. replace()
// 12. search()
// 13. slice()
// 14. split()
// 15. startsWith()
// 16. substr()
// 17. substring()
// 18. toLowerCase()
// 19. toUpperCase()
// 20. trim()
// 21. valueOf()
// 22. toString()
// 23. toLocaleLowerCase()
// 24. toLocaleUpperCase()
// 25. localeCompare()
// 26. normalize()
// 27. padEnd()
// 28. padStart()
// 29. trimStart()
// 30. trimEnd()
// 31. codePointAt()
// 32. String.fromCharCode()
// 33. String.fromCodePoint()
// 34. String.raw()

//      <<<<<<<<<<<<<<  Don't remember all the methods. Just search in google when you need it. >>>>>>>>>>>>>>

let name = "Narendra";
console.log(name.toUpperCase()); // output: NARENDRA
console.log(name.toLowerCase()); // output: narendra
console.log(name.slice(2, 4)); // slice the string from index 2 to 4. output: re
console.log(name.replace("Narendra", "Narendra Mahara")); // replace Narendra with Narendra Mahara. output: Narendra Mahara
let variable = "     Removed white spaces.     ";
console.log(variable.trim()); // remove the white spaces from the string. output: Narendra

console.log(name.concat(" Mahara")); // output: Narendra Mahara