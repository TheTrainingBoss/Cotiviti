﻿function foo()
{
  //Log.Message(Sys.Process("Orders").WinFormsObject("MainForm").WinFormsObject("StatusBar").wText(0));
  //Log.Message(Aliases.Orders.MainForm.StatusBar.wText(0));
  // Log.Message(Aliases.StatusBar.wText(0));
  Log.Message(NameMapping.Sys.Cotiviti.Form1.groupBox1.MyNewTextbox.wText);
}

function Test1()
{
  //Regions.MyToolbar.Check(Aliases.Orders.MainForm.ToolBar);
  //Files.Compare("Cotiviti1_txt", "C:\\Users\\Leno\\Documents\\Cotiviti2.txt", -1773839702, true, 3);
  //aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "Lino Feather");
  DBTables.MyDataset.Check();
  Log.Message(DBTables.MyDataset[2][0]);
}

function Test2()
{
  let form1 = Aliases.Cotiviti.Form1;
  let textBox = form1.textBox1;
  textBox.Click(31, 5);
  textBox.SetText("Alain");
  form1.button1.ClickButton();
}
