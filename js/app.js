(function () {

    /*
    Todo: Might make custom endpoints for images, verses and hadtihs
          Todo in local storage
          Execute scripts in background.js to load ahead of time
          Replace all CDNs with local files
          icon credits: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
     */

    /*
    Bugs: Time at 12:xx when in 12 hours format shows 00:xx
          Local Image loads before the actual image. Replace it by sight logo maybe?
     */

    /*
    Link for Ayats: https://www.ultraupdates.com/2015/07/beautiful-inspirational-islamic-quran-quotes-verses-in-english/
    Link for Ahadees: https://sunnahonline.com/library/purification-of-the-soul/194-best-of-the-best-the
     */


    // chrome.storage.sync.clear();



    // References for HTML elements
    var bodyElem = document.getElementById('body');



    // The Index for Ayat, Hadith and Wallpaper. This is also the day number
    let idx = getNumberOfDay() - 1;






///////////////////////////////////////////////////////////////////////
///////////////////////    WALLPAPER  START   /////////////////////////
///////////////////////////////////////////////////////////////////////


    //Background Image Links
    var backgrounds = [
        "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress",
        "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/47334/meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/797643/pexels-photo-797643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/775687/pexels-photo-775687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1118667/pexels-photo-1118667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1320459/pexels-photo-1320459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1405144/pexels-photo-1405144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/461763/pexels-photo-461763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/148291/pexels-photo-148291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/904373/pexels-photo-904373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/785405/pexels-photo-785405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/459124/pexels-photo-459124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1040495/pexels-photo-1040495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/629168/pexels-photo-629168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/757170/pexels-photo-757170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/700954/pexels-photo-700954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/417196/pexels-photo-417196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/612408/pexels-photo-612408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/589810/pexels-photo-589810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/584636/pexels-photo-584636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753869/pexels-photo-753869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/584302/pexels-photo-584302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/60088/pexels-photo-60088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1107556/pexels-photo-1107556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/690303/pexels-photo-690303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1126386/pexels-photo-1126386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743381/pexels-photo-1743381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/176384/pexels-photo-176384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1379630/pexels-photo-1379630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/386158/pexels-photo-386158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547062/pexels-photo-547062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421898/pexels-photo-1421898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/575717/pexels-photo-575717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326337/pexels-photo-326337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417651/pexels-photo-1417651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1792202/pexels-photo-1792202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/217120/pexels-photo-217120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1750124/pexels-photo-1750124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/5106/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460659/pexels-photo-460659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1322149/pexels-photo-1322149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/5065/forest-big-aerial-area.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/105244/pexels-photo-105244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/946343/pexels-photo-946343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/754738/pexels-photo-754738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1710006/pexels-photo-1710006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/58808/pexels-photo-58808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/577584/pexels-photo-577584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/916438/pexels-photo-916438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/975231/pexels-photo-975231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1363165/pexels-photo-1363165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847236/pexels-photo-847236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/167843/milky-way-rocks-night-landscape-167843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/69794/morocco-africa-desert-marroc-69794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/962695/pexels-photo-962695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1674739/pexels-photo-1674739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/551859/pexels-photo-551859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/376706/pexels-photo-376706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/691574/pexels-photo-691574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1603821/pexels-photo-1603821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326916/pexels-photo-326916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355853/pexels-photo-355853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/428430/pexels-photo-428430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1562462/pexels-photo-1562462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/204262/pexels-photo-204262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301391/pexels-photo-301391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301375/pexels-photo-301375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/572939/pexels-photo-572939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1608379/pexels-photo-1608379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547112/pexels-photo-547112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/432812/pexels-photo-432812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1029245/pexels-photo-1029245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1624441/pexels-photo-1624441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552788/pexels-photo-552788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1133504/pexels-photo-1133504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1561993/pexels-photo-1561993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1068737/pexels-photo-1068737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1212601/pexels-photo-1212601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1126918/pexels-photo-1126918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/776326/pexels-photo-776326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/226721/pexels-photo-226721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1199967/pexels-photo-1199967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/56610/starfish-sand-beach-sea-56610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1480600/pexels-photo-1480600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1774781/pexels-photo-1774781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188849/pexels-photo-1188849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1432066/pexels-photo-1432066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/163585/redwood-national-park-california-hdr-landscape-163585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/248796/pexels-photo-248796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/137043/pexels-photo-137043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743363/pexels-photo-1743363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1650439/pexels-photo-1650439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688830/pexels-photo-688830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188862/pexels-photo-1188862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/749090/pexels-photo-749090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1149674/pexels-photo-1149674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1405379/pexels-photo-1405379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/776326/pexels-photo-776326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/271462/nature-autumn-fall-foliage-271462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/91505/pexels-photo-91505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/217120/pexels-photo-217120.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1004119/pexels-photo-1004119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1054164/pexels-photo-1054164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/594969/pexels-photo-594969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/910310/pexels-photo-910310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/55821/pyrenees-mountains-snow-zenith-55821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/708972/pexels-photo-708972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/757142/pexels-photo-757142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1320755/pexels-photo-1320755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/920041/pexels-photo-920041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/267025/pexels-photo-267025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/731753/pexels-photo-731753.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1094551/pexels-photo-1094551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/994076/pexels-photo-994076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326238/pexels-photo-326238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/640838/pexels-photo-640838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/464327/pexels-photo-464327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/941801/pexels-photo-941801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/997664/pexels-photo-997664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/698333/pexels-photo-698333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/941744/pexels-photo-941744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/972391/pexels-photo-972391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1769879/pexels-photo-1769879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1118667/pexels-photo-1118667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1320459/pexels-photo-1320459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1405144/pexels-photo-1405144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/461763/pexels-photo-461763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/148291/pexels-photo-148291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/904373/pexels-photo-904373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/785405/pexels-photo-785405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/459124/pexels-photo-459124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1040495/pexels-photo-1040495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/629168/pexels-photo-629168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/757170/pexels-photo-757170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/691574/pexels-photo-691574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1603821/pexels-photo-1603821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326916/pexels-photo-326916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355853/pexels-photo-355853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/428430/pexels-photo-428430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1562462/pexels-photo-1562462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/204262/pexels-photo-204262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301391/pexels-photo-301391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301375/pexels-photo-301375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/572939/pexels-photo-572939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1608379/pexels-photo-1608379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547112/pexels-photo-547112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/432812/pexels-photo-432812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1029245/pexels-photo-1029245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1624441/pexels-photo-1624441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552788/pexels-photo-552788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1133504/pexels-photo-1133504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1561993/pexels-photo-1561993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1068737/pexels-photo-1068737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1212601/pexels-photo-1212601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1126918/pexels-photo-1126918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/776326/pexels-photo-776326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/163585/redwood-national-park-california-hdr-landscape-163585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/248796/pexels-photo-248796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/137043/pexels-photo-137043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743363/pexels-photo-1743363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1650439/pexels-photo-1650439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688830/pexels-photo-688830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188862/pexels-photo-1188862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/749090/pexels-photo-749090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/366283/tianjin-twilight-city-scenery-366283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/91505/pexels-photo-91505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258108/pexels-photo-258108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/95816/pexels-photo-95816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743381/pexels-photo-1743381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/176384/pexels-photo-176384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1379630/pexels-photo-1379630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/386158/pexels-photo-386158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547062/pexels-photo-547062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421898/pexels-photo-1421898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/575717/pexels-photo-575717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326337/pexels-photo-326337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417651/pexels-photo-1417651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1792202/pexels-photo-1792202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/217120/pexels-photo-217120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1750124/pexels-photo-1750124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/5106/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460659/pexels-photo-460659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1322149/pexels-photo-1322149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/5065/forest-big-aerial-area.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/105244/pexels-photo-105244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/946343/pexels-photo-946343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/80454/tree-desert-namibia-dead-vlei-80454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1352857/pexels-photo-1352857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/751748/pexels-photo-751748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/542608/pexels-photo-542608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688565/pexels-photo-688565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/237273/pexels-photo-237273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1437115/pexels-photo-1437115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/569391/pexels-photo-569391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/357089/pexels-photo-357089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1624441/pexels-photo-1624441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/23274/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/87118/pexels-photo-87118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1064129/pexels-photo-1064129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2402/landscape-nature-forest-lake.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1088672/pexels-photo-1088672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1555922/pexels-photo-1555922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/21704/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/64705/frozen-berries-red-fruits-64705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/214130/pexels-photo-214130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1212601/pexels-photo-1212601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1126918/pexels-photo-1126918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/776326/pexels-photo-776326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/226721/pexels-photo-226721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1199967/pexels-photo-1199967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/56610/starfish-sand-beach-sea-56610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1480600/pexels-photo-1480600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1774781/pexels-photo-1774781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188849/pexels-photo-1188849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1432066/pexels-photo-1432066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/163585/redwood-national-park-california-hdr-landscape-163585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/248796/pexels-photo-248796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/137043/pexels-photo-137043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/428430/pexels-photo-428430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1562462/pexels-photo-1562462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/204262/pexels-photo-204262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301391/pexels-photo-301391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301375/pexels-photo-301375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/572939/pexels-photo-572939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1608379/pexels-photo-1608379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547112/pexels-photo-547112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/432812/pexels-photo-432812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1029245/pexels-photo-1029245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1624441/pexels-photo-1624441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552788/pexels-photo-552788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1133504/pexels-photo-1133504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1561993/pexels-photo-1561993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1068737/pexels-photo-1068737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/91505/pexels-photo-91505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258108/pexels-photo-258108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/95816/pexels-photo-95816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/577584/pexels-photo-577584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ];


    // Set Index for Ayahs, Hadiths and Wallpaper
    try {
        // Just making sure. Yk, It will work fine but just double checking for bugs lol
        if (idx < 0)
            idx = 0;
        else if (idx > 366 || idx > (backgrounds.length - 1))
            idx = backgrounds.length - 1;
        // Check if wallpaper link is valid
        const checkImage = (path, fallback) => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = path;
                img.onload = () => resolve(path);
                img.onerror = () => resolve(fallback);
            });
        };

        // Method to check if link of image is valid or not
        const link = checkImage(
            backgrounds[idx]
        ).then(result => {
            // If link is valid, use link as background image
            bodyElem.style.backgroundImage = "url(" + backgrounds[idx] + ")";
        }, err => {
            // If link is invalid, use locally stored image as wallpaper
            bodyElem.style.backgroundImage = "url('../img/bg.jpeg')";
        });

    } catch (e) {
        // If anything decides to screw up, use local img as the background
        bodyElem.style.backgroundImage = "url('../img/bg.jpeg')";
    }



