function superbowlWin(record) {
    const winningHistory = record.find(array => array.result === "W");
  
    if (winningHistory) {
      return winningHistory.year;
    } else {
      return undefined;
    }
  }
  
  