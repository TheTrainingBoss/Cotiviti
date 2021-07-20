function Test1()
{

}

function Test2()
{
  Aliases.mspaint.wndMSPaintApp.Activate();
  MSPaint.LinoSignature.Execute(Aliases.mspaint.wndMSPaintApp.Window("Afx:00007FF76A830000:0:0000000000010007:0000000000000010:0000000000000000", "", 1));
}