///////////////////////////////////////////////////////////////////////
///////////////////////    WALLPAPER  END   ///////////////////////////
///////////////////////////////////////////////////////////////////////








///////////////////////////////////////////////////////////////////////
//////////////////////////    HADITH  START   /////////////////////////
///////////////////////////////////////////////////////////////////////


    // HTML element of hadees
    var hadeesElem = document.getElementById('hadees');


    // Hadiths
    var hadiths = [
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)',
        // ------------- REPEATING ------------------------ //
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan Abi Dawud 43:169)',
        'A Muslim is the one from whose tongue and hands the Muslims are safe. (Riyad as-Salihin - 1.211)',
        'Every deen has an innate character. The character of Islam is modesty. (Al-Muwatta – 47.2.9)',
        'The best among you are the best in character. (Sahih Al-Bukhari - 73.61)',
        'Nobody can be given a blessing better and greater than patience. (Sahih Al-Bukhari - 24.548)',
        'The real patience is at the first stroke of a calamity. (Sahih Al-Bukhari - 23.372)',
        'Whoever guarantees me (the chastity of) what is between his legs (i.e. his private parts), and what is between his jaws (i.e., his tongue), I guarantee him Paradise. (Sahih Al-Bukhari - 82.799)',
        'It is great treachery that you should tell your brother something and have him believe you when you are lying. (Sunan of Abu-Dawood - 41.4953)',
        'The signs of a hypocrite are three: Whenever he speaks, he tells a lie; and whenever he promises, he breaks his promise; and whenever he is entrusted, he betrays. (Sahih Al-Bukhari – 73.117',
        // 'The seeking of knowledge is obligatory for every Muslim. (Al-Tirmidhi - 218)',
        'None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: "O Allah! Keep me alive as long as life is better for me, and let me die if death is better for me." (Sahih Al-Bukhari - 70.575)',
        'A deceased will be raised in the clothes in which he died. (Sunan of Abu-Dawood - 20.3108)',
        'Allah will not be merciful to those who are not merciful to mankind. (Sahih Al-Bukhari - 73.42)',
        'By his good character, a believer will attain the degree of one who prays during the night and fasts during the day. (Sunan of Abu-Dawood - 41.4780)',
        // 'He who abandons lying, having been false, will have a castle built for him just within Paradise. He who abandons disputing, having been speaking the truth, will have one built for him in the middle of Paradise. He whose character is good will have one built for him in the highest part of it. (Al-Tirmidhi - 4831)',
        'The strong-man is not one who wrestles well but the strong man is one who controls himself when he is in a fit of rage. (Sahih Muslim - 32.6313)',
        'Do not become angry and furious.(Sahih Bukhari - 73.137)',
        // 'Shall I not show you the gates of goodness ? Fasting is a shield, charity extinguishes sin as water extinguishes fire; and the praying of a man in the depth of night. (An Nawawi - 29)',
        'Anger comes from the devil, the devil was created of fire, and fire is extinguished only with water; so when one of you becomes angry, he should perform ablution. (Abu Dawud - 36.4766)',
        'When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down. (Abu Dawud - 36.4764)',
        'He who believes in Allah and the Last Day should treat his neighbour with kindness and he who believes in Allah and the Last Day should show hospitality to his guest. (Sahih Muslim - 1:75)',
        'He who believes in Allah and the Last Day should either utter good words or better keep silence. (Sahih Muslim - 1:75)',
        'A man never did a good deed but removed a thorny branch from the road; it was either in the tree and someone cut it and threw it on the road, or it was lying in it, he removed it. Allah accepted this good deed of his and brought him into Paradise. (Abu Dawud - 36:5225)',
        'No calamity befalls a Muslim but that Allah expiates some of his sins because of it, even though it were the prick he receives from a thorn. (Sahih Al-Bukhari - 70:544)',
        'Do not turn away a poor man, Aisha, even if all you can give is half a date. If you love the poor and bring them near you, Aisha, Allah will bring you near Him on the Day of Resurrection. (Al-Tirmidhi - 1376)',
        // 'Do you know who will go first on the Day of Resurrection to the shade of Allah, Who is Great and Glorious? Those who when given what is right accept it, when asked for something give freely, and who judge in favour of others as they do for themselves. (Al-Tirmidhi - 3711)',
        'Allah\'s Messenger (PBUH) said, "When Allah decreed the Creation, He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath." (Hadith Qudsi: 1)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘The son of Adam abuses Dahr (the time), whereas I am Dahr since in My hand are the day and the night.‘ " (Hadith Qudsi: 4)',
        'Prophet (PBUH) said, “Allah says: ‘I am the Most Self-Sufficient and I have no need for an associate. Thus he who does an action for someone else’s sake as well as Mine will have that action renounced by Me to him whom he associated with Me.’ ” (Hadith Qudsi: 5)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Spend (on charity), O son of Adam, and I shall spend on you.‘ " (Hadith Qudsi: 11)',
        'Allah\'s Messenger (PBUH) said, "Allah, the Exalted and Glorious, said, ‘Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire.‘ " (Hadith Qudsi: 19)',
        'Allah\'s Messenger (PBUH) said, "The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] It will be said: Delay these two until they are reconciled; delay these two until they are reconciled." (Hadith Qudsi: 20)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT, said, ‘There are three [types of men] whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage.‘ " (Hadith Qudsi: 21)',
        'Allah\'s Messenger (PBUH) said, "Allah will say on the Day of Resurrection, ‘Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade.‘ " (Hadith Qudsi: 23)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘My faithful servant\'s reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise.‘ " (Hadith Qudsi: 29)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Allah SWT says, ‘O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great at it.‘ " (Hadith Qudsi: 34)',
        'Allah\'s Messenger (PBUH) said, "Our Lord (glorified and exalted be He) descends each night to the earth\'s sky when there remains the final third of the night, and He says, ‘Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him?‘" (Hadith Qudsi: 35)'
        // ------------- REPEATING ------------------------ //
    ];



    // Set hadith
    hadeesElem.innerHTML = hadiths[idx];


///////////////////////////////////////////////////////////////////////
////////////////////////////    HADITH  END   /////////////////////////
///////////////////////////////////////////////////////////////////////
























