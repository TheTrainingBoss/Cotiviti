function DriveMyTest()
{
  let conn = "Provider=SQLNCLI11.1;Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=TestComplete;Data Source=.\\sqlexpress;";
  
  DDT.ADODriver(conn, "select * from Personal");
  DDT.CurrentDriver.DriveMethod("DataDriven.Test1");
//  while (!DDT.CurrentDriver.EOF())
//  {
//    if (DDT.CurrentDriver.Value("name") == "Ashok")
//    {
//      Test1();
//    }
//    DDT.CurrentDriver.Next();
//  }
}

function Test1()
{
  let orders = Aliases.Orders;
  Log.AppendFolder(DDT.CurrentDriver.Value("FName"));
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.SetText(DDT.CurrentDriver.Value("FName"));
  textBox = groupBox.Street;
  textBox.SetText(DDT.CurrentDriver.Value("LName"));
  textBox = groupBox.City;
  textBox.SetText(DDT.CurrentDriver.Value("ID"));
  textBox = groupBox.State;
  textBox.SetText(DDT.CurrentDriver.Value("Email"));
//  textBox = groupBox.Zip;
//  textBox.SetText(DDT.CurrentDriver.Value("zip"));
//  textBox = groupBox.CardNo;
//  textBox.SetText(DDT.CurrentDriver.Value("cc"));
  orderForm.ButtonOK.ClickButton();
  Log.PopLogFolder();
}