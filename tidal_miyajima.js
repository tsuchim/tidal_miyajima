
getTidalInfo_Miyajima( 2017, 4, 1 );

function getTidalInfo_Miyajima( year, mon, day ) { // 引数は年月日
  if( year < 1900 || 2100 < year || mon < 1 || 12 < mon || day < 1 || 31 < day ) return 0; // 現実的な日付が欲しい
  var d = (new Date(year, mon, day)).getTime() / 1000; // unixtime
  var a = ((( d - 1460127600 ) % 2551442 ) / 86400 ); // 日本時間正午の月齢

  var t11 = getTidalTime(a,0); // 1回目の満潮時刻
  var t12 = getTidalTime(a,1); // 2回目の満潮時刻
  
  console.log(year+"/"+mon+"/"+day+" 月齢="+a+" d="+d);
  console.log("満潮時刻1 = "+Math.floor(t11%24)+":"+Math.round(t11*60%60) );
  console.log("満潮時刻2 = "+Math.floor(t12%24)+":"+Math.round(t12*60%60) );

  function getTidalTime( a, b ) {
    var t = new Array(
      new Array(  9.57, 10.10, 10.62, 11.13, 11.65, 12.18, 12.77, 13.43, 14.30, 15.58, 17.25, 18.63, 19.63, 20.42, 21.12, 21.77, 22.38, 22.98, 23.63, 24.30, 25.05, 25.92, 27.07, 28.53, 29.97, 31.02, 31.78, 32.43, 33.02, 33.55, 34.07 ),
      new Array( 22.20, 22.82, 23.45, 24.10, 24.10, 24.82, 25.63, 26.67, 28.05, 29.63, 30.87, 31.73, 32.43, 33.02, 33.57, 34.08, 34.60, 35.12, 35.63, 36.18, 36.80, 37.57, 38.62, 40.18, 41.83, 43.02, 43.92, 44.65, 45.32, 45.93, 46.57 )
    );
    var i = Math.floor(a);
    var f = a - i;
    return ((1-f)*t[b][i] + f*t[b][i+1]) % 24;
  }
}