///////////////////////////////////////////////////////////////////////
///////////////////////////    AYATS  START   /////////////////////////
///////////////////////////////////////////////////////////////////////

    // HTML element for Ayah
    var ayahElem = document.getElementById('ayah');


    // Quranic Verses
    var verses = [
        'And He found you lost and guided [you]. (93:7)',
        "O mankind! Verily, the Promise of Allah is true. So let not this present life deceive you. (35:5)",
        "Allah has promised those who believe and do righteous deeds [that] for them there is forgiveness and great reward. (5:9)",
        "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses. (55:19-20)",
        "And your Lord says, \"Call upon Me; I will respond to you.\"... (40:60)",
        "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (39:53)",
        "Guide us to the straight path. (1:6)",
        "Is there not in Hell a residence for the arrogant? (39:60)",
        "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. (94:5-6)",
        "Do they not see the birds controlled in the atmosphere of the sky? none holds them up except Allah. Indeed in that are signs for a people who believe. (16:79)",
        "So be patient. Indeed, the promise of ALLAH is truth. (30:60)",
        "Our Lord, forgive me and my parents and (all) the believers on the Day when the reckoning will be established. (14:41)",
        "And for those who fear Allah, He will make their path easy. (65:4)",
        "Allah does not burden a soul beyond that it can bear. (2:286)",
        "Did he not realise that Allah is watching? (96:14)",
        "and Allah is the best of providers. (62:11)",
        "Indeed, Prayer prohibits immorality and wrongdoing. (29:45)",
        "And seek help in patience and prayers. (2:45)",
        "It is He who created the heavens and earth in six days and then established Himself above the Throne. (57:4)",
        "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing. (57:4)",
        "Indeed, my Lord is the Hearer of supplication. (14:39)",
        "and He is with you wherever you are. (57:4)",
        "This is the book about which there is no doubt, A guidance for those conscious of Allah. (2:2)",
        "And Say, \"My lord, Increase me in knowledge\". (20:114)",
        "And Allah is with the believers. (8:19)",
        "Assuredly, Allah knows what they conceal and what they declare. (16:23)",
        "Indeed, He does not like the arrogant. (16:23)",
        "[Allah] said, \"Fear not. Indeed, I am with you both; I hear and I see. (20:46)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. (21:107)",
        "And We created you in pairs. (78:8)",
        "They are [varying] degrees in the sight of Allah, and Allah is Seeing of whatever they do. (3:163)",
        "And be patient, [O Muhammad], for the decision of your Lord, for indeed, you are in Our eyes. (52:48)",
        "My mercy encompasses all things. (7:156)",
        "And you do not will except that Allah wills. Indeed, Allah is ever Knowing and Wise. (76:30)",
        "Unquestionably, to Allah belongs whatever is in the heavens and the earth. (10:55)",
        "Indeed, the patient will be given their reward without account. (39:10)",
        "So remember Me; I will remember you. (2:152)",
        "And my success is not but through Allah. Upon him I have relied, and to Him I return. (11:88)",
        "So which of the favors of your Lord would you deny? (55:13)",
        "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" (13:16)",
        " Say, \" Allah is the Creator of all things, and He is the One, the Prevailing.\" (13:16)",
        "And, [O Muhammad], say, \"My Lord, forgive and have mercy, and You are the best of the merciful.\" (23:118)",
        "say, \"Indeed we belong to Allah, and indeed to Him we will return.\" (2:156)",
        "So whoever does an atom's weight of good will see it. (99:7)",
        "And never say of anything, \"Indeed, I will do that tomorrow,\" Except [when adding], \"If Allah wills.\" (18:23-24)",
        "O you who have believed, remember Allah with much remembrance. (33:41)",
        "Indeed, my Lord is near and responsive. (11:61)",
        "My Lord, build for me near You a house in Paradise... (66:11)",
        "Surely, Good deeds erase bad deeds. (11:114)",
        "And whoever is guided is only guided for [the benefit of] himself. (27:92)",
        "And rely upon Allah ; and sufficient is Allah as Disposer of affairs. (33:3)",
        "Sufficient for us is Allah, and [He is] the best Disposer of affairs. (3:173)",
        "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing. (36:38)",
        "And We have certainly beautified the nearest heaven with stars. (67:5)",
        "Say, \"It is Allah who saves you from it and from every distress; then you [still] associate others with Him.\" (6:64)",
        "And do good to parents, and relatives, and orphans, and the needy.. (2:83)",
        "And Speak to people Kindly. (2:83)",
        "And it is He who created the night and the day and the sun and the moon. (21:33)",
        "And when I am ill, it is He who cures me. (26:80)",
        "The day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart. (26:88-89)",
        "And it will be said to them, \"Where are those you used to worship other than Allah ? Can they help you or help themselves?\" (26:92-93)",
        "And when you have decided, then rely upon Allah . Indeed, Allah loves those who rely [upon Him]. (3:159)",
        "And We have made some of you [people] as trial for others - will you have patience? And ever is your Lord, Seeing. (25:20)",
        "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient. (2:155)",
        "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate. (11:90)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. (16:128)",
        "And worship your Lord until there comes to you the certainty (death). (15:99)",
        "And do good; indeed, Allah loves the doers of good. (2:195)",
        "And hold firmly to the rope of Allah all together and do not become divided. (3:103)",
        "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better. (41:34)",
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted. (49:13)",
        "Every soul will taste death. (3:185)",
        "And what is the life of this world except the enjoyment of delusion. (3:185)",
        "And all of them are coming to Him on the Day of Resurrection alone. (19:95)",
        "And ease for me my task. (20:26)",
        "So when the Qur'an is recited, then listen to it and pay attention that you may receive mercy. (7:204)",
        "Say, \"Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.\" (62:8)",
        "[O Men] Are you a more difficult creation or is the heaven? Allah constructed it. (79:27)",
        "And when you testify, be just, even if [it concerns] a near relative. (6:152)",
        "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor], but if you deny, indeed, My punishment is severe.' (14:7)",
        "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? (3:160)",
        "And upon Allah let the believers rely. (3:160)",
        "Indeed, Allah [alone] has knowledge of the Hour and sends down the rain and knows what is in the wombs. (31:34)",
        "And no soul perceives what it will earn tomorrow, and no soul perceives in what land it will die. (31:34)",
        "Indeed, Allah is Knowing and Acquainted. (31:34)",
        "The life of this world is only the enjoyment of Deception. (3:185)",
        "And your Lord says, \"Call upon Me; I will respond to you.\" (40:60)",
        "and Allah would not punish them while they seek forgiveness. (8:33)",
        "So remember Me; I will remember you. (2,152)",
        "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts. (64:4)",
        // --------------------------- REPEATING ------------------------//
        'And He found you lost and guided [you]. (93:7)',
        "O mankind! Verily, the Promise of Allah is true. So let not this present life deceive you. (35:5)",
        "Allah has promised those who believe and do righteous deeds [that] for them there is forgiveness and great reward. (5:9)",
        "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses. (55:19-20)",
        "And your Lord says, \"Call upon Me; I will respond to you.\"... (40:60)",
        "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (39:53)",
        "Guide us to the straight path. (1:6)",
        "Is there not in Hell a residence for the arrogant? (39:60)",
        "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. (94:5-6)",
        "Do they not see the birds controlled in the atmosphere of the sky? none holds them up except Allah. Indeed in that are signs for a people who believe. (16:79)",
        "So be patient. Indeed, the promise of ALLAH is truth. (30:60)",
        "Our Lord, forgive me and my parents and (all) the believers on the Day when the reckoning will be established. (14:41)",
        "And for those who fear Allah, He will make their path easy. (65:4)",
        "Allah does not burden a soul beyond that it can bear. (2:286)",
        "Did he not realise that Allah is watching? (96:14)",
        "and Allah is the best of providers. (62:11)",
        "Indeed, Prayer prohibits immorality and wrongdoing. (29:45)",
        "And seek help in patience and prayers. (2:45)",
        "It is He who created the heavens and earth in six days and then established Himself above the Throne. (57:4)",
        "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing. (57:4)",
        "Indeed, my Lord is the Hearer of supplication. (14:39)",
        "and He is with you wherever you are. (57:4)",
        "This is the book about which there is no doubt, A guidance for those conscious of Allah. (2:2)",
        "And Say, \"My lord, Increase me in knowledge\". (20:114)",
        "And Allah is with the believers. (8:19)",
        "Assuredly, Allah knows what they conceal and what they declare. (16:23)",
        "Indeed, He does not like the arrogant. (16:23)",
        "[Allah] said, \"Fear not. Indeed, I am with you both; I hear and I see. (20:46)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. (21:107)",
        "And We created you in pairs. (78:8)",
        "They are [varying] degrees in the sight of Allah, and Allah is Seeing of whatever they do. (3:163)",
        "And be patient, [O Muhammad], for the decision of your Lord, for indeed, you are in Our eyes. (52:48)",
        "My mercy encompasses all things. (7:156)",
        "And you do not will except that Allah wills. Indeed, Allah is ever Knowing and Wise. (76:30)",
        "Unquestionably, to Allah belongs whatever is in the heavens and the earth. (10:55)",
        "Indeed, the patient will be given their reward without account. (39:10)",
        "So remember Me; I will remember you. (2:152)",
        "And my success is not but through Allah. Upon him I have relied, and to Him I return. (11:88)",
        "So which of the favors of your Lord would you deny? (55:13)",
        "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" (13:16)",
        " Say, \" Allah is the Creator of all things, and He is the One, the Prevailing.\" (13:16)",
        "And, [O Muhammad], say, \"My Lord, forgive and have mercy, and You are the best of the merciful.\" (23:118)",
        "say, \"Indeed we belong to Allah, and indeed to Him we will return.\" (2:156)",
        "So whoever does an atom's weight of good will see it. (99:7)",
        "And never say of anything, \"Indeed, I will do that tomorrow,\" Except [when adding], \"If Allah wills.\" (18:23-24)",
        "O you who have believed, remember Allah with much remembrance. (33:41)",
        "Indeed, my Lord is near and responsive. (11:61)",
        "My Lord, build for me near You a house in Paradise... (66:11)",
        "Surely, Good deeds erase bad deeds. (11:114)",
        "And whoever is guided is only guided for [the benefit of] himself. (27:92)",
        "And rely upon Allah ; and sufficient is Allah as Disposer of affairs. (33:3)",
        "Sufficient for us is Allah, and [He is] the best Disposer of affairs. (3:173)",
        "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing. (36:38)",
        "And We have certainly beautified the nearest heaven with stars. (67:5)",
        "Say, \"It is Allah who saves you from it and from every distress; then you [still] associate others with Him.\" (6:64)",
        "And do good to parents, and relatives, and orphans, and the needy.. (2:83)",
        "And Speak to people Kindly. (2:83)",
        "And it is He who created the night and the day and the sun and the moon. (21:33)",
        "And when I am ill, it is He who cures me. (26:80)",
        "The day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart. (26:88-89)",
        "And it will be said to them, \"Where are those you used to worship other than Allah ? Can they help you or help themselves?\" (26:92-93)",
        "And when you have decided, then rely upon Allah . Indeed, Allah loves those who rely [upon Him]. (3:159)",
        "And We have made some of you [people] as trial for others - will you have patience? And ever is your Lord, Seeing. (25:20)",
        "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient. (2:155)",
        "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate. (11:90)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. (16:128)",
        "And worship your Lord until there comes to you the certainty (death). (15:99)",
        "And do good; indeed, Allah loves the doers of good. (2:195)",
        "And hold firmly to the rope of Allah all together and do not become divided. (3:103)",
        "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better. (41:34)",
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted. (49:13)",
        "Every soul will taste death. (3:185)",
        "And what is the life of this world except the enjoyment of delusion. (3:185)",
        "And all of them are coming to Him on the Day of Resurrection alone. (19:95)",
        "And ease for me my task. (20:26)",
        "So when the Qur'an is recited, then listen to it and pay attention that you may receive mercy. (7:204)",
        "Say, \"Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.\" (62:8)",
        "[O Men] Are you a more difficult creation or is the heaven? Allah constructed it. (79:27)",
        "And when you testify, be just, even if [it concerns] a near relative. (6:152)",
        "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor], but if you deny, indeed, My punishment is severe.' (14:7)",
        "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? (3:160)",
        "And upon Allah let the believers rely. (3:160)",
        "Indeed, Allah [alone] has knowledge of the Hour and sends down the rain and knows what is in the wombs. (31:34)",
        "And no soul perceives what it will earn tomorrow, and no soul perceives in what land it will die. (31:34)",
        "Indeed, Allah is Knowing and Acquainted. (31:34)",
        "The life of this world is only the enjoyment of Deception. (3:185)",
        "And your Lord says, \"Call upon Me; I will respond to you.\" (40:60)",
        "and Allah would not punish them while they seek forgiveness. (8:33)",
        "So remember Me; I will remember you. (2,152)",
        "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts. (64:4)",
        // --------------------------- REPEATING ------------------------//
        'And He found you lost and guided [you]. (93:7)',
        "O mankind! Verily, the Promise of Allah is true. So let not this present life deceive you. (35:5)",
        "Allah has promised those who believe and do righteous deeds [that] for them there is forgiveness and great reward. (5:9)",
        "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses. (55:19-20)",
        "And your Lord says, \"Call upon Me; I will respond to you.\"... (40:60)",
        "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (39:53)",
        "Guide us to the straight path. (1:6)",
        "Is there not in Hell a residence for the arrogant? (39:60)",
        "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. (94:5-6)",
        "Do they not see the birds controlled in the atmosphere of the sky? none holds them up except Allah. Indeed in that are signs for a people who believe. (16:79)",
        "So be patient. Indeed, the promise of ALLAH is truth. (30:60)",
        "Our Lord, forgive me and my parents and (all) the believers on the Day when the reckoning will be established. (14:41)",
        "And for those who fear Allah, He will make their path easy. (65:4)",
        "Allah does not burden a soul beyond that it can bear. (2:286)",
        "Did he not realise that Allah is watching? (96:14)",
        "and Allah is the best of providers. (62:11)",
        "Indeed, Prayer prohibits immorality and wrongdoing. (29:45)",
        "And seek help in patience and prayers. (2:45)",
        "It is He who created the heavens and earth in six days and then established Himself above the Throne. (57:4)",
        "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing. (57:4)",
        "Indeed, my Lord is the Hearer of supplication. (14:39)",
        "and He is with you wherever you are. (57:4)",
        "This is the book about which there is no doubt, A guidance for those conscious of Allah. (2:2)",
        "And Say, \"My lord, Increase me in knowledge\". (20:114)",
        "And Allah is with the believers. (8:19)",
        "Assuredly, Allah knows what they conceal and what they declare. (16:23)",
        "Indeed, He does not like the arrogant. (16:23)",
        "[Allah] said, \"Fear not. Indeed, I am with you both; I hear and I see. (20:46)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. (21:107)",
        "And We created you in pairs. (78:8)",
        "They are [varying] degrees in the sight of Allah, and Allah is Seeing of whatever they do. (3:163)",
        "And be patient, [O Muhammad], for the decision of your Lord, for indeed, you are in Our eyes. (52:48)",
        "My mercy encompasses all things. (7:156)",
        "And you do not will except that Allah wills. Indeed, Allah is ever Knowing and Wise. (76:30)",
        "Unquestionably, to Allah belongs whatever is in the heavens and the earth. (10:55)",
        "Indeed, the patient will be given their reward without account. (39:10)",
        "So remember Me; I will remember you. (2:152)",
        "And my success is not but through Allah. Upon him I have relied, and to Him I return. (11:88)",
        "So which of the favors of your Lord would you deny? (55:13)",
        "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" (13:16)",
        " Say, \" Allah is the Creator of all things, and He is the One, the Prevailing.\" (13:16)",
        "And, [O Muhammad], say, \"My Lord, forgive and have mercy, and You are the best of the merciful.\" (23:118)",
        "say, \"Indeed we belong to Allah, and indeed to Him we will return.\" (2:156)",
        "So whoever does an atom's weight of good will see it. (99:7)",
        "And never say of anything, \"Indeed, I will do that tomorrow,\" Except [when adding], \"If Allah wills.\" (18:23-24)",
        "O you who have believed, remember Allah with much remembrance. (33:41)",
        "Indeed, my Lord is near and responsive. (11:61)",
        "My Lord, build for me near You a house in Paradise... (66:11)",
        "Surely, Good deeds erase bad deeds. (11:114)",
        "And whoever is guided is only guided for [the benefit of] himself. (27:92)",
        "And rely upon Allah ; and sufficient is Allah as Disposer of affairs. (33:3)",
        "Sufficient for us is Allah, and [He is] the best Disposer of affairs. (3:173)",
        "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing. (36:38)",
        "And We have certainly beautified the nearest heaven with stars. (67:5)",
        "Say, \"It is Allah who saves you from it and from every distress; then you [still] associate others with Him.\" (6:64)",
        "And do good to parents, and relatives, and orphans, and the needy.. (2:83)",
        "And Speak to people Kindly. (2:83)",
        "And it is He who created the night and the day and the sun and the moon. (21:33)",
        "And when I am ill, it is He who cures me. (26:80)",
        "The day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart. (26:88-89)",
        "And it will be said to them, \"Where are those you used to worship other than Allah ? Can they help you or help themselves?\" (26:92-93)",
        "And when you have decided, then rely upon Allah . Indeed, Allah loves those who rely [upon Him]. (3:159)",
        "And We have made some of you [people] as trial for others - will you have patience? And ever is your Lord, Seeing. (25:20)",
        "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient. (2:155)",
        "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate. (11:90)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. (16:128)",
        "And worship your Lord until there comes to you the certainty (death). (15:99)",
        "And do good; indeed, Allah loves the doers of good. (2:195)",
        "And hold firmly to the rope of Allah all together and do not become divided. (3:103)",
        "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better. (41:34)",
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted. (49:13)",
        "Every soul will taste death. (3:185)",
        "And what is the life of this world except the enjoyment of delusion. (3:185)",
        "And all of them are coming to Him on the Day of Resurrection alone. (19:95)",
        "And ease for me my task. (20:26)",
        "So when the Qur'an is recited, then listen to it and pay attention that you may receive mercy. (7:204)",
        "Say, \"Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.\" (62:8)",
        "[O Men] Are you a more difficult creation or is the heaven? Allah constructed it. (79:27)",
        "And when you testify, be just, even if [it concerns] a near relative. (6:152)",
        "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor], but if you deny, indeed, My punishment is severe.' (14:7)",
        "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? (3:160)",
        "And upon Allah let the believers rely. (3:160)",
        "Indeed, Allah [alone] has knowledge of the Hour and sends down the rain and knows what is in the wombs. (31:34)",
        "And no soul perceives what it will earn tomorrow, and no soul perceives in what land it will die. (31:34)",
        "Indeed, Allah is Knowing and Acquainted. (31:34)",
        "The life of this world is only the enjoyment of Deception. (3:185)",
        "And your Lord says, \"Call upon Me; I will respond to you.\" (40:60)",
        "and Allah would not punish them while they seek forgiveness. (8:33)",
        "So remember Me; I will remember you. (2,152)",
        "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts. (64:4)",
        // --------------------------- REPEATING ------------------------//
        'And He found you lost and guided [you]. (93:7)',
        "O mankind! Verily, the Promise of Allah is true. So let not this present life deceive you. (35:5)",
        "Allah has promised those who believe and do righteous deeds [that] for them there is forgiveness and great reward. (5:9)",
        "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses. (55:19-20)",
        "And your Lord says, \"Call upon Me; I will respond to you.\"... (40:60)",
        "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (39:53)",
        "Guide us to the straight path. (1:6)",
        "Is there not in Hell a residence for the arrogant? (39:60)",
        "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. (94:5-6)",
        "Do they not see the birds controlled in the atmosphere of the sky? none holds them up except Allah. Indeed in that are signs for a people who believe. (16:79)",
        "So be patient. Indeed, the promise of ALLAH is truth. (30:60)",
        "Our Lord, forgive me and my parents and (all) the believers on the Day when the reckoning will be established. (14:41)",
        "And for those who fear Allah, He will make their path easy. (65:4)",
        "Allah does not burden a soul beyond that it can bear. (2:286)",
        "Did he not realise that Allah is watching? (96:14)",
        "and Allah is the best of providers. (62:11)",
        "Indeed, Prayer prohibits immorality and wrongdoing. (29:45)",
        "And seek help in patience and prayers. (2:45)",
        "It is He who created the heavens and earth in six days and then established Himself above the Throne. (57:4)",
        "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing. (57:4)",
        "Indeed, my Lord is the Hearer of supplication. (14:39)",
        "and He is with you wherever you are. (57:4)",
        "This is the book about which there is no doubt, A guidance for those conscious of Allah. (2:2)",
        "And Say, \"My lord, Increase me in knowledge\". (20:114)",
        "And Allah is with the believers. (8:19)",
        "Assuredly, Allah knows what they conceal and what they declare. (16:23)",
        "Indeed, He does not like the arrogant. (16:23)",
        "[Allah] said, \"Fear not. Indeed, I am with you both; I hear and I see. (20:46)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. (21:107)",
        "And We created you in pairs. (78:8)",
        "They are [varying] degrees in the sight of Allah, and Allah is Seeing of whatever they do. (3:163)",
        "And be patient, [O Muhammad], for the decision of your Lord, for indeed, you are in Our eyes. (52:48)",
        "My mercy encompasses all things. (7:156)",
        "And you do not will except that Allah wills. Indeed, Allah is ever Knowing and Wise. (76:30)",
        "Unquestionably, to Allah belongs whatever is in the heavens and the earth. (10:55)",
        "Indeed, the patient will be given their reward without account. (39:10)",
        "So remember Me; I will remember you. (2:152)",
        "And my success is not but through Allah. Upon him I have relied, and to Him I return. (11:88)",
        "So which of the favors of your Lord would you deny? (55:13)",
        "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" (13:16)",
        " Say, \" Allah is the Creator of all things, and He is the One, the Prevailing.\" (13:16)",
        "And, [O Muhammad], say, \"My Lord, forgive and have mercy, and You are the best of the merciful.\" (23:118)",
        "say, \"Indeed we belong to Allah, and indeed to Him we will return.\" (2:156)",
        "So whoever does an atom's weight of good will see it. (99:7)",
        "And never say of anything, \"Indeed, I will do that tomorrow,\" Except [when adding], \"If Allah wills.\" (18:23-24)",
        "O you who have believed, remember Allah with much remembrance. (33:41)",
        "Indeed, my Lord is near and responsive. (11:61)",
        "My Lord, build for me near You a house in Paradise... (66:11)",
        "Surely, Good deeds erase bad deeds. (11:114)",
        "And whoever is guided is only guided for [the benefit of] himself. (27:92)",
        "And rely upon Allah ; and sufficient is Allah as Disposer of affairs. (33:3)",
        "Sufficient for us is Allah, and [He is] the best Disposer of affairs. (3:173)",
        "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing. (36:38)",
        "And We have certainly beautified the nearest heaven with stars. (67:5)",
        "Say, \"It is Allah who saves you from it and from every distress; then you [still] associate others with Him.\" (6:64)",
        "And do good to parents, and relatives, and orphans, and the needy.. (2:83)",
        "And Speak to people Kindly. (2:83)",
        "And it is He who created the night and the day and the sun and the moon. (21:33)",
        "And when I am ill, it is He who cures me. (26:80)",
        "The day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart. (26:88-89)",
        "And it will be said to them, \"Where are those you used to worship other than Allah ? Can they help you or help themselves?\" (26:92-93)",
        "And when you have decided, then rely upon Allah . Indeed, Allah loves those who rely [upon Him]. (3:159)",
        "And We have made some of you [people] as trial for others - will you have patience? And ever is your Lord, Seeing. (25:20)",
        "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient. (2:155)",
        "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate. (11:90)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. (16:128)",
        "And worship your Lord until there comes to you the certainty (death). (15:99)",
        "And do good; indeed, Allah loves the doers of good. (2:195)",
        "And hold firmly to the rope of Allah all together and do not become divided. (3:103)",
        "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better. (41:34)",
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted. (49:13)",
        "Every soul will taste death. (3:185)",
        "And what is the life of this world except the enjoyment of delusion. (3:185)",
        "And all of them are coming to Him on the Day of Resurrection alone. (19:95)",
        "And ease for me my task. (20:26)",
        "So when the Qur'an is recited, then listen to it and pay attention that you may receive mercy. (7:204)",
        "Say, \"Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.\" (62:8)",
        "[O Men] Are you a more difficult creation or is the heaven? Allah constructed it. (79:27)",
        "And when you testify, be just, even if [it concerns] a near relative. (6:152)",
        "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor], but if you deny, indeed, My punishment is severe.' (14:7)",
        "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? (3:160)",
        "And upon Allah let the believers rely. (3:160)",
        "Indeed, Allah [alone] has knowledge of the Hour and sends down the rain and knows what is in the wombs. (31:34)",
        "And no soul perceives what it will earn tomorrow, and no soul perceives in what land it will die. (31:34)",
        "Indeed, Allah is Knowing and Acquainted. (31:34)",
        "The life of this world is only the enjoyment of Deception. (3:185)",
        "And your Lord says, \"Call upon Me; I will respond to you.\" (40:60)",
        "and Allah would not punish them while they seek forgiveness. (8:33)",
        "So remember Me; I will remember you. (2,152)",
        "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts. (64:4)",
        // --------------------------- REPEATING ------------------------//
        'And He found you lost and guided [you]. (93:7)',
        "O mankind! Verily, the Promise of Allah is true. So let not this present life deceive you. (35:5)",
        "Allah has promised those who believe and do righteous deeds [that] for them there is forgiveness and great reward. (5:9)",
        "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses. (55:19-20)",
        "And your Lord says, \"Call upon Me; I will respond to you.\"... (40:60)",
        "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (39:53)",
        "Guide us to the straight path. (1:6)",
        "Is there not in Hell a residence for the arrogant? (39:60)",
        "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. (94:5-6)",
        "Do they not see the birds controlled in the atmosphere of the sky? none holds them up except Allah. Indeed in that are signs for a people who believe. (16:79)",
        "So be patient. Indeed, the promise of ALLAH is truth. (30:60)",
        "Our Lord, forgive me and my parents and (all) the believers on the Day when the reckoning will be established. (14:41)",
        "And for those who fear Allah, He will make their path easy. (65:4)",
        "Allah does not burden a soul beyond that it can bear. (2:286)",
        "Did he not realise that Allah is watching? (96:14)",
        "and Allah is the best of providers. (62:11)",
        "Indeed, Prayer prohibits immorality and wrongdoing. (29:45)",
        "And seek help in patience and prayers. (2:45)",
        "It is He who created the heavens and earth in six days and then established Himself above the Throne. (57:4)",
        "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing. (57:4)",
        "Indeed, my Lord is the Hearer of supplication. (14:39)",
        "and He is with you wherever you are. (57:4)",
        "This is the book about which there is no doubt, A guidance for those conscious of Allah. (2:2)",
        "And Say, \"My lord, Increase me in knowledge\". (20:114)",
        "And Allah is with the believers. (8:19)",
        "Assuredly, Allah knows what they conceal and what they declare. (16:23)",
        "Indeed, He does not like the arrogant. (16:23)",
        "[Allah] said, \"Fear not. Indeed, I am with you both; I hear and I see. (20:46)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. (21:107)",
        "And We created you in pairs. (78:8)",
        "They are [varying] degrees in the sight of Allah, and Allah is Seeing of whatever they do. (3:163)",
        "And be patient, [O Muhammad], for the decision of your Lord, for indeed, you are in Our eyes. (52:48)",
        "My mercy encompasses all things. (7:156)",
        "And you do not will except that Allah wills. Indeed, Allah is ever Knowing and Wise. (76:30)",
        "Unquestionably, to Allah belongs whatever is in the heavens and the earth. (10:55)",
        "Indeed, the patient will be given their reward without account. (39:10)",
        "So remember Me; I will remember you. (2:152)",
        "And my success is not but through Allah. Upon him I have relied, and to Him I return. (11:88)",
        "So which of the favors of your Lord would you deny? (55:13)",
        "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" (13:16)",
        " Say, \" Allah is the Creator of all things, and He is the One, the Prevailing.\" (13:16)",
        "And, [O Muhammad], say, \"My Lord, forgive and have mercy, and You are the best of the merciful.\" (23:118)",
        "say, \"Indeed we belong to Allah, and indeed to Him we will return.\" (2:156)",
        "So whoever does an atom's weight of good will see it. (99:7)",
        "And never say of anything, \"Indeed, I will do that tomorrow,\" Except [when adding], \"If Allah wills.\" (18:23-24)",
        "O you who have believed, remember Allah with much remembrance. (33:41)",
        "Indeed, my Lord is near and responsive. (11:61)",
        "My Lord, build for me near You a house in Paradise... (66:11)",
        "Surely, Good deeds erase bad deeds. (11:114)",
        "And whoever is guided is only guided for [the benefit of] himself. (27:92)",
        "And rely upon Allah ; and sufficient is Allah as Disposer of affairs. (33:3)",
        "Sufficient for us is Allah, and [He is] the best Disposer of affairs. (3:173)",
        "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing. (36:38)",
        "And We have certainly beautified the nearest heaven with stars. (67:5)",
        "Say, \"It is Allah who saves you from it and from every distress; then you [still] associate others with Him.\" (6:64)",
        "And do good to parents, and relatives, and orphans, and the needy.. (2:83)",
        "And Speak to people Kindly. (2:83)",
        "And it is He who created the night and the day and the sun and the moon. (21:33)",
        "And when I am ill, it is He who cures me. (26:80)",
        "The day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart. (26:88-89)",
        "And it will be said to them, \"Where are those you used to worship other than Allah ? Can they help you or help themselves?\" (26:92-93)",
        "And when you have decided, then rely upon Allah . Indeed, Allah loves those who rely [upon Him]. (3:159)",
        "And We have made some of you [people] as trial for others - will you have patience? And ever is your Lord, Seeing. (25:20)",
        "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient. (2:155)",
        "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate. (11:90)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. (16:128)",
        "And worship your Lord until there comes to you the certainty (death). (15:99)",
        "And do good; indeed, Allah loves the doers of good. (2:195)",
        "And hold firmly to the rope of Allah all together and do not become divided. (3:103)",
        "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better. (41:34)",
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted. (49:13)",
        "Every soul will taste death. (3:185)",
        "And what is the life of this world except the enjoyment of delusion. (3:185)",
        "And all of them are coming to Him on the Day of Resurrection alone. (19:95)",
        "And ease for me my task. (20:26)",
        "So when the Qur'an is recited, then listen to it and pay attention that you may receive mercy. (7:204)",
        "Say, \"Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.\" (62:8)",
        "[O Men] Are you a more difficult creation or is the heaven? Allah constructed it. (79:27)",
        "And when you testify, be just, even if [it concerns] a near relative. (6:152)",
        "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor], but if you deny, indeed, My punishment is severe.' (14:7)",
        "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? (3:160)",
        "And upon Allah let the believers rely. (3:160)",
        "Indeed, Allah [alone] has knowledge of the Hour and sends down the rain and knows what is in the wombs. (31:34)",
        "And no soul perceives what it will earn tomorrow, and no soul perceives in what land it will die. (31:34)",
        "Indeed, Allah is Knowing and Acquainted. (31:34)",
        "The life of this world is only the enjoyment of Deception. (3:185)",
        "And your Lord says, \"Call upon Me; I will respond to you.\" (40:60)",
        "and Allah would not punish them while they seek forgiveness. (8:33)",
        "So remember Me; I will remember you. (2,152)",
        "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts. (64:4)",
        // --------------------------- REPEATING ------------------------//
    ];



    // Set Ayat
    ayahElem.innerHTML = verses[idx];


