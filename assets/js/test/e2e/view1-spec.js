describe('angularjs partial views 1', function() {
  
  it('should see a view 1', function() {

    browser.get('http://localhost:1337');
 
    element(by.id('showView1')).click();


  //});

  //it('should have a title', function() {

    	var viewText1 = element(by.id('viewText1'));
  
    	expect(viewText1.getText()).toEqual('Hello from view 1');
  
  });
  

});