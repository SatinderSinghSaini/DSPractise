/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  let n = intervals.length;
  let ans = [];
  if(n === 0)
      return [newInterval];
  
  if(newInterval[1] < intervals[0][0]){
      ans.push(newInterval);
      for(let i=0;i<n;i++){
          ans.push(intervals[i]);
      }
      return ans;
  }
  if(newInterval[0] > intervals[n-1][1]){        
      for(let i=0;i<n;i++){
          ans.push(intervals[i]);
      }
      ans.push(newInterval);
      return ans;
  }
  
  for(let i=0;i<n;i++){
      let overlap = doesOverlap(intervals[i],newInterval);
      if(!overlap){
          ans.push(intervals[i]);
          if((newInterval[0] > intervals[i][1]) && (newInterval[1] < intervals[i+1][0])){
              ans.push(newInterval);
          }
      }
      var temp_interval = [];
      temp_interval[0] = Math.min(intervals[i][0], newInterval[0]);
      while(i<n && overlap){            
          temp_interval[1] = Math.max(intervals[i][1], newInterval[1]);
          if(i === n-1)
              overlap = false;
          else
              overlap = doesOverlap(intervals[i+1], newInterval);
          i++;
      }
      
      if(temp_interval.length>1){
          i--;
          ans.push(temp_interval);   
      }
               
  }
  return ans;
};

function doesOverlap(interval, newInterval){
  return Math.min(interval[1], newInterval[1]) >= Math.max(interval[0],newInterval[0]);
}