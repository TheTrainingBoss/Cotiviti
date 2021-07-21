function excelcode()
{
  let excel = getActiveXObject("Excel.Application");
  excel.Workbooks.Open("C:\\Users\\Leno\\Documents\\Cotiviti.xls");
  
  let RowCount = excel.ActiveSheet.UsedRange.Rows.Count;
  let ColumnCount = excel.ActiveSheet.UsedRange.Columns.Count;

  for (let i = 1; i <= RowCount; i++)
  {
    let s = "";
    for (let j = 1; j <= ColumnCount; j++)
      s += (VarToString(excel.Cells.Item(i, j)) + "\r\n");
    Log.Message("Row: " + i, s);
  }
  
  excel.Quit();
}
function ExcelExample()
{
  // Get the sheet of the Excel file
  var excelFile = Excel.Open("C:\\Users\\Leno\\Documents\\Cotiviti.xls");
  var excelSheet = excelFile.SheetByTitle("MySheet");
  
  // Read data from the Excel file
  var valueA = excelSheet.Cell("A", 3).Value;
  var valueB = excelSheet.Cell(2, 3).Value;
  var valueC = excelSheet.CellByName("C3").Value;
  
  // Write the obtained data into a new row of the file
  var rowIndex = excelSheet.RowCount + 1;
  excelSheet.Cell("A", rowIndex).Value = valueA;
  excelSheet.Cell(2, rowIndex).Value = valueB;
  excelSheet.Cell("C", rowIndex).Value = valueC;
  
  // Save the file to apply the changes
  excelFile.Save();
  
  // Save the file with another name
  // excelFile.SaveAs("C:\\temp\\DataStorageExcel_new.xlsx");
}