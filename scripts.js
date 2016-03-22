
        $(document).ready(function(){
            $('#ticker-search').submit(function(event){
            //   should allow prevent default to work on firefox and chrome
                var ticker =$('#symbol').val();
           var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + ticker + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
                 $.getJSON(url,function(yahooResult){
                  
                     var stockInfo= yahooResult.query.results.quote;
                     console.log(stockInfo.Bid)
                     
                     var newHTML; 
                     if(yahooResult.query.count>1){
                         for(i=0;i<yahooResult.query.count;i++) {
                             newHTML += updateTable(stockInfo[i]);
                          }
                     }else{
                         newHTML = updateTable(stockInfo)
                     }
                     $('#ticker-body').html(newHTML); 
                    });
                     
               event.preventDefault();  
            
        }) ;
   
       
        function updateTable(thingToLoopThrough){
             var individualStockRow ='<tr><td>' +thingToLoopThrough.Symbol+'</td>';
                    individualStockRow  +='<td>' + thingToLoopThrough.Name +'</td>';
                individualStockRow +='<td>' + thingToLoopThrough.Ask +'</td>';
                   individualStockRow +='<td>' + thingToLoopThrough.Change +'</td>';
                    individualStockRow  +='<td>' + thingToLoopThrough.DaysHigh +'</td></tr>';
                    return individualStockRow;
                    }
                         });
            
        
 
