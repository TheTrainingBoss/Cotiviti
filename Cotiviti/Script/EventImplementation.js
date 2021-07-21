function CotivitiEvents_OnLogError(Sender, LogParams)
{
   Log.Message("Something bad happened");
   LogParams.Color = clRed;
   LogParams.FontColor = clYellow;
   // LogParams.Locked = true;  
}

function causetrouble()
{
  Log.Error("Kaboom");
}

function CotivitiEvents_OnUnexpectedWindow(Sender, Window, LogParams)
{
  Log.Picture(Window, "This is the Window in the way");
}

function CotivitiEvents_OnOverlappingWindow(Sender, Window, OverlappingWindow, LogParams)
{
   OverlappingWindow.left = OverlappingWindow.left + 10; 
}