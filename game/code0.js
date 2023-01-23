gdjs.Main_32Game2Code = {};
gdjs.Main_32Game2Code.GDFishObjects1= [];
gdjs.Main_32Game2Code.GDFishObjects2= [];
gdjs.Main_32Game2Code.GDBackgroundObjects1= [];
gdjs.Main_32Game2Code.GDBackgroundObjects2= [];
gdjs.Main_32Game2Code.GDScoreTextObjects1= [];
gdjs.Main_32Game2Code.GDScoreTextObjects2= [];
gdjs.Main_32Game2Code.GDScoreBGObjects1= [];
gdjs.Main_32Game2Code.GDScoreBGObjects2= [];
gdjs.Main_32Game2Code.GDTimerObjects1= [];
gdjs.Main_32Game2Code.GDTimerObjects2= [];

gdjs.Main_32Game2Code.conditionTrue_0 = {val:false};
gdjs.Main_32Game2Code.condition0IsTrue_0 = {val:false};
gdjs.Main_32Game2Code.condition1IsTrue_0 = {val:false};
gdjs.Main_32Game2Code.condition2IsTrue_0 = {val:false};
gdjs.Main_32Game2Code.conditionTrue_1 = {val:false};
gdjs.Main_32Game2Code.condition0IsTrue_1 = {val:false};
gdjs.Main_32Game2Code.condition1IsTrue_1 = {val:false};
gdjs.Main_32Game2Code.condition2IsTrue_1 = {val:false};


gdjs.Main_32Game2Code.eventsList0 = function(runtimeScene) {

};gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32Game2Code.GDFishObjects1});
gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32Game2Code.GDFishObjects1});
gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32Game2Code.GDFishObjects1});
gdjs.Main_32Game2Code.eventsList1 = function(runtimeScene) {

};gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32Game2Code.GDFishObjects1});
gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32Game2Code.GDFishObjects1});
gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.Main_32Game2Code.GDFishObjects1});
gdjs.Main_32Game2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32Game2Code.eventsList0(runtimeScene);
}


{


gdjs.Main_32Game2Code.condition0IsTrue_0.val = false;
{
gdjs.Main_32Game2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32Game2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreBG"), gdjs.Main_32Game2Code.GDScoreBGObjects1);
gdjs.Main_32Game2Code.GDFishObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(50, 670), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(50, 670), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(50, 670), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Main_32Game2Code.GDScoreBGObjects1.length ;i < len;++i) {
    gdjs.Main_32Game2Code.GDScoreBGObjects1[i].setOpacity(150);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "01364742.mp3", false, 80, 1);
}}

}


{


gdjs.Main_32Game2Code.condition0IsTrue_0.val = false;
{
gdjs.Main_32Game2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.Main_32Game2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(10000);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Main_32Game2Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Main_32Game2Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Main_32Game2Code.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer")))));
}
}}

}


{


gdjs.Main_32Game2Code.condition0IsTrue_0.val = false;
{
gdjs.Main_32Game2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 50;
}if (gdjs.Main_32Game2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer"))));
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "timer");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Post-Game2", false);
}}

}


{


gdjs.Main_32Game2Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32Game2Code.GDFishObjects1);

gdjs.Main_32Game2Code.condition0IsTrue_0.val = false;
gdjs.Main_32Game2Code.condition1IsTrue_0.val = false;
{
{gdjs.Main_32Game2Code.conditionTrue_1 = gdjs.Main_32Game2Code.condition0IsTrue_0;
gdjs.Main_32Game2Code.condition0IsTrue_1.val = false;
gdjs.Main_32Game2Code.condition1IsTrue_1.val = false;
{
gdjs.Main_32Game2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Game2Code.condition0IsTrue_1.val ) {
{
gdjs.Main_32Game2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Main_32Game2Code.conditionTrue_1.val = true && gdjs.Main_32Game2Code.condition0IsTrue_1.val && gdjs.Main_32Game2Code.condition1IsTrue_1.val;
}
}if ( gdjs.Main_32Game2Code.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Game2Code.conditionTrue_1 = gdjs.Main_32Game2Code.condition1IsTrue_0;
gdjs.Main_32Game2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7345780);
}
}}
if (gdjs.Main_32Game2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Game2Code.GDFishObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Main_32Game2Code.GDScoreTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Main_32Game2Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32Game2Code.GDScoreTextObjects1[i].setString("Fishies Left: " + gdjs.evtTools.common.toString(50 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Main_32Game2Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32Game2Code.GDFishObjects1[i].setPosition(gdjs.randomInRange(100, 1180),gdjs.randomInRange(50, 670));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "9e6314ff5ebeaa2ae69347b277085c2aa4458f4ea898cddfe1ebce466a1dbc0d_Jump 1.aac", false, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.Main_32Game2Code.GDFishObjects1);

gdjs.Main_32Game2Code.condition0IsTrue_0.val = false;
gdjs.Main_32Game2Code.condition1IsTrue_0.val = false;
{
gdjs.Main_32Game2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects, gdjs.Main_32Game2Code.mapOfGDgdjs_46Main_9532Game2Code_46GDFishObjects1Objects, false, runtimeScene, true);
}if ( gdjs.Main_32Game2Code.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Game2Code.conditionTrue_1 = gdjs.Main_32Game2Code.condition1IsTrue_0;
gdjs.Main_32Game2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7252444);
}
}}
if (gdjs.Main_32Game2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Game2Code.GDFishObjects1 */
{for(var i = 0, len = gdjs.Main_32Game2Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.Main_32Game2Code.GDFishObjects1[i].setPosition(gdjs.randomInRange(100, 1180),gdjs.randomInRange(50, 670));
}
}}

}


};

gdjs.Main_32Game2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32Game2Code.GDFishObjects1.length = 0;
gdjs.Main_32Game2Code.GDFishObjects2.length = 0;
gdjs.Main_32Game2Code.GDBackgroundObjects1.length = 0;
gdjs.Main_32Game2Code.GDBackgroundObjects2.length = 0;
gdjs.Main_32Game2Code.GDScoreTextObjects1.length = 0;
gdjs.Main_32Game2Code.GDScoreTextObjects2.length = 0;
gdjs.Main_32Game2Code.GDScoreBGObjects1.length = 0;
gdjs.Main_32Game2Code.GDScoreBGObjects2.length = 0;
gdjs.Main_32Game2Code.GDTimerObjects1.length = 0;
gdjs.Main_32Game2Code.GDTimerObjects2.length = 0;

gdjs.Main_32Game2Code.eventsList2(runtimeScene);

return;

}

gdjs['Main_32Game2Code'] = gdjs.Main_32Game2Code;
