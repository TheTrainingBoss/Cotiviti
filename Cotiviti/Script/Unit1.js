function foo()
{
  //Log.Message(Sys.Process("Orders").WinFormsObject("MainForm").WinFormsObject("StatusBar").wText(0));
  //Log.Message(Aliases.Orders.MainForm.StatusBar.wText(0));
  // Log.Message(Aliases.StatusBar.wText(0));
  Log.Message(NameMapping.Sys.Cotiviti.Form1.groupBox1.MyNewTextbox.wText);
}

function Test1()
{
  Log.Message(Aliases.Cotiviti.MyNewTextbox.wText);
}

function Test2()
{
  let form1 = Aliases.Cotiviti.Form1;
  let textBox = form1.textBox1;
  textBox.Click(31, 5);
  textBox.SetText("Alain");
  form1.button1.ClickButton();
}