///////////////////////////////////////////////////////////////////////
///////////////////////////    AYATS  END   ///////////////////////////
///////////////////////////////////////////////////////////////////////























///////////////////////////////////////////////////////////////////////
////////////////////////    FAVOURITES  START   ///////////////////////
///////////////////////////////////////////////////////////////////////


// Method to get most visited websites using chrome api
    // Returns: Nothing
    // Populate the list in dashboard.html with frequently visited websites
    function MostVisitedWebsites(mostVisitedURLs) {
        // get the list
        var ol = document.getElementById('favorites');

        for (var i = 0; i < mostVisitedURLs.length; i++) {
            // create new list item
            var li = ol.appendChild(document.createElement('li'));
            // add class for padding
            li.className = "p5  bgopacity";
            // Add favicons for websites
            var _img = document.createElement('img');
            _img.src = "https://plus.google.com/_/favicon?domain_url=" + mostVisitedURLs[i].url;
            _img.id = "foo" + i;
            _img.className = "liFavicon noselect";
            li.appendChild(_img);
            // create anchor element
            var a = li.appendChild(document.createElement('a'));
            // add class to remove anchor default styling
            a.className = "links text-color noselect";
            // do the shit here
            a.href = mostVisitedURLs[i].url;
            let title = mostVisitedURLs[i].title;
            if (title.length > 20) {
                title = title.slice(0, 15) + '...';
            }
            a.appendChild(document.createTextNode(title));
        }
    }



    // Get most visited sites a.k.a favourites
    chrome.topSites.get(MostVisitedWebsites);



