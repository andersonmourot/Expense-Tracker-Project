//Helper funcions for sorting by date and amount
module.exports = {
  sortBySoonest: (Newexpense) => {
    const currentDate = new Date();
    return Newexpense.sort(function (a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      // Move all the dates that are in the past to the end of the array
      if (dateA < currentDate || dateB < currentDate) {
        return -1;
      }
      // Order by soonest
      return dateA - dateB;
    });
  },
  sortByAmount: (Newexpense) => {
    Newexpense.cost.sort(function(a, b) {
      return a - b;
    });
  }
};
