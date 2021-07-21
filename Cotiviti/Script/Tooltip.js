function foo()
{
  Log.Message(NameMapping.Sys.Process("CotivitiToolTip").WinFormsObject("Form1").QAGetMyTooltip());
  NameMapping.Sys.Process("CotivitiToolTip").WinFormsObject("Form1").WinFormsObject("textBox1").HoverMouse();
  delay(1000);
  Log.Picture(NameMapping.Sys.Process("CotivitiToolTip").WinFormsObject("Form1"));
  
}