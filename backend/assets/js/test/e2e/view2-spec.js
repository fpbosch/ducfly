describe('angularjs partial views', function() {
  
  it('should see a view 2', function() {

    browser.get('http://localhost:1337');
 
    element(by.id('showView2')).click();


  //});

  //it('should have a id', function() {

    	var viewText2 = element(by.id('viewText2'));
  
    	expect(viewText2.getText()).toEqual('Hello from view 2');
  
  });
  

});