///////////////////////////////////////////////////////////////////////
///////////////////////    FAVOURITES END   ///////////////////////////
///////////////////////////////////////////////////////////////////////





















///////////////////////////////////////////////////////////////////////
///////////////////////    DATE & TIME  START   ///////////////////////
///////////////////////////////////////////////////////////////////////


    var timeElem = document.getElementById('time');
    var dateElem = document.getElementById('date');

    // Set Current Time
    // param: 1 for 12 hours format
    //        0 for 24 hours format
    timeElem.innerHTML = getTime(1);

    // Set Current Date
    dateElem.innerHTML = getDate();

    // Method to calculate and format time
    // Returns a string containing time
    function getTime(twelvehour) {
        // 12 hours format
        if (twelvehour) {
            var d = new Date();
            let hr = d.getHours();
            let min = d.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            let ampm = "am";
            if (hr > 12) {
                hr -= 12;
                ampm = "pm";
            }
            if (hr < 10) {
                hr = "0" + hr;
                // Fix for time bug at 12 am
                if(hr == "00"){ //!----------
                    hr = 12; //!----------
                } //!----------
            }
            return hr + ':' + min + ' ' + ampm;
        }
        // 24 hours format
        else {
            var d = new Date();
            let hr = d.getHours();
            let min = d.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            if (hr < 10) {
                hr = "0" + hr;
            }
            return hr + ':' + min + ' ';
        }
    }

    // Method to calculate and format date
    // Returns a string containing date
    function getDate() {
        var today = '';
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        today += months[d.getMonth()] + ', ';
        today += d.getDate();
        return today;
    }

    // Method to get the day number, that will be used for index of wallpaper, ayah and hadith.
    // Return the day number of the year
    function getNumberOfDay() {
        var d = new Date();
        var days = [0, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return d.getDate() + days[d.getMonth()];
    }




///////////////////////////////////////////////////////////////////////
///////////////////////    DATE & TIME  START   ///////////////////////
///////////////////////////////////////////////////////////////////////























///////////////////////////////////////////////////////////////////////
///////////////////////    WEATHER  START   ///////////////////////////
///////////////////////////////////////////////////////////////////////



    /*
    Logic:
    Read weather from internal storage
    Check if the weather data stored is older than 5 hours
        if older: Fetch fresh data
        if not older: Use sotred data
    Populate data at front end
     */


    var weather = '';
    var feelsLike = '';
    var weatherIcon = '';
    var weather_f = '';
    var humidity = '';
    var feelslike = '';
    var feelslike_f = '';
    var wind_mph = '';
    var wind_kph = '';
    var condition = '';
    var vis_km = '';
    var vis_m = '';


    // Method to calculate difference of time in hours
    // Param: Old time
    // Return Hours difference between current and old time
    function difference_hours(date) {
        var dateOneObj = new Date(date);
        var dateTwoObj = new Date();
        var hours = Math.abs(dateTwoObj - dateOneObj) / 36e5;
        return hours;
    }


    // Method to fetch fresh data
    function getWeatherAPI() {
        // get the geo location
        navigator.geolocation.getCurrentPosition(function (location) {
            var geo = location.coords.latitude + ',' + location.coords.longitude;
            // Form the url
            var url = 'http://api.apixu.com/v1/current.json?key=caefebf6e1904ebcae3130449192601&q=' + geo;
            // API Endpoint
            $.getJSON(url, function (data) {
                // Update weather
                weather = data.current.temp_c;
                feelsLike = data.current.feelslike_c;
                weatherIcon = data.current.condition.icon;
                weather_f = data.current.feelslike_f;
                condition = data.current.condition.text;
                humidity = data.current.humidity;
                feelslike = data.current.feelslike_c;
                feelslike_f = data.current.feelslike_f;
                wind_mph = data.current.wind_mph;
                wind_kph = data.current.wind_kph;
                vis_km = data.current.vis_km;
                vis_m = data.current.vis_miles;
                // Update Weather data in Local Storage
                writeWeather();
                // Update UI of Weather (Fixes Bug)
                updateWeatherUI(set_weather_scale_f);
            })
        });
    }

    // Update image link and text at Front End
    function updateWeatherUI(scale){
        if(scale){
            $('#weatherIcon').attr("src", 'http:' + weatherIcon);
            $('#weatherTemp').text( weather_f + '°F' );
            $('#det1').text('Feels Like:  ' + feelslike_f + '°F');
        }else{
            $('#weatherIcon').attr("src", 'http:' + weatherIcon);
            $('#weatherTemp').text( weather + '°C' );
            $('#det1').text('Feels Like:  ' + feelsLike + '°C');
        }
        $('#det2').text('Condition:  ' + condition);
    }

    // Update Weather Details
    function updateWeatherDetailsUI(imperial) {
        if(imperial){
            $('#det3').text('Wind:  ' + wind_mph + ' mph');
            $('#det4').text('Visiblity:  ' + vis_m + ' miles');
        }else{
            $('#det3').text('Wind:  ' + wind_kph + ' kph ');
            $('#det4').text('Visiblity:  ' + vis_km + ' km');
        }
        $('#det5').text('Humidity:  ' + humidity + '%')
    }

    // Write Weather Data in local storage
    function writeWeather() {
        let tempWeather = weather + ',' + feelsLike + ',' + weatherIcon + ',' + Date() + ',' + weather_f + ',' + condition + ',' + humidity + ',' + feelsLike + ',' + feelslike_f + ',' + wind_mph + ',' + wind_kph + ',' + vis_km + ',' + vis_m;
        chrome.storage.sync.set({'weatherSight': tempWeather}, function () {
            // SOmehting Maybe??
        });
    }

    // Read weather data from local storage
    // Also checks for data age and fetch fresh data
    // Also calls updateWeatherUI method
    function readWeather() {
        chrome.storage.sync.get(['weatherSight'], function (result) {
            if (Object.entries(result).length != 0) {
                for (var key in result) {
                    // Read data and split it
                    console.log(result[key]);
                    var temp = result[key].split(',');
                    weather = temp[0];
                    feelsLike = temp[1];
                    weatherIcon = temp[2];
                    weather_f = temp[4];
                    condition = temp[5];
                    humidity = temp[6];
                    feelsLike = temp[7];
                    feelslike_f = temp[8];
                    wind_mph = temp[9];
                    wind_kph = temp[10];
                    vis_km = temp[11];
                    vis_m = temp[12];
                    // If data is older than 5 hours, fetch fresh data
                    if(difference_hours(temp[3]) > 5){
                        getWeatherAPI();
                    }

                    // Update UI
                    updateWeatherUI(set_weather_scale_f);
                }
            } else {
                // If running for first time
                // Fetch data
                getWeatherAPI();
                //Update UI
                updateWeatherUI(set_weather_scale_f);

                //Might solve the bug
                $("#weatherDiv").hide();
                $("#weatherDiv").show();
            }
        });
    }

    // Call readWeather method. It triggers all other methods related to
    // weather conditionally
    readWeather();





///////////////////////////////////////////////////////////////////////
/////////////////////////    WEATHER  END   ///////////////////////////
///////////////////////////////////////////////////////////////////////





















///////////////////////////////////////////////////////////////////////
///////////////////    SETTINGS TOGGLE  START   ///////////////////////
///////////////////////////////////////////////////////////////////////



    // $("#favouritesDiv").hide();
    // $("#todoDiv").hide();
    // $("#todoHeadingToggle").hide();
    // $("#weatherDiv").hide();
    // $("#searchDiv").hide();
    // $('.bgopacity').removeClass("dark");





    var set_time24 = false;
    var set_favourites = true;
    var set_expandTodo = false;
    var set_todo = true;
    var set_weather = true;
    var set_search = true;
    var set_opacity = true;
    var set_weather_scale_f = false;
    var set_imperial = false;

    // chrome.storage.sync.remove('settings_widgets_sight');

    readAllSettings();

    function writeAllSettings(){
        var settings = set_time24 + ',' + set_favourites + ',' + set_expandTodo + ',' + set_todo + ',' + set_weather + ',' + set_search + ',' + set_opacity + ',' + set_weather_scale_f + ',' + set_imperial;
            chrome.storage.sync.set({'settings_widgets_sight': settings}, function () {
                console.log('write: ' + settings);
            });
    }

    function readAllSettings(){
        chrome.storage.sync.get(['settings_widgets_sight'], function (result) {
            // Read From Local Storage
            if (Object.entries(result).length != 0) {

                console.log("if------" + Object.entries(result).length);

                for (var key in result) {
                    console.log('input: ' + result[key]);
                    var r = result[key].split(',');
                    set_time24 = r[0];
                    set_favourites = r[1];
                    set_expandTodo = r[2];
                    set_todo = r[3];
                    set_weather = r[4];
                    set_search = r[5];
                    set_opacity = r[6];
                    set_weather_scale_f = r[7];
                    set_imperial = r[8];
                }


                // Apply saved settings
                if(set_time24 == 'true'){
                    timeElem.innerHTML = getTime(0);
                    $('#isSelected24').prop('checked', true);
                }
                else{
                    timeElem.innerHTML = getTime(1);
                    $('#isSelected24').prop('checked', false);
                }

                if(set_favourites == 'true'){
                    $("#favouritesDiv").show();
                    $('#displayFavourites').prop('checked', true);
                }
                else{
                    $("#favouritesDiv").hide();
                    $('#displayFavourites').prop('checked', false);
                }

                if(set_todo == 'true'){
                    $('#displayTodo').prop('checked', true);

                    // expand/minimize accordingly
                    // if(set_expandTodo == 'true'){
                    //     $('#todoHeadingToggle').hide();
                    //     $('#todoDiv').show();
                    //     console.log('expand');
                    // }
                    // else{
                    //     $('#todoDiv').hide();
                    //     $('#todoHeadingToggle').show();
                    //     console.log('minimize');
                    // }
                        $('#todoDiv').hide();
                        $('#todoHeadingToggle').show();
                        console.log('minimize');
                }
                else{
                    $("#todoDiv").hide();
                    $("#todoHeadingToggle").hide();
                    $('#displayTodo').prop('checked', false);
                }


                if(set_weather == 'true'){
                    $("#weatherDiv").show();
                    $('#weatherToggle').prop('checked', true);
                }
                else{
                    $("#weatherDiv").hide();
                    $('#weatherToggle').prop('checked', false);
                }

                if(set_search == 'true'){
                    $("#searchDiv").show();
                    $('#searchBoxToggle').prop('checked', true);
                }
                else{
                    $("#searchDiv").hide();
                    $('#searchBoxToggle').prop('checked', false);
                }

                if(set_opacity == 'true'){
                    $('.bgopacity').addClass("dark");
                    $('#bgOpacityToggle').prop('checked', true);
                }
                else{
                    $('.bgopacity').removeClass("dark");
                    $('#bgOpacityToggle').prop('checked', false);
                }

                if(set_imperial == 'true'){
                    $('#imperialScaleToggle').prop('checked', true);
                    updateWeatherDetailsUI(true);
                }
                else{
                    $('#imperialScaleToggle').prop('checked', false);
                    updateWeatherDetailsUI(false);
                }

                if(set_weather_scale_f == 'true'){
                    updateWeatherUI(true);
                    $('#weatherScaleToggle').prop('checked', true);
                }
                else{
                    updateWeatherUI(false);
                    $('#weatherScaleToggle').prop('checked', false);
                }


            } else {

                console.log("else---");

                // Defaults
                set_time24 = false;
                set_favourites = true;
                set_expandTodo = false;
                set_todo = true;
                set_weather = true;
                set_search = true;
                set_opacity = true;
                set_weather_scale_f = false;
                set_imperial = false;

                // Apply Settings
                if(set_time24){
                    timeElem.innerHTML = getTime(0);
                }
                if(!set_time24){
                    timeElem.innerHTML = getTime(1);
                }
                if(set_favourites){
                    $("#favouritesDiv").show();
                }
                if(!set_favourites){
                    $("#favouritesDiv").hide();
                }
                if(set_todo){
                    $("#todoHeadingToggle").show();
                }
                if(!set_todo){
                    $("#todoDiv").hide();
                    $("#todoHeadingToggle").hide();
                }
                // Keep after show/hide todos so it will expand/minimize accordingly
                if(set_expandTodo){
                    $('#todoHeadingToggle').show();
                    $('#todoDiv').hide();
                }
                if(!set_expandTodo){
                    $('#todoDiv').hide();
                    $('#todoHeadingToggle').show();
                }
                if(set_weather){
                    $("#weatherDiv").show();
                }
                if(!set_weather){
                    $("#weatherDiv").hide();
                }
                if(set_search){
                    $("#searchDiv").show();
                }
                if(!set_search){
                    $("#searchDiv").hide();
                }
                if(set_opacity){
                    $('.bgopacity').addClass("dark");
                }
                if(!set_opacity){
                    $('.bgopacity').removeClass("dark");
                }
                if(set_weather_scale_f){
                    updateWeatherUI(set_weather_scale_f);
                }
                if(!set_weather_scale_f){
                    updateWeatherUI(set_weather_scale_f);
                }
                if(set_imperial){
                    updateWeatherDetailsUI(true);
                }else{
                    updateWeatherDetailsUI(false);
                }

                // Set the checkboxes selected or not based on saved settings
                $('#isSelected24').prop('checked', set_time24);
                $('#displayFavourites').prop('checked', set_favourites);
                $('#todoHeadingToggle').prop('checked', set_expandTodo);
                $('#displayTodo').prop('checked', set_todo);
                $('#weatherToggle').prop('checked', set_weather);
                $('#searchBoxToggle').prop('checked', set_weather);
                $('#bgOpacityToggle').prop('checked', set_opacity);
                $('#weatherScaleToggle').prop('checked', set_weather_scale_f);

                writeAllSettings();
            }
        });
    }

    // Toggle time between 12 hours and 24 hours format
    $('#isSelected24').bind('change', function () {
        if ($(this).is(':checked')) {
            $("#timeDiv").fadeOut("slow", function () {
                timeElem.innerHTML = getTime(0);
            });
            $("#timeDiv").fadeIn("slow");
            set_time24 = true;
        }

        else {
            $("#timeDiv").fadeOut("slow", function () {
                timeElem.innerHTML = getTime(1);
            });
            $("#timeDiv").fadeIn("slow");
            set_time24 = false;
        }

        writeAllSettings();
    });


    // Display/Hide Favourites
    $('#displayFavourites').bind('change', function () {
        if ($(this).is(':checked')){
            $("#favouritesDiv").fadeIn("slow");
            set_favourites = true;
        }
        else{
            $("#favouritesDiv").fadeOut("slow");
            set_favourites = false;
        }
        writeAllSettings();
    });


    // Minimize/maximize todo
    $('#todoHeadingToggle').click(function () {
        $(this).fadeOut('fast', function () {
            $('#todoDiv').fadeIn('fast');
            set_expandTodo = true;
            writeAllSettings();
            $('#todoInput').focus();
        });
    });

    $('#todoToggleCancelSign').click(function () {
        $('#todoDiv').fadeOut('fast', function () {
            $('#todoHeadingToggle').fadeIn('fast');
            set_expandTodo = false;
            writeAllSettings();
        });
    });


    // Display/Hide Todos
    $('#displayTodo').bind('change', function () {
        if ($(this).is(':checked')) {
            // $("#todoDiv").fadeIn("slow");
            $("#todoHeadingToggle").fadeIn('slow');
            set_todo = true;
        }
        else {
            $("#todoDiv").fadeOut("slow");
            $("#todoHeadingToggle").fadeOut('slow');
            set_todo = false;
        }
        writeAllSettings();
    });


    // Display/Hide Weather
    $('#weatherToggle').bind('change', function () {
        if ($(this).is(':checked')) {
            $("#weatherDiv").fadeIn('slow');
            set_weather = true;
        }
        else {
            $("#weatherDiv").fadeOut('slow');
            set_weather = false;
        }
        writeAllSettings();
    });


    // Display/Hide Search
    $('#searchBoxToggle').bind('change', function () {
        if ($(this).is(':checked')) {
            $("#searchDiv").fadeIn('slow');
            set_search = true;
        }
        else {
            $("#searchDiv").fadeOut('slow');
            set_search = false;
        }
        writeAllSettings();
    });


    // Set Text background opacity
    // var opacity_all = false;

    // Method to read saved settings for storage. If nothing is saved, it is turned on by default
    // readBgSettings();


    // toggle opacity and save selection to local storage
    $("#bgOpacityToggle").bind('change', function () {
        if ($(this).is(':checked')) {
            set_opacity = true;
            $('.bgopacity').addClass("dark");
            console.log('opacity on');
        }
        else {
            set_opacity = false;
            $('.bgopacity').removeClass("dark");
            console.log('opcaity off');
        }
        writeAllSettings();
    });




    // Toggle Weather Scale
    $('#weatherScaleToggle').bind('change', function () {
        if ($(this).is(':checked')) {
            $('#weatherTemp').fadeOut('slow', function () {
                updateWeatherUI(true);
                $(this).fadeIn('slow');
                set_weather_scale_f = true;
                writeAllSettings();
            })
        }
        else {
            $('#weatherTemp').fadeOut('slow', function () {
                updateWeatherUI(false);
                $(this).fadeIn('slow');
                set_weather_scale_f = false;
                writeAllSettings();
            })
        }


    });



    // Display/Hide Weather Details
    $('#imperialScaleToggle').bind('change', function () {
        if ($(this).is(':checked')) {
            set_imperial = true;
        }
        else {
            set_imperial = false;
        }
        updateWeatherDetailsUI(set_imperial);
        writeAllSettings();
    });



    // focus inputbox when hovering
    $('#searchBtn').hover(function () {
        $('#searchboxinput').focus();
    })



    // Toggle Weather Details
    $('#weatherOuter').hover(
        // Mouse Enter
        function () {
            $( "#weatherDetails" ).animate({
                left: "2em",
            }, 100, function() {
                // Animation complete.
            });
        }
    );


    $('#weatherDetails').hover(
        // Mouse Enter
        function () {
        },
        // Mouse Leave
        function () {
            $( "#weatherDetails" ).animate({
                left: "25em",
            }, 500, function() {
                // Animation complete.
            });
        }
    );





///////////////////////////////////////////////////////////////////////
/////////////////////    SETTINGS TOGGLE  END   ///////////////////////
///////////////////////////////////////////////////////////////////////

























///////////////////////////////////////////////////////////////////////
///////////////////////    TODOS  START   /////////////////////////////
///////////////////////////////////////////////////////////////////////

    var todos = [];

    // Read todos, if there are todos already stored in the local storage
    readTodos();


    // Create and add event listener on clicking add todos button
    document.getElementById("addTodo").addEventListener("click", newTodo);

    // Add todo when Enter/Return is pressed
    document.getElementById('todoInput').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        // IF the code of rpessed key is equals to Return Key
        if (keyCode == '13') {
            //Add New Todo
            newTodo();
        }
    }

    // Method to add new todo
    // Returns Nothing
    // Update Todos and add new todo
    function newTodo() {
        var inputValue = document.getElementById("todoInput").value;
        // if input is empty
        if (inputValue === '') {
            // Disable button maybe?
            alertify.error('Todo is Empty');
        } else {
            // Push new todo to array
            todos.push(inputValue);
            // Update Todos UI
            populateTodos(todos);
            // Fix Scrolling Bug By Hiding/Showing the div
            $('#todoDiv').hide();
            $('#todoDiv').show();
            // Reset input's value
            document.getElementById("todoInput").value = '';
            // Update todos in local storage
            writeTodos(todos);
        }
        alertify.message('New Task Added');
    }


    // Method to write todos in local sync storage
    function writeTodos(data) {
        data = JSON.stringify(data);
        chrome.storage.sync.set({'todoSight1': data}, function () {
            console.log('Added');
        })
    }


    // Method to read todos from local storage
    function readTodos() {
        chrome.storage.sync.get(['todoSight1'], function (result) {
            if (Object.entries(result).length != 0) {
                for (var key in result) {
                    var temp = result[key].replace(/'/g, '"');
                    temp = JSON.parse(temp);
                    todos = temp;
                    populateTodos(todos);
                }
            } else {
            }
        });
    }


    // Method to populate Todos list. Generate and append li nodes
    // Returns Nothing
    // Update UI of todos
    function populateTodos(todo) {
        try {
            // Reset the todos list
            $("#todoList").empty();

            // get the list
            var ol = document.getElementById('todoList');
            // Iterate over all todos
            for (var i = 0; i < todo.length; i++) {
                // Create new li
                var li = document.createElement("li");
                // Create new p
                var p = document.createElement("p");
                // p = todo
                p.innerHTML = todo[i];
                // Assign class
                p.className = "text-color";
                // Append to list
                li.appendChild(p);
                // Create and append cancel sign
                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                li.appendChild(span);
                // Finally append li to list
                ol.appendChild(li);
            }

            // Click on a close button to hide the current list item
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    // Hide the canceled item
                    div.className = "hide";
                    // Remove canceled item for array
                    todos.splice(todos.indexOf(div.innerText.split("\u00D7")[0]), 1);
                    // Update Todos UI
                    populateTodos(todos);
                    // Fix Scrolling Bug By Hiding/Showing the div
                    $('#todoDiv').hide();
                    $('#todoDiv').show();
                    // Update todos in local storage
                    writeTodos(todos);
                    alertify.message('Task Completed &#10004;');
                }
            }
        } catch (e) {
        }
    }


///////////////////////////////////////////////////////////////////////
/////////////////////////    TODOS  END   /////////////////////////////
///////////////////////////////////////////////////////////////////////
















///////////////////////////////////////////////////////////////////////
/////////////////////////   SEARCH START  /////////////////////////////
///////////////////////////////////////////////////////////////////////


    $("#searchBtn").click(function(){
        searchQry()
    });

    // Search query when enter is pressed
    document.getElementById('searchboxinput').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        // IF the code of rpessed key is equals to Return Key
        if (keyCode == '13') {
            //Search Query
            searchQry();
        }
    }



    function searchQry() {
        var qry = $('#searchboxinput').val();
        if( qry  == ''){
            alertify.error('Field Empty! Please type something to search');
        }else
            window.location.replace('https://www.google.com/?#q=' + qry);
    }

///////////////////////////////////////////////////////////////////////
/////////////////////////   SEARCH END  ///////////////////////////////
///////////////////////////////////////////////////////////////////////









})();


$(function () {
    $("#todoDiv").niceScroll();

});
