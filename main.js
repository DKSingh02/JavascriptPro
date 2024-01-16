if (!Array.prototype.unshift) {
    Array.prototype.myUnshift = function () {
      const argumentsCount = arguments.length;
      const totalElementInArray = this.length;
      const arr = this;
  
      if (argumentsCount > 0) {
         // Move existing elements to make space for new elements
        for (let index = totalElementInArray - 1; index >= 0; index--) {
          arr[index + argumentsCount] = this[index];
        }
  
        // Insert new elements at the beginning
        for (let index = 0; index < argumentsCount; index++) {
          arr[index] = arguments[index];
        }
      }
  
      return arr.length;
    };
  }
  
  let arr = [1, 2, 3, 4];
  
  arr.myUnshift(-1, 0);