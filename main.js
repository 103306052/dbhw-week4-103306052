//var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c";
var API_PATH = "http://opendata.khcc.gov.tw/public/OD_art_program.ashx?SDate=2016/03/29&EDate=2016/09/29";
function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
