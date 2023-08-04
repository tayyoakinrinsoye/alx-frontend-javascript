export default function createIteratorObject(reportObject) {
    const departments = Object.values(reportObject.allEmployees);
  
    return {
      [Symbol.iterator]: function* () {
        for (const department of departments) {
          for (const employee of department) {
            yield employee;
          }
        }
      },
    };
  }
  