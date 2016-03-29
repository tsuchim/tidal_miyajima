
getTidalInfo_Miyajima( 2017, 1, 2 );

function getTidalInfo_Miyajima( year, mon, day ) { // 引数は年月日
  if( year < 1900 || 2100 < year || mon < 1 || 12 < mon || day < 1 || 31 < day ) return 0; // 現実的な日付が欲しい
  var d = (new Date(year, mon, day)).getTime() / 1000; // unixtime
  var a = ((( d - 919179540 ) % 2551442 ) / 86400 ); // 日本時間正午の月齢

  var t11 = getTidalTime(a,0); // 1回目の満潮時刻
  var t12 = getTidalTime(a,1); // 2回目の満潮時刻
  
  console.log(year+"/"+mon+"/"+day+" 月齢="+a+" d="+d);
  if( 0 <= t11 ) console.log("満潮時刻1 = "+Math.floor(t11%24)+":"+Math.round(t11*60%60) );
  if( 0 <= t12 ) console.log("満潮時刻2 = "+Math.floor(t12%24)+":"+Math.round(t12*60%60) );

  function getTidalTime( a, b ) {
    var t = new Array(
      new Array(  9.57, 10.10, 10.62, 11.13, 11.65, 12.18, 12.77, 13.43, 14.30, 15.58, 17.25, 18.63, 19.63, 20.42, 21.12, 21.77, 22.38, 22.98, 23.63, 24.30,  0.30,  1.05,  1.92,  3.07,  4.53,  5.97,  7.02,  7.78,  8.43,  9.02,  9.55 ),
      new Array( 22.20, 22.82, 23.45, 24.10,  0.10,  0.82,  1.63,  2.67,  4.05,  5.63,  6.87,  7.73,  8.43,  9.02,  9.57, 10.08, 10.60, 11.12, 11.63, 12.18, 12.80, 13.57, 14.62, 16.18, 17.83, 19.02, 19.92, 20.65, 21.32, 21.93, 22.57 )
    );
    var i = Math.floor(a);
    var f = a - i;
    if( t[b][i] > t[b][i+1] ) return -1; // この日は2回目はない
    return (1-f)*t[b][i] + f*t[b][i+1];
  }
}

