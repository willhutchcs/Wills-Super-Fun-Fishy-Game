gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayGameObjects1= [];
gdjs.MenuCode.GDPlayGameObjects2= [];
gdjs.MenuCode.GDPlayGame2Objects1= [];
gdjs.MenuCode.GDPlayGame2Objects2= [];
gdjs.MenuCode.GDPlayBGObjects1= [];
gdjs.MenuCode.GDPlayBGObjects2= [];
gdjs.MenuCode.GDPlayBG2Objects1= [];
gdjs.MenuCode.GDPlayBG2Objects2= [];
gdjs.MenuCode.GDHighScoreTextObjects1= [];
gdjs.MenuCode.GDHighScoreTextObjects2= [];
gdjs.MenuCode.GDHighScoreText2Objects1= [];
gdjs.MenuCode.GDHighScoreText2Objects2= [];
gdjs.MenuCode.GDSpeechBubbleObjects1= [];
gdjs.MenuCode.GDSpeechBubbleObjects2= [];
gdjs.MenuCode.GDDescTextObjects1= [];
gdjs.MenuCode.GDDescTextObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBGObjects1Objects = Hashtable.newFrom({"PlayBG": gdjs.MenuCode.GDPlayBGObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBG2Objects1Objects = Hashtable.newFrom({"PlayBG2": gdjs.MenuCode.GDPlayBG2Objects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBGObjects1Objects = Hashtable.newFrom({"PlayBG": gdjs.MenuCode.GDPlayBGObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBG2Objects1Objects = Hashtable.newFrom({"PlayBG2": gdjs.MenuCode.GDPlayBG2Objects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBG"), gdjs.MenuCode.GDPlayBGObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBGObjects1Objects, runtimeScene, true, false);
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8429620);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG2"), gdjs.MenuCode.GDPlayBG2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBG2Objects1Objects, runtimeScene, true, false);
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8430484);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game2", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8431620);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighScoreText"), gdjs.MenuCode.GDHighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreText2"), gdjs.MenuCode.GDHighScoreText2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDHighScoreTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoreTextObjects1[i].setString("Fishy Frenzy High Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.MenuCode.GDHighScoreText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoreText2Objects1[i].setString("Time Ticking Terror High Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "opal東京 - Dire Dire Docks.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG"), gdjs.MenuCode.GDPlayBGObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBGObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescText"), gdjs.MenuCode.GDDescTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDDescTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDescTextObjects1[i].setString("Time Ticking Terror: Get as many fishies as you can in 60 seconds! Higher score is better.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG2"), gdjs.MenuCode.GDPlayBG2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayBG2Objects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DescText"), gdjs.MenuCode.GDDescTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDDescTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDescTextObjects1[i].setString("Fishy Frenzy: Get 50 fishies as fast as you can! Lower score is better.");
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayGameObjects1.length = 0;
gdjs.MenuCode.GDPlayGameObjects2.length = 0;
gdjs.MenuCode.GDPlayGame2Objects1.length = 0;
gdjs.MenuCode.GDPlayGame2Objects2.length = 0;
gdjs.MenuCode.GDPlayBGObjects1.length = 0;
gdjs.MenuCode.GDPlayBGObjects2.length = 0;
gdjs.MenuCode.GDPlayBG2Objects1.length = 0;
gdjs.MenuCode.GDPlayBG2Objects2.length = 0;
gdjs.MenuCode.GDHighScoreTextObjects1.length = 0;
gdjs.MenuCode.GDHighScoreTextObjects2.length = 0;
gdjs.MenuCode.GDHighScoreText2Objects1.length = 0;
gdjs.MenuCode.GDHighScoreText2Objects2.length = 0;
gdjs.MenuCode.GDSpeechBubbleObjects1.length = 0;
gdjs.MenuCode.GDSpeechBubbleObjects2.length = 0;
gdjs.MenuCode.GDDescTextObjects1.length = 0;
gdjs.MenuCode.GDDescTextObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
