/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะฟังก์ชัน findStudentById มีการใช้ for loop ซึ่งเข้าถึง index ใน array ทีละตัว ดังนั้นกรณีที่แย่ที่สุดจะต้องมีการวนลูปทั้งหมด n ครั้ง เมื่อให้ n แทนจำนวนข้อมูลใน array


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะฟังก์ชัน findProductPrice มีการใช้ while loop ที่เข้าถึง index ตำแหน่งตรงกลางก่อน และในรอบถัดๆ ไป จะเข้าถึง index ในตำแหน่งทางซ้ายหรือทาวงขวาน้อยลงครึ่งหนึ่งไปเรื่อยๆ ดังนั้นจำนวนการวนลูปในกรณีที่แย่ที่สุดจะมีเพียง log n ครั้ง เมื่อให้ n แทนจำนวนข้อมูลใน array


*/

/* 
Which function is more efficient and why?
Answer: findProductPrice มีประสิทธิภาพมากกว่าเพราะจำนวนการวนลูปนกร๊ที่แย่ที่สุดของ findProductPrice น้อยกว่า findStudentById เมื่อเทียบกรณีที่จำนวนข้อมูลใน array เท่ากัน


*/
