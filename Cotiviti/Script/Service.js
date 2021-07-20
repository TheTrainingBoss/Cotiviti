function callWebService()
{
  
}

function Test3()
{
//  WebServices.Falafel.HelloWorld();
//  //Compares the response of the WebServices.Falafel web service against the stored data.
//  XML.HelloWorld.Check(WebServices.Falafel);
  WebServices.Falafel.Add(100, 200);
  
  XML.Add.Check(WebServices.Falafel);
 
  var person = WebServices.Falafel.GetPerson();
  Log.Message(person.FirstName);
//  if (person.FirstName == "Joe")
//  {
//    Log.Message("Joe was available");
//  }
//  else{
//    Log.Error("Joe was not available");
//  }
  
}