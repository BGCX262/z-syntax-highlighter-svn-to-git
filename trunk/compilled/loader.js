eval(
  function()
{
    
try 
 {
  
      doHighlight();
 
    }
 
    catch(e)
 {
  
      var elem = document.createElement('SCRIPT');
  
      elem.src="http://z-syntax-highlighter.googlecode.com/svn/trunk/compilled/full_highlight.js";
  
      var b = document.getElementsByTagName('body')[0];
  
      b.appendChild(elem);
 
    }
  
}
)();