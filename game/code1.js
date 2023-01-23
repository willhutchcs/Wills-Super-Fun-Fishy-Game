gdjs.Main_32GameCode = {};
gdjs.Main_32GameCode.GDFishObjects1_1final = [];

gdjs.Main_32GameCode.GDFishObjects1= [];
gdjs.Main_32GameCode.GDFishObjects2= [];
gdjs.Main_32GameCode.GDBackgroundObjects1= [];
gdjs.Main_32GameCode.GDBackgroundObjects2= [];
gdjs.Main_32GameCode.GDScoreTextObjects1= [];
gdjs.Main_32GameCode.GDScoreTextObjects2= [];
gdjs.Main_32GameCode.GDScoreBGObjects1= [];
gdjs.Main_32GameCode.GDScoreBGObjects2= [];
gdjs.Main_32GameCode.GDTimerObjects1= [];
gdjs.Main_32GameCode.GDTimerObjects2= [];

gdjs.Main_32GameCode.conditionTrue_0 = {val:false};
gdjs.Main_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition4IsTrue_0 = {val:false};
gdjs.Main_32GameCode.conditionTrue_1 = {val:false};
gdjs.Main_32GameCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition3IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition4IsTrue_1 = {val:false};


gdjs.Main_32GameCode.eventsList0 = function(runtimeScene) {

};gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32GameCode.GDFishObjects1});
gdjs.Main_32GameCode.eventsList1 = function(runtimeScene) {

};gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32GameCode.GDFishObjects1});
gdjs.Main_32GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32GameCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreBG"), gdjs.Main_32GameCode.GDScoreBGObjects1);
gdjs.Main_32GameCode.GDFishObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDFishObjects1Objects, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].addPolarForce(gdjs.randomFloatInRange(-(360), 360), 100, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreBGObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreBGObjects1[i].setOpacity(150);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "01364742.mp3", false, 80, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Main_32GameCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDTimerObjects1[i].setString("Sec left: " + gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer") - 60))));
}
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 60;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8416764);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "timer");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Post-Game", false);
}}

}


{


gdjs.Main_32GameCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32GameCode.GDFishObjects1);

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition0IsTrue_0;
gdjs.Main_32GameCode.condition0IsTrue_1.val = false;
gdjs.Main_32GameCode.condition1IsTrue_1.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDFishObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32GameCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Main_32GameCode.conditionTrue_1.val = true && gdjs.Main_32GameCode.condition0IsTrue_1.val && gdjs.Main_32GameCode.condition1IsTrue_1.val;
}
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8417444);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDFishObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Main_32GameCode.GDScoreTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].setPosition(gdjs.randomInRange(200, 1080),gdjs.randomInRange(100, 620));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].addPolarForce(gdjs.randomFloatInRange(-(360), 360), 30, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "9e6314ff5ebeaa2ae69347b277085c2aa4458f4ea898cddfe1ebce466a1dbc0d_Jump 1.aac", false, 70, 1);
}}

}


{

gdjs.Main_32GameCode.GDFishObjects1.length = 0;


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition0IsTrue_0;
gdjs.Main_32GameCode.GDFishObjects1_1final.length = 0;gdjs.Main_32GameCode.condition0IsTrue_1.val = false;
gdjs.Main_32GameCode.condition1IsTrue_1.val = false;
gdjs.Main_32GameCode.condition2IsTrue_1.val = false;
gdjs.Main_32GameCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32GameCode.GDFishObjects2);
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDFishObjects2.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDFishObjects2[i].getX() > 1270 ) {
        gdjs.Main_32GameCode.condition0IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDFishObjects2[k] = gdjs.Main_32GameCode.GDFishObjects2[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDFishObjects2.length = k;if( gdjs.Main_32GameCode.condition0IsTrue_1.val ) {
    gdjs.Main_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Main_32GameCode.GDFishObjects2.length;j<jLen;++j) {
        if ( gdjs.Main_32GameCode.GDFishObjects1_1final.indexOf(gdjs.Main_32GameCode.GDFishObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDFishObjects1_1final.push(gdjs.Main_32GameCode.GDFishObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32GameCode.GDFishObjects2);
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDFishObjects2.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDFishObjects2[i].getX() < 10 ) {
        gdjs.Main_32GameCode.condition1IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDFishObjects2[k] = gdjs.Main_32GameCode.GDFishObjects2[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDFishObjects2.length = k;if( gdjs.Main_32GameCode.condition1IsTrue_1.val ) {
    gdjs.Main_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Main_32GameCode.GDFishObjects2.length;j<jLen;++j) {
        if ( gdjs.Main_32GameCode.GDFishObjects1_1final.indexOf(gdjs.Main_32GameCode.GDFishObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDFishObjects1_1final.push(gdjs.Main_32GameCode.GDFishObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32GameCode.GDFishObjects2);
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDFishObjects2.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDFishObjects2[i].getY() > 710 ) {
        gdjs.Main_32GameCode.condition2IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDFishObjects2[k] = gdjs.Main_32GameCode.GDFishObjects2[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDFishObjects2.length = k;if( gdjs.Main_32GameCode.condition2IsTrue_1.val ) {
    gdjs.Main_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Main_32GameCode.GDFishObjects2.length;j<jLen;++j) {
        if ( gdjs.Main_32GameCode.GDFishObjects1_1final.indexOf(gdjs.Main_32GameCode.GDFishObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDFishObjects1_1final.push(gdjs.Main_32GameCode.GDFishObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32GameCode.GDFishObjects2);
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDFishObjects2.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDFishObjects2[i].getY() < 10 ) {
        gdjs.Main_32GameCode.condition3IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDFishObjects2[k] = gdjs.Main_32GameCode.GDFishObjects2[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDFishObjects2.length = k;if( gdjs.Main_32GameCode.condition3IsTrue_1.val ) {
    gdjs.Main_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Main_32GameCode.GDFishObjects2.length;j<jLen;++j) {
        if ( gdjs.Main_32GameCode.GDFishObjects1_1final.indexOf(gdjs.Main_32GameCode.GDFishObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDFishObjects1_1final.push(gdjs.Main_32GameCode.GDFishObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Main_32GameCode.GDFishObjects1_1final, gdjs.Main_32GameCode.GDFishObjects1);
}
}
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDFishObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Main_32GameCode.GDScoreTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].setPosition(gdjs.randomInRange(200, 1080),gdjs.randomInRange(100, 620));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFishObjects1[i].addPolarForce(gdjs.randomFloatInRange(-(360), 360), 30, 1);
}
}}

}


};

gdjs.Main_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32GameCode.GDFishObjects1.length = 0;
gdjs.Main_32GameCode.GDFishObjects2.length = 0;
gdjs.Main_32GameCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32GameCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32GameCode.GDScoreTextObjects1.length = 0;
gdjs.Main_32GameCode.GDScoreTextObjects2.length = 0;
gdjs.Main_32GameCode.GDScoreBGObjects1.length = 0;
gdjs.Main_32GameCode.GDScoreBGObjects2.length = 0;
gdjs.Main_32GameCode.GDTimerObjects1.length = 0;
gdjs.Main_32GameCode.GDTimerObjects2.length = 0;

gdjs.Main_32GameCode.eventsList2(runtimeScene);

return;

}

gdjs['Main_32GameCode'] = gdjs.Main_32GameCode;
